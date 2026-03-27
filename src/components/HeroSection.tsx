import { motion } from "framer-motion";
import { ArrowDown, Send, Sparkles, Download, Calendar } from "lucide-react";
import avatarImg from "@/assets/avatar.png";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/MagneticButton";

const ease = [0.16, 1, 0.3, 1];

const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 1200;
    const incrementTime = 20;
    const step = end / (duration / incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return <>{count}+</>;
};

const HeroSection = () => {

  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Animated orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/6 w-[600px] h-[600px] bg-primary rounded-full blur-[200px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/6 w-[500px] h-[500px] bg-[hsl(var(--gold-glow))] rounded-full blur-[180px]"
      />

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-particle"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative">
        {/* Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 border-glow"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 relative">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-ring" />
            </span>
            <span className="font-mono text-xs tracking-wider text-muted-foreground">Available for freelance work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
          >
            I design & build<br />
            <span className="text-gradient relative">
              web experiences
              <motion.span
                className="absolute -top-2 -right-6"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.span>
            </span><br />
            <span className="text-muted-foreground">that convert.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed"
          >
            Full-stack developer crafting performant, beautiful interfaces
            that turn visitors into loyal customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton strength={0.3}>
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="group relative inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium transition-all duration-2000 animate-glow-pulse active:scale-[0.97] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(var(--gold-glow))] to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a
                href="https://calendly.com/aaditya-chhatraliya/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 glass text-foreground px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:border-primary/40 active:scale-[0.97] border-glow"
              >
                <Calendar size={16} className="group-hover:rotate-12 transition-transform duration-200" />
                Schedule a Call
              </a>
            </MagneticButton>
            <MagneticButton strength={0.3}>
              <a
                href="/Aaditya's-Resume.pdf"
                download
                className="group inline-flex items-center gap-2 glass text-foreground px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:border-primary/40 active:scale-[0.97] border-glow"
              >
                Resume
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease }}
            className="flex gap-10 mt-5 pt-5 border-t border-border/40"
          >
            {[
              { value: 10, label: "Projects Delivered" },
              { value: 5, label: "Certifications" },
              { value: 4, label: "Years Building" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4, ease }}
                className="group cursor-default"
              >
                <p className="text-2xl font-bold text-gradient tabular-nums group-hover:scale-110 transition-transform duration-300 origin-left"><Counter value={stat.value} /></p>
                <p className="text-xs text-muted-foreground font-mono mt-1.5">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Avatar Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute -inset-4 rounded-[2rem] border border-primary/10 animate-rotate-slow" />
            <div className="absolute -inset-8 rounded-[2.5rem] border border-dashed border-primary/5 animate-rotate-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

            {/* Soft glow behind */}
            <motion.div
              animate={{ scale: 1.25 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl"
            />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden ring-1 ring-border/40 animate-float">
              <img
                loading="eager"
                src={avatarImg}
                alt="Aaditya – Web Developer & Designer"
                className="w-full h-full object-cover transition-all duration-500"
                style={{ imageRendering: "auto" }}
              />
              {/* Bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />

              {/* Hover overlay */}
              <motion.div
                animate={{ opacity: 0 }}
                className="absolute inset-0 bg-primary"
              />
            </div>

            {/* Floating status badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 glass-strong rounded-xl px-4 py-2.5 text-sm font-mono shadow-lg shadow-background/50 border-glow"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Open to work
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
