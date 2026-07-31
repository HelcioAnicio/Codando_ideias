"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, MessageSquarePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { StarRatingDisplay, StarRatingInput } from "@/components/ui/star-rating";

type Avaliacao = {
  id: number;
  nome: string;
  empresa: string | null;
  avaliacao: string;
  nota: number;
  criadoEm: string;
};

const AVATAR_COLORS = [
  "bg-amber-400/20 text-amber-300",
  "bg-emerald-400/20 text-emerald-300",
  "bg-sky-400/20 text-sky-300",
  "bg-rose-400/20 text-rose-300",
  "bg-violet-400/20 text-violet-300",
];

function avatarColor(nome: string) {
  const code = nome.charCodeAt(0) || 0;
  return AVATAR_COLORS[code % AVATAR_COLORS.length];
}

const emptyForm = { nome: "", empresa: "", avaliacao: "", nota: 0 };

export const Reviews = () => {
  const [avaliacoes, setAvaliacoes] = useState<Avaliacao[] | null>(null);
  const [loadError, setLoadError] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const res = await fetch("/api/avaliacoes");
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!active) return;
        setAvaliacoes(data.avaliacoes ?? []);
        setLoadError(false);
      } catch {
        if (!active) return;
        setLoadError(true);
        setAvaliacoes([]);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const updateActiveIndex = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let closestDistance = Infinity;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(itemCenter - center);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    updateActiveIndex();
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      container.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [updateActiveIndex, avaliacoes]);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    const item = itemRefs.current[index];
    if (!container || !item) return;

    const offset = item.offsetLeft - (container.clientWidth - item.clientWidth) / 2;
    container.scrollTo({ left: offset, behavior: "smooth" });
  };

  async function handleSubmit() {
    const nome = form.nome.trim();
    const avaliacao = form.avaliacao.trim();

    if (!nome) {
      setSubmitError("Informe seu nome.");
      return;
    }
    if (!avaliacao) {
      setSubmitError("Escreva sua avaliação.");
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/avaliacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome,
          empresa: form.empresa.trim(),
          avaliacao,
          nota: form.nota,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error ?? "Não foi possível enviar sua avaliação.");
        return;
      }

      setAvaliacoes((current) => [data.avaliacao, ...(current ?? [])]);
      setForm(emptyForm);
      setDialogOpen(false);

      requestAnimationFrame(() => scrollToIndex(0));
    } catch {
      setSubmitError("Não foi possível enviar sua avaliação. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  const hasReviews = (avaliacoes?.length ?? 0) > 0;

  return (
    <section
      className="mx-auto w-full bg-primary/20 py-10 lg:py-20"
      id="avaliacoes"
    >
      <div className="mx-auto max-w-6xl shadow-2xl min-[1040px]:rounded-3xl">
        <div className="relative overflow-hidden px-5 py-10 md:px-8 md:py-14 xl:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.08),transparent_24%),radial-gradient(circle_at_left,rgba(59,130,246,0.12),transparent_26%)] min-[1040px]:rounded-tl-3xl" />

          <div className="relative z-10 mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 px-4 py-1 text-xs uppercase tracking-[0.26em] text-secondary-foreground/80">
                Avaliações reais
              </span>
              <h2 className="mb-4 font-custom text-3xl font-bold leading-tight md:text-5xl">
                Quem já trabalhou com a gente
              </h2>
              <p className="max-w-2xl text-base leading-8 text-secondary-foreground/80 md:text-lg">
                Avaliações enviadas diretamente por clientes, publicadas em
                tempo real — sem curadoria, sem filtro.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setDialogOpen(true)}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-popover-foreground bg-gradient-to-br from-popover-foreground from-60% to-gray-200 px-5 py-4 text-sm font-bold uppercase tracking-wider text-primary shadow-lg transition-all hover:brightness-110"
            >
              <MessageSquarePlus className="h-4 w-4" />
              Deixar avaliação
            </button>
          </div>

          {!hasReviews && (
            <div className="relative z-10 rounded-[1.9rem] border border-dashed border-white/15 bg-white/[0.02] px-6 py-14 text-center">
              <p className="text-lg font-semibold text-popover-foreground">
                {loadError
                  ? "Não foi possível carregar as avaliações agora."
                  : "Ainda não há avaliações — seja o primeiro a avaliar."}
              </p>
              <p className="mt-2 text-sm text-secondary-foreground/70">
                Sua avaliação aparece aqui na hora, assim que for enviada.
              </p>
            </div>
          )}

          {hasReviews && (
            <>
              <div
                ref={containerRef}
                className="no-scrollbar relative z-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-0 py-4 sm:px-[10%] md:px-[18%]"
              >
                {avaliacoes!.map((review, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <div
                      key={review.id}
                      ref={(el) => {
                        itemRefs.current[index] = el;
                      }}
                      className={`w-full shrink-0 snap-center transition-all duration-300 sm:w-[420px] ${
                        isActive ? "scale-100 opacity-100" : "scale-[0.94] opacity-40"
                      }`}
                    >
                      <article className="flex h-full flex-col items-center gap-4 rounded-[1.9rem] border border-white/10 bg-white/[0.03] p-8 text-center">
                        <div
                          className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold ${avatarColor(review.nome)}`}
                        >
                          {review.nome.charAt(0).toUpperCase()}
                        </div>

                        <StarRatingDisplay value={review.nota} />

                        <p className="text-lg leading-8 text-slate-200">
                          {`"${review.avaliacao}"`}
                        </p>

                        <div>
                          <p className="font-bold text-popover-foreground">
                            {review.nome}
                          </p>
                          {review.empresa && (
                            <p className="text-sm text-secondary-foreground/60">
                              {review.empresa}
                            </p>
                          )}
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>

              <div className="relative z-10 mt-4 flex flex-col items-center justify-between gap-5 md:flex-row">
                <p className="text-sm text-foreground/55">
                  Arraste para o lado ou use os controles para navegar.
                </p>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToIndex(activeIndex - 1)}
                    aria-label="Avaliação anterior"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary transition hover:border-popover-foreground/30 hover:text-popover-foreground disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={activeIndex === 0}
                  >
                    <ArrowLeft className="h-4 w-4 text-foreground" />
                  </button>

                  <div className="flex items-center gap-2">
                    {avaliacoes!.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Ir para a avaliação ${index + 1}`}
                        className={`h-2.5 rounded-full transition-all ${
                          activeIndex === index
                            ? "w-10 bg-popover-foreground"
                            : "w-2.5 bg-white/20 hover:bg-white/35"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => scrollToIndex(activeIndex + 1)}
                    aria-label="Próxima avaliação"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary transition hover:border-popover-foreground/30 hover:text-popover-foreground disabled:cursor-not-allowed disabled:opacity-40"
                    disabled={activeIndex === avaliacoes!.length - 1}
                  >
                    <ArrowRight className="h-4 w-4 text-foreground" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-secondary text-foreground sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Deixe sua avaliação</DialogTitle>
            <DialogDescription>
              Sua avaliação é publicada imediatamente, com seu nome real.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-secondary-foreground/70">
                Sua nota
              </span>
              <StarRatingInput
                value={form.nota}
                onChange={(nota) => setForm((f) => ({ ...f, nota }))}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="avaliacao-nome"
                className="text-sm text-secondary-foreground/80"
              >
                Nome <span className="text-red-400">*</span>
              </label>
              <input
                id="avaliacao-nome"
                type="text"
                maxLength={80}
                placeholder="Seu nome"
                value={form.nome}
                onChange={(e) => setForm((f) => ({ ...f, nome: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-amber-300/50"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="avaliacao-empresa"
                className="text-sm text-secondary-foreground/80"
              >
                Empresa <span className="text-secondary-foreground/50">(opcional)</span>
              </label>
              <input
                id="avaliacao-empresa"
                type="text"
                maxLength={80}
                placeholder="Nome da sua empresa"
                value={form.empresa}
                onChange={(e) => setForm((f) => ({ ...f, empresa: e.target.value }))}
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-amber-300/50"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="avaliacao-texto"
                className="text-sm text-secondary-foreground/80"
              >
                Avaliação <span className="text-red-400">*</span>
              </label>
              <textarea
                id="avaliacao-texto"
                maxLength={1000}
                rows={4}
                placeholder="Conte como foi sua experiência"
                value={form.avaliacao}
                onChange={(e) => setForm((f) => ({ ...f, avaliacao: e.target.value }))}
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors focus:border-amber-300/50"
              />
            </div>

            {submitError && <p className="text-sm text-red-400">{submitError}</p>}

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-popover-foreground bg-gradient-to-br from-popover-foreground from-60% to-gray-200 px-4 py-4 text-sm font-bold uppercase tracking-wider text-primary shadow-lg transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Enviando..." : "Publicar avaliação"}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
