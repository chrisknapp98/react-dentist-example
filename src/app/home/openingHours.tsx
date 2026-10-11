import { RoundedFrame } from "../common/frame/roundedFrame";
import { openingHours, openingHoursNote } from "../common/openingHours/openingHours";

export function OpeningHours() {
    return (
        <RoundedFrame title="Sprechzeiten">
            <div>
            <table className="w-full text-left text-nowrap text-sm vs:text-md sm:text-lg font-light">
            <tbody>
                {openingHours.map(({ day, morning, afternoon }) => (
                    <tr key={day}>
                    <td className="px-2">{day}</td>
                    <td className="px-2">{morning}</td>
                    <td className="px-2">{afternoon}</td>
                    </tr>
                ))}
            </tbody>
            </table>
            <p className="font-light text-sm vs:text-md sm:text-lg mt-2 px-2">
                {openingHoursNote.appointments}
                <br />
                {openingHoursNote.orthodontics}
            </p>
            </div>
        </RoundedFrame>
    )
}
