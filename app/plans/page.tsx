"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Plan = {
  id: string;
  title: string;
  description: string;
  duration: number;
  level: string;
};

export default function Home() {
  const [plans, setPlans] = useState<Plan[]>([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  async function fetchPlans() {
    const { data, error } = await supabase
      .from("plans")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("获取训练计划失败:", error);
      return;
    }

    setPlans(data || []);
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-4xl font-bold mb-2">
        元衡Aligna 训练计划
      </h1>

      <p className="text-zinc-400 mb-10">
        根据训练团队制定的内容进行动作训练建议
      </p>

      <div className="grid gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border border-zinc-800 rounded-2xl p-6 bg-zinc-900"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {plan.title}
            </h2>

            <p className="text-zinc-400 mb-4">
              {plan.description}
            </p>

            <div className="flex gap-4 text-sm">
              <span>训练时长：{plan.duration} 分钟</span>
              <span>等级：{plan.level}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}