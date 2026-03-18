import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectPortfolio from "@/assets/project-portfolio.jpg";
import projectIot from "@/assets/project-iot.jpg";
import projectTaskmanager from "@/assets/project-taskmanager.jpg";

const projects = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A modern admin dashboard with real-time analytics, inventory management, and responsive charts built for an online store.",
    tags: ["React", "Tailwind CSS", "Recharts", "Node.js"],
    cover_image: projectEcommerce,
    github_url: "#",
    live_url: "#",
  },
  {
    id: "2",
    title: "Portfolio Template",
    description: "A clean, animated portfolio template for developers and designers with dark mode, smooth scroll, and dynamic sections.",
    tags: ["React", "Framer Motion", "TypeScript"],
    cover_image: projectPortfolio,
    github_url: "#",
    live_url: "#",
  },
  {
    id: "3",
    title: "Smart Home IoT Controller",
    description: "Web-based IoT dashboard to control home devices remotely using Arduino and MQTT protocol with real-time status updates.",
    tags: ["JavaScript", "Arduino", "MQTT", "Express"],
    cover_image: projectIot,
    github_url: "#",
    live_url: "#",
  },
  {
    id: "4",
    title: "Task Management App",
    description: "A full-stack Kanban-style task manager with drag-and-drop, user authentication, and cloud sync capabilities.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    cover_image: projectTaskmanager,
    github_url: "#",
    live_url: "#",
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
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover-lift group"
            >
              {project.cover_image && (
                <div className="rounded-lg overflow-hidden mb-4">
                  <img
                    src={project.cover_image}
                    alt={project.title}
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-2">
                  {project.github_url && (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                      <Github size={18} />
                    </a>
                  )}
                  {project.live_url && (
                    <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Live demo">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tool) => (
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
