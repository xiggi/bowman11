export type TripStatus = "past" | "current" | "planned";

export type Trip = {
  year: number;
  title: string;
  locationLabel: string;
  datesLabel: string;
  coordinates?: string;
  status: TripStatus;
  note?: string;
};

export const site = {
  name: "Bowman 11",
  edition: "XI",
  tagline: "kept like a field note",
  description:
    "A yearly camp for people who already know the punchlines. Memory, smoke, bad maps.",
  coldOpen: "Annual camp · friends only · no platform",
} as const;

export const coordination = {
  rsvpLabel: "RSVP",
  rsvpUrl: "https://forms.gle/placeholder-rsvp",
  datesLabel: "When2Meet",
  datesUrl: "https://www.when2meet.com/",
  gearLabel: "Shared doc",
  gearUrl: "https://docs.google.com/",
} as const;

export const currentTrip: Trip = {
  year: 2026,
  title: "This year",
  locationLabel: "Sierra spine · exact site pending",
  datesLabel: "Labor Day window · confirm in thread",
  coordinates: "38.2° N · 119.5° W · provisional",
  status: "planned",
  note: "Two vehicles minimum. Fire ban assumed until reversed.",
};

export const trips: Trip[] = [
  {
    year: 2024,
    title: "IX",
    locationLabel: "Eldorado NF",
    datesLabel: "Aug 30 – Sep 2",
    coordinates: "38.8° N · 120.1° W",
    status: "past",
    note: "Rain on night two. Still worth it.",
  },
  {
    year: 2023,
    title: "VIII",
    locationLabel: "Stanislaus",
    datesLabel: "Sep 1 – Sep 4",
    status: "past",
  },
  {
    year: 2022,
    title: "VII",
    locationLabel: "Lost coast pullout",
    datesLabel: "Aug 27 – Aug 29",
    status: "past",
    note: "The year of the tarp argument.",
  },
  currentTrip,
];
