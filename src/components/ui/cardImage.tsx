"use client";

import { useRef, useState, useEffect } from "react";
import { ButtonGeral } from "./buttonGeral";
import Image from "next/image";
import { IoMdTrendingUp } from "react-icons/io";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Sparkles } from "lucide-react";

export const CardImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  // Novo estado para controlar se o Observer já rodou a primeira vez
  const [isInitialized, setIsInitialized] = useState(false);
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

  useEffect(() => {
    const myObserver = new IntersectionObserver(
      ([entry]) => {
        setButtonVisible(entry.isIntersecting);
        setIsInitialized(true);
      },
      { threshold: 0.2 },
    );

    const currentElement = elementRef.current;
    if (currentElement) myObserver.observe(currentElement);

    return () => {
      if (currentElement) myObserver.unobserve(currentElement);
    };
  }, []);

  return (
    <section
      id="home"
      aria-label="Hero — Sua empresa merece ser encontrada"
      className="relative flex h-dvh max-h-[1100px] min-h-[600px] w-full items-center justify-center bg-background pt-16 sm:h-[calc(100dvh-160px)] sm:pt-20 md:h-[calc(100dvh-190px)] xl:h-[calc(100dvh-200px)]"
      ref={elementRef}
    >
      <div className="relative mx-auto flex h-[90%] w-full max-w-6xl px-4 min-[400px]:h-5/6 min-[530px]:h-full sm:items-center">
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background from-[20%] via-background/70 via-[40%] to-transparent to-[60%] sm:bg-gradient-to-r sm:from-[40%] sm:via-[58%] sm:to-[80%]"
          aria-hidden="true"
        />

        <div className="relative z-20 flex h-2/5 min-h-max w-full flex-col justify-center gap-5 overflow-hidden sm:w-1/2 sm:justify-center sm:gap-8 md:gap-10">
          <h1
            className={`max-w-md text-4xl font-extrabold leading-[1.1] text-foreground transition-all delay-150 duration-500 min-[400px]:text-5xl sm:mt-0 lg:text-6xl xl:max-w-lg xl:text-7xl ${
              isVisible
                ? "translate-y-0 blur-none"
                : "-translate-y-full blur-sm"
            } `}
          >
            Sua empresa merece ser encontrada.
          </h1>

          <p
            className={`max-w-sm text-sm font-light leading-relaxed text-foreground/80 transition-all delay-200 duration-500 min-[400px]:text-base sm:text-lg md:text-xl ${
              isVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
            } `}
          >
            Criamos sites estratégicos, Landing Pages sem template pronto, em
            código 100% puro, com alta performance. Um verdadeiro site que
            converte!
          </p>

          <div
            className={`relative hidden flex-col gap-3 transition-all delay-300 duration-500 sm:flex ${
              isVisible
                ? "translate-x-0 blur-none"
                : "-translate-x-full blur-sm"
            } `}
          >
            <Link
              href="/simulacao"
              className="flex w-max items-center gap-2 rounded-xl border border-yellow-500/40 bg-yellow-500/10 px-5 py-3 text-sm font-bold text-yellow-400 transition-all duration-200 hover:bg-yellow-500/20 hover:scale-[1.02]"
            >
              <Sparkles size={15} />
              Simule seu site gratuitamente
            </Link>
            <ButtonGeral
              text="Fale comigo agora"
              link="https://wa.me/5531991973835?text=Olá,+quero+um+site+que+me+permita+ser+encontrado!"
              classes="max-w-60 min-[400px]:max-w-sm"
            />
          </div>
        </div>

        <div className="absolute bottom-[10%] right-0 h-[60%] w-2/3 sm:right-4 sm:top-0 sm:h-full sm:w-1/2">
          <div className="relative h-full w-full" aria-hidden="true">
            <Image
              src="/profile.jpg"
              alt="Foto de perfil do profissional"
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 50vw, 512px"
              className="rounded-xl object-cover object-bottom shadow-lg lg:object-contain lg:object-center"
            />
            <div
              className={`absolute -left-24 bottom-[8%] z-40 max-w-[250px] rounded-2xl border border-white/10 bg-primary/50 p-4 text-xs shadow-sm backdrop-blur-xl transition-all delay-300 duration-500 hover:-translate-y-2 sm:-bottom-10 sm:-left-8 sm:max-w-sm sm:p-6 md:-left-10 2xl:bottom-0 ${
                isVisible
                  ? "translate-x-0 opacity-100 blur-none"
                  : "translate-x-full opacity-0 blur-sm"
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
          className={`absolute bottom-[3%] z-30 flex w-full max-w-xs flex-col gap-2 transition-all delay-300 duration-500 sm:hidden ${
            isVisible
              ? "translate-y-0 opacity-100 blur-none"
              : "translate-y-full opacity-0 blur-sm"
          } `}
        >
          <Link
            href="/simulacao"
            className="flex items-center justify-center gap-2 rounded-xl border border-yellow-500/40 bg-yellow-500/10 px-5 py-3 text-sm font-bold text-yellow-400"
          >
            <Sparkles size={14} />
            Simule seu site gratuitamente
          </Link>
          <ButtonGeral
            text="Fale comigo agora"
            link="https://wa.me/5531991973835?text=Olá,+quero+um+site+que+me+permita+ser+encontrado!"
            classes="max-w-60 min-[400px]:max-w-sm"
          />
        </div>
        {/* {!buttonVisible && ( */}
        <Link
          href="https://wa.me/5531991973835?text=Olá,+quero+falar+com+um+especialista!"
          className={`fixed bottom-4 right-2 z-50 flex w-max items-center gap-1 rounded-full bg-green-800 bg-gradient-to-br from-green-500 to-green-800 p-4 shadow-[0_0_20px] shadow-green-300 hover:scale-105 2xl:right-[15%] ${isInitialized ? "transition-all duration-500 ease-in-out" : "transition-none"} ${
            isInitialized && !buttonVisible
              ? "pointer-events-auto translate-x-0 opacity-100 blur-none"
              : "pointer-events-none translate-x-40 opacity-0 blur-sm"
          } `}
        >
          <FaWhatsapp className="size-6 min-[400px]:size-9" />
        </Link>
      </div>
    </section>
  );
};
