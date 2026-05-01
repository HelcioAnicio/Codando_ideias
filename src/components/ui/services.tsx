import { Card, CardHeader, CardContent, CardTitle } from "./card";
import { MdWeb, MdComputer, MdOutlineAppShortcut } from "react-icons/md";
import { HiOutlineServerStack } from "react-icons/hi2";
import { ButtonGeral } from "./buttonGeral";

export const Services = () => {
  return (
    <section className="relative z-30 flex w-full justify-center">
      <article className="flex max-w-5xl flex-col gap-20 px-2 min-[400px]:px-5 sm:px-7 lg:flex-row lg:px-2">
        <div className="flex flex-col gap-5">
          <p className="w-max rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 p-1 px-5 text-sm font-extralight uppercase text-secondary-foreground/80">
            Serviços
          </p>
          <h1 className="text-3xl font-bold sm:w-3/4 sm:text-3xl md:text-5xl lg:w-full">
            O que seu projeto precisa?
          </h1>
          <p className="text-base font-light opacity-85 min-[400px]:text-lg sm:text-xl">
            Desenvolvemos produtos digitais que funcionam. Desde páginas que
            vendem até sistemas que organizam seu negócio, cada solução é feita
            sob medida para seus objetivos.
          </p>
          <div></div>
          <ButtonGeral
            text={"Solicitar um orçamento"}
            link={
              "https://wa.me/5531991973835?text=Olá+gostaria+sobre+o+desenvolvimento+de+sites/sistemas"
            }
          />
        </div>
        <div className="m-auto flex max-w-md flex-col gap-5">
          <Card className="sticky top-0 z-20 border-none bg-secondary py-5 text-foreground">
            <CardHeader className="py-4">
              <CardTitle className="flex w-full items-center gap-3 text-xl md:text-2xl">
                <MdWeb className="size-7 text-popover-foreground md:size-9" />
                Landing Pages{" "}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm opacity-70 md:text-base">
              Páginas que convertem visitantes em clientes. Design limpo,
              copywriting direto e chamadas de ação que funcionam.
            </CardContent>
          </Card>
          <Card className="sticky top-0 z-20 border-none bg-secondary py-5 text-foreground">
            <CardHeader className="py-4">
              <CardTitle className="flex w-full items-center gap-3 text-xl md:text-2xl">
                <MdComputer className="size-7 text-popover-foreground md:size-9" />
                Sites institucionais
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm opacity-70 md:text-base">
              Presença digital que transmite autoridade. Seu negócio merece um
              site que impressiona e gera confiança desde o primeiro clique.
            </CardContent>
          </Card>
          <Card className="sticky top-0 z-20 border-none bg-secondary py-5 text-foreground">
            <CardHeader className="py-4">
              <CardTitle className="flex w-full items-center gap-3 text-xl md:text-2xl">
                <MdOutlineAppShortcut className="size-7 text-popover-foreground md:size-9" />
                Aplicativos (Mobile)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm opacity-70 md:text-base">
              Experiências digitais que funcionam em qualquer dispositivo.
              Rápidas, intuitivas e construídas para seus usuários.
            </CardContent>
          </Card>
          <Card className="sticky top-0 z-20 border-none bg-secondary py-5 text-foreground">
            <CardHeader className="py-4">
              <CardTitle className="flex w-full items-center gap-3 text-xl md:text-2xl">
                <HiOutlineServerStack className="size-7 text-popover-foreground md:size-9" />
                Sistemas customizados
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm opacity-70 md:text-base">
              Ferramentas feitas para sua operação. Automatização, integração e
              eficiência. Seu negócio cresce quando a tecnologia trabalha para
              você.
            </CardContent>
          </Card>
        </div>
      </article>
    </section>
  );
};
