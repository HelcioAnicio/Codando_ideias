import type { ReactNode } from "react";
import {
  MdWeb,
  MdComputer,
  MdOutlineAppShortcut,
  MdOutlineSpeed,
} from "react-icons/md";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { RefreshCcw } from "lucide-react";

export type ServiceCard = {
  icon: ReactNode;
  title: string;
  id: string;
  description: string;
};

export type ServiceDetail = {
  icon: ReactNode;
  title: string;
  tagline: string;
  checklist: string[];
  ideal: string[];
  deadline: string;
  results: string[];
  whatsapp: string;
};

export const cards: ServiceCard[] = [
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
      <RefreshCcw className="size-6 text-popover-foreground md:size-8" />
    ),
    title: "Avaliação & Remodelação",
    id: "avaliacao-remodelacao",
    description:
      "Já tem site? Fazemos o diagnóstico completo e reconstruímos com foco em resultado.",
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
];

export const servicesData: Record<string, ServiceDetail> = {
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
  "avaliacao-remodelacao": {
    icon: (
      <RefreshCcw className="size-6 text-popover-foreground md:size-8" />
    ),
    title: "Avaliação & Remodelação de Sites",
    tagline:
      "Site desatualizado ou sem retorno? Diagnosticamos e reconstruímos com foco em resultado.",
    checklist: [
      "Auditoria completa (UX, SEO, performance)",
      "Relatório de pontos de melhoria",
      "Redesign visual completo",
      "Migração de conteúdo sem perder SEO",
      "Otimização de velocidade",
      "Estrutura pensada para conversão",
    ],
    ideal: ["Sites desatualizados", "Baixa conversão", "Sites lentos ou antigos"],
    deadline: "7-20 dias",
    results: [
      "Site renovado sem perder histórico de SEO",
      "Aumento de conversão e credibilidade",
    ],
    whatsapp:
      "Olá! Tenho um site e gostaria de uma avaliação com proposta de remodelação.",
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
      "Notificações Push Ilimitadas",
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
};
