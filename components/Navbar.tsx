"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/web-design", label: "Web & UI/UX" },
  { href: "/video", label: "Video / Motion" },
  { href: "/photography", label: "Photography" },
  { href: "/ai-content", label: "AI Content" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/80 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between section-padding py-5">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <span className="font-display font-black text-xl tracking-tight text-cream group-hover:text-gold transition-colors duration-300">
                TAYLORMADE
              </span>
              <span className="block font-display text-[10px] uppercase tracking-[0.4em] text-gold/60">
                Creative
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:taylormademd@gmail.com"
              className="ml-4 px-6 py-2.5 border border-gold/40 text-gold font-display text-xs uppercase tracking-[0.2em] hover:bg-gold hover:text-bg transition-all duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-7 h-[2px] bg-cream origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-[2px] bg-gold"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-7 h-[2px] bg-cream origin-center"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-2xl flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    className={`font-display font-bold text-3xl tracking-tight ${
                      pathname === link.href
                        ? "text-gold"
                        : "text-cream/60 hover:text-cream"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                href="mailto:taylormademd@gmail.com"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.5 }}
                className="mt-4 px-8 py-3 border border-gold/40 text-gold font-display text-sm uppercase tracking-[0.2em] hover:bg-gold hover:text-bg transition-all duration-300"
              >
                Let&apos;s Talk
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
