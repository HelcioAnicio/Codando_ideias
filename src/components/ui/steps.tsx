import Image from "next/image";
import { FaDiamond } from "react-icons/fa6";
export const Steps = () => {
  return (
    <section className="flex w-full items-center justify-center rounded-md p-1 py-5">
      <div className="relative flex w-full max-w-5xl flex-col gap-5 p-3 py-7 sm:gap-8">
        <h4 className="w-1/2 text-3xl font-bold sm:text-4xl">
          Contruímos juntos, com clareza e propósito
        </h4>
        <Image
          src="/bgSteps.png"
          alt="People talking about informations and datas"
          width={400}
          height={400}
          className="absolute right-0 top-0 z-0 w-40 sm:right-16 sm:w-56"
        />
        <p className="relative z-10 max-w-xs text-sm font-extralight text-accent/75 md:max-w-xl md:text-base">
          Planejamos o caminho ideal juntos, criamos um projeto personalizado e
          eficiente, garantindo que tudo funcione perfeitamente no final.
        </p>
        <div className="relative flex flex-col gap-5 border-b border-popover-foreground font-semibold sm:flex-row md:justify-between">
          <p className="flex items-center gap-2 pl-1 text-4xl text-popover-foreground sm:text-6xl">
            1
            <span className="text-sm text-foreground sm:text-base">
              Entendimento e estratégia
            </span>
          </p>
          <p className="flex items-center gap-2 text-4xl text-popover-foreground sm:text-6xl">
            2
            <span className="text-sm text-foreground sm:text-base">
              Desenvolvimento sob medida
            </span>
          </p>
          <p className="flex items-center gap-2 text-4xl text-popover-foreground sm:text-6xl">
            3
            <span className="text-sm text-foreground sm:text-base">
              Testes, entrega e suporte
            </span>
          </p>
          <FaDiamond className="absolute -bottom-2 -right-2 w-6 text-popover-foreground" />
        </div>
      </div>
    </section>
  );
};
