export const openingHours = [
  { day: "Montag", morning: "8:00 – 12:00", afternoon: "13:00 – 17:45" },
  { day: "Dienstag", morning: "8:00 – 12:00", afternoon: "13:00 – 17:45" },
  { day: "Mittwoch", morning: "8:00 – 12:00", afternoon: "13:45 – 17:45" },
  { day: "Donnerstag", morning: "8:00 – 12:00", afternoon: "13:45 – 17:45" },
  { day: "Freitag", morning: "8:00 – 13:00", afternoon: "" },
] as const;

export const openingHoursNote = {
  appointments: "Termine nach Vereinbarung.",
  orthodontics:
    "Kieferorthopädische Termine am Freitag\u00adnachmittag nach Absprache.",
} as const;
