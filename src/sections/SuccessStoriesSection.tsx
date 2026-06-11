"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const stories = [
  {
    name: "Arun Kurian",
    role: "Creative Director",
    course: "Diploma Program (1 Year)",
    achievement: "Placed at Dock Worldwide, Dubai Office",
    quote: "Before joining Dock, I only had theoretical knowledge. Within 6 months, I was shooting commercial assets for global brands. The Dubai internship changed my career trajectory completely.",
    portfolioItem: "Lead Cinematographer, Dubai Tourism Campaign",
    avatarGradient: "from-[#F29128] to-[#EB3C4D]"
  },
  {
    name: "Gopika Nair",
    role: "Social Media Strategist",
    course: "Finishing School (6 Months)",
    achievement: "Handles Socials for 5+ Premium Clients",
    quote: "Dock doesn't teach from books. They gave me a budget, active social media channels, and told me to produce results. I graduated with actual campaigns on my portfolio that speak for themselves.",
    portfolioItem: "Growth Lead, Kochi Fashion Week Campaign",
    avatarGradient: "from-[#F29128] to-[#EB3C4D]"
  },
  {
    name: "Abhijith V.S.",
    role: "Performance Marketer",
    course: "Crash Course (3 Months)",
    achievement: "Scaled Freelance Agency to $3k/month",
    quote: "I was running a small agency but lacked confidence. The 3-month course at Dock gave me exposure to actual agency operations, client communication, and advanced performance marketing scripts.",
    portfolioItem: "Ad Strategy, Regional E-Commerce Scaleup",
    avatarGradient: "from-[#EB3C4D] to-[#F29128]"
  },
  {
    name: "Meera Joseph",
    role: "Video Specialist & Editor",
    course: "Diploma Program (1 Year)",
    achievement: "Independent Editor for International Creators",
    quote: "The editing suites and studio equipment at Dock are state-of-the-art. Working side-by-side with professional filmmakers taught me pacing, narrative flow, and high-end color grading techniques.",
    portfolioItem: "Post-Production Lead, Global Tech Launch Video",
    avatarGradient: "from-[#F29128] to-[#EB3C4D]"
  }
];

export default function SuccessStoriesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  return (
    <section
      id="stories"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0F182E] border-t border-white/5 overflow-hidden"
    >
      {/* Background graphic */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-3 block"
            >
              Student Success Stories
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase"
            >
              The Proof is in<br />
              <span className="text-gradient-gold-orange">Our Graduates.</span>
            </motion.h2>
          </div>

          {/* Nav buttons */}
          <div className="flex items-center space-x-4 mt-6 md:mt-0">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer"
              aria-label="Previous story"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-white active:scale-95 transition-all cursor-pointer"
              aria-label="Next story"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden min-h-[380px] bg-[#0F182E] rounded-[14px] border border-white/5 p-8 md:p-12">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
            >
              {/* Left Column: Student info and quote */}
              <div className="md:col-span-8">
                <span className="text-xs font-semibold text-accent-gold uppercase tracking-widest mb-3 block">
                  {stories[currentIndex].course}
                </span>

                {/* Big Quote */}
                <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-6">
                  &ldquo;{stories[currentIndex].quote}&rdquo;
                </p>

                {/* Name & Role */}
                <div className="flex items-center space-x-4">
                  {/* Text Avatar placeholder */}
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${stories[currentIndex].avatarGradient} flex items-center justify-center font-display font-black text-white text-base shadow-md`}>
                    {stories[currentIndex].name.split(" ")[0][0]}
                    {stories[currentIndex].name.split(" ").length > 1 && stories[currentIndex].name.split(" ")[1][0]}
                  </div>

                  <div>
                    <h4 className="text-lg font-display font-bold text-white leading-none">
                      {stories[currentIndex].name}
                    </h4>
                    <span className="text-xs text-white/50 block mt-1">
                      {stories[currentIndex].role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Outcomes & Deliverables (Video/Asset ready) */}
              <div className="md:col-span-4 bg-black/40 border border-white/5 rounded-[10px] p-6 md:p-8 flex flex-col h-full justify-center">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest block mb-4">
                  Career Outcome
                </span>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-accent-orange uppercase tracking-wider mb-1">
                    Key Achievement
                  </h5>
                  <p className="text-base text-white/90 font-display font-extrabold leading-tight">
                    {stories[currentIndex].achievement}
                  </p>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-accent-gold uppercase tracking-wider mb-1">
                    Portfolio Work
                  </h5>
                  <p className="text-sm text-white/70 italic">
                    {stories[currentIndex].portfolioItem}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
