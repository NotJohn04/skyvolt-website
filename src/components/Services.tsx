// components/Services.tsx
import React from "react";
import { cn } from "./ui/utils";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconMailBolt,
  IconFileDollar,
  IconRobot,
  IconReportAnalytics,
  IconArrowsSplit2,
  IconCalendarClock,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  // Grounded in Skyvolt’s actual offer stack
  const features = [
    {
      title: "Facebook & Instagram Ads",
      description:
        "High-intent solar lead gen with niche-specific creatives and instant forms.",
      impact: "Steady flow of qualified leads.",
      icon: <IconBrandFacebook />,
    },
    {
      title: "AI WhatsApp Chatbot",
      description:
        "Greets leads instantly, answers FAQs, qualifies, and nudges the next step.",
      impact: "Faster replies, higher conversion.",
      icon: <IconBrandWhatsapp />,
    },
    {
      title: "Instant SMS & Email Follow-ups",
      description:
        "Auto sequences keep prospects warm and bring them back to the quote.",
      impact: "No lead goes cold.",
      icon: <IconMailBolt />,
    },
    {
      title: "Quotation Automation",
      description:
        "Personalised proposals with ROI, savings, and system details sent in minutes.",
      impact: "Speed to value = more booked calls.",
      icon: <IconFileDollar />,
    },
    {
      title: "CRM & Pipeline Automation",
      description:
        "Track every lead from ad click to sale with clear conversion data.",
      impact: "Zero blind spots for the sales team.",
      icon: <IconReportAnalytics />,
    },
    {
      title: "Lead Distribution Automation",
      description:
        "Auto-assign qualified leads to the right salesperson instantly.",
      impact: "More time selling, less admin.",
      icon: <IconArrowsSplit2 />,
    },
    {
      title: "Google Meet Booking",
      description:
        "One-tap booking links so serious prospects lock in a call fast.",
      impact: "Shorter sales cycle.",
      icon: <IconCalendarClock />,
    },
    {
      title: "AI-Driven Sales Assist",
      description:
        "Chatbot + scripts hand prospects to humans with full context.",
      impact: "Higher close rates on hot leads.",
      icon: <IconRobot />,
    },
  ];

  return (
    <section id="services" className="relative isolate overflow-hidden bg-transparent">
      {/* brand glows + faint grid */}
      <div className="pointer-events-none absolute inset-0 -z-20
        bg-[radial-gradient(900px_450px_at_20%_0%,theme(colors.brand.500/.14),transparent_60%),
            radial-gradient(700px_400px_at_90%_110%,theme(colors.brand.400/.08),transparent_60%)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]
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
            Full-funnel marketing and automation for solar EPCs — from high-intent
            leads to WhatsApp follow-ups, instant quotes, and booked meetings.
          </p>
        </div>

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 relative z-10">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({
  title,
  description,
  impact,
  icon,
}: {
  title: string;
  description: string;
  impact: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/feature relative flex flex-col gap-2 rounded-2xl p-6 sm:p-7 lg:p-8",
        "border border-white/5 bg-ink-800/40 backdrop-blur-sm transition-colors",
        "hover:bg-ink-800/70",
        // keep grid lines only on large screens
        "lg:[&:not(:nth-child(4n+1))]:border-l-0 lg:[&:nth-child(-n+4)]:border-b-0"
      )}
    >
      {/* Accent bar */}
      <div className="absolute left-0 top-6 sm:top-7 lg:top-8 h-5 sm:h-6 w-1 rounded-tr-full rounded-br-full bg-white/10 transition-all duration-200 group-hover/feature:h-7 group-hover/feature:bg-brand-500" />

      <div className="mb-2 sm:mb-3 text-brand-400">
        <div className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7">{icon}</div>
      </div>

      <div className="text-base sm:text-lg font-bold text-white">
        <span className="inline-block transition-transform group-hover/feature:translate-x-1">
          {title}
        </span>
      </div>

      <p className="text-sm sm:text-[15px] text-white/70">{description}</p>

      <p className="mt-2 text-xs font-medium text-brand-400">
        Impact: <span className="text-brand-300">{impact}</span>
      </p>
    </div>
  );
}
