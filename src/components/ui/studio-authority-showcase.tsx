import {
  // BarChart3,
  // Compass,
  EyeOff,
  ShieldAlert,
  TrendingUp,
  Zap,
} from "lucide-react";

// const expertiseCards = [
//   {
//     title: "Web Design Premium",
//     description:
//       "Interfaces que respiram sofisticação e convertem visitantes em clientes leais.",
//     icon: Compass,
//   },
//   {
//     title: "Performance Extrema",
//     description:
//       "Código limpo e otimizado para carregamento instantâneo em qualquer dispositivo.",
//     icon: Zap,
//   },
//   {
//     title: "SEO & Autoridade",
//     description:
//       "Estratégias de rankeamento para colocar sua marca onde os olhos do mercado estão.",
//     icon: BarChart3,
//   },
// ];

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

// const processItems = [
//   {
//     number: "01",
//     title: "Imersão Estratégica",
//     description: "Entendemos seu modelo de negócio e seus objetivos de escala.",
//   },
//   {
//     number: "02",
//     title: "Arquitetura de Conversão",
//     description:
//       "Desenhamos a jornada do usuário focada em eliminar atritos e gerar desejo.",
//   },
//   {
//     number: "03",
//     title: "Desenvolvimento Sobrenatural",
//     description:
//       "Codificação de elite para garantir velocidade e segurança inabaláveis.",
//   },
// ];

export const StudioAuthorityShowcase = () => {
  return (
    <section className="mx-auto max-w-5xl">
      {/* <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 p-2 text-amber-300">
              <Compass className="h-5 w-5" />
            </span>
            <span className="font-limelight text-xl text-amber-300 md:text-2xl">
              Codando Ideias
            </span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#"
              className="border-b-2 border-amber-400 pb-1 text-sm font-bold text-amber-300"
            >
              Início
            </Link>
            <Link href="#" className="text-sm text-slate-400 transition hover:text-amber-200">
              Serviços
            </Link>
            <Link href="#" className="text-sm text-slate-400 transition hover:text-amber-200">
              Portfólio
            </Link>
            <Link href="#" className="text-sm text-slate-400 transition hover:text-amber-200">
              Processo
            </Link>
          </nav>

          <button className="studio-gold-surface rounded-xl px-5 py-3 text-sm font-bold text-slate-950 transition hover:scale-95">
            Começar projeto
          </button>
        </div>
      </header> */}

      <div className="px-6 pb-16 pt-10 lg:px-8">
        {/* <section className="relative overflow-hidden py-20">
          <div className="absolute right-0 top-0 hidden h-full w-1/2 opacity-20 md:block">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHLHZeDP6NqBI_CxbZG9aol1CivHZ8N0YycghKx82T62NC7zOuzMyA5baFIwO8_e_TEwm2hDojHyhGl0icaZENpuOFzMgOJ92MYgvPgdp-RYTnUv7dV--tsJ-ejMYq-m5vYMoY03aMfh14Y3Sbt2go-7ESh9YJ5kq-HTer0y0hNn2-jzUc4dPRhEVVX7V94gFZ6K61MhazdIp-m8qIfjjyhuHz9i9aos4uQ3iGhQJlX-rBn7DhvAu5UBb2QcqfUTULdzJLiQEn0OU"
              alt="Circuitos abstratos dourados sobre fundo azul escuro"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
                Arquitetura Digital
                <br />
                <span className="studio-gold-text">Soberana.</span>
              </h1>

              <p className="max-w-lg text-xl leading-relaxed text-slate-300">
                Não construímos apenas sites. Projetamos ativos digitais de alta
                performance que estabelecem autoridade e dominância de mercado.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button className="studio-gold-surface rounded-xl px-8 py-4 text-lg font-bold text-slate-950 transition hover:shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                  Agendar consultoria
                </button>
                <button className="studio-panel rounded-xl border border-slate-700 px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-800">
                  Ver portfólio
                </button>
              </div>
            </div>

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
        </section>

        <section className="bg-slate-900 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <span className="mb-4 block text-sm uppercase tracking-[0.3em] text-amber-300">
                Nossa expertise
              </span>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Soluções sob medida
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {expertiseCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="rounded-[1.25rem] bg-slate-950 p-8 transition duration-500 hover:bg-slate-800"
                  >
                    <Icon className="mb-6 h-10 w-10 text-amber-300" />
                    <h3 className="mb-4 text-2xl font-bold text-white">
                      {card.title}
                    </h3>
                    <p className="leading-8 text-slate-300">
                      {card.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section> */}

        <section className="relative w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 opacity-70" />

          <div className="relative z-10 mx-auto max-w-7xl">
            <div className="mb-20 max-w-4xl">
              <span className="mb-6 inline-block rounded-full border border-red-400/20 bg-red-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-red-300">
                Alerta de lucratividade
              </span>
              <h2 className="mb-8 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Você está{" "}
                <span className="text-3xl font-extrabold leading-tight text-destructive md:text-5xl">
                  jogando dinheiro fora
                </span>{" "}
                todos os meses por causa da sua presença digital?
              </h2>
              <p className="text-xl text-slate-300">
                A invisibilidade digital não é apenas um detalhe, é um ralo
                silencioso no seu faturamento. Veja o custo real estimado para
                2026/2027.
              </p>
            </div>

            <div className="mb-24 grid gap-8 md:grid-cols-3">
              {lossCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="studio-panel relative overflow-hidden rounded-[1.5rem] border border-card p-10"
                  >
                    <div className="relative z-10">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive/70">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-4 text-xl font-bold">{card.title}</h3>
                      <div className="space-y-4">
                        <p className="text-xs uppercase tracking-[0.25em] text-popover-foreground opacity-60">
                          {card.eyebrow}
                        </p>
                        <p className="text-4xl font-black text-white">
                          {card.stat}
                        </p>
                        <p className="text-sm text-foreground">
                          {card.description}
                        </p>
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
                <div className="flex flex-1 items-center justify-center border-b border-white/10 bg-red-500/10 px-8 py-6 md:border-b-0 md:border-r">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold uppercase">
                      Site amador
                    </span>
                    <span className="text-3xl font-black text-red-400">
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

            <div className="relative overflow-hidden rounded-[2rem] border border-amber-300/10 bg-slate-800 p-12 text-center md:p-20">
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-300/10 blur-[100px]" />
              <div className="relative z-10 mx-auto max-w-3xl">
                <p className="mb-10 text-2xl leading-snug text-white md:text-3xl">
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
          </div>
        </section>

        {/* <section className="py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-20 md:grid-cols-2">
            <div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4xm1DHXojdPvknivotz2SZULmv6MKFt6_WEok7x4EiWCfMLLLq1muWQgu54GdI2K96XnoovAwgmcmkhfM5fXIoGzA21uBVRTDjZyWbySJUQThW2w_7ENDYeGVrlzj51iWSXC1WLa4zcMhy5_lXlLdIowaSIBzU9u1XEf-gXNOHQmAYBdbU9JTeWWDeR5Cuqk-LKTH59La0Szy2nRKHxBHAvQ1CwLfaHoDjsNOjNE9-3SpIPmtCL4CefVt2v9XzQgX6rqKOprdWLo"
                alt="Workspace de processo criativo e arquitetura digital"
                className="rounded-[1.5rem] border border-white/10 shadow-2xl"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">
                Nosso protocolo de excelência
              </h2>

              <div className="space-y-6">
                {processItems.map((item) => (
                  <div key={item.number} className="flex gap-6">
                    <div className="text-2xl font-black text-amber-300">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-slate-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </div>

      {/* <footer className="border-t border-white/5 bg-slate-950 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="font-limelight text-lg text-amber-300">
              Codando Ideias
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-500">
              © 2024 Codando Ideias. A arquitetura da excelência digital.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-xs uppercase tracking-[0.25em] text-slate-500">
            <Link href="#" className="transition hover:text-amber-300">
              Serviços
            </Link>
            <Link href="#" className="transition hover:text-amber-300">
              Portfólio
            </Link>
            <Link href="#" className="transition hover:text-amber-300">
              Processo
            </Link>
            <Link href="#" className="transition hover:text-amber-300">
              Privacidade
            </Link>
          </div>
        </div>
      </footer> */}
    </section>
  );
};
