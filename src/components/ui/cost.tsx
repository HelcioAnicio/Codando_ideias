import { FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import Image from "next/image";
import webSiteRival from "../../../public/webSiteRival.webp";
import webSiteMine from "../../../public/webSiteMine.webp";

export const Cost = () => {
  return (
    <>
      <section className="flex w-full justify-center">
        <article className="flex w-full max-w-5xl flex-col gap-16 px-2 py-10">
          <h3 className="font-headline text-on-surface text-3xl font-bold tracking-tight md:text-5xl">
            Custo de um site medíocre
          </h3>
          <ul className="grid items-center gap-12 lg:grid-cols-2">
            <li className="group relative">
              <div className="bg-surface-container-high/40 relative z-10 space-y-10 rounded-3xl border border-white/5 p-8">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-label text-on-surface-variant text-sm uppercase tracking-widest">
                    Site Amador
                  </span>
                  <div className="text-error flex h-12 w-12 items-center justify-center rounded-full border-4 border-destructive/70 bg-destructive/40 text-lg font-black md:h-16 md:w-16">
                    42
                  </div>
                </div>
                <Image
                  src={webSiteRival}
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="w-full rounded-md"
                />
                <div className="space-y-4">
                  <div className="text-error/80 flex items-center gap-3">
                    <span className="flex items-center gap-2 text-sm">
                      <IoMdCloseCircle className="size-5 min-w-max text-destructive sm:size-6" />
                      Lento e Confuso (LCP &gt; 3.5s)
                    </span>
                  </div>
                  <div className="text-error/80 flex items-center gap-3">
                    <span className="flex items-center gap-2 text-sm">
                      <IoMdCloseCircle className="size-5 min-w-max text-destructive sm:size-6" />
                      Insegurança Visual (CLS Alto)
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 border-t pt-6">
                    <span className="text-on-surface-variant text-sm">
                      Conversão:
                    </span>
                    <span className="text-error text-2xl font-black">0,8%</span>
                  </div>
                </div>
              </div>
            </li>

            <li className="group relative">
              <div className="glass-card aurelian-border relative z-10 space-y-10 rounded-3xl p-8 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                <div className="mb-8 flex items-center justify-between">
                  <span className="font-label text-primary-fixed text-sm uppercase tracking-widest">
                    Arquitetura Soberana
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-green-500 bg-green-500/40 text-lg font-black shadow-[0_0_15px_rgba(233,196,0,0.4)] md:h-16 md:w-16">
                    97
                  </div>
                </div>
                <Image
                  src={webSiteMine}
                  width={400}
                  height={400}
                  alt="Picture of the author"
                  className="w-full"
                />
                <div className="space-y-4">
                  <div className="text-primary-fixed flex items-center gap-3">
                    <span className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="size-5 min-w-max text-green-500 sm:size-6" />
                      Carregamento Instantâneo
                    </span>
                  </div>
                  <div className="text-primary-fixed flex items-center gap-3">
                    <span className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="size-5 min-w-max text-green-500 sm:size-6" />
                      Design que Gera Autoridade
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 border-t pt-6">
                    <span className="text-on-surface-variant text-sm">
                      Conversão:
                    </span>
                    <span className="text-primary-fixed text-3xl font-black">
                      8,4%
                    </span>
                    <span className="text-primary-fixed-dim bg-primary-fixed/10 ml-2 rounded px-2 py-0.5 text-xs">
                      +950% ROI
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};
