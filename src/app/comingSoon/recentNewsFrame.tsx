"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

type TouchStart = { x: number; y: number };

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

  const touchStartRef = useRef<TouchStart | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const canInteract = useMemo(
    () => announcements.length >= 2 && !showOnlyCurrent,
    [announcements.length, showOnlyCurrent]
  );

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % announcements.length);
  }, [announcements.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  }, [announcements.length]);

  const resetTouch = useCallback(() => {
    touchStartRef.current = null;
    touchEndXRef.current = null;
  }, []);

  const handleMouseEnter = useCallback(() => setIsPaused(true), []);
  const handleMouseLeave = useCallback(() => setIsPaused(false), []);

  const handleTouchStart = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (!canInteract) return;

      const touch = event.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      touchEndXRef.current = touch.clientX;
      setIsPaused(true);
    },
    [canInteract]
  );

  const handleTouchMove = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current) return;
    touchEndXRef.current = event.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (!canInteract) {
        resetTouch();
        setIsPaused(false);
        return;
      }

      const start = touchStartRef.current;
      const endX = touchEndXRef.current;
      const endTouch = event.changedTouches[0];

      if (!start || endX === null) {
        resetTouch();
        setIsPaused(false);
        return;
      }

      const deltaX = endX - start.x;
      const deltaY = endTouch.clientY - start.y;

      const swipeThreshold = 40;
      const isHorizontalSwipe =
        Math.abs(deltaX) > swipeThreshold && Math.abs(deltaX) > Math.abs(deltaY);

      if (isHorizontalSwipe) {
        if (deltaX < 0) goToNext();
        else goToPrev();
      }

      resetTouch();
      setIsPaused(false);
    },
    [canInteract, goToNext, goToPrev, resetTouch]
  );

  useEffect(() => {
    if (showOnlyCurrent) setActiveIndex(0);
  }, [showOnlyCurrent]);

  useEffect(() => {
    if (announcements.length < 2) return;
    if (isPaused || showOnlyCurrent || autoAdvanceMs <= 0) return;

    const interval = setInterval(goToNext, autoAdvanceMs);
    return () => clearInterval(interval);
  }, [announcements.length, isPaused, showOnlyCurrent, autoAdvanceMs, goToNext]);

  useEffect(() => {
    if (activeIndex >= announcements.length) setActiveIndex(0);
  }, [activeIndex, announcements.length]);

  return (
    <RoundedFrame title={title} className={frameClassName}>
      <div
        className="w-full text-sm vs:text-md sm:text-lg font-light"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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