import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import NotFound from "./NotFound";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <NotFound />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Back nav */}
      <nav className="sticky top-0 z-50 glass-strong border-b border-border/40">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <Link
            to="/#projects"
            className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to projects
          </Link>
          <div className="flex gap-3">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary px-3 py-1.5 rounded-lg hover:bg-secondary/50 transition-all"
              >
                <Github size={14} /> Source
              </a>
            )}
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono bg-primary text-primary-foreground px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl overflow-hidden ring-1 ring-border/50"
        >
          <img
            src={project.cover_image}
            alt={project.title}
            className="w-full h-64 sm:h-80 md:h-[420px] object-cover"
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono bg-secondary/80 text-secondary-foreground px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-2xl p-6 md:p-8 space-y-4"
        >
          <h2 className="text-xl font-semibold">About the Project</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.longDescription}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-2xl p-6 md:p-8 space-y-6"
        >
          <h2 className="text-xl font-semibold">Key Features</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {project.features.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-muted-foreground glass rounded-xl px-4 py-3"
              >
                <span className="text-primary mt-0.5 shrink-0">▹</span>
                {feat}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Gallery */}
        {project.gallery.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-xl font-semibold">Gallery</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-border/50">
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default ProjectDetail;
