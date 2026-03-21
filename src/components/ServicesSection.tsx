import { motion } from "framer-motion";
import { Globe, Paintbrush, Zap, Smartphone, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance React applications with clean architecture, fast load times, and scalable codebases.",
    accent: "from-primary/10 to-transparent",
    number: "01",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Intuitive interfaces designed in Figma — user research, wireframes, and pixel-perfect handoff.",
    accent: "from-[hsl(var(--gold-glow))]/10 to-transparent",
    number: "02",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Every screen size covered. Mobile-first layouts that feel native on any device.",
    accent: "from-emerald-500/10 to-transparent",
    number: "03",
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description: "Lighthouse 90+ scores. Optimized assets, semantic HTML, and structured data for top rankings.",
    accent: "from-sky-500/10 to-transparent",
    number: "04",
  },
];

const ease = [0.16, 1, 0.3, 1];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="divider-gradient absolute top-0 left-6 right-6" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-mono text-primary text-sm mb-2">// What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Services that <span className="text-gradient">drive results</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-16 leading-relaxed">
            From concept to deployment — I handle every stage of building your web presence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="glass rounded-2xl p-7 hover-lift card-shine border-glow group relative"
            >
              <div className={`absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Service number */}
              <span className="absolute top-5 right-5 font-mono text-xs text-muted-foreground/30 group-hover:text-primary/30 transition-colors duration-300">{service.number}</span>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon size={22} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-primary transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
