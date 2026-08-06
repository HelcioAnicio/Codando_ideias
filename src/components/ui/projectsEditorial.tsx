import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

function ProjectColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-popover-foreground/70">
        {label}
      </p>
      <ul className="flex flex-col gap-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-popover-foreground/60" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const ProjectsEditorial = () => {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-7">
      {projects.map((project, index) => {
        const isOdd = index % 2 === 1;
        const number = String(index + 1).padStart(2, "0");

        return (
          <article
            key={project.slug}
            id={project.slug}
            className="scroll-mt-28 border-t border-white/10 py-16 first:border-t-0 first:pt-0 lg:py-20"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div
                className={`group relative lg:col-span-7 ${isOdd ? "lg:order-2" : "lg:order-1"}`}
              >
                <span
                  className={`absolute -top-3 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.24em] ${project.palette.badge} z-10`}
                >
                  {project.preview.label}
                </span>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
                  <Image
                    src={project.imageSrc}
                    alt={`Preview do projeto ${project.name}`}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1023px) 100vw, 58vw"
                  />
                </div>
              </div>

              <div
                className={`relative lg:col-span-5 ${isOdd ? "lg:order-1" : "lg:order-2"}`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 left-0 select-none text-7xl font-black text-white/[0.04] lg:text-8xl"
                >
                  {number}
                </span>

                <div className="relative flex flex-col gap-5">
                  <h2 className="text-3xl font-bold leading-tight text-popover-foreground md:text-4xl">
                    {project.name}
                  </h2>
                  <p className="text-base leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                    <ProjectColumn label="Benefícios" items={project.benefits} />
                    <ProjectColumn label="Melhorias" items={project.improvements} />
                  </div>
                  <ProjectColumn label="Processo criativo" items={project.process} />

                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link mt-2 inline-flex w-max items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-popover-foreground transition-all hover:gap-2.5"
                  >
                    Ver site
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};
