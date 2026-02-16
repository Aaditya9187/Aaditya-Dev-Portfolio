import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const location = useLocation();
  const isBlogSection = location.pathname.startsWith("/blog") || location.pathname === "/blogs" || location.pathname === "/auth";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold font-mono text-gradient">
          &lt;Aaditya /&gt;
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              {l.href.startsWith("/") ? (
                <Link
                  to={l.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </li>
          {isBlogSection && user && (
            <li className="flex items-center gap-2">
              <Avatar className="h-8 w-8 border border-border">
                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                  {user.email?.charAt(0).toUpperCase() || <User size={14} />}
                </AvatarFallback>
              </Avatar>
              <button
                onClick={signOut}
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Sign out"
              >
                <LogOut size={16} />
              </button>
            </li>
          )}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden glass"
          >
            <ul className="flex flex-col gap-4 px-6 py-6">
              {links.map((l) => (
                <li key={l.href}>
                  {l.href.startsWith("/") ? (
                    <Link
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium"
                >
                  Hire Me
                </a>
              </li>
              {isBlogSection && user && (
                <li className="flex items-center gap-3 pt-2 border-t border-border">
                  <Avatar className="h-8 w-8 border border-border">
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {user.email?.charAt(0).toUpperCase() || <User size={14} />}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground truncate">{user.email}</span>
                  <button
                    onClick={() => { signOut(); setOpen(false); }}
                    className="ml-auto text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Sign out"
                  >
                    <LogOut size={16} />
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
