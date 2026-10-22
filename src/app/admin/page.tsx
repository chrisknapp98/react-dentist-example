"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ChevronUpIcon from "@/icons/chevron-up.svg";
import ChevronDownIcon from "@/icons/chevron-down.svg";
import { AnnouncementDTO } from "../api/announcements/announcementDTO";
import { RecentNewsFrame } from "../home/recentNewsFrame";
import { ContactInformation } from "../common/contactInformation/contactInformation";
import { renderMessageWithLinks } from "../common/text/renderMessageWithLinks";
import { sessionFetch } from "../common/authentication/sessionFetch";
import { ConfirmationDialog } from "./confirmationDialog";
import { Button } from "../common/button/button";

type Feedback = {
  kind: "success" | "error";
  message: string;
};

export default function PracticeDashboard() {
  const [message, setMessage] = useState("");
  const [announcements, setAnnouncements] = useState<AnnouncementDTO[]>([]);
  const [showAllAnnouncements, setShowAllAnnouncements] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [confirmState, setConfirmState] = useState<{
    message: string;
    onConfirm: () => void | Promise<void>;
  } | null>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [feedback, setFeedback] = useState<Feedback | null>(null);

  const fetchAnnouncements = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/announcements");
      if (!res.ok) throw new Error("Failed to load announcements");
      const data = await res.json();
      if (data?.error) throw new Error("Failed to load announcements");
      setAnnouncements(data ?? []);
    } catch {
      setFeedback({
        kind: "error",
        message:
          "Aktuelle Meldungen konnten nicht geladen werden. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setFeedback({
        kind: "error",
        message: "Bitte geben Sie eine Meldung ein.",
      });
      return;
    }
    setIsConfirmOpen(true);
    setConfirmState({
      message: "Neue Meldung jetzt veröffentlichen?",
      onConfirm: submitAnnouncement,
    });
  };

  const submitAnnouncement = async () => {
    setIsSaving(true);
    try {
      const res = await sessionFetch("/api/announcements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (!res.ok) throw new Error("Failed to publish announcement");
      setAnnouncements(await res.json());

      setMessage("");
      setFeedback({
        kind: "success",
        message:
          "Meldung veröffentlicht.",
      });
    } catch {
      setFeedback({
        kind: "error",
        message:
          "Die Meldung konnte nicht veröffentlicht werden. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = (id: string) => {
    setIsConfirmOpen(true);
    setConfirmState({
      message: "Diese Meldung wirklich löschen?",
      onConfirm: () => deleteAnnouncement(id),
    });
  };

  const deleteAnnouncement = async (id: string) => {
    setIsSaving(true);

    try {
      const res = await sessionFetch(`/api/announcements?id=${id}`, {
        method: "DELETE",
      });
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (!res.ok) throw new Error("Delete failed");
      setAnnouncements(await res.json());
      setFeedback({
        kind: "success",
        message:
          "Meldung gelöscht.",
      });
    } catch {
      setFeedback({
        kind: "error",
        message:
          "Die Meldung konnte nicht gelöscht werden. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const moveAnnouncement = (fromIndex: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;
    if (targetIndex < 0 || targetIndex >= announcements.length) return;
    const confirmText =
      direction === "up"
        ? "Meldung nach oben verschieben?"
        : "Meldung nach unten verschieben?";
    setIsConfirmOpen(true);
    setConfirmState({
      message: confirmText,
      onConfirm: () => performMove(fromIndex, direction),
    });
  };

  const performMove = async (fromIndex: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? fromIndex - 1 : fromIndex + 1;
    if (targetIndex < 0 || targetIndex >= announcements.length) return;

    const next = [...announcements];
    const [moved] = next.splice(fromIndex, 1);
    next.splice(targetIndex, 0, moved);
    setIsSaving(true);

    try {
      const res = await sessionFetch("/api/announcements", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderedIds: next.map((item) => item.id) }),
      });
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      if (!res.ok) throw new Error("Reorder failed");
      setAnnouncements(await res.json());
      setFeedback({
        kind: "success",
        message:
          "Reihenfolge gespeichert.",
      });
    } catch {
      setFeedback({
        kind: "error",
        message:
          "Die Reihenfolge konnte nicht gespeichert werden. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setIsSaving(false);
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

  const confirmAction = async () => {
    const action = confirmState?.onConfirm;
    setIsConfirmOpen(false);
    if (action) await action();
  };

  return (
    <div>
      <ConfirmationDialog
        open={isConfirmOpen}
        message={confirmState?.message ?? ""}
        onCancel={() => setIsConfirmOpen(false)}
        onConfirm={confirmAction}
        disabled={isSaving}
      />
      <div className="mx-auto max-w-6xl px-6 pb-12 pt-6 sm:pt-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-light text-textBlue sm:mt-2 sm:text-4xl">
              Aktuelles
            </h1>
            <p className="mt-2 text-sm text-textGrey/80">
              Kurze Hinweise für die Startseite veröffentlichen.
            </p>
          </div>
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
                  <Button
                    type="submit"
                    disabled={isSaving}
                    className="text-sm font-semibold shadow-lg shadow-practiceRed/30"
                  >
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
                    checked={showAllAnnouncements}
                    onChange={(event) =>
                      setShowAllAnnouncements(event.target.checked)
                    }
                  />
                  Alle Meldungen anzeigen
                </label>
              </div>
              <div className="h-full w-full flex items-stretch">
                <RecentNewsFrame
                  announcements={previewItems}
                  showOnlyCurrent={!showAllAnnouncements}
                  autoAdvanceMs={5000}
                  frameClassName="w-full max-w-none h-full"
                  isLoading={isLoading}
                />
              </div>
            </div>
          </div>
        </div>

        {feedback ? (
          <div
            role="status"
            aria-live="polite"
            className={`rounded-xl px-5 py-3 text-sm ${
              feedback.kind === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-700"
            }`}
          >
            {feedback.message}
          </div>
        ) : null}

        <div className="mt-8 space-y-6">
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
            <ol className="mt-6 space-y-4">
              {announcements.map((a, index) => (
                <li
                  key={a.id}
                  className="flex flex-col gap-4 rounded-3xl border border-practiceGrey/20 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <span aria-label={`Position ${index + 1}`} className="w-6 shrink-0 text-center text-base font-medium tabular-nums text-practiceRed">
                      {index + 1}
                    </span>
                    <div className="min-w-0 break-words">
                    <p className="text-xs uppercase tracking-[0.22em] text-practiceGrey">
                      {new Date(a.date).toLocaleString("de-DE")}
                    </p>
                    <p className="mt-2 text-base text-textGrey">
                      {renderMessageWithLinks(a.message, {
                        linkClassName: "underline",
                      })}
                    </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      aria-label={`Meldung ${index + 1} nach oben verschieben`}
                      title="Nach oben verschieben"
                      onClick={() => moveAnnouncement(index, "up")}
                      disabled={isSaving || index === 0}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-practiceGrey/40 text-practiceGrey transition enabled:hover:border-practiceGrey enabled:hover:bg-practiceGrey/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practiceRed disabled:opacity-40"
                    >
                      <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      aria-label={`Meldung ${index + 1} nach unten verschieben`}
                      title="Nach unten verschieben"
                      onClick={() => moveAnnouncement(index, "down")}
                      disabled={isSaving || index === announcements.length - 1}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-practiceGrey/40 text-practiceGrey transition enabled:hover:border-practiceGrey enabled:hover:bg-practiceGrey/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practiceRed disabled:opacity-40"
                    >
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    </div>
                    <button
                      onClick={() => handleDelete(a.id)}
                      disabled={isSaving}
                      className="rounded-full border border-practiceRed/40 px-3 py-2 text-xs font-medium text-practiceRed transition hover:border-practiceRed hover:bg-practiceRed/10"
                    >
                      Löschen
                    </button>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </div>
  );
}
