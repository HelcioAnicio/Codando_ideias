import { Gauge, MonitorSmartphone, SearchCheck } from "lucide-react";
import Image from "next/image";

const items = [
  {
    title: "Performance Extrema",
    description:
      "Carregamento rápido para segurar atenção, melhorar SEO e aumentar conversão.",
    icon: Gauge,
  },
  {
    title: "Design Responsivo",
    description:
      "Experiência consistente em qualquer tela, do celular ao desktop ultrawide.",
    icon: MonitorSmartphone,
  },
  {
    title: "SEO de Resultados",
    description:
      "Código estruturado para indexação, conteúdo rastreável e boa saúde técnica.",
    icon: SearchCheck,
  },
];

export const StudioResources = () => {
  return (
    <section className="bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200/70">
            Excelência técnica
          </p>
          <h2 className="max-w-2xl text-4xl font-bold text-white md:text-5xl">
            Entregas com visual premium e base sólida para crescer.
          </h2>

          <div className="mt-12 space-y-8">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-800 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-slate-300">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900">
            <Image
              height={300}
              width={300}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT0TWXvmtsTKsKzVSlPtxgGTWuhZ-Ffjmh4jpw27r7_4E2gCyPRIQn_00b_KJxy2jngvpJr8VMc76BMFk0cE-X8GPPIknusQ7RHNq0oXDCrNpR40JBoXUlNsfI3ZSBN9-C8-d3tZkMit8GxT5hngWHVvpN54EgG3xj7LyJOJvXQfTGnoPkU5qNHVx3u6D6b4E-iqrml89PAimSiqAk8fpsh_WzxPKia6PcrLAwlJIummDQz_WW6OTZ69V7MBwe8fND9qHWgBTAWgA"
              alt="Editor de código em tema escuro"
              className="aspect-square h-full w-full object-cover opacity-70 mix-blend-screen"
            />
          </div>

          <div className="studio-panel absolute -bottom-6 left-6 rounded-2xl border border-white/10 p-5 shadow-xl">
            <p className="text-sm text-slate-400">PageSpeed Score</p>
            <p className="text-3xl font-black text-amber-300">100/100</p>
          </div>
        </div>
      </div>
    </section>
  );
};
