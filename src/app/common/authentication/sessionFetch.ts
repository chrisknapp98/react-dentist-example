"use client";

// Read the current token each time: the backend rotates it on login, including in other tabs.
export async function sessionFetch(url: string, options: RequestInit = {}) {
  const session = await fetch("/api/auth/validate", { cache: "no-store" });
  if (session.status !== 401 && !session.ok) throw new Error("Session service unavailable");
  const { csrfToken } = await session.json();
  if (typeof csrfToken !== "string") throw new Error("Missing CSRF token");
  const headers = new Headers(options.headers);
  headers.set("X-CSRFToken", csrfToken);
  return fetch(url, { ...options, headers, credentials: "same-origin" });
}
