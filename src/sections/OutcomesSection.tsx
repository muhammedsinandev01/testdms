"use client";

import { motion } from "framer-motion";

export default function OutcomesSection() {
  const outcomes = [
    {
      title: "Real Client Projects",
      description: "Work directly on active briefs, shoots, and budgets from leading brands instead of simulated classroom homework.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Industry Mentorship",
      description: "Learn side-by-side with working agency directors, strategists, filmmakers, and digital marketers.",
      icon: (
        <svg className="w-6 h-6 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: "Professional Portfolio Development",
      description: "Graduate with a stunning digital showcase containing active campaigns, production videos, and live brand work.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Internship Opportunities",
      description: "Get direct entry pipelines into top media production companies and creative agencies in Kochi and Dubai.",
      icon: (
        <svg className="w-6 h-6 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "AI-Powered Media Training",
      description: "Master the leading generative AI tools for copy, designs, videos, and analytics to work 10x faster and smarter.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h2v-2.243a5 5 0 013.536-8.657z" />
        </svg>
      )
    },
    {
      title: "International Exposure",
      description: "Understand international markets, work with multinational clients, and adapt to global industry standards.",
      icon: (
        <svg className="w-6 h-6 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 012.5 2.5v1.5a2.5 2.5 0 002.5 2.5h.065M9 3.935A9 9 0 0120.065 18a9 9 0 01-11.065-14.065z" />
        </svg>
      )
    },
    {
      title: "India + Dubai Learning Pathway",
      description: "Gain global context by spending parts of your curriculum exploring, shooting, and interning in Dubai.",
      icon: (
        <svg className="w-6 h-6 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    },
    {
      title: "Dock Talent Network Access",
      description: "Join a curated group of media graduates placed directly with top-tier agencies and global creative houses.",
      icon: (
        <svg className="w-6 h-6 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section
      id="outcomes"
      className="relative py-24 md:py-32 px-6 md:px-12 bg-[#0F182E] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-semibold tracking-widest text-accent-gold uppercase mb-3 block"
            >
              The Graduate Advantage
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-5xl font-display font-extrabold tracking-tight uppercase"
            >
              Real Outcomes.<br />
              <span className="text-gradient-gold-orange">Ready for the Industry.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/60 text-sm md:text-base max-w-sm mt-4 md:mt-0 leading-relaxed"
          >
            We don&apos;t focus on grades or theoretical models. We prepare our graduates with active capabilities that media agencies actually pay for.
          </motion.p>
        </div>

        {/* Grid of Outcome Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 rounded-[14px] bg-[#0F182E] border border-white/5 hover:border-white/10 glow-card flex flex-col min-h-[250px] transition-all duration-300 relative overflow-hidden"
            >
              {/* Card Background Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-[10px] bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>

              {/* Card Content */}
              <h3 className="text-lg font-display font-extrabold text-white mb-3 tracking-wide uppercase">
                {item.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-300 mt-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
