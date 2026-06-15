"use client";

import { useState, useRef, useCallback } from "react";
import { SegmentoContent } from "@/data/simulacao";
import Link from "next/link";
import { FaCheck, FaWhatsapp } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";

interface EditorProps {
  templateId: string;
  segmentoId: string;
  segmentoNome: string;
  initialContent: SegmentoContent;
}

function useEditableField(initial: string) {
  const [value, setValue] = useState(initial);
  const ref = useRef<HTMLDivElement>(null);

  const handleInput = useCallback(() => {
    if (ref.current) setValue(ref.current.innerText);
  }, []);

  return { value, ref, handleInput };
}

export function SimulacaoEditor({
  templateId,
  segmentoId,
  segmentoNome,
  initialContent,
}: EditorProps) {
  const [editMode, setEditMode] = useState(false);
  const [servicos, setServicos] = useState(initialContent.servicos);

  const titulo = useEditableField(initialContent.titulo);
  const subtitulo = useEditableField(initialContent.subtitulo);
  const cta = useEditableField(initialContent.cta);
  const tagline = useEditableField(initialContent.tagline);

  const editableClass = editMode
    ? "outline outline-1 outline-yellow-500/40 rounded cursor-text focus:outline-yellow-500 focus:outline-2 transition-all"
    : "";

  if (templateId === "arte") {
    return (
      <EditorWrapper
        editMode={editMode}
        setEditMode={setEditMode}
        segmentoId={segmentoId}
      >
        {/* Arte / Social Media Layout */}
        <div className="mx-auto flex max-w-sm flex-col overflow-hidden rounded-3xl shadow-2xl">
          <div className="relative flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-600 p-8 pb-10 text-center text-white">
            {/* Top bar */}
            <div className="mb-2 flex w-full items-center justify-between">
              <div className="h-1 w-8 rounded bg-white/40" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
                {segmentoNome}
              </span>
              <div className="h-1 w-8 rounded bg-white/40" />
            </div>

            {/* Tagline */}
            <p
              ref={tagline.ref}
              contentEditable={editMode}
              suppressContentEditableWarning
              onInput={tagline.handleInput}
              className={`text-xs font-semibold uppercase tracking-widest text-white/80 ${editableClass}`}
            >
              {initialContent.tagline}
            </p>

            {/* Title */}
            <h2
              ref={titulo.ref}
              contentEditable={editMode}
              suppressContentEditableWarning
              onInput={titulo.handleInput}
              className={`text-2xl font-black leading-tight ${editableClass}`}
            >
              {initialContent.titulo}
            </h2>

            {/* Divider */}
            <div className="h-px w-16 bg-white/40" />

            {/* Services */}
            <ul className="space-y-1.5 text-left w-full px-2">
              {servicos.map((s, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-medium">
                  <FaCheck className="shrink-0 text-white/60 text-xs" />
                  {editMode ? (
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        const newServicos = [...servicos];
                        newServicos[i] = e.currentTarget.innerText;
                        setServicos(newServicos);
                      }}
                      className={`flex-1 ${editableClass}`}
                    >
                      {s}
                    </span>
                  ) : (
                    <span>{s}</span>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="mt-2 w-full rounded-full bg-white px-6 py-3 text-sm font-black text-orange-600 shadow-lg">
              <span
                ref={cta.ref}
                contentEditable={editMode}
                suppressContentEditableWarning
                onInput={cta.handleInput}
                className={editableClass}
              >
                {initialContent.cta}
              </span>
            </button>

            {/* Contact row */}
            <div className="flex items-center gap-3 text-xs text-white/60">
              <span>📍 Sua cidade, Brasil</span>
              <span>•</span>
              <span>📱 (XX) XXXXX-XXXX</span>
            </div>
          </div>
        </div>
      </EditorWrapper>
    );
  }

  if (templateId === "institucional") {
    return (
      <EditorWrapper
        editMode={editMode}
        setEditMode={setEditMode}
        segmentoId={segmentoId}
      >
        {/* Institucional Layout */}
        <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-700 shadow-2xl">
          {/* Nav mock */}
          <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-yellow-400" />
              <span
                ref={titulo.ref}
                contentEditable={editMode}
                suppressContentEditableWarning
                onInput={titulo.handleInput}
                className={`text-xs font-black text-white ${editableClass}`}
              >
                {initialContent.titulo}
              </span>
            </div>
            <div className="flex gap-4">
              {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
                <span key={item} className="text-[10px] text-slate-400">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Hero */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-8 py-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-yellow-400">
              <span
                ref={tagline.ref}
                contentEditable={editMode}
                suppressContentEditableWarning
                onInput={tagline.handleInput}
                className={editableClass}
              >
                {initialContent.tagline}
              </span>
            </p>
            <h1 className="mb-3 text-2xl font-black leading-tight text-white sm:text-3xl">
              <span
                ref={subtitulo.ref}
                contentEditable={editMode}
                suppressContentEditableWarning
                onInput={subtitulo.handleInput}
                className={editableClass}
              >
                {initialContent.subtitulo}
              </span>
            </h1>
            <button className="rounded-lg bg-yellow-400 px-5 py-2.5 text-xs font-bold text-black">
              <span
                ref={cta.ref}
                contentEditable={editMode}
                suppressContentEditableWarning
                onInput={cta.handleInput}
                className={editableClass}
              >
                {initialContent.cta}
              </span>
            </button>
          </div>

          {/* Services grid */}
          <div className="bg-slate-950 px-6 py-8">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Nossos Serviços
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {servicos.map((s, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 rounded-xl bg-slate-800 p-4 text-center"
                >
                  <div className="rounded-lg bg-yellow-400/10 p-2 text-yellow-400 text-lg">
                    {["⚕️", "🏆", "💡", "🤝"][i % 4]}
                  </div>
                  {editMode ? (
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) => {
                        const newServicos = [...servicos];
                        newServicos[i] = e.currentTarget.innerText;
                        setServicos(newServicos);
                      }}
                      className={`text-xs font-semibold text-slate-300 ${editableClass}`}
                    >
                      {s}
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-slate-300">{s}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer mock */}
          <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900 px-6 py-3">
            <span className="text-[10px] text-slate-600">
              © 2025 — Todos os direitos reservados
            </span>
            <div className="flex gap-3 text-[10px] text-slate-500">
              <span>Instagram</span>
              <span>WhatsApp</span>
            </div>
          </div>
        </div>
      </EditorWrapper>
    );
  }

  // Landing page (default)
  return (
    <EditorWrapper
      editMode={editMode}
      setEditMode={setEditMode}
      segmentoId={segmentoId}
    >
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-slate-700 shadow-2xl">
        {/* Nav mock */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#0a0f1e] px-6 py-3">
          <div className="h-4 w-20 rounded bg-slate-700" />
          <div className="rounded-full bg-yellow-400 px-3 py-1 text-[10px] font-bold text-black">
            Menu
          </div>
        </div>

        {/* Hero */}
        <div className="relative flex flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#111827] to-[#0a0f1e] px-8 py-14 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.06)_0%,transparent_70%)]" />
          <span className="relative rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-yellow-400">
            <span
              ref={tagline.ref}
              contentEditable={editMode}
              suppressContentEditableWarning
              onInput={tagline.handleInput}
              className={editableClass}
            >
              {initialContent.tagline}
            </span>
          </span>
          <h1
            ref={titulo.ref}
            contentEditable={editMode}
            suppressContentEditableWarning
            onInput={titulo.handleInput}
            className={`relative text-2xl font-black leading-tight text-white sm:text-3xl ${editableClass}`}
          >
            {initialContent.titulo}
          </h1>
          <p
            ref={subtitulo.ref}
            contentEditable={editMode}
            suppressContentEditableWarning
            onInput={subtitulo.handleInput}
            className={`relative max-w-sm text-sm text-slate-400 ${editableClass}`}
          >
            {initialContent.subtitulo}
          </p>
          <button className="relative mt-2 rounded-xl bg-yellow-400 px-6 py-3 text-xs font-black text-black shadow-lg shadow-yellow-400/20">
            <span
              ref={cta.ref}
              contentEditable={editMode}
              suppressContentEditableWarning
              onInput={cta.handleInput}
              className={editableClass}
            >
              {initialContent.cta}
            </span>
          </button>
        </div>

        {/* Services */}
        <div className="bg-[#111827] px-6 py-8">
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
            O que oferecemos
          </p>
          <div className="grid grid-cols-2 gap-3">
            {servicos.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 p-3"
              >
                <FaCheck className="shrink-0 text-xs text-yellow-400" />
                {editMode ? (
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => {
                      const newServicos = [...servicos];
                      newServicos[i] = e.currentTarget.innerText;
                      setServicos(newServicos);
                    }}
                    className={`text-xs text-slate-300 ${editableClass}`}
                  >
                    {s}
                  </span>
                ) : (
                  <span className="text-xs text-slate-300">{s}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="flex items-center justify-between bg-yellow-400 px-6 py-4">
          <p className="text-xs font-bold text-black">
            Pronto para se destacar online?
          </p>
          <div className="flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-[10px] font-bold text-yellow-400">
            <FaWhatsapp />
            Fale comigo
          </div>
        </div>
      </div>
    </EditorWrapper>
  );
}

interface EditorWrapperProps {
  editMode: boolean;
  setEditMode: (v: boolean) => void;
  segmentoId: string;
  children: React.ReactNode;
}

function EditorWrapper({
  editMode,
  setEditMode,
  segmentoId,
  children,
}: EditorWrapperProps) {
  const waLink =
    "https://wa.me/5531991973835?text=Olá!+Vi+a+simulação+e+quero+um+site+profissional+para+o+meu+negócio!";

  return (
    <div className="flex flex-col gap-8">
      {/* Toolbar */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${editMode ? "bg-yellow-400 text-black" : "bg-slate-800 text-yellow-400"}`}
          >
            <MdEdit size={14} />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-200">
              {editMode ? "Modo de edição ativo" : "Modo de visualização"}
            </p>
            <p className="text-[11px] text-slate-500">
              {editMode
                ? "Clique em qualquer texto para editar"
                : "Ative para personalizar textos e conteúdo"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setEditMode(!editMode)}
            className={`rounded-lg px-4 py-2 text-xs font-bold transition-all ${
              editMode
                ? "bg-slate-700 text-white hover:bg-slate-600"
                : "bg-yellow-400 text-black hover:brightness-110"
            }`}
          >
            {editMode ? "Concluir edição" : "Editar conteúdo"}
          </button>
          <Link
            href={`/simulacao/${segmentoId}`}
            className="rounded-lg border border-slate-700 px-4 py-2 text-xs font-bold text-slate-400 hover:text-white transition-colors"
          >
            Outro modelo
          </Link>
        </div>
      </div>

      {/* Template Preview */}
      <div className="w-full">{children}</div>

      {/* CTA Final */}
      <div className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-transparent p-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-yellow-500">
          Gostou do que viu?
        </p>
        <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
          Vamos criar o site <span className="text-yellow-400">de verdade</span> para você
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-400">
          Este é só um preview. O site real será 100% personalizado com o seu
          conteúdo, fotos e identidade visual.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={waLink}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-black text-black shadow-lg shadow-yellow-400/20 transition-all hover:brightness-110"
          >
            <FaWhatsapp />
            Quero meu site profissional
          </Link>
          <Link
            href="/simulacao"
            className="rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-bold text-slate-400 transition-colors hover:text-white"
          >
            Ver outros segmentos
          </Link>
        </div>
      </div>
    </div>
  );
}
