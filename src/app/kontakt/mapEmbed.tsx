"use client";

import { useState } from "react";

type MapEmbedProps = {
  src: string;
  title: string;
};

export function MapEmbed({ src, title }: MapEmbedProps) {
  const [hasConsent, setHasConsent] = useState(false);

  if (hasConsent) {
    return (
      <iframe
        title={title}
        src={src}
        className="h-[26rem] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div className="flex h-[26rem] flex-col items-center justify-center gap-5 px-6 text-center text-textGrey">
      <div>
        <p className="font-medium text-textBlue">Google Maps ist deaktiviert.</p>
        <p className="mt-2 max-w-md text-sm leading-6">
          Erst nach Ihrer Einwilligung wird die Karte geladen. Dabei können
          personenbezogene Daten, insbesondere Ihre IP-Adresse, an Google
          übermittelt werden.
        </p>
      </div>
      <button
        type="button"
        onClick={() => setHasConsent(true)}
        className="rounded-full bg-practiceRed px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-textBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed"
      >
        Google Maps laden
      </button>
      <a
        href="https://policies.google.com/privacy?hl=de"
        target="_blank"
        rel="noreferrer"
        className="text-sm text-practiceRed underline decoration-practiceRed/50 underline-offset-4 transition-colors hover:text-textBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed"
      >
        Datenschutzhinweise von Google
      </a>
    </div>
  );
}
