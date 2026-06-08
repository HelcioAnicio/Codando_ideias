import { Header } from "@/components/ui/header";
import { categorias, getSegmentoContent } from "@/data/simulacao";
import { segmentoEmoji } from "@/data/template-defs";
import { SimulacaoGrid } from "@/components/ui/simulacao-grid";

export const metadata = {
  title: "Simulação — Codando Ideias",
  description: "Veja como ficaria o site do seu negócio antes de contratar.",
};

export default function SimulacaoPage() {
  // Build enriched categories with content for each segment
  const enrichedCategorias = categorias.map((cat) => ({
    id: cat.id,
    nome: cat.nome,
    icon: cat.icon,
    segmentos: cat.segmentos.map((seg) => {
      const c = getSegmentoContent(seg.id);
      return {
        id: seg.id,
        nome: seg.nome,
        emoji: segmentoEmoji[seg.id] ?? "🏢",
        content: {
          nome: c.titulo,
          tagline: c.tagline,
          subtitulo: c.subtitulo,
          servicos: c.servicos,
          cta: c.cta,
          emoji: segmentoEmoji[seg.id] ?? "🏢",
        },
      };
    }),
  }));

  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-background pt-28 pb-20 font-franklin">
        <div className="mx-auto max-w-6xl px-5">
          {/* Hero */}
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              Simulação gratuita · Sem compromisso
            </span>
            <h1 className="mt-4 text-3xl font-black text-primary-foreground sm:text-4xl lg:text-5xl">
              Como seria o site do <br />
              <span className="text-popover-foreground">seu negócio?</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-400 sm:text-base">
              Selecione o segmento da sua empresa e veja instantaneamente{" "}
              <strong className="text-slate-300">3 modelos diferentes</strong> — com designs
              profissionais e paletas de cores exclusivas.
            </p>
          </div>

          {/* Grid + Modal (client component) */}
          <SimulacaoGrid categorias={enrichedCategorias} />

          <p className="mt-16 text-center text-xs text-slate-700">
            Todos os modelos são 100% personalizáveis. Após a simulação, fale com a gente para criar o site real.
          </p>
        </div>
      </main>
    </>
  );
}
