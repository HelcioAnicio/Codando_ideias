"use client";

import { useRef, useState, useEffect } from "react";
import { ButtonGeral } from "./buttonGeral";
import Image from "next/image";
import { IoMdTrendingUp } from "react-icons/io";

export const CardImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const myObserver = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      myObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) myObserver.unobserve(currentElement);
    };
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero — Sua empresa merece ser encontrada"
      className="relative flex h-dvh w-full items-center justify-center bg-background pt-16 sm:h-[calc(100dvh-160px)] sm:pt-20 md:h-[calc(100dvh-190px)] lg:h-screen xl:h-[calc(100dvh-200px)]"
      ref={elementRef}
    >
      {/* ── Container principal limitado a 1024px ── */}
      <div className="relative mx-auto flex h-[90%] w-full max-w-5xl px-4 min-[400px]:h-5/6 min-[530px]:h-full sm:items-center">
        {/* ── Gradiente sobre a imagem ── */}
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background from-[20%] via-background/70 via-[40%] to-transparent to-[60%] sm:bg-gradient-to-r sm:from-[40%] sm:via-[58%] sm:to-[80%]"
          aria-hidden="true"
        />

        {/* ── Coluna de texto ── */}
        <div className="relative z-20 flex h-2/5 w-full flex-col justify-center gap-5 sm:w-1/2 sm:justify-center sm:gap-8 md:gap-10">
          <h1
            className={`max-w-md text-4xl font-extrabold leading-[1.1] text-foreground transition-all delay-150 duration-500 min-[400px]:text-5xl sm:mt-0 lg:text-6xl xl:max-w-lg xl:text-7xl ${
              isVisible ? "translate-y-0 blur-none" : "-translate-y-6 blur-sm"
            } `}
          >
            Sua empresa merece ser encontrada.
          </h1>

          <p
            className={`max-w-sm text-sm font-light leading-relaxed text-foreground/80 transition-all delay-200 duration-500 min-[400px]:text-base sm:text-lg md:text-xl ${
              isVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
            } `}
          >
            Criamos sites estratégicos, landing pages e presença digital
            profissional para transformar visitantes em clientes.
          </p>

          {/* CTA desktop */}
          <div
            className={`hidden transition-all delay-300 duration-500 sm:block ${
              isVisible ? "translate-y-0 blur-none" : "translate-y-4 blur-sm"
            } `}
          >
            <ButtonGeral
              text="Quero ser encontrado"
              link="https://wa.me/5531991973835?text=Olá,+quero+um+site+que+me+permita+ser+encontrado!"
            />
          </div>
        </div>

        {/* ── Coluna da imagem + card (dentro do max-w-5xl) ── */}
        {/* ── Coluna da imagem + card (dentro do max-w-5xl) ── */}
        <div className="absolute bottom-[10%] right-0 h-[55%] w-2/3 sm:right-4 sm:top-0 sm:h-full sm:w-1/2">
          {/* Imagem */}
          <div className="relative h-full w-full" aria-hidden="true">
            <Image
              src="/profile.jpg"
              alt="Foto de perfil do profissional"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 50vw, 512px"
              className="min-h-max object-cover object-top"
            />
            {/* <div
              className="absolute inset-0 right-0 top-0 z-10 h-full w-full"
              style={{
                background: `radial-gradient(
        ellipse 85% 85% at 50% 40%,
        transparent 40%,
        rgba(var(--background-rgb), 0.4) 65%,
        rgba(var(--background-rgb), 0.85) 80%,
        var(--background) 100%
      )`,
              }}
            ></div> */}
            <div
              className={`delay-[400ms] absolute -left-24 bottom-[8%] z-30 max-w-[250px] rounded-2xl border border-white/10 bg-primary/50 p-4 text-xs shadow-sm backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 sm:-bottom-10 sm:-left-8 sm:max-w-sm sm:p-6 md:-left-10 2xl:bottom-0 ${
                isVisible
                  ? "translate-y-0 opacity-100 blur-none"
                  : "translate-y-4 opacity-0 blur-sm"
              }`}
              aria-label="Card Autoridade Digital"
            >
              <div className="mb-2 flex items-center gap-3 sm:mb-3">
                <div className="rounded-lg bg-secondary/20 p-1.5 sm:p-2">
                  <IoMdTrendingUp
                    className="text-popover-foreground"
                    aria-hidden="true"
                    size={18}
                  />
                </div>
                <span className="text-xs font-bold sm:text-sm">
                  Autoridade Digital
                </span>
              </div>
              <p className="text-xs leading-relaxed sm:text-sm">
                Elevamos o posicionamento da sua marca com tecnologia de ponta e
                design focado em conversão.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`/2 absolute bottom-[6%] z-30 w-full max-w-xs transition-all delay-300 duration-500 sm:hidden ${
            isVisible ? "translate-y-0 blur-none" : "translate-y-4 blur-sm"
          } `}
        >
          <ButtonGeral
            text="Quero ser encontrado"
            link="https://wa.me/5531991973835?text=Olá,+quero+ser+encontrado!"
            classes="py-4 "
          />
        </div>
      </div>
    </section>
  );
};
