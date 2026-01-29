"use client";

import { useEffect, useRef, useState } from "react";
import { AnnouncementDTO } from "../api/announcements/announcementDTO";
import { RoundedFrame } from "../common/frame/roundedFrame";
import { renderMessageWithLinks } from "../common/text/renderMessageWithLinks";

type RecentNewsFrameProps = {
    announcements: AnnouncementDTO[];
    emptyState: React.ReactNode;
    title?: string;
    showOnlyCurrent?: boolean;
    autoAdvanceMs?: number;
    frameClassName?: string;
};

export function RecentNewsFrame({
    announcements,
    emptyState,
    title = "Aktuelles",
    showOnlyCurrent = false,
    autoAdvanceMs = 5500,
    frameClassName,
}: RecentNewsFrameProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartRef = useRef<{ x: number; y: number } | null>(null);
    const touchEndXRef = useRef<number | null>(null);

    const goToNext = () => {
        setActiveIndex((prev) => (prev + 1) % announcements.length);
    };

    const goToPrev = () => {
        setActiveIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
    };

    useEffect(() => {
        if (showOnlyCurrent) setActiveIndex(0);
    }, [showOnlyCurrent]);

    useEffect(() => {
        if (announcements.length < 2 || isPaused || showOnlyCurrent || autoAdvanceMs <= 0) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % announcements.length);
        }, autoAdvanceMs);
        return () => clearInterval(interval);
    }, [announcements.length, isPaused, showOnlyCurrent, autoAdvanceMs]);

    useEffect(() => {
        if (activeIndex >= announcements.length) {
            setActiveIndex(0);
        }
    }, [activeIndex, announcements.length]);

    return (
        <RoundedFrame title={title} className={frameClassName}>
            <div
                className="w-full text-sm vs:text-md sm:text-lg font-light"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={(event) => {
                    if (announcements.length < 2 || showOnlyCurrent) return;
                    const touch = event.touches[0];
                    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
                    touchEndXRef.current = touch.clientX;
                    setIsPaused(true);
                }}
                onTouchMove={(event) => {
                    if (!touchStartRef.current) return;
                    touchEndXRef.current = event.touches[0].clientX;
                }}
                onTouchEnd={(event) => {
                    if (announcements.length < 2 || showOnlyCurrent) {
                        touchStartRef.current = null;
                        touchEndXRef.current = null;
                        setIsPaused(false);
                        return;
                    }
                    const start = touchStartRef.current;
                    const endX = touchEndXRef.current;
                    const endTouch = event.changedTouches[0];
                    if (!start || endX === null) {
                        touchStartRef.current = null;
                        touchEndXRef.current = null;
                        setIsPaused(false);
                        return;
                    }
                    const deltaX = endX - start.x;
                    const deltaY = endTouch.clientY - start.y;
                    const swipeThreshold = 40;
                    if (Math.abs(deltaX) > swipeThreshold && Math.abs(deltaX) > Math.abs(deltaY)) {
                        if (deltaX < 0) {
                            goToNext();
                        } else {
                            goToPrev();
                        }
                    }
                    touchStartRef.current = null;
                    touchEndXRef.current = null;
                    setIsPaused(false);
                }}
            >
                {announcements.length === 0 ? (
                    emptyState
                ) : (
                        <div className="space-y-4">
                            <div className="relative w-full overflow-hidden rounded-xl">
                                {showOnlyCurrent ? (
                                    <div className="rounded-xl bg-white/60 p-4">
                                        <p className="text-textGrey">
                                            {renderMessageWithLinks(announcements[activeIndex]?.message ?? "", {
                                                linkClassName: "underline",
                                            })}
                                        </p>
                                    </div>
                                ) : (
                                    <div
                                        className="flex w-full transition-transform duration-500 ease-out will-change-transform"
                                        style={{ transform: `translate3d(-${activeIndex * 100}%,0,0)` }}
                                    >
                                        {announcements.map((a) => (
                                            <div key={a.id} className="w-full min-w-full flex-shrink-0 px-3 sm:px-4">
                                                <div className="rounded-xl bg-white/60 p-4">
                                                    <p className="text-textGrey">
                                                        {renderMessageWithLinks(a.message, { linkClassName: "underline" })}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        {!showOnlyCurrent && announcements.length > 1 ? (
                            <div className="flex items-center justify-center gap-2">
                                {announcements.map((announcement, index) => (
                                    <button
                                        key={announcement.id}
                                        onClick={() => setActiveIndex(index)}
                                        className={`h-2.5 w-2.5 rounded-full transition ${
                                            index === activeIndex
                                                ? "bg-practiceRed shadow-[0_0_0_4px_rgba(155,44,78,0.15)]"
                                                : "bg-gray-400 hover:bg-practiceGrey/60"
                                        }`}
                                        aria-label={`Meldung ${index + 1} anzeigen`}
                                    />
                                ))}
                            </div>
                        ) : null}
                    </div>
                )}
            </div>
        </RoundedFrame>
    );
}
