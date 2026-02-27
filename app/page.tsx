import Link from "next/link";
import { getArchives } from "@/lib/microcms";

export const revalidate = 60;

export default async function Home() {
  const archives = await getArchives();

  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: 24 }}>
      <h1>はる陽。｜Singer-Songwriter</h1>
      <p>IDOL(anew) / DJ / Organizer</p>

      <h2 style={{ marginTop: 24 }}>Archives（microCMS）</h2>

      <ul style={{ marginTop: 12 }}>
        {archives.map((a) => (
          <li key={a.id} style={{ marginBottom: 10 }}>
            <b>{a.title}</b> / {a.date?.slice(0, 10)} / {a.venue}
            {"  "}
            <Link href={`/archive/${a.id}`}>詳細</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
