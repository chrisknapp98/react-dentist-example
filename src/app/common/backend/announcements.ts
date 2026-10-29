import "server-only";

import type { AnnouncementDTO } from "../../api/announcements/announcementDTO";

export const ANNOUNCEMENTS_CACHE_TAG = "public-announcements";

export async function getPublicAnnouncements(): Promise<AnnouncementDTO[]> {
  const base = process.env.BACKEND_API_URL;
  if (!base) return [];

  try {
    // Fetch public data directly, without forwarding a visitor's session cookies.
    const response = await fetch(new URL("/api/announcements", base), {
      next: { revalidate: 60, tags: [ANNOUNCEMENTS_CACHE_TAG] },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Announcements returned ${response.status}`);

    const data: unknown = await response.json();
    if (!Array.isArray(data) || !data.every((item) =>
      item && typeof item.id === "string" &&
      typeof item.message === "string" && typeof item.date === "string"
    )) {
      throw new Error("Invalid announcements response");
    }
    return data;
  } catch (error) {
    console.error("Could not load public announcements", error);
    return [];
  }
}
