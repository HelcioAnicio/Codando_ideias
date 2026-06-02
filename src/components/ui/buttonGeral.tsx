import Link from "next/link";

type ButtonProps = {
  text: string;
  link: string;
  variant?: "primary" | "secondary";
  classes?: string;
};

export const ButtonGeral = ({
  text,
  link,
  classes,
  variant = "primary",
}: ButtonProps) => {
  const buttonStyle =
    variant === "primary"
      ? "bg-popover-foreground bg-gradient-to-br from-popover-foreground from-60% to-gray-200 text-primary hover:bg-popover-foreground hover:brightness-110"
      : "bg-transparent border border-secondary-foreground text-foreground hover:bg-accent/5";

  return (
    <Link href={link} className="mt-4">
      <button
        className={`w-full whitespace-normal rounded-lg px-4 py-4 text-sm font-bold uppercase tracking-wider shadow-lg transition-all lg:text-base ${buttonStyle} ${classes}`}
      >
        {text}
      </button>
    </Link>
  );
};
