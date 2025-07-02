import Image from "next/image";
import { ContactHeaderWithAutoAlignment } from "./contactHeaderWithAutoAlignment";

export function ContactHeaderWithLogo() {
    return (
        <div className="w-full">
            <ContactHeaderWithAutoAlignment />
            <div className="flex justify-center xl:justify-start pb-10 lg:px-20">
                {/* <div className="absolute top-[120px] md:top-[52px] w-[350px] sm:w-[450px] md:w-[600px] h-[113px] sm:h-[140px] md:h-[180px] z-20"> */}
                <div className="px-6 md:px-20 relative top-[-3px] xl:top-[-54px] w-[350px] sm:w-[450px] md:w-[600px] h-[113px] sm:h-[140px] md:h-[180px] z-20">
                    <Image 
                    src="images/logo_praxis.svg" 
                    alt="Logo Praxis Dres. Dumbach & Dr. Knapp"
                    fill
                    className="object-contain"
                    priority
                    />
                </div>
            </div>
        </div>
    )
}