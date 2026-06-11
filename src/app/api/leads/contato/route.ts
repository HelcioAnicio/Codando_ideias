import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { plano, nome, email, telefone } = body;

    if (!plano || !nome || !email || !telefone) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const { error } = await getSupabase().from("lead_contato").insert({ plano, nome, email, telefone });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[leads/contato]", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
