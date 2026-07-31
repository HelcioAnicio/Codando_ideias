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
    default: "Codando Ideias | Gestão de Tráfego Pago que Converte",
    template: "%s | Codando Ideias",
  },

  icons: {
    icon: "/favicon.ico",
  },

  description:
    "Gestão de tráfego pago (Google Ads e Meta Ads) com landing pages de alta performance, rastreamento completo e relatório de custo por lead. Diagnóstico gratuito para o seu negócio.",

  keywords: [
    // Serviço principal
    "gestão de tráfego pago",
    "agência de tráfego pago",
    "gestão de Google Ads",
    "gestão de Meta Ads",
    "gestão de anúncios Facebook e Instagram",
    "tráfego pago para pequenas empresas",
    "landing page para tráfego pago",
    "landing page de alta conversão",
    "criação de sites profissionais",
    "desenvolvimento web",

    // Intenção / dor do cliente
    "diagnóstico gratuito de tráfego pago",
    "quanto custa gestão de tráfego pago",
    "como aparecer no Google com anúncio",
    "custo por lead",
    "custo por cliente em anúncio",
    "meu anúncio não converte",
    "página lenta perde cliente",
    "página que converte",
    "rastreamento de campanha Google e Meta",
    "presença digital para pequenas empresas",
    "marketing digital para pequenas empresas",

    // Segmentos atendidos
    "tráfego pago para clínica",
    "tráfego pago para academia",
    "tráfego pago para advogado",
    "tráfego pago para imobiliária",
    "tráfego pago para loja",
    "site para clínica odontológica",
    "site para nutricionista",
    "site para barbearia",
    "site para restaurante",

    // Marca / geografia
    "Codando Ideias",
    "agência de tráfego pago Brasil",
    "gestão de tráfego pago Belo Horizonte",
    "criação de sites Belo Horizonte",
    "criação de sites Minas Gerais",
  ],

  authors: [{ name: "Codando Ideias", url: "https://codandoideias.com.br" }],
  creator: "Codando Ideias",
  publisher: "Codando Ideias",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://codandoideias.com.br",
    siteName: "Codando Ideias",
    title: "Codando Ideias | Gestão de Tráfego Pago que Converte",
    description:
      "Landing pages de alta performance e gestão de tráfego pago (Google + Meta Ads) com rastreamento completo. Diagnóstico gratuito.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Codando Ideias - Gestão de Tráfego Pago",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Codando Ideias | Gestão de Tráfego Pago que Converte",
    description:
      "Landing pages de alta performance e gestão de tráfego pago (Google + Meta Ads) com rastreamento completo. Diagnóstico gratuito.",
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
    "Gestão de tráfego pago (Google Ads e Meta Ads) com landing pages de alta performance, rastreamento completo e relatório de custo por lead para empresas em todo o Brasil.",
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
