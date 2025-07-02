import Image from "next/image";

function ContactItem({ icon, iconWidth, iconHeight, alt, label, children, href }: {
    icon: string;
    iconWidth?: number
    iconHeight?: number
    alt: string;
    label: string;
    children: React.ReactNode;
    href?: string;
  }) {
    return (
      <div className="space-y-2">
        <div className="text-lg font-bold flex space-x-2 justify-center items-center">
          <Image src={`/icons/${icon}`} alt={alt} width={iconWidth ? iconWidth : 24} height={iconHeight ? iconHeight : 24} />
          <span>{label}</span>
        </div>
        <div>
        {href ? (
          <a href={href} className="underline">
            {children}
          </a>
        ) : (
          <div>{children}</div>
        )}
        </div>
      </div>
    );
  }
  
  export function ContactSection() {
    return (
      <section className="px-6 sm:px-20 py-10 bg-gray-100">
        <div className="bg-practiceRed rounded-3xl text-practiceWhite py-20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-14 md:gap-6">
            <ContactItem
              icon="phone.svg"
              alt="Telefon-Symbol"
              label="Telefonnummer"
              href="tel:09241 8822"
            >
              09241 8822
            </ContactItem>
  
            <ContactItem
              icon="envelope.svg"
              alt="E-Mail-Symbol"
              label="E-Mail-Adresse"
              href="mailto:praxis.dumbach@outlook.de"
            >
              praxis.dumbach@outlook.de
            </ContactItem>
  
            <ContactItem
              icon="mappin.and.ellipse.svg"
              iconWidth={19}
              iconHeight={19}
              alt="Standort-Symbol"
              label="Adresse"
            >
              Bahnhofstr. 16, 91257 Pegnitz
            </ContactItem>
          </div>
        </div>
      </section>
    );
  }