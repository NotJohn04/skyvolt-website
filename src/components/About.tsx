import { Button } from "./ui/button";

export function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-ink-900 text-white"
    >
      {/* NEW: seam that blends the top of this section into the hero */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-transparent to-ink-900" />

      {/* subtle brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_0%,theme(colors.brand.500/.12),transparent_60%)]" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-center text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-white">
          <span className="block">IT’S NOT AN EVENT,</span>
          <span className="block">
            IT’S A <span className="text-brand-500">SCALING WORKSHOP.</span>
          </span>
        </h2>

        <p className="mt-6 text-center text-lg md:text-xl text-white/70 max-w-4xl mx-auto">
          It’s not motivational hype. It’s tactical help solving real-world solar
          sales problems — smoother ops, faster follow-ups, better quotes.
        </p>

        {/* Video placeholder (swap to iframe later) */}
        <div className="mt-10 md:mt-14">
          <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 shadow-xl backdrop-blur">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <div className="text-xs uppercase tracking-widest text-white/50">Vimeo video</div>
                <div className="mt-1 text-base text-white/80">
                  Paste your link later — this is a placeholder.
                </div>
                <code className="mt-4 inline-block rounded bg-white/5 px-3 py-1 text-sm text-white/90">
                  https://player.vimeo.com/video/123456789
                </code>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10">
                    Learn more
                  </Button>
                  <Button className="rounded-full bg-gradient-to-r from-brand-500 to-brand-600">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
            {/* swap with iframe when ready */}
          </div>
        </div>
      </div>
    </section>
  );
}
