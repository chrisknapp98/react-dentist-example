"use client";

import { useEffect, useState } from "react";
import { AnnouncementDTO } from "../api/announcements/announcementDTO";
import { OpeningHours } from "./openingHours";
import { RecentNewsFrame } from "./recentNewsFrame";

export function OpeningHoursAndRecentNews() {
  const [announcements, setAnnouncements] = useState<AnnouncementDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 8000);

    fetch("/api/announcements", { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : []))
      .then((data: AnnouncementDTO[]) => {
        if (!isMounted) return;
        setAnnouncements(data ?? []);
      })
      .catch(() => {
        if (!isMounted) return;
        setAnnouncements([]);
      })
      .finally(() => {
        window.clearTimeout(timeoutId);
        if (!isMounted) return;
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
      controller.abort();
    };
  }, []);

  return (
    <div className="flex min-w-0 justify-center">
      <div className="flex w-full min-w-0 max-w-6xl flex-col items-center justify-center gap-6 px-6 py-10 sm:px-20 md:gap-10 lg:flex-row lg:items-stretch">
        <OpeningHours />
        <RecentNewsFrame announcements={announcements} isLoading={isLoading} />
      </div>
    </div>
  );
}
