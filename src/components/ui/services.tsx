import { FaCheck } from "react-icons/fa6";
import { cards, servicesData } from "@/data/services";
import { ButtonGeral } from "./buttonGeral";

export const Services = () => {
  return (
    <section className="relative z-30 flex w-full justify-center pt-10" id="services">
      <article className="flex max-w-6xl flex-col gap-20 px-2 min-[400px]:px-5 sm:px-7 lg:px-2">
        <div className="flex flex-col gap-10">
          {cards.map((card) => {
            const detail = servicesData[card.id];
            if (!detail) return null;

            return (
              <div
                key={card.id}
                id={card.id}
                className="scroll-mt-28 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-popover-foreground/20 hover:bg-white/[0.045] lg:flex"
              >
                <div className="flex flex-col items-start gap-4 border-b border-white/10 p-8 lg:w-2/5 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="rounded-xl bg-secondary-foreground/10 p-4 text-popover-foreground">
                    {detail.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-popover-foreground md:text-3xl">
                    {detail.title}
                  </h3>
                  <p className="text-base font-light leading-relaxed opacity-75">
                    {detail.tagline}
                  </p>
                  <ButtonGeral
                    text="Quero esse serviço"
                    link={`https://wa.me/5531991973835?text=${encodeURIComponent(detail.whatsapp)}`}
                    classes="mt-2 w-full lg:w-max lg:px-8"
                  />
                </div>

                <div className="flex flex-col gap-8 p-8 lg:w-3/5 lg:p-10">
                  <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-popover-foreground/80">
                      O que está incluído
                    </p>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {detail.checklist.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm opacity-85">
                          <FaCheck className="size-3 shrink-0 text-popover-foreground" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-10">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-popover-foreground/80">
                        Para quem é ideal
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {detail.ideal.map((tag) => (
                          <span
                            key={tag}
                            className="rounded border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs opacity-80"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-popover-foreground/80">
                        Prazo estimado
                      </p>
                      <span className="inline-block w-max rounded border border-popover-foreground/20 bg-popover-foreground/10 px-3 py-1 font-mono text-sm font-bold text-popover-foreground">
                        {detail.deadline}
                      </span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-black/10 p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-popover-foreground/80">
                      Resultado esperado
                    </p>
                    <ul className="space-y-1.5 text-sm">
                      {detail.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 opacity-90">
                          <span className="text-popover-foreground">→</span> {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
