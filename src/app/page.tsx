import { ContactSection } from "./home/contactSection";
import { WelcomeBanner } from "./comingSoon/welcomeBanner";
import { OpeningHoursAndRecentNews } from "./comingSoon/openingHoursAndRecentNews";
import Image from "next/image";
import { Footer } from "./common/footer/footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#9b2c4e" />
      </Head>

      <div className="font-sans">
        <WelcomeBanner />
        <OpeningHoursAndRecentNews />
        <div className="relative w-full h-48 md:h-96 z-0">
          <Image
              src="/images/praxis_foto.png"
              alt="Willkommen in unserer Zahnarztpraxis"
              fill
              className="object-cover w-full"
          />
        </div>
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
