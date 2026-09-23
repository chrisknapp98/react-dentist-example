"use client";

import { useState } from "react";
import ChevronDownIcon from "@/icons/chevron-down.svg";
import { serviceCategories, type Service } from "./services";

export function ServicesAccordion({
  services,
}: {
  services: readonly Service[];
}) {
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(0);
  return (
    <div className="space-y-10 sm:space-y-12">
      {serviceCategories.map((category) => {
        const categoryServices = services
          .map((service, index) => ({ service, index }))
          .filter(({ service }) => service.category === category);

        return (
          <section key={category} aria-labelledby={`service-category-${category}`}>
            <h3
              id={`service-category-${category}`}
              className="mb-3 px-1 text-sm font-semibold uppercase tracking-[0.16em] text-practiceRed"
            >
              {category}
            </h3>
            <div className="overflow-hidden rounded-2xl border border-[#e3e3e3] bg-white shadow-[0_8px_24px_rgba(28,41,106,0.06)] sm:rounded-3xl">
              {categoryServices.map(({ service, index }, categoryIndex) => {
                const isOpen = openServiceIndex === index;
                const buttonId = `service-button-${index}`;
                const contentId = `service-content-${index}`;

                return (
                  <div
                    key={service.title}
                    className={`border-[#e3e3e3] ${categoryIndex === 0 ? "" : "border-t"} ${
                      isOpen ? "bg-backgroundLightGray" : "bg-white"
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
                        className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-lg font-semibold text-textGrey transition-colors [@media(hover:hover)]:hover:text-practiceRed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-practiceRed sm:px-8 sm:py-6 sm:text-xl"
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
                        <div className="px-6 pb-6 text-base leading-7 text-textGrey sm:px-8 sm:text-lg sm:leading-8">
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
          </section>
        );
      })}
    </div>
  );
}
