// components/Services.tsx
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
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

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
    <section id="services" className="relative isolate overflow-hidden bg-transparent">
      {/* animated background (fills this section only) */}
      <div className="absolute inset-0 -z-30 opacity-[0.32]">
        {/* <BackgroundGradientAnimation fill="parent" size="70%" blendingValue="screen" /> */}
      </div>

      {/* brand glows + faint grid */}
      <div className="pointer-events-none absolute inset-0 -z-20
        bg-[radial-gradient(900px_450px_at_20%_0%,theme(colors.brand.500/.14),transparent_60%),
            radial-gradient(700px_400px_at_90%_110%,theme(colors.brand.400/.08),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        bg-[size:64px_64px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(120% 80% at 50% 30%, black 55%, transparent 95%)",
          maskImage:
            "radial-gradient(120% 80% at 50% 30%, black 55%, transparent 95%)",
        }}
      />

      {/* content */}
      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-20 xl:px-28 2xl:px-40 pt-16 sm:pt-20 md:pt-24 pb-14 md:pb-20">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
            Our Services
          </span>

          <h3 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Everything you need to grow your solar business
          </h3>

          <p className="mt-3 text-white/70 max-w-3xl mx-auto">
            Comprehensive digital marketing and automation built around the solar buyer journey —
            from high-intent leads to WhatsApp follow-ups and auto-quotes.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 relative z-10">
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
        "group/feature relative flex flex-col gap-2 rounded-2xl p-6 sm:p-7 lg:p-8 border border-white/5 bg-ink-800/40 backdrop-blur-sm transition-colors",
        "hover:bg-ink-800/70",
        // keep grid lines only on large screens
        "lg:[&:not(:nth-child(4n+1))]:border-l-0 lg:[&:nth-child(-n+4)]:border-b-0"
      )}
    >
      {/* Accent bar */}
      <div className="absolute left-0 top-6 sm:top-7 lg:top-8 h-5 sm:h-6 lg:h-6 w-1 rounded-tr-full rounded-br-full bg-white/10 transition-all duration-200 group-hover/feature:h-7 group-hover/feature:bg-brand-500" />

      <div className="mb-2 sm:mb-3 text-brand-400">
        {/* Slightly larger icons on bigger screens */}
        <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7">{icon}</div>
      </div>

      <div className="text-base sm:text-lg font-bold text-white">
        <span className="inline-block transition-transform group-hover/feature:translate-x-1">
          {title}
        </span>
      </div>

      <p className="text-sm sm:text-[15px] text-white/70 max-w-xs">{description}</p>
    </div>
  );
}
