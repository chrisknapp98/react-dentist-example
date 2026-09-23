import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../common/footer/footer";
import { SiteHeader } from "../common/header/siteHeader";
import { ServicesAccordion } from "./servicesAccordion";
import { services } from "./services";

export const metadata: Metadata = {
  title:
    "Leistungen | Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach",
  description:
    "Ein Überblick über die zahnmedizinischen und kieferorthopädischen Leistungen unserer Praxis in Pegnitz.",
};

export default function LeistungenPage() {
  return (
    <div className="font-sans">
      <SiteHeader />
      <main>
        <section className="bg-backgroundLightGray">
          <div className="relative h-72 overflow-hidden sm:h-80 lg:h-96">
            <Image
              src="/image-collection/praxis-dumbach-behandlungszimmer-04.jpg"
              alt="Behandlungseinheit mit zahnmedizinischen Instrumenten"
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover"
            />
          </div>
          <div className="px-6 pb-14 pt-10 sm:px-12 sm:pb-16 sm:pt-12 md:pb-20 md:pt-14 lg:px-20">
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
                Unsere Leistungen
              </p>
              <h1 className="mt-4 text-3xl font-light text-textBlue sm:text-4xl md:text-5xl">
                Moderne Zahnmedizin und Kieferorthopädie
              </h1>
              <div className="mt-8 max-w-3xl space-y-4 text-base leading-7 text-textGrey sm:text-lg sm:leading-8">
                <p>
                  Hier zeigen wir Ihnen einen Einblick in viele Behandlungen,
                  die wir in unserer Gemeinschaftspraxis anbieten. Wichtig ist
                  uns im Gespräch mit Ihnen bei Ihrer Untersuchung
                  herauszufinden, was für Sie und Ihre Zähne die passende
                  Therapie ist. Dabei steht eine angst- und schmerzfreie
                  Behandlung an oberster Stelle. Sprechen Sie uns gerne auf
                  Sorgen und Wünsche rund um Ihre Zähne an. Wir nehmen uns Zeit
                  für eine individuelle Beratung.
                </p>
                <p>
                  Wir freuen uns, wenn wir Sie als Patientinnen und Patienten
                  bei uns begrüßen dürfen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-14 sm:px-12 md:py-20 lg:px-20"
          aria-label="Behandlungsübersicht"
        >
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl bg-practiceRed px-6 py-10 text-center sm:rounded-3xl sm:py-12">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                Unsere Leistungen im Überblick
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
                Wählen Sie den Bereich, der Sie interessiert. Die Details öffnen sich direkt darunter.
              </p>
            </div>
            <div className="mt-8 sm:mt-10">
              <ServicesAccordion services={services} />
            </div>
          </div>
        </section>

        <section className="bg-practiceSkin px-6 py-14 sm:px-12 md:py-20 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">Nicht sicher, was passt?</p>
              <h2 className="mt-4 text-3xl font-light leading-tight text-textBlue sm:text-4xl">Wir klären es gemeinsam in Ruhe.</h2>
              <p className="mt-5 text-base leading-7 text-textGrey sm:text-lg sm:leading-8">Bringen Sie Ihre Fragen gern mit. Nach einer sorgfältigen Untersuchung besprechen wir verständlich, welche Behandlung sinnvoll sein kann.</p>
            </div>
            <a href="/kontakt" className="inline-flex w-fit rounded-full bg-practiceRed px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed">Beratung vereinbaren</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
