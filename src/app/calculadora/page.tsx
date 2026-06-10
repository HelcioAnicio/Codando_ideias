"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Search,
  TrendingUp,
  MapPin,
  DollarSign,
  User,
  Mail,
  Phone,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import {
  segmentosDados,
  ESTADOS,
  calcularPotencial,
  getSegmentoDados,
} from "@/data/pesquisas-brasil";
import { categorias } from "@/data/simulacao";

// ─── Tipos ────────────────────────────────────────────────────────────────────

type Step = "segmento" | "estado" | "ticket" | "contato" | "resultado";

interface FormState {
  segmentoId: string;
  segmentoNome: string;
  estadoSigla: string;
  estadoNome: string;
  ticketMedio: string; // string para o input, "" = usar default
  nome: string;
  email: string;
  telefone: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatCurrency(val: number) {
  return val.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function formatNumber(val: number) {
  return val.toLocaleString("pt-BR");
}

// ─── Componentes de passo ────────────────────────────────────────────────────

function StepSegmento({
  value,
  onChange,
  onNext,
}: {
  value: string;
  onChange: (id: string, nome: string) => void;
  onNext: () => void;
}) {
  const [search, setSearch] = useState("");
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  const filtered = search.trim()
    ? segmentosDados.filter((s) =>
        s.nome.toLowerCase().includes(search.toLowerCase()) ||
        s.categoria.toLowerCase().includes(search.toLowerCase())
      )
    : null;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-extrabold md:text-3xl">
          Qual é o seu segmento?
        </h2>
        <p className="mt-1 text-slate-400">
          Selecione o tipo de negócio mais próximo do seu.
        </p>
      </div>

      {/* Busca */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
        <input
          type="text"
          placeholder="Buscar segmento..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-slate-800 py-3 pl-9 pr-4 text-sm text-white placeholder-slate-500 outline-none focus:border-amber-300/50"
        />
      </div>

      {/* Resultados de busca */}
      {filtered ? (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => onChange(s.id, s.nome)}
              className={[
                "rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all",
                value === s.id
                  ? "border-amber-300 bg-amber-300/10 text-amber-200"
                  : "border-white/10 bg-slate-800 text-slate-300 hover:border-amber-300/40 hover:text-white",
              ].join(" ")}
            >
              <span className="text-xs text-slate-500">{s.categoria}</span>
              <p>{s.nome}</p>
            </button>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-3 py-4 text-center text-sm text-slate-500">
              Nenhum segmento encontrado.
            </p>
          )}
        </div>
      ) : (
        /* Categorias acordeão */
        <div className="flex flex-col gap-3">
          {categorias.map((cat) => (
            <div
              key={cat.id}
              className="overflow-hidden rounded-xl border border-white/10 bg-slate-800/60"
            >
              <button
                type="button"
                onClick={() =>
                  setExpandedCat(expandedCat === cat.id ? null : cat.id)
                }
                className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold text-white"
              >
                <span className="flex items-center gap-2">
                  <span>{cat.icon}</span> {cat.nome}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-slate-400 transition-transform ${expandedCat === cat.id ? "rotate-180" : ""}`}
                />
              </button>

              {expandedCat === cat.id && (
                <div className="grid grid-cols-1 gap-2 border-t border-white/10 p-3 sm:grid-cols-2">
                  {cat.segmentos.map((seg) => {
                    const hasDados = segmentosDados.some((s) => s.id === seg.id);
                    return (
                      <button
                        key={seg.id}
                        type="button"
                        disabled={!hasDados}
                        onClick={() => {
                          onChange(seg.id, seg.nome);
                        }}
                        className={[
                          "rounded-lg px-4 py-2.5 text-left text-sm transition-all",
                          value === seg.id
                            ? "bg-amber-300/20 font-semibold text-amber-200"
                            : hasDados
                            ? "text-slate-300 hover:bg-white/5 hover:text-white"
                            : "cursor-not-allowed text-slate-600",
                        ].join(" ")}
                      >
                        {value === seg.id && (
                          <Check size={12} className="mr-1 inline text-amber-300" />
                        )}
                        {seg.nome}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        disabled={!value}
        onClick={onNext}
        className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-bold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Continuar <ArrowRight size={16} />
      </button>
    </div>
  );
}

function StepEstado({
  value,
  onChange,
  onNext,
  onBack,
}: {
  value: string;
  onChange: (sigla: string, nome: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-extrabold md:text-3xl">
          Em qual estado você atua?
        </h2>
        <p className="mt-1 text-slate-400">
          Usamos isso para estimar o volume de buscas na sua região.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {ESTADOS.map((est) => (
          <button
            key={est.sigla}
            type="button"
            onClick={() => onChange(est.sigla, est.nome)}
            className={[
              "flex flex-col items-center rounded-xl border py-3 text-sm font-medium transition-all",
              value === est.sigla
                ? "border-amber-300 bg-amber-300/10 text-amber-200"
                : "border-white/10 bg-slate-800 text-slate-300 hover:border-amber-300/30 hover:text-white",
            ].join(" ")}
          >
            <span className="text-lg font-black">{est.sigla}</span>
            <span className="mt-0.5 text-xs text-slate-400">{est.nome}</span>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-4 font-semibold text-slate-300 transition hover:bg-white/5"
        >
          <ArrowLeft size={16} /> Voltar
        </button>
        <button
          type="button"
          disabled={!value}
          onClick={onNext}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-bold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continuar <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function StepTicket({
  value,
  segmentoId,
  onChange,
  onNext,
  onBack,
}: {
  value: string;
  segmentoId: string;
  onChange: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const dados = getSegmentoDados(segmentoId);
  const defaultTicket = dados?.ticketMedioDefault ?? 300;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-extrabold md:text-3xl">
          Qual é o seu ticket médio?
        </h2>
        <p className="mt-1 text-slate-400">
          O valor médio que um cliente paga por serviço/produto. Usamos isso
          para calcular a receita que você pode estar perdendo.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-300/20 bg-amber-300/5 p-5">
        <p className="mb-3 text-sm text-amber-200/80">
          💡 Esse campo é <strong>opcional</strong>. Se preferir, usaremos o
          ticket médio típico do seu segmento:{" "}
          <strong>{formatCurrency(defaultTicket)}</strong>
        </p>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-400">
            R$
          </span>
          <input
            type="number"
            min={1}
            placeholder={String(defaultTicket)}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-800 py-4 pl-10 pr-4 text-lg font-bold text-white placeholder-slate-600 outline-none focus:border-amber-300/50"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-4 font-semibold text-slate-300 transition hover:bg-white/5"
        >
          <ArrowLeft size={16} /> Voltar
        </button>
        <button
          type="button"
          onClick={onNext}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-bold text-slate-950 transition hover:brightness-110"
        >
          Continuar <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function StepContato({
  form,
  onChange,
  onSubmit,
  onBack,
  loading,
}: {
  form: { nome: string; email: string; telefone: string };
  onChange: (field: keyof typeof form, value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
  loading: boolean;
}) {
  const valid = form.nome.trim() && form.email.includes("@") && form.telefone.trim().length >= 8;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-extrabold md:text-3xl">
          Para quem enviamos o diagnóstico?
        </h2>
        <p className="mt-1 text-slate-400">
          Seu relatório é gerado na hora — 100% gratuito, sem compromisso e sem
          spam. Não entraremos em contato a menos que você queira.
        </p>
      </div>

      <div className="rounded-2xl border border-green-500/20 bg-green-500/5 px-5 py-4 text-sm text-green-300">
        ✅ <strong>Entrega imediata:</strong> após preencher, seu diagnóstico
        aparece na tela agora mesmo.
      </div>

      <div className="flex flex-col gap-4">
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input
            type="text"
            placeholder="Seu nome"
            required
            value={form.nome}
            onChange={(e) => onChange("nome", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-800 py-4 pl-11 pr-4 text-white placeholder-slate-500 outline-none focus:border-amber-300/50"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input
            type="email"
            placeholder="Seu e-mail"
            required
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-800 py-4 pl-11 pr-4 text-white placeholder-slate-500 outline-none focus:border-amber-300/50"
          />
        </div>
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input
            type="tel"
            placeholder="Celular / WhatsApp"
            required
            value={form.telefone}
            onChange={(e) => onChange("telefone", e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-800 py-4 pl-11 pr-4 text-white placeholder-slate-500 outline-none focus:border-amber-300/50"
          />
        </div>
      </div>

      <p className="text-xs text-slate-600">
        Seus dados são usados apenas para personalizar o diagnóstico. Não
        compartilhamos com terceiros.
      </p>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 rounded-xl border border-white/10 px-6 py-4 font-semibold text-slate-300 transition hover:bg-white/5"
        >
          <ArrowLeft size={16} /> Voltar
        </button>
        <button
          type="button"
          disabled={!valid || loading}
          onClick={onSubmit}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-400 px-6 py-4 font-bold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {loading ? (
            "Calculando..."
          ) : (
            <>
              <Sparkles size={16} /> Ver meu diagnóstico
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function StepResultado({ form }: { form: FormState }) {
  const dados = getSegmentoDados(form.segmentoId);
  if (!dados) return null;

  const ticket =
    form.ticketMedio.trim() !== ""
      ? parseFloat(form.ticketMedio)
      : dados.ticketMedioDefault;

  const buscas = dados.buscasPorEstado[form.estadoSigla] ?? 0;
  const { leadsAlcancados, clientesConvertidos, receitaEstimada } = calcularPotencial(
    buscas,
    ticket,
    dados.taxaConversao
  );

  const whatsappMsg = encodeURIComponent(
    `Olá! Me chamo ${form.nome} e acabei de ver meu diagnóstico de visibilidade:\n\n` +
      `📍 Segmento: ${form.segmentoNome}\n` +
      `🗺 Estado: ${form.estadoNome}\n` +
      `🔍 Buscas/mês: ${formatNumber(buscas)}\n` +
      `👥 Leads potenciais: ${formatNumber(leadsAlcancados)}\n` +
      `✅ Clientes estimados: ${formatNumber(clientesConvertidos)}\n` +
      `💰 Receita potencial/mês: ${formatCurrency(receitaEstimada)}\n\n` +
      `Quero saber como ter um site que me permita capturar esses clientes!`
  );

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300/70">
          Diagnóstico de {form.nome}
        </p>
        <h2 className="mt-1 text-2xl font-extrabold md:text-3xl">
          {form.segmentoNome} · {form.estadoNome}
        </h2>
      </div>

      {/* Cards de métricas */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-800 p-6 text-center">
          <Search className="mx-auto mb-2 text-slate-400" size={24} />
          <span className="text-3xl font-black text-white">
            {formatNumber(buscas)}
          </span>
          <span className="text-sm text-slate-400">
            buscas/mês no Google
          </span>
        </div>

        <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-slate-800 p-6 text-center">
          <TrendingUp className="mx-auto mb-2 text-slate-400" size={24} />
          <span className="text-3xl font-black text-white">
            {formatNumber(leadsAlcancados)}
          </span>
          <span className="text-sm text-slate-400">
            visitantes potenciais c/ site
          </span>
        </div>

        <div className="flex flex-col gap-2 rounded-2xl border border-amber-300/30 bg-amber-300/5 p-6 text-center">
          <DollarSign className="mx-auto mb-2 text-amber-300" size={24} />
          <span className="text-3xl font-black text-amber-300">
            {formatCurrency(receitaEstimada)}
          </span>
          <span className="text-sm text-slate-400">
            receita potencial/mês
          </span>
        </div>
      </div>

      {/* Explicação passo a passo */}
      <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-6 text-sm leading-relaxed text-slate-300">
        <p className="mb-4 font-bold text-white">Como chegamos a esse número?</p>
        <ol className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-300">1</span>
            <span>
              <strong>{formatNumber(buscas)} pessoas</strong> buscam por{" "}
              <em>{form.segmentoNome}</em> em {form.estadoNome} todo mês no
              Google.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold text-slate-300">2</span>
            <span>
              Com um site bem posicionado, aproximadamente{" "}
              <strong>{(dados.taxaConversao * 100).toFixed(1)}%</strong> dessas
              pessoas chegaria ao seu site —{" "}
              <strong>{formatNumber(leadsAlcancados)} visitantes/mês</strong>.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/30 text-xs font-bold text-amber-300">3</span>
            <span>
              Desses visitantes, sendo conservador, apenas{" "}
              <strong>10% fechariam negócio</strong> — ou seja,{" "}
              <strong>{formatNumber(clientesConvertidos)} novos clientes/mês</strong>.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-400/30 text-xs font-bold text-amber-300">4</span>
            <span>
              Com ticket médio de <strong>{formatCurrency(ticket)}</strong>,
              isso representa{" "}
              <strong className="text-amber-300">{formatCurrency(receitaEstimada)}/mês</strong>{" "}
              que você pode estar deixando de faturar.
            </span>
          </li>
        </ol>
        <p className="mt-4 text-xs text-slate-500">
          * Estimativa conservadora baseada em dados médios de mercado. Resultados
          reais variam conforme SEO, qualidade do site e sazonalidade.
        </p>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-amber-300/20 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-center">
        <p className="mb-1 text-lg font-bold text-white">
          Pronto para capturar esses clientes?
        </p>
        <p className="mb-5 text-sm text-slate-400">
          Um site estratégico pode começar a atrair leads para o seu negócio
          ainda esse mês.
        </p>
        <a
          href={`https://wa.me/5531991973835?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-7 py-4 font-bold text-slate-950 shadow-lg transition hover:brightness-110"
        >
          Quero um site que me encontre →
        </a>
      </div>

      {/* Voltar */}
      <Link
        href="/"
        className="flex items-center justify-center gap-1 text-sm text-slate-500 transition hover:text-slate-300"
      >
        <ArrowLeft size={14} /> Voltar para o início
      </Link>
    </div>
  );
}

// ─── Progresso ────────────────────────────────────────────────────────────────

const STEPS: { id: Step; label: string; icon: React.ReactNode }[] = [
  { id: "segmento", label: "Segmento", icon: <Search size={14} /> },
  { id: "estado", label: "Estado", icon: <MapPin size={14} /> },
  { id: "ticket", label: "Ticket", icon: <DollarSign size={14} /> },
  { id: "contato", label: "Contato", icon: <User size={14} /> },
  { id: "resultado", label: "Diagnóstico", icon: <TrendingUp size={14} /> },
];

function ProgressBar({ current }: { current: Step }) {
  const currentIdx = STEPS.findIndex((s) => s.id === current);
  return (
    <div className="flex items-center gap-2">
      {STEPS.map((step, i) => (
        <div key={step.id} className="flex items-center gap-2">
          <div
            className={[
              "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all",
              i < currentIdx
                ? "bg-amber-400 text-slate-950"
                : i === currentIdx
                ? "border-2 border-amber-400 bg-amber-400/10 text-amber-300"
                : "border border-white/10 bg-slate-800 text-slate-600",
            ].join(" ")}
          >
            {i < currentIdx ? <Check size={12} /> : step.icon}
          </div>
          <span
            className={[
              "hidden text-xs font-medium sm:block",
              i === currentIdx ? "text-white" : "text-slate-600",
            ].join(" ")}
          >
            {step.label}
          </span>
          {i < STEPS.length - 1 && (
            <div
              className={[
                "h-px w-8 transition-all",
                i < currentIdx ? "bg-amber-400/60" : "bg-white/10",
              ].join(" ")}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────

export default function CalculadoraPage() {
  const [step, setStep] = useState<Step>("segmento");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormState>({
    segmentoId: "",
    segmentoNome: "",
    estadoSigla: "",
    estadoNome: "",
    ticketMedio: "",
    nome: "",
    email: "",
    telefone: "",
  });

  function updateForm(patch: Partial<FormState>) {
    setForm((prev) => ({ ...prev, ...patch }));
  }

  function handleSubmit() {
    setLoading(true);
    // Simula um pequeno delay para feedback visual
    setTimeout(() => {
      setLoading(false);
      setStep("resultado");
    }, 900);
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Header */}
      <header className="border-b border-white/5 px-6 py-4">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={14} /> Voltar
          </Link>
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-300/60">
            Diagnóstico de Visibilidade
          </p>
          <div className="w-16" />
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-10">
        {step !== "resultado" && (
          <div className="mb-10">
            <ProgressBar current={step} />
          </div>
        )}

        {step === "segmento" && (
          <StepSegmento
            value={form.segmentoId}
            onChange={(id, nome) => updateForm({ segmentoId: id, segmentoNome: nome })}
            onNext={() => setStep("estado")}
          />
        )}

        {step === "estado" && (
          <StepEstado
            value={form.estadoSigla}
            onChange={(sigla, nome) =>
              updateForm({ estadoSigla: sigla, estadoNome: nome })
            }
            onNext={() => setStep("ticket")}
            onBack={() => setStep("segmento")}
          />
        )}

        {step === "ticket" && (
          <StepTicket
            value={form.ticketMedio}
            segmentoId={form.segmentoId}
            onChange={(v) => updateForm({ ticketMedio: v })}
            onNext={() => setStep("contato")}
            onBack={() => setStep("estado")}
          />
        )}

        {step === "contato" && (
          <StepContato
            form={{ nome: form.nome, email: form.email, telefone: form.telefone }}
            onChange={(field, value) => updateForm({ [field]: value })}
            onSubmit={handleSubmit}
            onBack={() => setStep("ticket")}
            loading={loading}
          />
        )}

        {step === "resultado" && <StepResultado form={form} />}
      </main>
    </div>
  );
}
