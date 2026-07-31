"use client";

import { useState } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "5531991973835";

type FormData = {
  nome: string;
  whatsapp: string;
  negocio: string;
  siteInstagram: string;
};

const initialForm: FormData = { nome: "", whatsapp: "", negocio: "", siteInstagram: "" };

function validate(form: FormData) {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (!form.nome.trim()) errors.nome = "Informe seu nome.";
  if (form.whatsapp.replace(/\D/g, "").length < 10)
    errors.whatsapp = "Informe o WhatsApp com DDD (ex: 31 9 1234-5678).";
  if (!form.negocio.trim()) errors.negocio = "Informe o nome do seu negócio.";
  return errors;
}

function inputClass(hasError: boolean) {
  return [
    "w-full rounded-xl border bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none transition-colors",
    hasError ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-amber-300/60",
  ].join(" ");
}

export const DiagnosticoForm = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const errors = validate(form);
  const allValid = Object.keys(errors).length === 0;

  function blur(field: keyof FormData) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ nome: true, whatsapp: true, negocio: true, siteInstagram: true });
    if (!allValid) return;

    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/leads/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(data.error ?? "Não foi possível registrar seu diagnóstico. Tente novamente.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Sem conexão com o servidor. Verifique sua internet e tente novamente.");
    }
  }

  if (status === "success") {
    const whatsappMsg = encodeURIComponent(
      `Olá! Me chamo ${form.nome}, tenho o negócio "${form.negocio}" e acabei de solicitar um diagnóstico gratuito de tráfego pago pelo site.`,
    );

    return (
      <div
        role="status"
        className="flex flex-col items-center gap-5 rounded-2xl border border-green-500/30 bg-green-500/5 p-8 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-green-400" aria-hidden="true" />
        <div>
          <p className="text-xl font-bold text-white">
            Recebemos seu pedido, {form.nome.split(" ")[0]}!
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            Próximo passo: nossa equipe vai analisar o {form.negocio} e te chamar no
            WhatsApp em até 24h com os primeiros números do seu diagnóstico. Se
            quiser adiantar o assunto, chama a gente agora:
          </p>
        </div>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-500"
        >
          <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
          Falar agora no WhatsApp
        </a>
        <Link href="/" className="text-xs text-slate-500 underline transition hover:text-slate-300">
          Voltar para a home
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1">
        <label htmlFor="nome" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Seu nome
        </label>
        <input
          id="nome"
          type="text"
          autoComplete="name"
          value={form.nome}
          onChange={(e) => setForm((p) => ({ ...p, nome: e.target.value }))}
          onBlur={() => blur("nome")}
          className={inputClass(!!(touched.nome && errors.nome))}
          aria-invalid={!!(touched.nome && errors.nome)}
        />
        {touched.nome && errors.nome && <p className="text-xs text-red-400">{errors.nome}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="whatsapp" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          WhatsApp (com DDD)
        </label>
        <input
          id="whatsapp"
          type="tel"
          autoComplete="tel"
          value={form.whatsapp}
          onChange={(e) => setForm((p) => ({ ...p, whatsapp: e.target.value }))}
          onBlur={() => blur("whatsapp")}
          className={inputClass(!!(touched.whatsapp && errors.whatsapp))}
          aria-invalid={!!(touched.whatsapp && errors.whatsapp)}
        />
        {touched.whatsapp && errors.whatsapp && (
          <p className="text-xs text-red-400">{errors.whatsapp}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="negocio" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Nome do seu negócio
        </label>
        <input
          id="negocio"
          type="text"
          value={form.negocio}
          onChange={(e) => setForm((p) => ({ ...p, negocio: e.target.value }))}
          onBlur={() => blur("negocio")}
          className={inputClass(!!(touched.negocio && errors.negocio))}
          aria-invalid={!!(touched.negocio && errors.negocio)}
        />
        {touched.negocio && errors.negocio && (
          <p className="text-xs text-red-400">{errors.negocio}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="siteInstagram" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Site ou Instagram atual <span className="normal-case text-slate-500">(opcional)</span>
        </label>
        <input
          id="siteInstagram"
          type="text"
          placeholder="@seunegocio ou seusite.com.br"
          value={form.siteInstagram}
          onChange={(e) => setForm((p) => ({ ...p, siteInstagram: e.target.value }))}
          className={inputClass(false)}
        />
      </div>

      {status === "error" && errorMsg && (
        <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-300">
          <span className="mt-0.5">⚠</span>
          <p>{errorMsg}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="studio-gold-surface mt-2 flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-bold transition hover:brightness-110 disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-900 border-t-transparent" />
            Enviando...
          </>
        ) : (
          "Quero meu diagnóstico gratuito →"
        )}
      </button>
      <p className="text-center text-xs text-slate-500">
        Sem compromisso. Você recebe uma análise real do seu negócio antes de decidir qualquer coisa.
      </p>
    </form>
  );
};
