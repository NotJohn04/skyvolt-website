import { Header } from "./components/Header.tsx";
import { Hero } from "./components/Hero.tsx";
import { FeaturesSectionDemo } from "./components/Services.tsx";
import { Results } from "./components/Results.tsx";
import { CTA } from "./components/CTA.tsx";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import LogoTicker from "./components/LogoTicker";
import questEnergy from "./components/partners/Untitled design (5).png";
import assignSolar from "./components/partners/Untitled design (6).png"
import KStructure from "./components/partners/Untitled design (7).png";
import Amsolar from "./components/partners/3.png";
import DE from "./components/partners/Untitled design (12).png"
import Rewatts from "./components/partners/5.png";
import Solarock from "./components/partners/Untitled (600 x 205 px).png";
import SolarSunyield from "./components/partners/solarsunyield.png";
import raygosolar from "./components/partners/Untitled design (13).png";
import AD from "./components/partners/Untitled design (14).png"
import IPS from "./components/partners/logo_footer.png"
import "./styles/fonts.css";
import HumanoidSection from "./components/testingSection";
import TestingSection from "./components/testingSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <LogoTicker
        logos={[
          { src: DE, alt: "DE Solar" },
          { src: raygosolar, alt: "RES • Ray Go Solar" },
          { src: questEnergy, alt: "Quest Energy" },
          { src: assignSolar, alt: "Assign Solar" },
          { src: KStructure, alt: "K-Structures" },
          { src: Amsolar, alt: "AM Solar" },
          { src: AD, alt: "AD Power" },
          { src: SolarSunyield, alt: "Solar Sunyield" },
          { src: Solarock, alt: "Solarock" },
          { src: Rewatts, alt: "R Brand" },
          { src: IPS, alt: "IPS" },

        ]}
        speed={33}       // tweak loop speed
        logoHeight={64}  // bigger images
        cardHeight={104} // taller cards to match
      />

      <About />
      {/* <HumanoidSection /> */}
      <section className="bg-[radial-gradient(1200px_600px_at_20%_0%,theme(colors.brand.400/.10),transparent_60%)]">
        <FeaturesSectionDemo />
      </section>
      <Results />
      <CTA />
      <Footer />
    </div>
  );
}
