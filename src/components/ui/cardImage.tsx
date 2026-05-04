"use client";

import { useRef, useState, useEffect, type CSSProperties } from "react";
import { ButtonGeral } from "./buttonGeral";

export const CardImage = () => {
  const meteors = [
    { top: "14%", delay: "0s", duration: "14s", scale: 1.5, width: "8rem" },
    { top: "28%", delay: "-5s", duration: "18s", scale: 1.8, width: "10rem" },
    { top: "41%", delay: "-11s", duration: "16s", scale: 1.3, width: "7rem" },
    { top: "57%", delay: "-8s", duration: "20s", scale: 1.6, width: "9rem" },
    { top: "72%", delay: "-15s", duration: "17s", scale: 1.3, width: "6.5rem" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const myObserver = new IntersectionObserver(
      ([entry]) => {
        console.log(isVisible);
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      myObserver.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) myObserver.unobserve(elementRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden border-none bg-background text-center"
      ref={elementRef}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {meteors.map((meteor, index) => (
          <div
            key={index}
            className="studio-meteor absolute h-px rounded-full bg-gradient-to-r from-transparent via-popover-foreground to-transparent blur-[0.5px]"
            style={
              {
                "--meteor-delay": meteor.delay,
                "--meteor-duration": meteor.duration,
                "--meteor-scale": meteor.scale,
                "--meteor-top": meteor.top,
                width: meteor.width,
              } as CSSProperties
            }
          >
            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-popover-foreground shadow-[0_0_12px_hsl(var(--popover-foreground))]" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 aspect-square w-[130%] max-w-[1400px] translate-y-[75%] rounded-full min-[400px]:translate-y-[55%] sm:translate-y-[60%] lg:translate-y-[82%]">
        <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_#828B98_0%,_transparent_90%)] blur-xl" />
      </div>
      <div className="absolute bottom-0 aspect-square w-[120%] max-w-[1400px] translate-y-[80%] min-[400px]:translate-y-[60%] sm:translate-y-[65%] lg:translate-y-[85%]">
        <div className="absolute h-full w-full rounded-full bg-background shadow-[0_0_20px] shadow-popover-foreground" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 md:gap-16">
        <h1
          className={` ${isVisible && "translate-y-0 opacity-100 blur-none"} max-w-5xl -translate-y-full text-3xl font-bold text-foreground opacity-0 blur-md transition-all delay-300 duration-1000 min-[400px]:text-4xl md:text-6xl md:leading-[1.15]`}
        >
          Sites lentos custam fortunas. Engenharia de performance{" "}
          <br className="hidden md:block" />
          gera faturamento.
        </h1>
        <p
          className={`${isVisible && "opacity-100 blur-none"} max-w-2xl text-base font-light leading-relaxed text-foreground opacity-0 blur-md transition-all delay-300 duration-1000 min-[400px]:text-lg sm:text-xl`}
        >
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
        <div
          className={`${isVisible && "translate-y-[1px] opacity-100 blur-none"} flex translate-y-full flex-wrap justify-center gap-4 opacity-0 blur-md transition-all delay-300 duration-1000`}
        >
          <ButtonGeral
            text={"Solicitar orçamento"}
            link={
              "https://wa.me/5531991973835?text=Olá+gostaria+sobre+o+desenvolvimento+de+sites/sistemas"
            }
          />
          <ButtonGeral
            text={"Ver projetos"}
            classes="!bg-secondary !bg-none text-foreground border border-card"
            link={""}
          />
        </div>
      </div>
    </section>
  );
};
