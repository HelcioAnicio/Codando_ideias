import { ChevronDown } from "lucide-react";
import { ButtonGeral } from "./buttonGeral";

const faqs = [
  {
    question: "Quanto custa um site?",
    answer:
      "Varia conforme o tipo de projeto — uma landing page custa menos que um site institucional completo ou um sistema sob medida. Manda uma mensagem contando o que você precisa e te passamos um orçamento sem compromisso.",
  },
  {
    question: "Quanto tempo leva para desenvolver um site?",
    answer:
      "Landing pages costumam levar de 3 a 7 dias. Projetos maiores, como e-commerce e sistemas, variam de 4 a 12 semanas conforme escopo.",
  },
  {
    question: "Preciso já ter domínio e hospedagem contratados?",
    answer:
      "Não. Se você ainda não tem, orientamos e ajudamos na contratação do domínio (ex: seunegocio.com.br) e da hospedagem antes do site entrar no ar.",
  },
  {
    question: "Já tenho um site — dá pra só melhorar ele, sem refazer tudo?",
    answer:
      "Sim. Fazemos tanto projetos do zero quanto redesign e melhorias pontuais (performance, visual, SEO) em sites que já existem.",
  },
  {
    question: "Não tenho fotos nem textos prontos, vocês ajudam com o conteúdo?",
    answer:
      "Ajudamos a estruturar os textos e organizar as informações do seu negócio durante o briefing. O ideal é você ter pelo menos os dados básicos (serviços, diferenciais, contato) — o resto a gente lapida junto com você.",
  },
  {
    question: "Depois de pronto, eu consigo editar o site sozinho?",
    answer:
      "Depende do tipo de projeto: alguns saem com painel de edição simples para você trocar textos e imagens, outros são entregues como página estática. Definimos isso junto com você no orçamento, conforme sua necessidade.",
  },
  {
    question: "Vocês atendem só Belo Horizonte ou todo o Brasil?",
    answer:
      "Atendemos empresas e autônomos de todo o Brasil — o processo é 100% remoto, do briefing à entrega, com alinhamento por WhatsApp e videochamada.",
  },
  {
    question: "Vocês fazem manutenção após a entrega?",
    answer:
      "Sim. Podemos seguir com manutenção contínua, ajustes, monitoramento e melhorias evolutivas depois do lançamento.",
  },
  {
    question: "O site será otimizado para celulares e para aparecer no Google?",
    answer:
      "Sim. Todo o layout é pensado mobile first, e aplicamos boas práticas de SEO on-page (velocidade, estrutura, meta tags) para ajudar seu site a ser encontrado no Google.",
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
