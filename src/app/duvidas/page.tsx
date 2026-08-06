import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { Steps } from "@/components/ui/steps";
import { StudioFaq } from "@/components/ui/studio-faq";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Dúvidas",

  description:
    "Entenda como construímos o seu site passo a passo e tire as dúvidas mais comuns sobre prazo, preço, domínio, hospedagem e manutenção.",

  alternates: {
    canonical: "https://codandoideias.com.br/duvidas",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://codandoideias.com.br/duvidas",
    siteName: "Codando Ideias",
    title: "Dúvidas | Codando Ideias",
    description:
      "Entenda como construímos o seu site passo a passo e tire as dúvidas mais comuns sobre prazo, preço, domínio, hospedagem e manutenção.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Dúvidas | Codando Ideias",
    description:
      "Entenda como construímos o seu site passo a passo e tire as dúvidas mais comuns sobre prazo, preço, domínio, hospedagem e manutenção.",
  },
};

export default function DuvidasPage() {
  return (
    <>
      <Header />
      <main className="relative flex w-full flex-col overflow-hidden pt-32 sm:pt-40">
        <div className="mx-auto mb-4 w-full max-w-6xl px-5 sm:px-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Dúvidas
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-[1.1] md:text-5xl">
            Como funciona e o que você precisa saber
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
            O passo a passo de como o seu projeto é construído, e respostas
            para as perguntas mais comuns antes de fechar negócio.
          </p>
        </div>
        <Steps />
        <StudioFaq />
      </main>
      <Footer />
    </>
  );
}
