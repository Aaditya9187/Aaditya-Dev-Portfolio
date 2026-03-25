import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Mail, Heart, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/Aaditya9187", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aaditya-chhatraliya-2b8981392", label: "LinkedIn" },
  { icon: MessageCircle, href: "https://wa.me/918758977845", label: "WhatsApp" },
  { icon: Mail, href: "mailto:aaditya.chhatraliya@gmail.com", label: "Email" },
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
          Built with <Heart size={12} className="text-primary animate-pulse hover:scale-125 transition-transform duration-500" /> by{" "}
          <span className="text-gradient font-semibold">&lt;Aaditya Chhatraliya /&gt;</span>
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
