import { Button } from "./ui/button.tsx";
import { ArrowRight, CheckCircle } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-500 to-brand-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-white mb-6">
            Ready to Shine Brighter Than Your Competition?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's create a custom marketing strategy that drives real results for your solar business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-white/90 group">
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
              Download Solar Marketing Guide
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>No Long-term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Guaranteed ROI</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Solar Industry Experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
