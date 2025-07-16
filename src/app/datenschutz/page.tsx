import { ContactInformation } from '../common/contactInformation/contactInformation';
import { Footer } from '../common/footer/footer';
import { ContactHeaderWithLogo } from '../common/header/contactHeaderWithLogo';

export default function Datenschutz() {
    return (
        <div className="font-sans">
            <ContactHeaderWithLogo />

            <main className="px-6 mb-6 sm:px-20">
                <h1 className="font-extralight text-2xl md:text-4xl uppercase">
                    Datenschutzerklärung
                </h1>
                <hr className="my-4 border-t border-gray-300" />

                <div className="text-sm text-gray-800 space-y-6 leading-relaxed">
                    <article>
                        <h2 className="text-lg mb-2">1. Allgemeine Hinweise</h2>
                        <p>
                            Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p>
                            Beim Besuch dieser Website werden keine personenbezogenen Daten aktiv erhoben. Es findet kein Tracking statt, und es werden keine Cookies gesetzt.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-lg mb-2">2. Hosting und Zugriffsdaten</h2>
                        <p>
                            Diese Website wird technisch über die Anbieter <strong>Vercel Inc. (USA)</strong> und <strong>IONOS SE (Deutschland)</strong> bereitgestellt. Beim Aufruf der Website werden automatisch bestimmte technische Daten durch die Server erfasst, z. B. Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und Betriebssystem. Diese sogenannten Server-Logfiles werden benötigt, um die Website stabil und sicher bereitzustellen.
                        </p>
                        <p>
                            <strong>Vercel Inc.</strong><br />
                            440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
                            Bei Vercel kann es zu einer Übermittlung technischer Daten in die USA kommen. Vercel sichert den Datenschutz durch geeignete Garantien nach Art. 46 DSGVO (z. B. Standardvertragsklauseln). Vercel ist zudem nach dem EU-U.S. Data Privacy Framework zertifiziert.
                        </p>
                        <p>
                            <strong>IONOS SE</strong><br />
                            Elgendorfer Straße 57, 56410 Montabaur, Deutschland<br />
                            Mit IONOS wurde ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-lg mb-2">3. Kontaktaufnahme</h2>
                        <p>
                            Wenn Sie uns per E-Mail oder telefonisch kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage verwendet. Eine Weitergabe erfolgt nicht ohne Ihre ausdrückliche Zustimmung.
                        </p>
                    </article>

                    <article>
                        <h2 className="text-lg mb-2">4. Ihre Rechte</h2>
                        <p>
                            Sie haben das Recht auf Auskunft über die bei uns gespeicherten personenbezogenen Daten, sowie auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Außerdem haben Sie das Recht auf Datenübertragbarkeit und das Recht, sich bei einer Aufsichtsbehörde zu beschweren (z. B. beim Bayerischen Landesamt für Datenschutzaufsicht).
                        </p>
                        <p className="mt-4 font-medium">Verantwortlich für die Datenverarbeitung:</p>
                        <address className="not-italic">
                            Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach<br />
                            Bahnhofstraße 16<br />
                            91257 Pegnitz<br />
                            Tel: <a href={ContactInformation.telephoneLink} className="underline">{ContactInformation.telephoneDisplay}</a><br />
                            E-Mail: <a href={ContactInformation.emailLink} className="underline">{ContactInformation.email}</a>
                        </address>
                    </article>
                    <article>
                        <h2 className="text-lg mb-2">5. Externe Links</h2>
                        <p>
                            Unsere Website enthält Links zu externen Websites Dritter (z. B. soziale Netzwerke oder Kartendienste). Wenn Sie auf einen solchen Link klicken, verlassen Sie unsere Website. Es gelten dann die Datenschutzbestimmungen des jeweiligen Anbieters, auf die wir keinen Einfluss haben.
                        </p>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}