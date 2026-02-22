import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, TechStart India",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    text: "Branding Amigos transformed our online presence. Our organic traffic grew 300% in just 6 months. Their AI-driven approach is unlike anything we've experienced.",
    stars: 5,
  },
  {
    name: "Rahul Verma",
    role: "Founder, GrowthBox",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    text: "The ROI on our Google Ads campaigns has been phenomenal. They truly understand data-driven marketing and deliver results that matter to our bottom line.",
    stars: 5,
  },
  {
    name: "Anita Desai",
    role: "Marketing Director, FreshBrew Co",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    text: "Professional, transparent, and incredibly effective. Their social media strategy helped us build a community of 50K+ engaged followers in under a year.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div ref={ref}>
          <div className="text-center mb-16">
            <h2
              className={`text-3xl lg:text-5xl font-extrabold mb-4 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Client <span className="text-gradient">Testimonials</span>
            </h2>
            <p
              className={`text-muted-foreground text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Don't just take our word for it — hear from the brands we've helped grow.
            </p>
          </div>

          <div
            className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="glass rounded-2xl p-8 lg:p-12 text-center relative">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-2 border-primary/50 neon-glow"
                loading="lazy"
              />
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg lg:text-xl text-foreground mb-6 italic leading-relaxed">
                "{t.text}"
              </blockquote>
              <p className="font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5 text-foreground" />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                      }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-primary/50 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5 text-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
