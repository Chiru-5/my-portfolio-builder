import { motion } from "framer-motion";
import { User, MapPin, Code2, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "Specializing in Java, Spring Boot, and modern web technologies",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "500+ DSA problems solved across competitive programming platforms",
  },
  {
    icon: MapPin,
    title: "Based in India",
    description: "B.Tech CSE student at Lovely Professional University, Punjab",
  },
];

const AboutMeSection = () => {
  return (
    <section id="about-me" className="px-4 py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary mb-2">
            WHO I AM
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">About Me</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="card-glass rounded-xl p-6 md:p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <User className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold">
                Hey, I'm <span className="text-primary">Chiru Chandan</span> 👋
              </h3>
            </div>
            <div className="space-y-4 text-secondary-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer and Computer Science student who loves turning ideas into 
                real-world applications. With a strong foundation in{" "}
                <span className="font-medium text-primary">Java</span>,{" "}
                <span className="font-medium text-primary">Spring Boot</span>, and modern frontend technologies, 
                I build scalable backends and intuitive user interfaces.
              </p>
              <p>
                Beyond coding, I'm an active contributor to community welfare through volunteering, and I believe 
                in writing clean, maintainable code that makes a difference. I'm always eager to learn new 
                technologies and take on challenges that push me to grow as a developer.
              </p>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 6, borderColor: "hsl(172 66% 50% / 0.3)" }}
                className="card-glass flex items-start gap-4 rounded-xl p-5 transition-colors duration-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
