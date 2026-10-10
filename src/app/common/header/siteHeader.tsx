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
          isMobileMenuOpen ? "h-[26rem] md:h-[28rem]" : "h-16 md:h-24"
        }`}
      >
        <div className="relative mx-auto flex h-16 max-w-[82rem] items-center justify-end px-6 sm:px-12 md:h-24 lg:px-20">
          <Link
            href="/"
            aria-label="Zahnarztpraxis Dres. Dumbach & Dr. Knapp Dumbach – zur Startseite"
            className="
              absolute left-6 top-5 z-20
              [--logo-width:266px] w-[var(--logo-width)] rounded-[calc(var(--logo-width)*20/600)]
              overflow-hidden shadow-lg
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed
              sm:left-12 sm:top-7 sm:[--logo-width:350px]
              md:top-10 md:[--logo-width:450px]
              lg:left-20 lg:[--logo-width:600px]
            "
          >
            {/* The SVG viewBox determines the height at each responsive width. */}
            <LogoPraxis className="block h-auto w-full" aria-hidden="true" focusable="false" />
          </Link>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="rounded-md p-2 text-textGrey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practiceRed xl:hidden"
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
            className="hidden items-center gap-8 text-base font-medium text-textGrey xl:flex"
          >
            <a
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={navigationLinkClass("/")}
            >
              Startseite
            </a>
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
            className={`absolute left-0 top-full w-full px-6 pb-3 pt-10 text-right text-base font-medium text-textGrey transition-all duration-200 sm:px-12 lg:px-20 xl:hidden ${
              isMobileMenuOpen
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0 pointer-events-none"
            }`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <a
              href="/"
              aria-current={pathname === "/" ? "page" : undefined}
              className={navigationLinkClass("/", true)}
            >
              Startseite
            </a>
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
