import { ChevronDown } from "lucide-react";
import { ButtonGeral } from "./buttonGeral";

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
    <section className="m-auto flex w-full max-w-5xl flex-col items-center gap-5 rounded-md px-6 py-24 lg:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            FAQ
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">Dúvidas frequentes</h2>
        </div>

        <div className="mx-auto w-full max-w-2xl space-y-4 xl:max-w-4xl">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group w-full rounded-2xl border border-white/10 bg-secondary"
              open={index === 0}
            >
              <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 p-6 text-lg font-bold">
                {faq.question}
                <ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
              </summary>
              <p className="w-full px-6 pb-6 leading-8 text-secondary-foreground/80">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      <ButtonGeral
        text={"Iniciar um novo projeto"}
        classes={"lg:w-full"}
        link={
          "https://wa.me/5531991973835?text=Olá+gostaria+iniciar+um+projeto"
        }
      />
    </section>
  );
};
