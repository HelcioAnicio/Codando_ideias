"use client";

import { useState, useEffect, useCallback } from "react";
import { getTemplateHtml, ContentVars, STYLE_NAMES, STYLE_DESCS } from "@/data/preview-templates";
import { segmentoFamily } from "@/data/preview-templates";
import { FaWhatsapp } from "react-icons/fa6";
import { MdClose, MdOpenInNew } from "react-icons/md";

interface Props {
  segmentoId: string;
  segmentoNome: string;
  emoji: string;
  content: ContentVars;
  onClose: () => void;
}

const WA_LINK =
  "https://wa.me/5531991973835?text=Olá!+Vi+a+simulação+e+quero+um+site+profissional+para+meu+negócio!";

const STYLE_ICONS = ["◆", "○", "▲"];

export function SimulacaoModal({ segmentoId, segmentoNome, emoji, content, onClose }: Props) {
  const [selected, setSelected] = useState<0 | 1 | 2 | null>(null);

  // Close on Escape
  useEffect(() => {
    const handle = (e: KeyboardEvent) => { if (e.key === "Escape") { if (selected !== null) setSelected(null); else onClose(); } };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [selected, onClose]);

  // Prevent body scroll while modal open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const getHtml = useCallback((idx: 0 | 1 | 2) => getTemplateHtml(idx, segmentoId, content), [segmentoId, content]);

  const family = segmentoFamily[segmentoId] ?? "saude";

  return (
    <>
      {/* ── Backdrop ── */}
      <div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
        onClick={selected !== null ? () => setSelected(null) : onClose}
      />

      {/* ── Full-screen view ── */}
      {selected !== null && (
        <div className="fixed inset-4 z-[60] flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelected(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:text-white"
              >
                ←
              </button>
              <div>
                <p className="text-xs font-bold text-white">
                  {emoji} {segmentoNome} — {STYLE_NAMES[selected]}
                </p>
                <p className="text-[11px] text-slate-500">{STYLE_DESCS[selected]}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900 p-1">
                {([0, 1, 2] as const).map((i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(i)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                      selected === i ? "bg-yellow-400 text-black" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {STYLE_ICONS[i]} {STYLE_NAMES[i]}
                  </button>
                ))}
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-1.5 rounded-lg bg-yellow-400 px-4 py-1.5 text-xs font-black text-black transition-all hover:brightness-110"
              >
                <FaWhatsapp size={13} />
                Quero este site
              </a>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:text-white"
              >
                <MdClose size={16} />
              </button>
            </div>
          </div>

          {/* Browser chrome */}
          <div className="flex shrink-0 items-center gap-3 border-b border-slate-800 bg-slate-900/50 px-4 py-2">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800/80 px-4 py-1 text-[11px] text-slate-500">
                <span className="text-slate-600">🔒</span>
                <span>www.{segmentoNome.toLowerCase().replace(/\s+/g, "")}.com.br</span>
              </div>
            </div>
            <div className="w-16" />
          </div>

          {/* Iframe */}
          <iframe
            key={`full-${selected}`}
            srcDoc={getHtml(selected)}
            className="flex-1 border-none"
            title={`Preview ${STYLE_NAMES[selected]}`}
            sandbox="allow-same-origin"
          />
        </div>
      )}

      {/* ── Picker modal ── */}
      {selected === null && (
        <div className="fixed inset-4 z-[60] flex flex-col overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl">
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-slate-800 px-6 py-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{emoji}</span>
                <h2 className="text-lg font-black text-white">{segmentoNome}</h2>
                <span className="rounded-full border border-slate-700 bg-slate-800 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  {family}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-slate-500">
                Escolha um dos 3 modelos abaixo para ver a prévia completa
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition-colors hover:border-slate-500 hover:text-white"
            >
              <MdClose size={18} />
            </button>
          </div>

          {/* 3 preview cards */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {([0, 1, 2] as const).map((idx) => (
                <TemplateCard
                  key={idx}
                  idx={idx}
                  html={getHtml(idx)}
                  segmentoNome={segmentoNome}
                  onOpen={() => setSelected(idx)}
                />
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="shrink-0 border-t border-slate-800 bg-slate-900/50 px-6 py-4">
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">
                Clique em qualquer modelo para ver a prévia completa
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
      )}
    </>
  );
}

// ── Template card with scaled iframe preview ──────────────────────────────────

function TemplateCard({
  idx,
  html,
  segmentoNome,
  onOpen,
}: {
  idx: 0 | 1 | 2;
  html: string;
  segmentoNome: string;
  onOpen: () => void;
}) {
  const SCALE = 0.28;
  const PREVIEW_W = 1200;
  const PREVIEW_H = 900;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-yellow-500/40 hover:shadow-xl hover:shadow-yellow-500/5">
      {/* Iframe preview */}
      <div
        className="relative cursor-pointer overflow-hidden"
        style={{ height: Math.round(PREVIEW_H * SCALE) }}
        onClick={onOpen}
      >
        <iframe
          srcDoc={html}
          title={`${segmentoNome} — ${STYLE_NAMES[idx]}`}
          sandbox="allow-same-origin"
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
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/40">
          <div className="flex scale-75 items-center gap-2 rounded-xl bg-yellow-400 px-4 py-2.5 text-sm font-black text-black opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
            <MdOpenInNew size={16} />
            Ver prévia completa
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-slate-200">{STYLE_ICONS[idx]}</span>
            <span className="text-sm font-bold text-white">{STYLE_NAMES[idx]}</span>
          </div>
          <p className="mt-0.5 text-[11px] text-slate-500">{STYLE_DESCS[idx]}</p>
        </div>
        <button
          onClick={onOpen}
          className="rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-300 transition-all hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:text-yellow-400"
        >
          Ver →
        </button>
      </div>
    </div>
  );
}
