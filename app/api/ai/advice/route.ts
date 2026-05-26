import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const ADVICE_BY_RISK: Record<string, string> = {
  low: "姿态良好，继续保持训练",
  medium: "建议加强核心稳定与肩颈放松",
  high: "检测到较高风险姿态，建议立即调整训练方案",
};

export async function POST(req: Request) {
  const body = await req.json();
  const { posture_text, risk_level } = body;

  const authHeader = req.headers.get("authorization");
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : undefined;

  const {
    data: { user },
  } = await supabase.auth.getUser(token);

  if (!user) {
    return NextResponse.json(
      { error: "用户未登录" },
      { status: 401 }
    );
  }

  const advice = ADVICE_BY_RISK[risk_level];

  if (!advice) {
    return NextResponse.json(
      { error: "无效的 risk_level，应为 low / medium / high" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("ai_advices")
    .insert([
      {
        user_id: user.id,
        advice,
        risk_level,
      },
    ])
    .select();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}
