import { cookies } from "next/headers";
import type { StoreManager } from '../domain/storeManager'

export class CookieStoreManager implements StoreManager {
  async getItem(key: string): Promise<string | null> {
    if (typeof window === "undefined") {
      const cookieStore = await cookies();
      return cookieStore.get(key)?.value || null;
    } else {
      const cookieArr = document.cookie.split(";");
      for (const cookie of cookieArr) {
        const [cookieKey, cookieValue] = cookie.trim().split("=");
        if (cookieKey === key) {
          return decodeURIComponent(cookieValue);
        }
      }
      return null;
    }
  }

  async setItem(key: string, value: string, expirationInHours: number = 24): Promise<void> {
    if (typeof window === "undefined") {
      const cookieStore = await cookies();
      cookieStore.set({
        name: key,
        value: value,
        path: "/",
        maxAge: expirationInHours * 3600,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
    } else {
      const date = new Date();
      date.setTime(date.getTime() + expirationInHours * 60 * 60 * 1000);
      document.cookie = `${key}=${encodeURIComponent(value)};expires=${date.toUTCString()};path=/`;
    }
  }

  async removeItem(key: string): Promise<void> {
    if (typeof window === "undefined") {
      const cookieStore = await cookies();
      cookieStore.set(key, "", { path: "/", maxAge: 0 });
    } else {
      document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    }
  }

  async clear(): Promise<void> {
    if (typeof window === "undefined") {
      const cookieStore = await cookies();
      const allCookies = cookieStore.getAll();
      allCookies.forEach((cookie) => cookieStore.set(cookie.name, "", { path: "/", maxAge: 0 }));
    } else {
      const cookieArr = document.cookie.split(";");
      for (const cookie of cookieArr) {
        const [key] = cookie.trim().split("=");
        await this.removeItem(key);
      }
    }
  }
}
