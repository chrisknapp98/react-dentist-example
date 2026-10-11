"use client";

import { PRIMARY_BUTTON_CLASS } from "../common/button/buttonStyles";
import Link from "next/link";

import { useEffect, useMemo, useState } from "react";
import { BrowserStoreModule } from "../common/store/di/browserStoreModule";

type MapEmbedProps = {
  src: string;
  title: string;
};

const MAP_CONSENT_KEY = "maps_consent";
const MAP_CONSENT_DURATION_HOURS = 24 * 183;

export function MapEmbed({ src, title }: MapEmbedProps) {
  const [hasConsent, setHasConsent] = useState(false);
  const cookieStore = useMemo(() => new BrowserStoreModule().provide(), []);

  useEffect(() => {
    async function readConsent() {
      setHasConsent((await cookieStore.getItem(MAP_CONSENT_KEY)) === "granted");
    }

    void readConsent();
  }, [cookieStore]);

  const enableMap = () => {
    void cookieStore.setItem(
      MAP_CONSENT_KEY,
      "granted",
      MAP_CONSENT_DURATION_HOURS,
    );
    setHasConsent(true);
  };

  const disableMap = () => {
    void cookieStore.removeItem(MAP_CONSENT_KEY);
    setHasConsent(false);
  };

  if (hasConsent) {
    return (
      <div className="relative">
        <iframe
          title={title}
          src={src}
          className="h-[26rem] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <button
          type="button"
          onClick={disableMap}
          className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-textBlue shadow-md transition-[background-color,transform] [@media(hover:hover)]:hover:scale-[1.03] [@media(hover:hover)]:hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practiceRed"
        >
          Maps deaktivieren
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-[26rem] flex-col items-center justify-center gap-5 px-6 py-8 text-center text-textGrey">
      <div>
        <p className="font-medium text-textBlue">Google Maps ist deaktiviert.</p>
        <p className="mt-2 max-w-md text-sm leading-6">
          Mit „Google Maps laden“ stimmen Sie der Datenübermittlung an Google
          und der Verwendung von Cookies für die Karte zu. Daten können auch
          außerhalb der EU verarbeitet werden, insbesondere in den USA. Die
          Zustimmung ist jederzeit widerrufbar.
        </p>
      </div>
      <button
        type="button"
        onClick={enableMap}
        className={PRIMARY_BUTTON_CLASS}
      >
        Google Maps laden
      </button>
      <Link
        href="/datenschutz#google-maps"
        className="text-sm text-practiceRed underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed"
      >
        Details in unserer Datenschutzerklärung
      </Link>
    </div>
  );
}
