import Link from "next/link";

export function Footer() { 
    return (
        <footer className="px-6 sm:px-20 py-8">
            <p className="text-sm">© Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach, 2026</p>
            <p className="text-sm mt-4 text-gray-600">
                <Link href="/impressum">Impressum</Link>
                {" | "}
                <Link href="/datenschutz">Datenschutz</Link>
            </p>
        </footer>
    );
}
