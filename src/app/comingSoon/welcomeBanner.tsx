import Image from "next/image";
import { ContactHeader } from "../common/header/contactHeader";

export function WelcomeBanner() {
  return (
    <section >
      <div className="flex flex-col w-full bg-backgroundGray shadow-md text-text-grey pt-64 sm:pt-72 md:pt-[350px] pb-10 px-6 lg:px-32 xl:px-56 justify-start gap-6 md:gap-10 items-center">
        <h1 className="text-3xl md:text-5xl font-thin text-white">HERZLICH WILLKOMMEN</h1>
        <p className="text-lg text-white text-center">
        Am 01.09.2025 eröffnet unsere Zahnarztpraxis mit Kieferorthopädie in Pegnitz!
        <br />
        <br />
        In der neuen Gemeinschaftspraxis sind Dr. Stephanie Knapp Dumbach und Dr. Johannes Dumbach als Zahnärzte und Dr. Georg Dumbach als Kieferorthopäde für Sie da.
        <br />
        Nach über 30 Jahren Kieferorthopädie möchten wir Ihnen nun Behandlungen aus dem gesamten Spektrum der Zahnmedizin anbieten!
        <br />
        <br />
        Wir freuen uns darauf Sie bald in unseren neuen Behandlungsräumen in Pegnitz begrüßen zu dürfen!
        <br />
        <br />
        Ab sofort können Sie auch zahnärztliche Termine bei uns vereinbaren. Möchten Sie eine Kontrolluntersuchung, Beratung oder Zahnreinigung? 
        <br />
        <br />
        Rufen Sie gerne an unter <a href="tel:09241 8822" className="underline">09241 8822</a>.
        </p>
      </div>

      <div className="absolute top-0 left-0 w-full z-10">
      {/* <div className="fixed top-0 left-0 w-full z-50"> */}
        <div>
            <ContactHeader alignment="center" />
            <div className="flex justify-center pt-4 pb-10 md:pb-20 bg-gray-200 font-light text-4xl shadow-lg">
                <p>COMING SOON!</p>
                <div className="absolute top-[120px] md:top-[130px] w-[350px] sm:w-[450px] md:w-[600px] h-[113px] sm:h-[140px] md:h-[180px] z-20">
                  <Image 
                    src="images/logo_praxis_rounded.svg" 
                    alt="Logo Praxis Dres. Dumbach & Dr. Knapp"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
