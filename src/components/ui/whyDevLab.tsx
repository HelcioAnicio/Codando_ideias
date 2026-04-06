import { CardReason } from "./cardReason";

import { BsGraphUpArrow } from "react-icons/bs";
import { IoGlobeSharp } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdOutlineTrendingUp } from "react-icons/md";
import { FaGears } from "react-icons/fa6";
import { BsShieldLockFill } from "react-icons/bs";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import DataUp from "../../../public/dataUp.png";
import MenAndWomen from "../../../public/menAndWomen.png";
import Engine from "../../../public/engine.png";

import Image from "next/image";

export const WhyDevLab = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollScreen = (direction: string) => {
    if (direction === "right" && containerRef.current) {
      containerRef.current.scrollLeft += 288;
    }
    if (direction === "left" && containerRef.current) {
      containerRef.current.scrollLeft -= 288;
    }
    if (direction === "rightMd" && containerRef.current) {
      containerRef.current.scrollLeft += 670;
    }
    if (direction === "leftMd" && containerRef.current) {
      containerRef.current.scrollLeft -= 670;
    }
  };
  return (
    <section
      id="whyCodandoIdeias"
      className="m-auto flex w-full rounded-md border-none bg-foreground"
    >
      <article className="relative m-auto flex w-full max-w-5xl flex-col gap-5 rounded-md border-none bg-foreground px-1 py-10 sm:p-6 md:py-20">
        <h2 className="text-3xl font-black text-secondary lg:text-4xl">
          Os Pilares da Engenharia
        </h2>
        <div
          ref={containerRef}
          className="no-scrollbar space-y-10 overflow-auto scroll-smooth px-2 pb-5 md:p-5"
        >
          <div className="relative flex w-max gap-72">
            <CardReason
              icon={<BsGraphUpArrow />}
              title="Alto desempenho e velocidade"
              text="Todo projeto é pensado na leveza e perfomance. Isso garante carregamento rápido, melhor experiência e destaque nos mecanismos de busca dos navegadores."
            />

            <Image
              className="absolute left-[23%] top-0 z-0 w-64"
              src={DataUp}
              alt="Logo"
            />
            <CardReason
              icon={<TfiHeadphoneAlt />}
              title="Atendimento direto e continuo"
              text="Você fala com quem desenvolve. Mais agilidade para ajustes, melhorias e suporte sempre que precisar, sem depender de terceiros ou burocracias."
            />
            <CardReason
              icon={<FaGears />}
              title="Funcionalidades personalizadas"
              text="Não existem limitações: o site é modelado conforme a real necessidade do negócio. Integração com sistemas ou qualquer recurso estratégico."
            />
          </div>
          <div className="relative ml-72 flex w-max gap-72">
            <CardReason
              newClassName=""
              icon={<IoGlobeSharp />}
              title="Navegação inteligente"
              text="O fluxo do site é pensado para guiar o usuário até a ação desejada, seja um contato, uma compra ou um agendamento."
            />

            <CardReason
              newClassName=""
              icon={<MdOutlineTrendingUp />}
              title="Pronto para crescer"
              text="À medida que o negócio cresce, o site pode ser expandido com novos recursos, páginas ou sistemas, sem complicações."
            />
            <Image
              className="absolute bottom-0 left-[61%] w-64"
              src={MenAndWomen}
              alt="Logo"
            />
            <CardReason
              newClassName=""
              icon={<BsShieldLockFill />}
              title="Segurança reforçada"
              text="O projeto é contruído com atenção à segurança desde a base, usando boas práticas e recursos personalizados para proteger dados e evitar vulnerabilidades."
            />
            <Image
              className="absolute -top-full right-0 w-72"
              src={Engine}
              alt="Logo"
            />
          </div>
        </div>
        <Button
          className={`absolute bottom-2 left-10 z-50 w-max items-end transition-all duration-150 md:hidden`}
          variant="ghost"
          onClick={() => scrollScreen("left")}
        >
          <FaArrowCircleLeft className="size-7 text-background" />
        </Button>
        <Button
          className={`absolute bottom-2 left-10 z-50 hidden w-max items-end transition-all duration-150 md:block`}
          variant="ghost"
          onClick={() => scrollScreen("leftMd")}
        >
          <FaArrowCircleLeft className="size-7 text-background" />
        </Button>

        <Button
          className="absolute bottom-2 right-10 z-50 w-max items-end transition-all duration-150 md:hidden"
          variant="ghost"
          onClick={() => scrollScreen("right")}
        >
          <FaArrowCircleRight className="size-7 text-background" />
        </Button>
        <Button
          className="absolute bottom-2 right-10 z-50 hidden w-max items-end transition-all duration-150 md:block"
          variant="ghost"
          onClick={() => scrollScreen("rightMd")}
        >
          <FaArrowCircleRight className="size-7 text-background" />
        </Button>
      </article>
    </section>
  );
};
