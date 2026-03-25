import { motion, AnimatePresence } from "framer-motion";
import { Award, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import logoW3Schools from "@/assets/logo-w3schools.png";
import logoSoloLearn from "@/assets/logo-sololearn.png";
import logoGreatstack from "@/assets/logo-greatstack.png";

import cert1 from "@/assets/Certified-HTML-Developer.png";
import cert2 from "@/assets/Introduction-to-html.jpg";
import cert3 from "@/assets/Fullstack-Ecommerce-Project.png";
import cert4 from "@/assets/JavaScript-Fundamentals.png";
import cert5 from "@/assets/React-Hooks-Crash-Course.png";
import cert6 from "@/assets/machine-learning-for-beginners.jpg";
import cert7 from "@/assets/project-planning-with-ai.jpg";
import cert8 from "@/assets/prompt-engineering.jpg";
import cert9 from "@/assets/vibe-coding.jpg";

const certs = [
  { name: "Certified HTML Developer", issuer: "W3Schools", logo: logoW3Schools, year: "2022", image: cert1 },
  { name: "Introduction To HTML", issuer: "Sololearn", logo: logoSoloLearn, year: "2025", image: cert2 },
  { name: "Fullstack Ecommerce Project", issuer: "Greatstack", logo: logoGreatstack, year: "2026", image: cert3 },
  { name: "JavaScript Fundamentals", issuer: "Greatstack", logo: logoGreatstack, year: "2026", image: cert4 },
  { name: "React Hooks Crash Course", issuer: "Greatstack", logo: logoGreatstack, year: "2026", image: cert5 },
  { name: "Machine Learning For Beginners", issuer: "SoloLearn", logo: logoSoloLearn, year: "2025", image: cert6 },
  { name: "Project Planning With AI", issuer: "Sololearn", logo: logoSoloLearn, year: "2025", image: cert7 },
  { name: "Prompt Engineering", issuer: "Sololearn", logo: logoSoloLearn, year: "2025", image: cert8 },
  { name: "Vibe Coding", issuer: "SoloLearn", logo: logoSoloLearn, year: "2026", image: cert9 },
];

const ease = [0.16, 1, 0.3, 1];

const CertificationsSection = () => {

  const [selectedCert, setSelectedCert] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="section-padding relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-card/40 via-transparent to-card/40" />

      <div className="max-w-7xl mx-auto relative">

        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="font-mono text-primary text-sm mb-2">// Certifications</p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Achievements & <span className="text-gradient">credentials</span>
            </h2>

            <p className="text-muted-foreground max-w-xl leading-relaxed">
              Industry-recognized certifications demonstrating expertise in modern development,
              design principles, and professional best practices.
            </p>
          </div>

          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden md:block"
          >
            <Award className="w-8 h-8 text-primary/20" />
          </motion.div>
        </motion.div>


        {/* Certificates Grid */}

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {certs.slice(0, visibleCount).map((cert, i) => (

            <motion.div
              key={cert.name}
              layout
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ layout: { duration: 0.35, ease: "easeInOut" } }}
              onClick={() => setSelectedCert(cert)}
              className="glass rounded-2xl overflow-hidden hover-lift card-shine border-glow group cursor-pointer"
            >

              <div className="relative h-[220px] overflow-hidden">

                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

              </div>


              <div className="p-5 flex items-start gap-3">

                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 ring-1 ring-border/20">
                  <img src={cert.logo} alt={cert.issuer} className="w-8 h-8 object-contain" />
                </div>

                <div>
                  <h3 className="font-semibold text-sm group-hover:text-primary transition">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-muted-foreground mt-1 font-mono">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>


        {/* Show More / Less Buttons */}

        <div className="flex justify-center mt-10 gap-4">

          {visibleCount < certs.length && (
            <button
              onClick={() => setVisibleCount((prev) => Math.min(prev + 3, certs.length))}
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl glass text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 active:scale-[0.97] border-glow"
            >
              Show more certificates
              <ChevronDown
                size={16}
                className="group-hover:translate-y-0.5 transition-transform duration-200"
              />
            </button>
          )}

          {visibleCount > 3 && (
            <button
              onClick={() => setVisibleCount(3)}
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-xl glass text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 active:scale-[0.97] border-glow"
            >
              Show less certificates
              <ChevronUp
                size={16}
                className="group-hover:-translate-y-0.5 transition-transform duration-200"
              />
            </button>
          )}

        </div>

      </div>



      {/* Certificate Modal */}

      <AnimatePresence>

        {selectedCert && (

          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >

            <div className="relative" onClick={(e) => e.stopPropagation()}>

              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary transition"
              >
                <X size={28} />
              </button>

              <motion.img
                src={selectedCert.image}
                alt={selectedCert.name}
                className="max-w-4xl w-full rounded-xl shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default CertificationsSection;