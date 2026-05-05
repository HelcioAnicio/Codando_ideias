"use client";

import { useEffect, useState, useRef } from "react";

export const StudioAuthorityCardItem = ({ card, delay }: any) => {
  const [cardsVisible, setCardsVisible] = useState(false);
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);
  const Icon = card.icon;

  return (
    <>
      <li
        ref={ref}
        style={{
          transitionDelay: `${delay}ms`,
        }}
        className={`${
          cardsVisible
            ? "translate-x-0 opacity-100 blur-none"
            : "translate-x-full opacity-0 blur-md"
        } relative rounded-3xl border border-card bg-secondary px-7 py-10 shadow-md transition-all duration-1000`}
      >
        <div className="relative z-10">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/30 text-destructive/80">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="mb-4 text-xl font-bold">{card.title}</h3>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-popover-foreground opacity-60">
              {card.eyebrow}
            </p>
            <p className="text-4xl font-black text-foreground">{card.stat}</p>
            <p className="text-sm text-foreground">{card.description}</p>

            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="mb-1 text-xs text-popover-foreground">
                {card.example}
              </p>
              <p className="text-lg font-bold text-destructive">
                {card.impact}
              </p>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
