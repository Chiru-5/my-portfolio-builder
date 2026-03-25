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
            About Me
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
          A driven Computer Science student at Lovely Professional University with hands-on experience in Java, Spring Boot, and React. I enjoy architecting clean backend systems and pairing them with thoughtful, responsive interfaces. With 500+ DSA problems solved and multiple real-world projects shipped, I bring both depth and hustle to every line of code I write.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutMeSection;
