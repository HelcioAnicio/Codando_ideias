import { TemplateEditor } from "@/components/ui/template-editor";
import { findSegmento, getSegmentoContent } from "@/data/simulacao";
import { segmentoEmoji } from "@/data/template-defs";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ segmento: string }>;
}

export default async function EditorPage({ params }: Props) {
  const { segmento: segmentoId } = await params;

  const segmento = findSegmento(segmentoId);
  if (!segmento) notFound();

  const content = getSegmentoContent(segmentoId);
  const emoji = segmentoEmoji[segmentoId] ?? "🏢";

  return (
    <TemplateEditor
      segmentoId={segmentoId}
      segmentoNome={segmento.nome}
      initialContent={content}
      emoji={emoji}
    />
  );
}
