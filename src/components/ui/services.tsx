"use client";
import { Card, CardHeader, CardContent, CardTitle } from "./card";
import {
  MdWeb,
  MdComputer,
  MdOutlineAppShortcut,
  MdOutlineSpeed,
  MdClose,
} from "react-icons/md";
// import { IoFingerPrint } from "react-icons/io5";
import { Button } from "./button";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { FaCartShopping, FaCheck } from "react-icons/fa6";
// import { GiPuzzle } from "react-icons/gi";
import { ReactNode, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { ButtonGeral } from "./buttonGeral";

interface ServiceDetail {
  icon: ReactNode;
  title: string;
  tagline: string;
  checklist: string[];
  ideal: string[];
  deadline: string;
  results: string[];
  whatsapp: string;
}

interface ModalProps {
  data: ServiceDetail;
  onClose: () => void;
}

export const ModalData = ({ data, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm duration-200 animate-in fade-in">
      <ul className="relative flex h-[550px] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#1e293b] text-white shadow-2xl sm:flex-row">
        <li className="flex flex-col items-center justify-center border-r border-slate-800 bg-[#111827] p-8 text-center sm:w-1/3">
          <div className="mb-2 rounded-xl bg-slate-800 p-4 text-yellow-400 sm:mb-6">
            {data.icon}
          </div>
          <h2 className="text-2xl font-black uppercase tracking-wide text-yellow-400">
            {data.title}
          </h2>
          <p className="mt-2 px-2 text-sm font-light leading-relaxed text-slate-400 sm:mt-4">
            {data.tagline}
          </p>
        </li>

        <li className="withoutScroolBar flex flex-col justify-between overflow-y-auto bg-[#1a2333] p-8 sm:w-2/3">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 text-slate-400 transition-colors hover:text-white"
          >
            <MdClose size={24} />
          </button>
          <div className="absolute bottom-4 right-4 z-20 rounded-full bg-secondary-foreground/40 p-3 text-background transition-colors hover:text-white sm:hidden">
            <FaArrowDown size={24} className="animate-bounce" />
          </div>
          <div className="space-y-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-yellow-500/80">
                O que está incluído
              </p>
              <div className="grid grid-cols-2 gap-3">
                {data.checklist.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-300"
                  >
                    <FaCheck className="size-3 shrink-0 text-yellow-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-10">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-yellow-500/80">
                  Para quem é ideal
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {data.ideal.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded border border-slate-700 bg-slate-800 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-yellow-500/80">
                  Prazo estimado
                </p>
                <span className="inline-block w-max rounded border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 font-mono text-sm font-bold text-yellow-400">
                  {data.deadline}
                </span>
              </div>
            </div>

            <div className="rounded-lg border border-slate-800 bg-[#111827]/60 p-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-yellow-500/80">
                Resultado esperado
              </p>
              <ul className="space-y-1.5 text-sm">
                {data.results.map((result, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-slate-200"
                  >
                    <span className="text-yellow-400">→</span> {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4 border-t border-slate-800 pt-4">
            <ButtonGeral
              text={"Quero esse serviço"}
              link={`https://wa.me/5531991973835?text=${encodeURIComponent(data.whatsapp)}`}
              classes=" mx-auto "
            />
            {/* <button className="flex-1 rounded-md border border-slate-700 px-4 py-3 text-center text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800">
              Ver planos e preços
            </button> */}
          </div>
        </li>
      </ul>
    </div>
  );
};

export const Services = () => {
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | null>(
    null,
  );

  const cards = [
    {
      icon: (
        <HiMiniRocketLaunch className="size-6 text-popover-foreground md:size-8" />
      ),
      title: "Landing Pages",
      id: "landing-page",
      description: "Páginas focadas em converter visitantes em clientes.",
    },
    {
      icon: <MdWeb className="size-6 text-popover-foreground md:size-8" />,
      title: "Institucional",
      id: "institucional",
      description:
        "Presença digital sólida com arquitetura pensada para autoridade de marca.",
    },
    {
      icon: (
        <FaCartShopping className="size-6 text-popover-foreground md:size-8" />
      ),
      title: "E-commerce",
      id: "ecommerce",
      description:
        "Soluções de venda online completas, com interface intuitiva",
    },
    {
      icon: (
        <MdOutlineAppShortcut className="size-6 text-popover-foreground md:size-8" />
      ),
      title: "Aplicativos (Mobile)",
      id: "aplicativos",
      description: "Apps que funcionam em qualquer dispositivo.",
    },
    {
      icon: <MdComputer className="size-6 text-popover-foreground md:size-8" />,
      title: "Saas (Sistemas)",
      id: "saas",
      description:
        "Soluções sob medida para seu negócio, otimizando processos e aumentando a produtividade.",
    },
    {
      icon: (
        <MdOutlineSpeed className="size-6 text-popover-foreground md:size-8" />
      ),
      title: "Performance & SEO",
      id: "performance",
      description:
        "Consultoria técnica para acelerar sites lentos e melhorar Core Web Vitals.",
    },
    // {
    //   icon: (
    //     <IoFingerPrint className="size-6 text-popover-foreground md:size-8" />
    //   ),
    //   title: "Identidade Visual",
    //   id: "identidade",
    //   description: "Posicionamento premium que separa você da concorrência.",
    // },
    // {
    //   icon: <GiPuzzle className="size-6 text-popover-foreground md:size-8" />,
    //   title: "Templates prontos",
    //   id: "templates",
    //   description:
    //     "Componentes UI premium e prontos para desenvolvedores exigentes.",
    // },
  ];

  const servicesData: Record<string, ServiceDetail> = {
    "landing-page": {
      icon: (
        <HiMiniRocketLaunch className="size-6 text-popover-foreground md:size-8" />
      ),
      title: "Landing Pages",
      tagline: "Converta visitantes em clientes com velocidade extrema.",
      checklist: [
        "Estrutura Otimizada",
        "SEO On-page Completo",
        "Botão WhatsApp Integrado",
        "Formulário Inteligente",
        // "Hospedagem Grátis",
        "Entrega em 5 dias",
      ],
      ideal: ["Negócios Locais", "Lançamentos", "Campanhas de Ads"],
      deadline: "3-7 dias",
      results: ["Aumento real de conversão", "+150% Leads qualificados"],
      whatsapp:
        "Olá! Gostaria de saber mais sobre o serviço de Landing Pages de alta performance.",
    },
    institucional: {
      icon: <MdWeb className="size-6 text-popover-foreground md:size-8" />,
      title: "Site Institucional",
      tagline: "Autoridade e credibilidade digital para sua marca.",
      checklist: [
        "Até 6 páginas personalizadas",
        "Painel Administrativo Fácil",
        "Blog para Marketing de Conteúdo",
        "SEO Técnico Avançado",
        "Google Analytics Integrado",
        "Certificado SSL Incluso",
      ],
      ideal: ["Empresas", "Profissionais Liberais", "Clínicas"],
      deadline: "7-15 dias",
      results: ["Autoridade de marca", "Ranqueamento orgânico superior"],
      whatsapp:
        "Olá! Tenho interesse em desenvolver um Site Institucional para minha empresa.",
    },
    ecommerce: {
      icon: (
        <FaCartShopping className="size-6 text-popover-foreground md:size-8" />
      ),
      title: "E-commerce",
      tagline: "Sua loja vendendo 24 horas por dia sem gargalos.",
      checklist: [
        "Catálogo de Produtos Ilimitado",
        "Carrinho de Compras Otimizado",
        "Checkout de uma página",
        "Mercado Pago / Stripe",
        "Painel de Gestão de Vendas",
        "Cálculo de Frete Automático",
      ],
      ideal: ["Migração de Loja Física", "Empreendedores Digitais"],
      deadline: "30-60 dias",
      results: [
        "Canal de vendas 24h escalável",
        "Redução de abandono de carrinho",
      ],
      whatsapp:
        "Olá! Quero montar minha loja virtual (E-commerce) com performance extrema.",
    },
    performance: {
      icon: (
        <MdOutlineSpeed className="size-6 text-popover-foreground md:size-8" />
      ),
      title: "Otimização de Performance",
      tagline: "Pare de perder dinheiro com sites lentos.",
      checklist: [
        "Auditoria Lighthouse Completa",
        "Compressão de Ativos (Gzip/Brotli)",
        "Implementação de Lazy Loading",
        "Ajuste de Core Web Vitals",
        "Cache de Servidor Avançado",
        "Otimização de Banco de Dados",
      ],
      ideal: ["Sites Lentos", "Alto Bounce Rate", "Problemas de SEO"],
      deadline: "5-10 dias",
      results: ["Score 90+ Lighthouse", "-200% tempo de carregamento"],
      whatsapp:
        "Olá! Meu site está lento e gostaria de contratar a Otimização de Performance.",
    },
    aplicativos: {
      icon: (
        <MdOutlineAppShortcut className="size-6 text-popover-foreground md:size-8" />
      ),
      title: "Aplicativos Mobile",
      tagline: "Sua empresa no bolso do seu cliente com performance nativa.",
      checklist: [
        "Desenvolvimento iOS e Android",
        "Interface UI/UX Exclusiva",
        "Notificações Push llimitadas",
        "Integração com APIs e Gateways",
        "Publicação nas Lojas (App Store/Play Store)",
        "Suporte Técnico pós-lançamento",
      ],
      ideal: ["Startups", "Empresas de Logística", "Clubes de Benefícios"],
      deadline: "45-60 dias",
      results: [
        "Engajamento direto com o cliente",
        "Modernização de processos operacionais",
      ],
      whatsapp:
        "Olá! Tenho interesse em desenvolver um Aplicativo Mobile sob medida para meu projeto.",
    },
    saas: {
      icon: <MdComputer className="size-6 text-popover-foreground md:size-8" />,
      title: "SaaS & Sistemas",
      tagline:
        "Automatize processos complexos com uma plataforma web escalável.",
      checklist: [
        "Arquitetura Cloud Escalável",
        "Painéis de Dashboard Dinâmicos",
        "Gestão de Usuários e Permissões",
        "Cobrança Recorrente Automatizada",
        "Segurança e Criptografia de Dados",
        "Exportação de Relatórios Avançados",
      ],
      ideal: [
        "Startups de Tecnologia",
        "Automação Comercial",
        "ERP/CRM Customizados",
      ],
      deadline: "60-90 dias",
      results: [
        "Redução de custos operacionais",
        "Modelo de receita recorrente (MRR)",
      ],
      whatsapp:
        "Olá! Gostaria de fazer uma consultoria para o desenvolvimento de um Sistema/SaaS.",
    },
    // identidade: {
    //   icon: "brush",
    //   title: "Identidade Visual",
    //   tagline: "O design técnico que comunica valor instantâneo.",
    //   checklist: [
    //     "Logotipo (3 versões originais)",
    //     "Paleta de Cores Estratégica",
    //     "Tipografia Técnica Selecionada",
    //     "Guia de Marca Digital",
    //     "Arquivos Editáveis (SVG/AI)",
    //     "Social Media Kit Básico",
    //   ],
    //   ideal: ["Novos Negócios", "Reposicionamento"],
    //   deadline: "10-15 dias",
    //   results: ["Reconhecimento profissional", "Impacto visual memorável"],
    //   whatsapp:
    //     "Olá! Preciso de uma nova Identidade Visual estratégica para meu projeto.",
    // },
    // templates: {
    //   icon: "dashboard_customize",
    //   title: "Modelos Prontos",
    //   tagline: "Designs profissionais prontos para decolar.",
    //   checklist: [
    //     "Arquivo editável (Figma/HTML)",
    //     "Documentação Técnica",
    //     "1 revisão de ajuste inclusa",
    //     "Código Limpo e Semântico",
    //     "Componentes Reutilizáveis",
    //   ],
    //   ideal: ["Desenvolvedores", "Agências Precisando de Agilidade"],
    //   deadline: "Aquisição via WhatsApp",
    //   results: ["Lançamento ultra-rápido", "Padrão visual de elite"],
    //   whatsapp:
    //     "Olá! Gostaria de adquirir um dos seus Templates/Modelos prontos.",
    // },
  };

  const activeServiceData = activeServiceSlug
    ? servicesData[activeServiceSlug]
    : null;

  return (
    <>
      {activeServiceData && (
        <ModalData
          data={activeServiceData}
          onClose={() => setActiveServiceSlug(null)}
        />
      )}

      <section className="relative z-30 flex w-full justify-center pt-20">
        <article className="flex max-w-6xl flex-col gap-20 px-2 min-[400px]:px-5 sm:px-7 lg:px-2">
          <div className="flex flex-col gap-5">
            <p className="w-max rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 p-1 px-5 text-xs font-extralight uppercase text-secondary-foreground/80 sm:text-sm">
              Serviços
            </p>
            <h2 className="text-4xl font-bold sm:w-3/4 sm:text-4xl md:text-5xl lg:w-full">
              O que seu negócio precisa?
            </h2>
            <p className="text-base font-light opacity-80 min-[400px]:text-lg sm:text-xl">
              Desenvolvemos produtos digitais que funcionam. Desde páginas que
              vendem até sistemas que organizam seu negócio, cada solução é
              feita sob medida para seus objetivos.
            </p>
          </div>
          <ul className="m-auto grid grid-cols-1 content-center gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
              <li key={index} className="h-full max-w-md">
                <Card className="h-full rounded-md border-transparent bg-background py-2 text-foreground transition-all duration-200 hover:border hover:border-popover-foreground/50">
                  <CardHeader className="py-4">
                    <CardTitle className="flex w-full items-center gap-3 text-xl text-secondary-foreground md:text-2xl">
                      {card.icon}
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-5 py-1">
                    <p className="text-base opacity-75 md:text-lg">
                      {card.description}
                    </p>
                    <Button
                      className="relative w-max bg-transparent px-1 py-6 text-lg text-popover-foreground shadow-none transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-popover-foreground after:transition-all after:duration-300 hover:bg-transparent hover:after:w-full"
                      onClick={() => setActiveServiceSlug(card.id)}
                    >
                      Saiba mais
                      <IoIosArrowForward />
                    </Button>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};
