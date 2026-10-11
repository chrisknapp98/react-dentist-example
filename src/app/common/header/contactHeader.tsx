"use client";

import { useEffect, useRef, useState } from "react";
import PhoneIcon from '@/icons/phone.svg';
import MailIcon from '@/icons/mail.svg';
import { ContactInformation } from '../contactInformation/contactInformation';

const CONTACT_HEADER_HEIGHT = 52;

export function ContactHeader(props: { alignment?: "center" | "end" }) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const alignmentClass = props.alignment === "center" ? "justify-center" : "justify-end";

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(
        currentScrollY <= CONTACT_HEADER_HEIGHT ||
          currentScrollY <= lastScrollY.current,
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div aria-hidden="true" className="h-[52px]" />
      <div
        className={`fixed inset-x-0 top-0 z-50 flex w-full gap-2 bg-practiceRed px-0 py-4 text-xs text-practiceWhite transition-transform duration-200 vs:gap-4 vs:text-sm sm:gap-6 md:gap-10 md:px-20 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${alignmentClass}`}
      >
        <div className="flex items-center gap-1 vs:gap-2">
          <PhoneIcon className="w-5 h-5 text-practiceWhite" />
          <a href={ContactInformation.telephoneLink} className="underline">{ContactInformation.telephoneDisplay}</a>
        </div>
        <div className="flex items-center gap-1 vs:gap-2">
          <MailIcon className="w-5 h-5 text-practiceWhite" />
          <a href={ContactInformation.emailLink} className="underline">{ContactInformation.email}</a>
        </div>
      </div>
    </>
  );
}
