"use client";

import { motion } from "framer-motion";

export default function IndiaToDubaiSection() {
  return (
    <section
      id="india-dubai"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0F182E] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Context Content */}
          <div className="lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold tracking-widest text-accent-orange uppercase mb-4 block"
            >
              Global Pathway
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase leading-tight mb-6"
            >
              One Learning Journey.<br />
              Two Countries.<br />
              <span className="text-gradient-gold-orange">Endless Possibilities.</span>
            </motion.h2>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 font-display font-black text-sm text-accent-gold mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase mb-1">Begin In India</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Build your foundational core inside our Kerala/Kochi ecosystems. Master photography, cinematography, SEO strategy, branding, copywriting, and tool workflows.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 font-display font-black text-sm text-accent-orange mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase mb-1">Expand In Dubai</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Spend semesters exploring Dubai's premium agencies and content landscapes. Engage directly with international clients, shoot on location, and pitch ideas.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start space-x-4"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 font-display font-black text-sm text-accent-gold mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase mb-1">Global Launch</h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Complete your pathway with international internship exposure, professional branding, client portfolios, and entrance to global agencies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Interactive Route Animation */}
          <div className="lg:col-span-7 flex items-center justify-center relative min-h-[350px] bg-[#0F182E]/40 border border-white/5 rounded-[14px] p-8 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-accent-orange/5 rounded-full blur-[100px] pointer-events-none" />

            {/* SVG Interactive Canvas */}
            <svg
              className="w-full h-full max-w-[500px] aspect-[4/3] relative z-10"
              viewBox="0 0 400 300"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* World coordinates guide curve */}
              <motion.path
                d="M80,220 C140,140 260,140 320,100"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Animated flight arc */}
              <motion.path
                d="M80,220 C140,140 260,140 320,100"
                stroke="url(#route-gradient)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />

              {/* Dotted tracer line overlay */}
              <motion.path
                d="M80,220 C140,140 260,140 320,100"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
                initial={{ pathOffset: 0 }}
                animate={{ pathOffset: -20 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />

              {/* India Node (Kochi/India) */}
              <g className="cursor-pointer">
                <circle cx="80" cy="220" r="14" fill="#0F182E" stroke="#F29128" strokeWidth="2" />
                <circle cx="80" cy="220" r="6" fill="#F29128" />
                {/* Ping rings */}
                <circle cx="80" cy="220" r="24" fill="none" stroke="#F29128" strokeWidth="1" className="animate-ping origin-center opacity-40" />
                <text x="80" y="250" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-space-grotesk)" fontWeight="bold" letterSpacing="1">INDIA</text>
                <text x="80" y="262" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">Kochi Hub</text>
              </g>

              {/* Dubai Node */}
              <g className="cursor-pointer">
                <circle cx="320" cy="100" r="14" fill="#0F182E" stroke="#EB3C4D" strokeWidth="2" />
                <circle cx="320" cy="100" r="6" fill="#EB3C4D" />
                {/* Ping rings */}
                <circle cx="320" cy="100" r="24" fill="none" stroke="#EB3C4D" strokeWidth="1" className="animate-ping origin-center opacity-40" />
                <text x="320" y="70" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="var(--font-space-grotesk)" fontWeight="bold" letterSpacing="1">DUBAI</text>
                <text x="320" y="82" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="9">Media City</text>
              </g>

              {/* Definitions */}
              <defs>
                <linearGradient id="route-gradient" x1="80" y1="220" x2="320" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#F29128" />
                  <stop offset="100%" stopColor="#EB3C4D" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
        </div>
      </div>
    </section>
  );
}
