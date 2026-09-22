import Image from "next/image";
import { SiteHeader } from "../common/header/siteHeader";
import { ContactInformation } from "../common/contactInformation/contactInformation";

export function WelcomeBanner() {
  return (
    <section>
      <SiteHeader />

      {/* <div className="relative hidden min-h-[610px] overflow-hidden md:flex md:items-end"> */}
      <div className="relative hidden min-h-[610px] overflow-hidden md:flex md:items-end">
        <Image
          src="/image-collection/praxis-dumbach-gebaeude-strassenansicht-04-desktop.jpg"
          alt="Außenansicht der Zahnarztpraxis in Pegnitz"
          fill
          priority
          sizes="(min-width: 768px) 100vw, 1px"
          quality={90}
          className="object-cover object-[59%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-20 pb-10">
          <div className="max-w-xl text-white">
            <p className="mb-1 inline-flex py-2 text-sm font-semibold uppercase tracking-[0.16em] text-practiceSkin">
              Zahnmedizin &amp; Kieferorthopädie in Pegnitz
            </p>
            <h1 className="text-6xl font-light leading-tight">
              Herzlich willkommen
            </h1>
            <p className="mt-1 text-base leading-7 text-white/95 sm:text-lg sm:leading-8">
              In unserer Gemeinschaftspraxis verbinden wir moderne Zahnmedizin
              und Kieferorthopädie mit einer persönlichen, vertrauensvollen
              Betreuung.
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-backgroundLightGray md:hidden">
        <div className="relative aspect-[16/15]">
          <Image
            src="/image-collection/praxis-dumbach-gebaeude-strassenansicht-04-portrait.jpg"
            alt="Außenansicht der Zahnarztpraxis in Pegnitz"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-7 sm:px-12 sm:pb-10">
            <p className="inline-flex py-2 text-sm font-semibold uppercase tracking-[0.16em] text-practiceSkin">
              Praxis in Pegnitz
            </p>
            <h1 className="text-4xl font-light leading-tight text-white sm:text-5xl">
              Herzlich willkommen
            </h1>
          </div>
        </div>

        <div className="px-6 py-6 sm:px-12 sm:py-8">
          <p className="mt-1 text-base leading-7 text-black/95 sm:text-lg sm:leading-8">
            In unserer Gemeinschaftspraxis verbinden wir moderne Zahnmedizin und
            Kieferorthopädie mit einer persönlichen, vertrauensvollen Betreuung.
          </p>
        </div>
      </div>
    </section>
  );
}
