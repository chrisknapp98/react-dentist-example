"use client";

import type { Store } from "../domain/store";

export class BrowserCookieStore implements Store {
  async getItem(key: string): Promise<string | null> {
    const cookie = document.cookie
      .split(";")
      .map((value) => value.trim())
      .find((value) => value.startsWith(`${key}=`));

    return cookie ? decodeURIComponent(cookie.slice(key.length + 1)) : null;
  }

  async setItem(
    key: string,
    value: string,
    expirationInHours: number = 24,
  ): Promise<void> {
    const expires = new Date(Date.now() + expirationInHours * 60 * 60 * 1000);
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${key}=${encodeURIComponent(value)}; Expires=${expires.toUTCString()}; Path=/; SameSite=Lax${secure}`;
  }

  async removeItem(key: string): Promise<void> {
    document.cookie = `${key}=; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Path=/; SameSite=Lax`;
  }

  async clear(): Promise<void> {
    const keys = document.cookie
      .split(";")
      .map((value) => value.trim().split("=")[0])
      .filter(Boolean);

    await Promise.all(keys.map((key) => this.removeItem(key)));
  }
}
