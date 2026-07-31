import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { TrafegoHero } from "@/components/ui/trafego-hero";
import { TrafegoComoFunciona } from "@/components/ui/trafego-como-funciona";
import { TrafegoPacotes } from "@/components/ui/trafego-pacotes";
import { ProvaSocial } from "@/components/ui/prova-social";
import { ReversaoRisco } from "@/components/ui/reversao-risco";
import Link from "next/link";
import { Search } from "lucide-react";

export const metadata = {
  title: "Gestão de Tráfego Pago — Google Ads e Meta Ads",
  description:
    "Gestão de tráfego pago com landing pages rápidas, rastreamento completo e relatório de custo por lead. Diagnóstico gratuito para o seu negócio.",
  alternates: {
    canonical: "https://codandoideias.com.br/trafego",
  },
};

export default function TrafegoPage() {
  return (
    <>
      <Header />
      <main className="w-full overflow-hidden bg-background">
        <TrafegoHero />
        <TrafegoComoFunciona />
        <TrafegoPacotes />
        <ProvaSocial />
        <ReversaoRisco />

        <section className="w-full px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-amber-300/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-14 text-center shadow-2xl md:px-16">
            <h2 className="text-2xl font-extrabold leading-[1.1] md:text-4xl">
              Quer descobrir quantos clientes você está perdendo hoje?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              O diagnóstico é gratuito e sem compromisso. Você sai dele com
              números reais sobre o potencial do seu negócio.
            </p>
            <Link
              href="/diagnostico"
              className="studio-gold-surface mt-8 inline-flex items-center gap-2 rounded-xl px-8 py-4 font-bold shadow-lg transition-all duration-200 hover:scale-[1.02] hover:brightness-110"
            >
              <Search size={18} aria-hidden="true" />
              Agende um diagnóstico gratuito
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
