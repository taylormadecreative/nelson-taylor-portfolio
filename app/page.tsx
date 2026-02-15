"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import {
  FadeUp,
  FadeIn,
  SlideRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";

const featuredWork = [
  {
    title: "MYX Foundation",
    category: "Product Photography",
    image: "/images/product/brands/myx/myx%201.jpg",
    href: "/photography",
  },
  {
    title: "Takis Fuego",
    category: "Brand Campaign",
    image: "/images/product/brands/takis/takis%20graphic.jpg",
    href: "/photography",
  },
  {
    title: "TONI&GUY Editorial",
    category: "Fashion Photography",
    image: "/images/hero/toni-guy-editorial.jpg",
    href: "/photography",
  },
  {
    title: "Jordan x Foot Locker",
    category: "Product & Branding",
    image: "/images/product/brands/jordan/jordanIV_1.jpg",
    href: "/photography",
  },
  {
    title: "Konjo Beauty",
    category: "Product Photography",
    image: "/images/product/brands/konjo/Konjo8937.jpg",
    href: "/photography",
  },
  {
    title: "AI Fashion Editorial",
    category: "AI-Generated Content",
    image: "/images/ai/vintage-car-editorial.png",
    href: "/ai-content",
  },
];

const disciplines = [
  { label: "Photography", href: "/photography" },
  { label: "Video / Motion", href: "/video" },
  { label: "Web & UI/UX", href: "/web-design" },
  { label: "AI Content", href: "/ai-content" },
  { label: "Branding", href: "/photography" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ============ HERO ============ */}
      <section
        ref={heroRef}
        className="relative h-screen overflow-hidden flex items-end"
      >
        {/* Background Video with Parallax */}
        <motion.div
          style={{ y: heroY, willChange: "transform" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/zhitPPJDJqA?autoplay=1&mute=1&loop=1&playlist=zhitPPJDJqA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
              title="Nelson Taylor Film Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] md:w-[200%] md:h-[200%] pointer-events-none"
              style={{ border: "none" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-bg/40" />
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, willChange: "opacity" }}
          className="relative z-10 section-padding pb-20 md:pb-28 w-full"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-gold mb-8"
          />

          <div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-sm uppercase tracking-[0.3em] text-gold"
            >
              Creative Director &bull; Visual Storyteller
            </motion.p>
          </div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl"
            >
              NELSON
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl text-gradient-gold"
            >
              TAYLOR
            </motion.h1>
          </div>

          <div className="overflow-hidden max-w-lg">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="body-lg"
            >
              10+ years turning brands into visual experiences that move people —
              and move the needle.
            </motion.p>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 right-8 md:right-20 flex flex-col items-center gap-3"
          >
            <span className="font-display text-[10px] uppercase tracking-[0.3em] text-white/30 rotate-90 origin-center translate-x-4">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ DISCIPLINES MARQUEE ============ */}
      <section className="py-8 border-y border-white/[0.06] overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ willChange: "transform" }}
          className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...disciplines, ...disciplines, ...disciplines, ...disciplines].map(
            (d, i) => (
              <Link
                key={i}
                href={d.href}
                className="flex items-center gap-8 group"
              >
                <span className="font-display font-bold text-2xl md:text-3xl text-white/10 group-hover:text-gold/40 transition-colors duration-300 uppercase tracking-tight">
                  {d.label}
                </span>
                <span className="w-2 h-2 rounded-full bg-gold/30" />
              </Link>
            )
          )}
        </motion.div>
      </section>

      {/* ============ STATS ============ */}
      <section className="section-padding py-28 md:py-36">
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              By the Numbers
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <Counter
            end={45}
            suffix="%"
            label="Organic Engagement"
            sublabel="Secret Med Spa"
          />
          <Counter
            end={30}
            suffix="%"
            label="Ad Conversions"
            sublabel="Paid Campaigns"
          />
          <Counter
            end={40}
            suffix="%"
            label="Audience Growth"
            sublabel="TONI & GUY"
          />
          <Counter
            end={10}
            suffix="+"
            label="Years Experience"
            sublabel="Creative Direction"
          />
        </div>
      </section>

      {/* ============ FEATURED WORK ============ */}
      <section className="section-padding py-20">
        <FadeUp>
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="gold-line" />
                <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                  Selected Work
                </span>
              </div>
              <h2 className="heading-lg">
                Work That{" "}
                <span className="text-gradient-gold">Speaks</span>
              </h2>
            </div>
            <Link
              href="/photography"
              className="hidden md:block font-display text-xs uppercase tracking-[0.2em] text-white/30 hover:text-gold transition-colors border-b border-white/10 hover:border-gold pb-1"
            >
              View All Work
            </Link>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWork.map((work) => (
            <StaggerItem key={work.title}>
              <Link href={work.href} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="font-display text-xs uppercase tracking-[0.2em] text-gold">
                      View Project
                    </span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-cream group-hover:text-gold transition-colors duration-300">
                  {work.title}
                </h3>
                <p className="font-body text-sm text-white/30">
                  {work.category}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 md:hidden text-center">
          <Link
            href="/photography"
            className="inline-block font-display text-xs uppercase tracking-[0.2em] text-gold border border-gold/30 px-8 py-3 hover:bg-gold hover:text-bg transition-all duration-300"
          >
            View All Work
          </Link>
        </div>
      </section>

      {/* ============ ABOUT TEASER ============ */}
      <section className="section-padding py-28 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideRight>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                  About
                </span>
              </div>
              <h2 className="heading-lg mb-8">
                Creative by{" "}
                <span className="text-gradient-gold">Nature</span>,<br />
                Director by{" "}
                <span className="text-gradient-gold">Craft</span>
              </h2>
              <p className="body-lg mb-6">
                I&apos;m Nelson Taylor — a multidisciplinary creative director who
                believes great visuals aren&apos;t just seen, they&apos;re felt. From
                photography and video to web design and AI-generated content, I
                bring a decade of relentless creative energy to every project.
              </p>
              <p className="body-lg mb-10">
                BFA in Graphic Design. CoSign Videographer of the Year 2020.
                Brands I&apos;ve moved the needle for include KFC, TONI&GUY, and
                Secret Med Spa.
              </p>
              <Link
                href="/about"
                className="inline-block font-display text-xs uppercase tracking-[0.2em] text-gold border border-gold/30 px-8 py-3 hover:bg-gold hover:text-bg transition-all duration-300"
              >
                Full Story
              </Link>
            </div>
          </SlideRight>

          <FadeUp delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/images/hero/nelson-headshot.png"
                  alt="Nelson Taylor"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-gold/20 rounded-lg" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold/5 rounded-lg" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ============ SERVICES STRIP ============ */}
      <section className="border-y border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              num: "01",
              title: "Photography",
              desc: "Beauty, fashion, product, editorial, and event photography that captures more than a moment.",
            },
            {
              num: "02",
              title: "Video & Motion",
              desc: "Cinematic storytelling, motion graphics, and content that stops the scroll.",
            },
            {
              num: "03",
              title: "Web & UI/UX",
              desc: "Digital experiences that look incredible and convert even better.",
            },
            {
              num: "04",
              title: "AI Content",
              desc: "Next-generation visuals blending AI with art direction for forward-thinking brands.",
            },
          ].map((service, i) => (
            <FadeUp key={service.num} delay={i * 0.1}>
              <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-white/[0.06] last:border-r-0 last:border-b-0 group hover:bg-white/[0.02] transition-colors duration-500">
                <span className="font-display text-xs text-gold/40 mb-6 block">
                  {service.num}
                </span>
                <h3 className="font-display font-bold text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-white/30 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section-padding py-32 md:py-44 text-center">
        <FadeUp>
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-8">
            Let&apos;s create something
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-[0.9] mb-10 mx-auto text-center">
            <span className="block">YOUR BRAND</span>
            <span className="block text-gradient-gold">DESERVES</span>
            <span className="block text-gradient-gold">BETTER</span>
          </h2>
          <a
            href="mailto:taylormademd@gmail.com"
            className="inline-block font-display text-sm uppercase tracking-[0.2em] text-bg bg-gold px-12 py-4 hover:bg-gold-light transition-all duration-300"
          >
            Get In Touch
          </a>
        </FadeUp>
      </section>
    </>
  );
}
