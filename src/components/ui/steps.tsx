"use client";
import React from "react";
import {
  MdOutlineArchitecture,
  MdOutlineDesignServices,
  MdPrecisionManufacturing,
  MdOutlineTerminal,
  MdCode,
  MdDataObject,
  MdBugReport,
  MdRocketLaunch,
  MdCloudUpload,
  MdOutlineAutoGraph,
  MdUpdate,
} from "react-icons/md";
import { FaCheckCircle, FaArrowRight, FaUber, FaTwitch } from "react-icons/fa";

import { SiNetflix, SiNike } from "react-icons/si";
import { AiFillTikTok, AiOutlineOpenAI } from "react-icons/ai";

export const Steps = () => {
  return (
    <section
      id="steps"
      aria-label="Como seu site é construído"
      className="w-full bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 font-sans xl:px-2">
        <article className="relative mx-auto pb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
            <MdPrecisionManufacturing className='className="material-symbols-outlined animate-pulse" text-[16px] text-amber-400' />{" "}
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Metodologia
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Como seu site é <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              construído.
            </span>
          </h1>
        </article>

        <ul className="relative mx-auto grid grid-cols-1 flex-col-reverse justify-items-center gap-10 pb-24 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-2">
          <li className="relative flex w-full max-w-sm flex-col justify-between lg:max-w-md">
            <div className="group relative rounded-xl border border-foreground/[0.06] bg-secondary/60 px-4 py-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-secondary px-2 text-amber-400 shadow-inner">
                  <MdOutlineArchitecture className="size-8 text-amber-400 md:size-12" />
                </div>
                <h3 className="flex w-full items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 min-[400px]:text-base">
                  <span>01</span>
                  <span>-</span>
                  <span>Planejamento &amp; Estratégia</span>
                </h3>
              </div>

              <div className="space-y-4 text-sm font-light text-secondary-foreground/80">
                <p className="flex items-center gap-3">
                  <FaCheckCircle
                    className="shrink-0 text-amber-400/90"
                    size={16}
                  />
                  Análise de mercado
                </p>
                <p className="flex items-center gap-3">
                  <FaCheckCircle
                    className="shrink-0 text-amber-400/90"
                    size={16}
                  />
                  Entender o seu objetivo
                </p>
                <p className="flex items-center gap-3">
                  <FaCheckCircle
                    className="shrink-0 text-amber-400/90"
                    size={16}
                  />
                  Compreender a necessidade do seu cliente
                </p>
              </div>
            </div>
          </li>

          <li className="relative flex w-full max-w-sm flex-col justify-between lg:max-w-md">
            <div className="group relative rounded-xl border border-foreground/[0.06] bg-secondary/60 px-4 py-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-secondary text-cyan-400 shadow-inner">
                  <MdOutlineDesignServices className="size-8 text-cyan-400 md:size-12" />
                </div>
                <h3 className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 min-[400px]:text-base">
                  <span>02</span>
                  <span>-</span>
                  <span>Design inteligente</span>
                </h3>
              </div>

              <div className="space-y-4 text-sm font-light text-secondary-foreground/80">
                <p className="flex items-center gap-3">
                  <FaArrowRight
                    className="shrink-0 text-cyan-400/90"
                    size={16}
                  />{" "}
                  Layout personalizado
                </p>
                <p className="flex items-center gap-3">
                  <FaArrowRight
                    className="shrink-0 text-cyan-400/90"
                    size={16}
                  />{" "}
                  Responsividade para todas as telas
                </p>
                <p className="flex items-center gap-3">
                  <FaArrowRight
                    className="shrink-0 text-cyan-400/90"
                    size={16}
                  />{" "}
                  Design focado em conversão
                </p>
              </div>
            </div>
          </li>

          <li className="relative flex w-full max-w-sm flex-col justify-between lg:max-w-md">
            <div className="group relative rounded-xl border border-foreground/[0.06] bg-secondary/60 px-4 py-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-secondary px-2 text-cyan-400 shadow-inner">
                  <MdOutlineTerminal className="size-8 text-amber-400 md:size-12" />
                </div>
                <h3 className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-amber-400 min-[400px]:text-base">
                  <span>03</span>
                  <span>-</span>
                  <span>Desenvolvimento em código puro </span>
                </h3>
              </div>
              <div className="space-y-4 text-sm font-light text-secondary-foreground/80">
                <p className="flex items-center gap-3">
                  <MdCode className="material-symbols-outlined shrink-0 text-[20px] text-amber-400/90" />
                  Construção do zero
                </p>
                <p className="flex items-center gap-3">
                  <MdDataObject className="material-symbols-outlined shrink-0 text-[20px] text-amber-400/90" />
                  Sem templates ou moldelos prontos
                </p>
                <p className="flex items-center gap-3">
                  <MdBugReport className="material-symbols-outlined shrink-0 text-[20px] text-amber-400/90" />
                  Ultra rápido e seguro, sem vulnerabilidades
                </p>
              </div>
            </div>
          </li>

          <li className="relative flex w-full max-w-sm flex-col justify-between lg:max-w-md">
            <div className="group relative rounded-xl border border-foreground/[0.06] bg-secondary/60 px-4 py-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-secondary px-2 text-cyan-400 shadow-inner">
                  <MdRocketLaunch className="size-8 text-cyan-400 md:size-12" />
                </div>
                <h3 className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 min-[400px]:text-base">
                  <span>04</span>
                  <span>-</span>
                  <span>Lançamento &amp; monitoramento</span>{" "}
                </h3>
              </div>

              <div className="space-y-4 text-sm font-light text-secondary-foreground/80">
                <p className="flex items-center gap-3">
                  <MdCloudUpload className="material-symbols-outlined shrink-0 text-[20px] text-cyan-400/90" />
                  Lançamento com infraestrutura de ponta
                </p>
                <p className="flex items-center gap-3">
                  <MdOutlineAutoGraph className="material-symbols-outlined shrink-0 text-[20px] text-cyan-400/90" />
                  Monitoramento de estabilidade 24/7
                </p>
                <p className="flex items-center gap-3">
                  <MdUpdate className="material-symbols-outlined shrink-0 text-[20px] text-cyan-400/90" />
                  Pronto para gerar vendas
                </p>
              </div>
            </div>
          </li>
        </ul>

        <article className="mx-auto px-4 py-5 md:px-2 xl:px-0">
          <div className="relative mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-wide text-foreground md:text-5xl">
              Nossas tecnologias
            </h2>
            <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-secondary-foreground md:text-base">
              Utilizamos a mesma base tecnológica de{" "}
              <span className="font-bold text-popover-foreground">
                gigantes do mercado internacional.
              </span>{" "}
              Para você, isso se traduz em três coisas: velocidade máxima,
              segurança contra invasões e um site que nunca fica obsoleto.
            </p>
          </div>
          <div></div>
        </article>
      </div>
      <div className="relative flex overflow-hidden py-2">
        {[0, 1].map((trackIndex) => (
          <ul
            key={trackIndex}
            aria-hidden={trackIndex === 1}
            className="flex w-max animate-marquee gap-40 whitespace-nowrap pl-40 sm:w-[200%] 2xl:gap-80 2xl:pl-80"
          >
            {[
              { icon: <SiNetflix size={80} />, name: "Netflix" },
              { icon: <SiNike size={80} />, name: "Nike" },
              { icon: <AiOutlineOpenAI size={80} />, name: "OpenAI" },
              { icon: <AiFillTikTok size={80} />, name: "TikTok" },
              { icon: <FaUber size={80} />, name: "Uber" },
              { icon: <FaTwitch size={80} />, name: "Twitch" },
            ].map((item, index) => (
              <li
                key={index}
                className="group flex flex-col items-center gap-2 opacity-30 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <span className="text-white transition-colors duration-300 group-hover:text-amber-400">
                  {item.icon}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-500 transition-colors duration-300 group-hover:text-slate-200">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};
