import { Button } from "./ui/button";

const LOOM_ID = "170782578db743208b9a34d6020eb9a4";
const LOOM_SHARE = `https://www.loom.com/share/${LOOM_ID}`;
const LOOM_EMBED = `https://www.loom.com/embed/${LOOM_ID}`;

export function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden bg-ink-900 text-white">
      {/* seam into hero */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-20 bg-gradient-to-b from-transparent to-ink-900" />

      {/* subtle brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_0%,theme(colors.brand.500/.12),transparent_60%)]" />

      <div className="relative container mx-auto px-4 pt-12 pb-16 md:pt-20 md:pb-24">
        <h2 className="text-center text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          <span className="block">AI-Driven Marketing</span>
          <span className="block">
            That Books <span className="text-brand-500">More Solar Jobs.</span>
          </span>
        </h2>

        <p className="mt-5 md:mt-6 text-center text-base md:text-xl text-white/70 max-w-4xl mx-auto">
          We run the full funnel for solar EPCs: Meta ads → WhatsApp AI chatbot → instant
          SMS/Email follow-ups → auto-generated quotes → one-tap calendar booking →
          pipeline reporting. No hype — just systems that turn interest into appointments.
        </p>

        {/* Video */}
        <div className="mt-8 md:mt-12">
          <div className="relative mx-auto aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800/60 shadow-xl backdrop-blur">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={LOOM_EMBED}
              title="How Skyvolt’s AI-driven solar marketing system works"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          {/* Small fallback/open-in-loom link */}
          <div className="mt-3 text-center text-sm text-white/60">
            Having trouble?{" "}
            <a
              href={LOOM_SHARE}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/30 hover:decoration-white"
            >
              Open video in a new tab
            </a>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#contact">
              <Button size="lg" className="bg-white text-brand-600 hover:bg-white/90">
                Schedule Free Consultation
              </Button>
            </a>
            <a href="#results">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10"
              >
                See Case Studies
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
