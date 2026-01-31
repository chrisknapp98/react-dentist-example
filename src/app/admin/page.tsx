"use client";
import Head from "next/head";

import { useMemo, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AnnouncementDTO } from "../api/announcements/announcementDTO";
import { RecentNewsFrame } from "../comingSoon/recentNewsFrame";
import { ContactInformation } from "../common/contactInformation/contactInformation";
import { renderMessageWithLinks } from "../common/text/renderMessageWithLinks";
import { Button } from "../common/button/button";

export default function AdminPage() {
  const [message, setMessage] = useState("");
  const [announcements, setAnnouncements] = useState<AnnouncementDTO[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [previewOnlyCurrent, setPreviewOnlyCurrent] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const announcementsRef = useRef<AnnouncementDTO[]>([]);

  const fetchAnnouncements = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch("/api/announcements");
      const data = await res.json();
      if (data?.error) return;
      setAnnouncements(data ?? []);
    } finally {
      setTimeout(() => setIsRefreshing(false), 500);
    }
  };

  useEffect(() => {
    announcementsRef.current = announcements;
  }, [announcements]);

  useEffect(() => {
    async function checkAuth() {
      const res = await fetch("/api/auth/validate");
      const data = await res.json();

      if (data.valid) {
        setIsAuthenticated(true);
        await fetchAnnouncements();
      } else {
        router.push("/admin/login");
      }
    }

    checkAuth();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return alert("Bitte füllen Sie das Feld aus.");
    if (!window.confirm("Neue Meldung jetzt veröffentlichen?")) return;

    const res = await fetch("/api/announcements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!res.ok) return;
    const updatedAnnouncements: AnnouncementDTO[] = await res.json();
    setAnnouncements(() => updatedAnnouncements);
    setMessage("");
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Diese Meldung wirklich löschen?")) return;
    const previous = announcementsRef.current;
    setAnnouncements((prev) => prev.filter((a) => a.id !== id));

    try {
      const res = await fetch(`/api/announcements?id=${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      const updatedAnnouncements: AnnouncementDTO[] = await res.json();
      setAnnouncements(() => updatedAnnouncements);
    } catch {
      setAnnouncements(previous);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const moveAnnouncement = async (
    fromIndex: number,
    direction: "up" | "down",
  ) => {
    const targetIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;
    if (targetIndex < 0 || targetIndex >= announcements.length) return;
    const confirmText =
      direction === "up"
        ? "Meldung nach oben verschieben?"
        : "Meldung nach unten verschieben?";
    if (!window.confirm(confirmText)) return;

    const previous = announcementsRef.current;
    const next = [...announcements];
    const [moved] = next.splice(fromIndex, 1);
    next.splice(targetIndex, 0, moved);
    setAnnouncements(() => next);

    try {
      const res = await fetch("/api/announcements", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderedIds: next.map((item) => item.id) }),
      });
      if (!res.ok) throw new Error("Reorder failed");
      const updatedAnnouncements: AnnouncementDTO[] = await res.json();
      setAnnouncements(() => updatedAnnouncements);
    } catch {
      setAnnouncements(previous);
    }
  };

  const insertAtCursor = (text: string) => {
    const textarea = messageRef.current;
    if (!textarea) {
      setMessage((prev) => `${prev}${text}`);
      return;
    }
    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? textarea.value.length;
    const nextValue = `${message.slice(0, start)}${text}${message.slice(end)}`;
    setMessage(nextValue);
    requestAnimationFrame(() => {
      textarea.focus();
      const nextCursor = start + text.length;
      textarea.setSelectionRange(nextCursor, nextCursor);
    });
  };
  const previewItems = useMemo(() => {
    if (!message) return announcements;
    return [
      { id: "draft", message, date: new Date().toISOString() },
      ...announcements,
    ];
  }, [message, announcements]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f2f4] via-white to-[#f3f3f6] text-textGrey">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-practiceGrey">
              Adminbereich
            </p>
            <h1 className="mt-2 text-3xl font-light text-textBlue sm:text-4xl">
              Aktuelles
            </h1>
            <p className="mt-2 text-sm text-textGrey/80">
              Kurze Hinweise für die Startseite veröffentlichen.
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-full border border-practiceGrey/40 px-5 py-2 text-sm font-medium text-practiceGrey transition hover:border-practiceGrey hover:bg-white"
          >
            Abmelden
          </button>
        </div>
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-practiceGrey/20 bg-white/70 px-5 py-3 text-xs text-textGrey/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Hinweis: Aktualisierungen können einige Sekunden bis Minuten dauern.
            Bitte jeweils nur eine Änderung durchführen und warten, bis sie im
            Backend verarbeitet wurde.
          </p>
          <button
            type="button"
            onClick={fetchAnnouncements}
            className="relative inline-flex min-w-[140px] items-center justify-center rounded-full border border-practiceGrey/40 px-4 py-1.5 text-xs font-medium text-textGrey transition hover:border-practiceGrey hover:bg-white disabled:opacity-60"
            disabled={isRefreshing}
          >
            <span
              className={`transition-opacity duration-200 ${
                isRefreshing ? "opacity-0" : "opacity-100"
              }`}
            >
              Aktualisieren
            </span>
            <span
              className={`absolute inline-flex h-4 w-4 items-center justify-center transition-all duration-200 ${
                isRefreshing ? "opacity-100" : "opacity-0"
              }`}
            >
              <span className="h-3.5 w-3.5 rounded-full border-2 border-practiceGrey/60 border-t-transparent animate-spin" />
            </span>
          </button>
        </div>

        <div className="flex justify-center">
          <div className="flex w-full max-w-5xl flex-col gap-6 md:gap-10 items-stretch justify-center py-10 lg:flex-row">
            <div className="w-full rounded-3xl bg-white p-8 shadow-[0_20px_60px_-35px_rgba(65,71,125,0.6)] ring-1 ring-black/5 lg:w-1/2 lg:flex-none lg:self-stretch">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-textBlue">
                  Neue Meldung
                </h2>
                <span className="rounded-full bg-practiceSkin/40 px-3 py-1 text-xs font-medium text-textGrey">
                  {announcements.length} aktiv
                </span>
              </div>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <label
                  className="block text-sm font-medium text-textGrey"
                  htmlFor="announcement-message"
                >
                  Nachricht
                </label>
                <textarea
                  id="announcement-message"
                  ref={messageRef}
                  placeholder="Beispiel: Am Freitag, 2. Februar, bleibt die Praxis geschlossen."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full resize-none rounded-2xl border border-practiceGrey/30 bg-white px-4 py-3 text-base text-textGrey shadow-sm outline-none transition focus:border-practiceRed/60 focus:ring-2 focus:ring-practiceRed/20"
                />
                <div className="flex flex-wrap gap-2 text-xs text-textGrey">
                  <span className="mr-2 font-medium text-textGrey/70 flex items-center">
                    Schnell einfügen:
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      insertAtCursor(
                        `[${ContactInformation.email}](${ContactInformation.emailLink})`,
                      )
                    }
                    className="rounded-full border border-practiceGrey/40 px-3 py-1.5 transition hover:border-practiceGrey hover:bg-practiceGrey/10"
                  >
                    E-Mail
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      insertAtCursor(
                        `[${ContactInformation.telephoneDisplay}](${ContactInformation.telephoneLink})`,
                      )
                    }
                    className="rounded-full border border-practiceGrey/40 px-3 py-1.5 transition hover:border-practiceGrey hover:bg-practiceGrey/10"
                  >
                    Telefon
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      insertAtCursor(
                        `[${ContactInformation.emergencyServiceDisplayWebsite}](${ContactInformation.emergencyServiceWebsite})`,
                      )
                    }
                    className="rounded-full border border-practiceGrey/40 px-3 py-1.5 transition hover:border-practiceGrey hover:bg-practiceGrey/10"
                  >
                    Notdienst
                  </button>
                  <button
                    type="button"
                    onClick={() => insertAtCursor("[sichtbarer Text](link)")}
                    className="rounded-full border border-practiceGrey/40 px-3 py-1.5 transition hover:border-practiceGrey hover:bg-practiceGrey/10"
                  >
                    Link
                  </button>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-textGrey/60">
                    Kurz und klar für Patient:innen formulieren.
                  </p>
                                <Button type="submit" className="text-sm font-semibold shadow-lg shadow-practiceRed/30">
                                    Veröffentlichen
                                </Button>
                </div>
              </form>
            </div>

            <div className="flex w-full flex-col items-start gap-4 lg:w-1/2 lg:flex-none lg:self-stretch">
              <div className="flex w-full items-center justify-between">
                <h3 className="text-xs uppercase tracking-[0.3em] text-practiceGrey">
                  Vorschau
                </h3>
                <label className="flex items-center gap-2 text-xs text-textGrey">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-practiceGrey/40 text-practiceRed focus:ring-practiceRed/30"
                    checked={previewOnlyCurrent}
                    onChange={(event) =>
                      setPreviewOnlyCurrent(event.target.checked)
                    }
                  />
                  Nur aktuelle Meldung
                </label>
              </div>
              <div className="h-full w-full flex items-stretch">
                <RecentNewsFrame
                  announcements={previewItems}
                  showOnlyCurrent={previewOnlyCurrent}
                  autoAdvanceMs={5000}
                  frameClassName="w-full max-w-none h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-textBlue">
              Aktive Meldungen
            </h2>
            <span className="text-xs text-textGrey/60">
              {announcements.length === 0
                ? "Keine Meldungen"
                : "Reihenfolge anpassbar"}
            </span>
          </div>
          {announcements.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-dashed border-practiceGrey/40 bg-white/70 p-10 text-center text-sm text-textGrey/70">
              Noch keine Meldungen. Lege oben die erste Meldung an.
            </div>
          ) : (
            <ul className="mt-6 space-y-4">
              {announcements.map((a, index) => (
                <li
                  key={a.id}
                  className="flex flex-col gap-4 rounded-3xl border border-practiceGrey/20 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-practiceGrey">
                      {new Date(a.date).toLocaleString("de-DE")}
                    </p>
                    <p className="mt-2 text-base text-textGrey">
                      {renderMessageWithLinks(a.message, {
                        linkClassName: "underline",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => moveAnnouncement(index, "up")}
                      disabled={index === 0}
                      className="rounded-full border border-practiceGrey/40 px-3 py-2 text-xs font-medium text-practiceGrey transition hover:border-practiceGrey hover:bg-practiceGrey/10 disabled:opacity-40"
                    >
                      Nach oben
                    </button>
                    <button
                      onClick={() => moveAnnouncement(index, "down")}
                      disabled={index === announcements.length - 1}
                      className="rounded-full border border-practiceGrey/40 px-3 py-2 text-xs font-medium text-practiceGrey transition hover:border-practiceGrey hover:bg-practiceGrey/10 disabled:opacity-40"
                    >
                      Nach unten
                    </button>
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="rounded-full border border-practiceRed/40 px-3 py-2 text-xs font-medium text-practiceRed transition hover:border-practiceRed hover:bg-practiceRed/10"
                    >
                      Löschen
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
