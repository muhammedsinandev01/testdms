"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ScholarshipSectionProps {
  onOpenConsultation: (courseName?: string) => void;
}

export default function ScholarshipSection({ onOpenConsultation }: ScholarshipSectionProps) {
  return (
    <section
      id="scholarship"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0A101E] border-t border-white/5 overflow-hidden"
    >
      {/* Background glow and lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-dock opacity-5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-4 block"
        >
          Social Impact Initiative
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight uppercase leading-tight max-w-3xl mx-auto mb-6"
        >
          Talent Should Never Be Limited By Circumstances.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto mb-6"
        >
          The Dock Social Scholarship supports ambitious students who deserve an opportunity to build a future in media. We believe that creative potential, storytelling capability, and commercial drive should never be determined by financial background.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-10"
        >
          Potential is evenly distributed. Opportunity is not. We are changing that.
        </motion.p>

        {/* Visual Accent Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[14px] overflow-hidden border border-white/10 group max-w-2xl mx-auto aspect-[4/5] mb-10"
        >
          <Image
            src="/img/img4.jpeg"
            alt="When Imagination Has No Gravity – Creators don't wait for the right environment, they build it"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A101E]/50 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => onOpenConsultation("Digital Marketing")} // Opens consultation with default selected course
            className="px-8 py-4 rounded-full font-display font-bold text-base text-white bg-gradient-dock hover:scale-105 active:scale-98 transition-all shadow-lg hover:shadow-accent-orange/20 duration-300"
          >
            Apply For Scholarship
          </button>
        </motion.div>
      </div>
    </section>
  );
}
