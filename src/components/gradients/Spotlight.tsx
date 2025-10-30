// src/components/gradients/Spotlight.tsx
import React from "react";

export const Spotlight: React.FC = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute left-1/2 top-[8rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full
    bg-[radial-gradient(closest-side,white_0%,transparent_60%)] opacity-20 mix-blend-overlay"
  />
);

export default Spotlight;
