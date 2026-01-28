"use client";

import { useEffect, useState } from "react";
import { ContactInformation } from "../common/contactInformation/contactInformation";
import { AnnouncementDTO } from "../api/announcements/announcementDTO";
import { OpeningHours } from "./openingHours";
import { RecentNewsFrame } from "./recentNewsFrame";

export function OpeningHoursAndRecentNews() {
    const [announcements, setAnnouncements] = useState<AnnouncementDTO[]>([]);

    useEffect(() => {
        let isMounted = true;
        fetch("/api/announcements")
            .then((res) => res.json())
            .then((data: AnnouncementDTO[]) => {
                if (!isMounted) return;
                setAnnouncements(data ?? []);
            })
            .catch(() => {
                if (!isMounted) return;
                setAnnouncements([]);
            });
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch justify-center py-10 px-6 sm:px-20">
        <OpeningHours />
        <RecentNewsFrame
            announcements={announcements}
            emptyState={
                <div className="justify-start">
                    Aktuell liegen keine Meldungen vor.
                    <br />
                    Bei Fragen erreichen Sie uns per{" "}
                    <a href={ContactInformation.emailLink} className="underline whitespace-nowrap">
                        E-Mail
                    </a>
                    .
                </div>
            }
        />
        </div>
        </div>
    )
}
