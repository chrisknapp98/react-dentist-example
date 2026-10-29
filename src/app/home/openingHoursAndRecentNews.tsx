import { getPublicAnnouncements } from "../common/backend/announcements";
import { OpeningHours } from "./openingHours";
import { RecentNewsFrame } from "./recentNewsFrame";

export async function OpeningHoursAndRecentNews() {
  const announcements = await getPublicAnnouncements();

  return (
    <div className="flex min-w-0 justify-center">
      <div className="flex w-full min-w-0 max-w-6xl flex-col items-center justify-center gap-6 px-6 py-10 sm:px-20 md:gap-10 lg:flex-row lg:items-stretch">
        <OpeningHours />
        <RecentNewsFrame announcements={announcements} />
      </div>
    </div>
  );
}
