import { Header } from "@/components/ui/header";
import { ProjectsTeaser } from "@/components/ui/projectsTeaser";
import { Reviews } from "@/components/ui/reviews";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";
import { ServicesTeaser } from "@/components/ui/servicesTeaser";
import { VisibilidadeCta } from "@/components/ui/visibilidade-cta";
import { PorQueSite } from "@/components/ui/por-que-site";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex w-full flex-wrap gap-16 overflow-hidden sm:items-center">
        <CardImage />
        <ServicesTeaser />
        <ProjectsTeaser />
        <PorQueSite />
        <Reviews />
        <VisibilidadeCta />
      </main>
      <Footer />
    </>
  );
}
