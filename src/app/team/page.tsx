import type { Metadata } from "next";
import Image from "next/image";
import { WHITE_BUTTON_CLASS } from "../common/button/buttonStyles";
import { Footer } from "../common/footer/footer";
import { SiteHeader } from "../common/header/siteHeader";
import { SITE_HEADER_CONTENT_TOP_PADDING } from "../common/header/siteHeaderLayout";

export const metadata: Metadata = {
  title:
    "Unser Team | Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach",
  description:
    "Lernen Sie unser Ärzteteam und die Mitarbeiterinnen der Zahnarztpraxis Dres. Dumbach & Dr. Knapp Dumbach in Pegnitz kennen.",
};

const dentists = [
  {
    name: "Dr. Stephanie Knapp\u00a0Dumbach",
    role: "Zahnärztin",
    image:
      "/images/dr-stephanie-knapp-dumbach-rezeption-02_cropped.jpg",
    alt: "Dr. Stephanie Knapp Dumbach im Empfangsbereich der Praxis",
  },
  {
    name: "Dr. Johannes Dumbach",
    role: "Zahnarzt",
    image: "/images/dr-johannes-dumbach-portrait-04_cropped.jpg",
    alt: "Dr. Johannes Dumbach im Empfangsbereich der Praxis",
  },
  {
    name: "Dr. Georg Dumbach",
    role: "Kieferorthopäde",
    image: "/images/dr-georg-dumbach-portrait_cropped.jpg",
    alt: "Dr. Georg Dumbach im Empfangsbereich der Praxis",
  },
];

// prettier-ignore
const employees = [
  { id: "01", name: "Vorname", role: "Dentalhygienikerin", responsibility: "Prophylaxe" },
  { id: "02", name: "Vorname", role: "Dentalhygienikerin", responsibility: "Prophylaxe" },
  { id: "03", name: "Vorname", role: "Zahnmedizinische Verwaltungsassistenz", responsibility: "Verwaltung & Abrechnung" },
  { id: "04", name: "Vorname", role: "Zahnmedizinische Verwaltungsassistenz", responsibility: "Verwaltung & Abrechnung" },
  { id: "05", name: "Vorname", role: "Zahnmedizinische Fachangestellte", responsibility: "Verwaltung, Abrechnung & Assistenz" },
  { id: "06", name: "Vorname", role: "Medizinische Fachangestellte", responsibility: "Verwaltung & Rezeption" },
  { id: "07", name: "Vorname", role: "Medizinische Fachangestellte", responsibility: "Verwaltung & Rezeption" },
  { id: "08", name: "Vorname", role: "Zahnmedizinische Fachangestellte", responsibility: "Assistenz (KFO)" },
  { id: "09", name: "Vorname", role: "Zahnmedizinische Fachangestellte", responsibility: "Assistenz" },
  { id: "10", name: "Vorname", role: "Zahnmedizinische Fachangestellte", responsibility: "Assistenz" },
  { id: "11", name: "Vorname", role: "Zahnmedizinische Fachangestellte", responsibility: "Assistenz" },
  { id: "12", name: "Vorname", role: "Zahnmedizinische Fachangestellte", responsibility: "Assistenz" },
  { id: "13", name: "Vorname", role: "Zahnmedizinische Fachangestellte", responsibility: "Assistenz" },
  { id: "14", name: "Vorname", role: "Auszubildende", responsibility: "Assistenz" },
  { id: "15", name: "Vorname", role: "Zahntechnikerin", responsibility: "KFO & Prothetik" },
  { id: "16", name: "Vorname", role: "Reinigungskraft", responsibility: "Praxishygiene" },
];

export default function TeamPage() {
  return (
    <div className="font-sans">
      <SiteHeader />
      <main>
        <section
          className={`px-6 pb-14 sm:px-12 md:pb-20 lg:px-20 ${SITE_HEADER_CONTENT_TOP_PADDING}`}
          aria-labelledby="team-heading"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
                Unser Team
              </p>
              <h1
                id="team-heading"
                className="mt-4 text-3xl font-light text-textBlue sm:text-4xl"
              >
                Lernen Sie uns kennen
              </h1>
              <div className="mt-6 space-y-4 text-base leading-7 text-textGrey sm:text-lg sm:leading-8">
                <p>
                  Nach fast 40 Jahren reiner Kieferorthopädie in der Praxis von
                  Dr. Georg Dumbach entstand 2025 gemeinsam mit seinem Sohn
                  Dr. Johannes Dumbach und dessen Frau Dr. Stephanie Knapp Dumbach
                  eine neue zahnmedizinische und kieferorthopädische
                  Gemeinschaftspraxis.
                </p>
                <p>
                  Zu dritt bieten wir Ihnen heute das gesamte Spektrum der
                  Zahnmedizin an. Mit der neuen Generation der Behandler führen
                  wir neben der modernen Zahnheilkunde auch die Kieferorthopädie
                  weiter – unter dem Motto „gesund &amp; gerade“.
                </p>
                <p>
                  Was uns besonders auszeichnet, ist das familiäre Miteinander –
                  sowohl unter uns Behandlern als auch im gesamten Praxisteam.
                  Wir legen großen Wert auf persönliche Betreuung,
                  vertrauensvolle Zusammenarbeit und eine angenehme, herzliche
                  Atmosphäre. Mit moderner Technik und Erfahrung aus zwei
                  Generationen möchten wir unseren Patientinnen und Patienten
                  eine hohe Behandlungsqualität bieten.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-backgroundLightGray px-6 py-14 sm:px-12 md:py-20 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <section aria-labelledby="dentists-heading">
              <h2
                id="dentists-heading"
                className="text-3xl font-light text-textBlue sm:text-4xl"
              >
                Unser Ärzteteam
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {dentists.map((dentist) => (
                  <article
                    key={dentist.name}
                    className="overflow-hidden rounded-3xl bg-white"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={dentist.image}
                        alt={dentist.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-contain object-center"
                      />
                    </div>
                    <div className="p-7 sm:p-8">
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-practiceRed">
                        {dentist.role}
                      </p>
                      <h3 className="mt-3 text-2xl font-light leading-tight text-textBlue">
                        {dentist.name}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="mt-14 sm:mt-20"
              aria-labelledby="employees-heading"
            >
              <h2
                id="employees-heading"
                className="text-3xl font-light text-textBlue sm:text-4xl"
              >
                Unsere Mitarbeiterinnen
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {employees.map((employee) => (
                  <article
                    key={employee.id}
                    className="overflow-hidden rounded-2xl bg-white"
                  >
                    <div
                      className="flex aspect-square items-center justify-center bg-practiceSkin/40"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 120 140"
                        fill="currentColor"
                        className="w-2/5 text-practiceBlue opacity-20"
                      >
                        <circle cx="60" cy="42" r="26" />
                        <path d="M12 132v-14a48 48 0 0 1 96 0v14Z" />
                      </svg>
                    </div>
                    <div className="px-1 py-4 min-[400px]:px-4">
                      <p className="h-8 text-[10px] font-semibold uppercase leading-4 tracking-[0.02em] text-practiceRed min-[400px]:text-xs">
                        {employee.role}
                      </p>
                      <h3 className="mt-2 text-lg font-light leading-tight text-textBlue">
                        {employee.name}
                      </h3>
                      <p className="mt-2 text-xs text-textGrey">
                        {employee.responsibility}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section className="bg-textBlue px-6 py-14 sm:px-12 md:py-20 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/dr-stephanie-knapp-dumbach-dr-johannes-dumbach-behandlungszimmer-01.jpg"
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
                Wir freuen uns auf Ihren Besuch in Pegnitz
              </h2>
              <p className="mt-6 text-base leading-7 text-white/90 sm:text-lg sm:leading-8">
                Ob Vorsorge, zahnärztliche Behandlung oder Kieferorthopädie –
                Melden Sie sich gerne für einen Termin bei uns.
              </p>
              <a
                href="/kontakt"
                className={`mt-8 ${WHITE_BUTTON_CLASS}`}
              >
                Kontakt aufnehmen
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
