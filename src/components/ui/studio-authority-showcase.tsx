"use client";

import { EyeOff, ShieldAlert, Zap } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export const StudioAuthorityShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const myObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      myObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) myObserver.unobserve(currentElement);
    };
  }, []);

  const lossCards = [
    {
      title: "O Custo da Invisibilidade",
      eyebrow: "Dado de Mercado",
      stat: "81%",
      description:
        "dos consumidores pesquisam online antes de qualquer compra.",
      example: "Exemplo Real: Nutricionista",
      impact: "Perda de R$ 3.200/mês",
      icon: EyeOff,
    },
    {
      title: "O Custo do Site Amador",
      eyebrow: "Taxa de Rejeição",
      stat: "53%",
      description:
        "abandonam sites que levam mais de 3 segundos para carregar.",
      example: "Exemplo Real: Mecânico",
      impact: "R$ 700 perdidos em cada R$ 1.000 de anúncio",
      icon: Zap,
    },
    {
      title: "A Falta de Autoridade",
      eyebrow: "Potencial de Preço",
      stat: "+50%",
      description:
        "é o prêmio de valor que marcas com presença premium cobram.",
      example: "Impacto Estimado Geral",
      impact: "R$ 2.000 perdidos em lucro líquido",
      icon: ShieldAlert,
    },
  ];

  return (
    <section
      className="m-auto max-w-5xl px-3 pt-16 md:px-10 lg:px-5"
      ref={elementRef}
    >
      <article className="max-w-4xl">
        <span
          className={`mb-6 ${isVisible && "translate-x-0 opacity-100 blur-none"} inline-block -translate-x-full rounded-full border border-red-400/20 bg-red-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-red-300 opacity-0 blur-md transition-all delay-100 duration-1000`}
        >
          Alerta de lucratividade
        </span>
        <h2
          className={`mb-8 ${isVisible && "translate-x-0 opacity-100 blur-none"} -translate-x-full text-3xl font-extrabold leading-tight opacity-0 blur-md transition-all delay-200 duration-1000 md:text-5xl`}
        >
          Você está{" "}
          <span className="text-3xl font-extrabold leading-tight text-destructive md:text-5xl">
            jogando dinheiro fora
          </span>{" "}
          todos os meses por causa da sua presença digital?
        </h2>
        <p
          className={`${isVisible && "translate-x-0 opacity-100 blur-none"} mb-5 -translate-x-full text-xl text-foreground/50 opacity-0 blur-md transition-all delay-300 duration-1000`}
        >
          A invisibilidade digital não é apenas um detalhe, é um ralo silencioso
          no seu faturamento. Veja o custo real estimado para 2026/2027.
        </p>
      </article>

      <ul className="grid w-full gap-8 md:grid-cols-3">
        {lossCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <li
              key={card.title}
              style={{ transitionDelay: `${index * 300}ms` }}
              className={`${isVisible && "translate-x-[1px] opacity-100 blur-none"} relative w-full translate-x-[400%] rounded-3xl border border-card bg-secondary px-7 py-10 opacity-0 shadow-md blur-md transition-all delay-300 duration-1000`}
            >
              <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/30 text-destructive/80">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-xl font-bold">{card.title}</h3>
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-popover-foreground opacity-60">
                    {card.eyebrow}
                  </p>
                  <p className="text-4xl font-black text-foreground">
                    {card.stat}
                  </p>
                  <p className="text-sm text-foreground">{card.description}</p>
                  <div className="mt-6 border-t border-white/10 pt-6">
                    <p className="mb-1 text-xs text-popover-foreground">
                      {card.example}
                    </p>
                    <p className="text-lg font-bold text-destructive">
                      {card.impact}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
