import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform Backend",
    period: "Nov 2025 – Dec 2025",
    description: "Scalable backend for an E-Commerce platform enabling management of customers, products, carts, and orders with layered architecture.",
    highlights: [
      "RESTful services with Spring Data JPA & Hibernate",
      "MySQL & H2 Database integration",
      "Controller–Service–Repository architecture with Spring Boot Actuator",
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs", "Maven"],
    github: "https://github.com/Chiru-5/E-Commerce-Platform",
  },
  {
    title: "LawEzy – Legal Help Platform",
    period: "Mar 2025 – Apr 2025",
    description: "Responsive legal-tech web platform connecting clients with legal advisors with real-time interactions.",
    highlights: [
      "Real-time chat & document upload",
      "Case tracking workflows",
      "Robust API communication layer",
    ],
    tech: ["HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "CPU Scheduler Simulator",
    period: "Mar 2025 – Apr 2025",
    description: "Interactive CPU scheduling simulator with real-time Gantt chart visualizations for multiple scheduling algorithms.",
    highlights: [
      "Multiple scheduling algorithm simulation",
      "Real-time Gantt chart visualization",
      "Deployed via GitHub & Netlify",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    github: "https://github.com/anudeep-572/Intelligent_CPU_Scheduler",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: "hsl(172 66% 50% / 0.3)" }}
              className="card-glass rounded-xl p-6 md:p-8 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-heading text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-mono">{project.period}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0 mt-1">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`GitHub repo for ${project.title}`}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title}`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>
              <p className="text-secondary-foreground mb-4">{project.description}</p>
              <ul className="space-y-1 mb-5">
                {project.highlights.map((h) => (
                  <li key={h} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <motion.span
                    key={t}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-2.5 py-1 text-xs font-mono rounded bg-primary/10 text-primary border border-primary/20 cursor-default"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
