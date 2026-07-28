import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Clientes Perdidos | Diagnóstico de Visibilidade Grátis",

  description:
    "Descubra grátis quantas pessoas buscam seu negócio no Google por mês e quanto você pode estar deixando de faturar por não ter um site. Diagnóstico de visibilidade em 1 minuto, sem compromisso.",

  keywords: [
    "calculadora de clientes perdidos",
    "diagnóstico de visibilidade online grátis",
    "quanto estou perdendo por não ter site",
    "quantas pessoas buscam meu negócio no Google",
    "calculadora de potencial de clientes",
    "receita perdida sem site",
    "teste de visibilidade no Google",
    "quanto vale um site para o meu negócio",
    "simulador de clientes pelo Google",
    "análise de visibilidade digital grátis",
  ],

  alternates: {
    canonical: "https://codandoideias.com.br/calculadora",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://codandoideias.com.br/calculadora",
    siteName: "Codando Ideias",
    title: "Calculadora de Clientes Perdidos | Diagnóstico de Visibilidade Grátis",
    description:
      "Descubra grátis quantas pessoas buscam seu negócio no Google por mês e quanto você pode estar deixando de faturar por não ter um site.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Clientes Perdidos | Diagnóstico de Visibilidade Grátis",
    description:
      "Descubra grátis quanto você pode estar deixando de faturar por não ter um site otimizado para o Google.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Calculadora de Clientes Perdidos — Codando Ideias",
  url: "https://codandoideias.com.br/calculadora",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Ferramenta gratuita que estima quantas pessoas buscam um negócio no Google por mês, por segmento e estado, e quanta receita pode estar sendo perdida por falta de um site.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "BRL",
  },
  provider: {
    "@type": "Organization",
    name: "Codando Ideias",
    url: "https://codandoideias.com.br",
  },
};

export default function CalculadoraLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
