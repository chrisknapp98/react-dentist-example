import PhoneIcon from '@/icons/phone.svg';
import MailIcon from '@/icons/mail.svg';
import { ContactInformation } from '../contactInformation/contactInformation';
// import InstagramIcon from '@/icons/instagram.svg';

export function ContactHeader(props: { alignment?: "center" | "end" }) {
  const alignmentClass = props.alignment === "center" ? "justify-center" : "justify-end";

  return (
    <div className={`flex gap-6 md:gap-10 w-full bg-practiceRed text-practiceWhite ${alignmentClass} py-4 text-xs vs:text-sm px-1 vs:px-2 md:px-20`}>
      <div className="flex items-center gap-1 vs:gap-2">
        <PhoneIcon className="w-5 h-5 text-practiceWhite" />
        <a href={ContactInformation.telephoneLink} className="underline">{ContactInformation.telephoneDisplay}</a>
      </div>
      <div className="flex items-center gap-1 vs:gap-2">
        <MailIcon className="w-5 h-5 text-practiceWhite" />
        <a href={ContactInformation.emailLink} className="underline">{ContactInformation.email}</a>
      </div>
      {/* <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hidden md:flex items-center">
        <InstagramIcon className="w-5 h-5 text-practiceWhite" />
      </a> */}
    </div>
  );
}