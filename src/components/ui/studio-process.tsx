const steps = [
  {
    number: "01",
    title: "Briefing",
    description: "Imersão no negócio, metas, contexto técnico e prioridades.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Prototipação com foco em clareza, conversão e coerência visual.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Implementação com tecnologias modernas, performance e código limpo.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Go-live, documentação e suporte para manter o produto evoluindo.",
  },
];

export const StudioProcess = () => {
  return (
    <section className="bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Processo
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Um fluxo meticuloso para resultados extraordinários.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="relative overflow-hidden px-2">
              <span className="absolute left-0 top-0 text-8xl font-black leading-none text-white/5">
                {step.number}
              </span>
              <div className="relative z-10 pt-10">
                <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 max-w-xs leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
