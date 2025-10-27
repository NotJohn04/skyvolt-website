import { ArrowRight, Zap, TrendingUp, Users } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 overflow-hidden">
      {/* Gradient overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-white space-y-6">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
              <span className="text-sm">Marketing Agency for Solar Companies</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white">
              Power Your Solar Business with Brilliant Marketing
            </h1>
            
            <p className="text-xl text-orange-50">
              We help solar companies generate more leads, close more deals, and dominate their local markets with proven digital marketing strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 group">
                Schedule a Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                View Our Work
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl text-white mb-1">250+</div>
                <div className="text-sm text-orange-100">Solar Clients</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-1">$45M+</div>
                <div className="text-sm text-orange-100">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-1">98%</div>
                <div className="text-sm text-orange-100">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right column - Feature cards */}
          <div className="space-y-4">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Lead Generation</h3>
              <p className="text-gray-600">
                Convert more visitors into qualified solar installation leads with our optimized campaigns.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">SEO & Local Search</h3>
              <p className="text-gray-600">
                Dominate local search results and get found by homeowners searching for solar solutions.
              </p>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Social Media Marketing</h3>
              <p className="text-gray-600">
                Build trust and engage your community with compelling solar content that converts.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
