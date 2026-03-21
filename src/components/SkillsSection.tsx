import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 75 },
    ],
  },
  {
    title: "Backend & Tools",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 70 },
      { name: "Databases", level: 65 },
      { name: "GitHub", level: 85 },
      { name: "IoT / Arduino", level: 70 },
    ],
  },
  {
    title: "Design",
    emoji: "✨",
    skills: [
      { name: "Figma", level: 80 },
      { name: "Canva", level: 85 },
      { name: "Photoshop", level: 70 },
      { name: "UI/UX Design", level: 78 },
      { name: "Responsive Design", level: 90 },
    ],
  },
];

const ease = [0.16, 1, 0.3, 1];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-transparent to-card/40" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Skills & Tech</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            My <span className="text-gradient">toolbox</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: gi * 0.1, ease }}
              className="glass rounded-2xl p-7 hover-lift border-glow group"
            >
              <div className="flex items-center gap-3 mb-6">
                <motion.span 
                  className="text-2xl"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {group.emoji}
                </motion.span>
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-mono text-foreground/90 group-hover/skill:text-primary transition-colors duration-200">{skill.name}</span>
                      <span className="text-muted-foreground text-xs font-mono tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.15 + si * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(var(--gold-glow))] relative"
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/50" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
