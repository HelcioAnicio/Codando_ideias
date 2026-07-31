import Link from "next/link";
import { Search, Zap } from "lucide-react";

export const TrafegoHero = () => {
  return (
    <section
      id="trafego-hero"
      aria-label="Gestão de tráfego pago que converte"
      className="w-full bg-background px-4 pb-16 pt-32 sm:pt-40 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300/80">
          Gestão de Tráfego Pago
        </p>

        <h1 className="text-4xl font-extrabold leading-[1.1] md:text-5xl lg:text-6xl">
          A maioria joga dinheiro em anúncio pra cair numa página que trava.{" "}
          <span className="text-amber-300">
            A gente constrói a página que converte e traz o tráfego certo pra ela.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-400 md:text-xl">
          Página lenta desperdiça verba de anúncio — o visitante clica e some
          antes de virar cliente. As nossas são rápidas de verdade, então cada
          real investido em Google e Meta Ads rende mais.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/diagnostico"
            className="studio-gold-surface flex items-center gap-2 rounded-xl px-8 py-4 font-bold shadow-lg transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
          >
            <Search size={18} aria-hidden="true" />
            Agende um diagnóstico gratuito
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-500">
          <Zap size={14} className="text-amber-300" aria-hidden="true" />
          O próprio site que você está vendo é a prova: construído por nós, rápido de verdade.
        </div>
      </div>
    </section>
  );
};
