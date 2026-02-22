import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Play } from "lucide-react";

interface HeroSectionProps {
  onOpenContact: () => void;
}

const HeroSection = ({ onOpenContact }: HeroSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80"
          alt="Marketing team collaborating in modern office"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        <div
          className="absolute inset-0 opacity-30 animate-gradient"
          style={{
            backgroundImage:
              "linear-gradient(135deg, hsl(184 100% 50% / 0.2), hsl(270 100% 65% / 0.2), hsl(184 100% 50% / 0.1))",
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div ref={ref} className="container relative mx-auto px-4 pt-24 pb-16 lg:px-8">
        <div className="max-w-3xl">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/30 rounded-full glass">
              #1 AI-Powered Marketing Agency
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            AI-Powered Marketing That{" "}
            <span className="text-gradient">Builds Brands</span> &{" "}
            <span className="text-gradient">Drives Revenue</span>
          </h1>

          <p
            className={`text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            We combine cutting-edge AI technology with proven marketing strategies to
            deliver measurable growth for your business. More traffic, more leads, more
            revenue.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              size="lg"
              onClick={onOpenContact}
              className="bg-primary text-primary-foreground hover:bg-primary/80 neon-glow text-base font-semibold px-8 py-6"
            >
              Get Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-muted text-base font-semibold px-8 py-6"
              asChild
            >
              <a href="#services">
                <Play className="mr-2 h-4 w-4" />
                View Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
