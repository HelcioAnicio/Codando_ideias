import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { DiagnosticoForm } from "@/components/ui/diagnostico-form";
import { ShieldCheck, Gauge, LineChart } from "lucide-react";

export const metadata = {
  title: "Diagnóstico Gratuito de Tráfego Pago",
  description:
    "Descubra gratuitamente quantos clientes você está perdendo hoje por não ter uma página que converte e uma campanha de tráfego pago bem estruturada.",
  alternates: {
    canonical: "https://codandoideias.com.br/diagnostico",
  },
};

const pontos = [
  {
    icon: ShieldCheck,
    title: "Sem compromisso",
    text: "É uma análise real, não um pitch de vendas disfarçado.",
  },
  {
    icon: Gauge,
    title: "Rápido",
    text: "Leva menos de 2 minutos para preencher.",
  },
  {
    icon: LineChart,
    title: "Com números",
    text: "Você recebe uma estimativa do que está deixando na mesa hoje.",
  },
];

export default function DiagnosticoPage() {
  return (
    <>
      <Header />
      <main className="w-full bg-background pb-24 pt-32 sm:pt-40">
        <div className="mx-auto grid max-w-5xl gap-12 px-4 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:px-8">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
              Diagnóstico gratuito
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] md:text-5xl">
              Descubra quantos clientes você está{" "}
              <span className="text-amber-300">perdendo hoje.</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg font-light leading-relaxed text-slate-400">
              Preencha o formulário e a gente analisa sua presença digital
              atual e o potencial de tráfego pago para o seu negócio — sem
              custo e sem letra miúda.
            </p>

            <ul className="mt-10 flex flex-col gap-5">
              {pontos.map((ponto) => (
                <li key={ponto.title} className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-300/20 bg-amber-300/5"
                  >
                    <ponto.icon className="h-5 w-5 text-amber-300" />
                  </div>
                  <div>
                    <p className="font-bold text-white">{ponto.title}</p>
                    <p className="text-sm text-slate-400">{ponto.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="studio-panel rounded-[1.75rem] border border-white/10 p-6 sm:p-8">
            <DiagnosticoForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
