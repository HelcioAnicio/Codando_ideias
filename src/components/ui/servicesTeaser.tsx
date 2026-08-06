import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MdWeb } from "react-icons/md";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { RefreshCcw } from "lucide-react";
import { ButtonGeral } from "./buttonGeral";

const highlights = [
  {
    id: "institucional",
    icon: <MdWeb className="size-7" />,
    title: "Institucional",
    description:
      "Presença digital sólida, com arquitetura pensada para autoridade de marca.",
    accent: "border-amber-300/25 bg-amber-300/10 text-amber-300",
    glow: "from-amber-300/10",
  },
  {
    id: "landing-page",
    icon: <HiMiniRocketLaunch className="size-7" />,
    title: "Landing Pages",
    description: "Páginas de alta conversão, feitas para transformar visitas em clientes.",
    accent: "border-cyan-300/25 bg-cyan-300/10 text-cyan-300",
    glow: "from-cyan-300/10",
  },
  {
    id: "avaliacao-remodelacao",
    icon: <RefreshCcw className="size-7" />,
    title: "Avaliação & Remodelação",
    description:
      "Já tem site? Diagnosticamos o que trava seus resultados e reconstruímos com foco em conversão.",
    accent: "border-emerald-300/25 bg-emerald-300/10 text-emerald-300",
    glow: "from-emerald-300/10",
    badge: "Novo",
  },
  {
    id: "ecommerce",
    icon: <FaCartShopping className="size-7" />,
    title: "E-commerce",
    description: "Sua loja vendendo 24 horas por dia, com checkout simples e sem gargalos.",
    accent: "border-violet-300/25 bg-violet-300/10 text-violet-300",
    glow: "from-violet-300/10",
  },
];

export const ServicesTeaser = () => {
  return (
    <section className="relative z-30 flex w-full justify-center pt-10">
      <div className="flex w-full max-w-6xl flex-col gap-12 px-2 min-[400px]:px-5 sm:px-7 lg:px-2">
        <div className="flex flex-col gap-5">
          <p className="w-max rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 p-1 px-5 text-xs font-extralight uppercase text-secondary-foreground/80 sm:text-sm">
            Serviços
          </p>
          <h2 className="text-4xl font-bold sm:w-3/4 sm:text-4xl md:text-5xl lg:w-full">
            O que seu negócio precisa?
          </h2>
          <p className="max-w-2xl text-base font-light leading-snug opacity-80 min-[400px]:text-lg sm:text-xl">
            Do primeiro site ao redesign de um projeto já existente. Veja o
            que fazemos com mais frequência.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <Link
              key={item.id}
              href={`/servicos#${item.id}`}
              className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${item.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                aria-hidden="true"
              />

              {item.badge && (
                <span className="absolute right-4 top-4 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-emerald-300">
                  {item.badge}
                </span>
              )}

              <div
                className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border ${item.accent}`}
              >
                {item.icon}
              </div>

              <div className="relative flex flex-1 flex-col gap-2">
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-70">
                  {item.description}
                </p>
              </div>

              <span className="relative flex items-center gap-1.5 text-sm font-semibold text-popover-foreground">
                Saiba mais
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <ButtonGeral
            text="Ver todos os serviços"
            link="/servicos"
            variant="secondary"
            classes="w-max px-10"
          />
        </div>
      </div>
    </section>
  );
};
