import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold mb-6">
        元衡Aligna
      </h1>

      <p className="text-zinc-400 mb-10">
        AI 姿态训练与康复系统
      </p>

      <Link
        href="/plans"
        className="px-6 py-3 rounded-xl bg-emerald-500 text-black font-semibold"
      >
        开始训练
      </Link>
    </main>
  );
}