import { EyeOff, ShieldAlert, TrendingUp, Zap } from "lucide-react";

const lossCards = [
  {
    title: "O Custo da Invisibilidade",
    eyebrow: "Dado de Mercado",
    stat: "81%",
    description: "dos consumidores pesquisam online antes de qualquer compra.",
    example: "Exemplo Real: Nutricionista",
    impact: "Perda de R$ 3.200/mês",
    icon: EyeOff,
  },
  {
    title: "O Custo do Site Amador",
    eyebrow: "Taxa de Rejeição",
    stat: "53%",
    description: "abandonam sites que levam mais de 3 segundos para carregar.",
    example: "Exemplo Real: Mecânico",
    impact: "R$ 700 perdidos em cada R$ 1.000 de anúncio",
    icon: Zap,
  },
  {
    title: "A Falta de Autoridade",
    eyebrow: "Potencial de Preço",
    stat: "+50%",
    description: "é o prêmio de valor que marcas com presença premium cobram.",
    example: "Impacto Estimado Geral",
    impact: "R$ 2.000 perdidos em lucro líquido",
    icon: ShieldAlert,
  },
];

export const StudioAuthorityShowcase = () => {
  return (
    <section className="m-auto max-w-5xl px-3 py-20 md:px-10 lg:px-5">
      {/* 

            <div className="hidden md:block">
              <div className="studio-panel relative overflow-hidden rounded-[1.75rem] border border-white/10 p-2 shadow-2xl">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-amber-300/10 blur-[80px]" />
                <div className="rounded-[1.25rem] bg-slate-950/85 p-8">
                  <div className="mb-6 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/50" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/50" />
                    <span className="h-3 w-3 rounded-full bg-green-500/50" />
                  </div>

                  <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-amber-300/90">
                    {`// Digital Excellence Protocol
class SuccessArchitecture {
  constructor(vision) {
    this.authority = 1.0;
    this.performance = "Ultra";
    this.roi = vision * Math.PI;
  }

  deploy() {
    return "Market Domination";
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
*/}

      <div className="mb-20 max-w-4xl">
        <span className="mb-6 inline-block rounded-full border border-red-400/20 bg-red-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-red-300">
          Alerta de lucratividade
        </span>
        <h2 className="mb-8 text-3xl font-extrabold leading-tight md:text-5xl">
          Você está{" "}
          <span className="text-3xl font-extrabold leading-tight text-destructive md:text-5xl">
            jogando dinheiro fora
          </span>{" "}
          todos os meses por causa da sua presença digital?
        </h2>
        <p className="text-xl text-slate-300">
          A invisibilidade digital não é apenas um detalhe, é um ralo silencioso
          no seu faturamento. Veja o custo real estimado para 2026/2027.
        </p>
      </div>

      <div className="mb-24 grid w-full gap-8 md:grid-cols-3">
        {lossCards.map((card) => {
          const Icon = card.icon;

          return (
            <article
              key={card.title}
              className="relative w-full rounded-3xl border border-card p-10"
            >
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/30 text-destructive/80">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold">{card.title}</h3>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-popover-foreground opacity-60">
                    {card.eyebrow}
                  </p>
                  <p className="text-4xl font-black text-white">{card.stat}</p>
                  <p className="text-sm text-foreground">{card.description}</p>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="mb-1 text-xs text-popover-foreground">
                      {card.example}
                    </p>
                    <p className="text-lg font-bold text-destructive">
                      {card.impact}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mb-24">
        <h3 className="mb-10 text-center text-2xl font-bold uppercase tracking-[0.25em] text-white">
          O gap de conversão
        </h3>
        <div className="flex flex-col overflow-hidden rounded-3xl border border-white/10 md:flex-row lg:rounded-full">
          <div className="flex flex-1 items-center justify-center border-b border-white/10 bg-red-500/40 px-8 py-6 md:border-b-0 md:border-r">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold uppercase">Site amador</span>
              <span className="borde text-3xl font-black text-red-400 md:min-w-max">
                0,5% a 1%
              </span>
              <span className="text-xs text-slate-400">conv.</span>
            </div>
          </div>

          <div className="studio-gold-surface flex flex-[3] items-center justify-center px-8 py-6 text-slate-950">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="text-sm font-bold uppercase">
                Site performance
              </span>
              <span className="text-4xl font-black">4,6% a 11%</span>
              <span className="text-xs opacity-70">conv.</span>
              <TrendingUp className="h-5 w-5 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl bg-secondary px-5 py-12 text-center md:p-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-10 text-2xl leading-snug md:text-3xl">
            O prejuízo total estimado para uma PME gira entre <br />
            <span className="font-black text-popover-foreground">
              R$ 2.500,00 e R$ 6.000,00
            </span>{" "}
            por mês. Não deixe sua concorrência levar esse dinheiro.
          </p>
          <button className="studio-gold-surface rounded-2xl px-10 py-6 text-xl font-extrabold text-slate-950 shadow-2xl transition hover:scale-105">
            Quero parar de perder dinheiro
          </button>
        </div>
      </div>
    </section>
  );
};
