export type TripStatus = "past" | "current" | "planned";

export type Trip = {
  year: number;
  title: string;
  locationLabel: string;
  datesLabel: string;
  status: TripStatus;
};

/** Site-wide copy. Replace placeholders when trip details are known. */
export const site = {
  name: "Annual Camp",
  tagline: "A yearly camping trip, kept like a field note.",
  description:
    "A small archive for friends — memory, place, and whatever this year becomes.",
} as const;

/** The trip featured on the landing page. */
export const currentTrip: Trip = {
  year: 2026,
  title: "This year",
  locationLabel: "Location TBD",
  datesLabel: "Dates TBD",
  status: "planned",
};

/** All trips, oldest first. Add years as the archive grows. */
export const trips: Trip[] = [
  {
    year: 2026,
    title: "This year",
    locationLabel: "Location TBD",
    datesLabel: "Dates TBD",
    status: "planned",
  },
];
