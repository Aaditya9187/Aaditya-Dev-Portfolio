import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const ease = [0.16, 1, 0.3, 1];

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        inputRef.current?.focus();
      }
    },
    { threshold: 0.6 }
  );

  const section = document.getElementById("newsletter");

  if (section) observer.observe(section);

  return () => observer.disconnect();
}, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: trimmed });

      if (error) {
        if (error.code === "23505") {
          toast.info("You're already on the list! 😊", {
            description: "We'll keep sending you the latest updates.",
          });
        } else {
          throw error;
        }
      } else {
        toast.success("Welcome aboard! 🎉", {
          description: "You'll receive the latest updates straight to your inbox.",
          duration: 5000,
        });
      }
      setStatus("success");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section id="newsletter" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary rounded-full blur-[200px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center relative"
      >
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 border-glow">
          <Mail size={14} className="text-primary" />
          <span className="font-mono text-xs tracking-wider text-muted-foreground">Stay Updated</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
          Get the <span className="text-gradient">latest updates</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
          Be the first to see my newest projects, website launches, and professional milestones. No spam, ever.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="glass px-3 py-1 text-xs rounded-full"> New project launches</span>
          <span className="glass px-3 py-1 text-xs rounded-full">UI Design</span>
          <span className="glass px-3 py-1 text-xs rounded-full">Certifications & milestones</span>
        </div>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="inline-flex items-center gap-2 glass-strong rounded-xl px-6 py-4 border-glow"
          >
            <CheckCircle size={20} className="text-primary" />
            <span className="text-foreground font-medium">You're in! Thanks for subscribing.</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
  ref={inputRef}
  type="email"
  placeholder="your@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  disabled={status === "loading"}
  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
  aria-label="Subscribe to newsletter"
  className="w-full pl-11 pr-4 py-3.5 rounded-xl glass border border-border/50 bg-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-200 font-mono text-sm"
  required
/>
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium transition-all duration-300 glow-primary active:scale-[0.97] disabled:opacity-60"
            >
              {status === "loading" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </>
              )}
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground/60 mt-4 font-mono">
          Free forever · Unsubscribe anytime
        </p>
      </motion.div>
    </section>
  );
};

export default NewsletterSection;
