import { Button } from "./button";
import { Card, CardHeader, CardContent, CardTitle } from "./card";
import { MdWeb, MdComputer, MdOutlineAppShortcut } from "react-icons/md";
import { HiOutlineServerStack } from "react-icons/hi2";

export const Services = () => {
  return (
    <section className="relative z-30 flex w-full justify-center">
      <article className="flex max-w-5xl flex-col gap-20 px-2 min-[400px]:px-5 sm:px-7 lg:flex-row lg:px-2">
        <div className="flex flex-col gap-5">
          <p className="text-sm underline underline-offset-2">Soluções</p>
          <h1 className="text-3xl font-bold sm:w-3/4 sm:text-3xl md:text-5xl lg:w-full">
            Cada projeto merece sua própria história
          </h1>
          <p className="text-base font-light text-foreground min-[400px]:text-lg sm:text-xl">
            Desenvolvemos produtos digitais que funcionam. Desde páginas que
            vendem até sistemas que organizam seu negócio, cada solução é feita
            sob medida para seus objetivos.
          </p>
          <div></div>
          <Button className="mx-auto w-1/2 rounded-lg bg-popover-foreground px-8 py-7 text-sm font-bold uppercase tracking-wider text-background shadow-lg transition-all hover:bg-popover-foreground hover:brightness-105">
            Orçamento
          </Button>
        </div>
        <div className="m-auto flex max-w-md flex-col gap-5">
          {/* <Card className="border-none bg-accent text-secondary shadow-md shadow-popover-foreground"> */}
          <Card className="border-none bg-accent text-secondary">
            <CardHeader>
              <CardTitle className="flex w-full items-center gap-3">
                <MdWeb className="size-7" />
                Landing Pages{" "}
              </CardTitle>
            </CardHeader>
            <CardContent>
              Páginas que convertem visitantes em clientes. Design limpo,
              copywriting direto e chamadas de ação que funcionam.
            </CardContent>
          </Card>
          <Card className="border-none bg-accent text-secondary hover:border-2 hover:border-popover-foreground">
            <CardHeader>
              <CardTitle className="flex w-full items-center gap-3">
                <MdComputer className="size-7" />
                Sites institucionais
              </CardTitle>
            </CardHeader>
            <CardContent>
              Presença digital que transmite autoridade. Seu negócio merece um
              site que impressiona e gera confiança desde o primeiro clique.
            </CardContent>
          </Card>
          <Card className="border-none bg-accent text-secondary hover:border-2 hover:border-popover-foreground">
            <CardHeader>
              <CardTitle className="flex w-full items-center gap-3">
                <MdOutlineAppShortcut className="size-7" />
                Aplicativos (Mobile)
              </CardTitle>
            </CardHeader>
            <CardContent>
              Experiências digitais que funcionam em qualquer dispositivo.
              Rápidas, intuitivas e construídas para seus usuários.
            </CardContent>
          </Card>
          <Card className="border-none bg-accent text-secondary hover:border-2 hover:border-popover-foreground">
            <CardHeader>
              <CardTitle className="flex w-full items-center gap-3">
                <HiOutlineServerStack className="size-7" />
                Sistemas customizados
              </CardTitle>
            </CardHeader>
            <CardContent>
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
