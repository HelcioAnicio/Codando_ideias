import { Card, CardContent, CardTitle } from "./card";
import type { ReactNode } from "react";

type CardReasonProps = {
  icon: ReactNode;
  title: string;
  text: string;
  newClassName?: string;
};

export const CardReason = ({
  icon,
  title,
  text,
  newClassName,
}: CardReasonProps) => {
  return (
    <Card
      className={`relative z-20 flex w-max max-w-sm flex-col items-start gap-5 px-4 py-8 ${newClassName} bg-secondary`}
    >
      <CardTitle className="flex items-center gap-2">
        <span className="text-popover-foreground">{icon}</span>
        <span className="md:text-xl">{title}</span>
      </CardTitle>
      <CardContent className="pr-13 max-w-64 p-0 text-sm font-extralight text-foreground/50 md:max-w-max md:text-base">
        {text}
      </CardContent>
    </Card>
  );
};
