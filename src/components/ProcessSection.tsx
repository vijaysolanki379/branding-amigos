import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Compass, ClipboardList, Rocket, Settings, TrendingUp } from "lucide-react";

const steps = [
  { icon: Compass, label: "Discover", desc: "Deep dive into your business, audience, and competitors." },
  { icon: ClipboardList, label: "Plan", desc: "Custom strategy blueprint with clear KPIs and timelines." },
  { icon: Rocket, label: "Launch", desc: "Execute campaigns across all targeted marketing channels." },
  { icon: Settings, label: "Optimize", desc: "AI-driven A/B testing and continuous performance tuning." },
  { icon: TrendingUp, label: "Scale", desc: "Amplify what works and expand into new growth opportunities." },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref}>
          <div className="text-center mb-16">
            <h2
              className={`text-3xl lg:text-5xl font-extrabold mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Our <span className="text-gradient">Process</span>
            </h2>
            <p
              className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              A proven 5-step framework that transforms your digital presence into a
              revenue-generating machine.
            </p>
          </div>

          {/* Image */}
          <div
            className={`mb-16 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto neon-glow">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
                alt="Team planning marketing workflow on whiteboard"
                className="w-full h-[300px] lg:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col items-center text-center transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: isVisible ? `${300 + i * 120}ms` : "0ms" }}
                >
                  <div className="relative z-10 w-20 h-20 rounded-full glass border-2 border-primary/40 flex items-center justify-center mb-4 neon-glow group hover:border-primary transition-all">
                    <s.icon className="h-8 w-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{s.label}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
