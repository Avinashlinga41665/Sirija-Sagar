
"use client";

import { motion, AnimatePresence } from "framer-motion";

interface IntroProps {
  show: boolean;
  onOpen: () => void;
}

/* ================= FLOWER SVG ================= */

function Flower({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={i}
          cx="60"
          cy="30"
          rx="14"
          ry="29"
          fill="#FFFDF5"
          stroke="#D4B77D"
          strokeWidth="1.2"
          transform={`rotate(${i * 45} 60 60)`}
        />
      ))}

      <circle cx="60" cy="60" r="12" fill="#D5A72F" />
      <circle cx="60" cy="60" r="5" fill="#F8DE8A" />
    </svg>
  );
}

/* ================= LEAVES ================= */

function Leaves({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 180"
      className={className}
      fill="none"
    >
      <path
        d="M10 170 Q100 100 190 10"
        stroke="#75835A"
        strokeWidth="3"
      />

      <path
        d="M50 135 Q5 85 18 78 Q65 82 50 135Z"
        fill="#87966B"
      />

      <path
        d="M85 105 Q65 55 80 48 Q120 72 85 105Z"
        fill="#A1A879"
      />

      <path
        d="M125 65 Q115 20 135 20 Q160 50 125 65Z"
        fill="#829365"
      />

      <path
        d="M145 48 Q180 5 193 25 Q185 65 145 48Z"
        fill="#A4AD7A"
      />

      <path
        d="M30 150 Q5 120 15 112 Q50 120 30 150Z"
        fill="#A3AD7B"
      />
    </svg>
  );
}

/* ================= FLORAL CORNERS ================= */


/* ================= PALACE BACKGROUND ================= */

function PalaceBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">

      {/* Base ivory background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 48% 40%, #FFFDF7 0%, #F9F0E3 65%, #EDE0CA 100%)",
        }}
      />
{/* TOP MONOGRAM */}
<motion.div
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="
    absolute
    top-[9%] md:top-[10%]
    left-1/2 -translate-x-1/2
    text-center
    z-20
  "
>
  <p className="font-serif italic text-3xl md:text-4xl text-[#A7834C]">
    S <span className="text-xl">&</span> S
  </p>

  <p className="text-[#B68B3D] text-xs mt-1 tracking-[0.3em]">
    ── ❦ ──
  </p>
</motion.div>
      {/* Main palace arch */}
      <div className="absolute inset-x-[3%] top-[-25%] h-[95%]">
        <div
          className="absolute inset-0 rounded-t-[50%] border-[9px] border-[#C7A675]/25"
        />

        <div
          className="absolute inset-[12px] rounded-t-[50%] border-[2px] border-[#C7A675]/30"
        />

        <div
          className="absolute inset-[25px] rounded-t-[50%] border border-[#D9C49D]/30"
        />
      </div>

      {/* Left classical pillar */}
      <div className="absolute left-[2%] top-[25%] bottom-[4%] w-8 md:w-14">

        <div className="absolute left-[25%] top-0 bottom-0 w-[55%]
          bg-gradient-to-r from-[#D4BC94]/40 via-[#FFF8EA]/90 to-[#C5A779]/40"
        />

        <div className="absolute top-0 left-0 w-full h-4 bg-[#C6A778]/40 rounded-sm" />
        <div className="absolute bottom-0 left-0 w-full h-4 bg-[#C6A778]/40 rounded-sm" />

      </div>

      {/* Right classical pillar */}
      <div className="absolute right-[2%] top-[25%] bottom-[4%] w-8 md:w-14">

        <div className="absolute left-[25%] top-0 bottom-0 w-[55%]
          bg-gradient-to-r from-[#D4BC94]/40 via-[#FFF8EA]/90 to-[#C5A779]/40"
        />

        <div className="absolute top-0 left-0 w-full h-4 bg-[#C6A778]/40 rounded-sm" />
        <div className="absolute bottom-0 left-0 w-full h-4 bg-[#C6A778]/40 rounded-sm" />

      </div>

      {/* Soft distant landscape */}
      <div className="absolute bottom-[12%] left-[10%] right-[10%] h-[16%] opacity-30">

        <div className="absolute bottom-0 left-0 w-full h-12 rounded-t-[50%] bg-[#A4AE8C]/30" />

        <div className="absolute bottom-4 left-[20%] w-[65%] h-12 rounded-t-full bg-[#C0C1A8]/30" />

      </div>

    </div>
  );
}

/* ================= MAIN INTRO ================= */

export default function Intro({ show, onOpen }: IntroProps) {

  return (
    <AnimatePresence mode="wait" initial={false}>

      {show && (

        <motion.div
          className="fixed inset-0 z-[9998] overflow-hidden bg-[#F9F0E3]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >

          {/* BACKGROUND */}
          <PalaceBackground />

          {/* SUBTLE VINTAGE TEXTURE */}
          <div
            className="absolute inset-0 z-[3] pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(#A98B5D 0.6px, transparent 0.6px)",
              backgroundSize: "7px 7px",
            }}
          />

          {/* CONTENT */}
          <div className="
            absolute inset-0 z-10
            flex items-center justify-center
            text-center
          ">

            {/* COUPLE NAMES */}
            <motion.div
              className="
                absolute
                left-[5%] right-[5%]
                md:left-[10%] md:right-[10%]
                top-[27%] md:top-[28%]
                z-20
                md:translate-x-[-4%]
              "
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >

              <h1 className="
                font-greatVibes
                text-6xl sm:text-7xl md:text-8xl lg:text-9xl
                text-[#762D40]
              ">
                Sagar
              </h1>

              {/* WEDS */}
              <div className="flex items-center justify-center gap-4 my-1">

                <span className="w-10 md:w-16 h-px bg-[#B68B3D]" />

                <p className="
                  font-serif italic
                  text-xl md:text-3xl
                  text-[#B68B3D]
                ">
                  Weds
                </p>

                <span className="w-10 md:w-16 h-px bg-[#B68B3D]" />

              </div>

              <h1 className="
                font-greatVibes
                text-6xl sm:text-7xl md:text-8xl lg:text-9xl
                text-[#762D40]
              ">
                Sirija
              </h1>

              {/* SUBTITLE */}
              <p className="
                mt-5
                text-[10px] md:text-sm
                tracking-[0.35em]
                text-[#762D40]
              ">
                WEDDING INVITATION
              </p>

            </motion.div>

            {/* COUPLE IMAGE */}
            <motion.img
              src="/sagar-sirija-couple.png"
              alt="Sagar and Sirija"
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 1.3,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="
                absolute
                bottom-[-2%]
                right-[-7%]
                w-[65%]
                sm:w-[58%]
                md:w-[46%]
                lg:w-[43%]
                max-w-[580px]
                h-[58%]
                md:h-[78%]
                object-contain
                object-bottom
                z-10
                pointer-events-none
              "
            />

            {/* OPEN INVITATION */}
            <motion.button
              onClick={onOpen}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(118,45,64,0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              className="
  absolute
  bottom-[28%] md:bottom-[8%]
  left-[32%] md:left-1/2
  -translate-x-1/2
  z-30
  px-8 md:px-11
  py-3
  rounded-full
  bg-[#762D40]
  border-2 border-[#C69A4E]
  text-white
  font-serif italic
  text-base md:text-lg
  whitespace-nowrap
  shadow-lg
  transition-colors
  hover:bg-[#8B394E]
"
            >
              Open Invitation &nbsp; →
            </motion.button>

          </div>

          {/* SUBTLE OPENING PANELS */}
          <div className="hidden md:block pointer-events-none">
            <motion.div
              className="absolute top-0 left-0 w-1/2 h-full z-20 border-r border-[#B68B3D]/10"
              initial={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 1.1,
                ease: [0.7, 0, 0.3, 1],
              }}
            />

            <motion.div
              className="absolute top-0 right-0 w-1/2 h-full z-20 border-l border-[#B68B3D]/10"
              initial={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 1.1,
                ease: [0.7, 0, 0.3, 1],
              }}
            />
          </div>

        </motion.div>
      )}

    </AnimatePresence>
  );
}
