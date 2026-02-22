import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  onOpenContact: () => void;
}

const CTASection = ({ onOpenContact }: CTASectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
          alt="Agency team meeting with client"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div
          className="absolute inset-0 opacity-40 animate-gradient"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(184 100% 50% / 0.2), hsl(270 100% 65% / 0.3), hsl(184 100% 50% / 0.1))",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div ref={ref} className="container relative mx-auto px-4 lg:px-8 text-center">
        <h2
          className={`text-3xl lg:text-5xl font-extrabold mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ready To <span className="text-gradient">Grow Your Business</span>?
        </h2>
        <p
          className={`text-muted-foreground text-lg max-w-2xl mx-auto mb-10 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Book a free consultation with our marketing experts. No commitment, no pressure
          — just actionable insights for your brand.
        </p>
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            onClick={onOpenContact}
            className="bg-primary text-primary-foreground hover:bg-primary/80 neon-glow text-lg font-semibold px-10 py-7"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
