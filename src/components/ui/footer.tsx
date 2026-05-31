"use client";

import Image from "next/image";
import Logo2 from "../../../public/logo2.svg";
import { ButtonGeral } from "./buttonGeral";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="m-auto w-full space-y-5 bg-primary/20 py-20" id="footer">
      <section id="contato" className="w-full px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-16">
          <ul className="flex flex-col items-start gap-2">
            <li>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">
                Contato
              </p>
            </li>
            <li>
              <h2 className="w-3/4 text-3xl font-bold md:text-5xl">
                Leve a sua presença no mercado para o nível profissional!
              </h2>
            </li>
            <li>
              <p className="mt-6 max-w-2xl text-xl leading-8 text-secondary-foreground/80">
                Se você quer melhorar seu site atual ou começar um projeto do
                zero com máxima performance, entre em contato. Respondemos em
                até 24h.
              </p>
            </li>
            <li>
              <div className="mt-10 flex gap-4">
                <ButtonGeral
                  text={"Quero um site que converte"}
                  link={
                    "https://wa.me/5531991973835?text=Olá,+quero+ser+encontrado!"
                  }
                />
              </div>
            </li>
            <li className="mt-10 flex flex-wrap items-center gap-4">
              <Image className="w-40 lg:w-52" src={Logo2} alt="Logo" />

              <Link
                href="https://www.instagram.com/dev.helcioanicio"
                target="_blank"
                className="relative z-10 flex items-center gap-1 underline decoration-popover-foreground underline-offset-4 transition-transform duration-200 hover:-translate-y-2 hover:scale-105"
              >
                <FaInstagram className="rounded-lg bg-gradient-to-tr from-[#F59618] via-[#F7085C] to-[#E11CAE] p-1 text-3xl text-foreground" />
                @dev.helcioanicio
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};
