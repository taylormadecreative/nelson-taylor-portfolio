"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { href: "/web-design", label: "Web & UI/UX" },
  { href: "/video", label: "Video / Motion" },
  { href: "/photography", label: "Photography" },
  { href: "/ai-content", label: "AI Content" },
  { href: "/about", label: "About" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/taylormade_creative/",
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@nelsontaylor9165",
    label: "YouTube",
  },
  {
    href: "https://www.linkedin.com/in/taylormademd/",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="section-padding py-20">
        {/* CTA Section */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-xs uppercase tracking-[0.3em] text-gold mb-6"
          >
            Ready to create something?
          </motion.p>
          <motion.a
            href="mailto:taylormademd@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group inline-block"
          >
            <span className="font-display font-black text-4xl md:text-6xl lg:text-7xl text-cream/20 group-hover:text-gold transition-colors duration-500 tracking-tight">
              taylormademd@gmail.com
            </span>
          </motion.a>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <span className="font-display font-black text-lg text-cream tracking-tight">
              TAYLORMADE
            </span>
            <span className="block font-display text-[9px] uppercase tracking-[0.4em] text-gold/60 mb-4">
              Creative
            </span>
            <p className="font-body text-sm text-white/30 max-w-xs leading-relaxed">
              Creative Director with 10+ years crafting visual experiences that
              move people and move needles.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="font-display text-xs uppercase tracking-[0.2em] text-white/30 mb-4 block">
              Navigation
            </span>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-white/40 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="font-display text-xs uppercase tracking-[0.2em] text-white/30 mb-4 block">
              Connect
            </span>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/40 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:8177071291"
                className="font-body text-sm text-white/40 hover:text-gold transition-colors duration-300"
              >
                (817) 707-1291
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20">
            &copy; {new Date().getFullYear()} TaylorMade Creative. All rights
            reserved.
          </p>
          <p className="font-body text-xs text-white/20">
            Arlington, TX
          </p>
        </div>
      </div>
    </footer>
  );
}
