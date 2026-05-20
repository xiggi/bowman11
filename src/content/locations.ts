export type Location = {
  id: string;
  name: string;
  region: string;
  year?: number;
  note?: string;
};

/** Atlas / map spine. Coordinates and map UI come later. */
export const locations: Location[] = [];
