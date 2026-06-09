"use client";

import { useState } from "react";
import { TemplateSegmento } from "@/data/template-catalog";
import { SimulacaoModal } from "./simulacao-modal";

interface Props {
  segmentos: TemplateSegmento[];
}

export function SimulacaoGrid({ segmentos }: Props) {
  const [active, setActive] = useState<TemplateSegmento | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {segmentos.map((seg) => (
          <button
            key={seg.id}
            onClick={() => setActive(seg)}
            className="group relative flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-5 text-center transition-all duration-200 hover:border-yellow-500/50 hover:bg-slate-800"
          >
            <span className="text-3xl">{seg.emoji}</span>
            <span className="text-sm font-bold text-slate-200 group-hover:text-yellow-400">
              {seg.nome}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-600 group-hover:text-slate-500">
              3 modelos
            </span>
          </button>
        ))}
      </div>

      {active && (
        <SimulacaoModal segmento={active} onClose={() => setActive(null)} />
      )}
    </>
  );
}
