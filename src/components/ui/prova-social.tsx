import { ImageIcon, Quote, ShieldCheck } from "lucide-react";

/**
 * SEÇÃO DE PROVA E CREDIBILIDADE — placeholders marcados.
 *
 * Antes de publicar em produção, substitua:
 * 1. `cases`      → resultados reais de clientes (custo por lead, leads/mês, print do dashboard)
 * 2. `selos`       → substituir os placeholders pelos badges reais assim que certificados
 *                    (ex: /public/selo-google-ads.svg, /public/selo-meta-blueprint.svg) via next/image
 * 3. `depoimentos` → depoimentos reais de clientes (nome, negócio, resultado)
 * 4. Bloco "Antes/Depois" → trocar os números ou imagens de exemplo por um caso real
 *
 * Nunca publique números, nomes ou logos fictícios como se fossem reais.
 */

const cases = [
  {
    id: "case-1",
    // PLACEHOLDER: troque por um cliente real
    cliente: "[CASE: nome do cliente]",
    custoPorLead: "[R$ __]",
    leadsPorMes: "[__ leads/mês]",
  },
  {
    id: "case-2",
    cliente: "[CASE: nome do cliente]",
    custoPorLead: "[R$ __]",
    leadsPorMes: "[__ leads/mês]",
  },
  {
    id: "case-3",
    cliente: "[CASE: nome do cliente]",
    custoPorLead: "[R$ __]",
    leadsPorMes: "[__ leads/mês]",
  },
];

const selos = [
  { id: "google-ads", nome: "Google Ads" },
  { id: "meta-blueprint", nome: "Meta Blueprint" },
];

const depoimentos = [
  {
    id: "depoimento-1",
    // PLACEHOLDER: troque por um depoimento real do cliente
    texto: "[DEPOIMENTO: cole aqui a fala do cliente sobre o resultado obtido]",
    nome: "[nome do cliente]",
    negocio: "[negócio do cliente]",
  },
  {
    id: "depoimento-2",
    texto: "[DEPOIMENTO: cole aqui a fala do cliente sobre o resultado obtido]",
    nome: "[nome do cliente]",
    negocio: "[negócio do cliente]",
  },
];

export const ProvaSocial = () => {
  return (
    <section id="prova" aria-label="Prova e credibilidade" className="w-full px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Prova, não promessa
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">Resultado de quem já roda com a gente.</h2>
        </div>

        {/* Selos de certificação */}
        <div className="mb-16 flex flex-wrap items-center gap-4">
          {selos.map((selo) => (
            <div
              key={selo.id}
              className="flex items-center gap-2 rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-3 text-sm text-slate-400"
            >
              <ShieldCheck className="h-5 w-5 text-amber-300/70" aria-hidden="true" />
              {/* PLACEHOLDER: trocar por <Image src="/selo-..." /> quando o selo real existir */}
              <span>[selo: {selo.nome}]</span>
            </div>
          ))}
        </div>

        {/* Cases */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.id}
              className="flex flex-col gap-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6"
            >
              <div className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed border-white/10 bg-slate-900/60 text-slate-600">
                <ImageIcon className="h-8 w-8" aria-hidden="true" />
                {/* PLACEHOLDER: trocar por <Image src="/cases/..." alt="Print do dashboard de [cliente]" fill /> */}
              </div>
              <p className="text-sm font-bold text-slate-300">{c.cliente}</p>
              <div className="flex gap-6 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Custo por lead</p>
                  <p className="font-black text-amber-300">{c.custoPorLead}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">Volume</p>
                  <p className="font-black text-amber-300">{c.leadsPorMes}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Depoimentos */}
        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {depoimentos.map((d) => (
            <article
              key={d.id}
              className="flex flex-col gap-4 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6"
            >
              <Quote className="h-6 w-6 text-amber-300/60" aria-hidden="true" />
              <p className="italic leading-relaxed text-slate-300">{d.texto}</p>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                {d.nome} · {d.negocio}
              </p>
            </article>
          ))}
        </div>

        {/* Antes / Depois */}
        <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            Antes / Depois
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2 rounded-xl border border-dashed border-white/10 bg-slate-900/60 p-6 text-center">
              <p className="text-xs uppercase tracking-wider text-slate-500">Antes</p>
              {/* PLACEHOLDER: [imagem antes] ou número antes (ex: "3 leads/mês") */}
              <p className="text-2xl font-black text-slate-400">[número ou imagem antes]</p>
            </div>
            <div className="flex flex-col gap-2 rounded-xl border border-dashed border-amber-300/20 bg-slate-900/60 p-6 text-center">
              <p className="text-xs uppercase tracking-wider text-amber-300/70">Depois</p>
              {/* PLACEHOLDER: [imagem depois] ou número depois (ex: "42 leads/mês") */}
              <p className="text-2xl font-black text-amber-300">[número ou imagem depois]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
