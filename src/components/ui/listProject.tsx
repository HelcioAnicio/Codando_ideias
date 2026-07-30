"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
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
import { ButtonGeral } from "./buttonGeral";

const projects = [
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
] as const;

export const ListProjects = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 640 ? 1 : 2);
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  const pages = useMemo(() => {
    const chunked = [];

    for (let index = 0; index < projects.length; index += itemsPerPage) {
      chunked.push(projects.slice(index, index + itemsPerPage));
    }

    return chunked;
  }, [itemsPerPage]);

  useEffect(() => {
    setActivePage((currentPage) => Math.min(currentPage, pages.length - 1));
  }, [pages.length]);

  useEffect(() => {
    const container = carouselRef.current;

    if (!container) {
      return;
    }

    const updateActivePage = () => {
      const pageWidth = container.clientWidth;

      if (!pageWidth) {
        return;
      }

      const nextPage = Math.round(container.scrollLeft / pageWidth);
      setActivePage(nextPage);
    };

    updateActivePage();
    container.addEventListener("scroll", updateActivePage, { passive: true });
    window.addEventListener("resize", updateActivePage);

    return () => {
      container.removeEventListener("scroll", updateActivePage);
      window.removeEventListener("resize", updateActivePage);
    };
  }, [pages.length]);

  const scrollToPage = (pageIndex: number) => {
    const container = carouselRef.current;

    if (!container) {
      return;
    }

    const safePage = Math.max(0, Math.min(pageIndex, pages.length - 1));

    container.scrollTo({
      left: container.clientWidth * safePage,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="mx-auto w-full bg-primary/20 py-10 lg:py-20"
      id="projects"
    >
      <div className="mx-auto max-w-6xl shadow-2xl min-[1040px]:rounded-3xl">
        <div className="relative overflow-hidden px-5 py-10 md:px-8 md:py-14 xl:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.08),transparent_24%),radial-gradient(circle_at_right,rgba(59,130,246,0.12),transparent_26%)] min-[1040px]:rounded-tl-3xl" />

          <div className="relative z-10 mb-10 max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 px-4 py-1 text-xs uppercase tracking-[0.26em] text-secondary-foreground/80">
              Portfólio selecionado
            </span>
            <h2 className="mb-4 font-custom text-3xl font-bold leading-tight md:text-5xl">
              Nossos projetos
            </h2>
            <p className="max-w-2xl text-base leading-8 text-secondary-foreground/80 md:text-lg">
              Portfólio selecionado de soluções digitais de alto impacto, unindo
              robustez técnica e design memorável.
            </p>
          </div>

          <div
            ref={carouselRef}
            className="no-scrollbar relative z-10 flex snap-x snap-mandatory overflow-x-auto scroll-smooth"
          >
            {pages.map((page, pageIndex) => (
              <div key={pageIndex} className="min-w-full snap-start">
                <div className="grid gap-6 sm:grid-cols-2">
                  {page.map((project) => {
                    return (
                      <article key={project.name} className="h-full">
                        <div className="flex h-full flex-col rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-popover-foreground/20 hover:bg-white/[0.045] sm:p-6">
                          <div
                            className={`mb-5 overflow-hidden rounded-[1.45rem] border border-white/10 bg-gradient-to-br ${project.palette.surface} p-4`}
                          >
                            <div className="mb-4 flex items-center justify-between gap-3">
                              <span
                                className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] ${project.palette.badge}`}
                              >
                                {project.preview.label}
                              </span>
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-2xl border ${project.palette.iconBox}`}
                              >
                                {project.icon}
                              </div>
                            </div>

                            <div className="overflow-hidden rounded-[1.2rem] bg-black/10">
                              <div className="flex items-center justify-between px-4 pb-3 pt-4">
                                <div className="flex items-center gap-3">
                                  {project.icon}
                                  <p
                                    className={`text-lg font-bold ${project.palette.previewTitle}`}
                                  >
                                    {project.preview.title}
                                  </p>
                                </div>
                                <div className="flex gap-1.5">
                                  <span
                                    className={`h-2.5 w-2.5 rounded-full ${project.palette.previewDots}`}
                                  />
                                  <span
                                    className={`h-2.5 w-2.5 rounded-full ${project.palette.previewDots}`}
                                  />
                                  <span
                                    className={`h-2.5 w-2.5 rounded-full ${project.palette.previewDots}`}
                                  />
                                </div>
                              </div>

                              <div className="relative aspect-[16/10] w-full">
                                <Image
                                  src={project.imageSrc}
                                  alt={`Preview do projeto ${project.name}`}
                                  fill
                                  className="object-cover object-top"
                                  sizes="(max-width: 639px) 100vw, 50vw"
                                />
                              </div>
                            </div>
                          </div>

                          <h3 className="mb-3 text-[2rem] font-bold leading-tight text-popover-foreground">
                            {project.name}
                          </h3>
                          <p className="mb-6 flex-1 text-base leading-8 text-slate-300">
                            {project.description}
                          </p>

                          <ButtonGeral
                            text="Ir para o site"
                            link={project.href}
                            variant="secondary"
                            classes="w-full max-w-none"
                          />
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-8 flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-sm text-foreground/55">
              Arraste no celular ou use os controles para navegar pelos
              projetos.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollToPage(activePage - 1)}
                aria-label="Página anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary transition hover:border-popover-foreground/30 hover:text-popover-foreground disabled:cursor-not-allowed disabled:opacity-40"
                disabled={activePage === 0}
              >
                <ArrowLeft className="h-4 w-4 text-foreground" />
              </button>

              <div className="flex items-center gap-2">
                {pages.map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    type="button"
                    onClick={() => scrollToPage(pageIndex)}
                    aria-label={`Ir para a página ${pageIndex + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      activePage === pageIndex
                        ? "w-10 bg-popover-foreground"
                        : "w-2.5 bg-white/20 hover:bg-white/35"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => scrollToPage(activePage + 1)}
                aria-label="Próxima página"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary transition hover:border-popover-foreground/30 hover:text-popover-foreground disabled:cursor-not-allowed disabled:opacity-40"
                disabled={activePage === pages.length - 1}
              >
                <ArrowRight className="h-4 w-4 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
