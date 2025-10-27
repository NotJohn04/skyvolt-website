import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";
import { Search, Target, PenTool, BarChart, Mail, Video } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Search,
      title: "SEO & Local Search",
      description: "Rank #1 in your service area for high-intent solar keywords and dominate Google Maps.",
    },
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Targeted Google and Facebook ads that drive qualified solar leads at optimal cost-per-acquisition.",
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Educational solar content that builds authority and guides prospects through their buying journey.",
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Real-time dashboards showing your ROI, lead quality, and campaign performance metrics.",
    },
    {
      icon: Mail,
      title: "Email Campaigns",
      description: "Nurture sequences that convert leads into consultations and consultations into customers.",
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional solar installation videos and testimonials that showcase your expertise.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-gray-900 mb-4">
            Everything You Need to Grow Your Solar Business
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions designed specifically for the solar industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
