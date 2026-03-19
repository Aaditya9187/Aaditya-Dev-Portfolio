import { motion } from "framer-motion";
import { Code2, Cpu, Trophy, Gamepad2 } from "lucide-react";
import avatarImg from "@/assets/avatar.png";

const highlights = [
  { icon: Code2, label: "Web Development", desc: "Building modern, responsive applications" },
  { icon: Cpu, label: "IoT & Robotics", desc: "Bridging hardware and software" },
  { icon: Trophy, label: "Hackathon Winner", desc: "Competitive problem solver" },
  { icon: Gamepad2, label: "Cricket & Gaming", desc: "Balancing work with passion" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="divider-gradient absolute top-0 left-6 right-6" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Turning ideas into <span className="text-gradient">digital reality</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden ring-2 ring-primary/20">
                <img
                  src={avatarImg}
                  alt="Aaditya"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent translate-x-3 translate-y-3 blur-sm" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I'm a passionate web developer and designer with a knack for creating beautiful,
              functional websites. With experience spanning frontend development, UI/UX design,
              and IoT projects, I bring a unique blend of creativity and technical skill to every project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              When I'm not coding, you'll find me on the cricket pitch or tinkering with robotic builds.
              I love turning complex problems into elegant, user-friendly solutions.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover-lift group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-8 translate-x-8 group-hover:bg-primary/10 transition-colors" />
              <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform relative z-10" size={28} />
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
