
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* =========================================
   COUNTDOWN
========================================= */

function WeddingCountdown() {
  const weddingDate = new Date("2026-12-03T06:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = weddingDate - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [weddingDate]);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 md:gap-5">
      {items.map((item) => (
        <div
          key={item.label}
          className="
            rounded-xl
            border border-[#C69A4E]/30
            bg-[#F9F0E3]/80
            py-4 px-1
          "
        >
          <p className="
            font-cormorant
            text-2xl md:text-4xl
            font-semibold
            text-[#762D40]
            tabular-nums
          ">
            {String(item.value).padStart(2, "0")}
          </p>

          <p className="
            mt-1
            text-[9px] md:text-xs
            tracking-widest
            uppercase
            text-[#A7834C]
          ">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}

/* =========================================
   MUSIC BUTTON
========================================= */

function MusicButton() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        console.error("Music playback failed:", error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/wedding-music.mp3"
        loop
        onEnded={() => setPlaying(false)}
        onPause={() => setPlaying(false)}
        onPlay={() => setPlaying(true)}
      />

      <button
        onClick={toggleMusic}
        aria-label={playing ? "Pause music" : "Play music"}
        className="
          fixed top-5 right-5
          z-50
          w-11 h-11
          rounded-full
          border border-[#C69A4E]/40
          bg-[#FFF9F0]/90
          text-[#762D40]
          shadow-md
          flex items-center justify-center
          hover:bg-[#762D40]
          hover:text-white
          transition-all
        "
      >
        <span className="text-xl">
          {playing ? "♫" : "♪"}
        </span>
      </button>
    </>
  );
}

/* =========================================
   MAIN HERO
========================================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#F9F0E3]
        text-[#762D40]
      "
    >

      {/* =================================
          FADED PALACE BACKGROUND
      ================================= */}

      <div className="
        absolute inset-0
        z-0
        pointer-events-none
        overflow-hidden
      ">

        <img
          src="/palace-outline.png"
          alt=""
          className="
            absolute inset-0
            w-full h-full
            object-cover
            object-center
            opacity-75
          "
        />

        {/* Ivory wash */}

        <div className="
          absolute inset-0
          bg-[#FFF9EF]/35
        " />

        {/* Bottom soft fade */}

        <div className="
          absolute inset-0
          bg-gradient-to-b
          from-[#FFF9EF]/10
          via-transparent
          to-[#F9F0E3]/50
        " />

      </div>

      {/* =================================
          FLORAL DECORATIONS
      ================================= */}

      <div className="
        absolute inset-0
        z-[2]
        pointer-events-none
        overflow-hidden
      ">

        {/* LEFT FLORAL */}

        <img
          src="/images/floral-left-top.png"
          alt=""
          className="
            absolute
            top-0 left-0
            w-[29%] md:w-[23%]
            max-w-[340px]
            h-auto
            object-contain
          "
        />

        {/* RIGHT FLORAL */}

        <img
          src="/images/floral-right-top.png"
          alt=""
          className="
            absolute
            top-0 right-0
            w-[32%] md:w-[27%]
            max-w-[390px]
            h-auto
            object-contain
          "
        />

      </div>

      {/* =================================
          MUSIC
      ================================= */}

      <MusicButton />

      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div className="
        relative z-10
        max-w-6xl
        mx-auto
        px-5
        pt-24 pb-16
        md:pt-32 md:pb-24
      ">

        {/* COUPLE NAMES */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >


          <h1 className="
            font-greatVibes
            text-[#762D40]
            text-7xl sm:text-8xl md:text-9xl
            mt-5
          ">
            Sagar
          </h1>

          <div className="
            flex items-center
            justify-center
            gap-5 my-1
          ">
            <span className="w-12 md:w-20 h-px bg-[#B68B3D]" />

            <span className="
              font-serif italic
              text-[#B68B3D]
              text-2xl md:text-3xl
            ">
              Weds
            </span>

            <span className="w-12 md:w-20 h-px bg-[#B68B3D]" />
          </div>

          <h1 className="
            font-greatVibes
            text-[#762D40]
            text-7xl sm:text-8xl md:text-9xl
          ">
            Sirija
          </h1>

          <p className="
            mt-4
            uppercase
            tracking-[0.35em]
            text-[#986F3B]
            text-[10px] md:text-sm
          ">
            Wedding Invitation
          </p>

        </motion.div>

        {/* =================================
            INVITATION MESSAGE
        ================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="
            max-w-2xl
            mx-auto
            mt-8
            text-center
          "
        >

          <p className="
            font-serif italic
            text-[#704C42]
            text-lg md:text-2xl
            leading-relaxed
          ">
            Together with our families,
            we invite you to celebrate our special day.
          </p>

        </motion.div>

        {/* =================================
            COUPLE IMAGE
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
            relative
            flex justify-center items-end
            mt-5 mb-7
          "
        >


        </motion.div>

        {/* =================================
            WEDDING DETAILS
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="
            max-w-2xl
            mx-auto
            rounded-[28px]
            border border-[#C69A4E]/40
            bg-[#FFF9F0]/85
            backdrop-blur-sm
            shadow-[0_15px_50px_rgba(118,45,64,0.08)]
            p-4 md:p-6
            text-center
          "
        >

          <p className="
            uppercase
            tracking-[0.35em]
            text-[#A7834C]
            text-xs md:text-sm
            mb-7
          ">
            Wedding Ceremony
          </p>

          {/* DATE */}

          <div className="
            text-[#B68B3D]
            text-2xl mb-3
          ">
            ♡
          </div>

          <h2 className="
            font-cormorant
            font-semibold
            text-[#762D40]
            text-3xl md:text-5xl
          ">
            Thursday
          </h2>

          <p className="
            mt-2
            tracking-[0.25em]
            text-[#986F3B]
            text-sm md:text-lg
          ">
            03 December 2026
          </p>

          {/* TIME */}

          <div className="
            mt-5
            font-serif italic
            text-[#765D4A]
            text-lg md:text-xl
          ">
            Muhurtham at 06:00 AM
          </div>

          {/* DIVIDER */}

          <div className="
            flex justify-center
            
          ">
            <img
              src="/gold-divider.png"
              alt=""
              className="
                w-48 md:w-60
                opacity-80
              "
            />
          </div>

        </motion.div>

        {/* =================================
            COUNTDOWN
        ================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="
            max-w-3xl
            mx-auto
            mt-12
            text-center
          "
        >

          <h2 className="
            font-greatVibes
            text-[#762D40]
            text-4xl md:text-5xl
            mb-6
          ">
            Counting down to forever
          </h2>

          <div className="
            rounded-[28px]
            border border-[#C69A4E]/40
            bg-[#FFF9F0]/85
            backdrop-blur-sm
            shadow-[0_15px_50px_rgba(118,45,64,0.08)]
            p-5 md:p-8
          ">
            <WeddingCountdown />
          </div>

        </motion.div>

        {/* =================================
            CLOSING MESSAGE
        ================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center mt-12"
        >

          <p className="
            font-serif italic
            text-[#765D4A]
            text-base md:text-lg
          ">
            Your presence and blessings mean the world to us.
          </p>

          <p className="
            font-greatVibes
            text-[#A7834C]
            text-4xl md:text-5xl
            mt-4
          ">
            With love, Sagar & Sirija
          </p>

        </motion.div>

      </div>

    </section>
  );
}
