"use client";

import { useEffect, useState } from "react";

type Particle = {
  id: number;
  x: number;
  color: string;
  rotation: number;
  delay: number;
};

const COLORS = ["#FF6B9D", "#FFD93D", "#6BCBFF", "#C44DFF", "#95E879", "#FF8C42"];

export default function Confetti({ active }: { active: boolean }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) return;
    setParticles(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: COLORS[i % COLORS.length],
        rotation: Math.random() * 360,
        delay: Math.random() * 0.5,
      }))
    );
    const timer = setTimeout(() => setParticles([]), 3000);
    return () => clearTimeout(timer);
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="confetti-particle absolute top-0"
          style={
            {
              left: `${p.x}%`,
              backgroundColor: p.color,
              "--confetti-rotation": `${p.rotation}deg`,
              "--confetti-delay": `${p.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
