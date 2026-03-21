import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Heart, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pb-8">
      <div className="divider-gradient mx-6" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 pt-8">
        <p className="text-sm text-muted-foreground font-mono flex items-center gap-1.5">
          Built with <Heart size={12} className="text-primary animate-pulse" /> by{" "}
          <span className="text-gradient font-semibold">&lt;Aaditya /&gt;</span>
        </p>
        <div className="flex items-center gap-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-muted-foreground hover:text-primary p-2.5 rounded-lg hover:bg-secondary/50 transition-all duration-200 active:scale-95"
            >
              <s.icon size={17} />
            </a>
          ))}
          <button
            onClick={scrollToTop}
            className="ml-2 text-muted-foreground hover:text-primary p-2.5 rounded-lg hover:bg-secondary/50 transition-all duration-200 active:scale-95 group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={17} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
