"use client";

import { useEffect, useState } from "react";

const COLORS = [
  "#FF6B9D",
  "#C44DFF",
  "#FFD93D",
  "#6BCBFF",
  "#FF8C42",
  "#95E879",
  "#FF5757",
  "#A78BFA",
];

type Balloon = {
  id: number;
  left: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
  drift: number;
};

export default function Balloons() {
  const [balloons, setBalloons] = useState<Balloon[]>([]);

  useEffect(() => {
    setBalloons(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        color: COLORS[i % COLORS.length],
        size: 28 + Math.random() * 24,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 10,
        drift: (Math.random() - 0.5) * 80,
      }))
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {balloons.map((b) => (
        <div
          key={b.id}
          className="balloon absolute bottom-[-120px]"
          style={
            {
              left: `${b.left}%`,
              "--balloon-size": `${b.size}px`,
              "--balloon-color": b.color,
              "--balloon-delay": `${b.delay}s`,
              "--balloon-duration": `${b.duration}s`,
              "--balloon-drift": `${b.drift}px`,
            } as React.CSSProperties
          }
        >
          <div className="balloon-body" />
          <div className="balloon-string" />
        </div>
      ))}
    </div>
  );
}
