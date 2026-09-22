import type { Metadata } from "next";
import MailIcon from "@/icons/mail.svg";
import MapPinIcon from "@/icons/map-pin.svg";
import PhoneIcon from "@/icons/phone.svg";
import { ContactInformation } from "../common/contactInformation/contactInformation";
import { Footer } from "../common/footer/footer";
import { SiteHeader } from "../common/header/siteHeader";
import { SITE_HEADER_CONTENT_TOP_PADDING } from "../common/header/siteHeaderLayout";
import {
  openingHours,
  openingHoursNote,
} from "../common/openingHours/openingHours";

export const metadata: Metadata = {
  title:
    "Kontakt | Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach",
  description:
    "Kontakt, Sprechzeiten und Anfahrt zur Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach in Pegnitz.",
};

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2577.616703184919!2d11.543245576895934!3d49.75565543714622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a1c0be85d74cb7%3A0xfc51a0497b4573b7!2sZahnarztpraxis%20%26%20Kieferorthop%C3%A4die%20Dres.%20Dumbach%20und%20Dr.%20Knapp%20Dumbach!5e0!3m2!1sde!2sde!4v1789944314670!5m2!1sde!2sde";
const googleMapsUrl =
  "https://www.google.de/maps/place/Zahnarztpraxis+%26+Kieferorthop%C3%A4die+Dres.+Dumbach+und+Dr.+Knapp+Dumbach/@49.7556554,11.5432456,17z/data=!3m1!4b1!4m6!3m5!1s0x47a1c0be85d74cb7:0xfc51a0497b4573b7!8m2!3d49.755652!4d11.5458205!16s%2Fg%2F1v44pdxg?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D";
const appleMapsUrl =
  "https://maps.apple.com/place?place-id=IBEE6CE13F560B510&address=Bahnhofstra%C3%9Fe+16%2C+91257+Pegnitz%2C+Germany&coordinate=49.755652%2C11.545821&name=Zahnarztpraxis+%26+Kieferorthop%C3%A4die+Dres.+Dumbach+und+Dr.+Knapp+Dumbach&_provider=9902";

export default function KontaktPage() {
  return (
    <div className="font-sans">
      <SiteHeader />
      <main>
        <section
          className={`bg-backgroundLightGray px-6 pb-14 sm:px-12 md:pb-20 lg:px-20 ${SITE_HEADER_CONTENT_TOP_PADDING}`}
        >
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
              Kontakt
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-light leading-tight text-textBlue sm:text-5xl">
              Wir freuen uns, von Ihnen zu hören.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-textGrey sm:text-lg sm:leading-8">
              Für Termine, Fragen oder ein persönliches Anliegen erreichen Sie
              uns telefonisch oder per E-Mail. Wir sind gern für Sie da.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <PhoneIcon
                  className="h-7 w-7 text-practiceRed"
                  aria-hidden="true"
                />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-practiceRed">
                  Telefon
                </p>
                <a
                  href={ContactInformation.telephoneLink}
                  className="mt-2 inline-block text-xl font-medium text-textBlue underline decoration-practiceRed/50 underline-offset-4 transition-colors hover:text-practiceRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed"
                >
                  {ContactInformation.telephoneDisplay}
                </a>
              </div>
              <div className="rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <MailIcon
                  className="h-7 w-7 text-practiceRed"
                  aria-hidden="true"
                />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-practiceRed">
                  E-Mail
                </p>
                <a
                  href={ContactInformation.emailLink}
                  className="mt-2 inline-block break-words text-xl font-medium text-textBlue underline decoration-practiceRed/50 underline-offset-4 transition-colors hover:text-practiceRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed"
                >
                  {ContactInformation.email}
                </a>
              </div>
              <div className="rounded-3xl bg-white p-7 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <MapPinIcon
                  className="h-7 w-7 text-practiceRed"
                  aria-hidden="true"
                />
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em] text-practiceRed">
                  Adresse
                </p>
                <p className="mt-2 text-xl font-medium text-textBlue">
                  {ContactInformation.address.street}
                  <br />
                  {ContactInformation.address.postcode}{" "}
                  {ContactInformation.address.city}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 sm:px-12 md:py-20 lg:px-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed">
                Sprechzeiten
              </p>
              <h2 className="mt-4 text-3xl font-light text-textBlue sm:text-4xl">
                Wann wir für Sie da sind
              </h2>
              <table className="mt-8 w-full text-left text-sm leading-7 text-textGrey sm:text-base">
                <tbody>
                  {openingHours.map(({ day, morning, afternoon }) => (
                    <tr key={day} className="border-b border-practiceSkin/70">
                      <th
                        scope="row"
                        className="py-3 pr-3 font-medium text-textBlue"
                      >
                        {day}
                      </th>
                      <td className="whitespace-nowrap py-3 pr-3">{morning}</td>
                      <td className="whitespace-nowrap py-3">{afternoon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-6 leading-7 text-textGrey">
                {openingHoursNote.appointments}
                <br />
                {openingHoursNote.orthodontics}
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-backgroundLightGray shadow-lg">
              <iframe
                title="Karte zur Zahnarztpraxis & Kieferorthopädie Dres. Dumbach und Dr. Knapp Dumbach in Pegnitz"
                src={mapEmbedUrl}
                className="h-[26rem] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="font-medium text-textBlue">
                    Ihre Anfahrt zu uns
                  </p>
                  <p className="mt-1 text-sm text-textGrey">
                    {ContactInformation.address.street},{" "}
                    {ContactInformation.address.postcode}{" "}
                    {ContactInformation.address.city}
                  </p>
                </div>
                <div className="ml-auto flex flex-wrap justify-end gap-x-5 gap-y-2 text-right text-sm font-medium">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-practiceRed underline decoration-practiceRed/50 underline-offset-4 transition-colors hover:text-textBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed"
                  >
                    In Google Maps öffnen
                  </a>
                  <a
                    href={appleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-practiceRed underline decoration-practiceRed/50 underline-offset-4 transition-colors hover:text-textBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed"
                  >
                    In Apple Maps öffnen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
