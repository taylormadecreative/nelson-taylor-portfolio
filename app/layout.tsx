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
        <title>Nelson Taylor | Creative Director & Visual Storyteller</title>
        <meta
          name="description"
          content="Creative Director with 10+ years crafting visual experiences across photography, video, design, and digital marketing. Let's make something unforgettable."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
