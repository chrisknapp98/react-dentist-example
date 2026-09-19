import Image from "next/image";
import { SiteHeader } from "../common/header/siteHeader";
import { ContactInformation } from "../common/contactInformation/contactInformation";

export function WelcomeBanner() {
  return (
    <section>
      <SiteHeader />

      <div className="relative flex min-h-[480px] items-end overflow-hidden sm:min-h-[540px] md:min-h-[610px]">
        <Image
          src="/images/praxis_foto.png"
          alt="Außenansicht der Zahnarztpraxis in Pegnitz"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[59%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c296a]/90 via-[#1c296a]/55 to-[#1c296a]/10" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-12 sm:px-12 sm:pb-16 lg:px-20 lg:pb-20">
          <div className="max-w-xl text-white">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-practiceSkin">
              Zahnmedizin &amp; Kieferorthopädie in Pegnitz
            </p>
            <h1 className="text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
              Herzlich willkommen
            </h1>
            <p className="mt-5 text-base leading-7 text-white/95 sm:text-lg sm:leading-8">
              In unserer Gemeinschaftspraxis verbinden wir moderne Zahnmedizin
              und Kieferorthopädie mit einer persönlichen, vertrauensvollen
              Betreuung.
            </p>
            <p className="mt-8 text-base leading-7 text-white sm:text-lg">
              Für einen Termin rufen Sie uns an unter
              <a
                href={ContactInformation.telephoneLink}
                className="ml-1 whitespace-nowrap font-semibold underline underline-offset-4"
              >
                {ContactInformation.telephoneDisplay}
              </a>{" "}
              oder schreiben Sie uns eine
              <a
                href={ContactInformation.emailLink}
                className="ml-1 font-semibold underline underline-offset-4"
              >
                E-Mail
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
