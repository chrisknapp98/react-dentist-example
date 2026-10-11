import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ContactInformation } from "./common/contactInformation/contactInformation";
import { services } from "./leistungen/services";

const PRACTICE_NAME =
  "Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach";

export const metadata: Metadata = {
  metadataBase: new URL(ContactInformation.website),
  title: PRACTICE_NAME,
  description:
    "Ihre Zahnarztpraxis mit Kieferorthopädie in Pegnitz. Moderne Zahnmedizin, zentral gelegen. Zugang mit Rampe nach Voranmeldung.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: ContactInformation.website,
    title: PRACTICE_NAME,
    description:
      "Moderne Zahnmedizin & Kieferorthopädie in Pegnitz. Zentrale Lage. Zugang mit Rampe nach Voranmeldung.",
    siteName: PRACTICE_NAME,
    locale: "de_DE",
    images: [
      {
        url: "/images/praxis_foto_cropped.jpg",
        width: 1200,
        height: 630,
        alt: "Außenansicht der Zahnarztpraxis in Pegnitz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PRACTICE_NAME,
    description:
      "Moderne Zahnmedizin & Kieferorthopädie in Pegnitz. Zentrale Lage. Zugang mit Rampe nach Voranmeldung.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${ContactInformation.website}/#practice`,
    name: PRACTICE_NAME,
    url: ContactInformation.website,
    telephone: ContactInformation.telephoneDisplay,
    email: ContactInformation.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: ContactInformation.address.street,
      postalCode: ContactInformation.address.postcode,
      addressLocality: ContactInformation.address.city,
      addressRegion: ContactInformation.address.region,
      addressCountry: ContactInformation.address.country,
    },
    description:
      "Moderne Zahnmedizin & Kieferorthopädie in Pegnitz. Zentrale Lage. Zugang mit Rampe nach Voranmeldung.",
    // Languages spoken by the doctors; this does not describe booking or other staff.
    knowsLanguage: ["de", "en", "es", "fr"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Terminvereinbarung",
      telephone: ContactInformation.telephoneDisplay,
      email: ContactInformation.email,
    },
    areaServed: [
      "Pegnitz",
      "Bayreuth",
      "Creußen",
      "Auerbach",
      "Lauf",
      "Plech",
      "Kirchenthumbach",
      "Eschenbach",
    ],
    amenityFeature: [
      {
        "@type": "LocationFeatureSpecification",
        name: "Zugang mit Rampe nach Voranmeldung",
        description:
          "Bitte kündigen Sie Ihren Besuch mit Rollstuhl oder Rollator im Vorfeld an, damit wir eine Rampe am Eingang bereitstellen können.",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Nähe Bahnhof",
        value: true,
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Zahnmedizin & Kieferorthopädie",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          serviceType: service.category,
          url: new URL("/leistungen", ContactInformation.website).href,
        },
      })),
    },
  };

  return (
    <html lang="de">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </head>
      <body className="antialiased">
        {children}
        <script
          id="ld-dentist"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: "#9b2c4e", // practice red
};
