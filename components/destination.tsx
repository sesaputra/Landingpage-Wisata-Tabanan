"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const destinations = [
  {
    name: "Jatiluwih",
    category: "Rice terraces",
    badge: "UNESCO World Heritage",
    image: "/images/bg-1.jpg",

    description:
      "Jatiluwih is one of Tabanan's most remarkable landscapes, where traditional rice terraces stretch across the foothills of Mount Batukaru. The landscape offers a quieter side of Bali, shaped by nature, agriculture, and generations of local tradition.",

    location: "Penebel, Tabanan",
    bestTime: "May — September",

    latitude: -8.3617,
    longitude: 115.1153,

    highlights: [
      "Expansive rice terraces",
      "Views of Mount Batukaru",
      "Traditional Subak irrigation system",
    ],
  },

  {
    name: "Tanah Lot",
    category: "Coastal temple",
    badge: "Cultural landmark",
    image: "/images/tanah lot.jpeg",

    description:
      "Tanah Lot is one of Bali's most recognizable coastal landscapes, where a sacred temple stands dramatically above the ocean. The combination of sea, cliffs, and Balinese architecture creates a distinctive atmosphere, especially around sunset.",

    location: "Beraban, Tabanan",
    bestTime: "April — October",

    latitude: -8.6175,
    longitude: 115.0876,

    highlights: [
      "Oceanfront temple",
      "Dramatic coastal landscape",
      "Sunset views",
    ],
  },

  {
    name: "Bedugul",
    category: "Mountain retreat",
    badge: "Natural landscape",
    image: "/images/bedugul-1.jpg",

    description:
      "Bedugul is a cool mountain destination surrounded by forests, lakes, gardens, and highland landscapes. Its calm atmosphere makes it a refreshing contrast to Bali's coastal areas.",

    location: "Baturiti, Tabanan",
    bestTime: "June — September",

    latitude: -8.2786,
    longitude: 115.16,

    highlights: [
      "Mountain scenery",
      "Lake Beratan",
      "Cool highland atmosphere",
    ],
  },
];

type Destination = (typeof destinations)[number];

export default function Destination() {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  /*
   * Prevent body from scrolling while modal is open.
   */
  useEffect(() => {
    if (!selectedDestination) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedDestination]);

  /*
   * Close modal with Escape key.
   */
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedDestination(null);
      }
    }

    if (selectedDestination) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedDestination]);

  return (
    <>
      {/* =====================================================
          DESTINATION SECTION
      ====================================================== */}
      <section
        id="destination-section"
        className="w-full bg-secondary px-8 py-24 md:px-16 lg:px-24"
      >
        <div className="mt-4 mb-8 border-t border-muted" />

        <div className="mx-auto max-w-6xl">
          {/* =================================================
              SECTION LABEL
          ================================================== */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-xs font-medium uppercase tracking-[0.15em] text-muted"
          >
            Destination 02
          </motion.p>

          {/* =================================================
              HEADING
          ================================================== */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
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

          {/* =================================================
              DESCRIPTION
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="mt-3 flex flex-col justify-between gap-6 md:flex-row"
          >
            <p className="mt-3 max-w-sm text-md leading-6 text-foreground">
              Beyond the famous beaches lies Tabanan, a tranquil
              haven of endless rice terraces, sacred temples, and
              untamed natural beauty.
            </p>
          </motion.div>

          {/* =================================================
              DESTINATIONS
          ================================================== */}
          <div className="mt-16 flex flex-col gap-20">
            {destinations.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
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
                {/* =========================================
                    DESTINATION INFORMATION
                ========================================== */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
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

                {/* =========================================
                    DESTINATION IMAGE
                ========================================== */}
                <motion.button
                  type="button"
                  onClick={() => setSelectedDestination(item)}
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
                  whileHover="hover"
                  whileTap={{
                    scale: 0.985,
                  }}
                  className="group relative aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-2xl text-left"
                  aria-label={`Explore ${item.name}`}
                >
                  {/* IMAGE */}
                  <Image
                    src={item.image}
                    alt={`${item.name} - ${item.category}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 700px"
                  />

                  {/* DARK OVERLAY */}
                  <motion.div
                    variants={{
                      hover: {
                        opacity: 1,
                      },
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="absolute inset-0 bg-black/40"
                  />

                  {/* CENTER CONTENT */}
                  <motion.div
                    variants={{
                      hover: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="flex items-center gap-3 rounded-full border border-white/30 bg-black/30 px-5 py-3 backdrop-blur-md">
                      <span className="text-xs font-medium uppercase tracking-[0.12em] text-white">
                        Explore destination
                      </span>

                      <span className="text-white">
                        →
                      </span>
                    </div>
                  </motion.div>

                  {/* MOBILE LABEL */}
                  <div className="absolute bottom-5 left-5 md:hidden">
                    <div className="rounded-full border border-white/30 bg-black/40 px-4 py-2 backdrop-blur-md">
                      <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-white">
                        View destination →
                      </span>
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* =================================================
              MORE DESTINATION BUTTON
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
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
              className="rounded-full border border-muted px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-foreground hover:text-white"
            >
              More Destination

              <span
                aria-hidden="true"
                className="ml-2"
              >
                →
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          DESTINATION DETAIL MODAL
      ====================================================== */}
      <AnimatePresence>
        {selectedDestination && (
          <motion.div
            key="destination-modal"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm md:p-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedDestination(null);
              }
            }}
          >
            {/* =================================================
                MODAL CONTAINER
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-secondary shadow-2xl"
            >
              {/* =================================================
                  CLOSE BUTTON
              ================================================== */}
              <button
                type="button"
                onClick={() => setSelectedDestination(null)}
                aria-label="Close destination details"
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black/60"
              >
                <span className="text-xl leading-none">
                  ×
                </span>
              </button>

              {/* =================================================
                  MODAL CONTENT
              ================================================== */}
              <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                {/* =============================================
                    IMAGE
                ============================================== */}
                <div className="relative aspect-[4/3] min-h-[280px] md:aspect-auto md:min-h-[650px]">
                  <Image
                    src={selectedDestination.image}
                    alt={selectedDestination.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                  {/* IMAGE LABEL */}
                  <div className="absolute bottom-6 left-6">
                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                      Destination
                    </p>

                    <p className="mt-1 font-serif text-3xl text-white md:text-4xl">
                      {selectedDestination.name}
                    </p>
                  </div>
                </div>

                {/* =============================================
                    INFORMATION
                ============================================== */}
                <div className="flex flex-col p-7 md:p-10">
                  {/* CATEGORY */}
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                    {selectedDestination.category}
                  </p>

                  {/* TITLE */}
                  <h3 className="mt-3 font-serif text-4xl leading-tight text-border md:text-5xl">
                    {selectedDestination.name}
                  </h3>

                  {/* BADGE */}
                  <div className="mt-5">
                    <span className="inline-flex rounded-full border border-muted px-4 py-2 text-[10px] font-medium uppercase tracking-[0.12em] text-foreground">
                      {selectedDestination.badge}
                    </span>
                  </div>

                  {/* DIVIDER */}
                  <div className="my-7 border-t border-muted" />

                  {/* DESCRIPTION */}
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
                      About the destination
                    </p>

                    <p className="mt-3 text-sm leading-7 text-foreground/80 md:text-base">
                      {selectedDestination.description}
                    </p>
                  </div>

                  {/* LOCATION + BEST TIME */}
                  <div className="mt-8 grid grid-cols-2 gap-6 border-y border-muted py-6">
                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
                        Location
                      </p>

                      <p className="mt-2 text-sm text-foreground">
                        {selectedDestination.location}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
                        Best time
                      </p>

                      <p className="mt-2 text-sm text-foreground">
                        {selectedDestination.bestTime}
                      </p>
                    </div>
                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="mt-7">
                    <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted">
                      Highlights
                    </p>

                    <div className="mt-4 flex flex-col gap-3">
                      {selectedDestination.highlights.map(
                        (highlight, index) => (
                          <motion.div
                            key={highlight}
                            initial={{
                              opacity: 0,
                              x: -10,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              duration: 0.4,
                              delay: 0.15 + index * 0.08,
                            }}
                            className="flex items-start gap-3"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />

                            <p className="text-sm leading-6 text-foreground/80">
                              {highlight}
                            </p>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* =================================================
                      ACTION
                  ================================================== */}
                  <div className="mt-auto pt-8">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDestination(null);

                        setTimeout(() => {
                          document
                            .getElementById("explore-section")
                            ?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }, 200);
                      }}
                      className="group inline-flex items-center gap-3 rounded-full border border-muted px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-all duration-300 hover:scale-[1.03] hover:bg-foreground hover:text-white"
                    >
                      Explore on Map

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}