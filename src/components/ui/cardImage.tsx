"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoMdTrendingUp } from "react-icons/io";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { ButtonGeral } from "./buttonGeral";

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
      className="relative flex h-[calc(100dvh-65px)] max-h-[1200px] min-h-[600px] w-full items-center justify-center bg-background pt-16 sm:pt-20"
      ref={elementRef}
    >
      <div className="relative mx-auto flex h-[90%] w-full max-w-6xl px-4 min-[400px]:h-5/6 min-[530px]:h-full sm:items-center">
        <div
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background from-[20%] via-background/70 via-[40%] to-transparent to-[60%] sm:bg-gradient-to-r sm:from-[40%] sm:via-[58%] sm:to-[80%]"
          aria-hidden="true"
        />

        <div className="relative z-50 flex h-2/5 min-h-max w-full flex-col justify-center gap-5 overflow-hidden sm:w-7/12 sm:justify-center sm:gap-8 md:gap-10">
          <h1
            title="Hero — Sua empresa merece ser encontrada"
            className={`max-w-md text-4xl font-extrabold leading-[1.1] text-foreground transition-all delay-150 duration-500 min-[400px]:text-[40px] sm:mt-0 sm:text-5xl xl:max-w-lg xl:text-6xl xl:leading-[0.9] 2xl:text-[68px] ${
              isVisible
                ? "translate-y-0 blur-none"
                : "-translate-y-full blur-sm"
            } `}
          >
            Criamos sites, customizados e profissionais.
          </h1>

          <p
            className={`XL:text-xl w-4/6 max-w-sm text-sm font-light leading-relaxed text-foreground/80 transition-all delay-200 duration-500 min-[400px]:text-base sm:text-lg ${
              isVisible ? "opacity-100 blur-none" : "opacity-0 blur-sm"
            } `}
          >
            Desenvolvemos sites personalizados, landing pages sem template
            pronto, com alta performance e conversão. <br /> A sua empresa
            merece ser encontrada na internet.
          </p>

          <div
            className={`relative hidden flex-col gap-3 transition-all delay-300 duration-500 sm:flex ${
              isVisible
                ? "translate-x-0 blur-none"
                : "-translate-x-full blur-sm"
            } `}
          >
            <ButtonGeral
              text="Solicitar orçamento"
              link="https://wa.me/5531991973835?text=Olá,+quero+solicitar+um+orçamento!"
              icon={<Sparkles size={15} aria-hidden="true" />}
              size="sm"
              liftOnHover={false}
              classes="w-max px-10 py-3 text-sm min-[500px]:px-14"
            />
          </div>
        </div>

        <div className="absolute bottom-[10%] right-0 h-[60%] w-2/3 sm:right-4 sm:top-0 sm:h-full sm:w-1/2 md:flex md:items-center">
          <div className="relative h-full max-h-[800px] w-full lg:h-[85%]">
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
          <ButtonGeral
            text="Solicitar orçamento"
            link="https://wa.me/5531991973835?text=Olá,+quero+solicitar+um+orçamento!"
            icon={<Sparkles size={14} aria-hidden="true" />}
            size="sm"
            liftOnHover={false}
            classes="w-max px-5 py-3 text-sm min-[500px]:px-10"
          />
        </div>
        {/* {!buttonVisible && ( */}
        <Link
          href="https://wa.me/5531991973835?text=Olá,+quero+falar+com+um+especialista!"
          aria-label="Falar com um especialista no WhatsApp"
          aria-hidden={!(isInitialized && !buttonVisible)}
          tabIndex={isInitialized && !buttonVisible ? 0 : -1}
          className={`fixed bottom-4 right-2 z-50 flex w-max items-center gap-1 rounded-full bg-green-800 bg-gradient-to-br from-green-500 to-green-800 p-4 shadow-[0_0_20px] shadow-green-300 hover:scale-105 2xl:right-[15%] ${isInitialized ? "transition-all duration-500 ease-in-out" : "transition-none"} ${
            isInitialized && !buttonVisible
              ? "pointer-events-auto translate-x-0 opacity-100 blur-none"
              : "pointer-events-none translate-x-40 opacity-0 blur-sm"
          } `}
        >
          <FaWhatsapp
            aria-hidden="true"
            className="size-6 min-[400px]:size-9"
          />
        </Link>
      </div>
    </section>
  );
};
