import { Globe, ShieldCheck, TrendingUp, Users, Search, BadgeCheck } from "lucide-react";

const razoes = [
  {
    icon: <Search className="size-6 text-amber-300" />,
    titulo: "Invisível para quem mais importa",
    texto:
      "Sem site, quem te procura no Google encontra o concorrente — não você.",
  },
  {
    icon: <ShieldCheck className="size-6 text-amber-300" />,
    titulo: "Credibilidade que fecha negócio",
    texto: "Um site profissional gera confiança antes mesmo do primeiro contato.",
  },
  {
    icon: <Globe className="size-6 text-amber-300" />,
    titulo: "Alcance além do boca a boca",
    texto: "Alcança gente nova todos os dias, 24h, sem depender de indicação.",
  },
  {
    icon: <BadgeCheck className="size-6 text-amber-300" />,
    titulo: "Profissionalismo que diferencia",
    texto: "Presença digital hoje é o mínimo — e te coloca à frente de quem não tem.",
  },
  {
    icon: <Users className="size-6 text-amber-300" />,
    titulo: "Seu negócio disponível o tempo todo",
    texto: "Apresenta seus serviços e capta leads enquanto você foca no resto.",
  },
  {
    icon: <TrendingUp className="size-6 text-amber-300" />,
    titulo: "Crescimento previsível e escalável",
    texto: "Diferente de anúncio, o site continua atraindo clientes mês após mês.",
  },
];

export const PorQueSite = () => {
  return (
    <section className="w-full px-4 py-20 xl:px-0">
      <div className="mx-auto max-w-6xl">
        {/* Header da seção */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Por que um site faz toda a diferença
          </p>
          <h2 className="mb-5 text-4xl font-extrabold leading-[1.1] md:text-5xl">
            Seu cliente está pesquisando agora.{" "}
            <span className="text-amber-300">Ele vai te encontrar?</span>
          </h2>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-400">
            Milhares de pessoas buscam por serviços como o seu todos os meses no
            Google. A pergunta não é se elas vão contratar alguém — é se esse
            alguém vai ser você ou o seu concorrente.
          </p>
        </div>

        {/* Grid de razões */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {razoes.map((razao) => (
            <div
              key={razao.titulo}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-popover-foreground/20 hover:bg-white/[0.045]"
            >
              <div
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/5"
              >
                {razao.icon}
              </div>
              <h3 className="text-lg font-bold">{razao.titulo}</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {razao.texto}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
