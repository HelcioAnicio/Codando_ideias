import type { ReactNode } from "react";
import {
  Calculator,
  Car,
  Droplets,
  Megaphone,
  PawPrint,
  Scale,
  Scissors,
  Sprout,
  Tractor,
} from "lucide-react";
import { GiDelicatePerfume } from "react-icons/gi";
import { MdSpa } from "react-icons/md";

export type Project = {
  name: string;
  description: string;
  href: string;
  imageSrc: string;
  icon: ReactNode;
  preview: {
    label: string;
    title: string;
  };
  palette: {
    surface: string;
    badge: string;
    iconBox: string;
    previewTitle: string;
    previewDots: string;
  };
};

export const projects: Project[] = [
  {
    name: "Agro Finance",
    description:
      "Sistema SaaS de alta complexidade para gestão agropecuária, com controle total de ativos, fluxo financeiro e ciclo reprodutivo.",
    href: "https://agro-finance-real.vercel.app/dashboard",
    imageSrc: "/agroFinance.png",
    icon: <Tractor className="h-5 w-5" />,
    preview: {
      label: "Dashboard",
      title: "Gestão do rebanho",
    },
    palette: {
      surface: "from-[#eff5e9] via-[#edf2e8] to-[#dde7d3]",
      badge: "bg-[#bce4b3] text-[#14361a]",
      iconBox: "border-[#8bc57b]/35 bg-white/40 text-[#3b7c3f]",
      previewTitle: "text-slate-900/80",
      previewDots: "bg-slate-500/35",
    },
  },
  {
    name: "João Victor Barbearia",
    description:
      "Site premium para barbearia tradicional, com identidade visual de luxo em preto e dourado e sistema de agendamento online.",
    href: "https://joao-victor-barbearia.vercel.app/",
    imageSrc: "/joaoVictorBarbearia.png",
    icon: <Scissors className="h-5 w-5" />,
    preview: {
      label: "Barbearia",
      title: "Desde 2011",
    },
    palette: {
      surface: "from-[#0a0a0a] via-[#111111] to-[#0a0a0a]",
      badge: "bg-[#78350f] text-[#fcd34d]",
      iconBox: "border-[#d97706]/30 bg-white/10 text-[#d97706]",
      previewTitle: "text-amber-300/90",
      previewDots: "bg-amber-400/60",
    },
  },
  {
    name: "Mimos da Poli",
    description:
      "Landing page institucional de alta performance com um catálogo por segmentos e direcionamento inteligente via WhatsApp.",
    href: "https://mimos-poli.vercel.app/",
    imageSrc: "/mimosDaPoli.png",
    icon: <GiDelicatePerfume className="h-5 w-5" />,
    preview: {
      label: "Landing Page",
      title: "Mimos para todos",
    },
    palette: {
      surface: "from-[#edf6ea] via-[#e5f4e8] to-[#F3F3F3]",
      badge: "bg-[#C15B75] text-foreground",
      iconBox: "border-[#D12061]/35 bg-white/40 text-[#D12061]",
      previewTitle: "text-slate-900/80",
      previewDots: "bg-slate-500/35",
    },
  },
  {
    name: "Aisthésis Estética",
    description:
      "Site institucional premium para clínica de estética e pilates em Caxias do Sul, com foco em autoridade, agendamento e conversão de pacientes.",
    href: "https://aisthesis-estetica.vercel.app/",
    imageSrc: "/aisthesis.png",
    icon: <MdSpa className="h-5 w-5" />,
    preview: {
      label: "Estética",
      title: "Realce sua beleza",
    },
    palette: {
      surface: "from-[#e0f2f1] via-[#b2dfdb] to-[#e0f2f1]",
      badge: "bg-[#00695c] text-white",
      iconBox: "border-[#00897b]/35 bg-white/40 text-[#00897b]",
      previewTitle: "text-slate-900/80",
      previewDots: "bg-slate-500/35",
    },
  },
  {
    name: "UniPromotora",
    description:
      "Landing page institucional de alta performance com integração direta a CRM e automação de atendimento via WhatsApp.",
    href: "https://unipromotora-helcioanicios-projects.vercel.app/",
    imageSrc: "/uniPromotora.png",
    icon: <Megaphone className="h-5 w-5" />,
    preview: {
      label: "Crédito",
      title: "Crédito responsável",
    },
    palette: {
      surface: "from-[#edf6ea] via-[#e5f4e8] to-[#dff0e1]",
      badge: "bg-[#afeac1] text-[#0f3d1e]",
      iconBox: "border-[#79f1a9]/35 bg-white/40 text-[#00cc66]",
      previewTitle: "text-slate-900/80",
      previewDots: "bg-slate-500/35",
    },
  },
  {
    name: "Bicho Mania",
    description:
      "Presença digital completa para pet shop com banho & tosa e clínica veterinária, focada em atração local e agendamento via WhatsApp.",
    href: "https://bicho-mania.vercel.app/",
    imageSrc: "/bichoMania.png",
    icon: <PawPrint className="h-5 w-5" />,
    preview: {
      label: "Pet Shop",
      title: "Seu pet em boas mãos",
    },
    palette: {
      surface: "from-[#e0f2fe] via-[#bae6fd] to-[#e0f2fe]",
      badge: "bg-[#0284c7] text-white",
      iconBox: "border-[#0ea5e9]/35 bg-white/40 text-[#0284c7]",
      previewTitle: "text-slate-900/80",
      previewDots: "bg-slate-500/35",
    },
  },
  {
    name: "Classic Mecânica",
    description:
      "Landing page de alta conversão para oficina automotiva com 40 anos de mercado, combinando autoridade local e chamada direta para orçamento.",
    href: "https://classic-mecanica-6jbi.vercel.app/",
    imageSrc: "/classicMecanica.png",
    icon: <Car className="h-5 w-5" />,
    preview: {
      label: "Automotivo",
      title: "Força e precisão",
    },
    palette: {
      surface: "from-[#1a1a1a] via-[#111111] to-[#1a1a1a]",
      badge: "bg-[#7f1d1d] text-[#fca5a5]",
      iconBox: "border-[#ef4444]/30 bg-white/10 text-[#ef4444]",
      previewTitle: "text-white/90",
      previewDots: "bg-white/45",
    },
  },
  {
    name: "Desentupidora Caxias",
    description:
      "Landing page de urgência para desentupidora 24h, com foco em resposta imediata, prova social e conversão via WhatsApp e ligação.",
    href: "https://desentupidora-caxias.vercel.app/",
    imageSrc: "/desentupidoraCaxias.png",
    icon: <Droplets className="h-5 w-5" />,
    preview: {
      label: "Serviços",
      title: "Resolve hoje",
    },
    palette: {
      surface: "from-[#f0fdf4] via-[#dcfce7] to-[#f0fdf4]",
      badge: "bg-[#065f46] text-[#6ee7b7]",
      iconBox: "border-[#059669]/35 bg-white/40 text-[#059669]",
      previewTitle: "text-slate-900/80",
      previewDots: "bg-slate-500/35",
    },
  },
  {
    name: "Contabilidade BH",
    description:
      "Portal institucional premium para escritório contábil em BH, com design sóbrio e elegante que transmite confiança e credibilidade.",
    href: "https://contabilidade-bh.vercel.app/",
    imageSrc: "/contabilidadeBH.png",
    icon: <Calculator className="h-5 w-5" />,
    preview: {
      label: "Contabilidade",
      title: "Assessoria premium",
    },
    palette: {
      surface: "from-[#0a0a08] via-[#111108] to-[#0a0a08]",
      badge: "bg-[#713f12] text-[#fde68a]",
      iconBox: "border-[#ca8a04]/30 bg-white/10 text-[#ca8a04]",
      previewTitle: "text-yellow-300/90",
      previewDots: "bg-yellow-400/60",
    },
  },
  {
    name: "Karen Martins",
    description:
      "Plataforma de autoridade para nutricionista, voltada para converter visitantes em pacientes com design acolhedor e profissional.",
    href: "https://karen-martins-nutricionista.vercel.app/",
    imageSrc: "/karenMartins.png",
    icon: <Sprout className="h-5 w-5" />,
    preview: {
      label: "Nutrição",
      title: "Gestação segura",
    },
    palette: {
      surface: "from-[#f5ece3] via-[#fbf3eb] to-[#f4e9dd]",
      badge: "bg-[#ead9c6] text-[#705840]",
      iconBox: "border-[#caa989]/35 bg-white/40 text-[#8a6a49]",
      previewTitle: "text-slate-900/75",
      previewDots: "bg-slate-500/35",
    },
  },
  {
    name: "Advogado Lessa",
    description:
      "Portal estratégico para revalidação de diplomas estrangeiros, com UX focada em clareza processual e conversão de leads qualificados.",
    href: "https://www.advogadolessa-diplomas.com.br/",
    imageSrc: "/lessaDiplomas.png",
    icon: <Scale className="h-5 w-5" />,
    preview: {
      label: "Landing Page",
      title: "Revalidação no Brasil",
    },
    palette: {
      surface: "from-[#232323] via-[#171717] to-[#101010]",
      badge: "bg-[#4a3320] text-[#ffce70]",
      iconBox: "border-[#dba83a]/30 bg-white/10 text-[#e1af2c]",
      previewTitle: "text-white/90",
      previewDots: "bg-white/45",
    },
  },
];
