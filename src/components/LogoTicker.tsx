// components/LogoTicker.tsx
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Logo = { src: string; alt: string; href?: string };

type Props = {
  logos: Logo[];
  speed?: number;
  logoHeight?: number;
  cardHeight?: number;
};

export default function LogoTicker({
  logos,
  speed = 20,
  logoHeight = 56,
  cardHeight = 96,
}: Props) {
  const reduceMotion = useReducedMotion();
  const segmentRef = React.useRef<HTMLDivElement | null>(null);
  const [distance, setDistance] = React.useState(0);

  React.useLayoutEffect(() => {
    const measure = () => {
      if (!segmentRef.current) return;
      setDistance(segmentRef.current.getBoundingClientRect().width);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (segmentRef.current) ro.observe(segmentRef.current);
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, [logos.length]);

  return (
    <section aria-label="Trusted partners" className="relative isolate w-full overflow-hidden bg-ink-900">
      <div className="pointer-events-none absolute inset-x-0 bottom-[-25%] h-[140%] bg-[radial-gradient(60%_60%_at_50%_90%,theme(colors.brand.500/.35),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 sm:h-14 md:h-16 bg-gradient-to-b from-ink-900 to-transparent" />

      {/* tighter top/bottom spacing on mobile */}
      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 pt-3 pb-6 sm:pt-4 sm:pb-8 md:pt-6 md:pb-10">
        <div className="mb-3 sm:mb-4 md:mb-6 flex items-center justify-center">
          <span className="inline-flex items-center rounded-full border border-brand-500/25 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-300">
            Trusted by top solar teams
          </span>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5 md:p-6 backdrop-blur-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 md:w-28 lg:w-36 bg-gradient-to-r from-ink-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 md:w-28 lg:w-36 bg-gradient-to-l from-ink-900 to-transparent" />

          <motion.div
            key={distance}
            className="flex items-center gap-4 sm:gap-5 md:gap-6 will-change-transform"
            animate={reduceMotion || distance === 0 ? undefined : { x: [0, -distance] }}
            transition={reduceMotion || distance === 0 ? undefined : { duration: speed, ease: "linear", repeat: Infinity }}
          >
            <div ref={segmentRef} className="flex items-center gap-4 sm:gap-5 md:gap-6">
              {logos.map((logo, i) => (
                <LogoCard key={`A-${logo.alt}-${i}`} logo={logo} logoHeight={logoHeight} cardHeight={cardHeight} />
              ))}
            </div>
            <div aria-hidden className="flex items-center gap-4 sm:gap-5 md:gap-6">
              {logos.map((logo, i) => (
                <LogoCard key={`B-${logo.alt}-${i}`} logo={logo} logoHeight={logoHeight} cardHeight={cardHeight} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoCard({
  logo,
  logoHeight,
  cardHeight,
}: {
  logo: { src: string; alt: string; href?: string };
  logoHeight: number;
  cardHeight: number;
}) {
  const Img = (
    <img
      src={logo.src}
      alt={logo.alt}
      className="block select-none opacity-80 transition-opacity duration-200 group-hover:opacity-90 h-8 sm:h-10 md:h-12 lg:h-14"
      style={{ maxHeight: logoHeight }}
      draggable={false}
      onError={(e) => {
        console.warn(`[LogoTicker] Failed to load logo: ${logo.alt} (${logo.src})`);
        (e.currentTarget as HTMLImageElement).style.opacity = "0.4";
      }}
    />
  );

  return (
    <div
      className="
        flex shrink-0 items-center justify-center
        rounded-2xl border border-white/10 bg-white/90 px-5 sm:px-7 md:px-8
        w-[160px] sm:w-[200px] md:w-[240px]
        h-20 sm:h-24 md:h-28
        shadow-[0_4px_20px_rgba(0,0,0,0.25)]
      "
      style={{ maxHeight: cardHeight }}
    >
      {logo.href ? (
        <a
          href={logo.href}
          aria-label={logo.alt}
          target="_blank"
          rel="noreferrer"
          className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60"
        >
          {Img}
        </a>
      ) : (
        Img
      )}
    </div>
  );
}
