"use client";

import { useState } from "react";
import ChevronDownIcon from "@/icons/chevron-down.svg";
import type { Service } from "./services";

export function ServicesAccordion({
  services,
}: {
  services: readonly Service[];
}) {
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

  return (
    <div>
      {services.map((service, index) => {
        const isOpen = openServiceIndex === index;
        const buttonId = `service-button-${index}`;
        const contentId = `service-content-${index}`;

        return (
          <div
            key={service.title}
            style={{ zIndex: index + 1 }}
            className={`relative ${
              index === 0 ? "" : "-mt-5"
            } overflow-hidden rounded-t-2xl border-x border-t border-white sm:rounded-t-3xl sm:last:rounded-b-3xl last:rounded-b-2xl last:border-b ${
              isOpen ? "bg-backgroundLightGray" : "bg-[#d9d9d9]"
            }`}
          >
            <h2>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() =>
                  setOpenServiceIndex((openIndex) =>
                    openIndex === index ? null : index,
                  )
                }
                className={`group flex w-full items-center justify-between gap-6 px-6 pt-5 text-left text-lg font-semibold text-textGrey hover:text-practiceRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-practiceRed sm:px-12 sm:pt-6 sm:text-xl ${
                  index === services.length - 1 ? "pb-5 sm:pb-6" : "pb-10 sm:pb-11"
                }`}
              >
                <span>{service.title}</span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className={`h-6 w-6 shrink-0 transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            </h2>
            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-base leading-7 text-textGrey sm:px-12 sm:text-lg sm:leading-8">
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 first:mt-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
