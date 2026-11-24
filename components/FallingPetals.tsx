
"use client";

import { motion, useReducedMotion } from "framer-motion";

const petals = [
  { left: "5%", size: 100, duration: 15, delay: 0, rotate: 180 },
  { left: "10%", size: 100, duration: 15, delay: 2, rotate: 220 },
  { left: "14%", size: 82, duration: 19, delay: 4, rotate: 260 },
  { left: "25%", size: 100, duration: 17, delay: 8, rotate: 140 },
  { left: "36%", size: 100, duration: 21, delay: 2, rotate: 220 },
  { left: "48%", size: 50, duration: 16, delay: 6, rotate: 300 },
  { left: "60%", size: 73, duration: 20, delay: 10, rotate: 180 },
  { left: "72%", size: 60, duration: 18, delay: 3, rotate: 260 },
  { left: "84%", size: 76, duration: 22, delay: 7, rotate: 160 },
  { left: "94%", size: 100, duration: 17, delay: 12, rotate: 280 },
];

export default function FallingPetals() {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  return (
    <div
      className="absolute inset-0 z-1 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {petals.map((petal, index) => (
        <motion.img
          key={index}
          src="/ivory-petal.png"
          alt=""
          draggable={false}
          className="absolute top-[-50px] select-none"
          style={{
            left: petal.left,
            width: petal.size,
            height: "auto",
          }}
          initial={{
            y: "-5vh",
            x: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            x: [0, 25, -20, 30, -10, 0],
            rotate: petal.rotate,
            opacity: [0, 0.65, 0.7, 0.55, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
            x: {
              duration: petal.duration,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: petal.duration,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      ))}
    </div>
  );
}
