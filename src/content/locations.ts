export type Location = {
  id: string;
  name: string;
  region: string;
  year?: number;
  coordinates?: string;
  note?: string;
};

export const locations: Location[] = [
  {
    id: "eldorado-24",
    name: "Eldorado NF",
    region: "CA · alpine",
    year: 2024,
    coordinates: "38.8° N · 120.1° W",
    note: "Bear box drama. Resolved.",
  },
  {
    id: "stanislaus-23",
    name: "Stanislaus",
    region: "CA · river",
    year: 2023,
    coordinates: "38.3° N · 119.9° W",
  },
  {
    id: "lost-coast-22",
    name: "Lost coast pullout",
    region: "CA · coast",
    year: 2022,
    note: "Wind. Always wind.",
  },
  {
    id: "sierra-26",
    name: "Sierra spine",
    region: "CA · TBD",
    year: 2026,
    coordinates: "38.2° N · 119.5° W · provisional",
    note: "Site vote open.",
  },
];
