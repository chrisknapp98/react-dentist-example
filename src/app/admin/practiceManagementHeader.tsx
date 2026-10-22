"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@/icons/menu.svg";
import CloseIcon from "@/icons/x.svg";
import PracticeLogo from "@/images/gesund-und-gerade.svg";

const links = [
  { href: "/admin", label: "Aktuelles" },
  { href: "/admin/password", label: "Passwort ändern" },
];

type PracticeManagementHeaderProps = {
  username: string;
  isLoggingOut: boolean;
  onLogout: () => void;
};

export function PracticeManagementHeader({ username, isLoggingOut, onLogout }: PracticeManagementHeaderProps) {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const isMenuOpen = menuPath === pathname;

  return (
    <header
      className="border-t-4 border-practiceRed bg-gray-200 shadow-sm"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isMenuOpen) {
          setMenuPath(null);
          menuButton.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 px-4 py-2 sm:px-6 lg:flex-nowrap lg:gap-8">
        <Link href="/admin" onClick={() => setMenuPath(null)} aria-label="Praxisverwaltung – zur Übersicht" className="flex min-w-0 items-center gap-3 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-practiceRed">
          <span className="shrink-0 overflow-hidden rounded-lg">
            <PracticeLogo className="block h-10 w-auto sm:h-12" aria-hidden="true" focusable="false" />
          </span>
          <span className="border-l border-black/15 pl-3 text-xs font-light tracking-wide text-textBlue sm:pl-4 sm:text-base">Praxisverwaltung</span>
        </Link>
        <button
          ref={menuButton}
          type="button"
          aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isMenuOpen}
          aria-controls="practice-navigation"
          onClick={() => setMenuPath(isMenuOpen ? null : pathname)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-textGrey focus-visible:outline focus-visible:outline-2 focus-visible:outline-practiceRed lg:hidden"
        >
          <span className="relative block h-6 w-6" aria-hidden="true">
            <MenuIcon className={`absolute inset-0 h-6 w-6 transition-all duration-200 motion-reduce:transition-none ${isMenuOpen ? "rotate-90 scale-75 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
            <CloseIcon className={`absolute inset-0 h-6 w-6 transition-all duration-200 motion-reduce:transition-none ${isMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-75 opacity-0"}`} />
          </span>
        </button>
        <div className={`grid w-full transition-[grid-template-rows,opacity,visibility] duration-300 ease-in-out motion-reduce:transition-none lg:visible lg:flex lg:w-auto lg:flex-1 lg:opacity-100 ${isMenuOpen ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"}`}>
          <div className="min-h-0 overflow-hidden lg:w-full lg:overflow-visible">
        <nav
          id="practice-navigation"
          aria-label="Praxisverwaltung"
          className="flex w-full flex-col gap-1 border-t border-black/10 pb-2 pt-3 text-sm lg:flex-row lg:items-center lg:gap-6 lg:border-0 lg:p-0"
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuPath(null)}
              aria-current={pathname === href ? "page" : undefined}
              className={`flex min-h-11 items-center rounded-lg px-3 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-practiceRed lg:min-h-0 lg:rounded-sm lg:border-b-2 lg:px-0 lg:py-1 ${pathname === href ? "font-medium text-practiceRed lg:border-practiceRed" : "text-textGrey hover:text-practiceRed lg:border-transparent"}`}
            >
              {label}
            </Link>
          ))}
          <div className="mt-3 flex min-w-0 items-center justify-between gap-4 border-t border-black/10 px-3 pt-4 lg:ml-auto lg:mt-0 lg:justify-end lg:border-0 lg:p-0">
            <span className="min-w-0 max-w-48 truncate text-sm text-textGrey opacity-60 lg:max-w-32" title={username}>{username}</span>
            <button type="button" onClick={onLogout} disabled={isLoggingOut} className="min-h-11 shrink-0 rounded-full border border-practiceGrey bg-white/60 px-4 py-2 text-sm text-textGrey transition hover:border-practiceRed hover:text-practiceRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-practiceRed disabled:opacity-60">
              {isLoggingOut ? "Abmeldung läuft…" : "Abmelden"}
            </button>
          </div>
        </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
