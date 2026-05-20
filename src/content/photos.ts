export type Photo = {
  id: string;
  year: number;
  src?: string;
  alt: string;
  caption: string;
  roll?: string;
  place?: string;
};

export const photos: Photo[] = [
  {
    id: "24-morning-steam",
    year: 2024,
    alt: "Coffee steam in cold air, mug on tailgate",
    caption: "Morning steam. No one awake enough to talk.",
    roll: "Roll 14 · frame 03",
    place: "Eldorado · 2024",
  },
  {
    id: "23-fire-ring",
    year: 2023,
    alt: "Fire ring stones, half-built",
    caption: "The ring before the argument.",
    roll: "Roll 09 · frame 21",
    place: "Stanislaus · 2023",
  },
  {
    id: "22-tarp",
    year: 2022,
    alt: "Blue tarp rigged at odd angles between trucks",
    caption: "Engineering by committee.",
    place: "Lost coast · 2022",
  },
  {
    id: "archive-map",
    year: 2021,
    alt: "Folded topo map with pencil marks",
    caption: "Map survived. Compass did not.",
    roll: "Scan · archive",
    place: "Unknown · filed",
  },
];
