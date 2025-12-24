import { RoundedFrame } from "../common/frame/roundedFrame";

export function OpeningHoursAndRecentNews() {
    return (
        <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch justify-center py-10 px-6 sm:px-20">
        <RoundedFrame title="Sprechzeiten">
            <div>
            <table className="w-full text-left text-nowrap text-sm vs:text-md sm:text-lg font-light">
            <tbody>
                <tr>
                <td className="px-2">Montag</td>
                <td className="px-2">8:00 – 12:00</td>
                <td className="px-2">13:00 – 17:45</td>
                </tr>
                <tr>
                <td className="px-2">Dienstag</td>
                <td className="px-2">8:00 – 12:00</td>
                <td className="px-2">13:00 – 17:45</td>
                </tr>
                <tr>
                <td className="px-2">Mittwoch</td>
                <td className="px-2">8:00 – 12:00</td>
                <td className="px-2">13:45 – 17:45</td>
                </tr>
                <tr>
                <td className="px-2">Donnerstag</td>
                <td className="px-2">8:00 – 12:00</td>
                <td className="px-2">13:45 – 17:45</td>
                </tr>
                <tr>
                <td className="px-2">Freitag</td>
                <td className="px-2">8:00 – 13:00</td>
                <td className="px-2"></td>
                </tr>
            </tbody>
            </table>
            <p className="font-light text-sm vs:text-md sm:text-lg mt-2 px-2">
                Termine nach Vereinbarung.
                <br />
                Kieferorthopädische Termine am Freitag&shy;nachmittag nach Absprache.
            </p>
            </div>
        </RoundedFrame>
        <RoundedFrame title="Aktuelles">
            <div className="justify-start text-sm vs:text-md sm:text-lg font-light">
                Wir sind vom 24.12.2025–06.01.2026 im Urlaub.
                <br />
                In dringenden Fällen wenden Sie sich bitte an den zahnärztlichen Notdienst (
                <a
                    href="https://www.notdienst-zahn.de"
                    className="underline whitespace-nowrap"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    www.notdienst-zahn.de
                </a>
                ).
                <br />
                Ab dem 07.01.2026 sind wir wieder für Sie da!
            </div>
        </RoundedFrame>
        </div>
        </div>
    )
}