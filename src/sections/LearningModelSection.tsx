"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LearningModelSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "LEARN",
      subtitle: "The Masterclass Curriculum",
      description: "Master the tools of the modern media landscape. Gain foundational skills in digital marketing, storytelling, cinematography, creative production, brand positioning, AI workflows, and content creation.",
      listItems: [
        "Advanced SEO & Social Media Algorithms",
        "Storyboarding & Cinematic Composition",
        "Copywriting & Creative Brand Strategy",
        "AI-assisted Content & Design workflows"
      ],
      color: "from-[#F29128] to-[#EB3C4D]",
      accentColor: "#F29128"
    },
    {
      title: "CREATE",
      subtitle: "The Industry Crucible",
      description: "Put theory directly into practice. Working alongside active industry creators and specialists, you will produce real campaigns, shoot client videos, run marketing funnels, and manage actual brand operations.",
      listItems: [
        "Live Production Projects & Ad Shoots",
        "Real Budget Management & Paid Campaigns",
        "Client Strategy Decks & Pitches",
        "Studio Work inside Dock Ecosystem"
      ],
      color: "from-[#EB3C4D] to-[#F29128]",
      accentColor: "#EB3C4D"
    },
    {
      title: "LAUNCH",
      subtitle: "The Professional Runway",
      description: "Step into your career fully formed. Graduate with a vetted, client-approved professional portfolio, direct internship experience, access to our agency networks, and the confidence to lead client campaigns.",
      listItems: [
        "Guaranteed International Internship Pathways",
        "Access to the Dock Talent Network",
        "Portfolio Review by Global Directors",
        "Direct Placement & Freelance Incubator"
      ],
      color: "from-[#EB3C4D] to-[#F29128]",
      accentColor: "#F29128"
    }
  ];

  return (
    <section
      id="learning-model"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0A101E] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title block */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-3 block"
          >
            The Dock Learning Model
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase max-w-3xl mx-auto"
          >
            Built for Action. Not Exams.
          </motion.h2>
        </div>

        {/* Step Selector Horizontal Bar */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 mb-16 relative"
        >
          
          {/* Connector Line behind steps (desktop) */}
          <div className="absolute top-[32px] left-[15%] right-[15%] h-[2px] bg-white/5 hidden md:block" />
          
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className="relative flex flex-col items-center group cursor-pointer z-10 w-full md:w-auto"
            >
              {/* Circle Indicator */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center font-display font-black text-xl transition-all duration-300 ${
                  activeStep === idx
                    ? "bg-white text-black scale-110 shadow-lg shadow-white/10"
                    : "bg-[#0F182E] text-white/50 border border-white/5 group-hover:border-white/20 group-hover:text-white"
                }`}
              >
                0{idx + 1}
              </div>
              
              {/* Step Title */}
              <span
                className={`mt-4 font-display font-extrabold text-lg tracking-wider transition-colors duration-300 ${
                  activeStep === idx ? "text-white" : "text-white/40 group-hover:text-white/75"
                }`}
              >
                {step.title}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Active Content Display Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-[380px] bg-[#0F182E] rounded-[14px] border border-white/5 overflow-hidden flex flex-col md:grid md:grid-cols-12 relative"
        >
          
          {/* Accent border highlight */}
          <div
            className="absolute top-0 left-0 w-full md:w-[6px] h-[6px] md:h-full transition-all duration-500"
            style={{ backgroundColor: steps[activeStep].accentColor }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center"
            >
              <span className="text-xs font-semibold text-accent-gold uppercase tracking-widest mb-2 block">
                {steps[activeStep].subtitle}
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-black tracking-tight text-white mb-6 uppercase">
                {steps[activeStep].title}
              </h3>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-6">
                {steps[activeStep].description}
              </p>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep + "-list"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5 bg-black/40 p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/5 flex flex-col justify-center"
            >
              <h4 className="text-sm font-bold tracking-widest text-white/50 uppercase mb-4">
                What you&apos;ll deliver:
              </h4>
              <ul className="space-y-4">
                {steps[activeStep].listItems.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-accent-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-sm font-medium text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

        </motion.div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-8 py-4 rounded-[10px] bg-[#0F182E]/40 border border-white/5"
          >
            <span className="text-white/50 text-sm font-medium">No simulated projects.</span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
            <span className="text-white/50 text-sm font-medium">No outdated syllabus.</span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
            <span className="text-white font-semibold text-sm">Only real-world experience.</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
