"use client";

import { useState } from "react";
import { Search, LayoutTemplate, Megaphone, LineChart, RefreshCw, type LucideIcon } from "lucide-react";

type Step = {
  number: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  details: string[];
};

const steps: Step[] = [
  {
    number: "01",
    title: "Diagnóstico",
    icon: Search,
    summary: "Entendemos seu negócio, seu cliente ideal e quanto vale cada venda antes de gastar um real em anúncio.",
    details: [
      "Análise do seu mercado e concorrência direta",
      "Definição do ticket médio e da meta de custo por cliente",
      "Mapeamento de onde estão seus clientes hoje (Google, Instagram)",
    ],
  },
  {
    number: "02",
    title: "Estrutura e rastreamento",
    icon: LayoutTemplate,
    summary: "Construímos a landing page rápida da campanha e configuramos o rastreamento de cada clique e cada lead.",
    details: [
      "Landing page custom, rápida, sem template genérico",
      "Pixel do Meta e tag do Google configurados corretamente",
      "Formulário e WhatsApp conectados ao seu painel de leads",
    ],
  },
  {
    number: "03",
    title: "Campanha (Google + Meta)",
    icon: Megaphone,
    summary: "Colocamos sua campanha no ar nas duas maiores redes de anúncio, com a verba sob seu controle total.",
    details: [
      "Criação de anúncios no Google Ads e Meta Ads",
      "Você paga a plataforma direto — verba nunca passa pela gente",
      "Testes de públicos e criativos nas primeiras semanas",
    ],
  },
  {
    number: "04",
    title: "Relatório",
    icon: LineChart,
    summary: "Você acompanha custo por lead, custo por cliente e retorno em um relatório simples de ler.",
    details: [
      "Relatório quinzenal nos primeiros 90 dias",
      "Painel próprio com cada lead que chegou",
      "Números reais, sem enrolação de métrica de vaidade",
    ],
  },
  {
    number: "05",
    title: "Otimização contínua",
    icon: RefreshCw,
    summary: "Ajustamos campanha, criativos e página toda semana com base no que realmente gera cliente.",
    details: [
      "Cortamos o que não performa, escalamos o que funciona",
      "Ajustes de página para melhorar a taxa de conversão",
      "Evolução mês a mês, não um projeto que para no dia 1",
    ],
  },
];

export const TrafegoComoFunciona = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="como-funciona" aria-label="Como funciona a gestão de tráfego" className="w-full px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Processo visível, sem caixa-preta
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">Como funciona</h2>
          <p className="mt-4 text-lg font-light leading-relaxed text-slate-400">
            Cinco etapas claras, do diagnóstico à otimização contínua. Você
            sabe exatamente o que estamos fazendo em cada uma delas.
          </p>
        </div>

        <ul className="process-accordion gap-3 md:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = active === index;
            return (
              <li key={step.number} className="flex">
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  aria-expanded={isActive}
                  aria-label={`Etapa ${step.number}: ${step.title}`}
                  className={[
                    "process-panel w-full cursor-pointer appearance-none rounded-2xl border border-white/[0.06] bg-secondary/60 p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/50",
                    isActive ? "active" : "",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="step-number-bg pointer-events-none absolute -right-2 -top-6 text-8xl font-black text-white opacity-[0.04] md:text-9xl"
                  >
                    {step.number}
                  </span>

                  <span className="rotated-title flex h-full items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-400 md:justify-center">
                    <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>{step.number} — {step.title}</span>
                  </span>

                  <div className="panel-content absolute inset-0 flex flex-col justify-center gap-4 p-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-secondary text-amber-400">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {step.number} — {step.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">{step.summary}</p>
                    <ul className="space-y-2 text-sm text-slate-400">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
