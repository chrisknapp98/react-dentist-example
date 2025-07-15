import PhoneIcon from '@/icons/phone.svg';
import MailIcon from '@/icons/mail.svg';
// import InstagramIcon from '@/icons/instagram.svg';

export function ContactHeader(props: { alignment?: "center" | "end" }) {
  const alignmentClass = props.alignment === "center" ? "justify-center" : "justify-end";

  return (
    <div className={`flex gap-6 md:gap-10 w-full bg-practiceRed text-practiceWhite ${alignmentClass} py-4 text-sm px-2 md:px-20`}>
      <div className="flex items-center">
        <PhoneIcon className="w-5 h-5 mr-2 text-practiceWhite" />
        <a href="tel:092418822" className="underline">09241 8822</a>
      </div>
      <div className="flex items-center">
        <MailIcon className="w-5 h-5 mr-2 text-practiceWhite" />
        <a href="mailto:praxis.dumbach@outlook.de" className="underline">praxis.dumbach@outlook.de</a>
      </div>
      {/* <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hidden md:flex items-center">
        <InstagramIcon className="w-5 h-5 text-practiceWhite" />
      </a> */}
    </div>
  );
}