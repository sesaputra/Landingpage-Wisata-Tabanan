"use client";

import { motion } from "motion/react";

const experiences = [
  {
    number: "01",
    title: "Walk Through The Rice Fields",
    description:
      "Follow the quiet paths through Tabanan’s iconic rice fields and experience the rhythm of traditional Balinese agriculture.",
  },
  {
    number: "02",
    title: "Chase The Mountain Mist",
    description:
      "Head into the highlands of Bedugul, where cool air, mountain landscapes, and peaceful lakes create a different side of Bali.",
  },
  {
    number: "03",
    title: "Discover Balinese Culture",
    description:
      "Step into local villages and temples to discover traditions, ceremonies, and everyday life that continue to shape Tabanan.",
  },
  {
    number: "04",
    title: "Watch The Sun Set By The Sea",
    description:
      "End the day along Tabanan’s western coastline, where quiet beaches meet wide horizons and unforgettable sunsets.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience-section"
      className="w-full bg-primary px-8 py-24 md:px-16 lg:px-24"
    >
      {/* Top divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ transformOrigin: "left" }}
        className="mt-4 mb-8 border-t border-border"
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
          className="text-xs font-medium uppercase tracking-[0.15em] text-highlight"
        >
          Experience 03
        </motion.p>

        {/* Heading + Description */}
        <div className="mt-3 flex flex-col justify-between gap-8 md:flex-row md:items-start">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-4xl leading-tight text-border md:text-5xl"
          >
            EXPERIENCE{" "}
            <span className="italic text-border">
              TABANAN
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-sm text-sm leading-6 text-highlight md:text-right md:text-base"
          >
            Slow down and experience Tabanan through its landscapes,
            culture, traditions, and quiet moments away from the crowds.
          </motion.p>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "left" }}
          className="mt-8 mb-8 border-t border-border"
        />

        {/* Experience List */}
        <div className="mt-16 border-t border-border/40">
          {experiences.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid grid-cols-1 gap-4 border-b border-border/40 py-8 md:grid-cols-[80px_1fr_1fr] md:items-start md:gap-8"
            >
              {/* Number */}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12 + 0.1,
                  ease: "easeOut",
                }}
                className="text-xs font-medium tracking-[0.15em] text-highlight"
              >
                {item.number}
              </motion.span>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12 + 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-serif text-2xl leading-tight text-border transition-transform duration-500 group-hover:translate-x-2 md:text-3xl"
              >
                {item.title}
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12 + 0.25,
                  ease: "easeOut",
                }}
                className="max-w-md text-sm leading-6 text-highlight md:justify-self-end"
              >
                {item.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}