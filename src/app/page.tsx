import { Header } from "@/components/ui/header";
import { ListProjects } from "@/components/ui/listProject";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";
// import { WhyDevLab } from "@/components/ui/whyDevLab";
import { Steps } from "@/components/ui/steps";
import { Services } from "@/components/ui/services";
// import { Cost } from "@/components/ui/cost";
import { StudioFaq } from "@/components/ui/studio-faq";
import { StudioPlans } from "@/components/ui/studioplans";
import { VisibilidadeCta } from "@/components/ui/visibilidade-cta";
// import { StudioAuthorityShowcase } from "@/components/ui/studio-authority-showcase";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative flex w-full flex-wrap gap-16 overflow-hidden sm:items-center">
        <CardImage />
        <ListProjects />
        {/* <StudioAuthorityShowcase /> */}
        <VisibilidadeCta />
        <Services />
        <StudioPlans />
        <Steps />
        <StudioFaq />
        {/* <Cost /> */}
        {/* <WhyDevLab /> */}
      </main>
      <Footer />
    </>
  );
}
