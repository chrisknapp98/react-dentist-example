import Image from "next/image";
import { Button } from "../common/button/button";
import { TextualLogo } from "../common/logo/textualLogo";
import { Header } from "../common/header/header";
import { RoundedFrame } from "../common/frame/roundedFrame";
import { ContactHeader } from "../common/header/contactHeader";

export function WelcomeBanner() {
  return (
    <section >
      <div className="flex flex-col w-full min-h-screen bg-backgroundGray shadow-md text-text-grey pb-10 sm:pb-0 px-6 lg:px-32 justify-center gap-6 md:gap-10 items-center
">
        <div className="h-56 md:h-48"></div>
      {/* <div className="w-full flex flex-col items-center gap-6"> */}
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
        Rufen Sie gerne an unter <a href="tel:09241 8822">09241 8822</a>.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch justify-center py-10 px-6 sm:px-20">
        <RoundedFrame title="Sprechzeiten ab 01.09.2025">
          <table className="w-full text-left text-nowrap">
            <tbody>
              <tr>
                <td className="px-2">Montag</td>
                <td className="px-2">08:00 - 12:00</td>
                <td className="px-2">13:45 - 17:45</td>
              </tr>
              <tr>
                <td className="px-2">Dienstag</td>
                <td className="px-2">08:00 - 12:00</td>
                <td className="px-2">13:45 - 17:45</td>
              </tr>
              <tr>
                <td className="px-2">Mittwoch</td>
                <td className="px-2">08:00 - 12:00</td>
                <td className="px-2">13:45 - 17:45</td>
              </tr>
              <tr>
                <td className="px-2">Donnerstag</td>
                <td className="px-2">08:00 - 12:00</td>
                <td className="px-2">13:45 - 17:45</td>
              </tr>
              <tr>
                <td className="px-2">Freitag</td>
                <td className="px-2">08:00 - 13:00</td>
                <td className="px-2"></td>
              </tr>
            </tbody>
          </table>
        </RoundedFrame>
        <RoundedFrame title="Aktuelles">
          <div className="justify-start">
          Für unser Team suchen wir noch Verstärkung in der Assistenz. 
          <br />
          <br />
          Wir freuen uns über Ihre Bewerbung an: 
          <br />
          <a href="mailto:praxis.dumbach@outlook.de">praxis.dumbach@outlook.de</a>!
          </div>
        </RoundedFrame>
      </div>

      <div className="relative w-full h-96 z-0">
      <Image
          src="/images/praxis_foto.png"
          alt="Willkommen in unserer Zahnarztpraxis"
          fill
          className="object-cover w-full"
          priority
        />
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
