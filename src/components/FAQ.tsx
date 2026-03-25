import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import faqImage from "@/assets/faq-image.jpg";

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer:
            "Most projects take between 1–3 weeks depending on complexity. Simple landing pages can be delivered faster, while larger applications may require additional time for design, development, and testing."
    },
    {
        question: "What technologies do you use?",
        answer:
            "I primarily build websites using modern technologies like Next.js, React, Tailwind CSS, and scalable backend systems to ensure performance, maintainability, and long-term reliability."
    },
    {
        question: "Can you redesign my existing website?",
        answer:
            "Yes. I can redesign outdated websites with modern UI/UX, improved performance, and better SEO to help your business convert more visitors into customers."
    },
    {
        question: "Will my website be mobile responsive?",
        answer:
            "Absolutely. Every website I develop is fully responsive and optimized for mobile, tablet, and desktop devices."
    },
    {
        question: "Do you provide SEO optimization?",
        answer:
            "Yes. I implement foundational SEO practices including optimized structure, fast loading speeds, semantic markup, and proper metadata."
    },
    {
        question: "How can we start working together?",
        answer:
            "Simply fill out the contact form below with your project details. I will review your requirements and get back to you to discuss the next steps."
    },
    {
        question: "Do you also provide website maintenance after launch?",
        answer:
            "Yes. I can provide ongoing maintenance including performance monitoring, updates, security improvements, and small feature additions to ensure your website continues running smoothly."
    },
    {
        question: "How much does a website project typically cost?",
        answer:
            "Pricing depends on the scope, features, and complexity of the project. Simple websites start at a lower cost while custom applications require more development time. After understanding your requirements, I provide a clear and transparent quote."
    }
];

const ease = [0.16, 1, 0.3, 1];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="py-24 relative">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease }}
                    className="flex items-end justify-between mb-16"
                >
                    <div>
                        <p className="font-mono text-primary text-sm mb-2">
      // FAQ
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Questions & <span className="text-gradient">answers</span>
                        </h2>

                        <p className="text-muted-foreground max-w-xl leading-relaxed">
                            Common questions clients ask before starting a project.
                            If you don't find what you're looking for, feel free to reach out.
                        </p>
                    </div>

                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="hidden md:block"
                    >
                        <HelpCircle className="w-8 h-8 text-primary/20" />
                    </motion.div>
                </motion.div>

                {/* FAQ Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Image */}
                    <div className="hidden md:block relative">

                        {/* Glow layer */}
                        <div className="absolute -inset-6 bg-primary/30 blur-[80px] opacity-60 rounded-3xl"></div>

                        {/* Image */}
                        <img
                            src={faqImage}
                            alt="Workspace setup"
                            className="relative rounded-2xl border border-border object-cover w-full h-full"
                        />

                    </div>

                    {/* Questions */}
                    <motion.div
                        className="space-y-4"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: { staggerChildren: 0.08 }
                            }
                        }}
                    >

                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                transition={{ duration: 0.4, ease }}
                                className="border border-border/60 rounded-xl overflow-hidden bg-background/40 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_0_25px_rgba(255,170,0,0.15)] transition-all duration-300"
                            >

                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex justify-between items-center p-5 text-left hover:bg-muted/40 transition"
                                >
                                    <span className="font-medium text-foreground">{faq.question}</span>

                                    <ChevronDown
                                        className={`transition-all duration-300 ${open === i ? "rotate-180 text-primary scale-110" : ""
                                            }`}
                                    />
                                </button>

                                <AnimatePresence initial={false}>
                                    {open === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            className="px-5 pt-3 pb-3 text-muted-foreground text-sm"
                                        >
                                            {faq.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </motion.div>
                        ))}

                    </motion.div>

                </div>
            </div>
        </section>
    );
}