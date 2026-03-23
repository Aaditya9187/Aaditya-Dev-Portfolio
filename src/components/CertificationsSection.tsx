import { motion } from "framer-motion";
import { Award } from "lucide-react";
import logoFreecodecamp from "@/assets/logo-freecodecamp.png";
import logoGoogle from "@/assets/logo-google.png";
import logoCoursera from "@/assets/logo-coursera.png";
import logoMeta from "@/assets/logo-meta.png";
import certificateImg from "@/assets/certificate-dummy.png";

const certs = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp", logo: logoFreecodecamp, year: "2024" },
  { name: "JavaScript Algorithms", issuer: "freeCodeCamp", logo: logoFreecodecamp, year: "2024" },
  { name: "UX Design Fundamentals", issuer: "Google", logo: logoGoogle, year: "2024" },
  { name: "Figma UI Design", issuer: "Coursera", logo: logoCoursera, year: "2024" },
  { name: "Frontend Development", issuer: "Meta", logo: logoMeta, year: "2024" },
];

const ease = [0.16, 1, 0.3, 1];

const CertificationsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-transparent to-card/40" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="font-mono text-primary text-sm mb-2">// Certifications</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Achievements & <span className="text-gradient">credentials</span>
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Industry-recognized certifications demonstrating expertise in modern development, design principles, and professional best practices.
            </p>
          </div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hidden md:block"
          >
            <Award className="w-8 h-8 text-primary/20" />
          </motion.div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="glass rounded-2xl overflow-hidden hover-lift card-shine border-glow group"
            >
              <div className="relative">
                <img
                  src={certificateImg}
                  alt={`${cert.name} certificate`}
                  className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300 ring-1 ring-border/20">
                  <img src={cert.logo} alt={cert.issuer} className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition-colors duration-300">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{cert.issuer} • {cert.year}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
