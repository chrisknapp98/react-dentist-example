import Image from "next/image";
import { Header } from "../common/header/header";
import { RoundedFrame } from "../common/frame/roundedFrame";

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

      <div className="flex justify-center items-center p-10 gap-10">
        <RoundedFrame title="Sprechzeiten ab 01.09.2025">
          {/* table with each day of the week as rows. first column are the days of the week. second col is the first timewindow, third col is the second opening time window */}
          <table className="w-full text-left">
            {/* <thead>
              <tr>
                <th className="px-4 py-2">Tag</th>
                <th className="px-4 py-2">Erste Sprechstunde</th>
                <th className="px-4 py-2">Zweite Sprechstunde</th>
              </tr>
            </thead> */}
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
                <td className="px-2"></td> {/* No second time window */}
              </tr>
            </tbody>
          </table>
        </RoundedFrame>
        <RoundedFrame title="Aktuelles">
        Für unser Team suchen wir noch Verstärkung in der Assistenz. 
        <br />
        <br />
        Wir freuen uns über Ihre Bewerbung an: 
        <br />
        praxis.dumbach@outlook.de!
        </RoundedFrame>
      </div>
      {/* <div className="absolute top-0 left-0 w-full z-10"> */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
    </section>
  );
}
