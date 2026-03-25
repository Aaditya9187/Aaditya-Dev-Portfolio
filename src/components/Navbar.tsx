import { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Calendar, ExternalLink } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import pixelAvatar from "@/assets/avatar-pixel-2.png";
import { useTheme } from "@/hooks/use-theme";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },

  // External blog link
  { label: "Blogs", href: "https://your-blog-website.com", external: true }
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback((href: string, external?: boolean) => {
    setOpen(false);
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      if (location.pathname === "/") {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/#" + hash);
      }
    } else {
      navigate(href);
    }
  }, [location.pathname, navigate]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-lg shadow-background/40' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" onClick={scrollToTop} className="flex items-center gap-2.5">
          <img src={pixelAvatar} alt="Aaditya" className="w-8 h-8 rounded-lg ring-1 ring-border/40" />
          <span className="text-lg font-bold font-mono text-gradient">&lt;Aaditya Ch /&gt;</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => {
                  if (l.label === "Home") scrollToTop();
                  handleNavClick(l.href, l.external);
                }}
                className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/40 transition-all duration-200"
              >
                <span className="flex items-center gap-1">
                  {l.label}
                  {l.external && <ExternalLink size={12} className="opacity-60" />}
                </span>
              </button>
            </li>
          ))}
          <li className="ml-1">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary/40 transition-colors duration-200 overflow-hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Sun size={18} className="text-muted-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ y: -20, opacity: 0, rotate: 90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Moon size={18} className="text-muted-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </li>
          <li className="ml-1">
            <MagneticButton strength={0.25}>
              <a
                href="https://calendly.com/aaditya-chhatraliya/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium transition-all duration-200 glow-primary active:scale-[0.97]"
              >
                <Calendar size={14} />
                Schedule a Call
              </a>
            </MagneticButton>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-1">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative w-9 h-9 rounded-lg flex items-center justify-center hover:bg-secondary/40 transition-colors duration-200 overflow-hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  initial={{ y: -20, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Sun size={18} className="text-muted-foreground" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ y: -20, opacity: 0, rotate: 90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 20, opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Moon size={18} className="text-muted-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
          <button
            className="text-foreground p-2 rounded-lg hover:bg-secondary/40 transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden glass-strong"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNavClick(l.href, l.external)}
                    className="w-full text-left text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg hover:bg-secondary/40 transition-all duration-200"
                  >
                    <span className="flex items-center gap-1">
                      {l.label}
                      {l.external && <ExternalLink size={12} className="opacity-60" />}
                    </span>
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium text-center active:scale-[0.97] transition-transform"
                >
                  <Calendar size={14} />
                  Schedule a Call
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
