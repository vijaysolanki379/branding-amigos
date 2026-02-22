import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Search, Share2, Target, MousePointerClick, MessageCircle, MapPin } from "lucide-react";

const services = [
  { icon: Search, title: "AI SEO Optimization", desc: "Rank higher with AI-powered keyword research, content optimization, and technical SEO audits." },
  { icon: Share2, title: "Social Media Marketing", desc: "Build a loyal community with strategic content, engagement tactics, and growth campaigns." },
  { icon: Target, title: "Meta Ads Management", desc: "Precision-targeted Facebook & Instagram ad campaigns that convert browsers into buyers." },
  { icon: MousePointerClick, title: "Google Ads Management", desc: "High-intent search and display campaigns engineered for maximum clicks and conversions." },
  { icon: MessageCircle, title: "WhatsApp Marketing", desc: "Automated WhatsApp campaigns for lead nurturing, support, and direct customer engagement." },
  { icon: MapPin, title: "Local SEO", desc: "Dominate local search results and Google Maps to drive foot traffic and local leads." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref}>
          {/* Header with image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2
                className={`text-3xl lg:text-5xl font-extrabold mb-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Our <span className="text-gradient">Services</span>
              </h2>
              <p
                className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Comprehensive digital marketing solutions powered by artificial
                intelligence and human creativity.
              </p>
            </div>
            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="rounded-2xl overflow-hidden neon-glow-purple">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Digital marketers analyzing data on laptops"
                  className="w-full h-[280px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`glass rounded-xl p-6 group hover:border-primary/50 hover:neon-glow transition-all duration-500 cursor-default ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms" }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
