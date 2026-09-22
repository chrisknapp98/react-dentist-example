import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../common/footer/footer";
import { BUTTON_INTERACTION_CLASS } from "../common/button/buttonStyles";
import { SiteHeader } from "../common/header/siteHeader";

export const metadata: Metadata = {
  title:
    "Unsere Praxis | Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach",
  description:
    "Lernen Sie unsere moderne, barrierefreie Zahnarztpraxis mit Kieferorthopädie in Pegnitz kennen.",
};

export default function PraxisPage() {
  return (
    <div className="font-sans">
      <SiteHeader />
      <main>
        <section className="bg-backgroundLightGray">
          <div className="relative h-72 overflow-hidden sm:h-80 lg:h-[30rem]">
            <Image
              src="/image-collection/praxis-dumbach-rezeption-ansicht-01.jpg"
              alt="Heller, moderner Empfangsbereich der Praxis"
              fill
              priority
              sizes="100vw"
              quality={90}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-textBlue/75 via-textBlue/30 to-transparent" />
            <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-10 sm:px-12 sm:pb-14 lg:px-20 lg:pb-16">
              <div className="max-w-2xl text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceSkin">
                  Unsere Praxis
                </p>
                <h1 className="mt-4 text-4xl font-light leading-tight sm:text-5xl md:text-6xl">
                  Modern. Persönlich. Für Sie da.
                </h1>
              </div>
            </div>
          </div>

          <div className="px-6 py-14 sm:px-12 md:py-20 lg:px-20">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20">
              <div className="max-w-2xl text-textGrey">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
                  Gewachsen mit der Zeit
                </p>
                <h2 className="mt-4 text-3xl font-light leading-tight text-textBlue sm:text-4xl">
                  Aus bewährter Kieferorthopädie wurde ein Ort für umfassende
                  Zahnmedizin.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-7 sm:text-lg sm:leading-8">
                  <p>
                    Unsere Praxis hat ihre Wurzeln in der Kieferorthopädie. Mit
                    der Erweiterung und vollständigen Renovierung ist daraus ein
                    moderner Ort entstanden, an dem wir heute Zahnmedizin und
                    Kieferorthopädie gemeinsam anbieten.
                  </p>
                  <p>
                    Dabei ist uns wichtig, dass medizinische Qualität und eine
                    angenehme Atmosphäre zusammengehören: mit Zeit für
                    persönliche Gespräche, kurzen Wegen und einer Behandlung,
                    die zu Ihnen passt.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="/image-collection/praxis-dumbach-wartezimmer-glastuer.jpg"
                  alt="Heller Wartebereich der Praxis"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-backgroundLightGray px-6 py-14 sm:px-12 md:py-20 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
                Einblicke in die Praxis
              </p>
              <h2 className="mt-4 text-3xl font-light text-textBlue sm:text-4xl">
                Räume und Ausstattung, die zum Wohlfühlen einladen
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="relative min-h-72 overflow-hidden rounded-3xl md:min-h-[30rem]">
                <Image
                  src="/image-collection/praxis-dumbach-behandlungszimmer-06.jpg"
                  alt="Modernes Behandlungszimmer der Praxis"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-1">
                <div className="relative min-h-60 overflow-hidden rounded-3xl">
                  <Image
                    src="/image-collection/praxis-dumbach-behandlungseinheit-instrumententablett-01.jpg"
                    alt="Behandlungseinheit mit modernen Instrumenten"
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative min-h-60 overflow-hidden rounded-3xl">
                  <Image
                    src="/image-collection/praxis-dumbach-rezeption-durchgang_patientenbad-01.jpg"
                    alt="Detail eines modern ausgestatteten Behandlungszimmers"
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-textBlue px-6 py-14 sm:px-12 md:py-20 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/image-collection/praxis-dumbach-roentgenraum-gesamtansicht-01.jpg"
                alt="Modern ausgestatteter Röntgenraum der Praxis"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="max-w-xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceSkin">
                Präzise Diagnostik
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight sm:text-4xl">
                Technik, die Ihre Behandlung unterstützt
              </h2>
              <p className="mt-6 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                Moderne Ausstattung unterstützt uns dabei, Befunde sorgfältig zu
                beurteilen und Behandlungen nachvollziehbar zu planen. Wir
                erklären Ihnen jeden Schritt verständlich und entscheiden
                gemeinsam mit Ihnen, was sinnvoll ist.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-12 md:py-20 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            <div className="relative min-h-72 overflow-hidden rounded-3xl md:min-h-[30rem]">
              <Image
                src="/image-collection/praxis-dumbach-behandlungseinheit-mit-instrumententablett.jpg"
                alt="Modernes Behandlungszimmer mit Behandlungsstuhl"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center rounded-3xl bg-practiceSkin p-8 sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
                Ihr Besuch bei uns
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight text-textBlue sm:text-4xl">
                Wir freuen uns, Sie in Pegnitz zu begrüßen.
              </h2>
              <p className="mt-6 text-base leading-7 text-textGrey sm:text-lg sm:leading-8">
                Ob Vorsorge, Behandlung oder Kieferorthopädie: Bei uns stehen
                Ihre Wünsche und Ihre Zahngesundheit im Mittelpunkt.
              </p>
              <a
                href="/kontakt"
                className={`mt-8 inline-flex w-fit rounded-full bg-practiceRed px-6 py-3 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed ${BUTTON_INTERACTION_CLASS}`}
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
