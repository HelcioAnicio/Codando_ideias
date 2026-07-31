import { ChevronDown } from "lucide-react";
import { ButtonGeral } from "./buttonGeral";

const faqs = [
  {
    question: "Como funciona a verba de mídia?",
    answer:
      "A verba de mídia é o valor investido diretamente no Google Ads e no Meta Ads — e ela é sempre paga por você, direto pra plataforma. Nossa mensalidade de gestão é separada disso: você vê exatamente quanto vai pra cada lugar.",
  },
  {
    question: "Preciso já ter site pra contratar a gestão de tráfego?",
    answer:
      "Não. Construímos a landing page da campanha como parte do serviço, já pensada para converter e com o rastreamento configurado desde o início.",
  },
  {
    question: "Quanto tempo até eu ver resultado?",
    answer:
      "As primeiras campanhas costumam ir ao ar em 1 a 2 semanas após o diagnóstico. Os primeiros dados relevantes de custo por lead aparecem nas primeiras semanas, mas uma campanha madura leva o prazo mínimo do contrato (3 a 6 meses) para gerar seu resultado real.",
  },
  {
    question: "Por que existe um prazo mínimo de contrato?",
    answer:
      "Porque campanha de tráfego pago precisa de tempo pra testar públicos, criativos e página até encontrar o que funciona melhor pro seu negócio. Antes disso, qualquer conclusão é precipitada — pra ambos os lados.",
  },
  {
    question: "Vocês fazem só Google Ads ou também Meta (Facebook/Instagram)?",
    answer:
      "Fazemos os dois. A escolha de onde investir mais verba depende de onde o seu cliente ideal está e do seu tipo de negócio — isso é definido já no diagnóstico.",
  },
  {
    question: "Como eu acompanho os leads que estão chegando?",
    answer:
      "Você tem acesso a um painel próprio com cada lead gerado pela campanha, além de relatório quinzenal nos primeiros 90 dias com custo por lead e por cliente.",
  },
  {
    question: "O diagnóstico gratuito tem algum compromisso?",
    answer:
      "Nenhum. É uma análise real da sua presença digital e do potencial de tráfego pago para o seu negócio, sem letra miúda e sem obrigação de fechar contrato depois.",
  },
  {
    question: "Vocês atendem só Belo Horizonte ou todo o Brasil?",
    answer:
      "Atendemos empresas e autônomos de todo o Brasil — o processo é 100% remoto, do diagnóstico à gestão contínua, com alinhamento por WhatsApp e videochamada.",
  },
  {
    question: "Dá pra cancelar depois do prazo mínimo?",
    answer:
      "Sim. Depois do prazo mínimo do contrato, não existe fidelidade eterna — o cancelamento é simples e comunicado com antecedência combinada.",
  },
];

export const StudioFaq = () => {
  return (
    <section
      id="faq"
      className="m-auto flex w-full max-w-5xl flex-col items-center gap-5 rounded-md px-6 py-24 lg:px-8"
    >
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
              className="group w-full rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-popover-foreground/20 hover:bg-white/[0.045]"
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
        text={"Tirar minhas dúvidas"}
        classes={"lg:w-full"}
        link={
          "https://wa.me/5531991973835?text=Olá,+quero+tirar+dúvidas+sobre..."
        }
      />
    </section>
  );
};
