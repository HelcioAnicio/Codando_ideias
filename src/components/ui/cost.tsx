import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Image from "next/image";
import webSiteRival from "../../../public/webSiteRival.webp";
import webSiteMine from "../../../public/webSiteMine.webp";
import { Card, CardContent } from "./card";

export const Cost = () => {
  return (
    <section className="flex w-full justify-center">
      <article className="flex w-full max-w-5xl flex-col gap-16 px-2 py-20">
        <h2 className="text-3xl font-bold sm:text-4xl">
          O custo invisível de um site medíocre
        </h2>
        <div className="flex flex-col gap-10 sm:gap-16">
          <div className="flex w-full items-center justify-center gap-3 px-5">
            <div className="relative flex-1">
              <Image
                src={webSiteRival}
                width={400}
                height={400}
                alt="Picture of the author"
                className="w-full rounded-md"
              />
              <div className="absolute -right-5 -top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-500 bg-red-500/70 text-xs font-bold sm:h-20 sm:w-20 sm:border-4 sm:text-xl">
                42
              </div>
            </div>
            <p>X</p>
            <div className="relative flex-1">
              <Image
                src={webSiteMine}
                width={400}
                height={400}
                alt="Picture of the author"
                className="w-full"
              />
              <div className="absolute -right-5 -top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-green-500 bg-green-500/70 text-xs font-bold sm:h-20 sm:w-20 sm:border-4 sm:text-xl">
                97
              </div>
            </div>
          </div>
          <Card className="m-auto border-none bg-transparent py-10">
            <CardContent className="flex flex-col items-center justify-center gap-y-7">
              <div className="flex w-full items-start justify-center gap-3 text-sm md:gap-5">
                <IoMdCloseCircle className="size-6 min-w-max text-destructive sm:size-10" />
                <p className="text-center sm:w-1/2">
                  <span>Velocidade de Percepção (LCP):</span> Se demorar mais de
                  2.5s para o seu site abrir, o cliente desiste da compra.
                </p>
                <FaCheckCircle className="size-6 min-w-max text-green-500 sm:size-10" />
              </div>
              <div className="flex w-full items-start justify-center gap-3 text-sm md:gap-5">
                <IoMdCloseCircle className="size-6 min-w-max text-destructive sm:size-10" />
                <p className="text-center sm:w-1/2">
                  <span>Capacidade de Resposta (FID):</span> Mede o atraso entre
                  um clique e a ação. Sites travados não vendem.
                </p>
                <FaCheckCircle className="size-6 min-w-max text-green-500 sm:size-10" />
              </div>
              <div className="flex w-full items-start justify-center gap-3 text-sm md:gap-5">
                <IoMdCloseCircle className="size-6 min-w-max text-destructive sm:size-10" />
                <p className="text-center sm:w-1/2">
                  <span>Estabilidade visual (CLS):</span> Sabe quando você vai
                  clicar em um botão e ele se desloca (“pula”)? Nós eliminamos
                  esses saltos irritantes.
                </p>
                <FaCheckCircle className="size-6 min-w-max text-green-500 sm:size-10" />
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    </section>
  );
};
