import { Header } from "@/components/ui/header";
import { SimulacaoGrid } from "@/components/ui/simulacao-grid";
import { templateSegmentos } from "@/data/template-catalog";

export const metadata = {
  title: "Modelos — Codando Ideias",
  description: "Veja os modelos de site disponíveis para o seu segmento.",
};

const WA_LINK =
  "https://wa.me/5531991973835?text=Olá!+Não+encontrei+um+modelo+para+minha+área.+Podemos+conversar?";

export default function SimulacaoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-background pt-28 pb-20 font-franklin">
        <div className="mx-auto max-w-5xl px-5">
          {/* Hero */}
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              Catálogo de modelos · Sem compromisso
            </span>
            <h1 className="mt-4 text-3xl font-black text-primary-foreground sm:text-4xl lg:text-5xl">
              Escolha o estilo <br />
              <span className="text-popover-foreground">do seu site</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
              Cada segmento tem <strong className="text-slate-300">3 modelos base</strong> com
              identidade visual própria. Textos, serviços, imagens e cores são personalizados
              com o conteúdo do seu negócio.
            </p>
          </div>

          {/* Segment grid */}
          <SimulacaoGrid segmentos={templateSegmentos} />

          {/* "Not found" section */}
          <div className="mt-20 rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center">
            <p className="text-2xl">🔍</p>
            <h2 className="mt-3 text-lg font-black text-white">
              Não encontrou um modelo para a sua área?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
              Entre em contato sem compromisso. Em até{" "}
              <strong className="text-slate-300">48 horas</strong> enviamos 3 templates
              personalizados para o seu segmento.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 text-sm font-black text-black transition-all hover:brightness-110"
            >
              💬 Entrar em contato
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
