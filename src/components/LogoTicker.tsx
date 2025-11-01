// components/LogoTicker.tsx
import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

type Logo = { src: string; alt: string; href?: string };

type Props = {
  logos: Logo[];
  speed?: number;       // seconds to traverse one full copy
  logoHeight?: number;  // px
  cardHeight?: number;  // px
};

export default function LogoTicker({
  logos,
  speed = 20,
  logoHeight = 56,
  cardHeight = 96,
}: Props) {
  const reduceMotion = useReducedMotion();

  // Measure the exact width of ONE full copy of the logo row.
  const segmentRef = React.useRef<HTMLDivElement | null>(null);
  const [distance, setDistance] = React.useState(0);

  React.useLayoutEffect(() => {
    const measure = () => {
      if (!segmentRef.current) return;
      const w = segmentRef.current.getBoundingClientRect().width;
      setDistance(w);
    };
    measure();

    // Keep it correct on resize / asset load.
    const ro = new ResizeObserver(measure);
    if (segmentRef.current) ro.observe(segmentRef.current);
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, [logos.length, logoHeight, cardHeight]);

  return (
    <section
      aria-label="Trusted partners"
      className="relative isolate w-full overflow-hidden bg-ink-900"
    >
      {/* bottom orange glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-[-25%] h-[140%] bg-[radial-gradient(60%_60%_at_50%_90%,theme(colors.brand.500/.35),transparent_70%)] blur-3xl" />
      {/* top vignette */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-900 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1200px] px-32 py-12">
        <div className="mb-6 flex items-center justify-center">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-white/70">
            Trusted by top solar teams
          </span>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-ink-900 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-ink-900 to-transparent" />

          {/* Track: two segments; animate by the exact width of one segment */}
          <motion.div
            key={distance} // restart animation when distance changes
            className="flex items-center gap-6 will-change-transform"
            animate={
              reduceMotion || distance === 0
                ? undefined
                : { x: [0, -distance] }
            }
            transition={
              reduceMotion || distance === 0
                ? undefined
                : { duration: speed, ease: "linear", repeat: Infinity }
            }
          >
            {/* SEGMENT A (measured) */}
            <div ref={segmentRef} className="flex items-center gap-6">
              {logos.map((logo, i) => (
                <LogoCard
                  key={`A-${logo.alt}-${i}`}
                  logo={logo}
                  logoHeight={logoHeight}
                  cardHeight={cardHeight}
                />
              ))}
            </div>

            {/* SEGMENT B (duplicate for seamless loop) */}
            <div aria-hidden className="flex items-center gap-6">
              {logos.map((logo, i) => (
                <LogoCard
                  key={`B-${logo.alt}-${i}`}
                  logo={logo}
                  logoHeight={logoHeight}
                  cardHeight={cardHeight}
                />
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
      height={logoHeight}
      style={{ height: logoHeight, maxHeight: logoHeight }}
      className="block select-none opacity-80 transition-opacity duration-200 group-hover:opacity-90"
      draggable={false}
      onError={(e) => {
        console.warn(
          `[LogoTicker] Failed to load logo: ${logo.alt} (${logo.src})`
        );
        (e.currentTarget as HTMLImageElement).style.opacity = "0.4";
      }}
    />
  );

  return (
    <div
      className="flex w-[240px] shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/90 px-8 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
      style={{ height: cardHeight }}
    >
      {logo.href ? (
        <a
          href={logo.href}
          aria-label={logo.alt}
          target="_blank"
          rel="noreferrer"
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/60 rounded-md"
        >
          {Img}
        </a>
      ) : (
        Img
      )}
    </div>
  );
}
