import { Globe, ShieldCheck, TrendingUp, Users, Search, BadgeCheck } from "lucide-react";

const razoes = [
  {
    icon: <Search className="size-6 text-amber-300" />,
    titulo: "Invisível para quem mais importa",
    texto:
      "Quando um cliente potencial pesquisa no Google por um serviço como o seu e não encontra sua empresa, ele simplesmente contrata o concorrente. Sem um site, você não existe digitalmente — e o mercado não espera.",
  },
  {
    icon: <ShieldCheck className="size-6 text-amber-300" />,
    titulo: "Credibilidade que fecha negócio",
    texto:
      "Antes de ligar, mandar mensagem ou visitar, o cliente pesquisa. Um site profissional transmite seriedade e confiança desde o primeiro clique. Um site ruim — ou a ausência dele — levanta dúvidas e afasta.",
  },
  {
    icon: <Globe className="size-6 text-amber-300" />,
    titulo: "Alcance além do boca a boca",
    texto:
      "O boca a boca tem limite. Um site bem posicionado alcança pessoas que nunca ouviram falar de você — todos os dias, 24 horas, mesmo enquanto você dorme ou está atendendo outro cliente.",
  },
  {
    icon: <BadgeCheck className="size-6 text-amber-300" />,
    titulo: "Profissionalismo que diferencia",
    texto:
      "No mercado atual, ter presença digital não é diferencial — é o mínimo. Empresas sem site são percebidas como menos profissionais. Com o site certo, você passa à frente da maioria da concorrência local.",
  },
  {
    icon: <Users className="size-6 text-amber-300" />,
    titulo: "Seu negócio disponível o tempo todo",
    texto:
      "Um site funciona como um vendedor que nunca tira férias. Apresenta seus serviços, responde dúvidas comuns, coleta contatos e gera leads enquanto você foca no que realmente importa: entregar resultado.",
  },
  {
    icon: <TrendingUp className="size-6 text-amber-300" />,
    titulo: "Crescimento previsível e escalável",
    texto:
      "Com SEO, cada novo conteúdo e cada melhoria técnica acumula autoridade. Ao contrário de anúncios que param quando o orçamento acaba, um site bem feito continua atraindo clientes mês após mês.",
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
