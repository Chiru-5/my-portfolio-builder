import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowDown, Download } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/Chiru-5", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/chiru", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:mandavallichiruchandan@gmail.com", icon: Mail, label: "Email" },
  { href: "tel:+918143217671", icon: Phone, label: "Phone" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(172 66% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(172 66% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-mono text-primary text-sm tracking-widest uppercase mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Chiru<span className="text-gradient"> Chandan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable backends & beautiful frontends. Passionate about clean code, system design, and crafting great user experiences.
        </motion.p>

        <motion.a
          href="/ChiruChandan_Resume.pdf"
          download
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(172 66% 50% / 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity mb-8"
        >
          <Download className="w-4 h-4" />
          Download Resume
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300"
              whileHover={{ y: -4, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.a
            href="#skills"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
            scroll down
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
