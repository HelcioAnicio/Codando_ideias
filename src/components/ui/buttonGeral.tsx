import Link from "next/link";
import { Button } from "./button";

interface ContentButton {
  text: string;
  link: string;
}

export const ButtonGeral = ({ text, link }: ContentButton) => {
  return (
    <Link href={link} className="mt-4">
      <Button className="rounded-lg bg-popover-foreground bg-gradient-to-br from-popover-foreground from-60% to-foreground px-8 py-7 text-sm font-bold uppercase tracking-wider text-background shadow-lg transition-all hover:bg-popover-foreground hover:brightness-110 md:px-20 md:py-8">
        {text}
      </Button>
    </Link>
  );
};
