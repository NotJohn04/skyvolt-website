// components/Results.tsx
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

type Stat = {
  label: string;
  value: string;
  sublabel: string;
};

export function Results() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "With Skyvolt, our WhatsApp follow-ups became instant. Lead velocity jumped and ops finally felt smooth.",
      author: "Josh Tyson",
      role: "Product Manager | Capsule",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=320&h=320&auto=format&fit=facearea&facepad=2",
    },
    {
      quote:
        "We’ve iterated campaigns for months and the consistency shows. The pipeline is steady and predictable.",
      author: "Luisa",
      role: "Senior Director of Operations | Fitbit",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=320&h=320&auto=format&fit=facearea&facepad=2",
    },
    {
      quote:
        "Refreshing and thoughtful marketing. Clear copy, modern design, and a process our team can actually run.",
      author: "Alisa Williams",
      role: "Entrepreneur | Happy customer",
      avatar:
        "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?q=80&w=900&h=900&auto=format&fit=facearea&facepad=2",
    },
  ];

  const stats: Stat[] = [
    {
      label: "Lead → appointment rate",
      value: "42–58%",
      sublabel: "with WhatsApp + auto-quote",
    },
    {
      label: "Average CPL (MY)",
      value: "RM12–RM20",
      sublabel: "residential campaigns",
    },
    {
      label: "Time to first reply",
      value: "< 30s",
      sublabel: "AI assistant + triggers",
    },
  ];

  return (
    <section
      id="results"
      className="
        relative isolate overflow-hidden bg-ink-900
        py-16 sm:py-20 lg:py-24
      "
    >
      {/* brand glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-1/3 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-25 bg-brand-600/40" />
        <div className="absolute -bottom-24 left-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-20 bg-brand-400/30" />
      </div>

      {/* decorative corner svg (brand colored) */}
      <div
        className="pointer-events-none absolute -bottom-10 -right-10 opacity-60"
        aria-hidden="true"
      >
        <svg
          className="w-40 h-auto sm:w-64"
          viewBox="0 0 1115 636"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.99 279.321c-2.1 8.013 2.69 16.213 10.71 18.313l130.589 34.231c8.013 2.1 16.212-2.693 18.313-10.707 2.101-8.013-2.693-16.212-10.706-18.313L33.813 272.418 64.24 156.339c2.101-8.013-2.692-16.212-10.706-18.313-8.014-2.1-16.213 2.693-18.314 10.707L0.99 279.321Z"
            className="fill-brand-500"
          />
          <path
            d="M451.609 382.417c-5.39 6.291-4.659 15.761 1.632 21.15l102.522 87.831c6.291 5.39 15.761 4.659 21.15-1.632 5.39-6.292 4.659-15.761-1.632-21.151l-91.131-77.071 78.072-91.131c5.39-6.291 4.659-15.761-1.632-21.15-6.291-5.389-15.761-4.658-21.15 1.633l-87.829 102.521Z"
            className="fill-brand-300"
          />
          <path
            d="M447.448.194c-8.245-.8-15.578 5.236-16.378 13.482l-13.035 134.37c-.8 8.246 5.236 15.578 13.481 16.378 8.246.8 15.579-5.236 16.379-13.481l11.587-119.439 119.439 11.587c8.245.8 15.578-5.236 16.378-13.482.8-8.245-5.236-15.578-13.482-16.378L447.448.194Z"
            className="fill-white/70"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-28 2xl:px-40">
        {/* header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="inline-flex items-center rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
            Proven Results
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Loved by installers and EPCs across Malaysia
          </h2>
          <p className="mt-3 text-white/70">
            Real outcomes from AI-driven ads, WhatsApp automations, and
            instant quotes.
          </p>
        </div>

        {/* testimonial grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex">
              <div className="flex-1 flex flex-col rounded-2xl bg-white shadow-sm overflow-hidden">
                <div className="p-5 md:p-6">
                  <p className="text-[15px] md:text-base leading-relaxed italic text-ink-800">
                    “{t.quote}”
                  </p>
                </div>
                <div className="flex items-center gap-3 bg-ink-700/5 border-t border-black/5 px-5 py-4 md:px-6">
                  <div className="shrink-0">
                    <ImageWithFallback
                      src={t.avatar}
                      alt={t.author}
                      className="size-9 rounded-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-ink-800 truncate">
                      {t.author}
                    </p>
                    <p className="text-xs text-ink-800/60 truncate">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* stats */}
        <div className="mt-14 sm:mt-16 lg:mt-20 grid gap-8 sm:gap-12 lg:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i}>
              <h4 className="text-base sm:text-lg font-semibold text-white">
                {s.label}
              </h4>
              <p className="mt-2 sm:mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-500">
                {s.value}
              </p>
              <p className="mt-1 text-white/60">{s.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
