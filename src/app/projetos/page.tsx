import type { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { ProjectsEditorial } from "@/components/ui/projectsEditorial";
import { Footer } from "@/components/ui/footer";
import { ButtonGeral } from "@/components/ui/buttonGeral";
import { breadcrumbJsonLd } from "@/lib/breadcrumb";

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", url: "https://codandoideias.com.br" },
  { name: "Projetos", url: "https://codandoideias.com.br/projetos" },
]);

export const metadata: Metadata = {
  title: "Portfólio de Sites e Sistemas",

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
    title: "Portfólio de Sites e Sistemas | Codando Ideias",
    description:
      "Conheça os sites, landing pages e sistemas que já desenvolvemos para empresas e autônomos em todo o Brasil.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfólio de Sites e Sistemas | Codando Ideias",
    description:
      "Conheça os sites, landing pages e sistemas que já desenvolvemos para empresas e autônomos em todo o Brasil.",
  },
};

export default function ProjetosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
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

        <div className="mx-auto mt-8 w-full max-w-6xl px-5 sm:px-7">
          <div className="flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-10">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Gostou do que viu?
              </h2>
              <p className="mt-2 max-w-xl text-base text-secondary-foreground/80">
                Vamos criar o próximo case de sucesso — o seu.
              </p>
            </div>
            <ButtonGeral
              text="Quero um site assim"
              classes="shrink-0"
              link="https://wa.me/5531991973835?text=Olá,+vi+os+projetos+de+vocês+e+quero+um+site+assim!"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
