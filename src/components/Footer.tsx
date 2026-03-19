import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="relative">
      <div className="divider-gradient mx-6" />
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">&lt;Aaditya /&gt;</span>
        </p>
        <div className="flex items-center gap-1">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-muted-foreground hover:text-primary p-2 rounded-lg hover:bg-secondary/50 transition-all"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
