import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const INITIAL_COUNT = 2;

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="section-padding relative">
      <div className="divider-gradient absolute top-0 left-6 right-6" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence>
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="glass rounded-2xl overflow-hidden hover-lift group block cursor-pointer"
                >
                  {project.cover_image && (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.cover_image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="inline-flex items-center gap-1 glass-strong rounded-full px-3 py-1 text-xs font-mono text-primary">
                          View <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.github_url && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(project.github_url, "_blank");
                            }}
                            className="text-muted-foreground hover:text-primary transition-colors p-1"
                            aria-label="GitHub"
                          >
                            <Github size={16} />
                          </span>
                        )}
                        {project.live_url && (
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                              window.open(project.live_url, "_blank");
                            }}
                            className="text-muted-foreground hover:text-primary transition-colors p-1"
                            aria-label="Live demo"
                          >
                            <ExternalLink size={16} />
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tool) => (
                        <span
                          key={tool}
                          className="text-xs font-mono bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl glass text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all hover-lift"
            >
              {showAll ? (
                <>Show less <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" /></>
              ) : (
                <>Show more projects <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
