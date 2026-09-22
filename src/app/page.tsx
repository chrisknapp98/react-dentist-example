import { ContactSection } from "./home/contactSection";
import { WelcomeBanner } from "./home/welcomeBanner";
import { OpeningHoursAndRecentNews } from "./comingSoon/openingHoursAndRecentNews";
import Image from "next/image";
import { Footer } from "./common/footer/footer";

const treatmentAreas = [
  {
    title: "Vorsorge & Prophylaxe",
    text: "Kontrollen, professionelle Zahnreinigung und individuelle Tipps für die tägliche Mundhygiene.",
  },
  {
    title: "Zahnerhalt & Ästhetik",
    text: "Von Füllungen und Wurzelkanalbehandlungen bis zu Zahnersatz, Bleaching und Veneers.",
  },
  {
    title: "Kieferorthopädie",
    text: "Zahnspangen und Aligner für Kinder, Jugendliche und Erwachsene – abgestimmt auf Ihren Befund.",
  },
] as const;

export default function Home() {
  return (
    <div className="font-sans">
      <WelcomeBanner />
      <OpeningHoursAndRecentNews />
      <section className="bg-practiceSkin px-6 py-14 sm:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
              Behandlungen im Überblick
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight text-textBlue sm:text-4xl">
              Zahnmedizin und Kieferorthopädie unter einem Dach.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {treatmentAreas.map((area) => (
              <article key={area.title} className="rounded-3xl bg-white p-7 sm:p-8">
                <h3 className="text-2xl font-light text-textBlue">{area.title}</h3>
                <p className="mt-3 leading-7 text-textGrey">{area.text}</p>
              </article>
            ))}
          </div>
          <a href="/leistungen" className="mt-8 inline-flex text-sm font-semibold text-practiceRed underline underline-offset-4 transition-colors hover:text-textBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed">
            Alle Leistungen ansehen
          </a>
        </div>
      </section>
      <section className="bg-backgroundLightGray px-6 py-14 sm:px-12 md:py-20 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/image-collection/praxis-dumbach-aerzteteam-terrasse-01-cropped.jpg"
              alt="Dr. Georg Dumbach, Dr. Stephanie Knapp Dumbach und Dr. Johannes Dumbach"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-xl text-textGrey">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
              Zahnärzte &amp; Kieferorthopädie
            </p>
            <h2 className="mt-4 text-3xl font-light text-textBlue sm:text-4xl">
              Persönlich für Sie da
            </h2>
            <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8">
              <span className="whitespace-nowrap">
                Dr. Stephanie Knapp Dumbach
              </span>
              , <span className="whitespace-nowrap">Dr. Johannes Dumbach</span>{" "}
              und <span className="whitespace-nowrap">Dr. Georg Dumbach</span>{" "}
              verbinden Erfahrung, moderne Zahnmedizin und Kieferorthopädie.
            </p>
            <p className="mt-4 text-base leading-7 sm:text-lg sm:leading-8">
              Wir nehmen uns Zeit für Ihre Fragen und finden gemeinsam die
              passende Behandlung.
            </p>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
}
