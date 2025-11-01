import { motion } from "framer-motion";
import { Sun } from "lucide-react";
import { Button } from "./ui/button";
import Aurora from "./gradients/Aurora";
import Spotlight from "./gradients/Spotlight";
import Image from "./images/hero.png";
import { Cover } from "./ui/cover";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-white">
      <Aurora />
      <Spotlight />

      <div className="container mx-auto grid min-h-[92vh] grid-cols-1 items-center px-4 pb-24 pt-36 md:grid-cols-2">
        <div className="relative z-10 max-w-xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sun className="h-4 w-4 text-brand-400" /> Solar Growth Partner
          </div>
          
          <h1 className="text-5xl font-semibold leading-tight md:text-5xl">
            <span className="bg-gradient-to-br from-brand-300 via-brand-500 to-brand-700 bg-clip-text text-transparent">
              Power Your Solar Sales
            </span>{" "}
            with <Cover>AI-Driven </Cover>Marketing
          </h1>
          

          <p className="mt-5 text-white/70">
            We blend high-intent lead gen, instant WhatsApp follow-ups, and
            auto-quotes to book site visits on autopilot.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button className="bg-brand-600 hover:bg-brand-700">Get a demo</Button>
            <Button variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              See case studies
            </Button>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 text-center text-sm">
            <div><dt className="text-white/50">Leads/mo</dt><dd className="mt-1 text-lg font-semibold text-white">200+</dd></div>
            <div><dt className="text-white/50">Appt. rate</dt><dd className="mt-1 text-lg font-semibold text-white">32%</dd></div>
            <div><dt className="text-white/50">Satisfaction</dt><dd className="mt-1 text-lg font-semibold text-white">98%</dd></div>
          </dl>
        </div>

        {/* hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-0 mt-16 md:mt-0"
        >
          <div className="mx-auto aspect-square w-[80%] rounded-[28px] border border-white/10 bg-gradient-to-br from-ink-800 to-ink-900 p-2 shadow-[0_0_60px_-10px_rgba(255,106,0,.35)]">
            <div className="h-full w-full rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,theme(colors.brand.400/.12),transparent_45%)]"> 
                <img src={Image} alt="Hero" className="w-full h-full object-cover rounded-2xl" width={1000} height={1000} />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-ink-900" />
    </section>
  );
}
