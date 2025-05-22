// lib/fetchWorks.ts
export type Work = {
  id: string;
  title?: string;
  description?: string;
  image?: {
    url: string;
    width: number;
    height: number;
  };
  technologies?: string;
  role?: string;
  duration?: string;
  challenges?: string;
  url?: string;
  github?: string;
};

export async function fetchWorks(): Promise<Work[]> {
  const res = await fetch(
    `https://${process.env.MICROCMS_SERVICE_ID}.microcms.io/api/v1/portfolio`,
    {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY!,
      },
      next: { revalidate: 60 }, // ISR (任意)
    }
  );
  if (!res.ok) {
    throw new Error('データ取得に失敗しました');
  }

  const data = await res.json();
  return data.contents;
}
