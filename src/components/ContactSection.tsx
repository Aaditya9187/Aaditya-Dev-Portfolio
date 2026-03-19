import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Mail, label: "aaditya@example.com", href: "mailto:aaditya@example.com" },
  { icon: Linkedin, label: "linkedin.com/in/aaditya", href: "#" },
  { icon: Github, label: "github.com/aaditya", href: "#" },
];

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
            Let's <span className="text-gradient">connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Got a project in mind, or just want to say hello? I'm always open to discussing new
              opportunities, creative ideas, or ways to bring your vision to life.
            </p>
            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="group flex items-center gap-3 glass rounded-xl px-5 py-4 text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <s.icon size={18} className="group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-sm font-mono flex-1">{s.label}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-primary transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 md:p-8 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary/80 text-foreground placeholder:text-muted-foreground px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition border border-transparent focus:border-primary/20"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary/80 text-foreground placeholder:text-muted-foreground px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition border border-transparent focus:border-primary/20"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary/80 text-foreground placeholder:text-muted-foreground px-4 py-3.5 rounded-xl outline-none focus:ring-2 focus:ring-primary/50 transition resize-none border border-transparent focus:border-primary/20"
              required
            />
            <button
              type="submit"
              className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium hover:opacity-90 transition-all glow-primary"
            >
              Say Hello <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
