import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "用户未登录" },
      { status: 401 }
    );
  }

  const { posture_text, risk_level } = body;

  const { data, error } = await supabase
    .from("posture_logs")
    .insert([
      {
        user_id: user.id,
        posture_text,
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