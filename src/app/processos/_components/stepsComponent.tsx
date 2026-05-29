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
import { FaCheckCircle, FaArrowRight, FaDatabase } from "react-icons/fa";
import { RiNextjsFill, RiSupabaseFill } from "react-icons/ri";
import { TbApi } from "react-icons/tb";

export const StepsComponent = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <section className="relative mx-auto max-w-[1200px] px-6 md:px-16">
        <div className="absolute right-0 top-0 -z-10 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[120px]"></div>
        <div className="absolute left-10 top-20 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px]"></div>

        <div className="max-w-3xl pb-12 pt-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md">
            <MdPrecisionManufacturing className='className="material-symbols-outlined animate-pulse" text-[16px] text-amber-400' />{" "}
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Metodologia
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            A Engenharia por Trás <br className="hidden md:block" />
            do{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Sucesso.
            </span>
          </h1>

          <p className="max-w-2xl text-base font-light leading-relaxed text-slate-400 md:text-xl">
            Nosso processo é uma sequência rigorosa de planejamento analítico,
            engenharia de precisão e otimização contínua. Não apenas construímos
            software; arquitetamos vantagens digitais.
          </p>
        </div>
      </section>

      <ul className="relative mx-auto max-w-[1200px] px-6 pb-24 md:px-16">
        <div className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-gradient-to-b from-amber-500/30 via-cyan-500/30 to-transparent md:block"></div>

        <li className="relative mb-24 flex flex-col items-center justify-between md:mb-36 md:flex-row">
          <div className="mb-6 w-full text-left md:mb-0 md:w-[45%] md:pr-12 md:text-right">
            <h2 className="mb-4 text-2xl font-bold tracking-wide text-foreground md:text-3xl">
              Briefing &amp; Análise
            </h2>
            <p className="text-sm font-light leading-relaxed text-secondary-foreground/80 md:text-base">
              Dissecamos seus objetivos de negócio, restrições técnicas e
              posição de mercado. Esta fase entrega um blueprint abrangente,
              garantindo que cada linha de código sirva a um propósito
              estratégico.
            </p>
          </div>

          <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/40"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></span>
          </div>

          <div className="w-full md:w-[45%] md:pl-12">
            <div className="group relative overflow-hidden rounded-xl border border-foreground/[0.06] bg-secondary/80 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-300 hover:border-popover-foreground/30">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-secondary text-amber-400 shadow-inner">
                  <MdOutlineArchitecture className="text-amber-400" size={32} />
                  {/* </span> */}
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  FASE 01
                </h3>
              </div>

              <ul className="space-y-4 text-sm font-light text-secondary-foreground/80">
                <li className="flex items-center gap-3">
                  <FaCheckCircle
                    className="shrink-0 text-amber-400/90"
                    size={16}
                  />
                  Levantamento de Requisitos
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle
                    className="shrink-0 text-amber-400/90"
                    size={16}
                  />
                  Design de Arquitetura de Sistema
                </li>
                <li className="flex items-center gap-3">
                  <FaCheckCircle
                    className="shrink-0 text-amber-400/90"
                    size={16}
                  />
                  Avaliação de Viabilidade
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="relative mb-24 flex flex-col items-center justify-between md:mb-36 md:flex-row-reverse">
          <div className="mb-6 w-full text-left md:mb-0 md:w-[45%] md:pl-12">
            <h2 className="mb-4 text-2xl font-bold tracking-wide text-foreground md:text-3xl">
              Engenharia de UX/UI
            </h2>
            <p className="text-sm font-light leading-relaxed text-secondary-foreground/80 md:text-base">
              O design é tratado como uma disciplina técnica. Criamos interfaces
              computacionalmente eficientes, intuitivamente navegáveis e
              visualmente imponentes, utilizando sistemas de design robustos.
            </p>
          </div>

          <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/40"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></span>
          </div>

          <div className="w-full md:w-[45%] md:pr-12">
            <div className="group relative overflow-hidden rounded-xl border border-foreground/[0.06] bg-secondary/60 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-secondary text-cyan-400 shadow-inner">
                  <MdOutlineDesignServices size={32} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  FASE 02
                </h3>
              </div>

              <ul className="space-y-4 text-sm font-light text-secondary-foreground/80">
                <li className="flex items-center gap-3">
                  <FaArrowRight
                    className="shrink-0 text-cyan-400/90"
                    size={16}
                  />{" "}
                  Wireframing &amp; Prototipagem
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowRight
                    className="shrink-0 text-cyan-400/90"
                    size={16}
                  />{" "}
                  Criação de Design System
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowRight
                    className="shrink-0 text-cyan-400/90"
                    size={16}
                  />{" "}
                  Testes de Usabilidade
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="relative mb-24 flex flex-col items-center justify-between md:mb-36 md:flex-row">
          <div className="mb-6 w-full text-left md:mb-0 md:w-[45%] md:pr-12 md:text-right">
            <h2 className="mb-4 text-2xl font-bold tracking-wide text-foreground md:text-3xl">
              Desenvolvimento Ágil
            </h2>
            <p className="text-sm font-light leading-relaxed text-secondary-foreground/80 md:text-base">
              O código é escrito para escala, segurança e performance.
              Utilizamos sprints de duas semanas, integração contínua e revisões
              rigorosas por pares para manter uma qualidade de código
              excepcional.
            </p>
          </div>

          <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400/40"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.8)]"></span>
          </div>

          <div className="w-full md:w-[45%] md:pl-12">
            <div className="group relative overflow-hidden rounded-xl border border-foreground/[0.06] bg-secondary/60 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-300 hover:border-amber-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-secondary text-amber-400 shadow-inner">
                  <MdOutlineTerminal className="material-symbols-outlined text-[24px]" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  FASE 03
                </h3>
              </div>

              <ul className="space-y-4 text-sm font-light text-secondary-foreground/80">
                <li className="flex items-center gap-3">
                  <MdCode className="material-symbols-outlined shrink-0 text-[20px] text-amber-400/90" />
                  Implementação Front-End
                </li>
                <li className="flex items-center gap-3">
                  <MdDataObject className="material-symbols-outlined shrink-0 text-[20px] text-amber-400/90" />
                  Integração Back-End &amp; API
                </li>
                <li className="flex items-center gap-3">
                  <MdBugReport className="material-symbols-outlined shrink-0 text-[20px] text-amber-400/90" />
                  Testes de QA Automatizados
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="relative flex flex-col items-center justify-between md:flex-row-reverse">
          <div className="mb-6 w-full text-left md:mb-0 md:w-[45%] md:pl-12">
            <h2 className="mb-4 text-2xl font-bold tracking-wide text-foreground md:text-3xl">
              Lançamento &amp; Escala
            </h2>
            <p className="text-sm font-light leading-relaxed text-secondary-foreground/80 md:text-base">
              O deploy é apenas o começo. Gerenciamos uma sequência de
              lançamento impecável, seguida de monitoramento intensivo e ajuste
              de performance para garantir a resiliência da infraestrutura sob
              carga.
            </p>
          </div>

          <div className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/40"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"></span>
          </div>

          <div className="w-full md:w-[45%] md:pr-12">
            <div className="group relative overflow-hidden rounded-xl border border-foreground/[0.06] bg-secondary/60 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-secondary text-cyan-400 shadow-inner">
                  <MdRocketLaunch className="material-symbols-outlined text-[24px]" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  FASE 04
                </h3>
              </div>

              <ul className="space-y-4 text-sm font-light text-secondary-foreground/80">
                <li className="flex items-center gap-3">
                  <MdCloudUpload className="material-symbols-outlined shrink-0 text-[20px] text-cyan-400/90" />
                  Execução de Pipeline CI/CD
                </li>
                <li className="flex items-center gap-3">
                  <MdOutlineAutoGraph className="material-symbols-outlined shrink-0 text-[20px] text-cyan-400/90" />
                  Monitoramento de Performance
                </li>
                <li className="flex items-center gap-3">
                  <MdUpdate className="material-symbols-outlined shrink-0 text-[20px] text-cyan-400/90" />
                  Melhorias Iterativas
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <section className="mx-auto max-w-[1200px] px-6 pb-32 md:px-16">
        <div className="relative mb-16 text-center">
          <div className="absolute left-1/2 top-1/2 -z-10 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
          <h2 className="mb-4 text-3xl font-extrabold tracking-wide text-foreground md:text-4xl">
            A Stack
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-slate-400 md:text-base">
            Empregamos uma stack tecnológica moderna e de alta performance para
            garantir velocidade, segurança e escalabilidade.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="group relative flex h-40 flex-col items-center justify-center rounded-xl border border-white/[0.05] bg-[#111622]/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/20">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <RiNextjsFill className="material-symbols-outlined mb-3 text-[44px] text-slate-400 transition-colors duration-300 group-hover:text-cyan-400" />
            <span className="text-center text-xs font-medium uppercase tracking-widest text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
              React / Next.js
            </span>
          </div>

          <div className="group relative flex h-40 flex-col items-center justify-center rounded-xl border border-white/[0.05] bg-[#111622]/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/20">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-amber-500/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <FaDatabase className="material-symbols-outlined mb-3 text-[44px] text-slate-400 transition-colors duration-300 group-hover:text-amber-400" />
            <span className="text-center text-xs font-medium uppercase tracking-widest text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
              PostgreSQL
            </span>
          </div>

          <div className="group relative flex h-40 flex-col items-center justify-center rounded-xl border border-white/[0.05] bg-[#111622]/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-green-500/20">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-cyan-500/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <RiSupabaseFill className="material-symbols-outlined mb-3 text-[44px] text-slate-400 transition-colors duration-300 group-hover:text-green-400" />
            <span className="text-center text-xs font-medium uppercase tracking-widest text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
              Supabase Infrastructure
            </span>
          </div>

          <div className="group relative flex h-40 flex-col items-center justify-center rounded-xl border border-white/[0.05] bg-[#111622]/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/20">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-amber-500/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <TbApi className="material-symbols-outlined mb-3 text-[44px] text-slate-400 transition-colors duration-300 group-hover:text-amber-400" />
            <span className="text-center text-xs font-medium uppercase tracking-widest text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
              GraphQL / REST
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
