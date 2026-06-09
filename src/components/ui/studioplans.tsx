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
      "Ideal para apresentar seu produto ou serviço com foco em conversão. Uma página estratégica, rápida e otimizada para capturar leads.",
    items: [
      "3 templates prontos por segmento",
      "Personalização de texto e logo",
      "Escolha da paleta de cores",
      "Domínio e hospedagem inclusos",
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
      "Para empresas que precisam de mais presença. Site com múltiplas páginas, blog e estrutura completa para posicionamento de marca.",
    items: [
      "Até 6 páginas + Blog",
      "Personalização de texto e logo",
      "Escolha da paleta de cores",
      "Domínio e hospedagem inclusos",
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

const segments = ["Advogados", "Clínicas", "Barbearias", "Restaurantes"];

type FormData = { name: string; email: string; phone: string };

function ContactForm({ planName }: { planName: string }) {
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.name} e tenho interesse no plano *${planName}*.\n\nE-mail: ${form.email}\nTelefone: ${form.phone}\n\nGostaria de saber mais detalhes!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
      <input
        required
        type="text"
        placeholder="Seu nome"
        value={form.name}
        onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
        className="rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-amber-300/60"
      />
      <input
        required
        type="email"
        placeholder="Seu e-mail"
        value={form.email}
        onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        className="rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-amber-300/60"
      />
      <input
        required
        type="tel"
        placeholder="Seu telefone / WhatsApp"
        value={form.phone}
        onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
        className="rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-amber-300/60"
      />
      <button
        type="submit"
        className="studio-gold-surface mt-2 rounded-xl px-5 py-4 font-bold text-slate-950 transition hover:brightness-110"
      >
        Quero um site personalizado →
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
                  ? "studio-gold-surface text-slate-950"
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
                  ? "studio-gold-surface text-slate-950"
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
                    "absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300",
                    billing === "anual" ? "translate-x-8" : "translate-x-1",
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
            <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
              {subscriptionPlans.map((plan) => (
                <article
                  key={plan.id}
                  className={[
                    "relative flex h-full flex-col rounded-[1.75rem] border p-8",
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

                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

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

                  {/* Landing page: templates + contractual note */}
                  {plan.id === "landing" && (
                    <>
                      <div className="mt-6">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          Templates por segmento
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
                        </div>
                      </div>

                      {/* Contractual note */}
                      <p className="mt-4 rounded-xl border border-slate-700/60 bg-slate-800/60 px-4 py-3 text-xs text-slate-400">
                        📄 Tudo é feito contratualmente — o modelo escolhido, personalizações e
                        prazos ficam formalizados antes do início do trabalho.
                      </p>

                      {/* Link to model selection */}
                      <Link
                        href="/simulacao"
                        className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-dashed border-slate-600 px-4 py-3 text-xs font-semibold text-slate-300 transition-all hover:border-yellow-500/50 hover:bg-yellow-500/5 hover:text-yellow-400"
                      >
                        🎨 Escolher o estilo do modelo →
                      </Link>
                    </>
                  )}

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Olá! Tenho interesse no plano de Assinatura *${plan.name}* (${billing}). Podemos conversar?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "mt-6 block rounded-xl px-5 py-4 text-center font-bold transition",
                      plan.featured
                        ? "studio-gold-surface text-slate-950 hover:brightness-110"
                        : "border border-slate-700 text-white hover:border-amber-300/50 hover:bg-white/5",
                    ].join(" ")}
                  >
                    Quero assinar →
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-slate-500">
              * O plano Landing Page é baseado em templates prontos. Textos, imagens,
              serviços e paleta de cores são personalizados com o conteúdo fornecido pelo cliente.
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
                <p className="mt-2 text-sm text-slate-400">{plan.description}</p>

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
