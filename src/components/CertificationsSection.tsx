import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const staticCerts = [
  { name: "Responsive Web Design", issuer: "freeCodeCamp" },
  { name: "JavaScript Algorithms", issuer: "freeCodeCamp" },
  { name: "UX Design Fundamentals", issuer: "Google" },
  { name: "Figma UI Design", issuer: "Coursera" },
  { name: "Frontend Development", issuer: "Meta" },
];

const CertificationsSection = () => {
  const { data: dbCerts } = useQuery({
    queryKey: ["certificates"],
    queryFn: async () => {
      const { data, error } = await supabase.from("certificates").select("*").order("display_order");
      if (error) throw error;
      return data;
    },
  });

  const certs = dbCerts && dbCerts.length > 0
    ? dbCerts.map(c => ({ name: c.name, issuer: c.issuer, image_url: c.image_url }))
    : staticCerts.map(c => ({ ...c, image_url: null as string | null }));

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
              {cert.image_url ? <img src={cert.image_url} alt={cert.name} className="w-10 h-10 object-contain rounded shrink-0 mt-0.5" /> : <Award className="text-primary shrink-0 mt-0.5" size={22} />}
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
