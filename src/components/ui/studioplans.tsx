"use client";

import Link from "next/link";
import { useState } from "react";
import { Check } from "lucide-react";

const WHATSAPP_NUMBER = "5531991973835";

const subscriptionPlans = [
  {
    id: "landing",
    name: "Landing Page",
    monthly: 80,
    annual: 50,
    description:
      "Página estratégica, rápida e otimizada para converter visitantes em clientes. Ideal para negócios que querem capturar leads e aparecer no Google.",
    items: [
      "Template pronto por segmento",
      "Personalização de texto e logo",
      "Escolha da paleta de cores",
      "Hospedagem inclusa",
      "Domínio '.com.br'",
      "Suporte via WhatsApp",
    ],
    featured: false,
  },
  {
    id: "institucional",
    name: "Institucional",
    monthly: 140,
    annual: 100,
    description:
      "Presença digital completa para sua marca. Site com múltiplas páginas, blog e estrutura pensada para gerar autoridade e ranqueamento orgânico.",
    items: [
      "Até 6 páginas + Blog",
      "Personalização de texto e logo",
      "Escolha da paleta de cores",
      "Hospedagem inclusa",
      "Domínio não incluso",
      "Suporte via WhatsApp",
    ],
    featured: true,
  },
];

const customPlans = [
  {
    id: "custom-landing",
    name: "Landing Page",
    price: "A partir de R$ 500",
    description:
      "Uma landing page 100% personalizada, desenvolvida do zero conforme a identidade e os objetivos do seu negócio. Design exclusivo, copywriting estratégico e alta performance.",
    items: [
      "Design exclusivo sob medida",
      "Copywriting persuasivo",
      "Integração com formulários e CRM",
      "Otimização para SEO e velocidade",
      "Entrega após aprovação do contrato",
    ],
  },
];

const segments = ["Clínicas", "Barbearias", "Restaurantes"];

type FormData = { name: string; email: string; phone: string };

function validateContato(name: string, email: string, phone: string) {
  const errors: { name?: string; email?: string; phone?: string } = {};
  if (!name.trim()) errors.name = "Informe seu nome.";
  if (!email.includes("@") || !email.includes("."))
    errors.email = "Digite um e-mail válido (ex: nome@email.com).";
  if (phone.replace(/\D/g, "").length < 10)
    errors.phone = "Informe o celular com DDD (ex: 31 9 1234-5678).";
  return errors;
}

function ContactForm({ planName }: { planName: string }) {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const errors = validateContato(form.name, form.email, form.phone);
  const allValid = Object.keys(errors).length === 0;

  function blur(field: string) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  function inputClass(field: string) {
    const hasError = touched[field] && errors[field as keyof typeof errors];
    return [
      "rounded-xl border px-4 py-3 text-sm text-white placeholder-slate-400 outline-none bg-slate-800 transition-colors w-full",
      hasError ? "border-red-500/60 focus:border-red-500" : "border-white/10 focus:border-amber-300/60",
    ].join(" ");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, phone: true });
    if (!allValid) return;

    setStatus("loading");
    setErrorMsg(null);

    try {
      const res = await fetch("/api/leads/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plano: planName, nome: form.name, email: form.email, telefone: form.phone }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setStatus("error");
        setErrorMsg(data.error ?? "Não foi possível registrar seu contato. Tente novamente.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Sem conexão com o servidor. Verifique sua internet e tente novamente.");
      return;
    }

    // Abre WhatsApp após sucesso
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.name} e tenho interesse no plano *${planName}*.\n\nE-mail: ${form.email}\nTelefone: ${form.phone}\n\nGostaria de saber mais detalhes!`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }

  // Estado de sucesso
  if (status === "success") {
    return (
      <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-green-500/30 bg-green-500/5 p-6 text-center">
        <span className="text-3xl">✅</span>
        <div>
          <p className="font-bold text-green-300">Tudo certo, {form.name.split(" ")[0]}!</p>
          <p className="mt-1 text-sm text-slate-400">
            Seu contato foi registrado. O WhatsApp deve ter aberto — se não abriu,{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Interesse no plano ${planName}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 underline"
            >
              clique aqui
            </a>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "" }); setTouched({}); }}
          className="text-xs text-slate-500 underline transition hover:text-slate-300"
        >
          Enviar outro contato
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
      {/* Nome */}
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Seu nome"
          value={form.name}
          onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          onBlur={() => blur("name")}
          className={inputClass("name")}
        />
        {touched.name && errors.name && (
          <p className="ml-1 text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <input
          type="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          onBlur={() => blur("email")}
          className={inputClass("email")}
        />
        {touched.email && errors.email && (
          <p className="ml-1 text-xs text-red-400">{errors.email}</p>
        )}
      </div>

      {/* Telefone */}
      <div className="flex flex-col gap-1">
        <input
          type="tel"
          placeholder="Telefone / WhatsApp (com DDD)"
          value={form.phone}
          onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          onBlur={() => blur("phone")}
          className={inputClass("phone")}
        />
        {touched.phone && errors.phone && (
          <p className="ml-1 text-xs text-red-400">{errors.phone}</p>
        )}
      </div>

      {/* Erro de envio */}
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
          "Quero um site personalizado →"
        )}
      </button>
    </form>
  );
}

export const StudioPlans = () => {
  const [tab, setTab] = useState<"assinatura" | "personalizado">("assinatura");
  const [billing, setBilling] = useState<"mensal" | "anual">("mensal");

  return (
    <section id="planos" className="w-full px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Planos & Valores
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            A solução certa para cada{" "}
            <span className="studio-gold-text">momento do negócio.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Escolha entre templates prontos com assinatura mensal ou um projeto
            100% personalizado para sua marca.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mb-10 flex justify-center">
          <div className="flex rounded-2xl border border-white/10 bg-slate-900 p-1">
            <button
              onClick={() => setTab("assinatura")}
              className={[
                "rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-200",
                tab === "assinatura"
                  ? "studio-gold-surface text-popover-foreground"
                  : "text-slate-400 hover:text-white",
              ].join(" ")}
            >
              Assinatura
            </button>
            <button
              onClick={() => setTab("personalizado")}
              className={[
                "rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-200",
                tab === "personalizado"
                  ? "studio-gold-surface text-popover-foreground"
                  : "text-slate-400 hover:text-white",
              ].join(" ")}
            >
              Personalizado
            </button>
          </div>
        </div>

        {/* ASSINATURA */}
        {tab === "assinatura" && (
          <div>
            {/* Billing toggle */}
            <div className="mb-10 flex items-center justify-center gap-4">
              <span
                className={
                  billing === "mensal"
                    ? "font-semibold text-white"
                    : "text-slate-500"
                }
              >
                Mensal
              </span>
              <button
                type="button"
                onClick={() =>
                  setBilling((b) => (b === "mensal" ? "anual" : "mensal"))
                }
                className={[
                  "relative h-7 w-14 rounded-full transition-colors duration-300",
                  billing === "anual" ? "bg-amber-400" : "bg-slate-700",
                ].join(" ")}
              >
                <span
                  className={[
                    "absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300",
                    billing === "anual"
                      ? "translate-x-[140%]"
                      : "translate-x-0",
                  ].join(" ")}
                />
              </button>
              <span
                className={
                  billing === "anual"
                    ? "font-semibold text-white"
                    : "text-slate-500"
                }
              >
                Anual{" "}
                <span className="ml-1 rounded-full bg-amber-400/20 px-2 py-0.5 text-xs font-bold text-amber-300">
                  Economize
                </span>
              </span>
            </div>

            {/* Plans grid */}
            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
              {subscriptionPlans.map((plan) => (
                <article
                  key={plan.id}
                  className={[
                    "relative flex h-full flex-col rounded-[1.75rem] border p-10",
                    plan.featured
                      ? "border-amber-300 bg-slate-800 shadow-2xl shadow-amber-950/20"
                      : "border-white/10 bg-slate-900",
                  ].join(" ")}
                >
                  {plan.featured && (
                    <span className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-[1.75rem] bg-amber-300 px-4 py-1 text-xs font-black uppercase tracking-[0.25em] text-slate-950">
                      Popular
                    </span>
                  )}

                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {plan.description}
                  </p>

                  <div className="mt-6">
                    <span className="text-4xl font-black text-white">
                      R$ {billing === "mensal" ? plan.monthly : plan.annual}
                    </span>
                    <span className="ml-2 text-slate-400">/ mês</span>
                    {billing === "anual" && (
                      <p className="mt-1 text-xs text-amber-300/70">
                        Cobrado anualmente · sem fidelidade forçada
                      </p>
                    )}
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col gap-3">
                    {plan.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-slate-200"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Landing page: segment tags + model selector */}
                  {plan.id === "landing" && (
                    <div className="mt-6 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-foreground/50">
                        Prontos por segmento
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {segments.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-amber-300/20 bg-amber-300/5 px-3 py-1 text-xs text-amber-200"
                          >
                            {s}
                          </span>
                        ))}
                        <span className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-400">
                          + outros
                        </span>
                      </div>
                      <Link
                        href="/simulacao"
                        className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-slate-600 px-4 py-3 text-xs font-semibold text-slate-300 transition-all hover:border-yellow-500/50 hover:bg-yellow-500/5 hover:text-yellow-400"
                      >
                        🎨 Ver modelos disponíveis →
                      </Link>
                    </div>
                  )}

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Olá! Tenho interesse no plano de Assinatura *${plan.name}* (${billing}). Podemos conversar?`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "mt-6 block rounded-xl px-5 py-4 text-center font-bold transition",
                      plan.featured
                        ? "studio-gold-surface transition-all duration-500 hover:underline hover:underline-offset-2"
                        : "border border-amber-300/40 bg-amber-300/10 text-amber-200 hover:bg-amber-300/20 hover:text-white",
                    ].join(" ")}
                  >
                    Quero assinar →
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-foreground/70">
              * Textos, imagens, serviços e paleta de cores são personalizados
              com o conteúdo fornecido pelo cliente.
            </p>
          </div>
        )}

        {/* PERSONALIZADO */}
        {tab === "personalizado" && (
          <div className="mx-auto max-w-xl">
            {customPlans.map((plan) => (
              <article
                key={plan.id}
                className="rounded-[1.75rem] border border-white/10 bg-slate-900 p-8"
              >
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-slate-400">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <span className="text-3xl font-black text-white">
                    {plan.price}
                  </span>
                </div>

                <ul className="mt-6 flex flex-col gap-3">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-slate-200"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="mb-4 text-sm font-semibold text-white">
                    Preencha para entrar em contato:
                  </p>
                  <ContactForm planName={plan.name} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
