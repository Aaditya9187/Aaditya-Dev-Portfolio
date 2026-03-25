import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import CustomSelect from "./CustomSelect";

const socials = [
  { icon: Mail, label: "aaditya.c@gmail.com", href: "mailto:aaditya.chhatraliya@gmail.com" },
  { icon: Linkedin, label: "linkedin.com/in/aaditya.c", href: "https://www.linkedin.com/in/aaditya-chhatraliya-2b8981392" },
  { icon: Github, label: "github.com/aaditya.c", href: "https://github.com/Aaditya9187" },
  { icon: MessageCircle, label: "Chat on WhatsApp", href: "https://wa.me/918758977845" },
];

const ease = [0.16, 1, 0.3, 1];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    message: "",
  });

  const [focused, setFocused] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("access_key", "25419b85-570d-48b2-876c-bc768763be94");
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("subject", `New Project Inquiry from ${form.name}`);

    if (form.project) formData.append("project_type", form.project);
    if (form.budget) formData.append("budget_range", form.budget);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Message sent successfully 🚀", {
        description: "I'll get back to you within 24 hours.",
        duration: 4000,
      });

      setForm({
        name: "",
        email: "",
        project: "",
        budget: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    }

    setLoading(false);
  };

  const inputClass = (field: string) =>
    `w-full bg-secondary/60 text-foreground placeholder:text-muted-foreground px-4 py-3.5 rounded-xl outline-none transition-all duration-300 border ${
      focused === field
        ? "border-primary/40 ring-2 ring-primary/20 bg-secondary/80"
        : "border-transparent hover:border-border/60"
    }`;

  return (
    <section id="contact" className="section-padding relative">
      <div className="divider-gradient absolute top-0 left-6 right-6" />

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Contact</p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-gradient">build together</span>
          </h2>

          <p className="text-muted-foreground max-w-xl mb-16 leading-relaxed">
            Have a project in mind or need a modern website? Tell me about it and
            let's discuss how we can bring it to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="space-y-3 mb-8">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease }}
                  className="group flex items-center gap-3 glass rounded-xl px-5 py-4 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 border-glow"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <s.icon size={18} className="group-hover:text-primary transition-colors duration-300" />
                  </div>

                  <span className="text-sm font-mono flex-1">{s.label}</span>

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 text-primary transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
                  />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, ease }}
              className="glass rounded-xl p-5 border-primary/10"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="font-semibold text-sm">
                  Available for freelance projects
                </span>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                I typically respond within 24 hours. If your project is urgent,
                mention it in your message and I'll prioritize it.
              </p>
            </motion.div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="glass rounded-2xl p-7 md:p-8 space-y-4 border-glow"
          >

            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              className={inputClass("name")}
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={inputClass("email")}
              required
            />

            <CustomSelect
              placeholder="Project Type (Optional)"
              value={form.project}
              onChange={(value) => setForm({ ...form, project: value })}
              options={[
                "💼 Business Website",
                "🚀 Landing Page",
                "⚙️ Web Application",
                "🔄 Website Redesign",
                "🤔 Not Sure Yet",
              ]}
            />

            <CustomSelect
              placeholder="Budget Range (Optional)"
              value={form.budget}
              onChange={(value) => setForm({ ...form, budget: value })}
              options={[
                "₹5,000 – ₹10,000",
                "₹10,000 – ₹25,000",
                "₹25,000 – ₹50,000",
                "₹50,000 – ₹1,00,000",
                "₹1,00,000+",
                "Not Sure Yet",
              ]}
            />

            <textarea
              placeholder="Tell me about your project, goals, and timeline..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className={`${inputClass("message")} resize-none`}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="group w-full relative inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium transition-all duration-300 active:scale-[0.97] overflow-hidden disabled:opacity-70"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? "Sending Message..." : "Start Your Project"}
                {!loading && (
                  <Send
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform duration-200"
                  />
                )}
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-primary via-[hsl(var(--gold-glow))] to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />
            </button>

            <p className="text-xs text-muted-foreground text-center pt-1">
              Free consultation • Quick response • No commitment required
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;