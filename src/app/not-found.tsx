import { Footer } from "./common/footer/footer";
import { SiteHeader } from "./common/header/siteHeader";
import { SITE_HEADER_CONTENT_TOP_PADDING } from "./common/header/siteHeaderLayout";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <SiteHeader />
      <main
        className={`flex-1 bg-backgroundLightGray px-6 pb-14 sm:px-12 md:pb-20 lg:px-20 ${SITE_HEADER_CONTENT_TOP_PADDING}`}
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
            Fehler 404
          </p>
          <h1 className="mt-4 text-4xl font-light leading-tight text-textBlue sm:text-5xl">
            Seite nicht gefunden
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-textGrey sm:text-lg sm:leading-8">
            Die gewünschte Seite wurde nicht gefunden. Bitte nutzen Sie unsere
            Navigation, um unsere Leistungen und weitere Informationen zur Praxis
            zu finden.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
