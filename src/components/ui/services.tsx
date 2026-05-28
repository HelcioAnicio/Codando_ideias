import { Card, CardHeader, CardContent, CardTitle } from "./card";
import {
  MdWeb,
  MdComputer,
  MdOutlineAppShortcut,
  MdOutlineSpeed,
} from "react-icons/md";
import { IoFingerPrint } from "react-icons/io5";
import { Button } from "./button";
import Link from "next/dist/client/link";
import { IoIosArrowForward } from "react-icons/io";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { GiPuzzle } from "react-icons/gi";

const cards = [
  {
    icon: (
      <HiMiniRocketLaunch className="size-6 text-popover-foreground md:size-8" />
    ),
    title: "Landing Pages",
    description: "Páginas focadas em converter visitantes em clientes.",
  },
  {
    icon: <MdWeb className="size-6 text-popover-foreground md:size-8" />,
    title: "Institucional",
    description:
      "Presença digital sólida com arquitetura pensada para autoridade de marca.",
  },
  {
    icon: (
      <FaCartShopping className="size-6 text-popover-foreground md:size-8" />
    ),
    title: "E-commerce",
    description: "Soluções de venda online completas, com interface intuitiva",
  },
  {
    icon: (
      <MdOutlineAppShortcut className="size-6 text-popover-foreground md:size-8" />
    ),
    title: "Aplicativos (Mobile)",
    description: "Apps que funcionam em qualquer dispositivo.",
  },
  {
    icon: <MdComputer className="size-6 text-popover-foreground md:size-8" />,
    title: "Saas (Sistemas)",
    description:
      "Soluções sob medida para seu negócio, otimizando processos e aumentando a produtividade.",
  },
  {
    icon: (
      <MdOutlineSpeed className="size-6 text-popover-foreground md:size-8" />
    ),
    title: "Performance & SEO",
    description:
      "Consultoria técnica para acelerar sites lentos e melhorar Core Web Vitals.",
  },
  {
    icon: (
      <IoFingerPrint className="size-6 text-popover-foreground md:size-8" />
    ),
    title: "Identidade Visual",
    description: "Posicionamento premium que separa você da concorrência.",
  },
  {
    icon: <GiPuzzle className="size-6 text-popover-foreground md:size-8" />,
    title: "Templates prontos",
    description:
      "Componentes UI premium e prontos para desenvolvedores exigentes.",
  },
];

export const Services = () => {
  return (
    <section className="relative z-30 flex w-full justify-center">
      <article className="flex max-w-5xl flex-col gap-20 px-2 min-[400px]:px-5 sm:px-7 lg:px-2">
        <div className="flex flex-col gap-5">
          <p className="w-max rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 p-1 px-5 text-xs font-extralight uppercase text-secondary-foreground/80 sm:text-sm">
            Serviços
          </p>
          <h1 className="text-4xl font-bold sm:w-3/4 sm:text-4xl md:text-5xl lg:w-full">
            O que seu negócio precisa?
          </h1>
          <p className="text-base font-light opacity-80 min-[400px]:text-lg sm:text-xl">
            A estrutura digital que seu negócio precisa com um modelo de
            investimento que respeita o seu fluxo de caixa, cada solução é feita
            sob medida para seus objetivos.
          </p>
        </div>
        <ul className="m-auto grid grid-cols-1 content-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <li key={index} className="h-full max-w-md">
              <Card className="h-full rounded-md border-transparent bg-secondary py-10 text-foreground transition-all duration-200 hover:border hover:border-popover-foreground/50">
                <CardHeader className="py-4">
                  <CardTitle className="flex w-full items-center gap-3 text-xl text-secondary-foreground md:text-2xl">
                    {card.icon}
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                  <p className="text-base opacity-75 md:text-lg">
                    {card.description}
                  </p>
                  <Link
                    href={
                      "https://wa.me/5531991973835?text=Olá+gostaria+de+saber+mais+sobre+o+desenvolvimento+de+sites/sistemas"
                    }
                    className="relative w-max"
                  >
                    <Button className="w-max bg-transparent px-1 py-6 text-lg text-popover-foreground transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-popover-foreground after:transition-all after:duration-300 hover:bg-transparent hover:after:w-full">
                      Saiba mais
                      <IoIosArrowForward />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
