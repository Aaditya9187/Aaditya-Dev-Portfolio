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

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-transparent to-card/60" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Skills & Tech</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            My <span className="text-gradient">toolbox</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.15 }}
              className="glass rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.emoji}</span>
                <h3 className="font-semibold text-lg">{group.title}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-mono text-foreground/90">{skill.name}</span>
                      <span className="text-muted-foreground text-xs font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-[hsl(var(--gold-glow))]"
                      />
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
