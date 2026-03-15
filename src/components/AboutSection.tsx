import { motion } from "framer-motion";
import { GraduationCap, Award, Heart, ExternalLink } from "lucide-react";
import certPostman from "@/assets/cert-postman.png";
import certGfgJava from "@/assets/cert-gfg-java.png";
import certLinux from "@/assets/cert-linux.png";
import certFreecodecamp from "@/assets/cert-freecodecamp.png";

const education = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "B.Tech – Computer Science and Engineering",
    score: "CGPA: 6.93",
    period: "Aug 2023 – Present",
  },
  {
    institution: "Tirumala Educational Institute",
    location: "Bhimavaram, Andhra Pradesh",
    degree: "Intermediate",
    score: "Percentage: 98%",
    period: "May 2022 – Mar 2023",
  },
  {
    institution: "Tirumala Educational Institute",
    location: "Bhimavaram, Andhra Pradesh",
    degree: "Matriculation",
    score: "Percentage: 97%",
    period: "Apr 2020 – Mar 2021",
  },
];

const certificates = [
  {
    title: "Postman API Fundamentals Student Expert",
    org: "Postman",
    date: "Mar 2026",
    image: certPostman,
    link: "https://badges.parchment.com/public/assertions/-fuKeGRsQZ6VBSJXFOg9xg?identity__email=mandavallichiruchandan@gmail.com",
  },
  {
    title: "Java Programming – Self Paced",
    org: "GFG",
    date: "Jan 2026",
    image: certGfgJava,
    link: "https://media.geeksforgeeks.org/courses/certificates/7121f6c1e5551fc97977e5384d9b0af1.pdf",
  },
  {
    title: "Linux Mastery: From Basics to Advance",
    org: "GFG",
    date: "Nov 2025",
    image: certLinux,
    link: "https://media.geeksforgeeks.org/courses/certificates/b7c2dacc3e86a89ea15b03480d390ca7.pdf",
  },
  {
    title: "Responsive Web Design",
    org: "FreeCodeCamp",
    date: "Nov 2023",
    image: certFreecodecamp,
    link: "https://www.freecodecamp.org/certification/fcc32fefb77-4886-436c-92e3-89f0ed645e38/responsive-web-design",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GraduationCap className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ x: 6, borderColor: "hsl(172 66% 50% / 0.3)" }}
                className="card-glass rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 transition-colors duration-300"
              >
                <div>
                  <h3 className="font-heading font-semibold text-lg">{edu.institution}</h3>
                  <p className="text-secondary-foreground text-sm">{edu.degree} · <span className="text-primary font-mono">{edu.score}</span></p>
                  <p className="text-muted-foreground text-xs">{edu.location}</p>
                </div>
                <p className="text-muted-foreground text-sm font-mono whitespace-nowrap">{edu.period}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Certificates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Certificates</h2>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {certificates.map((cert, i) => (
              <motion.a
                key={i}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="card-glass rounded-xl p-5 flex items-center gap-4 group cursor-pointer hover:border-primary/30 transition-colors duration-300"
              >
                <motion.img
                  src={cert.image}
                  alt={cert.org}
                  className="w-12 h-12 object-contain rounded-lg shrink-0"
                  whileHover={{ rotate: 6 }}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-medium text-sm group-hover:text-primary transition-colors">{cert.title}</h3>
                  <p className="text-muted-foreground text-xs font-mono mt-1">{cert.org}</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-primary text-xs font-mono whitespace-nowrap">{cert.date}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Extra-Curricular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="w-6 h-6 text-primary" />
            </motion.div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Beyond Code</h2>
          </div>
          <motion.div
            whileHover={{ y: -2 }}
            className="card-glass rounded-xl p-6 transition-colors duration-300 hover:border-primary/30"
          >
            <p className="text-secondary-foreground leading-relaxed">
              Volunteered with <span className="text-primary font-medium">Undurthi Paul Foundation International</span>, contributing to community welfare initiatives. Actively participated in tree plantation drives and donation programs, supporting environmental sustainability and social responsibility.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
