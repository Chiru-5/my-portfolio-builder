import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { Float, Text } from "@react-three/drei";

const codeSnippets = [
  "{ }", "< />", "=>", "( )", "[ ]", "&&", "||", "!=",
  "++", "**", "::", "//", "/*", "*/", "->", "===",
  "let", "fn", "if", "for", "0x", "01", "async", "await",
];

function FloatingCodeParticle({ position, snippet, speed }: {
  position: [number, number, number];
  snippet: string;
  speed: number;
}) {
  const ref = useRef<THREE.Group>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * speed;
    ref.current.position.y = initialY + Math.sin(t) * 0.5;
    ref.current.rotation.y = Math.sin(t * 0.5) * 0.3;
    ref.current.rotation.x = Math.cos(t * 0.3) * 0.15;
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={ref} position={position}>
        <Text
          fontSize={0.18 + Math.random() * 0.12}
          color="hsl(172, 66%, 50%)"
          anchorX="center"
          anchorY="middle"
          fillOpacity={0.12 + Math.random() * 0.15}
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff"
        >
          {snippet}
        </Text>
      </group>
    </Float>
  );
}

function ParticleField() {
  const count = 120;
  const ref = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="hsl(172, 66%, 50%)"
        transparent
        opacity={0.25}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function WireframeGeometry() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.08;
    ref.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <mesh ref={ref} position={[3.5, -1, -3]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshBasicMaterial
        color="hsl(172, 66%, 50%)"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  );
}

function WireframeTorus() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.05;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <mesh ref={ref} position={[-3.5, 1.5, -2]}>
      <torusGeometry args={[1.2, 0.3, 8, 20]} />
      <meshBasicMaterial
        color="hsl(172, 66%, 50%)"
        wireframe
        transparent
        opacity={0.05}
      />
    </mesh>
  );
}

const CodeBackground3D = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 4 - 1,
      ] as [number, number, number],
      snippet: codeSnippets[i % codeSnippets.length],
      speed: 0.3 + Math.random() * 0.5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />

        {particles.map((p, i) => (
          <FloatingCodeParticle key={i} {...p} />
        ))}

        <ParticleField />
        <WireframeGeometry />
        <WireframeTorus />
      </Canvas>
    </div>
  );
};

export default CodeBackground3D;
