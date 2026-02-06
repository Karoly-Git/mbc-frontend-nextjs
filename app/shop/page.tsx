import "./style.scss";

import ShopHeroSection from "@/components/shop/ShopHeroSection";
import ShopIntroSection from "@/components/shop/ShopIntroSection";
import NewArrivalsSection from "@/components/shop/NewArrivalsSection";
import WhyBuySection from "@/components/shop/WhyBuySection";
import CollectionsSection from "@/components/shop/CollectionsSection";
import SustainabilitySection from "@/components/shop/SustainabilitySection";
import TestimonialsSection from "@/components/shop/TestimonialsSection";
import ProcessSection from "@/components/shop/ProcessSection";
import HelpSection from "@/components/shop/HelpSection";

export default function ShopPage() {
    return (
        <main className="shopPage">
            <ShopHeroSection />
            <ShopIntroSection />
            <NewArrivalsSection />
            <WhyBuySection />
            <CollectionsSection />
            <SustainabilitySection />
            <TestimonialsSection />
            <ProcessSection />
            <HelpSection />
        </main>
    );
}
