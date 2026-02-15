import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    desc: "A modern admin dashboard with real-time analytics, inventory management, and responsive charts built for an online store.",
    tools: ["React", "Tailwind CSS", "Recharts", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Template",
    desc: "A clean, animated portfolio template for developers and designers with dark mode, smooth scroll, and dynamic sections.",
    tools: ["React", "Framer Motion", "TypeScript"],
    github: "#",
    live: "#",
  },
  {
    title: "Smart Home IoT Controller",
    desc: "Web-based IoT dashboard to control home devices remotely using Arduino and MQTT protocol with real-time status updates.",
    tools: ["JavaScript", "Arduino", "MQTT", "Express"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    desc: "A full-stack Kanban-style task manager with drag-and-drop, user authentication, and cloud sync capabilities.",
    tools: ["React", "Node.js", "MongoDB", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover-lift group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
