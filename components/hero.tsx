"use client";

import Weather from "@/components/weather";
import Image from "next/image";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image
          src="/images/bg-1.jpg"
          alt="Tabanan, Bali landscape"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
      </motion.div>

      {/* Hero Panel */}
      <div className="absolute top-0 right-0 bottom-10 left-0 overflow-hidden rounded-none md:right-15 md:bottom-25 md:left-15 md:rounded-xl">
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(0,0,0,0.35),transparent_60%)]" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-center pl-10 pr-8 md:pl-40 md:pr-16">
          
          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/90"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            Tabanan - Bali Indonesia
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.03em] text-white md:text-6xl lg:text-7xl"
          >
            WHERE <br />
            BALI <br />
            BREATHES.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.9,
              ease: "easeOut",
            }}
            className="mt-6 max-w-sm text-sm text-white/80 md:text-base"
          >
            Discover a quieter side of Bali,
            <br className="hidden md:block" />
            where mountains meet rice fields and traditions live on.
          </motion.p>

          {/* Button */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.1,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Explore Tabanan
            <span aria-hidden="true">→</span>
          </motion.button>
        </div>

        <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    delay: 1.3,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="absolute bottom-8 right-8 md:bottom-16 lg:bottom-24"
>
  <Weather
  latitude={-8.5413}
  longitude={115.150475}
  locationName="Tabanan"
/>
</motion.div>
      </div>
    </section>
  );
}