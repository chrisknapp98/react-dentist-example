import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ContactInformation } from "./common/contactInformation/contactInformation";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const PRACTICE_NAME = "Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach";

export const metadata: Metadata = {
  metadataBase: new URL(ContactInformation.website),
  title:  PRACTICE_NAME,
  description:
    "Ihre neue Zahnarztpraxis mit Kieferorthopädie in Pegnitz – ab dem 01.09.2025 für Sie da! Moderne Zahnmedizin, zentral gelegen, barrierefrei.",
  alternates: {
    canonical: ContactInformation.website,
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: ContactInformation.website,
    title: PRACTICE_NAME,
    description:
      "Moderne Zahnmedizin & Kieferorthopädie in Pegnitz. Zentrale Lage, barrierefrei. Eröffnung am 01.09.2025.",
    siteName: PRACTICE_NAME,
    locale: "de_DE",
    images: [
      {
        url: "/images/praxis_foto_cropped.png",
        width: 1200,
        height: 630,
        alt: "Außenansicht der Zahnarztpraxis in Pegnitz"
      }
    ]
  },
  twitter: {
    card: "summary",
    title: PRACTICE_NAME,
    description:
      "Moderne Zahnmedizin & Kieferorthopädie in Pegnitz. Eröffnung am 01.09.2025.",
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
    "name": PRACTICE_NAME,
    "url": ContactInformation.website,
    "telephone": ContactInformation.telephoneDisplay,
    "email": ContactInformation.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": ContactInformation.address.street,
      "postalCode": ContactInformation.address.postcode,
      "addressLocality": ContactInformation.address.city,
      "addressRegion": ContactInformation.address.region,
      "addressCountry": ContactInformation.address.country
    },
    "description": "Moderne Zahnmedizin und Kieferorthopädie in Pegnitz. Eröffnung am 01.09.2025.",
    "openingDate": "2025-09-01",
    "sameAs": [
    ]
  };

  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script id="ld-dentist" type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: "#9b2c4e", // practice red
};
