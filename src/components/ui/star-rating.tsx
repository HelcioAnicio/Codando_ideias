"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SIZE_CLASSES = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-8 w-8",
} as const;

export function StarRatingDisplay({
  value,
  size = "md",
  className,
}: {
  value: number;
  size?: keyof typeof SIZE_CLASSES;
  className?: string;
}) {
  const rounded = Math.round(Math.min(5, Math.max(0, value)));

  return (
    <div
      className={cn("flex items-center gap-1 text-amber-300", className)}
      role="img"
      aria-label={`${rounded} de 5 estrelas`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn(
            SIZE_CLASSES[size],
            index < rounded ? "fill-current" : "fill-none text-white/20"
          )}
        />
      ))}
    </div>
  );
}

export function StarRatingInput({
  value,
  onChange,
  size = "lg",
}: {
  value: number;
  onChange: (value: number) => void;
  size?: keyof typeof SIZE_CLASSES;
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const display = hovered ?? value;

  return (
    <div
      className="flex items-center gap-1"
      onMouseLeave={() => setHovered(null)}
    >
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={index}
            type="button"
            onClick={() => onChange(starValue === value ? 0 : starValue)}
            onMouseEnter={() => setHovered(starValue)}
            aria-label={`Dar nota ${starValue} de 5`}
            aria-pressed={value >= starValue}
            className="text-amber-300 transition-transform hover:scale-110"
          >
            <Star
              aria-hidden="true"
              className={cn(
                SIZE_CLASSES[size],
                starValue <= display ? "fill-current" : "fill-none text-white/25"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
