"use client";

import { motion } from "framer-motion";

interface ProgramsSectionProps {
  onOpenConsultation: (courseName?: string) => void;
}

export default function ProgramsSection({ onOpenConsultation }: ProgramsSectionProps) {
  const programs = [
    {
      name: "CRASH COURSE",
      duration: "3 Months",
      target: "For Professionals, Freelancers & Business Owners",
      description: "A fast-track accelerator focused on mastering specific modules. Ideal for updating skills, launching a side business, or taking direct control of your brand marketing.",
      features: [
        "Core digital marketing strategy",
        "Social media creation & management",
        "Basic video editing & asset production",
        "Practical weekend/evening batches available"
      ],
      ctaText: "Apply For Crash Course",
      popular: false,
      courseVal: "Digital Marketing"
    },
    {
      name: "FINISHING SCHOOL",
      duration: "6 Months",
      target: "For Students Aged 13–22",
      description: "Designed to bridge the gap between education and employment. Ideal for young aspiring creators wanting to turn their digital skills into a professional career path.",
      features: [
        "Hands-on studio camera operations",
        "Comprehensive content creation tools",
        "Agency workflow & client briefs",
        "Mentorship by creative directors"
      ],
      ctaText: "Apply For Finishing School",
      popular: false,
      courseVal: "Content Creation"
    },
    {
      name: "DIPLOMA PROGRAM",
      duration: "1 Year",
      target: "India → Dubai → International Internship",
      description: "Our flagship immersive learning experience. Designed for full career transformations. Spend time learning, shooting, and interning globally in two major media hubs.",
      features: [
        "Full syllabus (Marketing + Video + Strategy)",
        "Extended residency pathway in Dubai",
        "Guaranteed international internships",
        "Dock Talent Network placement"
      ],
      ctaText: "Apply For Flagship Diploma",
      popular: true,
      courseVal: "Video Editing"
    }
  ];

  return (
    <section
      id="programs"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0A101E] overflow-hidden"
    >
      {/* Background glow lights */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-orange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-3 block"
          >
            Choose Your Pathway
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase leading-none"
          >
            Programs Built for the Future
          </motion.h2>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {programs.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col p-8 md:p-10 rounded-[14px] bg-[#0F182E] border transition-all duration-300 relative ${
                prog.popular
                  ? "border-accent-gold shadow-[0_10px_30px_rgba(242,145,40,0.08)] scale-100 lg:scale-[1.03]"
                  : "border-white/5 hover:border-white/10"
              }`}
            >
              {/* Popular Badge */}
              {prog.popular && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-gradient-dock text-[10px] font-display font-bold uppercase tracking-widest rounded-full shadow-md text-white animate-pulse-slow">
                  Most Popular
                </div>
              )}

              {/* Card Title */}
              <div className="mb-6">
                <span className="text-xs font-bold text-accent-orange tracking-widest uppercase block mb-1">
                  {prog.duration}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-black text-white uppercase tracking-tight">
                  {prog.name}
                </h3>
                <span className="text-xs text-white/50 block mt-2 font-medium">
                  {prog.target}
                </span>
              </div>

              <p className="text-sm text-white/60 leading-relaxed mb-8">
                {prog.description}
              </p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-white/5 mb-8" />

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {prog.features.map((feat, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-white/80 leading-normal">{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                onClick={() => onOpenConsultation(prog.courseVal)}
                className={`w-full py-4 rounded-full font-display font-bold text-sm text-center transition-all duration-300 ${
                  prog.popular
                    ? "bg-gradient-dock text-white shadow-lg hover:shadow-accent-orange/20 active:scale-98"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 active:scale-98"
                }`}
              >
                {prog.ctaText}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
