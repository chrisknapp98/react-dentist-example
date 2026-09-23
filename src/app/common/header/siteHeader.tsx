"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoPraxis from "@/images/logo_praxis.svg";
import MenuIcon from "@/icons/menu.svg";
import CloseIcon from "@/icons/x.svg";
import InstagramIcon from "@/icons/instagram.svg";
import { ContactInformation } from "../contactInformation/contactInformation";
import { ContactHeader } from "./contactHeader";

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const navigationLinkClass = (href: string, mobile = false) =>
    `${mobile ? "block py-3" : ""} transition-colors ${
      pathname === href
        ? "text-practiceRed"
        : "[@media(hover:hover)]:hover:text-practiceRed"
    }`;

  return (
    <header>
      <ContactHeader alignment="center" />
      <div
        className={`relative z-30 bg-gray-200 shadow-md transition-[height] duration-300 ease-in-out xl:h-24 ${
          isMobileMenuOpen ? "h-[23rem] md:h-[25rem]" : "h-16 md:h-24"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-end px-5 sm:px-10 md:h-24 md:px-32">
          <Link
            href="/"
            aria-label="Zur Startseite"
            className="absolute left-5 top-5 z-20 h-[80px] w-[266px] overflow-hidden rounded-2xl shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed sm:left-12 sm:top-7 sm:h-[105px] sm:w-[350px] md:top-10 md:h-[135px] md:w-[450px] lg:left-20 lg:h-[180px] lg:w-[600px]"
          >
            <LogoPraxis className="h-full w-full" />
          </Link>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="rounded-md p-2 text-textGrey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practiceRed md:-mr-20 lg:mr-0 xl:hidden"
          >
            <span className="relative block h-7 w-7" aria-hidden="true">
              <MenuIcon
                className={`absolute inset-0 h-7 w-7 transition-all duration-200 ${
                  isMobileMenuOpen
                    ? "rotate-90 scale-75 opacity-0"
                    : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <CloseIcon
                className={`absolute inset-0 h-7 w-7 transition-all duration-200 ${
                  isMobileMenuOpen
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-75 opacity-0"
                }`}
              />
            </span>
          </button>
          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-4 text-xs font-medium text-textGrey sm:gap-7 sm:text-sm md:gap-10 md:text-base xl:absolute xl:left-[46rem] xl:flex"
          >
            <a
              href="/leistungen"
              aria-current={pathname === "/leistungen" ? "page" : undefined}
              className={navigationLinkClass("/leistungen")}
            >
              Leistungen
            </a>
            <a
              href="/praxis"
              aria-current={pathname === "/praxis" ? "page" : undefined}
              className={navigationLinkClass("/praxis")}
            >
              Praxis
            </a>
            <a
              href="/team"
              aria-current={pathname === "/team" ? "page" : undefined}
              className={navigationLinkClass("/team")}
            >
              Team
            </a>
            <a
              href="/kontakt"
              aria-current={pathname === "/kontakt" ? "page" : undefined}
              className={navigationLinkClass("/kontakt")}
            >
              Kontakt
            </a>
            <a
              href={ContactInformation.instagramLink}
              target="_blank"
              rel="noreferrer"
              aria-label="Zahnarztpraxis Dres. Dumbach auf Instagram"
              className="text-black transition-colors [@media(hover:hover)]:hover:text-practiceRed"
            >
              <InstagramIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
          <nav
            id="mobile-navigation"
            aria-label="Hauptnavigation"
            aria-hidden={!isMobileMenuOpen}
            className={`absolute left-0 top-full w-full px-5 pb-3 pt-10 text-right text-base font-medium text-textGrey transition-all duration-200 sm:px-10 md:px-32 xl:hidden ${
              isMobileMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a
              href="/leistungen"
              aria-current={pathname === "/leistungen" ? "page" : undefined}
              className={navigationLinkClass("/leistungen", true)}
            >
              Leistungen
            </a>
            <a
              href="/praxis"
              aria-current={pathname === "/praxis" ? "page" : undefined}
              className={navigationLinkClass("/praxis", true)}
            >
              Praxis
            </a>
            <a
              href="/team"
              aria-current={pathname === "/team" ? "page" : undefined}
              className={navigationLinkClass("/team", true)}
            >
              Team
            </a>
            <a
              href="/kontakt"
              aria-current={pathname === "/kontakt" ? "page" : undefined}
              className={navigationLinkClass("/kontakt", true)}
            >
              Kontakt
            </a>
            <a
              href={ContactInformation.instagramLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex py-3 transition-colors [@media(hover:hover)]:hover:text-practiceRed"
            >
              Instagram
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
