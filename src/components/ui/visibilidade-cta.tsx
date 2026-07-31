"use client";

import Link from "next/link";
import { TrendingUp, Search, ArrowRight } from "lucide-react";

export const VisibilidadeCta = () => {
  return (
    <section id="diagnostico-cta" className="w-full px-4 py-14 xl:px-0">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-2 py-14 text-center shadow-2xl md:px-16">
          {/* Glow background */}
          <div
            className="pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
              <Search size={12} aria-hidden="true" />
              Diagnóstico gratuito
            </div>

            <h2 className="max-w-2xl text-[26px] font-extrabold leading-[1.1] md:text-4xl lg:text-5xl xl:max-w-4xl">
              Quantos clientes você está{" "}
              <span className="text-amber-300">perdendo hoje</span> por não
              ter tráfego pago bem estruturado?
            </h2>

            <p className="max-w-xl text-sm font-light leading-tight text-slate-400 md:text-lg">
              Preencha o formulário e receba uma análise real da sua presença
              digital e do potencial de tráfego pago para o seu negócio — sem
              custo e sem compromisso.
            </p>

            <div className="flex flex-col items-center justify-center gap-4">
              <Link
                href="/diagnostico"
                className="flex items-center gap-2 rounded-xl bg-yellow-500 px-7 py-4 font-bold shadow-lg transition-all duration-200 hover:scale-[1.03] hover:brightness-110"
              >
                <TrendingUp size={18} aria-hidden="true" />
                Agendar meu diagnóstico gratuito
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <p className="text-xs text-foreground/60">
                100% gratuito · resposta em até 24h · sem compromisso
              </p>
            </div>

            {/* Mini stats */}
            <div className="mt-4 flex flex-wrap justify-center gap-8 border-t border-white/10 pt-8 text-center">
              {[
                { label: "canais de anúncio", value: "Google + Meta" },
                { label: "rastreamento", value: "100% seu" },
                { label: "prazo mínimo", value: "3 a 6 meses" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-black text-amber-300">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
