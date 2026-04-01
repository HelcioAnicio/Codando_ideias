import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const StudioHero = () => {
  return (
    <section className="studio-mesh relative overflow-hidden px-6 pb-28 pt-24 lg:px-8 lg:pt-28">
      <div className="absolute left-[-10%] top-32 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-[-8%] h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-100">
            <Sparkles className="h-4 w-4" />
            Estúdio de software, sites e produtos digitais
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Do código à ideia:
            <span className="studio-gold-text mt-3 block">
              transformamos sua visão em realidade
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-2xl">
            Projetamos landing pages, sites institucionais, apps mobile e
            sistemas personalizados com rigor técnico, performance e direção
            visual forte.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contato"
              className="studio-gold-surface inline-flex items-center justify-center rounded-2xl px-8 py-4 text-base font-extrabold text-slate-950 transition hover:brightness-110"
            >
              Solicitar orçamento
            </Link>
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-700 px-8 py-4 text-base font-bold text-slate-100 transition hover:border-amber-300/50 hover:bg-white/5"
            >
              Ver portfólio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="studio-panel studio-floating relative rounded-[2rem] border border-white/10 p-8 shadow-2xl shadow-slate-950/50">
            <div className="mb-8 flex gap-2.5">
              <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f56]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-3.5 w-3.5 rounded-full bg-[#27c93f]" />
            </div>

            <div className="space-y-3 font-mono text-sm text-slate-300 md:text-base">
              <p>
                <span className="text-amber-300">const</span> studio = {"{"}
              </p>
              <p className="pl-6">
                name:{" "}
                <span className="text-amber-100">{'"Codando Ideias"'}</span>,
              </p>
              <p className="pl-6">
                mission:{" "}
                <span className="text-amber-100">
                  {'"Digital Excellence"'}
                </span>
                ,
              </p>
              <p className="pl-6">
                tech: [
                <span className="text-amber-100">{'"Next.js"'}</span>,{" "}
                <span className="text-amber-100">{'"Cloud"'}</span>,{" "}
                <span className="text-amber-100">{'"UX"'}</span>],
              </p>
              <p className="pl-6">
                status:{" "}
                <span className="text-amber-300">{'"Building Future"'}</span>
              </p>
              <p>{"};"}</p>
              <p className="pt-4 text-amber-200/60">
                {"// Waiting for your next big idea..."}
              </p>
            </div>
          </div>

          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />
          <div className="absolute -bottom-10 -right-6 h-32 w-32 rounded-full bg-sky-400/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
};
