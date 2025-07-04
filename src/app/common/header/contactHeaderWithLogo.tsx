import LogoPraxis from "@/images/logo_praxis.svg";
import { ContactHeaderWithAutoAlignment } from "./contactHeaderWithAutoAlignment";
import Link from "next/link";

export function ContactHeaderWithLogo() {
    return (
        <div className="w-full">
            <ContactHeaderWithAutoAlignment />
            <div className="flex justify-center xl:justify-start pb-10 lg:px-20">
                {/* <div className="absolute top-[120px] md:top-[52px] w-[350px] sm:w-[450px] md:w-[600px] h-[113px] sm:h-[140px] md:h-[180px] z-20"> */}
                <div className="relative xl:top-[-54px] w-[350px] sm:w-[450px] md:w-[600px] h-[105px] sm:h-[135px] md:h-[180px] z-20">
                    <Link href="/">
                        <LogoPraxis className="w-full h-full rounded-b-2xl" />
                    </Link>
                </div>
            </div>
        </div>
    )
}