import { RoundedFrame } from "../common/frame/roundedFrame";

export function OpeningHoursAndRecentNews() {
    return (
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch justify-center py-10 px-6 sm:px-20">
        <RoundedFrame title="Sprechzeiten ab 01.09.2025">
            <table className="w-full text-left text-nowrap">
            <tbody>
                <tr>
                <td className="px-2">Montag</td>
                <td className="px-2">8:00 – 12:00</td>
                <td className="px-2">13:45 – 17:45</td>
                </tr>
                <tr>
                <td className="px-2">Dienstag</td>
                <td className="px-2">8:00 – 12:00</td>
                <td className="px-2">13:45 – 17:45</td>
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
        </RoundedFrame>
        <RoundedFrame title="Aktuelles">
            <div className="justify-start">
            Für unser Team suchen wir noch Verstärkung in der Assistenz. 
            <br />
            <br />
            Wir freuen uns über Ihre Bewerbung an: 
            <br />
            <a href="mailto:praxis.dumbach@outlook.de">praxis.dumbach@outlook.de</a>!
            </div>
        </RoundedFrame>
        </div>
    )
}