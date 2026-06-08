"use client";

import { useState } from "react";
import { SimulacaoModal } from "./simulacao-modal";
import { ContentVars } from "@/data/preview-templates";

interface Segmento {
  id: string;
  nome: string;
  emoji: string;
  content: ContentVars;
}

interface Categoria {
  id: string;
  nome: string;
  icon: string;
  segmentos: Segmento[];
}

interface Props {
  categorias: Categoria[];
}

export function SimulacaoGrid({ categorias }: Props) {
  const [active, setActive] = useState<Segmento | null>(null);

  return (
    <>
      <div className="space-y-12">
        {categorias.map((categoria) => (
          <section key={categoria.id}>
            <h2 className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-500">
              <span className="text-xl">{categoria.icon}</span>
              {categoria.nome}
            </h2>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {categoria.segmentos.map((segmento) => (
                <button
                  key={segmento.id}
                  onClick={() => setActive(segmento)}
                  className="group relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 px-3 py-3 text-center text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-yellow-500/50 hover:bg-slate-800 hover:text-yellow-400 sm:text-sm"
                >
                  {segmento.nome}
                  <span className="absolute inset-y-0 right-2 flex items-center text-[10px] text-slate-700 opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {active && (
        <SimulacaoModal
          segmentoId={active.id}
          segmentoNome={active.nome}
          emoji={active.emoji}
          content={active.content}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
