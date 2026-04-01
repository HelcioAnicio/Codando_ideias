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
    <section className="m-auto w-full max-w-5xl rounded-md bg-slate-900 px-6 py-24 lg:px-8">
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
    </section>
  );
};
