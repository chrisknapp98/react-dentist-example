import PhoneIcon from '@/icons/phone.svg';
import MailIcon from '@/icons/mail.svg';
import MapPinIcon from '@/icons/map-pin.svg';

type ContactItemProps = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  alt: string;
  label: string;
  children: React.ReactNode;
  href?: string;
};

function ContactItem({ icon: Icon, alt, label, children, href }: ContactItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-center items-center space-x-2 text-lg font-bold">
        <Icon className="w-6 h-6" aria-label={alt} />
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
            icon={PhoneIcon}
            alt="Telefon-Symbol"
            label="Telefonnummer"
            href="tel:09241 8822"
          >
            09241 8822
          </ContactItem>

          <ContactItem
            icon={MailIcon}
            alt="E-Mail-Symbol"
            label="E-Mail-Adresse"
            href="mailto:praxis.dumbach@outlook.de"
          >
            praxis.dumbach@outlook.de
          </ContactItem>

          <ContactItem
            icon={MapPinIcon}
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