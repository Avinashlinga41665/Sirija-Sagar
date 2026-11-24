
"use client";

import { motion, useReducedMotion } from "framer-motion";

const particles = [
  { left: "7%", size: 16, duration: 13, delay: 0 },
  { left: "17%", size: 12, duration: 17, delay: 4 },
  { left: "27%", size: 18, duration: 15, delay: 8 },
  { left: "38%", size: 13, duration: 19, delay: 2 },
  { left: "49%", size: 16, duration: 14, delay: 6 },
  { left: "60%", size: 12, duration: 18, delay: 10 },
  { left: "71%", size: 18, duration: 16, delay: 3 },
  { left: "82%", size: 14, duration: 20, delay: 7 },
  { left: "93%", size: 12, duration: 15, delay: 11 },
];

export default function GoldSparkles() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className="absolute inset-0 z-[2] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="
            absolute
            top-[-30px]
            font-serif
            font-medium
            text-[#C69A4E]
            select-none
          "
          style={{
            left: particle.left,
            fontSize: particle.size,
            textShadow: "0 0 5px rgba(198,154,78,0.35)",
          }}
          initial={{
            y: -30,
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "105vh",
            x: [0, 20, -15, 25, -10, 0],
            rotate: [0, 45, 100, 180, 260, 360],
            opacity: [0, 0.8, 0.7, 0.6, 0],
          }}
          transition={{
            y: {
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            },
            x: {
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
