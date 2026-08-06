"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ButtonGeral } from "./buttonGeral";
import { projects as allProjects, type Project } from "@/data/projects";

type ListProjectsProps = {
  projects?: Project[];
  ctaHref?: string;
  ctaText?: string;
};

export const ListProjects = ({
  projects = allProjects,
  ctaHref,
  ctaText,
}: ListProjectsProps) => {
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
  }, [itemsPerPage, projects]);

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
              Projetos em destaque
            </h2>
            <p className="max-w-2xl text-base leading-8 text-secondary-foreground/80 md:text-lg">
              Uma amostra de soluções digitais de alto impacto, unindo robustez
              técnica e design memorável.
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

          {ctaHref && (
            <div className="relative z-10 mt-8 flex justify-center">
              <ButtonGeral
                text={ctaText ?? "Ver mais"}
                link={ctaHref}
                classes="w-max px-10"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
