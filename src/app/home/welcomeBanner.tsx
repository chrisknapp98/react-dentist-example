import Image from "next/image";
import { Button } from "../common/button/button";
import { TextualLogo } from "../common/logo/textualLogo";

export function WelcomeBanner() {
  return (
    <section className="bg-white shadow-md text-text-grey py-16 px-32 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-md">
        <h1 className="text-4xl font-light text-textLightBlue">Schöne Zähne –</h1>
        <h2 className="text-3xl font-light text-textBlue mb-4">das ist ein Grund zum Lächeln.</h2>
        <p className="mb-6 text-text-grey">
        In unserer Zahnarztpraxis wollen wir Ihnen gemeinsam mit unserem Team viele Gründe zum Lächeln geben: Aufgrund eines herzlichen Empfangs in unserer Praxis, einer angenehmen, schmerzfreien und kompetenten Behandlung und vor allem: aufgrund von optimaler Mund- und Zahngesundheit.
        </p>
        <Button color="practiceRed">
          Lernen Sie uns kennen
        </Button>
      </div>

      <div className="mt-10 md:mt-0 flex flex-col items-center text-center rounded-3xl overflow-hidden">
        <Image src="/images/logo_red.png" alt="Logo Praxis Dres. Dumbach & Dr. Knapp" width={240} height={240} />
        <TextualLogo />
      </div>
    </section>
  );
}
