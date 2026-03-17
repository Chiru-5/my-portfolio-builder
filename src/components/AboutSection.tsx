import { motion } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Heart, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

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
    date: "2026",
    link: "https://badges.parchment.com/public/assertions/-fuKeGRsQZ6VBSJXFOg9xg?identity__email=mandavallichiruchandan@gmail.com",
  },
  {
    title: "Java Programming – Self Paced",
    org: "GFG",
    date: "2026",
    link: "https://media.geeksforgeeks.org/courses/certificates/7121f6c1e5551fc97977e5384d9b0af1.pdf",
  },
  {
    title: "Linux Mastery: From Basics to Advance",
    org: "GFG",
    date: "2025",
    link: "https://media.geeksforgeeks.org/courses/certificates/b7c2dacc3e86a89ea15b03480d390ca7.pdf",
  },
  {
    title: "Responsive Web Design",
    org: "FreeCodeCamp",
    date: "2023",
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
    transition: { duration: 0.5 },
  },
};

const AboutSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {certificates.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="card-glass rounded-xl p-6 min-w-[280px] md:min-w-[300px] flex-shrink-0 snap-start group cursor-pointer hover:border-primary/30 transition-colors duration-300 flex flex-col justify-between gap-6"
                >
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="font-heading font-bold text-base uppercase tracking-wide group-hover:text-primary transition-colors leading-tight">
                      {cert.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-primary text-xs font-mono uppercase tracking-wider">{cert.org}</span>
                    <span className="text-muted-foreground text-xs font-mono">{cert.date}</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-auto" />
                  </div>
                </motion.a>
              ))}
            </div>
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => scroll("left")}
                className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 rounded-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
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
