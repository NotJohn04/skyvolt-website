import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { Services } from "./components/Services.tsx";
import { Results } from "./components/Results.tsx";
import { CTA } from "./components/CTA.tsx";
import { Footer } from "./components/footer.tsx";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
}
