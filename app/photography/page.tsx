"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

/* ─────────────────────────── DATA ─────────────────────────── */

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  role: string;
  heroImage: string;
  images: string[];
}

const IMG = "/nelson-taylor-portfolio/images";

const TG = `${IMG}/hair/brands/Toni%20%26%20Guy`;
const DC = `${IMG}/hair/brands/DreamCatchers`;
const HL = `${IMG}/hair/brands/HairLocs`;
const JB = `${IMG}/hair/brands/Juice%20%26%20Botanics`;
const DM = `${IMG}/beauty/Diameco`;
const MS = `${IMG}/beauty/its%20a%20secret%20med%20spa`;
const BGS = `${IMG}/beauty/Blackgirl%20Sunscreen`;
const PM = `${IMG}/beauty/Pigment%20Makeup`;
const NU = `${IMG}/beauty/Nuetrogena`;
const SF = `${IMG}/beauty/StarFace`;
const OR = `${IMG}/product/brands/oribe`;
const KJ = `${IMG}/product/brands/konjo`;
const MX = `${IMG}/product/brands/myx`;
const FE = `${IMG}/fashion/editorial`;

const projects: Project[] = [
  {
    id: "toni-guy",
    title: "Editorial & Branded Content",
    client: "TONI&GUY",
    category: "Hair & Beauty",
    description:
      "A multi-faceted campaign for the iconic salon brand — blending editorial storytelling with branded content across print and digital.",
    role: "Creative Direction, Photography",
    heroImage: `${TG}/toni%20and%20guy%201.jpg`,
    images: [
      `${TG}/toni%20and%20guy%201.jpg`,
      `${TG}/toni%20and%20guy%202.jpg`,
      `${TG}/toni%20and%20guy%203.jpg`,
      `${TG}/toni%20and%20guy%204.jpg`,
      `${TG}/toni%20and%20guy%205.jpg`,
      `${TG}/toni%20and%20guy%206.jpg`,
      `${TG}/toni%20and%20guy%207.jpg`,
      `${TG}/toni%20and%20guy%208.jpg`,
      `${TG}/toniy%20and%20guy%209.jpg`,
      `${TG}/toni%20and%20guy%2010.jpg`,
      `${TG}/toni%20and%20guy%2011.jpg`,
      `${TG}/toni%20and%20guy%2012.jpg`,
    ],
  },
  {
    id: "diameco",
    title: "Luxury Jewelry Campaign",
    client: "Diameco",
    category: "Beauty & Product",
    description:
      "High-end jewelry campaign capturing the essence of luxury through dramatic lighting, architectural settings, and intimate close-ups.",
    role: "Photography, Art Direction",
    heroImage: `${DM}/diameco%201.jpg`,
    images: [
      `${DM}/diameco%201.jpg`,
      `${DM}/diameco%202.jpg`,
      `${DM}/diameco%203.jpg`,
      `${DM}/diameco%204.jpg`,
      `${DM}/diameco%205.jpg`,
      `${DM}/diameco%206.jpg`,
      `${DM}/diameco%207.jpg`,
      `${DM}/diameco%208.jpg`,
      `${DM}/diameco%209.jpg`,
      `${DM}/diameco%2010.jpg`,
      `${DM}/diameco%2011.jpg`,
    ],
  },
  {
    id: "oribe",
    title: "Luxury Product Photography",
    client: "Oribe",
    category: "Product",
    description:
      "Conceptual product photography for the luxury hair care brand — blending nature, texture, and elegance into every frame.",
    role: "Photography, Set Design",
    heroImage: `${OR}/DSC00926(1)-1%20copy.jpg`,
    images: [
      `${OR}/DSC00926(1)-1%20copy.jpg`,
      `${OR}/473616830_18482694070046799_3799849554993852189_n.jpg`,
      `${OR}/473617044_18482697100046799_286354966583593985_n.jpg`,
      `${OR}/473618873_18482697211046799_9011940896851285269_n.jpg`,
      `${OR}/473621864_18482697019046799_3929040231717976666_n.jpg`,
      `${OR}/473780049_18482697202046799_8875592688985662321_n.jpg`,
      `${OR}/511272380_10163296305177360_5603290378374761886_n.jpg`,
      `${OR}/511274114_10163296302032360_7230907880170794962_n.jpg`,
      `${OR}/511436330_10163300746412360_281637824915187915_n.jpg`,
      `${OR}/511544741_10163299028537360_2576807327078848848_n.jpg`,
      `${OR}/512274919_10163299028662360_5968313948739064858_n.jpg`,
      `${OR}/513266978_10163300745847360_4107347542661090668_n.jpg`,
    ],
  },
  {
    id: "medspa",
    title: "Beauty & Lifestyle Editorial",
    client: "It's a Secret Med Spa",
    category: "Beauty",
    description:
      "Editorial beauty photography showcasing treatments and results with an elevated, magazine-quality aesthetic.",
    role: "Photography, Retouching",
    heroImage: `${MS}/iasms%201.jpg`,
    images: [
      `${MS}/iasms%201.jpg`,
      `${MS}/iasms%202.jpg`,
      `${MS}/iasms%203.jpg`,
      `${MS}/iasms%204.jpg`,
      `${MS}/iasms%205.jpg`,
      `${MS}/iasms%206.jpg`,
      `${MS}/iasms%207.jpg`,
      `${MS}/iasms%208.jpg`,
      `${MS}/iasms%209.jpg`,
      `${MS}/iasms%2010.jpg`,
      `${MS}/IASMS%20Holiday%2020247926.jpg`,
      `${MS}/IASMS%20Holiday%2020248021.jpg`,
    ],
  },
  {
    id: "dreamcatchers",
    title: "Hair Campaign",
    client: "DreamCatchers",
    category: "Hair",
    description:
      "Bold campaign for the premium hair extensions brand — vibrant color, confident styling, editorial energy.",
    role: "Photography, Creative Direction",
    heroImage: `${DC}/dreamcatchers%201.jpg`,
    images: [
      `${DC}/dreamcatchers%201.jpg`,
      `${DC}/dreamcatchers%202.jpg`,
      `${DC}/dreamcatchers%203.jpg`,
      `${DC}/dreamcatchers%204.jpg`,
      `${DC}/dreamcatchers%205.jpg`,
      `${DC}/dreamcatchers%206.jpg`,
      `${DC}/dreamcatchers%20ad%201.png`,
      `${DC}/dreamcatchers%20ad%202.png`,
      `${DC}/dreamcatchers%20ad%203.jpg`,
      `${DC}/dreamcatchers%20ad%204.jpg`,
      `${DC}/dreamcatchers%20ad%205.jpg`,
      `${DC}/dreamcatchers%20ad%206.jpg`,
    ],
  },
  {
    id: "konjo",
    title: "Product Photography",
    client: "Konjo Beauty",
    category: "Product",
    description:
      "Elegant product photography for the luxury Ethiopian-inspired beauty brand — showcasing serums and oils with warmth and texture.",
    role: "Photography, Set Design",
    heroImage: `${KJ}/Konjo8937.jpg`,
    images: [
      `${KJ}/Konjo8937.jpg`,
      `${KJ}/konjo8944.jpg`,
      `${KJ}/Konjo8946.jpg`,
      `${KJ}/konjo8951.jpg`,
      `${KJ}/Konjo8959.jpg`,
      `${KJ}/Konjo8988.jpg`,
      `${KJ}/Konjo8999.jpg`,
      `${KJ}/Konjo9002.jpg`,
      `${KJ}/Konjo09026.jpg`,
      `${KJ}/Konjo09032.jpg`,
    ],
  },
  {
    id: "myx",
    title: "Product Photography",
    client: "MYX Foundation",
    category: "Product",
    description:
      "Clean, elevated product photography for MYX Foundation — highlighting formulation, texture, and brand identity.",
    role: "Photography, Set Design",
    heroImage: `${MX}/myx%201.jpg`,
    images: [
      `${MX}/myx%201.jpg`,
      `${MX}/myx%202.jpg`,
      `${MX}/myx%203.jpg`,
      `${MX}/myx%204.jpg`,
      `${MX}/myx%205.jpg`,
      `${MX}/myx%206.jpg`,
      `${MX}/myx%207.jpg`,
    ],
  },
  {
    id: "hairlocs",
    title: "Hair Campaign",
    client: "HairLocs",
    category: "Hair",
    description:
      "Campaign photography for the premium locs brand — celebrating natural texture, color, and confident styling.",
    role: "Photography, Creative Direction",
    heroImage: `${HL}/HairLocs4289.jpg`,
    images: [
      `${HL}/HairLocs4289.jpg`,
      `${HL}/HairLocs4295.jpg`,
      `${HL}/HairLocs4299.jpg`,
      `${HL}/HairLocs4300.jpg`,
      `${HL}/HairLocs4420.jpg`,
      `${HL}/HairLocs4421.jpg`,
      `${HL}/HairLocs4289%201.jpg`,
      `${HL}/HairLocs4299%201.jpg`,
    ],
  },
  {
    id: "bgs",
    title: "Brand Campaign",
    client: "Black Girl Sunscreen",
    category: "Beauty",
    description:
      "Campaign photography for the trailblazing inclusive sunscreen brand — celebrating joy, confidence, and protection in the sun.",
    role: "Photography, Creative Direction",
    heroImage: `${BGS}/blackgirl%20sunscreen%201.jpg`,
    images: [
      `${BGS}/blackgirl%20sunscreen%201.jpg`,
      `${BGS}/blackgirl%20sunscreen%202.jpg`,
      `${BGS}/blackgirl%20sunscreen%203.jpg`,
    ],
  },
  {
    id: "pigment",
    title: "Beauty Editorial",
    client: "Pigment Makeup",
    category: "Beauty",
    description:
      "Vibrant editorial photography for the bold makeup brand — color, confidence, and artistry in every frame.",
    role: "Photography, Creative Direction",
    heroImage: `${PM}/pigment%201.jpg`,
    images: [
      `${PM}/pigment%201.jpg`,
      `${PM}/pigment%202.jpg`,
      `${PM}/pigment%203.jpg`,
      `${PM}/pigment%204.png`,
      `${PM}/pigment%205.png`,
    ],
  },
  {
    id: "neutrogena",
    title: "Skincare Campaign",
    client: "Neutrogena",
    category: "Beauty",
    description:
      "Clean, radiant campaign photography for the trusted skincare brand — showcasing product and lifestyle with effortless beauty.",
    role: "Photography, Art Direction",
    heroImage: `${NU}/Nuetrogena%201.jpg`,
    images: [
      `${NU}/Nuetrogena%201.jpg`,
      `${NU}/Nuetrogena%202.jpg`,
      `${NU}/Nuetrogena%203.jpg`,
      `${NU}/Nuetrogena%204.jpg`,
    ],
  },
  {
    id: "starface",
    title: "Skincare Campaign",
    client: "StarFace",
    category: "Beauty",
    description:
      "Fun, youthful campaign photography for the Gen-Z skincare brand — playful energy with a beauty-forward aesthetic.",
    role: "Photography, Creative Direction",
    heroImage: `${SF}/starface%201.jpg`,
    images: [
      `${SF}/starface%201.jpg`,
      `${SF}/starface%202.jpg`,
      `${SF}/starface%203.jpg`,
      `${SF}/starface%204.jpg`,
    ],
  },
];

interface BrandShot {
  src: string;
  alt: string;
  client: string;
}

const brandHighlights: BrandShot[] = [
  { src: `${IMG}/product/brands/jordan/jordanIV_1.jpg`, alt: "Jordan IV", client: "Jordan x Foot Locker" },
  { src: `${IMG}/product/brands/takis/takis%20graphic.jpg`, alt: "Takis Fuego", client: "Takis" },
  { src: `${IMG}/product/brands/goldwell/goldwell%201.jpg`, alt: "Goldwell Professional", client: "Goldwell" },
  { src: `${IMG}/product/brands/skinbetter/skinbetter%201.jpg`, alt: "Skinbetter Science", client: "Skinbetter Science" },
  { src: `${IMG}/product/brands/kms/kms%201.jpg`, alt: "KMS Hair Products", client: "KMS" },
  { src: `${JB}/juice%20and%20bontanics%201.jpg`, alt: "Juice & Botanics", client: "Juice & Botanics" },
  { src: `${IMG}/product/brands/pepsi/nitro%20pepsi.jpg`, alt: "Nitro Pepsi", client: "Nitro Pepsi" },
  { src: `${IMG}/product/brands/R%2BCo/r%2Bco.jpg`, alt: "R+Co Hair Products", client: "R+Co" },
  { src: `${IMG}/product/brands/minute%20maid/minute%20maid.jpg`, alt: "Minute Maid", client: "Minute Maid" },
];

const fashionEditorial: string[] = [
  `${FE}/fashion%201.png`,
  `${FE}/fashion%202.png`,
  `${FE}/fashion%203.png`,
  `${FE}/fashion%204.png`,
  `${FE}/fashion%205.jpeg`,
  `${FE}/fashion%2015.jpg`,
  `${FE}/fashion%2016.jpg`,
  `${FE}/fashion%2017.jpg`,
  `${FE}/fashion%2018.jpg`,
  `${FE}/fashion%2019.jpg`,
  `${FE}/fashion%2021.jpg`,
  `${FE}/fashion%2022.jpg`,
  `${FE}/fashion%2023.jpg`,
  `${FE}/fashion%2024.jpg`,
  `${FE}/fashion%2025.jpg`,
  `${FE}/fashion%2026.jpg`,
  `${FE}/fashion%2027.jpg`,
  `${FE}/fashion%2028.jpg`,
  `${FE}/fashion%2029.jpg`,
  `${FE}/fashion%2030.jpg`,
  `${FE}/fashion%2031.jpg`,
  `${FE}/fashion%2032.jpg`,
  `${FE}/fashion%2033.jpg`,
  `${FE}/fashion%2034.jpg`,
  `${FE}/fashion%2035.jpg`,
  `${FE}/fashion%2036.jpg`,
  `${FE}/fashion%2037.jpg`,
  `${FE}/fashion%2038.jpg`,
  `${FE}/fashion%2039.jpg`,
  `${FE}/fashion%2040.jpg`,
  `${FE}/fashion%2041.jpg`,
  `${FE}/fashion%2042.jpg`,
];

/* ─────────────────── PROJECT VIEWER ─────────────────── */

function ProjectViewer({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + project.images.length) % project.images.length);
    },
    [onClose, project.images.length]
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-bg/98 backdrop-blur-2xl overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="fixed top-6 right-6 md:top-8 md:right-8 z-[110] font-display text-xs uppercase tracking-[0.2em] text-white/40 hover:text-gold transition-colors duration-300 flex items-center gap-2"
      >
        <span>Close</span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="stroke-current">
          <path d="M1 1l12 12M13 1L1 13" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      <div className="min-h-screen section-padding py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-3">
            {project.client}
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl tracking-tight leading-[0.95] text-cream mb-4">
            {project.title}
          </h2>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-6">
            <span className="font-body text-sm text-white/30">
              {project.category}
            </span>
            <span className="font-body text-sm text-white/30">
              {project.role}
            </span>
          </div>
          <p className="font-body text-lg text-white/50 max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full bg-black/40 rounded-lg mb-6 overflow-hidden"
          style={{ height: "clamp(300px, 70vh, 800px)" }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image
                src={project.images[activeIndex]}
                alt={`${project.client} — ${activeIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {project.images.length > 1 && (
            <>
              <button
                onClick={() =>
                  setActiveIndex(
                    (i) => (i - 1 + project.images.length) % project.images.length
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg/60 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-gold hover:bg-bg/80 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current">
                  <path d="M12 4l-6 6 6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() =>
                  setActiveIndex((i) => (i + 1) % project.images.length)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-bg/60 backdrop-blur-sm flex items-center justify-center text-white/60 hover:text-gold hover:bg-bg/80 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="stroke-current">
                  <path d="M8 4l6 6-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          {project.images.length > 1 && (
            <div className="absolute bottom-4 right-4 font-display text-xs tracking-[0.1em] text-white/40 bg-bg/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {activeIndex + 1} / {project.images.length}
            </div>
          )}
        </motion.div>

        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-3 overflow-x-auto pb-4"
          >
            {project.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveIndex(i)}
                className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 overflow-hidden rounded transition-all duration-300 ${
                  i === activeIndex
                    ? "ring-2 ring-gold opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

/* ─────────────────── LIGHTBOX ─────────────────── */

function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-2xl flex items-center justify-center cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-[90vw] h-[90vh]"
      >
        <Image src={src} alt={alt} fill className="object-contain" sizes="90vw" />
      </motion.div>
      <button
        onClick={onClose}
        className="absolute top-6 right-6 md:top-8 md:right-8 font-display text-xs uppercase tracking-[0.2em] text-white/40 hover:text-gold transition-colors"
      >
        Close
      </button>
    </motion.div>
  );
}

/* ─────────────────── MAIN PAGE ─────────────────── */

export default function PhotographyPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <>
      {/* ═══════════ CINEMATIC HERO ═══════════ */}
      <section ref={heroRef} className="relative h-[85vh] md:h-screen overflow-hidden flex items-end">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <Image
            src={`${IMG}/hero/toni-guy-editorial.jpg`}
            alt="Photography by Nelson Taylor"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-bg/30" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 section-padding pb-16 md:pb-24 w-full"
        >
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
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-sm uppercase tracking-[0.3em] text-gold"
            >
              Photography Portfolio
            </motion.p>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl"
            >
              THROUGH
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="heading-xl text-gradient-gold"
            >
              THE LENS
            </motion.h1>
          </div>
          <div className="overflow-hidden max-w-xl">
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="body-lg"
            >
              Every frame tells a story. Every detail is intentional.
              From brand campaigns to editorial work — this is the portfolio.
            </motion.p>
          </div>
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

      {/* ═══════════ FEATURED PROJECTS ═══════════ */}
      <section className="section-padding py-24 md:py-36">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              Featured Projects
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            Brand <span className="text-gradient-gold">Work</span>
          </h2>
          <p className="body-lg max-w-2xl mb-16">
            Campaign and editorial photography for brands that demand
            vision, precision, and creative intent.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <FadeUp key={project.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={() => setActiveProject(project)}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[3/4]"
              >
                <Image
                  src={project.heroImage}
                  alt={`${project.client} — ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-10">
                  <motion.div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block font-display text-[10px] uppercase tracking-[0.25em] text-gold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-cream leading-tight mb-1">
                      {project.client}
                    </h3>
                    <p className="font-body text-sm text-white/40 mb-3 max-w-md">
                      {project.title}
                    </p>
                    <span className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.15em] text-gold/70 group-hover:text-gold transition-colors duration-300">
                      View Project
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="stroke-current transform group-hover:translate-x-1 transition-transform duration-300">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </motion.div>
                </div>
                {project.images.length > 1 && (
                  <div className="absolute top-4 right-4 font-display text-[10px] tracking-[0.1em] text-white/50 bg-bg/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {project.images.length} images
                  </div>
                )}
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ═══════════ BRAND HIGHLIGHTS ═══════════ */}
      <section className="section-padding py-20 border-t border-white/[0.06]">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              Brand Highlights
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            More <span className="text-gradient-gold">Brands</span>
          </h2>
          <p className="body-lg max-w-2xl mb-16">
            Select campaign and product shots for brands across beauty, food, fashion, and lifestyle.
          </p>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {brandHighlights.map((shot) => (
            <StaggerItem key={shot.src}>
              <div
                onClick={() => setLightboxImage({ src: shot.src, alt: shot.alt })}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="font-display text-xs text-cream font-bold truncate">
                    {shot.client}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══════════ FASHION EDITORIAL ═══════════ */}
      <section className="section-padding py-24 md:py-36 border-t border-white/[0.06]">
        <FadeUp>
          <div className="flex items-center gap-4 mb-4">
            <div className="gold-line" />
            <span className="font-display text-xs uppercase tracking-[0.3em] text-gold">
              Editorial
            </span>
          </div>
          <h2 className="heading-lg mb-6">
            Fashion <span className="text-gradient-gold">Editorial</span>
          </h2>
          <p className="body-lg max-w-2xl mb-16">
            Creative and editorial fashion photography — bold styling,
            dramatic lighting, and editorial vision.
          </p>
        </FadeUp>

        <StaggerContainer className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {fashionEditorial.map((src, i) => (
            <StaggerItem key={src}>
              <div
                onClick={() =>
                  setLightboxImage({
                    src,
                    alt: `Fashion Editorial ${i + 1}`,
                  })
                }
                className="group relative overflow-hidden rounded-lg cursor-pointer break-inside-avoid"
              >
                <Image
                  src={src}
                  alt={`Fashion Editorial ${i + 1}`}
                  width={600}
                  height={800}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* ═══════════ CTA ═══════════ */}
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

      <AnimatePresence>
        {activeProject && (
          <ProjectViewer
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClose={() => setLightboxImage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
