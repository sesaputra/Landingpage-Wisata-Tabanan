"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Culture() {
  return (
    <section
      id="culture-section"
      className="w-full bg-tabanan-bg px-8 py-24 md:px-16 lg:px-24"
    >
      {/* Top Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "left" }}
        className="mt-4 mb-8 border-t border-black"
      />

      <div className="mx-auto max-w-6xl">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
        >
          Culture 04
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-3 font-serif text-4xl text-border md:text-5xl"
        >
          CULTURE
        </motion.h2>

        {/* Subtitle kiri + teks kanan */}
        <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          {/* Left Text */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-3 max-w-sm text-md leading-6"
          >
            More than a destination.
          </motion.p>

          {/* Right Text */}
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-sm text-md text-foreground"
          >
            Tabanan is a living culture.
          </motion.p>
        </div>

        {/* Gallery */}
        <div className="mt-12 flex flex-col gap-8">
          {/* Image 01 */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl"
          >
            <Image
              src="/images/puri.jpg"
              alt="Balinese culture in Tabanan"
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1200px"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />

            {/* Image Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.35,
                ease: "easeOut",
              }}
              className="absolute bottom-6 left-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/90">
                Living Traditions
              </p>
            </motion.div>
          </motion.div>

          {/* Image 02 */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl"
          >
            <Image
              src="/images/pasut.jpg"
              alt="Traditional Balinese architecture in Tabanan"
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1200px"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />

            {/* Image Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="absolute bottom-6 left-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-white/90">
                Life By The Coast
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}