import { Github, Globe, MessageCircle, Phone } from "lucide-react";

const socials = [
  { href: "#", label: "WhatsApp", icon: MessageCircle },
  { href: "#", label: "GitHub", icon: Github },
  { href: "#", label: "Website", icon: Globe },
];

export const StudioContact = () => {
  return (
    <section id="contato" className="w-full bg-slate-950 px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-16 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-sky-200/70">
            Contato
          </p>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Vamos construir algo incrível juntos?
          </h2>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-300">
            Preencha o formulário ou fale com a gente pelos canais diretos.
            Respondemos em até 24h.
          </p>

          <div className="mt-10 space-y-5 text-slate-200">
            {/* <div className="flex items-center gap-4">
              <Mail className="h-5 w-5 text-amber-300" />
              <span>contato@codandoideias.com</span>
            </div> */}
            <div className="flex items-center gap-4">
              <Phone className="h-5 w-5 text-amber-300" />
              <span>+55 (31) 999197-3835</span>
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="studio-panel inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-slate-100 transition hover:border-popover-foreground hover:text-popover-foreground"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-8 shadow-2xl shadow-slate-950/50">
          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  Nome
                </span>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300"
                />
              </label>

              <label className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                  E-mail
                </span>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300"
                />
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                Serviço de interesse
              </span>
              <select className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-amber-300">
                <option>Landing Page</option>
                <option>Site Institucional</option>
                <option>Sistema Personalizado</option>
                <option>Aplicativo Mobile</option>
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                Mensagem
              </span>
              <textarea
                rows={5}
                placeholder="Conte-nos sobre seu projeto..."
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-amber-300"
              />
            </label>

            <button className="studio-gold-surface w-full rounded-xl px-6 py-4 text-lg font-bold text-slate-950 transition hover:brightness-110">
              Enviar solicitação
            </button>
          </form>
        </div> */}
      </div>
    </section>
  );
};
