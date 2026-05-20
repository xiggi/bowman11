export type Photo = {
  id: string;
  year: number;
  src: string;
  alt: string;
  caption?: string;
};

/** Memory archive images. Add entries when photos are ready to publish. */
export const photos: Photo[] = [];
