"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FadeUp,
  SlideRight,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import Counter from "@/components/Counter";

const timeline = [
  {
    year: "2024 – 2025",
    role: "Sr. Marketing Specialist",
    company: "Secret Med Spa",
    description:
      "Led comprehensive marketing strategy driving 45% increase in organic engagement, 30% improvement in paid ad conversions, and 15% reduction in website bounce rates through data-driven creative campaigns.",
  },
  {
    year: "2022 – 2023",
    role: "Visual Director",
    company: "TONI & GUY",
    description:
      "Directed visual content strategy for the salon brand, producing fashion-forward photography and video content that drove 40% increased audience engagement across digital platforms.",
  },
  {
    year: "2019 – 2020",
    role: "Content Creator",
    company: "KFC / Yum! Brands",
    description:
      "Created compelling visual content for one of the world's largest restaurant brands. Won CoSign Videographer of the Year 2020.",
  },
  {
    year: "2016 – 2019",
    role: "Creative Director",
    company: "Rock n Concepts",
    description:
      "Led creative direction for 7 restaurant concepts including full branding, photography, video, menu design, and digital presence.",
  },
  {
    year: "2015 – 2016",
    role: "Designer I",
    company: "Atkins",
    description:
      "Corporate design role creating presentations, marketing materials, and brand collateral for the global engineering firm.",
  },
  {
    year: "2011 – Present",
    role: "Creative Director & Founder",
    company: "TaylorMade Creative",
    description:
      "Full-service creative studio offering photography, videography, web design, branding, and AI-generated content for brands and artists.",
  },
];

const skills = [
  { category: "Design", items: ["Figma", "Photoshop", "Illustrator", "InDesign", "SketchUp"] },
  { category: "Video", items: ["DaVinci Resolve", "After Effects", "Premiere Pro"] },
  { category: "Web", items: ["HTML/CSS", "WordPress", "Shopify", "Squarespace", "Wix", "UI/UX Design"] },
  { category: "AI", items: ["Midjourney", "DALL-E", "Stable Diffusion", "Runway ML", "Higgsfield", "Claude", "ChatGPT", "Gemini"] },
];

export default function AboutPage() {
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
            About Me
          </motion.p>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="heading-xl"
          >
            THE CREATIVE
            <br />
            <span className="text-gradient-gold">BEHIND THE CRAFT</span>
          </motion.h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeUp>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src="/nelson-taylor-portfolio/images/hero/nelson-headshot.png"
                alt="Nelson Taylor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
            </div>
          </FadeUp>

          <SlideRight delay={0.2}>
            <div>
              <h2 className="heading-md mb-8">
                Nelson Taylor
              </h2>
              <div className="space-y-6">
                <p className="font-body text-lg text-white/50 leading-relaxed">
                  I&apos;m a multidisciplinary Creative Director based in Arlington,
                  TX with over a decade of experience turning brand visions into
                  visual reality. My work spans photography, videography, graphic
                  design, web development, and AI-generated content.
                </p>
                <p className="font-body text-lg text-white/50 leading-relaxed">
                  I hold a BFA in Graphic Design from the Art Institute of Dallas
                  and was awarded CoSign Videographer of the Year in 2020. I&apos;ve
                  had the privilege of creating for brands like KFC, TONI&GUY,
                  and Secret Med Spa — consistently delivering measurable results.
                </p>
                <p className="font-body text-lg text-white/50 leading-relaxed">
                  What sets me apart? I don&apos;t just make things look good — I
                  make them work. A 45% jump in organic engagement. A 30% boost
                  in ad conversions. A 15% drop in bounce rates. That&apos;s what
                  creative direction with intention looks like.
                </p>
              </div>

              {/* Awards */}
              <div className="mt-12 p-6 border border-gold/20 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold text-sm">★</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-cream text-sm">
                      CoSign Videographer of the Year
                    </p>
                    <p className="font-body text-xs text-white/30">2020</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                    <span className="text-gold text-sm">◆</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-cream text-sm">
                      BFA Graphic Design
                    </p>
                    <p className="font-body text-xs text-white/30">
                      Art Institute of Dallas, 2014
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/[0.06] section-padding py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <Counter end={45} suffix="%" label="Organic Engagement" sublabel="Secret Med Spa" />
          <Counter end={30} suffix="%" label="Ad Conversions" sublabel="Paid Campaigns" />
          <Counter end={15} suffix="%" label="Bounce Rate Drop" sublabel="Website Optimization" />
          <Counter end={40} suffix="%" label="Audience Growth" sublabel="TONI & GUY" />
        </div>
      </section>

      {/* Work Timeline */}
      <section className="section-padding py-28">
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              Work History
            </span>
          </div>
          <h2 className="heading-lg mb-16">
            Where I&apos;ve <span className="text-gradient-gold">Been</span>
          </h2>
        </FadeUp>

        <div className="space-y-0">
          {timeline.map((item, i) => (
            <FadeUp key={item.company} delay={i * 0.08}>
              <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-12 py-10 border-b border-white/[0.06] hover:bg-white/[0.01] transition-colors duration-300 px-4 -mx-4">
                <div>
                  <span className="font-display text-sm text-gold/60">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-cream mb-1 group-hover:text-gold transition-colors duration-300">
                    {item.role}
                  </h3>
                  <p className="font-display text-sm text-gold mb-4">
                    {item.company}
                  </p>
                  <p className="font-body text-sm text-white/30 leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/[0.06] section-padding py-28">
        <FadeUp>
          <div className="flex items-center gap-4 mb-16">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              Skills & Tools
            </span>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <StaggerItem key={group.category}>
              <div className="glass-card p-8">
                <h3 className="font-display font-bold text-sm uppercase tracking-[0.15em] text-gold mb-6">
                  {group.category}
                </h3>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <p
                      key={item}
                      className="font-body text-sm text-white/40"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Contact Section */}
      <section className="border-t border-white/[0.06] section-padding py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeUp>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="gold-line" />
                <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
                  Get In Touch
                </span>
              </div>
              <h2 className="heading-lg mb-8">
                Let&apos;s{" "}
                <span className="text-gradient-gold">Connect</span>
              </h2>
              <p className="body-lg mb-12">
                Whether you&apos;re looking for a creative director, need visual
                content for your brand, or just want to talk shop — I&apos;m all
                ears.
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.15em] text-white/30 mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:taylormademd@gmail.com"
                    className="font-body text-lg text-cream hover:text-gold transition-colors"
                  >
                    taylormademd@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.15em] text-white/30 mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:8177071291"
                    className="font-body text-lg text-cream hover:text-gold transition-colors"
                  >
                    (817) 707-1291
                  </a>
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.15em] text-white/30 mb-2">
                    Location
                  </p>
                  <p className="font-body text-lg text-cream">
                    Dallas-Ft. Worth, TX
                  </p>
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.15em] text-white/30 mb-2">
                    Social
                  </p>
                  <div className="flex gap-6">
                    <a
                      href="https://www.instagram.com/taylormade_creative/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-cream hover:text-gold transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.youtube.com/@nelsontaylor9165"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-cream hover:text-gold transition-colors"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://www.linkedin.com/in/taylormademd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-cream hover:text-gold transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <SlideRight delay={0.2}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const email = (form.elements.namedItem("email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                window.location.href = `mailto:taylormademd@gmail.com?subject=Portfolio Inquiry from ${name}&body=${encodeURIComponent(message)}%0A%0AFrom: ${name} (${email})`;
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="font-display text-xs uppercase tracking-[0.15em] text-white/30 mb-3 block"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-white/[0.1] focus:border-gold py-3 font-body text-cream outline-none transition-colors duration-300 placeholder:text-white/15"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-display text-xs uppercase tracking-[0.15em] text-white/30 mb-3 block"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-white/[0.1] focus:border-gold py-3 font-body text-cream outline-none transition-colors duration-300 placeholder:text-white/15"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-display text-xs uppercase tracking-[0.15em] text-white/30 mb-3 block"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-transparent border-b border-white/[0.1] focus:border-gold py-3 font-body text-cream outline-none transition-colors duration-300 resize-none placeholder:text-white/15"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full font-display text-sm uppercase tracking-[0.2em] text-bg bg-gold py-4 hover:bg-gold-light transition-all duration-300 mt-4"
              >
                Send Message
              </button>
            </form>
          </SlideRight>
        </div>
      </section>
    </>
  );
}
