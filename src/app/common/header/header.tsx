import Image from "next/image";
import { Button } from "../button/button";

export function Header() {
    return (
      <header className="w-full">
        <div className="w-full bg-practiceRed text-practiceWhite text-center py-4 text-sm">
          Ankündigungen hier. Website in Arbeit
        </div>
  
        <nav className="flex justify-between items-center bg-gray-200 px-10 py-2">
          <div className="text-text-grey font-bold text-xl">
            <div className="py-4">
            <Image src="/images/logo_borderless.svg" alt="Logo Praxis Dres. Dumbach & Dr. Knapp" width={100} height={50} />
            </div>
          </div>
  
          <ul className="hidden md:flex space-x-6 text-text-grey">
            <li><a href="#">Behandlungen / Leistungen</a></li>
            <li><a href="#">Praxis</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
  
          <Button color="practiceRed">Termin buchen</Button>
        </nav>
      </header>
    );
  }
  