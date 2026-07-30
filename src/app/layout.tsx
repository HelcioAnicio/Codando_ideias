import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist_Mono, Limelight, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { MicrosoftClarity } from "@/lib/microsoftClarity";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});

const limelight = Limelight({
  variable: "--font-limelight",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codandoideias.com.br"),

  title: {
    default: "Codando Ideias | Sites e Sistemas para Empresas",
    template: "%s | Codando Ideias",
  },

  icons: {
    icon: "/favicon.ico",
  },

  description:
    "Criamos sites profissionais, landing pages e sistemas web para empresas e autônomos em todo o Brasil. Mais visibilidade no Google, mais autoridade, mais clientes.",

  keywords: [
    // Serviço principal
    "criação de sites",
    "criação de sites profissionais",
    "desenvolvimento de sites",
    "desenvolvimento web",
    "agência de sites",
    "empresa de criação de sites",
    "programador freelancer",
    "desenvolvedor freelancer",
    "landing page profissional",
    "criação de landing page",
    "sistema web sob medida",
    "sistema web para empresas",
    "loja virtual simples",
    "site institucional",
    "manutenção de site",

    // Intenção / dor do cliente
    "site para pequenas empresas",
    "site para pequenos negócios",
    "site para autônomos",
    "quanto custa um site profissional",
    "como aparecer no Google",
    "como ter mais clientes pelo Google",
    "meu negócio não aparece no Google",
    "site que traz clientes",
    "site que converte",
    "presença digital para pequenas empresas",
    "marketing digital para pequenas empresas",
    "SEO para pequenas empresas",
    "site otimizado para Google",
    "site responsivo",

    // Segmentos atendidos
    "site para clínica",
    "site para clínica odontológica",
    "site para psicólogo",
    "site para nutricionista",
    "site para fisioterapeuta",
    "site para personal trainer",
    "site para academia",
    "site para salão de beleza",
    "site para barbearia",
    "site para restaurante",
    "site para advogado",
    "site para escritório de advocacia",
    "site para médico",
    "site para contador",
    "site para pet shop",
    "site para imobiliária",
    "site para loja",
    "site para coach",

    // Marca / geografia
    "Codando Ideias",
    "site profissional Brasil",
    "criação de sites Belo Horizonte",
    "desenvolvedor web Belo Horizonte",
    "criação de sites Minas Gerais",
    "diagnóstico de visibilidade online grátis",
    "calculadora de clientes perdidos",
  ],

  authors: [{ name: "Codando Ideias", url: "https://codandoideias.com.br" }],
  creator: "Codando Ideias",
  publisher: "Codando Ideias",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://codandoideias.com.br",
    siteName: "Codando Ideias",
    title: "Codando Ideias | Sites e Sistemas para Empresas",
    description:
      "Sites profissionais, landing pages e sistemas web para empresas e autônomos. Atendemos todo o Brasil.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codando Ideias - Desenvolvimento Web Profissional",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Codando Ideias | Sites e Sistemas para Empresas",
    description:
      "Sites profissionais, landing pages e sistemas web para empresas e autônomos em todo o Brasil.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://codandoideias.com.br",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Codando Ideias",
  url: "https://codandoideias.com.br",
  image: "https://codandoideias.com.br/logo2.svg",
  description:
    "Criação de sites profissionais, landing pages e sistemas web para empresas e autônomos em todo o Brasil.",
  areaServed: "BR",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  sameAs: ["https://www.instagram.com/dev.helcioanicio"],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${limelight.variable} dark font-franklin ${geistMono.variable} ${libreFranklin.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <MicrosoftClarity />
      </body>
    </html>
  );
}
