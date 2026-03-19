import { motion } from "framer-motion";
import logoFreecodecamp from "@/assets/logo-freecodecamp.png";
import logoGoogle from "@/assets/logo-google.png";
import logoCoursera from "@/assets/logo-coursera.png";
import logoMeta from "@/assets/logo-meta.png";
import certificateImg from "@/assets/certificate-dummy.png";

const certs = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp", logo: logoFreecodecamp },
  { name: "JavaScript Algorithms", issuer: "freeCodeCamp", logo: logoFreecodecamp },
  { name: "UX Design Fundamentals", issuer: "Google", logo: logoGoogle },
  { name: "Figma UI Design", issuer: "Coursera", logo: logoCoursera },
  { name: "Frontend Development", issuer: "Meta", logo: logoMeta },
];

const CertificationsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card/60 via-transparent to-card/60" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-2">// Certifications</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16">
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
              className="glass rounded-2xl overflow-hidden hover-lift group"
            >
              <div className="relative">
                <img
                  src={certificateImg}
                  alt={`${cert.name} certificate`}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{cert.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
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
