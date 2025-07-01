import Image from "next/image";
import { Button } from "../common/button/button";
import { TextualLogo } from "../common/logo/textualLogo";
import { Header } from "../common/header/header";

export function WelcomeBanner() {
  return (
    <section >
      <div className="relative w-full h-screen z-0">
        <Image
          src="/images/praxis_foto.png"
          alt="Willkommen in unserer Zahnarztpraxis"
          fill
          className="object-cover w-full"
          priority
        />
      </div>
      <div className="bg-backgroundGray shadow-md text-text-grey py-16 px-32 flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-5xl font-thin text-white">HERZLICH WILLKOMMEN</h1>
        <p className="text-lg text-white">
        Am 01.09.2025 eröffnet unsere Zahnarztpraxis mit Kieferorthopädie in Pegnitz!
        <br />
        <br />
        In der neuen Gemeinschaftspraxis sind Dr. Stephanie Knapp Dumbach und Dr. Johannes Dumbach als Zahnärzte und Dr. Georg Dumbach als Kieferorthopäde für Sie da.
        <br />
        Nach über 30 Jahren Kieferorthopädie möchten wir Ihnen nun Behandlungen aus dem gesamten Spektrum der Zahnmedizin anbieten!
        <br />
        <br />
        Wir freuen uns darauf Sie bald in unseren neuen Behandlungsräumen in Pegnitz begrüßen zu dürfen!
        </p>
      </div>

      {/* <div className="mt-10 md:mt-0 flex flex-col items-center text-center rounded-3xl overflow-hidden">
        <Image src="/images/logo_red.png" alt="Logo Praxis Dres. Dumbach & Dr. Knapp" width={240} height={240} />
        <TextualLogo />
      </div> */}
      </div>

      {/* <div className="absolute top-0 left-0 w-full z-10"> */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
    </section>
  );
}
