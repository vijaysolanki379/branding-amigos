import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main>
        <HeroSection onOpenContact={() => setContactOpen(true)} />
        <WhyChooseUs />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <TestimonialsSection />
        <CTASection onOpenContact={() => setContactOpen(true)} />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
};

export default Index;
