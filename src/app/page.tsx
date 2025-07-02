import { ContactSection } from "./home/contactSection";
import { WelcomeBanner } from "./comingSoon/welcomeBanner";
import { OpeningHoursAndRecentNews } from "./comingSoon/openingHoursAndRecentNews";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      <WelcomeBanner />
      <OpeningHoursAndRecentNews />
      <div className="relative w-full h-96 z-0">
        <Image
            src="/images/praxis_foto.png"
            alt="Willkommen in unserer Zahnarztpraxis"
            fill
            className="object-cover w-full"
            priority
          />
      </div>
      <ContactSection />
    </div>
  )
}
