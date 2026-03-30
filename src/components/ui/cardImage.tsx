import Link from "next/link";

import { Button } from "./button";

export const CardImage = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-76px)] w-full flex-col items-center justify-center overflow-hidden border-none bg-background text-center"
    >
      <div className="absolute bottom-0 aspect-square w-[130%] max-w-[1400px] translate-y-[75%] rounded-full min-[400px]:translate-y-[55%] sm:translate-y-[60%] lg:translate-y-[80%]">
        <div className="h-full w-full animate-growUp rounded-full bg-[radial-gradient(circle,_#828B98_0%,_transparent_90%)] blur-xl" />
      </div>
      <div className="absolute bottom-0 aspect-square w-[120%] max-w-[1400px] translate-y-[80%] min-[400px]:translate-y-[60%] sm:translate-y-[65%] lg:translate-y-[85%]">
        <div className="h-full w-full animate-growUp rounded-full bg-background shadow-[0_0_40px] shadow-popover-foreground" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 md:gap-16">
        <h1 className="max-w-5xl text-3xl font-bold text-foreground min-[400px]:text-4xl md:text-6xl md:leading-[1.15]">
          Sites lentos custam fortunas. Engenharia de performance{" "}
          <br className="hidden md:block" />
          gera faturamento.
        </h1>

        <p className="max-w-2xl text-base font-light leading-relaxed text-foreground min-[400px]:text-lg sm:text-xl">
          Desenvolvemos ecossistemas digitais com foco em{" "}
          <span className="font-semibold text-popover-foreground min-[400px]:text-lg sm:text-xl">
            arquitetura limpa
          </span>{" "}
          e{" "}
          <span className="font-semibold text-popover-foreground min-[400px]:text-lg sm:text-xl">
            velocidade extrema
          </span>
          . Onde outros entregam design, nós entregamos infraestrutura de alta
          conversão .
        </p>

        <Link
          href="https://wa.me/5531991973835?text=Olá+gostaria+sobre+o+desenvolvimento+de+sites/sistemas"
          className="mt-4"
        >
          <Button className="rounded-lg bg-popover-foreground px-8 py-7 text-sm font-bold uppercase tracking-wider text-background shadow-lg transition-all hover:bg-popover-foreground hover:brightness-105">
            Solicitar diagnóstico técnico
          </Button>
        </Link>
      </div>
    </section>
  );
};
