import { Gauge, Wallet, MousePointerClick, ShieldCheck, Radar, TrendingDown } from "lucide-react";

const razoes = [
  {
    icon: <Gauge className="size-6 text-amber-300" />,
    titulo: "Página lenta gasta a sua verba",
    texto:
      "53% dos visitantes abandonam páginas que levam mais de 3 segundos para carregar. Se sua landing page é lenta, boa parte do que você paga em anúncio vira clique perdido antes mesmo de o site carregar.",
  },
  {
    icon: <MousePointerClick className="size-6 text-amber-300" />,
    titulo: "Anúncio bom não salva página ruim",
    texto:
      "Você pode acertar a campanha e ainda assim não vender, porque quem clica cai numa página confusa, lenta ou sem motivo claro para preencher o formulário. O anúncio traz a pessoa até a porta — a página é quem fecha.",
  },
  {
    icon: <Radar className="size-6 text-amber-300" />,
    titulo: "Sem rastreamento, você não sabe o que funciona",
    texto:
      "Sem pixel e tag configurados corretamente, você não sabe qual anúncio trouxe cliente e qual só queimou verba. A gente configura o rastreamento antes de ligar a campanha, não depois.",
  },
  {
    icon: <ShieldCheck className="size-6 text-amber-300" />,
    titulo: "Verba sob seu controle, sempre",
    texto:
      "Você paga o Google e o Meta direto pra plataforma. A gente cuida da estratégia e da execução — mas o dinheiro do anúncio nunca passa pela nossa mão.",
  },
  {
    icon: <Wallet className="size-6 text-amber-300" />,
    titulo: "Custo por cliente, não custo por clique",
    texto:
      "O número que importa não é quanto custou o clique — é quanto custou o cliente. Acompanhamos e otimizamos pensando nesse número, com relatório que mostra exatamente isso.",
  },
  {
    icon: <TrendingDown className="size-6 text-amber-300" />,
    titulo: "O prejuízo de site amador em campanha paga",
    texto:
      "Em campanhas com página lenta, boa parte de cada real investido em anúncio se perde em cliques que nunca chegam a ver a oferta. Com uma página rápida, esse mesmo real rende mais.",
  },
];

export const PorQueSite = () => {
  return (
    <section className="w-full px-4 py-20 xl:px-0">
      <div className="mx-auto max-w-6xl">
        {/* Header da seção */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Por que a maioria perde dinheiro com anúncio
          </p>
          <h2 className="mb-5 text-4xl font-extrabold leading-[1.1] md:text-5xl">
            O anúncio não é o problema.{" "}
            <span className="text-amber-300">A página é.</span>
          </h2>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-slate-400">
            A maioria das campanhas de tráfego pago não fracassa por causa do
            anúncio — fracassa porque a página que recebe o clique não estava
            pronta pra converter.
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
