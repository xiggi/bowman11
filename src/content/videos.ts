export type Video = {
  id: string;
  title: string;
  youtubeId: string;
  year?: number;
};

/** Late-page embeds only. Keep empty until a video earns a place on the site. */
export const videos: Video[] = [];
