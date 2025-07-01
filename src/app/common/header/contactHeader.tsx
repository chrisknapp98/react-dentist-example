import Image from "next/image"

export function ContactHeader(props: { alignment?: "center" | "end" }) {
    const alignmentClass = props.alignment === "center" ? "justify-center" : "justify-end";

    return (
        <div className={`flex gap-6 md:gap-10 w-full bg-practiceRed text-practiceWhite ${alignmentClass} py-4 text-sm px-2 md:px-20`}>
            <div>
            <Image src="/icons/phone.svg" alt="Telefon Icon" width={20} height={20} className="inline-block mr-2" />
            <a href="tel:092418822" className="underline">09241 8822</a>
            </div>
            <div>
            <Image src="/icons/envelope.svg" alt="E-Mail Icon" width={20} height={20} className="inline-block mr-2" />
            <a href="mailto:praxis.dumbach@outlook.de" className="underline">praxis.dumbach@outlook.de</a>
            </div>
            <a href="https://www.instagram.com/" className="hidden md:block">
            <Image src="/icons/instagram.svg" alt="Instagram Icon" width={20} height={20} className="inline-block mr-2" />
            </a>
        </div>
    )
}