import { Star } from "lucide-react";
import Image from "next/image";

const quotes = [
  {
    text: "Rapidez e qualidade excepcional. O app ficou exatamente como imaginei.",
    author: "Julia Mendes",
  },
  {
    text: "Melhor investimento em branding digital que já fizemos. Recomendo fortemente.",
    author: "Marco Silva",
  },
  {
    text: "Suporte impecável e código de altíssimo nível. Parceiros estratégicos.",
    author: "Ana Paula",
  },
  {
    text: "Transformaram um sistema legado complexo em uma plataforma moderna e rápida.",
    author: "Bruno Lima",
  },
];

export const StudioTestimonials = () => {
  return (
    <section className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200/70">
            Depoimentos
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            O que nossos parceiros dizem sobre trabalhar com a gente.
          </h2>

          <div className="studio-panel mt-10 rounded-[1.75rem] border border-white/10 p-8">
            <div className="mb-6 flex gap-1 text-amber-300">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
            </div>

            <p className="text-2xl font-light italic leading-10 text-white">
              {
                '"A Codando Ideias não apenas entregou um site, eles construíram uma ferramenta de vendas que triplicou nossa conversão em dois meses."'
              }
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Image
                height={300}
                width={300}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAClvWQQKPqd1X5J49yD0Qf2bj6sTblkKV9HXTQCQDSY_2HTU86BkrNLQmxd6L63wbmw5oEBiZc2n5fSFlDVau61a6ubczLumE4cz4XN8023tcT1NoV2LmYlsaXq6_mSGIIWOia8IVnCQLb5NIF6zlFFbQTwWjpYC8SQdeVrn1GCqBHWlWpSnGrjBwMau89y1cTB2KJYA1UwEZEZFoBMAIRPSlzv54FwIW0s184KnJNmVQVrq-N04d54QzYvGmRaOKnj9A2-_0kc1k"
                alt="Cliente satisfeito"
                className="h-14 w-14 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-white">Ricardo Santos</p>
                <p className="text-sm text-slate-400">
                  CEO, TechFlow Solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {quotes.map((quote, index) => (
            <article
              key={quote.author}
              className={[
                "rounded-[1.5rem] border border-white/10 bg-slate-900 p-6",
                index % 2 === 0 ? "sm:translate-y-8" : "",
              ].join(" ")}
            >
              <p className="italic leading-7 text-slate-200">{`"${quote.text}"`}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-amber-300">
                {quote.author}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
