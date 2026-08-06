import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/ui/header";
import { Services } from "@/components/ui/services";
import { TechMarquee } from "@/components/ui/techMarquee";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Serviços",

  description:
    "Landing pages, sites institucionais, e-commerce, sistemas sob medida e avaliação/remodelação de sites já existentes. Conheça todos os nossos serviços.",

  alternates: {
    canonical: "https://codandoideias.com.br/servicos",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://codandoideias.com.br/servicos",
    siteName: "Codando Ideias",
    title: "Serviços | Codando Ideias",
    description:
      "Landing pages, sites institucionais, e-commerce, sistemas sob medida e avaliação/remodelação de sites já existentes.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Serviços | Codando Ideias",
    description:
      "Landing pages, sites institucionais, e-commerce, sistemas sob medida e avaliação/remodelação de sites já existentes.",
  },
};

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main className="relative flex w-full flex-col gap-16 overflow-hidden pt-32 sm:pt-40">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Serviços
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-[1.1] md:text-5xl">
            Uma solução sob medida para cada objetivo
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
            Desde o primeiro site da sua empresa até a remodelação completa de
            um projeto que já existe — veja o que está incluído em cada
            serviço.
          </p>
        </div>
        <Services />
        <TechMarquee />
        <div className="mx-auto w-full max-w-6xl px-5 pb-4 sm:px-7">
          <Link
            href="/duvidas"
            className="group inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-popover-foreground"
          >
            Como é o nosso processo e dúvidas frequentes
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
