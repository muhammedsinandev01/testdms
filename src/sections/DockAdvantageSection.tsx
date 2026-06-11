"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DockAdvantageSection() {
  const points = [
    {
      title: "Production Projects",
      description: "Direct involvement on live film shoots, studio sessions, sound stages, and post-production suites.",
      bg: "from-[#F29128]/10 to-[#EB3C4D]/10",
      border: "hover:border-[#EB3C4D]/20"
    },
    {
      title: "Brand Campaigns",
      description: "Collaborating with design, content, and paid-media teams to roll out nationwide marketing initiatives.",
      bg: "from-[#F29128]/10 to-[#EB3C4D]/10",
      border: "hover:border-[#EB3C4D]/20"
    },
    {
      title: "Digital Marketing Operations",
      description: "Managing live budgets, setting up advertising accounts, running retargeting funnels, and compiling client reports.",
      bg: "from-[#EB3C4D]/10 to-[#F29128]/10",
      border: "hover:border-[#F29128]/20"
    },
    {
      title: "Content Studios",
      description: "Working inside active social media channels, producing daily short-form reels, vlogs, and podcasts.",
      bg: "from-[#F29128]/10 to-[#EB3C4D]/10",
      border: "hover:border-[#EB3C4D]/20"
    },
    {
      title: "Creative Strategy Teams",
      description: "Pitching brand angles, analyzing competitor strategies, and designing modern creative concepts.",
      bg: "from-[#EB3C4D]/10 to-[#EB3C4D]/10",
      border: "hover:border-[#EB3C4D]/20"
    },
    {
      title: "Client Communications",
      description: "Learning the business side of media by attending client meetings, reviews, calls, and feedback sessions.",
      bg: "from-[#EB3C4D]/10 to-[#F29128]/10",
      border: "hover:border-[#F29128]/20"
    }
  ];

  return (
    <section
      id="advantage"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0A101E] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-3 block"
          >
            The Ecosystem Advantage
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase leading-none max-w-4xl mx-auto"
          >
            Built Inside The <span className="text-gradient-dock">Dock Ecosystem.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/50 text-sm md:text-base max-w-xl mx-auto mt-6 leading-relaxed"
          >
            Dock Media School is not a isolated campus. It lives directly inside a thriving international media and marketing ecosystem.
          </motion.p>
        </div>

        {/* 3x2 Grid for Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`group p-8 rounded-[14px] bg-[#0F182E] border border-white/5 ${pt.border} hover:bg-[#0F182E]/80 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 relative overflow-hidden`}
            >
              {/* Accent colored glow background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${pt.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <h3 className="text-xl font-display font-extrabold text-white mb-3 tracking-wide uppercase relative z-10">
                {pt.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300 relative z-10">
                {pt.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 relative rounded-[14px] overflow-hidden border border-white/10 group aspect-[21/9]"
        >
          <Image
            src="/img/img2.jpeg"
            alt="Colour Changes Everything – Every colour tells a story at Dock Media School"
            fill
            sizes="100vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A101E]/60 via-transparent to-transparent" />
        </motion.div>

        {/* Closing Headline */}
        <div className="mt-20 text-center">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl md:text-3xl font-display font-extrabold text-white uppercase tracking-tight"
          >
            Learn from the industry.<br />
            <span className="text-gradient-gold-orange">Inside the industry.</span>
          </motion.h3>
        </div>

      </div>
    </section>
  );
}
