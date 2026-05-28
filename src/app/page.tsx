import { Header } from "@/components/ui/header";
import { ListProjects } from "@/components/ui/listProject";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";
import { WhyDevLab } from "@/components/ui/whyDevLab";
import { Steps } from "@/components/ui/steps";
import { Services } from "@/components/ui/services";
// import { Cost } from "@/components/ui/cost";
import { StudioFaq } from "@/components/ui/studio-faq";
import { StudioAuthorityShowcase } from "@/components/ui/studio-authority-showcase";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative mx-auto flex flex-wrap gap-20 overflow-hidden sm:items-center">
        <CardImage />
        <Services />
        <StudioAuthorityShowcase />

        {/* <div className="max-w-container-max px-gutter mb-lg mx-auto">
          <span className="font-label-caps text-label-caps text-tertiary">
            Como criamos seu site
          </span>
          <h2 className="font-headline-lg text-headline-lg mt-base">
            Nosso Processo
          </h2>
        </div>
        <div className="process-accordion w-full">
          <div className="process-panel active group cursor-pointer bg-[#0A1628]">
            <div className="step-number-bg font-label-caps pointer-events-none absolute left-4 top-4 text-[80px] leading-none text-white opacity-15">
              01
            </div>
            <div className="rotated-title pointer-events-none absolute inset-0 hidden items-center justify-center hover:flex md:flex">
              <h3 className="font-headline-md whitespace-nowrap text-xl uppercase tracking-widest text-white">
                Briefing &amp; Diagnóstico
              </h3>
            </div>
            <div className="panel-content p-lg relative z-10 flex h-full flex-col justify-center">
              <span className="material-symbols-outlined text-tertiary mb-md text-5xl">
                clipboard
              </span>
              <div className="bg-tertiary/20 text-tertiary px-sm mb-sm inline-block w-fit rounded-full py-1 text-xs font-bold">
                Dia 1–2
              </div>
              <h3 className="font-headline-md mb-md text-white">
                Briefing &amp; Diagnóstico
              </h3>
              <p className="text-on-surface-variant font-body-md max-w-md">
                Entendemos seu negócio, público-alvo, concorrentes e objetivos.
                Fazemos as perguntas certas para garantir que o site resolva
                problemas reais.
              </p>
            </div>
          </div>
          <div className="process-panel group cursor-pointer bg-[#0D1F3C]">
            <div className="step-number-bg font-label-caps pointer-events-none absolute left-4 top-4 text-[80px] leading-none text-white opacity-15">
              02
            </div>
            <div className="rotated-title pointer-events-none absolute inset-0 flex hidden items-center justify-center md:flex">
              <h3 className="font-headline-md whitespace-nowrap text-xl uppercase tracking-widest text-white">
                Estratégia &amp; Arquitetura
              </h3>
            </div>
            <div className="panel-content p-lg relative z-10 flex h-full flex-col justify-center">
              <span className="material-symbols-outlined text-tertiary mb-md text-5xl">
                sitemap
              </span>
              <div className="bg-tertiary/20 text-tertiary px-sm mb-sm inline-block w-fit rounded-full py-1 text-xs font-bold">
                Dia 2–3
              </div>
              <h3 className="font-headline-md mb-md text-white">
                Estratégia &amp; Arquitetura
              </h3>
              <p className="text-on-surface-variant font-body-md max-w-md">
                Definimos a estrutura de páginas, hierarquia de informação,
                calls-to-action e jornada do usuário. Aqui nasce a espinha
                dorsal do projeto.
              </p>
            </div>
          </div>
          <div className="process-panel group cursor-pointer bg-[#0A1628]">
            <div className="step-number-bg font-label-caps pointer-events-none absolute left-4 top-4 text-[80px] leading-none text-white opacity-15">
              03
            </div>
            <div className="rotated-title pointer-events-none absolute inset-0 flex hidden items-center justify-center md:flex">
              <h3 className="font-headline-md whitespace-nowrap text-xl uppercase tracking-widest text-white">
                Design &amp; Prototipagem
              </h3>
            </div>
            <div className="panel-content p-lg relative z-10 flex h-full flex-col justify-center">
              <span className="material-symbols-outlined text-tertiary mb-md text-5xl">
                pen_tool
              </span>
              <div className="bg-tertiary/20 text-tertiary px-sm mb-sm inline-block w-fit rounded-full py-1 text-xs font-bold">
                Dia 3–7
              </div>
              <h3 className="font-headline-md mb-md text-white">
                Design &amp; Prototipagem
              </h3>
              <p className="text-on-surface-variant font-body-md max-w-md">
                Criamos o layout visual completo com foco em conversão e
                identidade de marca. Você aprova antes de escrevermos uma linha
                de código.
              </p>
            </div>
          </div>
          <div className="process-panel group cursor-pointer bg-[#0D1F3C]">
            <div className="step-number-bg font-label-caps pointer-events-none absolute left-4 top-4 text-[80px] leading-none text-white opacity-15">
              04
            </div>
            <div className="rotated-title pointer-events-none absolute inset-0 flex hidden items-center justify-center md:flex">
              <h3 className="font-headline-md whitespace-nowrap text-xl uppercase tracking-widest text-white">
                Desenvolvimento
              </h3>
            </div>
            <div className="panel-content p-lg relative z-10 flex h-full flex-col justify-center">
              <span className="material-symbols-outlined text-tertiary mb-md text-5xl">
                code
              </span>
              <div className="bg-tertiary/20 text-tertiary px-sm mb-sm inline-block w-fit rounded-full py-1 text-xs font-bold">
                Dia 7–18
              </div>
              <h3 className="font-headline-md mb-md text-white">
                Desenvolvimento
              </h3>
              <p className="text-on-surface-variant font-body-md max-w-md">
                Código limpo, semântico e otimizado. Performance é prioridade
                desde o primeiro componente. Nada de templates pesados — tudo
                construído sob medida.
              </p>
            </div>
          </div>
          <div className="process-panel group cursor-pointer bg-[#0A1628]">
            <div className="step-number-bg font-label-caps pointer-events-none absolute left-4 top-4 text-[80px] leading-none text-white opacity-15">
              05
            </div>
            <div className="rotated-title pointer-events-none absolute inset-0 flex hidden items-center justify-center md:flex">
              <h3 className="font-headline-md whitespace-nowrap text-xl uppercase tracking-widest text-white">
                Testes &amp; Otimização
              </h3>
            </div>
            <div className="panel-content p-lg relative z-10 flex h-full flex-col justify-center">
              <span className="material-symbols-outlined text-tertiary mb-md text-5xl">
                check_circle
              </span>
              <div className="bg-tertiary/20 text-tertiary px-sm mb-sm inline-block w-fit rounded-full py-1 text-xs font-bold">
                Dia 18–22
              </div>
              <h3 className="font-headline-md mb-md text-white">
                Testes &amp; Otimização
              </h3>
              <p className="text-on-surface-variant font-body-md max-w-md">
                Testamos em todos os dispositivos e navegadores. Auditoria de
                velocidade, acessibilidade e SEO técnico. Só entregamos quando
                está perfeito.
              </p>
            </div>
          </div>
          <div className="process-panel group cursor-pointer bg-[#0D1F3C]">
            <div className="step-number-bg font-label-caps pointer-events-none absolute left-4 top-4 text-[80px] leading-none text-white opacity-15">
              06
            </div>
            <div className="rotated-title pointer-events-none absolute inset-0 flex hidden items-center justify-center md:flex">
              <h3 className="font-headline-md whitespace-nowrap text-xl uppercase tracking-widest text-white">
                Entrega &amp; Suporte
              </h3>
            </div>
            <div className="panel-content p-lg relative z-10 flex h-full flex-col justify-center">
              <span className="material-symbols-outlined text-tertiary mb-md text-5xl">
                rocket
              </span>
              <div className="bg-tertiary/20 text-tertiary px-sm mb-sm inline-block w-fit rounded-full py-1 text-xs font-bold">
                Dia 22–25
              </div>
              <h3 className="font-headline-md mb-md text-white">
                Entrega &amp; Suporte
              </h3>
              <p className="text-on-surface-variant font-body-md max-w-md">
                Deploy em produção, treinamento para você gerenciar o conteúdo,
                e suporte pós-entrega. Você nunca fica sozinho depois do
                lançamento.
              </p>
            </div>
          </div>
        </div> */}
        {/* <Cost /> */}
        <Steps />
        <WhyDevLab />
        <ListProjects />
        <StudioFaq />
      </main>
      <Footer />
    </>
  );
}
