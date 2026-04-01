import Link from "next/link";
import { Terminal } from "lucide-react";

const footerLinks = [
  { href: "#servicos", label: "Landing Pages" },
  { href: "#portfolio", label: "Apps" },
  { href: "#precos", label: "Custom Systems" },
  { href: "#contato", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
];

export const StudioFooter = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950 px-6 py-16 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 text-center">
        <div className="flex items-center gap-4">
          <span className="rounded-full border border-amber-400/30 bg-amber-400/10 p-3 text-amber-300">
            <Terminal className="h-6 w-6" />
          </span>
          <span className="font-limelight text-xl text-amber-300">
            Codando Ideias
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-[0.25em] text-slate-500">
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-slate-500">
          © 2024 Codando Ideias. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
