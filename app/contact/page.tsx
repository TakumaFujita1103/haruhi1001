import Link from "next/link";

export default function Contact() {
  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <Link href="/" className="text-sm underline underline-offset-4">
        ← TOPへ
      </Link>
      <h1 className="mt-4 text-2xl font-semibold">出演依頼</h1>
      <p className="mt-2 text-sm text-neutral-600">
        仮サイトのため送信機能は未実装です（本番でTurnstile＋メール送信を入れます）。
      </p>

      <div className="mt-6 space-y-3 rounded-2xl border border-neutral-200 p-5">
        {["用件", "日程", "会場/場所", "持ち時間", "予算感", "お名前/団体名", "メール", "内容"].map(
          (label) => (
            <div key={label}>
              <div className="text-xs text-neutral-600">{label}</div>
              <div className="mt-1 h-10 rounded-xl border border-neutral-200 bg-neutral-50" />
            </div>
          )
        )}
        <button
          disabled
          className="w-full rounded-xl bg-black px-4 py-2 text-sm text-white opacity-40"
        >
          送信（仮）
        </button>
      </div>
    </main>
  );
}
