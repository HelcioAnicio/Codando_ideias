import Link from "next/link";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Alpha Pay Dashboard",
    description: "Sistema financeiro com IA e visualização de dados em tempo real.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCflea1U6VIcQNHg1K-mPKsiEeM1TvSxLwaLb7qfaetZKaB4ekxg0Hwb0npVSDKmGhmZrIZd7Wjwm2-ikLPn8hosXCBMveypcQhbIQ8nFGDdj1lwdAF4Mg8faV58B7ogMW7fXCEPRYqmhViA4BQ-KBZg4oD_k0mNCirOsmGYeaFKNaW3HkZwgfYizip08OJcgo_PH0lAuxsPpLNxFRK5ZuoUuiXoTQ7D6Mm_I5KyzhKyYp96GmKZhAZWig35nqE8Bu0Kg3-R4UlbyE",
  },
  {
    title: "Lumina Studio",
    description:
      "Landing page de alta conversão com direção criativa para posicionamento premium.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDgcsZIwEYVzXAd489dSoVbCk7oLj2HKdzGaVi5QkEOQXMpJlKhcOXCQTohtMEbf5GsJk-6VIsQhlK7za-PALJfpzgUI7Bla3mXg8lomFYlSgtOVaaWrW1gQAL2RHIv7-uWmmwPRSKOcRzbIp7-t52-M870UqDFumeW1LFlRa-Jto6FRjbuGp7oBMbhMEqw682WWOPOrbX4OOAKn_XpKi6zLuALPsVobB1RERlXtVIN62Kty_sQmTa3PPUXSjsD2qJ99pHUiMLdzrk",
  },
];

export const StudioPortfolio = () => {
  return (
    <section id="portfolio" className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200/70">
              Portfólio
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Projetos que definem nosso padrão de qualidade.
            </h2>
          </div>

          <Link
            href="#contato"
            className="inline-flex items-center gap-2 font-bold text-amber-300 transition hover:gap-3"
          >
            Falar sobre um projeto
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {portfolioItems.map((item) => (
            <article key={item.title} className="group">
              <div className="relative mb-6 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
