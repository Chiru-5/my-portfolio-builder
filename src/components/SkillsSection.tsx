import { cn } from "@/lib/utils";

const technologies = [
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    name: "Maven",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
] as const;

const rowOne = [...technologies, ...technologies];
const rowTwo = [...[...technologies].reverse(), ...[...technologies].reverse()];

interface SkillsMarqueeRowProps {
  items: typeof rowOne;
  reverse?: boolean;
}

const SkillsMarqueeRow = ({ items, reverse = false }: SkillsMarqueeRowProps) => {
  return (
    <div className="relative overflow-hidden rounded-[calc(var(--radius)+0.5rem)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-background to-transparent" />

      <div
        className={cn(
          "logo-marquee-track flex w-max items-center gap-4 py-3",
          reverse && "logo-marquee-track-reverse"
        )}
      >
        {items.map((tech, index) => (
          <div
            key={`${tech.name}-${index}`}
            className="group flex min-w-[170px] items-center gap-3 rounded-2xl border border-border bg-secondary/80 px-5 py-4 shadow-[var(--shadow-card)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background/80 ring-1 ring-border">
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                className="h-7 w-7 object-contain transition duration-300 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-mono text-sm tracking-wide text-secondary-foreground">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="px-4 py-24">
      <div className="container space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-primary">Tech stack</p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Infinite scrolling skills with logos</h2>
          <p className="text-muted-foreground">
            A smooth, lightweight showcase of the tools and technologies I use to build clean full-stack products.
          </p>
        </div>

        <div className="space-y-4">
          <SkillsMarqueeRow items={rowOne} />
          <SkillsMarqueeRow items={rowTwo} reverse />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
