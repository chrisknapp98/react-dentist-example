import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../common/footer/footer";
import { SiteHeader } from "../common/header/siteHeader";

export const metadata: Metadata = {
  title:
    "Unser Team | Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach",
  description:
    "Lernen Sie das zahnärztliche Team der Zahnarztpraxis Dres. Dumbach & Dr. Knapp Dumbach in Pegnitz kennen.",
};

const dentists = [
  {
    name: "Dr. Stephanie Knapp Dumbach",
    role: "Zahnärztin · Curriculum Kieferorthopädie (KFO)",
    image: "/image-collection/dr-stephanie-knapp-dumbach-portrait-04.jpg",
    alt: "Dr. Stephanie Knapp Dumbach im Empfangsbereich der Praxis",
    text: "Mit einem offenen Ohr für Ihre Wünsche und einem Blick für das Wesentliche begleitet sie Sie persönlich durch Ihre Behandlung. Ihr Schwerpunkt liegt neben der allgemeinen Zahnmedizin in der modernen Kieferorthopädie, etwa mit transparenten Alignern.",
  },
  {
    name: "Dr. Johannes Dumbach",
    role: "Zahnarzt",
    image: "/image-collection/dr-johannes-dumbach-portrait-01.jpg",
    alt: "Dr. Johannes Dumbach im Empfangsbereich der Praxis",
    text: "Mit seiner umfassenden Erfahrung begleitet er Sie in allen Bereichen der modernen Zahnmedizin. Sorgfältige Planung und eine verständliche Beratung stehen für ihn im Mittelpunkt.",
  },
  {
    name: "Dr. Georg Dumbach",
    role: "Zahnarzt & Kieferorthopäde",
    image: "/image-collection/dr-georg-dumbach-portrait.jpg",
    alt: "Dr. Georg Dumbach im Empfangsbereich der Praxis",
    text: "Seine langjährige Erfahrung in der Kieferorthopädie ergänzt unser gemeinsames Angebot für Kinder, Jugendliche und Erwachsene. Ein besonderer Schwerpunkt liegt auf der klassischen kieferorthopädischen Behandlung.",
  },
];

export default function TeamPage() {
  return (
    <div className="font-sans">
      <SiteHeader />
      <main>
        <section className="bg-backgroundLightGray px-6 py-14 sm:px-12 md:pb-20 md:pt-28 lg:px-20 lg:pt-36">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
            <div className="order-2 relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/image-collection/dr-stephanie-knapp-dumbach-dr-johannes-dumbach-roentgenbild-01.jpg"
                alt="Dr. Stephanie Knapp Dumbach und Dr. Johannes Dumbach besprechen gemeinsam ein Röntgenbild"
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 max-w-2xl text-textGrey">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
                Unser Team
              </p>
              <h1 className="mt-4 text-4xl font-light leading-tight text-textBlue sm:text-5xl">
                Kompetenz, die persönlich bleibt.
              </h1>
              <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8">
                Wir verbinden Zahnmedizin und Kieferorthopädie mit dem Anspruch,
                Sie gut zu verstehen und gut zu begleiten.
              </p>
              <p className="mt-4 text-base leading-7 sm:text-lg sm:leading-8">
                Für uns bedeutet gute Behandlung: Zeit für ein Gespräch, eine
                klare Empfehlung und eine Atmosphäre, in der Sie sich sicher
                fühlen können.
              </p>
              <p className="mt-4 text-base leading-7 sm:text-lg sm:leading-8">
                Neben Deutsch beraten wir Sie gern auf Englisch. Dr. Stephanie
                Knapp Dumbach spricht außerdem Spanisch als Muttersprache.
              </p>
            </div>
          </div>
        </section>

        <section
          className="px-6 py-14 sm:px-12 md:py-20 lg:px-20"
          aria-labelledby="dentists-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
                Ihre Zahnärzte
              </p>
              <h2
                id="dentists-heading"
                className="mt-4 text-3xl font-light text-textBlue sm:text-4xl"
              >
                Lernen Sie uns kennen
              </h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {dentists.map((dentist) => (
                <article
                  key={dentist.name}
                  className="overflow-hidden rounded-3xl bg-backgroundLightGray"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={dentist.image}
                      alt={dentist.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="p-7 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-practiceRed">
                      {dentist.role}
                    </p>
                    <h3 className="mt-3 text-2xl font-light leading-tight text-textBlue">
                      {dentist.name}
                    </h3>
                    <p className="mt-4 leading-7 text-textGrey">
                      {dentist.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-textBlue px-6 py-14 sm:px-12 md:py-20 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/image-collection/dr-stephanie-knapp-dumbach-dr-johannes-dumbach-behandlungszimmer-01.jpg"
                alt="Dr. Stephanie Knapp Dumbach und Dr. Johannes Dumbach lachen gemeinsam im Behandlungszimmer"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="max-w-xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceSkin">
                Für Sie da
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight sm:text-4xl">
                Wir freuen uns auf Ihren Besuch in Pegnitz.
              </h2>
              <p className="mt-6 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                Ob Vorsorge, Behandlung oder Kieferorthopädie: Sprechen Sie uns
                an. Wir nehmen uns Zeit für Ihre Fragen und finden gemeinsam den
                passenden Weg.
              </p>
              <a
                href="/kontakt"
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-textBlue transition-colors hover:bg-practiceSkin focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
