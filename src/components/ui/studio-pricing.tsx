import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    subtitle: "Ideal para validar ideias rapidamente.",
    price: "R$ 4.900",
    cta: "Começar agora",
    featured: false,
    items: [
      "Landing page exclusiva",
      "Copywriting persuasivo",
      "Integração com CRM",
    ],
  },
  {
    name: "Professional",
    subtitle: "Sites institucionais, catálogo ou e-commerce.",
    price: "R$ 9.700",
    cta: "Começar agora",
    featured: true,
    items: [
      "Até 10 páginas exclusivas",
      "Painel administrativo",
      "Otimização de velocidade",
      "Suporte por 3 meses",
    ],
  },
  {
    name: "Enterprise",
    subtitle: "Apps e sistemas com arquitetura personalizada.",
    price: "Sob consulta",
    cta: "Consultar especialista",
    featured: false,
    items: [
      "Arquitetura escalável",
      "Apps mobile iOS e Android",
      "Consultoria de UX",
      "Infraestrutura em nuvem",
    ],
  },
];

export const StudioPricing = () => {
  return (
    <section id="precos" className="bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Investimento
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Planos estruturados para diferentes estágios de crescimento.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={[
                "relative flex h-full flex-col rounded-[1.75rem] border p-8",
                plan.featured
                  ? "border-amber-300 bg-slate-800 shadow-2xl shadow-amber-950/20"
                  : "border-white/10 bg-slate-950",
              ].join(" ")}
            >
              {plan.featured ? (
                <span className="absolute right-0 top-0 rounded-bl-2xl bg-amber-300 px-4 py-1 text-xs font-black uppercase tracking-[0.25em] text-slate-950">
                  Popular
                </span>
              ) : null}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-slate-300">{plan.subtitle}</p>
              <div className="mt-8">
                <span className="text-4xl font-black text-white">
                  {plan.price}
                </span>
                {plan.price !== "Sob consulta" ? (
                  <span className="ml-2 text-slate-400">/ projeto</span>
                ) : null}
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-4">
                {plan.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-200"
                  >
                    <Check className="mt-0.5 h-5 w-5 text-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className={[
                  "mt-10 rounded-xl px-5 py-4 font-bold transition",
                  plan.featured
                    ? "studio-gold-surface text-slate-950 hover:brightness-110"
                    : "border border-slate-700 text-white hover:border-amber-300/50 hover:bg-white/5",
                ].join(" ")}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
