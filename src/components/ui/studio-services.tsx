import { Building2, MonitorSmartphone, Rocket, Smartphone } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Sistemas sob medida",
    description:
      "ERP, CRM e dashboards desenvolvidos para escalar sua operação com segurança e performance.",
    icon: MonitorSmartphone,
    featured: true,
    tags: ["Scalable", "Secure"],
  },
  {
    title: "Landing Pages",
    description:
      "Conversão otimizada e design persuasivo para campanhas de alta performance.",
    icon: Rocket,
  },
  {
    title: "Apps Mobile",
    description:
      "Experiências fluidas para iOS e Android com foco total em produto e UX.",
    icon: Smartphone,
  },
  {
    title: "Sites Institucionais",
    description:
      "Presença digital forte para posicionar a sua marca com clareza e autoridade.",
    icon: Building2,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDb5StwDA7A4xsMq2nm4M_WanuG59x5j9TUDcpwYQJPoEs_YthhrO0XA8mHA54IAtqPuwrRmxON0hlsCIvG-dzPiSuENG0tTsEeXQmk5AanfA2F56CVH4uSsFsqLi-98kCBMDFoQV6-7ZVsi3gPn9DCYExSZWdlWVnf2-CjYwo0Mf84ZKC3GS2rGXds6FtQF7T1ySWGk5LVoGsturgjFqBmJrJJSmI9BZVY8yuVCL6wE0DErcX-6XHjG259SMbR7HxuZ0CHunAaPd0",
  },
];

export const StudioServices = () => {
  return (
    <section id="servicos" className="bg-slate-900 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300/80">
            Arquitetura de soluções
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Nossa maestria técnica aplicada aos seus objetivos de negócio.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isWide = service.featured || index === services.length - 1;

            return (
              <article
                key={service.title}
                className={[
                  "rounded-[1.75rem] border border-white/10 bg-slate-800/80 p-8 transition hover:border-amber-300/30 hover:bg-slate-800",
                  isWide ? "md:col-span-2" : "",
                  service.featured ? "bg-slate-800" : "",
                  service.image
                    ? "flex flex-col gap-8 md:flex-row md:items-center"
                    : "",
                ].join(" ")}
              >
                <div className="flex-1">
                  <Icon className="mb-6 h-10 w-10 text-amber-300" />
                  <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="max-w-xl text-lg leading-8 text-slate-300">
                    {service.description}
                  </p>

                  {service.tags ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-slate-600 bg-slate-700/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                {service.image ? (
                  <Image
                    height={300}
                    width={300}
                    src={service.image}
                    alt="Mockup de site institucional em notebook"
                    className="h-56 w-full rounded-2xl object-cover shadow-2xl md:w-72"
                  />
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
