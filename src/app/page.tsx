import { Header } from "@/components/ui/header";
import { ListProjects } from "@/components/ui/listProject";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";
import { StudioFaq } from "@/components/ui/studio-faq";
import { VisibilidadeCta } from "@/components/ui/visibilidade-cta";
import { PorQueSite } from "@/components/ui/por-que-site";
import { ReversaoRisco } from "@/components/ui/reversao-risco";
import { TrafegoTeaser } from "@/components/ui/trafego-teaser";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex w-full flex-wrap gap-16 overflow-hidden sm:items-center">
        <CardImage />
        <ListProjects />
        <PorQueSite />
        <VisibilidadeCta />
        <ReversaoRisco />
        <TrafegoTeaser />
        <StudioFaq />
      </main>
      <Footer />
    </>
  );
}
