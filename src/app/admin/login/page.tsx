"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { sessionFetch } from "../../common/authentication/sessionFetch";
import { Button } from "../../common/button/button";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/auth/validate");
        if (res.status !== 401 && !res.ok) throw new Error("Session service unavailable");
        const data = await res.json();
        if (data.valid) router.push("/admin");
      } catch {
        setError("Die Anmeldung ist momentan nicht verfügbar.");
      }
    }
    checkAuth();
  }, [router]);
  const handleLogin = async () => {
    setError("");

    try {
      const res = await sessionFetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin");
      } else if (res.status === 429) {
        setError("Zu viele Anmeldeversuche. Bitte warten Sie einige Minuten und versuchen Sie es erneut.");
      } else if (res.status >= 500) {
        setError("Die Anmeldung ist momentan nicht verfügbar. Bitte versuchen Sie es später erneut.");
      } else {
        setError("Benutzername oder Passwort ist falsch");
      }
    } catch {
      setError("Keine Verbindung zum Server. Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f2f4] via-white to-[#f3f3f6] text-textGrey">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <div className="mb-3 text-xs text-textGrey/70">
            <Link href="/" className="underline">
              zur Startseite
            </Link>
          </div>
        </div>
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-[0_25px_70px_-40px_rgba(65,71,125,0.6)] ring-1 ring-black/5">
          <p className="text-xs uppercase tracking-[0.3em] text-practiceGrey">
            Adminbereich
          </p>
          <h1 className="mt-2 text-3xl font-light text-textBlue">Anmeldung</h1>
          <p className="mt-3 text-sm text-textGrey/70">
            Bitte Benutzername und Passwort eingeben, um fortzufahren.
          </p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              handleLogin();
            }}
          >
            <label className="block text-sm font-medium text-textGrey" htmlFor="admin-username">
              Benutzername
            </label>
            <input
              id="admin-username"
              name="username"
              autoComplete="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="w-full rounded-2xl border border-practiceGrey/30 bg-white px-4 py-3 text-base text-textGrey shadow-sm outline-none transition focus:border-practiceRed/60 focus:ring-2 focus:ring-practiceRed/20"
            />
            <label
              className="block text-sm font-medium text-textGrey"
              htmlFor="admin-password"
            >
              Passwort
            </label>
            <input
              id="admin-password"
              type="password"
              name="password"
              autoComplete="current-password"
              required
              placeholder="Passwort eingeben"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-practiceGrey/30 bg-white px-4 py-3 text-base text-textGrey shadow-sm outline-none transition focus:border-practiceRed/60 focus:ring-2 focus:ring-practiceRed/20"
            />
            <Button
              type="submit"
              className="mt-2 w-full text-sm font-semibold shadow-lg shadow-practiceRed/30"
            >
              Anmelden
            </Button>
          </form>

          {error && (
            <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-xs text-red-700">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
