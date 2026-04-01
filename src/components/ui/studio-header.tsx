import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

const navItems = [
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#precos", label: "Preços" },
];

export const StudioHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/85 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 p-2 text-amber-300">
            <Terminal className="h-5 w-5" />
          </span>
          <span className="font-limelight text-xl text-amber-300 md:text-2xl">
            Codando Ideias
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition hover:text-amber-200"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contato"
            className="studio-gold-surface inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-slate-950 transition hover:brightness-110"
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
