import { motion } from "framer-motion";
import { Code2, Cpu, Trophy, Gamepad2 } from "lucide-react";
import avatarImg from "@/assets/avatar2.png";

const highlights = [
  { icon: Code2, label: "Web Development", desc: "Building modern, responsive applications", color: "from-primary/20 to-primary/5" },
  { icon: Cpu, label: "IoT & Robotics", desc: "Bridging hardware and software", color: "from-emerald-500/20 to-emerald-500/5" },
  { icon: Trophy, label: "Hackathon Winner", desc: "Competitive problem solver", color: "from-[hsl(var(--gold-glow))]/20 to-[hsl(var(--gold-glow))]/5" },
  { icon: Gamepad2, label: "Cricket & Gaming", desc: "Balancing work with passion", color: "from-sky-500/20 to-sky-500/5" },
];

const ease = [0.16, 1, 0.3, 1];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="divider-gradient absolute top-0 left-6 right-6" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-mono text-primary text-sm mb-2">// About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Turning ideas into <span className="text-gradient">digital reality</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-1 ring-border/40 transition-transform duration-700 group-hover:scale-[1.02]">
                <img
                  src={avatarImg}
                  alt="Aaditya Chhatraliya"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
              </div>
              <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-primary/15 to-transparent translate-x-3 translate-y-3 blur-lg group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
              
              {/* Decorative corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary/30 rounded-br-lg" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="md:col-span-3"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm an experienced and reliable web developer and designer focused on creating modern,
              high-performance websites. With experience in frontend development, UI/UX design, and IoT projects, 
              I bring a strong blend of creativity and technical expertise to every project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              When I'm not coding, you'll find me on the cricket pitch or tinkering with robotic builds.
              I love turning complex problems into elegant, user-friendly solutions.
            </p>
            
            {/* Mini skill tags */}
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Figma", "Tailwind", "IoT"].map((tag) => (
                <span key={tag} className="text-xs font-mono bg-secondary/80 text-secondary-foreground px-3 py-1.5 rounded-full border border-border/30 hover:border-primary/30 hover:text-primary transition-colors duration-300 cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="glass rounded-xl p-6 hover-lift card-shine border-glow group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="w-11 h-11 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors duration-300 relative z-10">
                <item.icon className="text-muted-foreground group-hover:text-primary transition-all duration-300" size={22} />
              </div>
              <h3 className="font-semibold mb-1 relative z-10">{item.label}</h3>
              <p className="text-sm text-muted-foreground relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
