"use client";
import { Header } from "@/components/ui/header";
import { ListProjects } from "@/components/ui/listProject";
import { CardImage } from "@/components/ui/cardImage";
import { Footer } from "@/components/ui/footer";
import { WhyDevLab } from "@/components/ui/whyDevLab";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
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
        <Cost />
        <StudioAuthorityShowcase />
        <Steps />
        <WhyDevLab />
        <section className="mx-auto w-full max-w-5xl" id="projects">
          <ListProjects />
          <Link
            href="google.com"
            className="text-popover-foreground underline underline-offset-2"
          >
            <p className="ml-auto mt-1 flex w-max items-center gap-2">
              Ver todos os modelos <FaArrowCircleRight />
            </p>
          </Link>
        </section>
        <StudioFaq />
      </main>
      <Footer />
    </>
  );
}
