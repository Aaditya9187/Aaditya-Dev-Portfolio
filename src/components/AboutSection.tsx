import { motion } from "framer-motion";
import { Code2, Cpu, Trophy, Gamepad2 } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Web Development", desc: "Building modern, responsive applications" },
  { icon: Cpu, label: "IoT & Robotics", desc: "Bridging hardware and software" },
  { icon: Trophy, label: "Hackathon Winner", desc: "Competitive problem solver" },
  { icon: Gamepad2, label: "Cricket & Gaming", desc: "Balancing work with passion" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Turning ideas into <span className="text-gradient">digital reality</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mb-12 leading-relaxed">
            I'm a passionate web developer and designer with a knack for creating beautiful,
            functional websites. With experience spanning frontend development, UI/UX design,
            and IoT projects, I bring a unique blend of creativity and technical skill to every project.
            When I'm not coding, you'll find me on the cricket pitch or tinkering with robotic builds.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover-lift group"
            >
              <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={28} />
              <h3 className="font-semibold mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
