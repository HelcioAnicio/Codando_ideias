"use client";

import { useEffect, useState, useRef } from "react";
import { StudioAuthorityCardItem } from "./studioAuthorityCardItem";
import { EyeOff, ShieldAlert, Zap } from "lucide-react";

export const StudioAuthorityShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observerSection = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    const sectionElement = sectionRef.current;

    if (sectionElement) {
      observerSection.observe(sectionElement);
    }

    return () => {
      observerSection.disconnect();
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
      ref={sectionRef}
    >
      <article className="max-w-4xl">
        <span
          className={`mb-6 ${isVisible ? "translate-x-0 opacity-100 blur-none" : "-translate-x-full opacity-0 blur-md"} inline-block rounded-full border border-red-400/20 bg-red-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-red-300 transition-all delay-100 duration-700`}
        >
          Alerta de lucratividade
        </span>
        <h2
          className={`mb-8 ${isVisible ? "translate-x-0 opacity-100 blur-none" : "-translate-x-full opacity-0 blur-md"} text-3xl font-extrabold leading-tight transition-all delay-200 duration-700 md:text-5xl`}
        >
          Você está{" "}
          <span className="text-3xl font-extrabold leading-tight text-destructive md:text-5xl">
            jogando dinheiro fora
          </span>{" "}
          todos os meses por causa da sua presença digital?
        </h2>
        <p
          className={`${isVisible ? "translate-x-0 opacity-100 blur-none" : "-translate-x-full opacity-0 blur-md"} mb-5 text-xl text-foreground/50 transition-all delay-300 duration-700`}
        >
          A invisibilidade digital não é apenas um detalhe, é um ralo silencioso
          no seu faturamento. Veja o custo real estimado para 2026/2027.
        </p>
      </article>

      <ul className="grid w-full gap-8 md:grid-cols-3">
        {lossCards.map((card, index) => (
          <StudioAuthorityCardItem
            key={card.title}
            card={card}
            delay={index * 150}
          />
        ))}
      </ul>
    </section>
  );
};
