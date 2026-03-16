import { motion } from "framer-motion";

const skillIcons: Record<string, string> = {
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "HTML & CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  Spring: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  Maven: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
};

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
    transition: { duration: 0.5 },
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
                className="flex flex-wrap gap-3"
              >
                {items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={chipVariants}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="inline-flex items-center gap-2 px-3 py-2 text-sm font-mono rounded-md bg-secondary border border-border text-secondary-foreground cursor-default"
                  >
                    {skillIcons[skill] && (
                      <img
                        src={skillIcons[skill]}
                        alt={skill}
                        className="w-5 h-5 object-contain"
                        loading="lazy"
                      />
                    )}
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
