"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Weather from "@/components/weather";

const mapLocations = [
  {
    number: "01",
    name: "Jatiluwih",
    latitude: -8.3617,
    longitude: 115.1153,
    description:
      "Rice terraces and peaceful countryside surrounded by the natural landscape of Tabanan.",
    mapUrl:
      "https://www.google.com/maps?q=Jatiluwih%20Rice%20Terraces%2C%20Tabanan%2C%20Bali&output=embed",
  },
  {
    number: "02",
    name: "Batukaru",
    latitude: -8.3904,
    longitude: 115.1112,
    description:
      "Mountain landscapes, forest, and peaceful surroundings at the heart of Tabanan.",
    mapUrl:
      "https://www.google.com/maps?q=Mount%20Batukaru%2C%20Tabanan%2C%20Bali&output=embed",
  },
  {
    number: "03",
    name: "Tanah Lot",
    latitude: -8.6175,
    longitude: 115.0876,
    description:
      "A dramatic coastal landscape where a Balinese temple meets the Indian Ocean.",
    mapUrl:
      "https://www.google.com/maps?q=Tanah%20Lot%2C%20Tabanan%2C%20Bali&output=embed",
  },
  {
    number: "04",
    name: "Bedugul",
    latitude: -8.2786,
    longitude: 115.16,
    description:
      "Cool highlands, peaceful lakes, and mountain scenery surrounded by nature.",
    mapUrl:
      "https://www.google.com/maps?q=Bedugul%2C%20Tabanan%2C%20Bali&output=embed",
  },
  {
    number: "05",
    name: "Kerambitan",
    latitude: -8.5451,
    longitude: 115.0818,
    description:
      "Traditional villages, cultural heritage, and everyday Balinese life in Tabanan.",
    mapUrl:
      "https://www.google.com/maps?q=Kerambitan%2C%20Tabanan%2C%20Bali&output=embed",
  },
];

export default function ExploreMap() {
  const [activeLocation, setActiveLocation] = useState(mapLocations[0]);

  const handleLocationChange = (
    location: (typeof mapLocations)[number],
  ) => {
    setActiveLocation(location);
  };

  return (
    <section
      id="explore-section"
      className="w-full bg-primary px-8 py-24 md:px-16 lg:px-24"
    >
      {/* =====================================================
          TOP DIVIDER
      ====================================================== */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          transformOrigin: "left",
        }}
        className="mt-4 mb-8 border-t border-border/40"
      />

      <div className="mx-auto max-w-6xl">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}
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
          className="text-xs font-medium uppercase tracking-[0.15em] text-highlight"
        >
          Explore 05
        </motion.p>

        <div className="mt-3 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          {/* LEFT CONTENT */}
          <div>
            <motion.h2
              initial={{
                opacity: 0,
                y: 40,
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
              className="font-serif text-4xl leading-tight text-highlight md:text-5xl"
            >
              EXPLORE{" "}
              <span className="italic text-border">
                MAP
              </span>
            </motion.h2>

            <motion.p
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
                amount: 0.4,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-3 max-w-sm text-sm leading-6 text-highlight md:text-base"
            >
              Explore the places that shape the landscape, culture,
              and character of Tabanan.
            </motion.p>
          </div>

          {/* RIGHT CONTENT */}
          <motion.p
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-sm text-sm font-medium uppercase tracking-[0.05em] text-highlight/80 md:text-right"
          >
            Where will you go next?
          </motion.p>
        </div>

        {/* =====================================================
            SECOND DIVIDER
        ====================================================== */}
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "left",
          }}
          className="mt-8 border-t border-border/40"
        />

        {/* =====================================================
            MAP
        ====================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-12 overflow-hidden rounded-2xl"
        >
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-black/10">
            {/* GOOGLE MAP */}
            <motion.iframe
              key={`map-${activeLocation.name}`}
              initial={{
                opacity: 0,
                scale: 1.02,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              src={activeLocation.mapUrl}
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${activeLocation.name}`}
            />

            {/* SUBTLE OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-black/5" />

            {/* =================================================
                ACTIVE LOCATION BADGE
            ================================================== */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`location-${activeLocation.name}`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-black/55 px-4 py-2 backdrop-blur-md"
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">
                  Exploring
                </p>

                <p className="mt-0.5 text-sm font-medium text-white">
                  {activeLocation.name}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* =====================================================
            LOCATION SELECTOR
        ====================================================== */}
        <div className="mt-8 border-t border-border/40">
          {mapLocations.map((location, index) => {
            const isActive =
              activeLocation.name === location.name;

            return (
              <motion.button
                key={location.name}
                type="button"
                onClick={() => handleLocationChange(location)}
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group grid w-full grid-cols-[55px_1fr_auto] items-center gap-4 border-b border-border/40 py-6 text-left transition-all duration-300 md:grid-cols-[80px_1fr_1fr_auto] md:gap-8 ${
                  isActive
                    ? "bg-white/5"
                    : "hover:bg-white/[0.03]"
                }`}
              >
                {/* NUMBER */}
                <span
                  className={`text-xs font-medium tracking-[0.15em] transition-colors duration-300 ${
                    isActive
                      ? "text-border"
                      : "text-highlight/60"
                  }`}
                >
                  {location.number}
                </span>

                {/* NAME */}
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{
                        scale: isActive ? 1 : 0.7,
                        opacity: isActive ? 1 : 0,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-border"
                    />

                    <span
                      className={`font-serif text-xl leading-tight transition-all duration-300 md:text-2xl ${
                        isActive
                          ? "translate-x-1 text-border"
                          : "text-highlight group-hover:translate-x-1 group-hover:text-border"
                      }`}
                    >
                      {location.name}
                    </span>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p
                  className={`hidden max-w-xs text-sm leading-6 transition-colors duration-300 md:block ${
                    isActive
                      ? "text-highlight"
                      : "text-highlight/60"
                  }`}
                >
                  {location.description}
                </p>

                {/* ARROW */}
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                    isActive
                      ? "border-border bg-border text-primary"
                      : "border-border/40 text-highlight/60 group-hover:border-border group-hover:text-border"
                  }`}
                >
                  <span className="text-sm">
                    →
                  </span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* =====================================================
            SELECTED DESTINATION + WEATHER
        ====================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`info-${activeLocation.name}`}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-8 grid gap-8 border-b border-border/40 pb-8 md:grid-cols-[1fr_auto]"
          >
            {/* DESTINATION INFO */}
            <div className="max-w-xl">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-highlight/60">
                Selected destination
              </p>

              <p className="mt-1 font-serif text-2xl text-border md:text-3xl">
                {activeLocation.name}
              </p>

              <p className="mt-3 max-w-md text-sm leading-6 text-highlight/70">
                {activeLocation.description}
              </p>
            </div>

            {/* WEATHER */}
            <div className="min-w-[220px] md:text-right">
              <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-highlight/60">
                Weather today
              </p>

              <div className="mt-3 md:flex md:justify-end">
                <Weather
                  latitude={activeLocation.latitude}
                  longitude={activeLocation.longitude}
                  locationName={activeLocation.name}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}