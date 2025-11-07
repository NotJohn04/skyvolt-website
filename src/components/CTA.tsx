// components/CTA.tsx
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-transparent py-16 sm:py-20">
      {/* background */}
      <div className="absolute inset-0 -z-30 opacity-[0.32]">
        <BackgroundGradientAnimation fill="parent" size="76%" blendingValue="screen" />
      </div>
      <div className="pointer-events-none absolute inset-0 -z-20
        bg-[radial-gradient(800px_380px_at_70%_10%,theme(colors.brand.500/.18),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 xl:px-28 2xl:px-40 relative">
        <div className="mx-auto max-w-4xl text-center text-white
                        rounded-3xl border border-white/10 bg-white/5 backdrop-blur px-6 sm:px-10 py-10 sm:py-12">
          <h2 className="text-white mb-4 sm:mb-6">
            Ready to Shine Brighter Than Your Competition?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-8">
            Let's create a custom marketing strategy that drives real results for your solar business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-white/90 group">
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Download Solar Marketing Guide
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" />No Long-term Contracts</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" />Guaranteed ROI</span>
            <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" />Solar Industry Experts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
