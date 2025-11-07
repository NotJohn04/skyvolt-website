// components/Results.tsx
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

type Study = {
  company: string;
  metric: string;
  timeframe: string;
  details: string;
  image: string;
};

export function Results() {
  const caseStudies: Study[] = [
    {
      company: "AmSolar Sdn Bhd",
      metric: "RM120,052/mo new revenue",
      timeframe: "in 2 months",
      details: "Full-funnel ads + WhatsApp automations.",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1600&auto=format&fit=crop",
    },
    {
      company: "Kemuning Structures Sdn Bhd",
      metric: "RM80,640/mo new revenue",
      timeframe: "in 3 months",
      details: "Lead gen + auto-quote flows to speed follow-ups.",
      image:
        "https://images.unsplash.com/photo-1542332213-9b5a5a3e7c38?q=80&w=1600&auto=format&fit=crop",
    },
    {
      company: "Solar Sunyield Sdn Bhd",
      metric: "RM55,060/mo new revenue",
      timeframe: "in 1 month",
      details: "Rapid test-and-scale campaigns with instant replies.",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <section
      id="results"
      className="relative isolate overflow-hidden bg-transparent py-12 sm:py-14 md:py-20"
    >
      <div className="absolute inset-0 -z-40 bg-ink-900" />

      {/* Animated gradient layer (Aceternity) */}
      {/* <div className="absolute inset-0 -z-30">
        <BackgroundGradientAnimation fill="parent" interactive={false} />
      </div> */}

      {/* Brand glows */}
      <div className="pointer-events-none absolute inset-0 -z-20
                      bg-[radial-gradient(900px_450px_at_80%_-10%,theme(colors.brand.500/.15),transparent_60%),radial-gradient(700px_400px_at_20%_110%,theme(colors.brand.400/.10),transparent_60%)]" />

      {/* Subtle grid, masked to center so edges fade out */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]
                   bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
                   bg-[size:64px_64px]"
        style={{
          WebkitMaskImage:
            "radial-gradient(120% 80% at 50% 30%, black 55%, transparent 95%)",
          maskImage:
            "radial-gradient(120% 80% at 50% 30%, black 55%, transparent 95%)",
        }}
      />

      {/* Soft blend to previous section */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-transparent to-ink-900" />

      {/* Container: bigger desktop gutters to center content nicely */}
      <div className="container mx-auto
                      px-4 sm:px-6 lg:px-20 xl:px-28 2xl:px-40">

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/70">
            Proven Results
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Real Growth for Real Solar Companies
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            See how we’ve helped solar companies like yours achieve remarkable results.
          </p>
        </div>

        {/* Mobile: horizontal snap carousel */}
        <div className="md:hidden -mx-4 px-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-pl-4">
          <ul className="flex gap-4 pr-4">
            {caseStudies.map((s, i) => (
              <li key={i} className="snap-start shrink-0 basis-[86%]">
                <Card study={s} />
              </li>
            ))}
          </ul>
        </div>

        {/* md+: responsive grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((s, i) => (
            <Card key={i} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ study }: { study: Study }) {
  return (
    <article
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur
                 hover:border-brand-400/50 hover:shadow-[0_20px_50px_-20px_rgba(255,106,0,.28)]
                 transition-all duration-300"
    >
      {/* Ambient card glow on hover */}
      <div className="pointer-events-none absolute -inset-px -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      bg-[radial-gradient(400px_140px_at_50%_0%,theme(colors.brand.500/.18),transparent_60%)]" />

      {/* Media */}
      <div className="relative overflow-hidden rounded-t-2xl">
        <div className="aspect-[16/9]">
          <ImageWithFallback
            src={study.image}
            alt={study.company}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>

        {/* gradient & chips */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <span className="rounded-full bg-black/60 text-white/90 backdrop-blur px-2.5 py-1 text-xs border border-white/10">
            {study.metric}
          </span>
          <span className="rounded-full bg-white/10 text-white/90 backdrop-blur px-2.5 py-1 text-xs border border-white/10">
            {study.timeframe}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 md:p-6">
        <h3 className="text-white text-lg md:text-xl font-semibold">{study.company}</h3>
        <p className="mt-2 text-white/70 text-sm md:text-base">{study.details}</p>
      </div>
    </article>
  );
}
