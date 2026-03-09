import { motion } from "framer-motion";

const skills = {
  Languages: ["Java", "C++", "JavaScript", "C"],
  Frameworks: ["HTML & CSS", "Spring", "Spring Boot"],
  "Tools & Platforms": ["Maven", "Postman", "MySQL", "GitHub", "Figma"],
  "Soft Skills": ["Collaboration", "Adaptability", "Flexibility", "Attention to Detail"],
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

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="card-glass rounded-xl p-6"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm font-mono rounded-md bg-secondary border border-border text-secondary-foreground">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
