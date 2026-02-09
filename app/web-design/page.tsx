"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FadeUp,
  SlideRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const websites = [
  {
    title: "JaQuandice",
    subtitle: "Artist Portfolio & Music Platform",
    description:
      "Full branding and web design for recording artist JaQuandice. Custom layout, music player integration, and visual identity that captures the artist's creative vision.",
    url: "https://jaquandice.com",
    image: "/images/web-projects/jaquandice-cover.png",
    tags: ["Web Design", "Branding", "UI/UX"],
  },
  {
    title: "Crowne Luxx Collection",
    subtitle: "Luxury Fashion E-Commerce",
    description:
      "Premium e-commerce experience for a luxury fashion brand. Clean, elevated design with sophisticated product showcasing and seamless checkout flow.",
    url: "https://taylormadecreative.github.io/crowne-luxx-collection/",
    image: "/images/product/konjo-1.jpg",
    tags: ["E-Commerce", "UI/UX", "Branding"],
  },
  {
    title: "The Celebration Band",
    subtitle: "Entertainment Booking Platform",
    description:
      "Dynamic website for a live entertainment band featuring event booking, media gallery, and promotional content that brings the energy of their performances online.",
    url: "https://management3297.wixsite.com/the-celebration-band",
    image: "/images/events/event-1.jpg",
    tags: ["Web Design", "Booking System", "Media"],
  },
  {
    title: "MoodAI",
    subtitle: "AI-Powered Wellness App",
    description:
      "UI/UX design for an AI-driven mood tracking application. Intuitive interface design, data visualization, and calming visual language for mental wellness.",
    url: "https://taylormadecreative.github.io/moodai-website/",
    image: "/images/ai/ai-beauty-1.png",
    tags: ["UI/UX", "App Design", "AI"],
  },
  {
    title: "The People's Roofer",
    subtitle: "Service Business Website",
    description:
      "Professional website for a roofing company that builds trust through clean design, clear service presentation, and strong calls-to-action that convert visitors to customers.",
    url: "https://taylormadecreative.github.io/thepeoplesroofer/",
    image: "/images/branding/static-ad-1.jpg",
    tags: ["Web Design", "Local Business", "Lead Gen"],
  },
];

export default function WebDesignPage() {
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
            Web & UI/UX Design
          </motion.p>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="heading-xl"
          >
            DIGITAL
            <br />
            <span className="text-gradient-gold">EXPERIENCES</span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="body-lg max-w-2xl"
        >
          Websites and applications that don&apos;t just look incredible — they
          convert. From artist portfolios to e-commerce platforms, every pixel
          is intentional.
        </motion.p>
      </section>

      {/* Projects */}
      <section className="section-padding pb-32">
        <div className="space-y-32">
          {websites.map((project, i) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <FadeUp>
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                  </div>
                </div>
              </FadeUp>

              <SlideRight delay={0.2}>
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <span className="font-display text-xs text-gold/40 mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display font-black text-3xl md:text-4xl text-cream mb-2 tracking-tight">
                    {project.title}
                  </h2>
                  <p className="font-display text-sm text-gold mb-6">
                    {project.subtitle}
                  </p>
                  <p className="font-body text-white/40 leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 border border-white/[0.08] rounded-full font-display text-xs uppercase tracking-wider text-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block font-display text-xs uppercase tracking-[0.2em] text-gold border border-gold/30 px-8 py-3 hover:bg-gold hover:text-bg transition-all duration-300"
                    >
                      Visit Site
                    </a>
                  )}
                </div>
              </SlideRight>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-t border-white/[0.06] section-padding py-28">
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              My Process
            </span>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              num: "01",
              title: "Discover & Strategy",
              desc: "Understanding your brand, audience, and goals. Research-driven approach to establish a clear creative direction.",
            },
            {
              num: "02",
              title: "Design & Prototype",
              desc: "Wireframes to high-fidelity mockups in Figma. Interactive prototypes that let you experience the vision before development.",
            },
            {
              num: "03",
              title: "Build & Launch",
              desc: "Clean, performant code. Responsive across all devices. Optimized for conversions and search engines.",
            },
          ].map((step) => (
            <StaggerItem key={step.num}>
              <div className="glass-card p-8 group hover:border-gold/20 transition-colors duration-500">
                <span className="font-display text-4xl font-black text-gold/10 group-hover:text-gold/30 transition-colors duration-300 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-xl text-cream mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-white/30 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="section-padding py-32 text-center border-t border-white/[0.06]">
        <FadeUp>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-8">
            Need a website that converts?
          </p>
          <h2 className="heading-lg mb-10">
            Let&apos;s Build{" "}
            <span className="text-gradient-gold">Something Great</span>
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
