import { useEffect, useRef } from "react";

const codeSnippets = [
  "{ }", "< />", "=>", "( )", "[ ]", "&&", "||",
  "++", "::", "//", "->", "===", "!=",
  "let", "fn", "if", "for", "0x", "async", "await",
  "import", "return", "const", "class", "export",
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
  rotSpeed: number;
}

interface Dot {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
}

const CodeBackground3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Floating code snippets
    const particles: Particle[] = Array.from({ length: 22 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.2 - 0.1,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      fontSize: 12 + Math.random() * 10,
      opacity: 0.06 + Math.random() * 0.1,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.005,
    }));

    // Small dots
    const dots: Dot[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 2 + 0.5,
    }));

    // Wireframe geometry vertices (icosahedron-like)
    const geoCenter = { x: w * 0.78, y: h * 0.35 };
    const geoRadius = Math.min(w, h) * 0.12;
    const geoVertices: [number, number, number][] = [];
    const phi = (1 + Math.sqrt(5)) / 2;
    const icoVerts: [number, number, number][] = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];
    const norm = Math.sqrt(1 + phi * phi);
    icoVerts.forEach(([vx, vy, vz]) => {
      geoVertices.push([vx / norm, vy / norm, vz / norm]);
    });

    const icoEdges: [number, number][] = [
      [0,1],[0,5],[0,7],[0,10],[0,11],[1,5],[1,7],[1,8],[1,9],
      [2,3],[2,4],[2,6],[2,10],[2,11],[3,4],[3,6],[3,8],[3,9],
      [4,5],[4,9],[4,11],[5,9],[5,11],[6,7],[6,8],[6,10],
      [7,8],[7,10],[8,9],[10,11],
    ];

    let time = 0;

    const draw = () => {
      time += 0.008;
      ctx.clearRect(0, 0, w, h);

      // Draw dots
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = w;
        if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h;
        if (d.y > h) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.size * d.z, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(172, 66%, 50%, ${0.08 + d.z * 0.12})`;
        ctx.fill();
      });

      // Draw connecting lines between nearby dots
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `hsla(172, 66%, 50%, ${0.03 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw code snippets
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        if (p.x < -100) p.x = w + 50;
        if (p.x > w + 100) p.x = -50;
        if (p.y < -50) p.y = h + 50;
        if (p.y > h + 50) p.y = -50;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.fontSize * p.z}px "JetBrains Mono", monospace`;
        ctx.fillStyle = `hsla(172, 66%, 50%, ${p.opacity})`;
        ctx.textAlign = "center";
        ctx.fillText(p.text, 0, 0);
        ctx.restore();
      });

      // Draw rotating wireframe icosahedron
      const cosY = Math.cos(time * 0.6);
      const sinY = Math.sin(time * 0.6);
      const cosX = Math.cos(time * 0.4);
      const sinX = Math.sin(time * 0.4);

      const projected = geoVertices.map(([vx, vy, vz]) => {
        // Rotate Y
        let x1 = vx * cosY - vz * sinY;
        let z1 = vx * sinY + vz * cosY;
        // Rotate X
        let y1 = vy * cosX - z1 * sinX;
        let z2 = vy * sinX + z1 * cosX;
        const scale = 1 / (1 + z2 * 0.3);
        return {
          x: geoCenter.x + x1 * geoRadius * scale,
          y: geoCenter.y + y1 * geoRadius * scale,
          z: z2,
        };
      });

      icoEdges.forEach(([a, b]) => {
        const pa = projected[a];
        const pb = projected[b];
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.strokeStyle = `hsla(172, 66%, 50%, ${0.06 + (pa.z + pb.z) * 0.02})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Draw a second wireframe torus on the left
      const torusCenter = { x: w * 0.2, y: h * 0.7 };
      const R = Math.min(w, h) * 0.08;
      const r = R * 0.35;
      const segments = 16;
      const rings = 12;

      for (let i = 0; i < rings; i++) {
        const theta = (i / rings) * Math.PI * 2;
        const nextTheta = ((i + 1) / rings) * Math.PI * 2;
        for (let j = 0; j < segments; j++) {
          const phi1 = (j / segments) * Math.PI * 2;
          const phi2 = ((j + 1) / segments) * Math.PI * 2;

          const getPoint = (t: number, p: number) => {
            let x = (R + r * Math.cos(p)) * Math.cos(t);
            let y = (R + r * Math.cos(p)) * Math.sin(t);
            let z = r * Math.sin(p);
            // Rotate
            const cx = Math.cos(time * 0.3);
            const sx = Math.sin(time * 0.3);
            const cz = Math.cos(time * 0.5);
            const sz = Math.sin(time * 0.5);
            const y2 = y * cx - z * sx;
            const z2 = y * sx + z * cx;
            const x2 = x * cz - y2 * sz;
            const y3 = x * sz + y2 * cz;
            return { x: torusCenter.x + x2, y: torusCenter.y + y3, z: z2 };
          };

          const p1 = getPoint(theta, phi1);
          const p2 = getPoint(theta, phi2);
          const p3 = getPoint(nextTheta, phi1);

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `hsla(172, 66%, 50%, 0.04)`;
          ctx.lineWidth = 0.6;
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p3.x, p3.y);
          ctx.strokeStyle = `hsla(172, 66%, 50%, 0.04)`;
          ctx.stroke();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
};

export default CodeBackground3D;
