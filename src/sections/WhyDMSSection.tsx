"use client";

import { motion } from "framer-motion";

export default function WhyDMSSection() {
  const comparisonData = [
    {
      traditional: "Syllabus updated years ago",
      dock: "Curriculum designed in real-time by active industry agencies",
      isPositive: false,
    },
    {
      traditional: "Classes inside closed classrooms with textbooks",
      dock: "Work inside live production houses and creative studios",
      isPositive: true,
    },
    {
      traditional: "Assessments based on exams and theories",
      dock: "Assessments based on client approvals and live campaigns",
      isPositive: true,
    },
    {
      traditional: "Graduation leads to a piece of paper (Certificate)",
      dock: "Graduation leads to a live, professional industry portfolio",
      isPositive: true,
    },
    {
      traditional: "Zero client contact or client management experience",
      dock: "Direct pitches, strategy, and execution with active brands",
      isPositive: true,
    },
    {
      traditional: "Struggle to search for internships and jobs",
      dock: "Direct connection with the Dock Talent Network and Dubai internships",
      isPositive: true,
    },
  ];

  return (
    <section
      id="why-dms"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0F182E] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Context Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold tracking-widest text-accent-orange uppercase mb-4"
            >
              The Education Gap
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase leading-tight mb-6"
            >
              Why Most Media Education <span className="text-accent-orange">Fails</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base text-white/60 leading-relaxed mb-8"
            >
              Students spend years studying media, advertising, and marketing, and graduate without a portfolio, industry experience, client exposure, or professional confidence. 
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg font-medium text-white/90 leading-relaxed mb-8"
            >
              The media industry doesn&apos;t hire certificates. <span className="text-accent-gold">It hires proof.</span>
            </motion.p>
            
            {/* Massive Callout */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-[14px] bg-[#0F182E] border border-white/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/10 rounded-full blur-3xl" />
              <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">The Ultimate Question</p>
              <h3 className="text-3xl md:text-4xl font-display font-extrabold text-gradient-gold-orange leading-none uppercase">
                &quot;What have you created?&quot;
              </h3>
            </motion.div>
          </div>

          {/* Right Column: Comparative Layout */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-left mb-6"
            >
              <span className="text-sm font-bold tracking-wider text-white/40 uppercase">
                The Contrast
              </span>
            </motion.div>

            <div className="space-y-4">
              {comparisonData.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-[10px] bg-[#0F182E]/60 border border-white/5 hover:border-white/10 hover:bg-[#0F182E] transition-all duration-300"
                >
                  {/* Traditional */}
                  <div className="flex items-start space-x-3 pr-2">
                    <svg
                      className="w-5 h-5 text-accent-orange/80 mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <p className="text-sm text-white/50">{item.traditional}</p>
                  </div>

                  {/* Dock */}
                  <div className="flex items-start space-x-3 pl-0 md:pl-4 md:border-l border-white/5">
                    <svg
                      className="w-5 h-5 text-[#25D366] mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm font-semibold text-white/90">{item.dock}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
