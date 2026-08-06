import { Header } from "@/components/ui/header";
import { ListProjects } from "@/components/ui/listProject";
import { Reviews } from "@/components/ui/reviews";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";
import { ServicesTeaser } from "@/components/ui/servicesTeaser";
import { VisibilidadeCta } from "@/components/ui/visibilidade-cta";
import { PorQueSite } from "@/components/ui/por-que-site";
import { projects } from "@/data/projects";

const FEATURED_SLUGS = [
  "joao-victor-barbearia",
  "aisthesis-estetica",
  "mimos-da-poli",
  "agro-finance",
];

const featuredProjects = FEATURED_SLUGS.map((slug) =>
  projects.find((project) => project.slug === slug),
).filter((project): project is (typeof projects)[number] => Boolean(project));

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex w-full flex-wrap gap-16 overflow-hidden sm:items-center">
        <CardImage />
        <ListProjects
          projects={featuredProjects}
          ctaHref="/projetos"
          ctaText="Ver mais projetos"
        />
        <Reviews />
        <PorQueSite />
        <VisibilidadeCta />
        <ServicesTeaser />
      </main>
      <Footer />
    </>
  );
}
