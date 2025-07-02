import { Footer } from "../common/footer/footer";
import { ContactHeaderWithLogo } from "../common/header/contactHeaderWithLogo";

export default function Impressum() {
    return (
        <div className="w-full font-sans">
            {/* <div className="absolute top-0 left-0 w-full z-10"> */}
                {/* <div className="fixed top-0 left-0 w-full z-50"> */}
            <ContactHeaderWithLogo />

            <div className="px-6 mb-6 sm:px-20">
                <h1 className="font-extralight text-4xl">IMPRESSUM</h1>
                <hr className="my-4 border-t border-gray-300" />
                <div className="text-sm text-gray-800 space-y-6 leading-relaxed">
                    <div>
                        <h2 className="text-lg mb-2">Angaben gemäß § 5 TMG</h2>
                        <p>
                        Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach<br />
                        Dr. Johannes Dumbach, Dr. Stephanie Knapp Dumbach, Dr. Georg Dumbach<br />
                        Bahnhofstr. 16<br />
                        91257 Pegnitz
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg mb-2">Kontakt</h2>
                        <p>
                        Telefon: <a href="tel:092418822" className="underline">09241 8822</a><br />
                        E-Mail: <a href="mailto:info@praxis-drdumbach.de" className="underline">info@praxis-drdumbach.de</a><br />
                        Website: <a href="https://zahnarztpraxis-dumbach.de" className="underline" target="_blank" rel="noopener noreferrer">zahnarztpraxis-dumbach.de</a>
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg mb-2">Aufsichtsbehörde</h2>
                        <p>
                        Regierung von Unterfranken<br />
                        Peterplatz 9<br />
                        97070 Würzburg<br />
                        <a href="http://www.regierung.unterfranken.bayern.de" target="_blank" rel="noopener noreferrer" className="underline">
                            http://www.regierung.unterfranken.bayern.de
                        </a>
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg mb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                        <p>
                        Berufsbezeichnung:<br />
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Zahnärzte (Dr. med. dent. Johannes Dumbach & Dr. med. dent. Stephanie Knapp Dumbach)</li>
                            <li>Fachzahnarzt für Kieferorthopädie (Dr. med. dent. Georg Dumbach)</li>
                        </ul>
                        <p>
                        <br />
                        Zuständige Kammer:<br />
                        Bayerische Landeszahnärztekammer<br />
                        Flößergasse 1<br />
                        81369 München
                        </p>
                        <p>
                        Berufsbezeichnungen und Approbationen verliehen durch Bundesland Bayern / Bundesrepublik Deutschland
                        </p>
                        <p>
                        Es gelten folgende berufsrechtliche Regelungen:<br />
                        Berufsordnung für die bayerischen Zahnärzte, Gebührenordnung für Zahnärzte, Heilberufe-Kammergesetz, Zahnheilkundegesetz<br />
                        einsehbar unter:{" "}
                        <a
                            href="https://www.blzk.de/blzk/site.nsf/id/pa_berufsrechtliche_regelungen.html"
                            className="underline break-words"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.blzk.de/blzk/site.nsf/id/pa_berufsrechtliche_regelungen.html
                        </a>
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg mb-2">Angaben zur Berufshaftpflichtversicherung</h2>
                        <p>
                        Name und Sitz des Versicherers:<br />
                        Bayerischer Versicherungsverband Versicherungsaktiengesellschaft<br />
                        Maximilianstr. 53<br />
                        80530 München<br />
                        Geltungsraum der Versicherung: Deutschland
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg mb-2">EU-Streitschlichtung</h2>
                        <p>
                        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                        <a
                            href="https://ec.europa.eu/consumers/odr/"
                            className="underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://ec.europa.eu/consumers/odr/
                        </a>
                        .<br />
                        Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-lg mb-2">Verbraucherstreitbeilegung/&#8203;Universalschlichtungsstelle</h2>
                        <p>
                        Es besteht keine Bereitschaft oder Verpflichtung, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
