"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseMedical,
  Megaphone,
  Scale,
  ShoppingBag,
  Sprout,
  Tractor,
} from "lucide-react";

const projects = [
  {
    name: "Agro Finance",
    description:
      "Sistema SaaS de alta complexidade para gestão agropecuária, com controle total de ativos, fluxo financeiro e ciclo reprodutivo.",
    href: "https://agro-finance-real.vercel.app/dashboard",
    imageSrc: "/agroFinance.png",
    icon: Tractor,
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
    name: "Advogado Lessa",
    description:
      "Portal estratégico para revalidação de diplomas estrangeiros, com UX focada em clareza processual e conversão de leads qualificados.",
    href: "https://www.advogadolessa-diplomas.com.br/",
    imageSrc: "/lessaDiplomas.png",
    icon: Scale,
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
  {
    name: "UniPromotora",
    description:
      "Landing page institucional de alta performance com integração direta a CRM e automação de atendimento via WhatsApp.",
    href: "https://unipromotora-helcioanicios-projects.vercel.app/",
    imageSrc: "/uniPromotora.png",
    icon: Megaphone,
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
    name: "Ecommerce FSW",
    description:
      "Plataforma de e-commerce moderna com checkout seguro via Stripe e autenticação social, focada em escala e conversão.",
    href: "https://ecommerce-fsw-weld.vercel.app/",
    imageSrc: "/eccomerce.png",
    icon: ShoppingBag,
    preview: {
      label: "Store",
      title: "Ofertas imperdíveis",
    },
    palette: {
      surface: "from-[#131218] via-[#171420] to-[#1e1830]",
      badge: "bg-[#33245f] text-[#ffffff]",
      iconBox: "border-[#8c68ff]/30 bg-white/10 text-[#7a55ff]",
      previewTitle: "text-white/90",
      previewDots: "bg-white/45",
    },
  },
  {
    name: "Clínica Monguilhott",
    description:
      "Presença digital premium para saúde, com foco em autoridade clínica, leveza visual e captação de pacientes.",
    href: "https://monguilho-dental.vercel.app/",
    imageSrc: "/monguilo.png",
    icon: BriefcaseMedical,
    preview: {
      label: "Saúde",
      title: "Tratamento discreto",
    },
    palette: {
      surface: "from-[#bbf0e6] via-[#b7efe2] to-[#c7f5ea]",
      badge: "bg-[#7ee2d4] text-[#0c5046]",
      iconBox: "border-[#5be5d2]/35 bg-white/40 text-[#08b8a5]",
      previewTitle: "text-slate-900/70",
      previewDots: "bg-slate-500/35",
    },
  },
  {
    name: "Karen Martins",
    description:
      "Plataforma de autoridade para nutricionista, voltada para converter visitantes em pacientes com design acolhedor e profissional.",
    href: "https://karen-martins-nutricionista.vercel.app/",
    imageSrc: "/karenMartins.png",
    icon: Sprout,
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
    <section className="mx-auto w-full max-w-5xl rounded-3xl" id="projects">
      <div className="mx-auto rounded-3xl shadow-2xl">
        <div className="relative overflow-hidden px-5 py-10 md:px-8 md:py-14 xl:px-10">
          <div className="absolute inset-0 rounded-tl-3xl bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.08),transparent_24%),radial-gradient(circle_at_right,rgba(59,130,246,0.12),transparent_26%)]" />

          <div className="relative z-10 mb-10 max-w-3xl">
            <span className="mb-4 inline-flex rounded-full border border-white/10 bg-accent/5 px-4 py-1 text-xs uppercase tracking-[0.26em] text-accent/70">
              Portfólio selecionado
            </span>
            <h2 className="mb-4 font-custom text-3xl font-bold leading-tight md:text-5xl">
              Nossos Projetos de Elite
            </h2>
            <p className="max-w-2xl text-base leading-8 text-accent/80 md:text-lg">
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
                    const Icon = project.icon;

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
                                <Icon className="h-5 w-5" />
                              </div>
                            </div>

                            <div className="overflow-hidden rounded-[1.2rem] bg-black/10">
                              <div className="flex items-center justify-between px-4 pb-3 pt-4">
                                <div className="flex items-center gap-3">
                                  <Icon
                                    className={`h-5 w-5 ${project.palette.previewTitle}`}
                                  />
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
                          <p className="text-primary/68 mb-6 flex-1 text-base leading-8">
                            {project.description}
                          </p>

                          <Link
                            href={project.href}
                            target="_blank"
                            className="inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(90deg,#ffe16d_0%,#ff9800_100%)] px-5 py-4 text-base font-bold text-slate-900 transition duration-300 hover:brightness-105 active:scale-[0.99]"
                          >
                            Ver Projeto
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-8 flex flex-col items-center justify-between gap-5 md:flex-row">
            <p className="text-sm text-primary/55">
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
                <ArrowLeft className="h-4 w-4" />
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
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
