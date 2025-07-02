import Image from 'next/image';
import { ContactHeader } from '../common/header/contactHeader';
import { Footer } from '../common/footer/footer';

export default function Datenschutz() {
    return (
        <div className="font-sans">
            {/* <div className="absolute top-0 left-0 w-full z-10"> */}
                {/* <div className="fixed top-0 left-0 w-full z-50"> */}
            <div>
                <div className="w-full">
                    <ContactHeader alignment="center" />
                    <div className="flex justify-center pb-10 md:pb-20 font-light text-4xl">
                        {/* <div className="absolute top-[120px] md:top-[52px] w-[350px] sm:w-[450px] md:w-[600px] h-[113px] sm:h-[140px] md:h-[180px] z-20"> */}
                        <div className="relative top-[-3px] md:top-[-1px] w-[350px] sm:w-[450px] md:w-[600px] h-[113px] sm:h-[140px] md:h-[180px] z-20">
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
            </div>

            <div className="px-6 mb-6 sm:px-20">
                <h1 className="font-extralight text-4xl">{"Datenschutzerklärung (Entwurf)".toUpperCase()}</h1>
                <hr className="my-4 border-t border-gray-300" />
                    <div className="space-y-6 text-sm leading-relaxed">
                        <section>
                        <h2 className="text-xl font-medium mb-2">1. Allgemeine Hinweise</h2>
                        <p>
                            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p>
                            Beim Besuch dieser Website werden keine personenbezogenen Daten automatisch erhoben, sofern Sie nicht aktiv mit uns in Kontakt treten (z. B. per E-Mail oder Telefon).
                        </p>
                        </section>

                        <section>
                        <h2 className="text-xl font-medium mb-2">2. Hosting</h2>
                        <p>Unsere Website wird bei folgenden Dienstleistern gehostet:</p>
                        <p><strong>IONOS SE</strong><br />Elgendorfer Straße 57, 56410 Montabaur<br />Mit IONOS wurde ein Vertrag zur Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen.</p>
                        <p><strong>Vercel Inc.</strong><br />440 N Barranca Ave #4133, Covina, CA 91723, USA<br />Die Website wird über den Hostinganbieter Vercel bereitgestellt. Auch hier werden technische Zugriffsdaten verarbeitet.</p>
                        </section>

                        <section>
                        <h2 className="text-xl font-medium mb-2">3. Kontaktaufnahme</h2>
                        <p>
                            Wenn Sie uns per E-Mail oder telefonisch kontaktieren, werden die von Ihnen übermittelten Daten zum Zweck der Bearbeitung gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                        </section>

                        <section>
                        <h2 className="text-xl font-medium mb-2">4. Ihre Rechte</h2>
                        <p>
                            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
                        </p>
                        <address className="not-italic">
                            Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach<br />
                            Bahnhofstraße 16<br />
                            91257 Pegnitz<br />
                            Tel: <a href="tel:092418822" className="underline">09241 8822</a><br />
                            E-Mail: <a href="mailto:info@praxis-drdumbach.de" className="underline">info@praxis-drdumbach.de</a>
                        </address>
                        </section>

                        <section>
                        <h2 className="text-xl font-medium mb-2">5. Widerspruchsrecht</h2>
                        <p>
                            Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen.
                        </p>
                        </section>
                    </div>
                </div>
            <Footer />
        </div>
    )
}