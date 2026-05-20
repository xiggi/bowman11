export type Video = {
  id: string;
  title: string;
  youtubeId: string;
  year?: number;
  note?: string;
};

export const videos: Video[] = [
  {
    id: "23-recap",
    title: "Stanislaus · rough cut",
    youtubeId: "",
    year: 2023,
    note: "Unlisted. Ask in group chat.",
  },
];
