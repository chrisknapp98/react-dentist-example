import LogoPraxis from "@/images/logo_praxis.svg";
import { ContactHeader } from "./contactHeader";

export function Header() {
    return (
      <header className="w-full">
        <ContactHeader />

        <nav className="relative flex justify-between items-center bg-gray-200 px-20 py-8 z-10 shadow-md">
          <div className="absolute left-20 top-[-1px] w-[600px] h-[180px] z-20">
            <LogoPraxis className="w-full h-full rounded-b-2xl" />
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

  