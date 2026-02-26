import HeroSection from "@/components/sections/heroSection";
import IntroSection from "@/components/sections/introSection";
import NewArrivalsSection from "@/components/sections/newArrivalsSection";
import WhyBuySection from "@/components/sections/whyBuySection";
import CollectionsSection from "@/components/sections/collectionsSection";
import SustainabilitySection from "@/components/sections/sustainabilitySection";
import TestimonialsSection from "@/components/sections/testimonialsSection";
import ProcessSectionSection from "@/components/sections/processSection";
import HelpSection from "@/components/sections/helpSection";

import "./app.scss";

export default function Home() {
  return (
    <main className="homePage">
      <HeroSection />
      <IntroSection />
      <NewArrivalsSection />
      <WhyBuySection />
      <CollectionsSection />
      <SustainabilitySection />
      <TestimonialsSection />
      <ProcessSectionSection />
      <HelpSection />
    </main>
  );
}