"use client";
import React from "react";
import { FaArrowRight, FaDiamond } from "react-icons/fa6";
import Link from "next/link";
// import { Button } from "./button";
export const Steps = () => {
  return (
    <section className="flex w-full items-center justify-center rounded-md bg-primary/20 p-1 py-10 min-[400px]:py-20 sm:py-32">
      <div className="relative flex w-full max-w-6xl flex-col gap-5 p-3 py-7 sm:gap-8">
        <h4 className="w-full text-3xl font-bold sm:w-3/4 sm:text-4xl">
          Contruímos juntos, com clareza e propósito
        </h4>

        <p className="relative z-10 max-w-xs text-sm font-extralight text-secondary-foreground/80 md:max-w-xl md:text-base">
          Planejamos o caminho ideal juntos, criamos um projeto personalizado e
          eficiente, garantindo que tudo funcione perfeitamente no final.
        </p>
        <div className="relative flex flex-col gap-5 border-b border-popover-foreground font-semibold sm:flex-row md:justify-between">
          <p className="flex items-center gap-2 pl-1 text-4xl text-popover-foreground sm:text-6xl">
            1
            <span className="text-sm text-foreground sm:text-base">
              Entendimento e estratégia
            </span>
          </p>
          <p className="flex items-center gap-2 text-4xl text-popover-foreground sm:text-6xl">
            2
            <span className="text-sm text-foreground sm:text-base">
              Desenvolvimento sob medida
            </span>
          </p>
          <p className="flex items-center gap-2 text-4xl text-popover-foreground sm:text-6xl">
            3
            <span className="text-sm text-foreground sm:text-base">
              Testes, entrega e suporte
            </span>
          </p>
          <FaDiamond className="absolute -bottom-2 -right-2 w-6 text-popover-foreground" />
        </div>
        <Link href="/processos" className="mt-10 block">
          <button className="group relative flex h-10 w-max items-center justify-start break-words rounded-full border-none bg-primary pl-4 shadow-lg transition-all duration-500 ease-out hover:w-max">
            <div className="z-10 flex h-6 w-6 shrink-0 items-center justify-center">
              <FaArrowRight
                size={18}
                className="transition-transform duration-500 ease-out group-hover:translate-x-1"
              />
            </div>

            <span className="mx-4 w-max whitespace-nowrap break-words text-sm font-bold uppercase tracking-widest text-secondary-foreground transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100">
              Quero entender
            </span>

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </Link>
      </div>
    </section>
  );
};
