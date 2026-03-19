import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const INITIAL_COUNT = 4;

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);
  const hasMore = projects.length > INITIAL_COUNT;
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
                  className="glass rounded-xl p-6 hover-lift group block cursor-pointer"
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
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.github_url, "_blank");
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="GitHub"
                        >
                          <Github size={18} />
                        </span>
                      )}
                      {project.live_url && (
                        <span
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(project.live_url, "_blank");
                          }}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink size={18} />
                        </span>
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
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover-lift"
            >
              {showAll ? (
                <>Show less <ChevronUp size={16} /></>
              ) : (
                <>Show more projects <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
