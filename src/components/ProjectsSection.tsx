import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp, ArrowUpRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const INITIAL_COUNT = 2;
const ease = [0.16, 1, 0.3, 1];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="section-padding relative">
      <div className="divider-gradient absolute top-0 left-6 right-6" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured <span className="text-gradient">work</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mb-16 leading-relaxed">
            A selection of projects where design meets engineering.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <AnimatePresence>
            {visible.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease }}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="glass rounded-2xl overflow-hidden hover-lift card-shine border-glow group block cursor-pointer"
                >
                  {project.cover_image && (
                    <div className="relative overflow-hidden">
                      <img
                        src={project.cover_image}
                        alt={project.title}
                        className="w-full h-52 object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                      
                      {/* Hover overlay with icon */}
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="glass-strong rounded-full p-3 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                          <Eye size={20} className="text-primary" />
                        </div>
                      </div>
                      
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="inline-flex items-center gap-1 glass-strong rounded-full px-3 py-1 text-xs font-mono text-primary">
                          View <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        {project.github_url && (
                          <span
                            onClick={(e) => { e.preventDefault(); window.open(project.github_url, "_blank"); }}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-1"
                            aria-label="GitHub"
                          >
                            <Github size={16} />
                          </span>
                        )}
                        {project.live_url && (
                          <span
                            onClick={(e) => { e.preventDefault(); window.open(project.live_url, "_blank"); }}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 p-1"
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
                          className="text-xs font-mono bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full border border-border/20 hover:border-primary/30 transition-colors duration-200"
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl glass text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 active:scale-[0.97] border-glow"
            >
              {showAll ? (
                <>Show less <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform duration-200" /></>
              ) : (
                <>Show more projects <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-200" /></>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
