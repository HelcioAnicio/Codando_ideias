import Image from "next/image";
import { projects } from "@/data/projects";
import { ButtonGeral } from "./buttonGeral";

export const ProjectsTeaser = () => {
  const featured = projects.slice(0, 4);

  return (
    <section className="mx-auto w-full bg-primary/20 py-10 lg:py-20" id="projects">
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

          <div className="relative z-10 grid gap-6 sm:grid-cols-2">
            {featured.map((project) => (
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
            ))}
          </div>

          <div className="relative z-10 mt-10 flex justify-center">
            <ButtonGeral
              text="Ver mais projetos"
              link="/projetos"
              classes="w-max px-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
