import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 border-t border-border">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">Get in touch</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <a
            href="mailto:mandavallichiruchandan@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-heading font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity mb-10"
          >
            <Mail className="w-4 h-4" />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <a href="tel:+918143217671" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> +91 8143217671
            </a>
            <a href="https://github.com/Chiru-5" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/chiru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground/50 text-xs font-mono mt-16">
            © 2026 Chiru Chandan. Built with passion.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
