import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(hsl(172 66% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(172 66% 50%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-[100px]" />

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-6">
            Full Stack Developer
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Chiru<span className="text-gradient"> Chandan</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Building scalable backends & beautiful frontends. Passionate about clean code, system design, and crafting great user experiences.
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a href="https://github.com/Chiru-5" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/chiru" target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:mandavallichiruchandan@gmail.com"
              className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
            <a href="tel:+918143217671"
              className="p-3 rounded-lg border border-border bg-secondary/50 hover:border-primary/50 hover:text-primary transition-all duration-300">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="animate-float"
        >
          <a href="#skills" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-mono">
            <ArrowDown className="w-4 h-4" />
            scroll down
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
