"use client";

import Image from "next/image";
import { motion } from "motion/react";

const destinations = [
  {
    name: "Jatiluwih",
    category: "Rice terraces",
    badge: "UNESCO World Heritage",
    image: "/images/bg-1.jpg",
  },
  {
    name: "Tanah Lot",
    category: "Coastal temple",
    badge: "UNESCO World Heritage",
    image: "/images/tanah lot.jpeg",
  },
  {
    name: "Bedugul",
    category: "Mountain retreat",
    badge: "Natural landscape",
    image: "/images/bedugul-1.jpg",
  },
];

export default function Destination() {
  return (
    <section
      id="destination-section"
      className="w-full bg-secondary px-8 py-24 md:px-16 lg:px-24"
    >
      <div className="mt-4 mb-8 border-t border-muted" />

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
          Destination 02
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-3 font-serif text-4xl text-border md:text-5xl"
        >
          EXPLORE{" "}
          <span className="italic text-foreground">
            tabanan
          </span>
        </motion.h2>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="mt-3 flex flex-col justify-between gap-6 md:flex-row"
        >
          <p className="mt-3 max-w-sm text-md leading-6">
            Beyond the famous beaches lies Tabanan, a tranquil haven of
            endless rice terraces, sacred temples, and untamed natural beauty.
          </p>
        </motion.div>

        {/* Destinations */}
        <div className="mt-16 flex flex-col gap-20">

          {destinations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-start gap-8 md:flex-row md:items-center md:gap-16"
            >
              {/* Destination Information */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15 + 0.1,
                  ease: "easeOut",
                }}
                className="w-full max-w-[200px] shrink-0"
              >
                <h3 className="border-b border-muted pb-2 text-lg font-semibold uppercase tracking-[0.05em] text-foreground">
                  {item.name}
                </h3>

                <p className="mt-2 text-md text-muted">
                  {item.category}
                </p>

                <p className="mt-1 text-md text-foreground">
                  {item.badge}
                </p>
              </motion.div>

              {/* Destination Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 40,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.15 + 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-2xl"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="mt-16 flex justify-center"
        >
          <button
            type="button"
            className="rounded-full border border-muted px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-white hover:scale-[1.03]"
          >
            More Destination
            <span aria-hidden="true" className="ml-2">
              →
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}