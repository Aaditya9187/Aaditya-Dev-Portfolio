import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  placeholder: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect = ({ placeholder, options, value, onChange }: Props) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      
      {/* Selected value */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-secondary/60 backdrop-blur-md text-left px-4 py-3.5 rounded-xl flex items-center justify-between border border-transparent hover:border-border/60 focus:ring-2 focus:ring-primary/30 transition-all duration-300"
      >
        <span
          className={`text-sm ${
            !value ? "text-muted-foreground" : "text-foreground"
          }`}
        >
          {value || placeholder}
        </span>

        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <ChevronDown size={18} className="text-muted-foreground" />
        </motion.div>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute w-full mt-2 glass rounded-xl border border-border/40 overflow-hidden z-50 shadow-xl backdrop-blur-lg"
          >
            {options.map((option) => {
              const selected = option === value;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-all
                  ${
                    selected
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-primary/5 text-foreground"
                  }`}
                >
                  <span>{option}</span>

                  {selected && (
                    <Check size={16} className="text-primary opacity-80" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;