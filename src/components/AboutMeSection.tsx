import { motion } from "framer-motion";
import { User, MapPin, Code2, Rocket, Coffee, Terminal, Zap } from "lucide-react";

const stats = [
  { value: "500+", label: "DSA Problems", icon: Zap },
  { value: "10+", label: "Projects Built", icon: Terminal },
  { value: "5+", label: "Tech Stacks", icon: Code2 },
];

const traits = [
  { emoji: "☕", text: "Coffee-powered coder" },
  { emoji: "🎯", text: "Detail-oriented" },
  { emoji: "🚀", text: "Fast learner" },
  { emoji: "🤝", text: "Team player" },
];

const AboutMeSection = () => {
  return (
    <section id="about-me" className="px-4 py-28 relative overflow-hidden">
      {/* Decorative blurred shapes */}
      <motion.div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/5 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary/8 blur-[80px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
            className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20 mb-5"
          >
            <User className="h-6 w-6 text-primary" />
          </motion.div>
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary mb-2">
            Who I Am
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-5xl">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        {/* Main content — bento-style grid */}
        <div className="grid gap-4 md:gap-5 md:grid-cols-3 md:grid-rows-[auto_auto]">
          
          {/* Bio card — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 card-glass rounded-2xl p-6 md:p-8 relative group"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4">
                Hey there! I'm <span className="text-primary">Chiru Chandan</span>{" "}
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block origin-[70%_70%]"
                >
                  👋
                </motion.span>
              </h3>
              <div className="space-y-3 text-secondary-foreground/80 leading-relaxed text-[0.95rem]">
                <p>
                  A passionate <span className="font-semibold text-foreground">Full Stack Developer</span> and 
                  Computer Science student who thrives on turning complex problems into elegant solutions. 
                  I specialize in{" "}
                  <span className="font-mono text-primary text-sm bg-primary/10 px-1.5 py-0.5 rounded">Java</span>,{" "}
                  <span className="font-mono text-primary text-sm bg-primary/10 px-1.5 py-0.5 rounded">Spring Boot</span>, and{" "}
                  <span className="font-mono text-primary text-sm bg-primary/10 px-1.5 py-0.5 rounded">React</span>{" "}
                  — building scalable backends and pixel-perfect frontends.
                </p>
                <p>
                  Currently pursuing B.Tech in CSE at Lovely Professional University, I'm on a mission to 
                  craft software that's not just functional, but genuinely delightful to use. When I'm not coding, 
                  you'll find me solving DSA problems or contributing to community welfare.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Location card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="card-glass rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 mx-auto mb-3"
              >
                <MapPin className="h-6 w-6 text-primary" />
              </motion.div>
              <p className="font-heading font-semibold text-sm">Punjab, India</p>
              <p className="text-xs text-muted-foreground mt-1">LPU • B.Tech CSE</p>
            </div>
          </motion.div>

          {/* Stats row — spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="card-glass rounded-2xl p-5 text-center group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 mx-auto mb-2">
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <motion.p
                    className="font-heading text-2xl md:text-3xl font-bold text-gradient"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 + i * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Traits card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="card-glass rounded-2xl p-6 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-4 w-4 text-primary" />
                <p className="font-heading text-sm font-semibold">Quick Bits</p>
              </div>
              <div className="space-y-3">
                {traits.map((trait, i) => (
                  <motion.div
                    key={trait.text}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-2.5 text-sm text-secondary-foreground/80"
                  >
                    <span className="text-base">{trait.emoji}</span>
                    <span>{trait.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
