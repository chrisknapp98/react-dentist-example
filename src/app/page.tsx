import { Header } from "./common/header/header";
import { ContactSection } from "./home/contactSection";
import { WelcomeBanner } from "./comingSoon/welcomeBanner";

export default function Home() {
  return (
    <div className="font-sans">
      {/* <Header /> */}
      <WelcomeBanner />
      <ContactSection />
    </div>
  )
}
