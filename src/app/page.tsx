import { ContactSection } from "./home/contactSection";
import { WelcomeBanner } from "./home/welcomeBanner";
import { OpeningHoursAndRecentNews } from "./comingSoon/openingHoursAndRecentNews";
import Image from "next/image";
import { Footer } from "./common/footer/footer";

export default function Home() {
  return (
    <div className="font-sans">
      <WelcomeBanner />
      <OpeningHoursAndRecentNews />
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
              Ihre Zahnärzte
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
