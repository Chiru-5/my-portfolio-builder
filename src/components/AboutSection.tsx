import { motion } from "framer-motion";
import { GraduationCap, Award, Heart } from "lucide-react";

import CertificatesMarquee from "@/components/CertificatesMarquee";

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
    transition: { duration: 0.5 },
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
          <div className="mb-8 flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GraduationCap className="h-6 w-6 text-primary" />
            </motion.div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Education</h2>
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
                whileHover={{ x: 6, borderColor: "hsl(var(--primary) / 0.3)" }}
                className="card-glass flex flex-col gap-2 rounded-xl p-6 transition-colors duration-300 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h3 className="font-heading text-lg font-semibold">{edu.institution}</h3>
                  <p className="text-sm text-secondary-foreground">
                    {edu.degree} · <span className="font-mono text-primary">{edu.score}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{edu.location}</p>
                </div>
                <p className="whitespace-nowrap text-sm font-mono text-muted-foreground">{edu.period}</p>
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
          <div className="mb-8 flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Award className="h-6 w-6 text-primary" />
            </motion.div>
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">Certificates</h2>
            </div>
          </div>
          <CertificatesMarquee />
        </motion.div>

        {/* Extra-Curricular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Heart className="h-6 w-6 text-primary" />
            </motion.div>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Beyond Code</h2>
          </div>
          <motion.div
            whileHover={{ y: -2 }}
            className="card-glass rounded-xl p-6 transition-colors duration-300 hover:border-primary/30"
          >
            <p className="leading-relaxed text-secondary-foreground">
              Volunteered with <span className="font-medium text-primary">Undurthi Paul Foundation International</span>, contributing to community welfare initiatives. Actively participated in tree plantation drives and donation programs, supporting environmental sustainability and social responsibility.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
