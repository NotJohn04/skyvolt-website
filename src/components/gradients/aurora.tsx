import React from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../ui/utils";

type Props = { className?: string };

export default function Aurora({ className }: Props) {
  return (
    <div
      aria-hidden
      className={twMerge(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      {/* soft radial glows */}
      <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.brand.400/.35),transparent_70%)] blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-[45rem] w-[45rem] rounded-full bg-[radial-gradient(closest-side,theme(colors.brand.600/.30),transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.79_0.18_70)/.25,transparent_70%)] blur-2xl" />
    </div>
  );
}
