import { useState, useCallback, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import pixelAvatar from "@/assets/avatar-pixel.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-strong shadow-lg shadow-background/40' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={pixelAvatar} alt="Aaditya" className="w-8 h-8 rounded-lg ring-1 ring-border/40" />
          <span className="text-lg font-bold font-mono text-gradient">&lt;Aaditya /&gt;</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleNavClick(l.href)}
                className="text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/40 transition-all duration-200"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="ml-2">
            <button
              onClick={() => handleNavClick("/#contact")}
              className="text-sm bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium transition-all duration-200 glow-primary active:scale-[0.97]"
            >
              Hire Me
            </button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-secondary/40 transition-colors duration-200"
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
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden glass-strong"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => handleNavClick(l.href)}
                    className="w-full text-left text-muted-foreground hover:text-foreground px-3 py-2.5 rounded-lg hover:bg-secondary/40 transition-all duration-200"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <button
                  onClick={() => handleNavClick("/#contact")}
                  className="w-full bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-medium text-center active:scale-[0.97] transition-transform"
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
