import { createClient } from "microcms-js-sdk";

export const microcms = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type Archive = {
  id: string;
  title: string;
  date: string;
  venue: string;
  role: string[];
  vibe: string[];
  photos: { url: string }[];
  summary_3lines: string; // 改行入りテキスト
  featured: boolean;
};

export async function getArchives() {
  const res = await microcms.getList<Archive>({
    endpoint: "archives",
    queries: { limit: 100, orders: "-date" },
  });
  return res.contents;
}
