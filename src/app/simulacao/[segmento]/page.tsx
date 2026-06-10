import { redirect } from "next/navigation";

// Esta rota foi substituída pela nova página /simulacao com modal.
// Redireciona para evitar 404.
export default function LegacySegmentoPage() {
  redirect("/simulacao");
}
