import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { Services } from "./components/Services.tsx";
import { Results } from "./components/Results.tsx";
import { CTA } from "./components/CTA.tsx";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <section className="bg-[radial-gradient(1200px_600px_at_20%_0%,theme(colors.brand.400/.10),transparent_60%)]">
        <Services />
      </section>
      <Results />
      <CTA />
      <Footer />
    </div>
  );
}
