import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

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
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
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
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Got a project in mind, or just want to say hello? I'm always open to discussing new
              opportunities, creative ideas, or ways to bring your vision to life.
            </p>
            <div className="space-y-4">
              <a href="mailto:aaditya@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} /> aaditya@example.com
              </a>
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} /> linkedin.com/in/aaditya
              </a>
              <a href="#" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} /> github.com/aaditya
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-xl p-6 space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-secondary text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-secondary text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 transition"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-secondary text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primary/50 transition resize-none"
              required
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity glow-primary"
            >
              Say Hello <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
