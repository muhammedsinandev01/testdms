"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-black overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/img3.jpeg"
          alt="Direct Your Destiny – Dock Media School"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      {/* Overlays for text legibility */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.92)_100%)]" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/30 via-black/40 to-[#0A101E]" />

      {/* Content */}
      <div className="relative z-20 flex min-h-screen w-full items-center justify-center px-6 pt-24 pb-16 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="mb-5 block text-xs font-semibold tracking-widest text-accent-gold uppercase md:text-sm">
              India&apos;s Premier Media Institution
            </span>
            <h1 className="max-w-5xl text-5xl font-display font-black leading-none text-white uppercase sm:text-7xl md:text-8xl">
              Dock Media School
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-6 max-w-4xl text-4xl font-display font-extrabold leading-none text-white uppercase sm:text-6xl md:text-7xl">
              From Your First Project<br />
              <span className="text-gradient-gold-orange">To Your First Paycheque.</span>
            </h2>

            <p className="mb-6 max-w-2xl text-lg font-semibold text-white/90 sm:text-xl md:text-2xl">
              A Professional Media Institution Built Inside The Industry.
            </p>

            <p className="mb-10 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
              Not inside classrooms. Not inside textbooks. Inside real production houses, real campaigns, real brands, and real client work. Dock Media School is where aspiring creators, marketers, filmmakers, designers, and media professionals learn by creating, producing, and delivering actual work that matters.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-6"
            >
              <button
                onClick={onOpenConsultation}
                className="w-full rounded-full bg-gradient-dock px-8 py-4 font-display text-base font-bold text-white shadow-[0_0_30px_rgba(235,60,77,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(235,60,77,0.4)] active:scale-98 sm:w-auto"
              >
                Apply Now
              </button>
              <button
                onClick={onOpenConsultation}
                className="w-full rounded-full border border-white/10 bg-white/5 px-8 py-4 font-display text-base font-bold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 active:scale-98 sm:w-auto"
              >
                Book Free Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1"
      >
        <span className="text-[10px] tracking-widest text-white/40 uppercase">Scroll</span>
        <svg className="h-5 w-5 animate-bounce text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
