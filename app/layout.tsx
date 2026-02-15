"use client";

import { Syne, DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AnimatePresence } from "framer-motion";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <title>Nelson Taylor | Creative Director &amp; Visual Storyteller</title>
        <meta
          name="description"
          content="Creative Director with 10+ years crafting visual experiences across photography, video, design, and digital marketing. Let's make something unforgettable."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:title" content="Nelson Taylor | Creative Director & Visual Storyteller" />
        <meta property="og:description" content="Creative Director with 10+ years crafting visual experiences across photography, video, design, and digital marketing." />
        <meta property="og:image" content="https://www.nelsontaylorcreative.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nelsontaylorcreative.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nelson Taylor | Creative Director & Visual Storyteller" />
        <meta name="twitter:description" content="Creative Director with 10+ years crafting visual experiences across photography, video, design, and digital marketing." />
        <meta name="twitter:image" content="https://www.nelsontaylorcreative.com/og-image.png" />
      </head>
      <body className="bg-bg text-cream antialiased">
        <div className="grain-overlay" />
        <Navbar />
        <AnimatePresence mode="wait">
          <main>{children}</main>
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  );
}
