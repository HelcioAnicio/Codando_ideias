import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist_Mono, Limelight, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { MicrosoftClarity } from "@/lib/microsoftClarity";

const libreFranklin = Libre_Franklin({
  variable: "--font-libre-franklin",
  subsets: ["latin"],
  weight: ["400", "700"],
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
    default: "Codando Ideias | Sites e Sistemas para Pequenas Empresas",
    template: "%s | Codando Ideias",
  },

  icons: {
    icon: "/favicon.ico",
  },

  description:
    "Criamos sites profissionais, landing pages e sistemas web para pequenas empresas e autônomos em todo o Brasil. Mais clientes, mais autoridade, mais resultado.",

  keywords: [
    "criação de sites",
    "landing page profissional",
    "site para pequenas empresas",
    "site para clínica",
    "site para restaurante",
    "site para advogado",
    "site para médico",
    "site para coach",
    "sistema web",
    "desenvolvimento web",
    "site barato",
    "agência de sites",
    "presença digital",
    "site profissional Brasil",
  ],

  authors: [{ name: "Codando Ideias", url: "https://codandoideias.com.br" }],
  creator: "Codando Ideias",
  publisher: "Codando Ideias",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://codandoideias.com.br",
    siteName: "Codando Ideias",
    title: "Codando Ideias | Sites e Sistemas para Pequenas Empresas",
    description:
      "Sites profissionais, landing pages e sistemas web para pequenas empresas e autônomos. Atendemos todo o Brasil.",
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
    title: "Codando Ideias | Sites e Sistemas para Pequenas Empresas",
    description:
      "Sites profissionais, landing pages e sistemas web para pequenas empresas e autônomos em todo o Brasil.",
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
        {children}
        <Suspense fallback={null}>
          <MicrosoftClarity />
        </Suspense>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
