import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import certFreeCodeCamp from "@/assets/cert-freecodecamp.png";
import certGfgJava from "@/assets/cert-gfg-java.png";
import certLinux from "@/assets/cert-linux.png";
import certPostman from "@/assets/cert-postman-preview.png";

const certificates = [
  {
    title: "Postman API Fundamentals Student Expert",
    org: "Postman",
    date: "2026",
    link: "https://badges.parchment.com/public/assertions/-fuKeGRsQZ6VBSJXFOg9xg?identity__email=mandavallichiruchandan@gmail.com",
    image: certPostman,
    alt: "Postman API Fundamentals Student Expert certificate preview",
  },
  {
    title: "Java Programming – Self Paced",
    org: "GFG",
    date: "2026",
    link: "https://media.geeksforgeeks.org/courses/certificates/7121f6c1e5551fc97977e5384d9b0af1.pdf",
    image: certGfgJava,
    alt: "GeeksforGeeks Java Programming certificate preview",
  },
  {
    title: "Linux Mastery: From Basics to Advance",
    org: "GFG",
    date: "2025",
    link: "https://media.geeksforgeeks.org/courses/certificates/b7c2dacc3e86a89ea15b03480d390ca7.pdf",
    image: certLinux,
    alt: "GeeksforGeeks Linux Mastery certificate preview",
  },
  {
    title: "Responsive Web Design",
    org: "FreeCodeCamp",
    date: "2023",
    link: "https://www.freecodecamp.org/certification/fcc32fefb77-4886-436c-92e3-89f0ed645e38/responsive-web-design",
    image: certFreeCodeCamp,
    alt: "FreeCodeCamp Responsive Web Design certificate preview",
  },
] as const;

const marqueeCertificates = [...certificates, ...certificates];

const CertificatesMarquee = () => {
  return (
    <div className="relative overflow-hidden rounded-[calc(var(--radius)+0.5rem)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />

      <div className="marquee-track flex w-max gap-5 py-2 hover:[animation-play-state:paused]">
        {marqueeCertificates.map((cert, index) => (
          <motion.a
            key={`${cert.title}-${index}`}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -8, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="card-glass group flex w-[320px] shrink-0 flex-col gap-4 rounded-2xl p-4 md:w-[360px]"
            aria-label={`Open ${cert.title} certificate`}
          >
            <div className="overflow-hidden rounded-xl border border-border bg-card">
              <AspectRatio ratio={4 / 3}>
                <img
                  src={cert.image}
                  alt={cert.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </AspectRatio>
            </div>

            <div className="flex items-start justify-between gap-3">
              <div className="space-y-2">
                <p className="text-xs font-mono uppercase tracking-[0.24em] text-primary">{cert.org}</p>
                <h3 className="font-heading text-base font-bold leading-tight text-foreground">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-muted-foreground">Issued {cert.date}</p>
              </div>
              <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default CertificatesMarquee;
