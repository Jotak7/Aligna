import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

const ACTION_FIELDS =
  "id, title, duration, position, instruction, posture_focus";

export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const planId = (await context.params).id;
    console.log("planId =", planId);

    if (!planId?.trim()) {
      return NextResponse.json(
        { error: "缺少 plan_id" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("actions")
      .select(ACTION_FIELDS)
      .eq("plan_id", planId)
      .order("position", { ascending: true });
      console.log("data =", data);
      console.log("error =", error);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(data ?? []);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "服务器内部错误";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
