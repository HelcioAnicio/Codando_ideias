import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const avaliacoes = await prisma.avaliacao.findMany({
      orderBy: { criadoEm: "desc" },
      take: 50,
    });

    return NextResponse.json({ avaliacoes });
  } catch (err) {
    console.error("[avaliacoes/GET]", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const nome = typeof body.nome === "string" ? body.nome.trim() : "";
    const empresaRaw = typeof body.empresa === "string" ? body.empresa.trim() : "";
    const avaliacao = typeof body.avaliacao === "string" ? body.avaliacao.trim() : "";
    const nota = Number(body.nota);

    if (!nome || nome.length > 80) {
      return NextResponse.json({ error: "Informe um nome válido." }, { status: 400 });
    }

    if (!avaliacao || avaliacao.length > 1000) {
      return NextResponse.json({ error: "Escreva uma avaliação válida." }, { status: 400 });
    }

    if (empresaRaw.length > 80) {
      return NextResponse.json({ error: "Nome da empresa muito longo." }, { status: 400 });
    }

    if (!Number.isInteger(nota) || nota < 0 || nota > 5) {
      return NextResponse.json({ error: "Nota deve ser um número inteiro entre 0 e 5." }, { status: 400 });
    }

    const novaAvaliacao = await prisma.avaliacao.create({
      data: {
        nome,
        empresa: empresaRaw || null,
        avaliacao,
        nota,
      },
    });

    return NextResponse.json({ avaliacao: novaAvaliacao });
  } catch (err) {
    console.error("[avaliacoes/POST]", err);
    return NextResponse.json({ error: "Erro interno." }, { status: 500 });
  }
}
