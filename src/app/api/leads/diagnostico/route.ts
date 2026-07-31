import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, whatsapp, negocio, siteInstagram } = body;

    if (!nome || !whatsapp || !negocio) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const { error } = await getSupabase()
      .from("lead_diagnostico")
      .insert({ nome, whatsapp, negocio, site_instagram: siteInstagram || null });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[leads/diagnostico]", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
