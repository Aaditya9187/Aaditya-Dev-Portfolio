import { motion } from "framer-motion";
import { ArrowDown, Send, Sparkles } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Animated gradient orb */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="font-mono text-primary text-xs tracking-wider">Hello World 👋</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
            I'm <span className="text-gradient">Aaditya</span>,<br />
            <span className="text-muted-foreground">Web Developer</span><br />
            & Designer
          </h1>
          <p className="text-muted-foreground text-lg max-w-md mb-10 leading-relaxed">
            I build sleek, responsive web experiences that convert visitors into customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium hover:opacity-90 transition-all glow-primary"
            >
              See My Work <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center gap-2 glass text-foreground px-7 py-3.5 rounded-xl font-medium hover:border-primary/50 hover:text-primary transition-all"
            >
              Contact Me <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-8 mt-12 pt-8 border-t border-border/50"
          >
            {[
              { value: "10+", label: "Projects" },
              { value: "5+", label: "Certifications" },
              { value: "2+", label: "Years Exp." },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow ring behind avatar */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/5 blur-2xl scale-110" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden ring-2 ring-primary/20 animate-float">
              <img
                src={avatarImg}
                alt="Aaditya – Web Developer & Designer"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 glass-strong rounded-xl px-4 py-2 text-sm font-mono shadow-lg"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse mr-2" />
              Available for work
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
