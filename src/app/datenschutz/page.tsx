import type { Metadata } from 'next';
import { ContactInformation } from '../common/contactInformation/contactInformation';
import { Footer } from '../common/footer/footer';
import { SiteHeader } from '../common/header/siteHeader';
import { SITE_HEADER_CONTENT_TOP_PADDING } from '../common/header/siteHeaderLayout';

export const metadata: Metadata = {
    title:
        "Datenschutz | Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach",
    description:
        "Datenschutzerklärung der Zahnarztpraxis & Kieferorthopädie Dres. Dumbach & Dr. Knapp Dumbach in Pegnitz: Informationen zum Umgang mit personenbezogenen Daten.",
};

export default function Datenschutz() {
    return (
        <div className="font-sans">
            <SiteHeader />

            <main className={`px-6 pb-14 sm:px-12 md:pb-20 lg:px-20 ${SITE_HEADER_CONTENT_TOP_PADDING}`}>
                <div className="mx-auto max-w-6xl">
                    <h1 className="font-extralight text-2xl md:text-4xl uppercase">
                        Datenschutzerklärung
                    </h1>
                    <hr className="my-4 border-t border-gray-300" />

                    <div className="text-sm text-gray-800 space-y-6 leading-relaxed">
                    <article>
                        <h2 className="text-lg mb-2">1. Verantwortliche und Geltungsbereich</h2>
                        <p>Diese Datenschutzerklärung erläutert die Verarbeitung personenbezogener Daten beim Besuch dieser Website und bei Kontaktanfragen per E-Mail oder Telefon. Sie umfasst nicht die Verarbeitung von Patientendaten im Rahmen einer Behandlung.</p>
                        <p className="mt-3">Verantwortlich für die Datenverarbeitung:</p>
                        <address className="not-italic mt-2">
                            Zahnarztpraxis &amp; Kieferorthopädie Dres. Dumbach &amp; Dr. Knapp Dumbach (GbR)<br />
                            Dr. Johannes Dumbach, Dr. Stephanie Knapp Dumbach, Dr. Georg Dumbach<br />
                            {ContactInformation.address.street}<br />
                            {ContactInformation.address.postcode} {ContactInformation.address.city}<br />
                            Telefon: <a href={ContactInformation.telephoneLink} className="underline">{ContactInformation.telephoneDisplay}</a><br />
                            E-Mail: <a href={ContactInformation.emailLink} className="underline">{ContactInformation.email}</a>
                        </address>
                    </article>

                    <article>
                        <h2 className="text-lg mb-2">2. Hosting und technische Zugriffsdaten</h2>
                        <p>Unsere Website wird bei Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA, gehostet. Beim Aufruf werden insbesondere IP-Adresse, angeforderte Seite, Datum und Uhrzeit sowie technische Informationen zu Browser und Betriebssystem verarbeitet. Diese Daten dienen der Auslieferung der Website, der Fehleranalyse und dem Schutz vor Missbrauch.</p>
                        <p className="mt-3">Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren und zuverlässigen Bereitstellung der Website. Zugriffsdaten werden für die Bereitstellung, Fehleranalyse und Aufklärung von Sicherheitsvorfällen aufbewahrt und anschließend gelöscht oder anonymisiert. Die Aufbewahrungsdauer hängt von den eingesetzten Hostingdiensten und deren Einstellungen ab.</p>
                        <p className="mt-3">Eine Verarbeitung in den USA ist möglich. Vercel ist nach eigenen Angaben nach dem EU-U.S. Data Privacy Framework zertifiziert. Übermittlungen, die von dieser Zertifizierung erfasst sind, beruhen auf dem Angemessenheitsbeschluss nach Art. 45 DSGVO. Weitere Informationen finden Sie in den <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer" className="underline">Datenschutzhinweisen von Vercel</a>.</p>
                    </article>

                    <article>
                        <h2 className="text-lg mb-2">3. Kontaktaufnahme per E-Mail oder Telefon</h2>
                        <p>Bei Anfragen per E-Mail oder Telefon verarbeiten wir Ihre Kontaktdaten und den Inhalt Ihrer Nachricht, um Ihr Anliegen zu bearbeiten.</p>
                        <p className="mt-3">Unsere E-Mail-Postfächer werden von Microsoft Ireland Operations Limited über Microsoft 365 / Exchange Online bereitgestellt. Dabei verarbeitet Microsoft Nachrichten und Kommunikationsdaten, möglicherweise auch außerhalb des Europäischen Wirtschaftsraums, insbesondere in den USA. Für solche Übermittlungen sieht Microsoft insbesondere Standardvertragsklauseln nach Art. 46 DSGVO vor. Weitere Informationen: <a href="https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA" target="_blank" rel="noreferrer" className="underline">Microsoft-Datenschutzbedingungen</a>.</p>
                        <p className="mt-3">Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen, ansonsten Art. 6 Abs. 1 lit. f DSGVO mit unserem berechtigten Interesse, Ihre Anfrage zu beantworten. Für Gesundheitsdaten, die zur medizinischen Versorgung erforderlich sind, gelten Art. 9 Abs. 2 lit. h DSGVO und § 22 Abs. 1 Nr. 1 lit. b BDSG sowie die berufliche Schweigepflicht.</p>
                        <p className="mt-3">Kontaktanfragen speichern wir so lange, wie es für die Bearbeitung Ihres Anliegens und damit zusammenhängende Rückfragen erforderlich ist. Anschließend werden sie gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten oder Gründe zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen entgegenstehen. Werden Angaben Teil der Behandlungsdokumentation, gelten die hierfür maßgeblichen Aufbewahrungspflichten.</p>
                    </article>

                    <article>
                        <h2 className="text-lg mb-2">4. Cookies</h2>
                        <p>Wir setzen keine eigenen Analyse- oder Marketingdienste ein. Nach Ihrer Zustimmung zu Google Maps speichern wir Ihre Auswahl für 183 Tage in einem Cookie. Er dient ausschließlich dazu, Ihre Entscheidung zu merken. Rechtsgrundlagen sind § 25 Abs. 2 Nr. 2 TDDDG sowie Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse ist die Berücksichtigung Ihrer Auswahl.</p>
                        <p className="mt-3">Zu möglichen Cookies von Google und zum Widerruf Ihrer Einwilligung finden Sie weitere Informationen im folgenden Abschnitt.</p>
                    </article>

                    <article id="google-maps" className="scroll-mt-32">
                        <h2 className="text-lg mb-2">5. Google Maps</h2>
                        <p>Auf der Kontaktseite können Sie freiwillig eine Google-Maps-Karte zur Orientierung und Anfahrt laden. Anbieter für Nutzer im Europäischen Wirtschaftsraum ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Vor Ihrer Zustimmung wird die eingebettete Karte nicht geladen.</p>
                        <p className="mt-3">Nach einem Klick auf „Google Maps laden“ erhält Google Ihre IP-Adresse und technische Browserdaten. Google kann Nutzungsdaten verarbeiten sowie Cookies setzen oder auslesen. Wenn Sie bei Google angemeldet sind, kann Google Daten Ihrem Konto zuordnen. Eine Verarbeitung durch Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA, ist möglich.</p>
                        <p className="mt-3">Die Datenverarbeitung und einwilligungspflichtige Cookie-Zugriffe erfolgen mit Ihrer Zustimmung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG. Google LLC ist nach dem EU-U.S. Data Privacy Framework zertifiziert; Übermittlungen im Umfang dieser Zertifizierung beruhen auf Art. 45 DSGVO. Weitere Angaben zu Übermittlungen und Garantien finden Sie in <a href="https://policies.google.com/privacy/frameworks?hl=de" target="_blank" rel="noreferrer" className="underline">Googles Informationen zu Datenübermittlungen</a>.</p>
                        <p className="mt-3">Solange Ihre Zustimmung gespeichert ist, wird die Karte bei weiteren Besuchen der Kontaktseite automatisch geladen. Sie können Ihre Einwilligung jederzeit über den Button „Maps deaktivieren“ oben rechts auf der eingeblendeten Karte auf der Kontaktseite widerrufen. Dabei werden die Karte und unser Einwilligungs-Cookie entfernt. Bereits von Google gesetzte Cookies werden dadurch nicht gelöscht; Sie können diese über Ihre Browsereinstellungen entfernen.</p>
                        <p className="mt-3">Die Speicherdauer der von Google verarbeiteten Daten hängt von der Datenart und Ihren Google-Einstellungen ab. Weitere Informationen finden Sie in <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noreferrer" className="underline">Googles Datenschutzerklärung</a>. Die Karte ist optional; unsere Kontaktdaten bleiben ohne Aktivierung verfügbar.</p>
                    </article>

                    <article>
                        <h2 className="text-lg mb-2">6. Ihre Datenschutzrechte</h2>
                        <p>Unter den gesetzlichen Voraussetzungen haben Sie das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO) und Datenübertragbarkeit (Art. 20 DSGVO). Zur Ausübung Ihrer Rechte können Sie sich über die oben genannten Kontaktdaten an uns wenden.</p>
                        <p className="mt-3 font-medium">Wenn wir Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, können Sie aus Gründen, die sich aus Ihrer besonderen Situation ergeben, nach Art. 21 DSGVO Widerspruch gegen die Verarbeitung einlegen.</p>
                        <p className="mt-3">Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der zuvor auf Grundlage Ihrer Einwilligung erfolgten Verarbeitung.</p>
                        <p className="mt-3">Sie haben außerdem das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für private Stellen in Bayern ist insbesondere das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, zuständig. Informationen und ein Beschwerdeformular finden Sie unter <a href="https://www.lda.bayern.de/de/beschwerde.html" target="_blank" rel="noreferrer" className="underline">www.lda.bayern.de</a>.</p>
                    </article>

                    <article>
                        <h2 className="text-lg mb-2">7. Externe Links</h2>
                        <p>Unsere Website enthält Links zu externen Websites, beispielsweise zu Instagram, Google Maps und Apple Maps. Wenn Sie einen solchen Link öffnen, verlassen Sie unsere Website. Für die Verarbeitung Ihrer Daten auf der verlinkten Website gelten die Datenschutzhinweise des jeweiligen Anbieters.</p>
                    </article>
                    <p className="text-gray-500">Stand: 11. Oktober 2026</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
