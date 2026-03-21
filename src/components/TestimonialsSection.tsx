import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechNova",
    text: "Aaditya delivered an exceptional website that exceeded our expectations. His attention to detail and creative vision transformed our online presence completely.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "Founder, PixelForge",
    text: "Working with Aaditya was a game-changer. He understood our brand perfectly and built a platform that our users absolutely love. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Bloom Studio",
    text: "The UI/UX design Aaditya crafted for us increased our conversion rate by 40%. His expertise in creating intuitive, beautiful interfaces is unmatched.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO, CloudSync",
    text: "Aaditya's technical skills are top-notch. He delivered a complex web application on time with clean, maintainable code. A true professional.",
    rating: 5,
  },
];

const ease = [0.16, 1, 0.3, 1];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            What clients <span className="text-gradient">say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="glass rounded-2xl p-6 md:p-8 hover-lift card-shine group relative"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />

              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-semibold text-primary text-sm">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
