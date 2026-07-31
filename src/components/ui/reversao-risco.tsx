import { Wallet, Radar, ClipboardList, FileCheck2 } from "lucide-react";

const pontos = [
  {
    icon: Wallet,
    title: "Verba separada e transparente",
    text: "Você paga o Google e o Meta direto pra plataforma — a verba de mídia nunca passa pela gente.",
  },
  {
    icon: Radar,
    title: "Rastreamento de cada lead",
    text: "Você acompanha cada lead que chega num painel só seu, em tempo real.",
  },
  {
    icon: ClipboardList,
    title: "Relatório quinzenal",
    text: "Nos primeiros 90 dias, relatório a cada 15 dias — sem esperar mês fechado pra saber o que está acontecendo.",
  },
  {
    icon: FileCheck2,
    title: "Contrato justo",
    text: "Prazo mínimo pra campanha amadurecer, mas sem fidelidade eterna depois disso.",
  },
];

export const ReversaoRisco = () => {
  return (
    <section aria-label="Garantias e transparência" className="w-full px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Sem letra miúda
          </p>
          <h2 className="text-2xl font-bold md:text-4xl">
            O que garante que você não vai ser mais um número perdido.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pontos.map((ponto) => (
            <div
              key={ponto.title}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/5"
              >
                <ponto.icon className="h-5 w-5 text-amber-300" />
              </div>
              <h3 className="font-bold text-white">{ponto.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{ponto.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
