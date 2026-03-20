import { motion } from "framer-motion";
import { ArrowDown, Send, Download } from "lucide-react";
import avatarImg from "@/assets/avatar.png";
import pixelAvatar from "@/assets/avatar-pixel.png";
import { useState } from "react";

const ease = [0.16, 1, 0.3, 1];

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">
      {/* Ambient glow — positioned behind content */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[hsl(var(--gold-glow))]/4 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center relative">
        {/* Text content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 relative">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-ring" />
            </span>
            <span className="font-mono text-xs tracking-wider text-muted-foreground">Available for freelance work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 tracking-tight"
          >
            I design & build<br />
            <span className="text-gradient">web experiences</span><br />
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
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-medium transition-all duration-300 glow-primary active:scale-[0.97]"
            >
              View My Work 
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" />
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center gap-2 glass text-foreground px-7 py-3.5 rounded-xl font-medium transition-all duration-300 hover:border-primary/40 active:scale-[0.97]"
            >
              Let's Talk
              <Send size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease }}
            className="flex gap-10 mt-14 pt-8 border-t border-border/40"
          >
            {[
              { value: "10+", label: "Projects Delivered" },
              { value: "5+", label: "Certifications" },
              { value: "2+", label: "Years Building" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.4, ease }}
              >
                <p className="text-2xl font-bold text-gradient tabular-nums">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-mono mt-1.5">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Avatar with hover swap */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="flex justify-center"
        >
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Soft glow behind */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl scale-125" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden ring-1 ring-border/40 animate-float">
              <img
                src={hovered ? pixelAvatar : avatarImg}
                alt="Aaditya – Web Developer & Designer"
                className="w-full h-full object-cover transition-all duration-500"
                style={{ imageRendering: hovered ? "pixelated" : "auto" }}
              />
              {/* Bottom vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
            </div>

            {/* Floating status badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 glass-strong rounded-xl px-4 py-2.5 text-sm font-mono shadow-lg shadow-background/50"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              {hovered ? "Pixel mode!" : "Open to work"}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
