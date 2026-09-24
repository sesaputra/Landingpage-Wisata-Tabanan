"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about-section"
      className="w-full bg-tabanan-bg px-8 py-24 md:px-16 lg:px-24"
    >
      <div className="mt-4 mb-8 border-t border-black" />

      <div className="mx-auto max-w-6xl">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
        >
          About 01
        </motion.p>

        <div className="mt-4 mb-4 border-t border-black" />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-3 font-serif text-4xl text-foreground md:text-5xl"
        >
          THE SOUL OF{" "}
          <span className="text-muted">TABANAN</span>
        </motion.h2>

        {/* Description */}
        <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row">

          {/* Left Text */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="max-w-xs text-sm leading-relaxed text-foreground/80 md:text-base"
          >
            Beyond the famous beaches,
            <br />
            there is another Bali waiting
            <br />
            to be discovered.
          </motion.p>

          {/* Right Text */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="max-w-xs text-sm leading-relaxed text-foreground/80 md:text-right md:text-base"
          >
            Rice fields.
            <br />
            Sacred temples.
            <br />
            Ancient forests.
            <br />
            Quiet villages.
          </motion.p>
        </div>

        {/* Images */}
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">

          {/* Bedugul */}
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/bedugul-1.jpg"
                alt="Bedugul, Tabanan"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <figcaption className="text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
              Bedugul
            </figcaption>
          </motion.figure>

          {/* Rice Terraces */}
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/bg-1.jpg"
                alt="Rice terraces in Tabanan"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <figcaption className="text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
              Rice Terraces
            </figcaption>
          </motion.figure>

          {/* Pantai */}
          <motion.figure
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4 md:col-span-2 md:mx-auto md:w-full md:max-w-sm"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/images/pasut.jpg"
                alt="Pantai di Tabanan"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>

            <figcaption className="text-xs font-medium uppercase tracking-[0.1em] text-foreground/70">
              BEACH
            </figcaption>
          </motion.figure>

        </div>
      </div>
    </section>
  );
}