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
import { ButtonGeral } from "./buttonGeral";
import { FaInstagram } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex w-full justify-center border-none bg-background font-franklin font-bold shadow-none">
      <Card className="w-full max-w-6xl rounded-t-none border-none bg-background px-5 shadow-none">
        <div className="m-auto flex max-w-6xl items-center justify-between py-4">
          <Image className="w-40 lg:w-52" src={Logo2} alt="Logo" />

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7">
              <li className="relative">
                <Link
                  href="/#home"
                  className="flex items-center gap-1 text-xs text-primary-foreground transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-popover-foreground after:transition-all after:duration-300 hover:after:w-full md:text-sm lg:text-base"
                >
                  Home
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/#projects"
                  className="flex items-center gap-1 text-xs text-primary-foreground transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-popover-foreground after:transition-all after:duration-300 hover:after:w-full md:text-sm lg:text-base"
                >
                  Projetos
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="#services"
                  className="flex items-center gap-1 text-xs text-primary-foreground transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-popover-foreground after:transition-all after:duration-300 hover:after:w-full md:text-sm lg:text-base"
                >
                  Serviços
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="#steps"
                  className="flex items-center gap-1 text-xs text-primary-foreground transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-popover-foreground after:transition-all after:duration-300 hover:after:w-full md:text-sm lg:text-base"
                >
                  Processo criativo
                </Link>
              </li>
              <li className="relative">
                <Link
                  href="/#footer"
                  className="flex items-center gap-1 text-xs text-primary-foreground transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-popover-foreground after:transition-all after:duration-300 hover:after:w-full md:text-sm lg:text-base"
                >
                  Fale comigo
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-10 lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-none"
                >
                  <Menu size={16} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side={"right"}
                className="flex w-full max-w-sm touch-none flex-col gap-10 overflow-y-hidden border-none pt-16"
              >
                <SheetHeader>
                  <SheetTitle>
                    {/* {theme === "light" ? ( */}
                    {/* <Image className="w-40 lg:w-52" src={Logo3} alt="Logo" /> */}
                    {/* ) : ( */}
                    <Image className="w-40 lg:w-52" src={Logo2} alt="Logo" />
                    {/* )} */}
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription>
                  <nav>
                    <ul className="flex flex-col gap-6 font-franklin font-bold">
                      <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground">
                        <SheetClose asChild>
                          <Link href="/#home">Home</Link>
                        </SheetClose>
                      </li>
                      <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground">
                        <SheetClose asChild>
                          <Link href="/#projects">Projetos</Link>
                        </SheetClose>{" "}
                      </li>
                      <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground">
                        <SheetClose asChild>
                          <Link href="#services">Serviços</Link>
                        </SheetClose>
                      </li>
                      <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground">
                        <SheetClose asChild>
                          <Link href="#steps">Processo criativo</Link>
                        </SheetClose>{" "}
                      </li>
                      <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground">
                        <SheetClose asChild>
                          <Link href="/#footer">Fale comigo</Link>
                        </SheetClose>
                      </li>
                      <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300">
                        <SheetClose asChild>
                          <Link
                            href="https://www.instagram.com/dev.helcioanicio"
                            target="_blank"
                            className="relative z-10 flex items-center gap-1 underline decoration-popover-foreground underline-offset-4 transition-transform duration-200 hover:-translate-y-1 hover:scale-105"
                          >
                            <FaInstagram className="rounded-lg bg-gradient-to-tr from-[#F59618] via-[#F7085C] to-[#E11CAE] p-1 text-3xl text-foreground" />
                            @dev.helcioanicio
                          </Link>
                        </SheetClose>
                      </li>
                      <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300">
                        <SheetClose asChild>
                          <ButtonGeral
                            text="Quero ser encontrado"
                            link="https://wa.me/5531991973835?text=Olá,+quero+um+site+que+me+permita+ser+encontrado!"
                            classes="py-4 mx-auto"
                          />
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
