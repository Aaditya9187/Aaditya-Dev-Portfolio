import { motion } from "framer-motion";
import { Star, Quote, MessageCircle } from "lucide-react";

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
    text: "Working with Aaditya was a game-changer. He understood our brand perfectly and built a platform that our users absolutely love.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, Bloom Studio",
    text: "The UI/UX design Aaditya crafted for us increased our conversion rate significantly.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO, CloudSync",
    text: "Aaditya delivered a complex web application with clean and maintainable code.",
    rating: 5,
  },
  {
    name: "Michael Lee",
    role: "Founder, BrightLabs",
    text: "Fantastic experience working together. The final product was fast and beautifully designed.",
    rating: 5,
  },
  {
    name: "Sophia Carter",
    role: "Startup Founder",
    text: "The website perfectly represents our brand and performs extremely well.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "Product Manager",
    text: "Professional, responsive, and highly skilled developer.",
    rating: 5,
  },
  {
    name: "Olivia Brown",
    role: "Marketing Lead",
    text: "Our online presence improved dramatically after the redesign.",
    rating: 5,
  },
  {
    name: "Chris Walker",
    role: "Agency Owner",
    text: "Clean code, great design sense, and reliable delivery.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    role: "Creative Director",
    text: "Aaditya created a smooth user experience that our clients love.",
    rating: 5,
  },
];

const ease = [0.16, 1, 0.3, 1];

const firstRow = testimonials.slice(0, 5);
const secondRow = testimonials.slice(5, 10);

const TestimonialCard = ({ t }) => (
  <div className="glass rounded-2xl p-6 md:p-8 hover-lift card-shine border-glow group relative min-w-[340px] mx-3">

    <Quote className="absolute top-5 right-5 w-10 h-10 text-primary/5 group-hover:text-primary/15 transition-colors duration-500" />

    <div className="flex gap-1 mb-4">
      {Array.from({ length: t.rating }).map((_, j) => (
        <Star key={j} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>

    <p className="text-muted-foreground leading-relaxed mb-6 relative z-10 italic">
      "{t.text}"
    </p>

    <div className="flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/25 to-primary/5 flex items-center justify-center font-bold text-primary text-sm ring-2 ring-primary/10">
        {t.name.split(" ").map((n) => n[0]).join("")}
      </div>

      <div>
        <p className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">
          {t.name}
        </p>
        <p className="text-xs text-muted-foreground font-mono">
          {t.role}
        </p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="max-w-7xl mx-auto relative">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="font-mono text-primary text-sm mb-2">
              // Testimonials
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What clients <span className="text-gradient">say</span>
            </h2>

            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Helping businesses and creators build modern digital experiences
            </p>
          </div>

          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block"
          >
            <MessageCircle className="w-8 h-8 text-primary/20" />
          </motion.div>
        </motion.div>


        {/* SCROLL AREA */}
        <div className="space-y-8 mt-10">

          {/* Row 1 */}
          <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
            <motion.div
              className="flex gap-5 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...firstRow, ...firstRow].map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </motion.div>
          </div>


          {/* Row 2 */}
          <div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
            <motion.div
              className="flex gap-5 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...secondRow, ...secondRow].map((t, i) => (
                <TestimonialCard key={i} t={t} />
              ))}
            </motion.div>
          </div>

        </div>
      </div>


      {/* Edge Fade Effect */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />

    </section>
  );
};

export default TestimonialsSection;