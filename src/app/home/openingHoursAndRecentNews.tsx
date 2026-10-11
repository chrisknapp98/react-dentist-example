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
    <div className="flex justify-center">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch justify-center py-10 px-6 sm:px-20">
        <OpeningHours />
        <RecentNewsFrame announcements={announcements} isLoading={isLoading} />
      </div>
    </div>
  );
}
