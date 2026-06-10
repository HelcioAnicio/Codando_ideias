"use client";

import Link from "next/link";
import { TrendingUp, Search, ArrowRight } from "lucide-react";

export const VisibilidadeCta = () => {
  return (
    <section className="w-full px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8 py-14 text-center shadow-2xl md:px-16">
          {/* Glow background */}
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Search size={12} />
              Diagnóstico gratuito
            </div>

            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
              Quantas pessoas buscam o seu negócio{" "}
              <span className="text-amber-300">todo mês</span> — e não te
              encontram?
            </h2>

            <p className="max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              Descubra em segundos o volume de pesquisas no Google para o seu
              segmento no seu estado e veja quanto você está deixando na mesa
              por não ter presença digital.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/calculadora"
                className="flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-4 font-bold text-slate-950 shadow-lg transition-all duration-200 hover:brightness-110 hover:scale-[1.03]"
              >
                <TrendingUp size={18} />
                Calcular meu potencial
                <ArrowRight size={16} />
              </Link>
              <p className="text-xs text-slate-500">
                100% gratuito · resultado na hora · sem compromisso
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-4 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-8 text-center">
              {[
                { label: "segmentos mapeados", value: "55+" },
                { label: "estados cobertos", value: "27" },
                { label: "tempo para o resultado", value: "< 2 min" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-black text-amber-300">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
