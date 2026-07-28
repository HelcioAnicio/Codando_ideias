import { Header } from "@/components/ui/header";
import { SimulacaoEditor } from "@/components/ui/simulacao-editor";
import { findSegmento, getSegmentoContent, templates } from "@/data/simulacao";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ segmento: string; template: string }>;
}

export default async function EditorPage({ params }: Props) {
  const { segmento: segmentoId, template: templateId } = await params;

  const segmento = findSegmento(segmentoId);
  const template = templates.find((t) => t.id === templateId);

  if (!segmento || !template) notFound();

  const content = getSegmentoContent(segmentoId);

  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-background pt-28 pb-24 font-franklin">
        <div className="mx-auto max-w-3xl px-5">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-xs text-slate-500">
            <Link href="/simulacao" className="hover:text-slate-300 transition-colors">
              Simulação
            </Link>
            <span>/</span>
            <Link
              href={`/simulacao/${segmentoId}`}
              className="hover:text-slate-300 transition-colors"
            >
              {segmento.nome}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{template.nome}</span>
          </nav>

          {/* Title */}
          <div className="mb-10 text-center">
            <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-yellow-400">
              Preview — {template.nome}
            </span>
            <h1 className="mt-3 text-2xl font-black text-white sm:text-3xl">
              {segmento.nome}
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Este é um modelo de como ficaria a presença digital do seu negócio.
              Você pode editar os textos abaixo.
            </p>
          </div>

          {/* Editor */}
          <SimulacaoEditor
            templateId={templateId}
            segmentoId={segmentoId}
            segmentoNome={segmento.nome}
            initialContent={content}
          />
        </div>
      </main>
    </>
  );
}
