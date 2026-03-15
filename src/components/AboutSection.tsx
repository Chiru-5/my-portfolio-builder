import { motion } from "framer-motion";
import { GraduationCap, Award, Heart } from "lucide-react";
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
  { title: "Postman API Fundamentals Student Expert", org: "Postman", date: "Mar 2026", image: certPostman },
  { title: "Java Programming – Self Paced", org: "GFG", date: "Jan 2026", image: certGfgJava },
  { title: "Linux Mastery: From Basics to Advance", org: "GFG", date: "Nov 2025", image: certLinux },
  { title: "Responsive Web Design", org: "FreeCodeCamp", date: "Nov 2023", image: certFreecodecamp },
];

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
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="card-glass rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2"
              >
                <div>
                  <h3 className="font-heading font-semibold text-lg">{edu.institution}</h3>
                  <p className="text-secondary-foreground text-sm">{edu.degree} · <span className="text-primary font-mono">{edu.score}</span></p>
                  <p className="text-muted-foreground text-xs">{edu.location}</p>
                </div>
                <p className="text-muted-foreground text-sm font-mono whitespace-nowrap">{edu.period}</p>
              </motion.div>
            ))}
          </div>
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
            <Award className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Certificates</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="card-glass rounded-xl p-5 flex items-center gap-4"
              >
                <img
                  src={cert.image}
                  alt={cert.org}
                  className="w-12 h-12 object-contain rounded-lg shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-medium text-sm">{cert.title}</h3>
                  <p className="text-muted-foreground text-xs font-mono mt-1">{cert.org}</p>
                </div>
                <span className="text-primary text-xs font-mono whitespace-nowrap shrink-0">{cert.date}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Extra-Curricular */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Heart className="w-6 h-6 text-primary" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Beyond Code</h2>
          </div>
          <div className="card-glass rounded-xl p-6">
            <p className="text-secondary-foreground leading-relaxed">
              Volunteered with <span className="text-primary font-medium">Undurthi Paul Foundation International</span>, contributing to community welfare initiatives. Actively participated in tree plantation drives and donation programs, supporting environmental sustainability and social responsibility.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
