"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EyeIcon from "@/icons/eye.svg";
import EyeOffIcon from "@/icons/eye-off.svg";
import { sessionFetch } from "../../common/authentication/sessionFetch";
import { Button } from "../../common/button/button";

export default function PracticeLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
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
    if (isLoggingIn) return;
    setIsLoggingIn(true);
    setError("");

    try {
      const res = await sessionFetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        router.push("/admin");
        return;
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
    setIsLoggingIn(false);
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
            Praxisverwaltung
          </p>
          <h1 className="mt-2 text-3xl font-light text-textBlue">Anmeldung</h1>
          <p className="mt-3 text-sm text-textGrey/70">
            Bitte Benutzername und Passwort eingeben, um fortzufahren.
          </p>

          <form
            className="mt-8 space-y-4"
            aria-busy={isLoggingIn}
            onSubmit={(event) => {
              event.preventDefault();
              handleLogin();
            }}
          >
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-textGrey" htmlFor="admin-username">
                Benutzername
              </label>
              <input
                id="admin-username"
                name="username"
                autoComplete="username"
                  disabled={isLoggingIn}
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="w-full rounded-2xl border border-practiceGrey/30 bg-white px-4 py-3 text-base text-textGrey shadow-sm outline-none transition focus:border-practiceRed/60 focus:ring-2 focus:ring-practiceRed/20"
              />
            </div>
            <div className="space-y-1.5">
              <label
                className="block text-sm font-medium text-textGrey"
                htmlFor="admin-password"
              >
                Passwort
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  disabled={isLoggingIn}
                  required
                  placeholder="Passwort eingeben"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-practiceGrey/30 bg-white py-3 pl-4 pr-14 text-base text-textGrey shadow-sm outline-none transition focus:border-practiceRed/60 focus:ring-2 focus:ring-practiceRed/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  aria-label={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                  aria-controls="admin-password"
                  title={showPassword ? "Passwort verbergen" : "Passwort anzeigen"}
                  className="absolute inset-y-1 right-1 flex w-11 items-center justify-center rounded-xl text-textGrey/60 transition hover:bg-practiceGrey/10 hover:text-textBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-practiceRed"
                >
                  {showPassword ? (
                    <EyeOffIcon className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <EyeIcon className="h-5 w-5" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isLoggingIn}
                className="w-full text-sm font-semibold shadow-lg shadow-practiceRed/30"
              >
                <span className="flex items-center justify-center gap-2" role="status" aria-live="polite">
                  {isLoggingIn && (
                    <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent motion-reduce:animate-none" />
                  )}
                  {isLoggingIn ? "Anmeldung läuft…" : "Anmelden"}
                </span>
              </Button>
            </div>
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
