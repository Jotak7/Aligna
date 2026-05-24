"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoadingPage() {

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/result");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <div className="w-20 h-20 border-4 border-white border-t-transparent rounded-full animate-spin mb-10"></div>

      <h1 className="text-4xl font-bold mb-4">
        AI 正在分析中
      </h1>

      <p className="text-gray-400 text-center max-w-lg leading-8">
        系统正在解析你的动作轨迹、
        关节角度与身体协调性，
        请稍候...
      </p>

    </main>
  );
}