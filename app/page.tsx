import Link from "next/link";

export const revalidate = 60;

export default function Home() {
  // 仮のリンク（後で差し替え）
  const tracks = [
    { label: "Track 1", url: "https://www.youtube.com/" },
    { label: "Track 2", url: "https://www.youtube.com/" },
    { label: "Track 3", url: "https://www.youtube.com/" },
  ];
  const videos = [
    { label: "Live Video 1", url: "https://www.youtube.com/" },
    { label: "Live Video 2", url: "https://www.youtube.com/" },
  ];

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      {/* Hero */}
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            はる陽。｜Singer-Songwriter
          </h1>
          <p className="text-sm text-neutral-600">
            IDOL(anew) / DJ / Organizer
          </p>

          <div className="flex gap-3 pt-2">
            <Link
              href="/contact"
              className="rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
            >
              出演依頼
            </Link>
            <a
              href="#works"
              className="rounded-xl border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
            >
              作品を見る
            </a>
          </div>

          {/* Quick Facts */}
          <div className="mt-6 rounded-2xl border border-neutral-200 p-4">
            <h2 className="text-sm font-medium">Quick Facts</h2>
            <ul className="mt-2 space-y-1 text-sm text-neutral-700">
              <li>拠点：Tokyo</li>
              <li>対応：主催 / ライブハウス / イベント</li>
              <li>尺：30〜45min（応相談）</li>
              <li>編成：SSW（弾き語り / backing応相談）</li>
            </ul>
          </div>
        </div>

        {/* 画像は仮：本番は public/hero.jpg を置くだけで差し替え */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
          <div className="aspect-[3/2] w-full grid place-items-center text-sm text-neutral-500">
            Hero Image（public/hero.jpg）
          </div>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="mt-12 space-y-6">
        <h2 className="text-xl font-semibold">Works</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="text-sm font-medium">音源（3）</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {tracks.map((t) => (
                <li key={t.label}>
                  <a
                    className="underline underline-offset-4"
                    href={t.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-4">
            <h3 className="text-sm font-medium">ライブ映像（2）</h3>
            <ul className="mt-2 space-y-2 text-sm">
              {videos.map((v) => (
                <li key={v.label}>
                  <a
                    className="underline underline-offset-4"
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {v.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3 thumbs */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-semibold">Other Roles</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <Thumb href="/archive?role=dj" label="DJ" hint="public/thumb-dj.jpg" />
          <Thumb
            href="/archive?role=idol"
            label="IDOL"
            hint="public/thumb-idol.jpg"
          />
          <Thumb
            href="/archive?role=organizer"
            label="ORGANIZER"
            hint="public/thumb-org.jpg"
          />
        </div>
      </section>

      {/* Archive入口（証拠棚） */}
      <section className="mt-12 rounded-2xl border border-neutral-200 p-6">
        <h2 className="text-xl font-semibold">Archive</h2>
        <p className="mt-2 text-sm text-neutral-600">
          実績・空気感の記録（厳選→最新→全部）。
        </p>
        <div className="mt-4">
          <Link
            href="/archive"
            className="inline-flex rounded-xl border border-neutral-200 px-4 py-2 text-sm hover:bg-neutral-50"
          >
            Archiveを見る
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 rounded-2xl border border-neutral-200 p-6">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-sm text-neutral-600">
          仮サイト：送信機能は後で有効化します（本番でTurnstile＋メール送信）。
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-black px-4 py-2 text-sm text-white hover:opacity-90"
          >
            出演依頼フォームへ
          </Link>
        </div>
      </section>
    </main>
  );
}

function Thumb({
  href,
  label,
  hint,
}: {
  href: string;
  label: string;
  hint: string;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-neutral-200"
    >
      <div className="aspect-[3/2] w-full bg-neutral-100 grid place-items-center text-sm text-neutral-500 group-hover:bg-neutral-50">
        {label}（{hint}）
      </div>
      <div className="p-3 text-sm font-medium">{label}</div>
    </Link>
  );
}
