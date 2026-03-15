import { motion } from "framer-motion";

const skills = {
  Languages: ["Java", "C++", "JavaScript", "C"],
  Frameworks: ["HTML & CSS", "Spring", "Spring Boot"],
  "Tools & Platforms": ["Maven", "Postman", "MySQL", "GitHub", "Figma"],
  "Soft Skills": ["Collaboration", "Adaptability", "Flexibility", "Attention to Detail"],
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">What I work with</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Skills & Technologies</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div
              key={category}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="card-glass rounded-xl p-6 hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">{category}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1.5 text-sm font-mono rounded-md bg-secondary border border-border text-secondary-foreground cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
