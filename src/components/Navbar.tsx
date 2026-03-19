import { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "https://github.com/Aaditya9187", external: true },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg shadow-background/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold font-mono text-gradient">
          &lt;Aaditya /&gt;
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNavClick(l.href, l.external)}
                className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/50 transition-all duration-200"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <button
              onClick={() => handleNavClick("/#contact")}
              className="text-sm bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-secondary/50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass-strong"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNavClick(l.href, l.external)}
                    className="w-full text-left text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg hover:bg-secondary/50 transition-all"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => handleNavClick("/#contact")}
                  className="w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium text-center"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
