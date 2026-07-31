import Link from "next/link";
import { ArrowRight, Megaphone } from "lucide-react";

export const TrafegoTeaser = () => {
  return (
    <section aria-label="Gestão de tráfego pago" className="w-full px-4 py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-4">
            <div
              aria-hidden="true"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/5"
            >
              <Megaphone className="h-6 w-6 text-amber-300" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white md:text-2xl">
                Também cuidamos da gestão do seu tráfego pago.
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                Google Ads e Meta Ads, com processo visível em 5 etapas e
                pacotes com verba de mídia separada da mensalidade.
              </p>
            </div>
          </div>

          <Link
            href="/trafego"
            className="flex w-max shrink-0 items-center gap-2 rounded-xl border border-amber-300/40 bg-amber-300/10 px-6 py-3 font-bold text-amber-200 transition hover:bg-amber-300/20 hover:text-white"
          >
            Ver como funciona
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
