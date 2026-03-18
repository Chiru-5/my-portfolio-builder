import { useEffect, useRef } from "react";

const codeSnippets = [
  "{ }",
  "< />",
  "=>",
  "( )",
  "[ ]",
  "&&",
  "||",
  "++",
  "::",
  "//",
  "->",
  "===",
  "let",
  "async",
  "await",
  "const",
  "return",
  "export",
];

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  text: string;
  fontSize: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

interface Dot {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
}

const phi = (1 + Math.sqrt(5)) / 2;
const norm = Math.sqrt(1 + phi * phi);
const geoVertices: [number, number, number][] = [
  [-1, phi, 0],
  [1, phi, 0],
  [-1, -phi, 0],
  [1, -phi, 0],
  [0, -1, phi],
  [0, 1, phi],
  [0, -1, -phi],
  [0, 1, -phi],
  [phi, 0, -1],
  [phi, 0, 1],
  [-phi, 0, -1],
  [-phi, 0, 1],
].map(([x, y, z]) => [x / norm, y / norm, z / norm]);

const icoEdges: [number, number][] = [
  [0, 1], [0, 5], [0, 7], [0, 10], [0, 11], [1, 5], [1, 7], [1, 8], [1, 9],
  [2, 3], [2, 4], [2, 6], [2, 10], [2, 11], [3, 4], [3, 6], [3, 8], [3, 9],
  [4, 5], [4, 9], [4, 11], [5, 9], [5, 11], [6, 7], [6, 8], [6, 10], [7, 8],
  [7, 10], [8, 9], [10, 11],
];

const wrap = (value: number, min: number, max: number) => {
  if (value < min) return max;
  if (value > max) return min;
  return value;
};

const CodeBackground3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = 1;
    let lowPower = width < 768;
    let particles: Particle[] = [];
    let dots: Dot[] = [];
    let sceneTime = 0;
    let geoCenter = { x: width * 0.78, y: height * 0.34 };
    let geoRadius = Math.min(width, height) * 0.1;

    const buildScene = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      lowPower = width < 768;
      geoCenter = { x: width * 0.78, y: height * 0.34 };
      geoRadius = Math.min(width, height) * (lowPower ? 0.08 : 0.11);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const particleCount = lowPower ? 8 : 14;
      const dotCount = lowPower ? 22 : 38;

      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.5 + 0.6,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.14,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        fontSize: 10 + Math.random() * 8,
        opacity: 0.04 + Math.random() * 0.06,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.002,
      }));

      dots = Array.from({ length: dotCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random(),
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 1.6 + 0.6,
      }));
    };

    const drawDots = () => {
      const maxDistance = lowPower ? 86 : 118;
      const maxDistanceSquared = maxDistance * maxDistance;

      for (const dot of dots) {
        dot.x = wrap(dot.x + dot.vx, -10, width + 10);
        dot.y = wrap(dot.y + dot.vy, -10, height + 10);

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * (0.75 + dot.z * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(172, 66%, 50%, ${0.05 + dot.z * 0.08})`;
        ctx.fill();
      }

      for (let i = 0; i < dots.length; i += 1) {
        for (let j = i + 1; j < dots.length; j += 1) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < maxDistanceSquared) {
            const strength = 1 - distanceSquared / maxDistanceSquared;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `hsla(172, 66%, 50%, ${strength * 0.035})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const drawCodeParticles = () => {
      for (const particle of particles) {
        particle.x = wrap(particle.x + particle.vx, -90, width + 90);
        particle.y = wrap(particle.y + particle.vy, -50, height + 50);
        particle.rotation += particle.rotationSpeed;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.font = `${particle.fontSize * particle.z}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `hsla(172, 66%, 50%, ${particle.opacity})`;
        ctx.textAlign = "center";
        ctx.fillText(particle.text, 0, 0);
        ctx.restore();
      }
    };

    const drawIcosahedron = () => {
      const cosY = Math.cos(sceneTime * 0.58);
      const sinY = Math.sin(sceneTime * 0.58);
      const cosX = Math.cos(sceneTime * 0.42);
      const sinX = Math.sin(sceneTime * 0.42);

      const projected = geoVertices.map(([vx, vy, vz]) => {
        const x1 = vx * cosY - vz * sinY;
        const z1 = vx * sinY + vz * cosY;
        const y1 = vy * cosX - z1 * sinX;
        const z2 = vy * sinX + z1 * cosX;
        const scale = 1 / (1 + z2 * 0.28);

        return {
          x: geoCenter.x + x1 * geoRadius * scale,
          y: geoCenter.y + y1 * geoRadius * scale,
          z: z2,
        };
      });

      for (const [a, b] of icoEdges) {
        const start = projected[a];
        const end = projected[b];
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.strokeStyle = `hsla(172, 66%, 50%, ${0.035 + (start.z + end.z + 2) * 0.012})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
    };

    const drawTorus = () => {
      if (lowPower) return;

      const torusCenter = { x: width * 0.2, y: height * 0.72 };
      const outerRadius = Math.min(width, height) * 0.07;
      const innerRadius = outerRadius * 0.34;
      const rings = 8;
      const segments = 10;

      const projectPoint = (theta: number, phiValue: number) => {
        const x = (outerRadius + innerRadius * Math.cos(phiValue)) * Math.cos(theta);
        const y = (outerRadius + innerRadius * Math.cos(phiValue)) * Math.sin(theta);
        const z = innerRadius * Math.sin(phiValue);

        const cosA = Math.cos(sceneTime * 0.34);
        const sinA = Math.sin(sceneTime * 0.34);
        const cosB = Math.cos(sceneTime * 0.5);
        const sinB = Math.sin(sceneTime * 0.5);

        const y2 = y * cosA - z * sinA;
        const z2 = y * sinA + z * cosA;
        const x2 = x * cosB - y2 * sinB;
        const y3 = x * sinB + y2 * cosB;

        return { x: torusCenter.x + x2, y: torusCenter.y + y3, z: z2 };
      };

      for (let ring = 0; ring < rings; ring += 1) {
        const theta = (ring / rings) * Math.PI * 2;
        const nextTheta = ((ring + 1) / rings) * Math.PI * 2;

        for (let segment = 0; segment < segments; segment += 1) {
          const phiValue = (segment / segments) * Math.PI * 2;
          const nextPhiValue = ((segment + 1) / segments) * Math.PI * 2;

          const p1 = projectPoint(theta, phiValue);
          const p2 = projectPoint(theta, nextPhiValue);
          const p3 = projectPoint(nextTheta, phiValue);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = "hsla(172, 66%, 50%, 0.028)";
          ctx.lineWidth = 0.55;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.strokeStyle = "hsla(172, 66%, 50%, 0.028)";
          ctx.lineWidth = 0.55;
          ctx.stroke();
        }
      }
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, width, height);
      drawDots();
      drawCodeParticles();
      drawIcosahedron();
      drawTorus();
    };

    const animate = () => {
      sceneTime += lowPower ? 0.004 : 0.006;
      renderFrame();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handleResize = () => {
      buildScene();
      renderFrame();
    };

    const handleVisibility = () => {
      if (document.hidden && animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }

      if (!document.hidden && !reducedMotion && !animationFrame) {
        animationFrame = window.requestAnimationFrame(animate);
      }
    };

    buildScene();
    renderFrame();
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    if (!reducedMotion) {
      animationFrame = window.requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
};

export default CodeBackground3D;
