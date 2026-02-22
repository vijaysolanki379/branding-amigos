import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  { value: 250, suffix: "%", label: "Avg Traffic Growth" },
  { value: 4, suffix: "X", label: "Return on Investment" },
  { value: 100, suffix: "+", label: "Campaigns Launched" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const StatCard = ({ value, suffix, label, delay, isVisible }: {
  value: number; suffix: string; label: string; delay: number; isVisible: boolean;
}) => {
  const count = useCountUp(value, 2000, isVisible);

  return (
    <div
      className={`glass rounded-xl p-8 text-center hover:neon-glow transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      <div className="text-4xl lg:text-5xl font-extrabold text-gradient mb-2">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </div>
  );
};

const ResultsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="results" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref}>
          <div className="text-center mb-16">
            <h2
              className={`text-3xl lg:text-5xl font-extrabold mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Proven <span className="text-gradient">Results</span>
            </h2>
            <p
              className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Numbers don't lie. Here's the impact we've delivered for our clients.
            </p>
          </div>

          {/* Image */}
          <div
            className={`mb-16 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="rounded-2xl overflow-hidden max-w-4xl mx-auto neon-glow-purple">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="Happy business owners celebrating success"
                className="w-full h-[300px] lg:h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <StatCard key={s.label} {...s} delay={300 + i * 100} isVisible={isVisible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
