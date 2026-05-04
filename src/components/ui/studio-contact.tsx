"use client";
import { Github, Globe, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Logo3 from "../../../public/logo3.svg";
import Logo2 from "../../../public/logo2.svg";
import { useTheme } from "next-themes";

const socials = [
  { href: "#", label: "WhatsApp", icon: MessageCircle },
  { href: "#", label: "GitHub", icon: Github },
  { href: "#", label: "Website", icon: Globe },
];

export const StudioContact = () => {
  const { theme } = useTheme();

  return (
    <section id="contato" className="w-full px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em]">
            Contato
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Vamos construir algo incrível juntos?
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-secondary-foreground/80">
            Preencha o formulário ou fale com a gente pelos canais diretos.
            Respondemos em até 24h.
          </p>

          <div className="mt-10 space-y-5 text-secondary-foreground/80">
            {/* <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-amber-300" />
              <span>contato@codandoideias.com</span>
            </div> */}
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-amber-300" />
              <span>+55 (31) 999197-3835</span>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="studio-panel inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-secondary-foreground/80 transition hover:border-popover-foreground hover:text-popover-foreground"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
          <div className="mt-10 flex items-center gap-2">
            {theme === "light" ? (
              <Image className="w-40 lg:w-52" src={Logo3} alt="Logo" />
            ) : (
              <Image className="w-40 lg:w-52" src={Logo2} alt="Logo" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
