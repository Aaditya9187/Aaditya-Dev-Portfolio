import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Mail, label: "aaditya@example.com", href: "mailto:aaditya@example.com" },
  { icon: Linkedin, label: "linkedin.com/in/aaditya", href: "#" },
  { icon: Github, label: "github.com/aaditya", href: "#" },
];

const ease = [0.16, 1, 0.3, 1];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:aaditya@example.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
  };

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
            Have a project idea or need a developer? I'd love to hear about it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="space-y-3">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease }}
                  className="group flex items-center gap-3 glass rounded-xl px-5 py-4 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <s.icon size={18} className="group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-mono flex-1">{s.label}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-primary transition-opacity duration-200" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="glass rounded-2xl p-7 md:p-8 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/60 text-foreground placeholder:text-muted-foreground px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 border border-transparent focus:border-primary/20"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/60 text-foreground placeholder:text-muted-foreground px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 border border-transparent focus:border-primary/20"
              required
            />
            <textarea
              placeholder="Tell me about your project..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary/60 text-foreground placeholder:text-muted-foreground px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 resize-none border border-transparent focus:border-primary/20"
              required
            />
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium transition-all duration-300 glow-primary active:scale-[0.97]"
            >
              Send Message <Send size={16} className="group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
