import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, TrendingUp, BarChart3, DollarSign } from "lucide-react";

const cards = [
  { icon: Brain, title: "AI-Driven Strategies", desc: "Leverage machine learning and data analytics to outsmart competitors and reach your ideal audience." },
  { icon: TrendingUp, title: "ROI Focused Campaigns", desc: "Every dollar invested is tracked and optimized for maximum return on your marketing spend." },
  { icon: BarChart3, title: "Transparent Reporting", desc: "Real-time dashboards and weekly reports so you always know exactly how your campaigns perform." },
  { icon: DollarSign, title: "Affordable Growth Plans", desc: "Enterprise-grade marketing strategies tailored to fit startups and growing business budgets." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="why-us" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden neon-glow">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Strategy meeting with team discussing marketing plans"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2
              className={`text-3xl lg:text-5xl font-extrabold mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Why Choose <span className="text-gradient">Branding Amigos</span>?
            </h2>
            <p
              className={`text-muted-foreground mb-10 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              We don't just market — we engineer growth with data, creativity, and
              AI-powered precision.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {cards.map((c, i) => (
                <div
                  key={c.title}
                  className={`glass rounded-xl p-5 hover:neon-glow transition-all duration-500 group cursor-default ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: isVisible ? `${150 + i * 100}ms` : "0ms" }}
                >
                  <c.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-foreground mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
