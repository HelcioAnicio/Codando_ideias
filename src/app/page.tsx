"use client";
import { Header } from "@/components/ui/header";
import { ListProjects } from "@/components/ui/listProject";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";
import { WhyDevLab } from "@/components/ui/whyDevLab";
import { Steps } from "@/components/ui/steps";
import { Services } from "@/components/ui/services";
import { Cost } from "@/components/ui/cost";
import { StudioFaq } from "@/components/ui/studio-faq";
import { StudioAuthorityShowcase } from "@/components/ui/studio-authority-showcase";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto flex flex-wrap gap-20 overflow-hidden sm:items-center">
        <CardImage />
        <Services />
        <StudioAuthorityShowcase />
        <Cost />
        <Steps />
        <WhyDevLab />
        <ListProjects />
        <StudioFaq />
      </main>
      <Footer />
    </>
  );
}
