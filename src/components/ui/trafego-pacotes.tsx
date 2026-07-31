import Link from "next/link";
import { Check } from "lucide-react";

const WHATSAPP_NUMBER = "5531991973835";

const pacotes = [
  {
    id: "essencial",
    name: "Essencial",
    subtitle: "Presença e base bem cuidadas.",
    faixa: "R$ 800–1.500/mês",
    featured: false,
    items: [
      "Manutenção do site",
      "Perfil da Empresa no Google otimizado",
      "Relatório mensal",
      "Social leve (posts básicos)",
    ],
  },
  {
    id: "crescimento",
    name: "Crescimento",
    subtitle: "A máquina de leads previsível.",
    faixa: "R$ 2.000–4.000/mês + verba de mídia",
    featured: true,
    items: [
      "Gestão de tráfego Google + Meta Ads",
      "Landing pages de campanha sob medida",
      "Rastreamento completo e otimização contínua",
      "Gestão de leads pelo WhatsApp",
      "Relatório com custo por lead e por cliente",
    ],
  },
  {
    id: "parceiro",
    name: "Parceiro",
    subtitle: "Seu departamento de marketing terceirizado.",
    faixa: "R$ 4.000–8.000+/mês + verba de mídia",
    featured: false,
    items: [
      "Tudo do plano Crescimento",
      "Social media completo",
      "E-mail marketing e automação",
      "Estratégia de marketing contínua",
    ],
  },
];

export const TrafegoPacotes = () => {
  return (
    <section id="pacotes" aria-label="Pacotes de gestão de tráfego" className="w-full px-4 py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Pacotes
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Escolha o nível de <span className="text-amber-300">crescimento</span>{" "}
            que faz sentido agora.
          </h2>
        </div>
        <p className="mb-12 max-w-2xl text-sm text-slate-400">
          Em todos os pacotes com tráfego pago, a verba de mídia (o valor que
          vai direto para o Google e o Meta) é paga por você, separada da
          mensalidade de gestão — você vê exatamente para onde vai cada real.
          Contrato com prazo mínimo de 3 a 6 meses, tempo necessário para uma
          campanha amadurecer e gerar dado de verdade.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {pacotes.map((pacote) => (
            <article
              key={pacote.id}
              className={[
                "relative flex h-full flex-col rounded-[1.75rem] border p-8",
                pacote.featured
                  ? "border-amber-300 bg-slate-800 shadow-2xl shadow-amber-950/20 md:-translate-y-3"
                  : "border-white/10 bg-slate-900",
              ].join(" ")}
            >
              {pacote.featured && (
                <span className="absolute right-0 top-0 rounded-bl-2xl rounded-tr-[1.75rem] bg-amber-300 px-4 py-1 text-xs font-black uppercase tracking-[0.25em] text-slate-950">
                  Mais indicado
                </span>
              )}

              <h3 className="text-2xl font-bold">{pacote.name}</h3>
              <p className="mt-2 text-sm text-slate-400">{pacote.subtitle}</p>

              <div className="mt-6">
                <span className="text-2xl font-black text-white">{pacote.faixa}</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {pacote.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  `Olá! Tenho interesse no pacote *${pacote.name}* de gestão de tráfego. Podemos conversar?`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={[
                  "mt-6 block rounded-xl px-5 py-4 text-center font-bold transition",
                  pacote.featured
                    ? "studio-gold-surface hover:brightness-110"
                    : "border border-amber-300/40 bg-amber-300/10 text-amber-200 hover:bg-amber-300/20 hover:text-white",
                ].join(" ")}
              >
                Falar sobre esse pacote
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
          <p className="text-lg font-bold text-white">Ainda não sabe qual pacote é o seu?</p>
          <p className="max-w-md text-sm text-slate-400">
            Comece pelo diagnóstico gratuito — a gente recomenda o pacote certo
            depois de entender seu negócio, não antes.
          </p>
          <Link
            href="/diagnostico"
            className="mt-2 rounded-xl border border-amber-300/40 bg-amber-300/10 px-6 py-3 font-bold text-amber-200 transition hover:bg-amber-300/20 hover:text-white"
          >
            Agendar diagnóstico gratuito →
          </Link>
        </div>
      </div>
    </section>
  );
};
