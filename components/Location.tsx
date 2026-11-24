
"use client";

import { motion } from "framer-motion";

export default function Location() {
  return (
    <section
      id="venue"
      className="
        relative isolate
        overflow-hidden
        bg-[#F9F0E3]
        px-5
        py-24 md:py-32
        text-[#762D40]
      "
    >
      {/* Palace Background */}

      <div className="absolute inset-0 -z-10 pointer-events-none">

        <img
          src="/palace-outline.png"
          alt=""
          className="
            h-full w-full
            object-cover object-center
            opacity-[0.20]
          "
        />

        <div className="
          absolute inset-0
          bg-[#FFF9EF]/65
        " />

      </div>

      {/* Main Content */}

      <div className="
        mx-auto
        max-w-4xl
        text-center
      ">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <p className="
            uppercase
            tracking-[0.35em]
            text-[#A7834C]
            text-xs md:text-sm
            mb-5
          ">
            Celebrate With Us
          </p>

          <h2 className="
            font-greatVibes
            text-[#762D40]
            text-6xl md:text-8xl
          ">
            The Venue
          </h2>

        </motion.div>

        {/* Venue Card */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="
            relative
            mx-auto
            mt-12 md:mt-16
            max-w-2xl
            rounded-[28px]
            border border-[#C69A4E]/40
            bg-[#FFF9F0]/85
            backdrop-blur-sm
            px-6 py-10
            md:px-14 md:py-14
            shadow-[0_15px_50px_rgba(118,45,64,0.08)]
          "
        >

          {/* Venue Name */}

          <p className="
            uppercase
            tracking-[0.3em]
            text-[#A7834C]
            text-xs
            mb-5
          ">
            Wedding Venue
          </p>

          <h3 className="
            font-cormorant
            font-semibold
            text-[#762D40]
            text-4xl md:text-6xl
            leading-tight
          ">
            Raja Rani
            <br />
            Function Hall
          </h3>

          {/* Address */}

          <div className="mt-8">

            <div className="
              mx-auto
              mb-5
              h-px
              w-20
              bg-[#C69A4E]/60
            " />

            <p className="
              uppercase
              tracking-[0.25em]
              text-[#A7834C]
              text-xs
              mb-4
            ">
              Venue Address
            </p>

            <p className="
              font-serif
              text-[#765D4A]
              text-base md:text-lg
              leading-8
            ">
              3rd Floor, Bommidi Elite Towers
              <br />
              Buttayagudam Road
              <br />
              Jangareddygudem
              <br />
              Andhra Pradesh
            </p>

            <p className="
              mt-3
              text-sm
              tracking-wider
              text-[#A7834C]
            ">
              48M3+CVR
            </p>

          </div>

          {/* Directions */}

          <a
            href="https://maps.app.goo.gl/4yAMgcSTDsGXy7YXA"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              mt-9
              rounded-full
              border border-[#C69A4E]
              bg-[#762D40]
              px-8 py-4
              text-white
              text-xs md:text-sm
              uppercase
              tracking-[0.2em]
              shadow-lg
              transition-all duration-300
              hover:bg-[#8D3B50]
              hover:-translate-y-1
            "
          >
            <span className="text-lg">📍</span>
            Get Directions
            <span>→</span>
          </a>

        </motion.div>

      </div>

    </section>
  );
}
