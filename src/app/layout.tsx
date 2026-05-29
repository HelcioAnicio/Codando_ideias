import Metadata from "next";
import { Geist_Mono, Limelight, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

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
  title: "Codando ideias",
  description:
    "Demonstração dos serviços prestados pela empresa Codando ideias, monstrando modelos e formas para entrar em contato",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${limelight.variable} ${geistMono.variable} ${libreFranklin.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>{" "}
      </body>
    </html>
  );
}
