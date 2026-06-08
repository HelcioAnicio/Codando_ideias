"use client";

import { useState, useCallback } from "react";
import { TemplateVars, TemplateStyle, getFamily } from "@/data/template-defs";
import { SegmentoContent } from "@/data/simulacao";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { MdEdit, MdPalette } from "react-icons/md";

interface Props {
  segmentoId: string;
  segmentoNome: string;
  initialContent: SegmentoContent;
  emoji: string;
}

type Tab = "texto" | "cores";

export function TemplateEditor({ segmentoId, segmentoNome, initialContent, emoji }: Props) {
  const family = getFamily(segmentoId);
  const [styleIdx, setStyleIdx] = useState(0);
  const [tab, setTab] = useState<Tab>("texto");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const activeStyle: TemplateStyle = family.styles[styleIdx];

  const [vars, setVars] = useState<TemplateVars>(() => ({
    nome: initialContent.titulo,
    tagline: initialContent.tagline,
    subtitulo: initialContent.subtitulo,
    servicos: initialContent.servicos,
    cta: initialContent.cta,
    emoji,
    ...activeStyle.defaultColors,
  }));

  // When switching style, reset colors to that style's defaults but keep text
  const switchStyle = (idx: number) => {
    setStyleIdx(idx);
    setVars((v) => ({
      ...v,
      ...family.styles[idx].defaultColors,
    }));
  };

  const setVar = useCallback(<K extends keyof TemplateVars>(key: K, value: TemplateVars[K]) => {
    setVars((v) => ({ ...v, [key]: value }));
  }, []);

  const setServico = useCallback((i: number, val: string) => {
    setVars((v) => {
      const next = [...v.servicos];
      next[i] = val;
      return { ...v, servicos: next };
    });
  }, []);

  const html = activeStyle.render(vars);

  const waLink =
    "https://wa.me/5531991973835?text=Olá!+Vi+a+simulação+e+quero+um+site+profissional+para+meu+negócio!";

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background font-franklin">
      {/* ── Top Bar ── */}
      <div className="flex shrink-0 items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3">
        <div className="flex items-center gap-3">
          <Link
            href={`/simulacao/${segmentoId}`}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition-colors hover:text-white"
          >
            ←
          </Link>
          <div>
            <p className="text-xs font-bold text-white">{segmentoNome}</p>
            <p className="text-[11px] text-slate-500">Edite textos e cores · Preview ao vivo</p>
          </div>
        </div>

        {/* Style switcher */}
        <div className="flex items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 p-1">
          {family.styles.map((s, i) => (
            <button
              key={s.id}
              onClick={() => switchStyle(i)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                styleIdx === i
                  ? "bg-yellow-400 text-black"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Estilo {i + 1}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebarOpen((v) => !v)}
            className="flex items-center gap-1.5 rounded-lg border border-slate-700 px-3 py-1.5 text-xs font-bold text-slate-400 transition-colors hover:text-white"
          >
            <MdEdit size={13} />
            {sidebarOpen ? "Ocultar painel" : "Editar"}
          </button>
          <Link
            href={waLink}
            target="_blank"
            className="flex items-center gap-1.5 rounded-lg bg-yellow-400 px-4 py-1.5 text-xs font-black text-black transition-all hover:brightness-110"
          >
            <FaWhatsapp size={13} />
            Quero este site
          </Link>
        </div>
      </div>

      {/* ── Main ── */}
      <div className="flex flex-1 overflow-hidden">
        {/* ── Sidebar ── */}
        {sidebarOpen && (
          <div className="flex w-72 shrink-0 flex-col overflow-y-auto border-r border-slate-800 bg-slate-950">
            {/* Style info */}
            <div className="border-b border-slate-800 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                {activeStyle.nome}
              </p>
              <p className="mt-0.5 text-xs text-slate-400">{activeStyle.descricao}</p>
            </div>

            {/* Tab switcher */}
            <div className="flex border-b border-slate-800">
              <button
                onClick={() => setTab("texto")}
                className={`flex flex-1 items-center justify-center gap-1.5 py-2.5 text-xs font-bold transition-colors ${tab === "texto" ? "border-b-2 border-yellow-400 text-yellow-400" : "text-slate-500 hover:text-slate-300"}`}
              >
                <MdEdit size={13} /> Textos
              </button>
              <button
                onClick={() => setTab("cores")}
                className={`flex flex-1 items-center justify-center gap-1.5 py-2.5 text-xs font-bold transition-colors ${tab === "cores" ? "border-b-2 border-yellow-400 text-yellow-400" : "text-slate-500 hover:text-slate-300"}`}
              >
                <MdPalette size={13} /> Cores
              </button>
            </div>

            {/* Controls */}
            <div className="flex-1 space-y-4 p-4">
              {tab === "texto" ? (
                <>
                  <Field label="Nome do negócio" value={vars.nome} onChange={(v) => setVar("nome", v)} />
                  <Field label="Tagline (frase curta)" value={vars.tagline} onChange={(v) => setVar("tagline", v)} />
                  <Field
                    label="Subtítulo / descrição"
                    value={vars.subtitulo}
                    onChange={(v) => setVar("subtitulo", v)}
                    textarea
                  />
                  <Field label="Texto do botão" value={vars.cta} onChange={(v) => setVar("cta", v)} />

                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                      Serviços / itens (até 6)
                    </p>
                    <div className="space-y-1.5">
                      {vars.servicos.slice(0, 6).map((s, i) => (
                        <input
                          key={i}
                          value={s}
                          onChange={(e) => setServico(i, e.target.value)}
                          placeholder={`Serviço ${i + 1}`}
                          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-200 placeholder-slate-600 outline-none focus:border-yellow-500/60"
                        />
                      ))}
                    </div>
                  </div>

                  <Field label="Emoji decorativo" value={vars.emoji} onChange={(v) => setVar("emoji", v)} />
                </>
              ) : (
                <>
                  <ColorField
                    label="Cor principal"
                    hint="Fundo do hero, botões"
                    value={vars.cor1}
                    onChange={(v) => setVar("cor1", v)}
                  />
                  <ColorField
                    label="Cor de destaque"
                    hint="Ícones, highlights, acentos"
                    value={vars.cor2}
                    onChange={(v) => setVar("cor2", v)}
                  />
                  <ColorField
                    label="Fundo da página"
                    hint="Cor de fundo geral"
                    value={vars.corFundo}
                    onChange={(v) => setVar("corFundo", v)}
                  />
                  <ColorField
                    label="Cor do texto"
                    hint="Textos principais"
                    value={vars.corTexto}
                    onChange={(v) => setVar("corTexto", v)}
                  />
                  <ColorField
                    label="Texto sobre a cor principal"
                    hint="Texto dentro de botões/hero"
                    value={vars.cor1Text}
                    onChange={(v) => setVar("cor1Text", v)}
                  />

                  {/* Palette presets */}
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                      Paletas prontas
                    </p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {PALETTES.map((p) => (
                        <button
                          key={p.nome}
                          onClick={() =>
                            setVars((v) => ({
                              ...v,
                              cor1: p.cor1,
                              cor2: p.cor2,
                              corFundo: p.corFundo,
                              corTexto: p.corTexto,
                              cor1Text: p.cor1Text,
                            }))
                          }
                          className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-2 text-left hover:border-slate-600 transition-colors"
                        >
                          <div className="flex gap-1">
                            <div className="h-3 w-3 rounded-full border border-black/20" style={{ background: p.cor1 }} />
                            <div className="h-3 w-3 rounded-full border border-black/20" style={{ background: p.cor2 }} />
                          </div>
                          <span className="text-[11px] text-slate-400">{p.nome}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* CTA bottom */}
            <div className="border-t border-slate-800 p-4">
              <Link
                href={waLink}
                target="_blank"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 py-3 text-sm font-black text-black transition-all hover:brightness-110"
              >
                <FaWhatsapp />
                Quero este site
              </Link>
              <p className="mt-2 text-center text-[11px] text-slate-600">
                Esse é só um preview. O site real é 100% personalizado.
              </p>
            </div>
          </div>
        )}

        {/* ── Preview iframe ── */}
        <div className="relative flex flex-1 flex-col overflow-hidden bg-slate-900">
          {/* Device bar */}
          <div className="flex shrink-0 items-center justify-between border-b border-slate-800 px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500/70" />
              <div className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <div className="h-2 w-2 rounded-full bg-green-500/70" />
            </div>
            <div className="flex items-center gap-2 rounded-md border border-slate-700 bg-slate-800 px-3 py-1 text-[11px] text-slate-500">
              <span>{segmentoNome}</span>
            </div>
            <div className="w-14" />
          </div>

          <iframe
            srcDoc={html}
            className="flex-1 w-full border-none"
            title="Template Preview"
            sandbox="allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
}

// ── Field components ──────────────────────────────────────────────────────────

function Field({
  label,
  value,
  onChange,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-widest text-slate-500">
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-200 placeholder-slate-600 outline-none focus:border-yellow-500/60"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-200 placeholder-slate-600 outline-none focus:border-yellow-500/60"
        />
      )}
    </div>
  );
}

function ColorField({
  label,
  hint,
  value,
  onChange,
}: {
  label: string;
  hint: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-1 block text-[11px] font-semibold uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <p className="mb-1.5 text-[11px] text-slate-600">{hint}</p>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-10 cursor-pointer rounded border border-slate-700 bg-transparent p-0.5"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs font-mono text-slate-200 outline-none focus:border-yellow-500/60"
          placeholder="#000000"
          maxLength={7}
        />
      </div>
    </div>
  );
}

// ── Palette presets ────────────────────────────────────────────────────────────

const PALETTES = [
  { nome: "Forest", cor1: "#2B4A3F", cor2: "#7d9990", corFundo: "#FAF8F4", corTexto: "#1a2e2a", cor1Text: "#ffffff" },
  { nome: "Night", cor1: "#0D0D0D", cor2: "#00E5A0", corFundo: "#0D0D0D", corTexto: "#ffffff", cor1Text: "#000000" },
  { nome: "Ocean", cor1: "#1E3A5F", cor2: "#3B82F6", corFundo: "#F0F4FF", corTexto: "#1a1a2e", cor1Text: "#ffffff" },
  { nome: "Gold", cor1: "#0F1117", cor2: "#B8973A", corFundo: "#0F1117", corTexto: "#ffffff", cor1Text: "#0F1117" },
  { nome: "Rose", cor1: "#E91E8C", cor2: "#c2185b", corFundo: "#FFF0F5", corTexto: "#1a1a1a", cor1Text: "#ffffff" },
  { nome: "Fire", cor1: "#C4482D", cor2: "#D4721A", corFundo: "#FAF6F0", corTexto: "#2C1810", cor1Text: "#ffffff" },
  { nome: "Violet", cor1: "#7C3AED", cor2: "#6D28D9", corFundo: "#FAFAFE", corTexto: "#1a1a1a", cor1Text: "#ffffff" },
  { nome: "Slate", cor1: "#1a1a2e", cor2: "#FF6600", corFundo: "#1a1a2e", corTexto: "#ffffff", cor1Text: "#ffffff" },
];
