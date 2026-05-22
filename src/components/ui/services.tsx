import { Card, CardHeader, CardContent, CardTitle } from "./card";
import { MdWeb, MdComputer, MdOutlineAppShortcut } from "react-icons/md";
import { HiOutlineServerStack } from "react-icons/hi2";
import { ButtonGeral } from "./buttonGeral";
import { IoFingerPrint } from "react-icons/io5";
import { Button } from "./button";
import Link from "next/dist/client/link";

const cards = [
  {
    icon: (
      <IoFingerPrint className="size-7 text-popover-foreground md:size-9" />
    ),
    title: "Identidade Visual",
    description:
      "Posicionamento premium que separa você da concorrência. Do logo à experiência de navegação.",
  },
  {
    icon: <MdWeb className="size-7 text-popover-foreground md:size-9" />,
    title: "Websites e Landing Pages",
    description:
      "Páginas que convertem visitantes em clientes. Design limpo, copywriting direto e chamadas de ação que funcionam.",
  },
  {
    icon: (
      <MdOutlineAppShortcut className="size-7 text-popover-foreground md:size-9" />
    ),
    title: "Aplicativos (Mobile)",
    description:
      "Apps que funcionam em qualquer dispositivo. Rápidos, intuitivos e construídos para seus usuários.",
  },
  {
    icon: <MdComputer className="size-7 text-popover-foreground md:size-9" />,
    title: "Saas (Sistemas Personalizados)",
    description:
      "Soluções sob medida para atender o seu negócio, otimizando processos e aumentando a produtividade.",
  },
];

export const Services = () => {
  return (
    <section className="relative z-30 flex w-full justify-center">
      <article className="flex max-w-5xl flex-col gap-20 px-2 min-[400px]:px-5 sm:px-7 lg:flex-row lg:px-2">
        <div className="flex flex-col gap-5">
          <p className="w-max rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 p-1 px-5 text-xs font-extralight uppercase text-secondary-foreground/80 sm:text-sm">
            Serviços
          </p>
          <h1 className="text-4xl font-bold sm:w-3/4 sm:text-4xl md:text-5xl lg:w-full">
            O que seu projeto precisa?
          </h1>
          <p className="text-base font-light opacity-90 min-[400px]:text-lg sm:text-xl">
            A estrutura digital que seu negócio precisa com um modelo de
            investimento que respeita o seu fluxo de caixa, cada solução é feita
            sob medida para seus objetivos.
          </p>
        </div>
        <div className="m-auto flex max-w-md flex-col gap-5">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="border-none bg-secondary py-10 text-foreground"
            >
              <CardHeader className="py-4">
                <CardTitle className="flex w-full items-center gap-3 text-2xl md:text-3xl">
                  {card.icon}
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-5">
                <p className="text-base opacity-85 md:text-lg">
                  {card.description}
                </p>
                <Link
                  href={
                    "https://wa.me/5531991973835?text=Olá+gostaria+de+saber+mais+sobre+o+desenvolvimento+de+sites/sistemas"
                  }
                >
                  <Button className="border border-popover-foreground bg-transparent px-10 py-6 text-lg shadow-md transition-all duration-300 hover:shadow-sm hover:shadow-popover-foreground">{`Preciso de ${card.title.split(" ")[0].toLowerCase()}`}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </article>
    </section>
  );
};
