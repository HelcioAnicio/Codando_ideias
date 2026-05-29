"use client";

// import { Github, Globe, MessageCircle } from "lucide-react";
import {  Phone } from "lucide-react";
import Image from "next/image";
import Logo3 from "../../../public/logo3.svg";
import Logo2 from "../../../public/logo2.svg";
import { useTheme } from "next-themes";
import { ButtonGeral } from './buttonGeral';

// const socials = [
//   { href: "#", label: "WhatsApp", icon: MessageCircle },
//   { href: "#", label: "GitHub", icon: Github },
//   { href: "#", label: "Website", icon: Globe },
// ];

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="m-auto w-full space-y-5 py-20" id="footer">
      <section id="contato" className="w-full px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-16 ">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">
              Contato
            </p>
            <h2 className="text-3xl font-bold md:text-5xl w-3/4">
              Leve a sua presença no mercado para o nível profissional!
            </h2>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-secondary-foreground/80">
              Se você quer melhorar seu site atual ou começar um projeto do zero com máxima performance, entre em contato. Respondemos em até 24h.
            </p>

            <div className="mt-10 flex gap-4">
               <ButtonGeral
                text={"Quero um site que converte"}
                link={
                  "https://wa.me/5531991973835?text=Olá+,+quero+um+site+que+converte!"
                }
              />
            </div>
            <div className="mt-10 flex items-center gap-2">
              {theme === "light" ? (
                <Image className="w-52 lg:w-60" src={Logo3} alt="Logo" />
              ) : (
                <Image className="w-40 lg:w-52" src={Logo2} alt="Logo" />
              )}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
