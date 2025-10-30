import { ImageWithFallback } from "./figma/ImageWithFallback.tsx";

export function Results() {
  const caseStudies = [
    {
      company: "SunPower Installations",
      metric: "340% increase in qualified leads",
      details: "Within 6 months of launching our SEO and PPC campaigns",
      image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVscyUyMHJvb2Z8ZW58MXx8fHwxNzYxNTUyMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      company: "Bright Energy Solutions",
      metric: "$2.3M in new revenue",
      details: "Generated through targeted digital marketing campaigns in 2024",
      image: "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MTQ1MDE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      company: "EcoSolar Group",
      metric: "First page rankings",
      details: "Achieved #1-3 positions for 47 competitive solar keywords",
      image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2MTU0MjU5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="results" className="py-20 bg-[radial-gradient(1000px_500px_at_80%_-10%,theme(colors.brand.400/.10),transparent_60%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-brand-100 text-brand-600 rounded-full mb-4">
            Proven Results
          </div>
          <h2 className="text-foreground mb-4">
            Real Growth for Real Solar Companies
          </h2>
          <p className="text-lg text-ink-700 max-w-2xl mx-auto">
            See how we've helped solar companies like yours achieve remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-brand-300/60 hover:shadow-[0_20px_50px_-20px_rgba(255,106,0,.25)] transition-all"
            >
              <div className="h-48 overflow-hidden">
                <ImageWithFallback
                  src={study.image}
                  alt={study.company}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-foreground mb-2">{study.company}</h3>
                <div className="text-xl text-brand-600 mb-2">{study.metric}</div>
                <p className="text-ink-700">{study.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
