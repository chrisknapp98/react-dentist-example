import { ContactSection } from "./home/contactSection";
import { WelcomeBanner } from "./comingSoon/welcomeBanner";
import { OpeningHoursAndRecentNews } from "./comingSoon/openingHoursAndRecentNews";
import Image from "next/image";
import { Footer } from "./common/footer/footer";

export default function Home() {
  return (
    <div className="font-sans">
      <WelcomeBanner />
      <OpeningHoursAndRecentNews />
      <div className="relative w-full h-48 md:h-96 z-0">
        <Image
            src="/images/praxis_foto.png"
            alt="Willkommen in unserer Zahnarztpraxis"
            fill
            className="object-cover w-full"
          />
      </div>
      <ContactSection />
      <Footer />
    </div>
  )
}
