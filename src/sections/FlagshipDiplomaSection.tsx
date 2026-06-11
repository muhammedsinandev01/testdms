"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FlagshipDiplomaSection() {
  const points = [
    {
      title: "Vetted Professional Portfolio",
      description: "A digital showcase containing actual agency projects, brand strategy decks, ad-shoots, and marketing campaigns.",
    },
    {
      title: "Direct Client Experience",
      description: "Documented history of managing active campaigns, pitches, budgets, and operational clients.",
    },
    {
      title: "Real Industry Exposure",
      description: "Continuous workflow inside active production studios, editing suites, and digital marketing war rooms.",
    },
    {
      title: "Guaranteed International Internship",
      description: "Professional training and residency pathways inside major media capitals like Dubai.",
    },
    {
      title: "Active Professional Network",
      description: "Direct mentorship, guidance, and project pipelines with directors, managers, and creative leads.",
    },
  ];

  return (
    <section
      id="flagship-diploma"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0F182E] border-t border-white/5 overflow-hidden"
    >
      {/* Background decoration elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-dock opacity-5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Headline */}
        <div className="mb-16 md:mb-20 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold tracking-widest text-accent-orange uppercase mb-4 block"
          >
            The Flagship Difference
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase leading-tight max-w-3xl"
          >
            Most students graduate with certificates.<br />
            <span className="text-gradient-gold-orange">Our Diploma students graduate with:</span>
          </motion.h2>
        </div>

        {/* Vertical Staggered Timeline */}
        <div className="space-y-8 relative">
          
          {/* Vertical line behind points */}
          <div className="absolute top-2 bottom-2 left-6 md:left-8 w-[2px] bg-white/5" />

          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start space-x-6 md:space-x-8 relative group"
            >
              {/* Point Indicator Bullet */}
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0F182E] border border-white/5 group-hover:border-white/10 group-hover:scale-105 flex items-center justify-center font-display font-black text-sm md:text-base text-accent-gold transition-all duration-300 z-10 shrink-0 shadow-lg">
                0{idx + 1}
              </div>

              {/* Point Content */}
              <div className="pt-2 md:pt-4">
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-white mb-2 uppercase group-hover:text-accent-gold transition-colors duration-300">
                  {pt.title}
                </h3>
                <p className="text-sm md:text-base text-white/50 leading-relaxed max-w-2xl">
                  {pt.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Highlight with Image */}
        <div className="mt-20 md:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Image Card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[14px] overflow-hidden border border-white/10 group min-h-[320px] md:min-h-[380px]"
            >
              <Image
                src="/img/img5.jpeg"
                alt="Skills Speak Louder Than Degrees – Build a portfolio that opens doors"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            {/* Text Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 md:p-12 rounded-[14px] bg-[#0F182E] border border-white/5 relative overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-gradient-dock opacity-5 blur-3xl pointer-events-none" />
              
              <p className="text-xs font-semibold text-accent-gold uppercase tracking-widest mb-3 relative z-10">The Transformation</p>
              <h3 className="text-2xl md:text-4xl font-display font-black text-white uppercase leading-tight tracking-tight max-w-3xl mx-auto relative z-10">
                &quot;A complete transformation from learner to media professional.&quot;
              </h3>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
