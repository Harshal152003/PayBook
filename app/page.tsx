import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ModulesSection from "@/components/sections/ModulesSection";
import GlobalScaleSection from "@/components/sections/GlobalScaleSection";
import HowItWorks from "@/components/sections/HowItWorks";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ModulesSection />
      <GlobalScaleSection />
      <HowItWorks />
      <ShowcaseSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
