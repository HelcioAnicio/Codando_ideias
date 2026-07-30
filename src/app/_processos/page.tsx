import { Header } from "@/components/ui/header";
import { StepsComponent } from "@/app/_processos/_components/stepsComponent";

export const metadata = {
  title: "Como Trabalhamos — Nosso Processo de Criação de Sites",
  description:
    "Conheça o passo a passo que usamos para criar sites profissionais que geram resultado: briefing, design, desenvolvimento, testes e lançamento.",
  alternates: {
    canonical: "https://codandoideias.com.br/processos",
  },
};

export default function StepPage() {
  return (
    <>
      <Header />
      <StepsComponent />
    </>
  );
}
