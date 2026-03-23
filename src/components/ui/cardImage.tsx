import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

import BackgroundImage from "../../../public/background.png";
import { Button } from "./button";

export const CardImage = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-76px)] w-full flex-col items-center justify-center overflow-hidden bg-[#01132d] px-4 text-center"
    >
      <div className="absolute bottom-[-150px] h-[500px] w-[120%] rounded-[100%] bg-[radial-gradient(circle,_#ffffff60_0%,_transparent_95%)] blur-xl" />
      <div className="absolute bottom-0 h-screen w-full translate-y-3/4 rounded-full bg-background shadow-[0_0_20px] shadow-popover-foreground" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Título com largura controlada para bater com o design */}
        <h1 className="max-w-4xl text-3xl font-bold text-white md:text-5xl lg:text-6xl lg:leading-[1.15]">
          Sites lentos custam fortunas. <br className="hidden md:block" />
          Engenharia de performance <br className="hidden md:block" />
          gera faturamento.
        </h1>

        {/* Descrição */}
        <p className="max-w-2xl text-base font-light leading-relaxed text-gray-300 md:text-xl">
          Desenvolvemos ecossistemas digitais com foco em{" "}
          <span className="font-semibold text-popover-foreground">
            arquitetura limpa
          </span>{" "}
          e{" "}
          <span className="font-semibold text-popover-foreground">
            velocidade extrema
          </span>
          . Onde outros entregam design, nós entregamos{" "}
          <span className="font-semibold text-popover-foreground">
            infraestrutura de alta conversão
          </span>
          .
        </p>

        {/* Botão Estilizado */}
        <Link
          href="https://wa.me/5531991973835?text=Olá+gostaria+sobre+o+desenvolvimento+de+sites/sistemas"
          className="mt-4"
        >
          <Button className="h-14 rounded-lg bg-popover-foreground px-8 text-sm font-bold uppercase tracking-wider text-background shadow-lg transition-all hover:brightness-110">
            Solicitar diagnóstico técnico
          </Button>
        </Link>
      </div>
    </section>
  );
};
