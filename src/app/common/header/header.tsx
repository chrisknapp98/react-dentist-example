import Image from "next/image";
import { Button } from "../button/button";

export function Header() {
    return (
      <header className="w-full">
        <div className="flex gap-10 w-full bg-practiceRed text-practiceWhite justify-end py-4 text-sm px-20">
          <div>
            <Image src="/icons/phone.svg" alt="Telefon Icon" width={20} height={20} className="inline-block mr-2" />
            <a href="tel:092418822" className="underline">09241 8822</a>
          </div>
          <div>
            <Image src="/icons/envelope.svg" alt="E-Mail Icon" width={20} height={20} className="inline-block mr-2" />
            <a href="mailto:praxis.dumbach@outlook.de" className="underline">praxis.dumbach@outlook.de</a>
          </div>
          <a href="https://www.instagram.com/">
            <Image src="/icons/instagram.svg" alt="Instagram Icon" width={20} height={20} className="inline-block mr-2" />
          </a>
        </div>

        <nav className="relative flex justify-between items-center bg-gray-200 px-20 py-8 z-10 shadow-md">
          <div className="absolute left-20 top-[-1px] w-[600px] h-[180px] z-20">
            <Image
              src="/images/logo_praxis.svg"
              alt="Logo Praxis Dres. Dumbach & Dr. Knapp"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Empty space to the left so layout stays correct */}
          <div className="w-96" />

          {/* Nav items */}
          <ul className="hidden md:flex space-x-10 text-text-grey text-base">
            <li><a href="#">Leistungen</a></li>
            <li><a href="#">Praxis</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Karriere</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  // <Button color="practiceRed">Termin buchen</Button>

  