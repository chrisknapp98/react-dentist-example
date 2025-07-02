import Link from "next/link";

export function Footer() { 
    return (
        <footer className="px-6 sm:px-20 py-4">
            <p className="text-sm">© Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach, 2025</p>
            <p className="text-xs mt-2">
                <Link href="/impressum">Impressum</Link>
            </p>
        </footer>
    );
}
