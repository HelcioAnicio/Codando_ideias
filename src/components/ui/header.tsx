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
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Card } from "./card";
import Logo3 from "../../../public/logo3.svg";
import Logo2 from "../../../public/logo2.svg";

import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-max border-none bg-background shadow-none">
      <Card className="h-full rounded-t-none border-none bg-background px-5 py-5 shadow-none">
        <div className="m-auto flex max-w-5xl items-center justify-between">
          {theme === "light" ? (
            <Image className="w-40 lg:w-52" src={Logo3} alt="Logo" />
          ) : (
            <Image className="w-40 lg:w-52" src={Logo2} alt="Logo" />
          )}

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-7">
              <li className="flex items-center gap-1 text-xs text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground md:text-sm">
                <Link href="#home">Home</Link>
              </li>
              <li className="flex items-center gap-1 text-xs text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground md:text-sm">
                <Link href="#projects">Projetos</Link>
              </li>
              <li className="flex items-center gap-1 text-xs text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground md:text-sm">
                <Link href="#whyCodandoIdeias">Nosso trabalho</Link>
              </li>
              <li className="flex items-center gap-1 text-xs text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground md:text-sm">
                <Link href="#footer">Fale comigo</Link>
              </li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-none text-foreground"
                  >
                    <Sun className="scale-100transition-all h-[1.2rem] w-[1.2rem] rotate-0 dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ul>
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
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
                className="flex flex-col gap-10 border-none pt-16"
              >
                <SheetHeader>
                  <SheetTitle>
                    {theme === "light" ? (
                      <Image className="w-40 lg:w-52" src={Logo3} alt="Logo" />
                    ) : (
                      <Image className="w-40 lg:w-52" src={Logo2} alt="Logo" />
                    )}
                  </SheetTitle>
                </SheetHeader>
                <SheetDescription>
                  <nav>
                    <ul className="flex flex-col gap-6">
                      <SheetClose asChild>
                        <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground">
                          <Link href="#home">Home</Link>
                        </li>
                      </SheetClose>
                      <SheetClose asChild>
                        <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground">
                          <Link href="#projects">Projetos</Link>
                        </li>
                      </SheetClose>
                      <SheetClose asChild>
                        <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground">
                          <Link href="#whyCodandoIdeias">Nosso trabalho</Link>
                        </li>
                      </SheetClose>
                      <SheetClose asChild>
                        <li className="flex w-max items-center gap-1 text-primary-foreground transition-all duration-300 hover:border-b hover:border-b-popover-foreground hover:text-popover-foreground">
                          <Link href="#footer">Fale comigo</Link>
                        </li>
                      </SheetClose>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="border-none text-foreground"
                          >
                            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => setTheme("light")}>
                            Light
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setTheme("dark")}>
                            Dark
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => setTheme("system")}>
                            System
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
