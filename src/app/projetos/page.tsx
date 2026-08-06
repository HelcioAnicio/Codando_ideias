import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { ProjectsEditorial } from "@/components/ui/projectsEditorial";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Projetos",

  description:
    "Conheça os sites, landing pages e sistemas que já desenvolvemos para empresas e autônomos em todo o Brasil.",

  alternates: {
    canonical: "https://codandoideias.com.br/projetos",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://codandoideias.com.br/projetos",
    siteName: "Codando Ideias",
    title: "Projetos | Codando Ideias",
    description:
      "Conheça os sites, landing pages e sistemas que já desenvolvemos para empresas e autônomos em todo o Brasil.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Projetos | Codando Ideias",
    description:
      "Conheça os sites, landing pages e sistemas que já desenvolvemos para empresas e autônomos em todo o Brasil.",
  },
};

export default function ProjetosPage() {
  return (
    <>
      <Header />
      <main className="relative flex w-full flex-col overflow-hidden pb-24 pt-32 sm:pt-40">
        <div className="mx-auto mb-4 w-full max-w-6xl px-5 sm:px-7">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Portfólio
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-[1.1] md:text-5xl">
            Projetos que já colocamos no ar
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-secondary-foreground/80 md:text-lg">
            Do zero ao ar em produção: sites institucionais, landing pages e
            sistemas para negócios de todos os tamanhos, em todo o Brasil.
          </p>
        </div>
        <ProjectsEditorial />
      </main>
      <Footer />
    </>
  );
}
