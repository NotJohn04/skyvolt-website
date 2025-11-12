import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import React from "react";

export default function Demo() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <div className=" pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_0%,theme(colors.brand.500/.12),transparent_60%)]" />

    <div className="bg-ink-900 text-white min-h-screen">
      <Header />

      {/* remove `isolate` to avoid stacking weirdness with the drawer */}
      <main className="relative overflow-visible pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-16 sm:pb-20">
        {/* Background ornaments */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 -top-32 sm:-top-40 md:-top-48 h-[38rem] w-[38rem] sm:h-[50rem] sm:w-[50rem] md:h-[60rem] md:w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,theme(colors.brand.500/.20),transparent_70%)] blur-3xl" />
          <div className="absolute right-[-20%] top-1/3 h-[22rem] w-[22rem] sm:h-[30rem] sm:w-[30rem] md:h-[36rem] md:w-[36rem] bg-[radial-gradient(closest-side,theme(colors.brand.400/.16),transparent_70%)] blur-3xl" />
          <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:56px_56px] sm:bg-[size:64px_64px]" />
        </div>

        <section className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">nav
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Interactive Demo <span className="text-brand-500">(Coming Soon)</span>
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-white/70">
              We’re building a live walkthrough. Meanwhile, book a quick call and we’ll show it to you.
            </p>

            <a
              href="/contact"
              className="mt-6 inline-flex w-full sm:w-auto items-center justify-center rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500/60"
            >
              Schedule a Free Consultation
            </a>

            <div className="mt-8 text-xs sm:text-sm text-white/60">
              Want a sneak peek?{" "}
              <a
                href="/Skyvolt-Solar-Company-Profile.pdf"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-white/30 hover:decoration-white"
              >
                Download our company profile
              </a>
              .
            </div>
          </div>

          <div className="mt-14 sm:mt-16 md:mt-20 grid gap-4 sm:gap-6 sm:grid-cols-2">
            <InfoCard
              title="What you'll see soon"
              items={["Live ad → chatbot → quote flow", "Realtime pipeline tracking", "Calendar booking automation"]}
            />
            <InfoCard
              title="Get early access"
              items={["Priority onboarding", "Founders’ walkthrough", "Beta pricing for early users"]}
            />
          </div>
        </section>

        <div className="h-16 sm:h-20" />
      </main>

      <Footer />
    </div>
    </section>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur-sm">
      <h2 className="text-lg sm:text-xl font-semibold">{title}</h2>
      <ul className="mt-3 space-y-2 text-sm text-white/70">
        {items.map((t, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-2 inline-block size-1.5 rounded-full bg-brand-500" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
