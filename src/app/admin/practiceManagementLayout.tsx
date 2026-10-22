"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { sessionFetch } from "../common/authentication/sessionFetch";
import { PracticeManagementHeader } from "./practiceManagementHeader";

export function PracticeManagementLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/admin/login") return children;
  return <AuthenticatedPracticeManagementLayout>{children}</AuthenticatedPracticeManagementLayout>;
}

function AuthenticatedPracticeManagementLayout({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    async function checkSession() {
      try {
        const response = await fetch("/api/auth/validate", { cache: "no-store", signal: controller.signal });
        if (response.status === 401) {
          setUsername(null);
          router.replace("/admin/login");
          return;
        }
        if (!response.ok) throw new Error("Session unavailable");
        const session = await response.json();
        if (!session.valid) {
          setUsername(null);
          router.replace("/admin/login");
          return;
        }
        setUsername(typeof session.username === "string" ? session.username : "");
        setError("");
      } catch {
        if (!controller.signal.aborted) setError("Die Anmeldung konnte nicht überprüft werden. Bitte laden Sie die Seite erneut.");
      }
    }
    checkSession();
    return () => controller.abort();
  }, [pathname, router]);

  const logout = async () => {
    if (isLoggingOut) return;
    setIsLoggingOut(true);
    setError("");
    try {
      const response = await sessionFetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) throw new Error("Logout failed");
      setUsername(null);
      router.replace("/admin/login");
    } catch {
      setError("Abmeldung fehlgeschlagen. Bitte versuchen Sie es erneut.");
      setIsLoggingOut(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f7f2f4] via-white to-[#f3f3f6] text-textGrey">
      {username !== null && (
        <PracticeManagementHeader username={username} isLoggingOut={isLoggingOut} onLogout={logout} />
      )}
      {error && (
        <div role="alert" className="mx-auto max-w-6xl px-6 pt-6 text-sm text-red-700">
          {error}
          {username === null && <button type="button" onClick={() => window.location.reload()} className="ml-3 rounded underline">Erneut versuchen</button>}
        </div>
      )}
      {username !== null ? children : !error && <p role="status" className="px-6 py-12 text-center text-sm">Anmeldung wird überprüft…</p>}
    </div>
  );
}
