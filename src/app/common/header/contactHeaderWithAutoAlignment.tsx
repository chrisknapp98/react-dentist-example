import PhoneIcon from '@/icons/phone.svg';
import MailIcon from '@/icons/mail.svg';
import { ContactInformation } from '../contactInformation/contactInformation';
// import InstagramIcon from '@/icons/instagram.svg';

export function ContactHeaderWithAutoAlignment() {
  return (
    <div className="flex gap-2 vs:gap-4 sm:gap-6 md:gap-10 w-full bg-practiceRed text-practiceWhite justify-center xl:justify-end py-4 text-xs vs:text-sm px-0 md:px-20">
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