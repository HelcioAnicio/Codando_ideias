import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "Landing pages costumam levar de 7 a 15 dias. Projetos maiores, como e-commerce e sistemas, variam de 4 a 12 semanas conforme escopo.",
  },
  {
    question: "Vocês fazem manutenção após a entrega?",
    answer:
      "Sim. Podemos seguir com manutenção contínua, ajustes, monitoramento e melhorias evolutivas depois do lançamento.",
  },
  {
    question: "O site será otimizado para celulares?",
    answer:
      "Sim. Todo o layout é pensado para mobile first, preservando leitura, navegação e performance em telas menores.",
  },
];

export const StudioFaq = () => {
  return (
    <section className="m-auto flex w-full max-w-5xl flex-col gap-5 rounded-md px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            FAQ
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Dúvidas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-slate-950"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-bold text-white">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="px-6 pb-6 leading-8 text-slate-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl rounded-3xl bg-secondary px-5 py-12 text-center md:p-20">
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
