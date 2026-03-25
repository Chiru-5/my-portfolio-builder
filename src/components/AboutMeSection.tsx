import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section id="about-me" className="px-4 py-28">
      <div className="container max-w-3xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight">
            About Me <span className="text-primary">/</span>
          </h2>
          <div className="mt-3 h-px w-full bg-border" />
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-4"
        >
          <p className="text-primary font-mono text-sm mb-2">Hi, I'm Chiru Chandan</p>
          <h3 className="font-heading text-3xl md:text-5xl font-bold uppercase leading-tight tracking-tight">
            Fullstack Software Developer
          </h3>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl"
        >
          I specialize in building robust and scalable web applications by combining strong backend logic with intuitive frontend design. With a solid foundation in full-stack development, I create efficient, user-focused digital solutions that are both functional and seamless to use.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMeSection;
