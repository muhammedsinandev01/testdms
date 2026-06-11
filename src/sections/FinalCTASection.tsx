"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface FinalCTASectionProps {
  onOpenConsultation: () => void;
}

export default function FinalCTASection({ onOpenConsultation }: FinalCTASectionProps) {
  return (
    <section
      id="final-cta"
      className="relative min-h-screen w-full flex items-center justify-center py-24 md:py-32 px-6 md:px-12 bg-[#0A101E] overflow-hidden"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/img3.jpeg"
          alt="Direct Your Destiny – The next great story won't tell itself"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlays for text legibility */}
      <div className="absolute inset-0 bg-[#0A101E]/80 z-[1]" />
      <div className="absolute inset-0 bg-radial-gradient from-[#EB3C4D]/8 via-transparent to-black pointer-events-none z-[2]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-[3]" />

      <div className="relative max-w-5xl mx-auto text-center z-20 flex flex-col items-center">
        
        {/* Subtitle tag */}
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs sm:text-sm font-semibold tracking-widest text-accent-gold uppercase mb-6"
        >
          Your Future Begins Now
        </motion.span>

        {/* Big Headline */}
        <motion.h2
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold leading-none tracking-tight uppercase max-w-4xl text-white mb-8"
        >
          Don't Wait To Enter The Media Industry.<br />
          <span className="text-gradient-dock">Start Building Your Place In It.</span>
        </motion.h2>

        {/* Join message */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl md:text-2xl font-display font-extrabold text-white/90 uppercase tracking-widest mb-4"
        >
          Join Dock Media School.
        </motion.p>

        {/* Action terms */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center space-x-4 md:space-x-6 text-sm md:text-base font-semibold tracking-widest text-white/60 uppercase mb-12"
        >
          <span>Learn</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
          <span>Create</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
          <span>Launch</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-10 py-5 rounded-full font-display font-bold text-base text-white bg-gradient-dock hover:scale-105 active:scale-98 transition-all shadow-[0_0_35px_rgba(235,60,77,0.3)] hover:shadow-[0_0_45px_rgba(235,60,77,0.45)] duration-300"
          >
            Apply Now
          </button>
          
          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-10 py-5 rounded-full font-display font-bold text-base text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-98 transition-all duration-300"
          >
            Book Free Consultation
          </button>
        </motion.div>

      </div>
    </section>
  );
}
