import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const contactLinks = [
  { href: "tel:+918143217671", icon: Phone, label: "+91 8143217671" },
  { href: "https://github.com/Chiru-5", icon: Github },
  { href: "https://linkedin.com/in/chiru", icon: Linkedin },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 border-t border-border">
      <div className="container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-primary text-sm tracking-widest uppercase mb-2"
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-heading text-3xl md:text-4xl font-bold mb-4"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-md mx-auto mb-10"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <motion.a
          href="mailto:mandavallichiruchandan@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(172 66% 50% / 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-heading font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity mb-10"
        >
          <Mail className="w-4 h-4" />
          Say Hello
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-6 text-muted-foreground"
        >
          {contactLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground/50 text-xs font-mono mt-16"
        >
          © 2026 Chiru Chandan. Built with passion.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
