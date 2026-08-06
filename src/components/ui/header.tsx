"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Card } from "./card";
import Logo2 from "../../../public/logo2.svg";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram } from "react-icons/fa6";
import { ctaButtonClasses, CtaShine } from "./buttonGeral";

const HEADER_BG_BY_ROUTE: Record<string, string> = {
  "/projetos": "bg-background/95 backdrop-blur-md border-b border-white/5",
  "/servicos": "bg-secondary/95 backdrop-blur-md border-b border-white/5",
  "/duvidas": "bg-secondary/95 backdrop-blur-md border-b border-white/5",
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projetos", label: "Projetos" },
  { href: "/servicos", label: "Serviços" },
  { href: "/duvidas", label: "Dúvidas" },
  { href: "/#footer", label: "Contato" },
];

export const Header = () => {
  const pathname = usePathname();
  const headerBg = HEADER_BG_BY_ROUTE[pathname] ?? "bg-background";

  return (
    <header
      className={`fixed top-0 z-50 flex w-full justify-center border-none font-franklin font-bold shadow-none transition-colors duration-300 ${headerBg}`}
    >
      <Card className="w-full max-w-6xl rounded-t-none border-none bg-transparent px-5 shadow-none">
        <div className="m-auto flex max-w-6xl items-center justify-between py-4">
          <Image className="w-40 lg:w-52" src={Logo2} alt="Codando Ideias" />

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <li key={link.href} className="relative">
                    <Link
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center gap-1 text-xs transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-popover-foreground after:transition-all after:duration-300 md:text-sm lg:text-base ${
                        isActive
                          ? "text-popover-foreground after:w-full"
                          : "text-primary-foreground after:w-0 hover:after:w-full"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link href="/#calculadora" className={ctaButtonClasses("primary", "sm")}>
                  <CtaShine />
                  Calcular potencial
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-10 lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-none"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu size={16} aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={"right"}
                className="flex w-full max-w-sm touch-none flex-col gap-10 overflow-y-hidden border-none pt-16"
              >
                <SheetHeader>
                  <SheetTitle>
                    <Image className="w-40 lg:w-52" src={Logo2} alt="Codando Ideias" />
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription>
                  <nav>
                    <ul className="flex flex-col gap-6 font-franklin font-bold">
                      {NAV_LINKS.map((link) => {
                        const isActive = pathname === link.href;

                        return (
                          <li
                            key={link.href}
                            className={`flex w-max items-center gap-1 border-b transition-all duration-300 hover:border-b-popover-foreground hover:text-popover-foreground ${
                              isActive
                                ? "border-b-popover-foreground text-popover-foreground"
                                : "border-b-transparent text-primary-foreground"
                            }`}
                          >
                            <SheetClose asChild>
                              <Link href={link.href} aria-current={isActive ? "page" : undefined}>
                                {link.label}
                              </Link>
                            </SheetClose>
                          </li>
                        );
                      })}
                      <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300">
                        <SheetClose asChild>
                          <Link
                            href="https://www.instagram.com/dev.helcioanicio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 flex items-center gap-1 underline decoration-popover-foreground underline-offset-4 transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
                          >
                            <FaInstagram
                              aria-hidden="true"
                              className="rounded-lg bg-gradient-to-tr from-[#F59618] via-[#F7085C] to-[#E11CAE] p-1 text-3xl text-foreground"
                            />
                            @dev.helcioanicio
                            <span className="sr-only"> (abre em nova aba)</span>
                          </Link>
                        </SheetClose>
                      </li>

                      <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300">
                        <SheetClose asChild>
                          <Link href="/#calculadora" className={ctaButtonClasses("primary", "sm")}>
                            <CtaShine />
                            Calcular potencial
                          </Link>
                        </SheetClose>
                      </li>
                    </ul>
                  </nav>
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Card>
    </header>
  );
};
