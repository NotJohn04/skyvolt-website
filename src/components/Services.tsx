// service.tsx
import React from "react";
import { cn } from "./ui/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    { title: "Built for developers", description: "Built for engineers, developers, dreamers, thinkers and doers.", icon: <IconTerminal2 /> },
    { title: "Ease of use", description: "It's as easy as using an Apple, and as expensive as buying one.", icon: <IconEaseInOut /> },
    { title: "Pricing like no other", description: "Our prices are best in the market. No cap, no lock, no credit card required.", icon: <IconCurrencyDollar /> },
    { title: "100% Uptime guarantee", description: "We just cannot be taken down by anyone.", icon: <IconCloud /> },
    { title: "Multi-tenant Architecture", description: "You can simply share passwords instead of buying new seats", icon: <IconRouteAltLeft /> },
    { title: "24/7 Customer Support", description: "We are available a 100% of the time. At least our AI Agents are.", icon: <IconHelp /> },
    { title: "Money back guarantee", description: "If you do not like EveryAI, we will convince you to like us.", icon: <IconAdjustmentsBolt /> },
    { title: "And everything else", description: "I just ran out of copy ideas. Accept my sincere apologies", icon: <IconHeart /> },
  ];

  return (
    <section id="services" className="relative isolate overflow-hidden bg-ink-900">
      {/* top seam & brand glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-ink-900" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_20%_0%,theme(colors.brand.500/.12),transparent_60%)]" />

      {/* 128px L/R padding + top 104px */}
      <div className="relative mx-auto max-w-screen-2xl px-52 pt-[104px] pb-20">
        {/* HEADER */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
            Our Services
          </span>
          <h3 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Everything you need to grow your solar business
          </h3>
          <p className="mt-3 text-white/70 max-w-3xl mx-auto">
            Comprehensive digital marketing and automation built around the
            solar buyer journey — from high-intent leads to WhatsApp follow-ups and auto-quotes.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col gap-2 p-8 border border-white/5 bg-ink-800/40 backdrop-blur-sm transition-colors",
        "hover:bg-ink-800/70",
        // keep the nice grid lines on larger screens
        "lg:[&:not(:nth-child(4n+1))]:border-l-0 lg:[&:nth-child(-n+4)]:border-b-0"
      )}
    >
      {/* Accent bar on hover */}
      <div className="absolute left-0 top-8 h-6 w-1 rounded-tr-full rounded-br-full bg-white/10 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-brand-500" />

      <div className="mb-3 text-brand-400">{icon}</div>

      <div className="text-lg font-bold text-white">
        <span className="inline-block transition-transform group-hover/feature:translate-x-1">
          {title}
        </span>
      </div>

      <p className="text-sm text-white/70 max-w-xs">{description}</p>
    </div>
  );
}
