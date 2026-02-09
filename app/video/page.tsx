"use client";

import { motion } from "framer-motion";
import {
  FadeUp,
  SlideRight,
} from "@/components/AnimatedSection";

const videoProjects = [
  {
    title: "It's a Secret Med Spa Sale",
    description:
      "Promotional video campaign for Secret Med Spa. Drove 45% increase in organic engagement through compelling visual content and strategic storytelling.",
    embedId: "5HZQp4vuAyI",
    tags: ["Medical Spa", "Marketing", "Promo"],
  },
  {
    title: "La Supreme Dallas – Grand Opening",
    description:
      "Event coverage and brand video for the La Supreme Dallas grand opening. Capturing the energy and luxury of a high-profile launch.",
    embedId: "dN1JEDfNi0k",
    tags: ["Event", "Brand Video", "Lifestyle"],
  },
  {
    title: "La Supreme Hair Ad",
    description:
      "Product advertisement for La Supreme hair brand. Fashion-forward visuals that showcase product quality and brand identity.",
    embedId: "3RykdxFdTKk",
    tags: ["Product Ad", "Beauty", "Hair"],
  },
  {
    title: "Marviano Cosmetics",
    description:
      "Brand video for Marviano Cosmetics. Elevated beauty content blending product showcase with aspirational lifestyle imagery.",
    embedId: "P9gSy5sHEoc",
    tags: ["Beauty", "Cosmetics", "Brand"],
  },
  {
    title: "Lit AI Commercial Ad",
    description:
      "AI-powered commercial advertisement pushing the boundaries of creative content production with cutting-edge visual technology.",
    embedId: "9MM0krPIJtE",
    tags: ["AI Content", "Commercial", "Innovation"],
  },
  {
    title: "TONI & GUY Academy",
    description:
      "Visual content for TONI & GUY Academy. Fashion-forward hair and beauty videos that drove 40% increased audience engagement across digital platforms.",
    embedId: "ai6gyONaabA",
    tags: ["Beauty", "Education", "Hair"],
  },
  {
    title: "Juices & Botanics",
    description:
      "Brand campaign video for Juices & Botanics. Clean, organic visuals that communicate wellness and natural beauty.",
    embedId: "s08nzu_A6Ic",
    tags: ["Wellness", "Product", "Lifestyle"],
  },
  {
    title: "Mariah.B – Bizness",
    description:
      "Music video direction and production for artist Mariah.B. Cinematic storytelling with bold visual identity.",
    embedId: "QzbYiE_m-iw",
    tags: ["Music Video", "Direction", "Editing"],
  },
  {
    title: "Oribe Ad",
    description:
      "Premium product advertisement for luxury hair care brand Oribe. Elevated visuals matching the brand's high-end positioning.",
    embedId: "of87wf29ueg",
    tags: ["Luxury", "Product Ad", "Beauty"],
  },
];


export default function VideoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 section-padding">
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
            Video & Motion Graphics
          </motion.p>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="heading-xl"
          >
            MOVING
            <br />
            <span className="text-gradient-gold">PICTURES</span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="body-lg max-w-2xl"
        >
          From cinematic music videos to scroll-stopping social content and
          motion graphics. CoSign Videographer of the Year 2020.
        </motion.p>
      </section>

      {/* Video Projects */}
      <section className="section-padding pb-28">
        <div className="space-y-24">
          {videoProjects.map((project, i) => (
            <div key={project.title}>
              <FadeUp>
                <div className="relative aspect-video overflow-hidden rounded-lg mb-8 bg-bg-card group">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.embedId}?rel=0&modestbranding=1`}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </FadeUp>
              <SlideRight delay={0.1}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <span className="font-display text-xs text-gold/40 mb-2 block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display font-bold text-2xl md:text-3xl text-cream mb-3 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="font-body text-white/40 leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 md:pt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 border border-white/[0.08] rounded-full font-display text-xs uppercase tracking-wider text-white/30 whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SlideRight>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding py-32 text-center border-t border-white/[0.06]">
        <FadeUp>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-8">
            Need video content that converts?
          </p>
          <h2 className="heading-lg mb-10">
            Let&apos;s Tell{" "}
            <span className="text-gradient-gold">Your Story</span>
          </h2>
          <a
            href="mailto:taylormademd@gmail.com"
            className="inline-block font-display text-sm uppercase tracking-[0.2em] text-bg bg-gold px-12 py-4 hover:bg-gold-light transition-all duration-300"
          >
            Start a Project
          </a>
        </FadeUp>
      </section>
    </>
  );
}
