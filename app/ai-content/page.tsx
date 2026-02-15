"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const aiWork = [
  {
    src: "/images/ai/vintage-car-editorial.png",
    alt: "Vintage Car Editorial",
    category: "Fashion / Lifestyle",
    description: "AI-generated men's fashion editorial with vintage luxury car. Crafted with precise art direction for realistic campaign-quality output.",
  },
  {
    src: "/images/ai/bmw-editorial.png",
    alt: "BMW Editorial",
    category: "Fashion / Automotive",
    description: "AI-generated lifestyle editorial blending fashion and automotive aesthetics.",
  },
  {
    src: "/images/ai/lip-macro.png",
    alt: "Lip Macro Beauty",
    category: "Beauty",
    description: "Hyper-realistic AI beauty shot. Extreme macro lip photography with product-ready detail and lighting.",
  },
  {
    src: "/images/ai/ai-beauty-1.png",
    alt: "AI Beauty Portrait",
    category: "Beauty",
    description: "AI-generated beauty portrait showcasing advanced prompt engineering and art direction skills.",
  },
  {
    src: "/images/ai/ai-beauty-2.png",
    alt: "AI Beauty Editorial",
    category: "Beauty / Editorial",
    description: "Beauty editorial created entirely with AI, demonstrating the intersection of technology and creative vision.",
  },
  {
    src: "/images/ai/ai-fashion-1.png",
    alt: "AI Fashion",
    category: "Fashion",
    description: "Fashion-forward AI-generated imagery pushing creative boundaries.",
  },
  {
    src: "/images/ai/ai-fashion-2.png",
    alt: "AI Fashion Editorial",
    category: "Fashion",
    description: "High-fashion AI editorial with meticulous attention to styling, lighting, and composition.",
  },
  {
    src: "/images/ai/ai-lifestyle-1.png",
    alt: "AI Lifestyle",
    category: "Lifestyle",
    description: "AI-generated lifestyle content for brand campaigns and social media.",
  },
  {
    src: "/images/ai/jaquandice-album.png",
    alt: "JaQuandice Album Art",
    category: "Music / Branding",
    description: "AI-assisted album artwork design for recording artist JaQuandice.",
  },
  {
    src: "/images/ai/pattern-beauty.png",
    alt: "Pattern Beauty",
    category: "Product / Beauty",
    description: "AI-generated product visualization for beauty brand concept.",
  },
  {
    src: "/images/ai/color-match.jpg",
    alt: "Color Match Concept",
    category: "Brand Design",
    description: "AI-assisted color matching and brand visualization concept.",
  },
];

export default function AIContentPage() {
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
            AI-Generated Content
          </motion.p>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="heading-xl"
          >
            FUTURE
            <br />
            <span className="text-gradient-gold">FORWARD</span>
          </motion.h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="body-lg max-w-2xl"
        >
          Where art direction meets artificial intelligence. Campaign-quality
          visuals crafted with precise creative vision and cutting-edge AI
          tools.
        </motion.p>
      </section>

      {/* AI Animated Ads Section - FIRST */}
      <section className="section-padding pb-28">
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              AI-Powered Animations & Ads
            </span>
          </div>
          <h2 className="heading-lg mb-8">
            Animated <span className="text-gradient-gold">AI Content</span>
          </h2>
          <p className="body-lg max-w-2xl mb-16">
            Beyond static imagery — AI-generated animated content for social
            media campaigns, product ads, and brand activations.
          </p>
        </FadeUp>

        {/* YouTube Shorts AI Ads */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { title: "Winter Certified Ad", type: "Seasonal Campaign", embedId: "XreeK0HoMNE" },
            { title: "ClipNGo Ad 2", type: "Product Ad", embedId: "inoZDmYSed8" },
            { title: "ClipNGo Ad 1", type: "Product Ad", embedId: "o8jD2Jo4kwU" },
            { title: "AI Brand Spot", type: "AI Commercial", embedId: "qre4sku6Pa0" },
          ].map((item) => (
            <StaggerItem key={item.embedId}>
              <div className="group">
                <div className="relative aspect-[9/16] overflow-hidden rounded-lg mb-4 bg-bg-card">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.embedId}?rel=0&modestbranding=1`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
                <span className="font-display text-xs uppercase tracking-[0.15em] text-gold/60 block mb-1">
                  {item.type}
                </span>
                <h3 className="font-display font-bold text-lg text-cream group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* GIFs */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "59 Shades Campaign", type: "Animated GIF Ad", src: "/images/ai/59-shades-ad.gif" },
            { title: "Skeleton Dance", type: "AI Motion Graphics", src: "/images/ai/skeleton-dance.gif" },
            { title: "Hands Petting", type: "AI Visual Effects", src: "/images/ai/hands-petting.gif" },
            { title: "Halloween Social Post", type: "AI Animation", src: "/images/ai/halloween-post.jpg" },
          ].map((item) => (
            <StaggerItem key={item.title}>
              <div className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4 bg-bg-card">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="font-display text-xs uppercase tracking-[0.15em] text-gold/60 block mb-1">
                  {item.type}
                </span>
                <h3 className="font-display font-bold text-lg text-cream group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Manifesto */}
      <section className="border-t border-white/[0.06] section-padding py-20">
        <FadeUp>
          <div className="glass-card p-8 md:p-12 max-w-3xl">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-gold mb-4">
              My Approach
            </p>
            <p className="font-body text-lg text-white/50 leading-relaxed">
              AI is a tool, not a replacement for creative vision. I bring 10+
              years of art direction experience to every prompt — understanding
              lighting, composition, color theory, and brand aesthetics to
              produce AI content that&apos;s indistinguishable from professional
              shoots. The future of content creation is here, and it still
              needs a creative director.
            </p>
          </div>
        </FadeUp>
      </section>

      {/* Gallery */}
      <section className="section-padding pb-32">
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              AI-Generated Imagery
            </span>
          </div>
        </FadeUp>
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aiWork.map((work) => (
            <StaggerItem key={work.src}>
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <span className="font-display text-xs uppercase tracking-[0.15em] text-gold/60 block mb-1">
                  {work.category}
                </span>
                <h3 className="font-display font-bold text-lg text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                  {work.alt}
                </h3>
                <p className="font-body text-sm text-white/30 leading-relaxed">
                  {work.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Tools */}
      <section className="border-t border-white/[0.06] section-padding py-20">
        <FadeUp>
          <div className="flex items-center gap-4 mb-12">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              AI Tools & Platforms
            </span>
          </div>
        </FadeUp>
        <StaggerContainer className="flex flex-wrap gap-4">
          {[
            "Midjourney",
            "DALL-E",
            "Stable Diffusion",
            "Runway ML",
            "Higgsfield",
            "Adobe Firefly",
            "Photoshop AI",
            "Claude",
            "ChatGPT",
            "Gemini",
          ].map((tool) => (
            <StaggerItem key={tool}>
              <span className="px-6 py-3 border border-white/[0.08] font-display text-sm text-white/40 hover:text-gold hover:border-gold/30 transition-all duration-300 cursor-default">
                {tool}
              </span>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* CTA */}
      <section className="section-padding py-32 text-center border-t border-white/[0.06]">
        <FadeUp>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-8">
            Ready for the future?
          </p>
          <h2 className="heading-lg mb-10">
            Let&apos;s Create the{" "}
            <span className="text-gradient-gold">Impossible</span>
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
