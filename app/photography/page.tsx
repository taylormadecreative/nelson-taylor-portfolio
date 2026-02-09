"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FadeUp } from "@/components/AnimatedSection";

type Category = "All" | "Beauty" | "Fashion" | "Product" | "Hair" | "Events";

interface PhotoItem {
  src: string;
  alt: string;
  category: Category[];
  aspect: "portrait" | "landscape" | "square";
}

const photos: PhotoItem[] = [
  // Beauty
  { src: "/nelson-taylor-portfolio/images/beauty/areil-portrait-2.jpg", alt: "Areil Beauty Portrait", category: ["Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/holiday-beauty-closeup.jpg", alt: "Holiday Beauty Close-up", category: ["Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/gold-choker-closeup.jpg", alt: "Gold Choker Beauty", category: ["Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/starface-campaign.jpg", alt: "Starface Campaign", category: ["Beauty"], aspect: "square" },
  { src: "/nelson-taylor-portfolio/images/beauty/holiday-beauty-2.jpg", alt: "Holiday Beauty", category: ["Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/holiday-beauty-3.jpg", alt: "Holiday Beauty", category: ["Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/areil-portrait-1.jpg", alt: "Areil Beauty", category: ["Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/holiday-portrait-1.jpg", alt: "Holiday Portrait", category: ["Beauty", "Events"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/holiday-portrait-2.jpg", alt: "Holiday Portrait", category: ["Beauty", "Events"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/holiday-beauty-4.jpg", alt: "Holiday Beauty", category: ["Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/holiday-beauty-5.jpg", alt: "Holiday Beauty", category: ["Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/beauty/holiday-beauty-6.jpg", alt: "Holiday Beauty", category: ["Beauty"], aspect: "portrait" },

  // Fashion
  { src: "/nelson-taylor-portfolio/images/fashion/leather-jumpsuit.jpg", alt: "Leather Jumpsuit Editorial", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/dynamic-fashion.jpg", alt: "Dynamic Fashion", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/dc-pink-chair.jpg", alt: "DC Pink Chair", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/mariel-cowboy-hat.jpg", alt: "Mariel Cowboy Hat", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/hero/toni-guy-editorial.jpg", alt: "TONI&GUY Editorial", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/editorial-2.jpg", alt: "Fashion Editorial", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/dc-shoot-1.jpg", alt: "DC Shoot", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/dc-shoot-3.jpg", alt: "DC Shoot", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/mariel-1.jpg", alt: "Mariel Editorial", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/mariel-3.jpg", alt: "Mariel Editorial", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/mariel-5.jpg", alt: "Mariel Editorial", category: ["Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/fashion/toni-guy-1.jpg", alt: "TONI&GUY", category: ["Fashion"], aspect: "portrait" },

  // Product
  { src: "/nelson-taylor-portfolio/images/product/myx-hero.jpg", alt: "MYX Foundation", category: ["Product"], aspect: "square" },
  { src: "/nelson-taylor-portfolio/images/product/takis-fuego.jpg", alt: "Takis Fuego", category: ["Product"], aspect: "landscape" },
  { src: "/nelson-taylor-portfolio/images/product/jordan-iv.jpg", alt: "Jordan IV", category: ["Product"], aspect: "landscape" },
  { src: "/nelson-taylor-portfolio/images/product/nitro-pepsi.jpg", alt: "Nitro Pepsi", category: ["Product"], aspect: "square" },
  { src: "/nelson-taylor-portfolio/images/product/skinbetter-cleanser.jpg", alt: "Skinbetter Science", category: ["Product"], aspect: "square" },
  { src: "/nelson-taylor-portfolio/images/product/oribe-cracked-earth.jpg", alt: "Oribe", category: ["Product"], aspect: "square" },
  { src: "/nelson-taylor-portfolio/images/product/konjo-1.jpg", alt: "Konjo Beauty", category: ["Product", "Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/product/konjo-3.jpg", alt: "Konjo Beauty", category: ["Product", "Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/product/konjo-5.jpg", alt: "Konjo Beauty", category: ["Product"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/product/juices-botanics-1.jpg", alt: "Juices & Botanics", category: ["Product"], aspect: "square" },
  { src: "/nelson-taylor-portfolio/images/product/myx-foundations.jpg", alt: "MYX Foundations", category: ["Product"], aspect: "landscape" },

  // Hair
  { src: "/nelson-taylor-portfolio/images/hair/copper-locs-1.jpg", alt: "Copper Locs", category: ["Hair", "Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/hair/copper-locs-2.jpg", alt: "Copper Locs", category: ["Hair"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/hair/copper-locs-3.jpg", alt: "Copper Locs", category: ["Hair"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/hair/dark-hair-1.jpg", alt: "Dark Hair Editorial", category: ["Hair"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/hair/dark-hair-2.jpg", alt: "Dark Hair Editorial", category: ["Hair", "Beauty"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/hair/copper-locs-4.jpg", alt: "Copper Locs", category: ["Hair"], aspect: "portrait" },

  // Events
  { src: "/nelson-taylor-portfolio/images/events/event-1.jpg", alt: "Event Photography", category: ["Events"], aspect: "landscape" },
  { src: "/nelson-taylor-portfolio/images/events/event-2.jpg", alt: "Event Photography", category: ["Events"], aspect: "landscape" },
  { src: "/nelson-taylor-portfolio/images/events/toni-event-1.jpg", alt: "TONI&GUY Event", category: ["Events"], aspect: "landscape" },
  { src: "/nelson-taylor-portfolio/images/events/toni-event-2.jpg", alt: "TONI&GUY Event", category: ["Events"], aspect: "landscape" },
  { src: "/nelson-taylor-portfolio/images/events/kids-fashion.jpg", alt: "Kids Fashion", category: ["Events", "Fashion"], aspect: "portrait" },
  { src: "/nelson-taylor-portfolio/images/events/event-3.jpg", alt: "Event Photography", category: ["Events"], aspect: "landscape" },
];

const categories: Category[] = ["All", "Beauty", "Fashion", "Product", "Hair", "Events"];

export default function PhotographyPage() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered =
    active === "All"
      ? photos
      : photos.filter((p) => p.category.includes(active));

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 section-padding">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-[2px] bg-gold mb-8"
        />
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-sm uppercase tracking-[0.3em] text-gold"
          >
            Photography Portfolio
          </motion.p>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="heading-xl"
          >
            THROUGH
            <br />
            <span className="text-gradient-gold">THE LENS</span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="body-lg max-w-2xl"
        >
          Beauty, fashion, product, editorial, and event photography. Every
          frame tells a story, every detail is intentional.
        </motion.p>
      </section>

      {/* Filter Tabs */}
      <section className="section-padding pb-8 sticky top-[72px] z-30 bg-bg/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 font-display text-xs uppercase tracking-[0.15em] border transition-all duration-300 ${
                active === cat
                  ? "bg-gold text-bg border-gold"
                  : "border-white/[0.1] text-white/40 hover:text-gold hover:border-gold/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding pb-32">
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="mb-4 break-inside-avoid"
              >
                <div
                  className="relative overflow-hidden rounded-lg group cursor-pointer"
                  onClick={() => setLightbox(photo.src)}
                >
                  <div
                    className={`relative ${
                      photo.aspect === "portrait"
                        ? "aspect-[3/4]"
                        : photo.aspect === "landscape"
                        ? "aspect-[4/3]"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/40 transition-colors duration-300 flex items-end">
                    <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-display text-sm text-cream">
                        {photo.alt}
                      </p>
                      <p className="font-body text-xs text-gold/60">
                        {photo.category.join(" / ")}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-2xl flex items-center justify-center p-8 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
            >
              <Image
                src={lightbox}
                alt="Lightbox view"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-8 right-8 font-display text-sm text-white/40 hover:text-gold transition-colors"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section-padding py-32 text-center border-t border-white/[0.06]">
        <FadeUp>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-8">
            Like what you see?
          </p>
          <h2 className="heading-lg mb-10">
            Let&apos;s{" "}
            <span className="text-gradient-gold">Shoot</span>
          </h2>
          <a
            href="mailto:taylormademd@gmail.com"
            className="inline-block font-display text-sm uppercase tracking-[0.2em] text-bg bg-gold px-12 py-4 hover:bg-gold-light transition-all duration-300"
          >
            Book a Session
          </a>
        </FadeUp>
      </section>
    </>
  );
}
