import { FaUber, FaTwitch } from "react-icons/fa";
import { SiNetflix, SiNike } from "react-icons/si";
import { AiFillTikTok, AiOutlineOpenAI } from "react-icons/ai";

const logos = [
  { icon: <SiNetflix size={80} />, name: "Netflix" },
  { icon: <SiNike size={80} />, name: "Nike" },
  { icon: <AiOutlineOpenAI size={80} />, name: "OpenAI" },
  { icon: <AiFillTikTok size={80} />, name: "TikTok" },
  { icon: <FaUber size={80} />, name: "Uber" },
  { icon: <FaTwitch size={80} />, name: "Twitch" },
];

export const TechMarquee = () => {
  return (
    <section aria-label="Tecnologias que utilizamos" className="w-full bg-background">
      <div className="mx-auto max-w-6xl px-4 py-5 md:px-2 xl:px-0">
        <div className="relative mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold tracking-wide text-foreground md:text-5xl">
            Nossas tecnologias
          </h2>
          <p className="mx-auto max-w-2xl text-sm font-light leading-relaxed text-secondary-foreground md:text-base">
            Utilizamos a mesma base tecnológica de{" "}
            <span className="font-bold text-popover-foreground">
              gigantes do mercado internacional.
            </span>{" "}
            Para você, isso se traduz em três coisas: velocidade máxima,
            segurança contra invasões e um site que nunca fica obsoleto.
          </p>
        </div>
      </div>
      <div className="relative flex overflow-hidden py-2">
        {[0, 1].map((trackIndex) => (
          <ul
            key={trackIndex}
            aria-hidden={trackIndex === 1}
            className="flex w-max animate-marquee gap-40 whitespace-nowrap pl-40 sm:w-[200%] 2xl:gap-80 2xl:pl-80"
          >
            {logos.map((item, index) => (
              <li
                key={index}
                className="group flex flex-col items-center gap-2 opacity-30 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <span className="text-white transition-colors duration-300 group-hover:text-amber-400">
                  {item.icon}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 transition-colors duration-300 group-hover:text-slate-200">
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};
