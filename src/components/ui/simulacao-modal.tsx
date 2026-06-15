"use client";

import { useEffect } from "react";
import { TemplateSegmento, TemplateVariant } from "@/data/template-catalog";
import { FaWhatsapp } from "react-icons/fa6";
import { MdClose, MdPictureAsPdf, MdInfoOutline } from "react-icons/md";

interface Props {
  segmento: TemplateSegmento;
  onClose: () => void;
}

const WA_LINK =
  "https://wa.me/5531991973835?text=Olá!+Vi+os+modelos+na+simulação+e+quero+um+site+para+meu+negócio!";

/** Abre o HTML em nova aba e dispara o diálogo Salvar como PDF */
function openAsPdf(file: string) {
  const win = window.open(file, "_blank");
  if (!win) return;
  win.addEventListener("load", () => {
    setTimeout(() => win.print(), 300);
  });
}

export function SimulacaoModal({ segmento, onClose }: Props) {
  // Close on Escape
  useEffect(() => {
    const handle = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-4 z-[60] flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">{segmento.emoji}</span>
            <h2 className="text-lg font-black text-white">{segmento.nome}</h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
          >
            <MdClose size={18} />
          </button>
        </div>

        {/* Info banner */}
        <div className="mx-6 mt-5 shrink-0 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
          <div className="flex items-start gap-3">
            <MdInfoOutline size={18} className="mt-0.5 shrink-0 text-blue-400" />
            <div className="space-y-1.5">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-300">
                O que será personalizado no seu modelo
              </p>
              <ul className="space-y-1 text-xs text-slate-300">
                <li>
                  <strong>Textos e conteúdo</strong> — títulos, descrições e demais textos substituídos pelo seu negócio.
                </li>
                <li>
                  <strong>Serviços e produtos</strong> — lista de serviços atualizada conforme o que você oferece.
                </li>
                <li>
                  <strong>Imagens</strong> — fotos do modelo substituídas pelas suas (fornecidas por você).
                </li>
                <li>
                  <strong>Paleta de cores</strong> — identidade visual ajustada conforme a sua marca.
                </li>
              </ul>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-yellow-400">
                  ⚠ Todo o conteúdo deve ser fornecido pelo cliente
                </span>
                <span className="rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-[10px] text-slate-400">
                  Gostou de um modelo de outro segmento? Também é possível — basta solicitar.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 template cards */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {segmento.variants.map((v) => (
              <TemplateCard key={v.slug} variant={v} segmentoNome={segmento.nome} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-slate-800 bg-slate-900/50 px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">
              Clique em <span className="text-red-400 font-semibold">Abrir PDF</span> para visualizar o modelo completo
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-2.5 text-sm font-black text-black transition-all hover:brightness-110"
            >
              <FaWhatsapp size={15} />
              Quero um site assim
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Template card ─────────────────────────────────────────────────────────────

const SCALE = 0.27;
const PREVIEW_W = 1280;
const PREVIEW_H = 960;

function TemplateCard({
  variant,
  segmentoNome,
}: {
  variant: TemplateVariant;
  segmentoNome: string;
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/5">
      {/* Scaled iframe preview — non-interactive */}
      <div
        className="relative overflow-hidden"
        style={{ height: Math.round(PREVIEW_H * SCALE) }}
      >
        <iframe
          src={variant.file}
          title={`${segmentoNome} — ${variant.name}`}
          scrolling="no"
          style={{
            width: PREVIEW_W,
            height: PREVIEW_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
            pointerEvents: "none",
            border: "none",
          }}
        />
        {/* Click overlay → PDF */}
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 transition-all group-hover:bg-black/50"
          onClick={() => openAsPdf(variant.file)}
        >
          <div className="flex scale-75 items-center gap-2 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-black text-white opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
            <MdPictureAsPdf size={18} />
            Abrir PDF
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-bold text-white">{variant.name}</p>
          <p className="mt-0.5 text-[11px] text-slate-500">{variant.desc}</p>
        </div>
        <button
          onClick={() => openAsPdf(variant.file)}
          className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-300 transition-all hover:border-red-400/50 hover:bg-red-500/10 hover:text-red-400"
        >
          <MdPictureAsPdf size={13} />
          PDF
        </button>
      </div>
    </div>
  );
}
