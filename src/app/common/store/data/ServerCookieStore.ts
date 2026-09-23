import { cookies } from "next/headers";
import type { Store } from '../domain/store'

export class ServerCookieStore implements Store {
  async getItem(key: string): Promise<string | null> {
    const cookieStore = await cookies();
    return cookieStore.get(key)?.value || null;
  }

  async setItem(key: string, value: string, expirationInHours: number = 24): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set({
      name: key,
      value,
      path: "/",
      maxAge: expirationInHours * 3600,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
  }

  async removeItem(key: string): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(key, "", { path: "/", maxAge: 0 });
  }

  async clear(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.getAll().forEach((cookie) => {
      cookieStore.set(cookie.name, "", { path: "/", maxAge: 0 });
    });
  }
}
