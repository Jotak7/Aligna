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

  const { plan_id } = body;

  const { data, error } = await supabase
    .from("checkins")
    .insert([
      {
        user_id: user.id,
        plan_id,
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