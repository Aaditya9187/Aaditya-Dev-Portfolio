import { motion } from "framer-motion";
import logoFreecodecamp from "@/assets/logo-freecodecamp.png";
import logoGoogle from "@/assets/logo-google.png";
import logoCoursera from "@/assets/logo-coursera.png";
import logoMeta from "@/assets/logo-meta.png";

const certs = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp", logo: logoFreecodecamp },
  { name: "JavaScript Algorithms", issuer: "freeCodeCamp", logo: logoFreecodecamp },
  { name: "UX Design Fundamentals", issuer: "Google", logo: logoGoogle },
  { name: "Figma UI Design", issuer: "Coursera", logo: logoCoursera },
  { name: "Frontend Development", issuer: "Meta", logo: logoMeta },
];

const CertificationsSection = () => {
  return (
    <section className="section-padding bg-card/40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Achievements & <span className="text-gradient">credentials</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass rounded-xl p-5 flex items-start gap-4 hover-lift"
            >
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-10 h-10 object-contain rounded shrink-0 mt-0.5"
              />
              <div>
                <h3 className="font-semibold text-sm">{cert.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
