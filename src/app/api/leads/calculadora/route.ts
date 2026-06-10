import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { segmentoId, segmentoNome, estadoSigla, estadoNome, ticketMedio, nome, email, telefone } = body;

    if (!segmentoId || !estadoSigla || !nome || !email || !telefone) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const { error } = await supabase.from("lead_calculadora").insert({
      segmento_id: segmentoId,
      segmento_nome: segmentoNome,
      estado_sigla: estadoSigla,
      estado_nome: estadoNome,
      ticket_medio: ticketMedio ? parseFloat(ticketMedio) : null,
      nome,
      email,
      telefone,
    });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[leads/calculadora]", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
