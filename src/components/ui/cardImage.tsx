import Link from "next/link";

import { FaArrowRightLong } from "react-icons/fa6";

import BackgroundImage from "../../../public/background.png";
import { Button } from "./button";

export const CardImage = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${BackgroundImage.src})`,
      }}
      className="m-auto flex h-[calc(100vh-120px)] w-full max-w-5xl flex-col gap-10 bg-[length:150px] bg-right-bottom bg-no-repeat px-2 sm:justify-center sm:bg-[length:200px] md:px-6"
    >
      <h1 className="text-2xl font-extrabold md:max-w-2xl md:text-3xl md:leading-relaxed lg:max-w-3xl lg:text-5xl lg:leading-snug">
        Ao seu lado profissionalizando e impulsionando a evolução do seu negócio
      </h1>
      <p className="max-w-lg text-sm lg:text-lg">
        Cada{" "}
        <span className="text-sm text-popover-foreground lg:text-lg">
          landing page
        </span>{" "}
        é pensada com atenção aos detalhes, clareza na comunicação e foco no{" "}
        <span className="text-sm text-popover-foreground lg:text-lg">
          resultado
        </span>
        .
      </p>
      <Link
        // className="flex items-center gap-2 text-popover-foreground underline underline-offset-2 transition-all duration-200 hover:opacity-85 md:text-lg"
        href="https://wa.me/5531991973835?text=Olá+gostaria+sobre+o+desenvolvimento+de+sites/sistemas"
      >
        <Button className="flex w-max items-center gap-2 bg-popover-foreground text-background">
          Fale conosco <FaArrowRightLong />
        </Button>
      </Link>
    </section>
  );
};
