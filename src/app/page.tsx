"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import WhyDMSSection from "@/sections/WhyDMSSection";
import LearningModelSection from "@/sections/LearningModelSection";
import OutcomesSection from "@/sections/OutcomesSection";
import ProgramsSection from "@/sections/ProgramsSection";
import FlagshipDiplomaSection from "@/sections/FlagshipDiplomaSection";
import DockAdvantageSection from "@/sections/DockAdvantageSection";
import IndiaToDubaiSection from "@/sections/IndiaToDubaiSection";
import ScholarshipSection from "@/sections/ScholarshipSection";
import SuccessStoriesSection from "@/sections/SuccessStoriesSection";
import FinalCTASection from "@/sections/FinalCTASection";
import Footer from "@/sections/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefilledCourse, setPrefilledCourse] = useState("");

  // Trigger auto-show consultation modal after a short viewing delay.
  useEffect(() => {
    const isModalShownThisSession = sessionStorage.getItem("dms_consultation_auto_shown");
    
    if (!isModalShownThisSession) {
      const timer = setTimeout(() => {
        setModalOpen(true);
        sessionStorage.setItem("dms_consultation_auto_shown", "true");
      }, 9000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenConsultation = (courseName?: string) => {
    if (courseName && typeof courseName === "string") {
      setPrefilledCourse(courseName);
    } else {
      setPrefilledCourse("");
    }
    setModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setModalOpen(false);
    setPrefilledCourse("");
  };

  return (
    <div className="relative min-h-screen bg-[#0A101E] overflow-x-clip selection:bg-accent-gold selection:text-white">
      <div className="relative z-10">
        <Navbar onOpenConsultation={() => handleOpenConsultation()} />
        
        <main className="w-full">
          <HeroSection onOpenConsultation={() => handleOpenConsultation()} />
          <WhyDMSSection />
          <LearningModelSection />
          <OutcomesSection />
          <ProgramsSection onOpenConsultation={handleOpenConsultation} />
          <FlagshipDiplomaSection />
          <DockAdvantageSection />
          <IndiaToDubaiSection />
          <ScholarshipSection onOpenConsultation={handleOpenConsultation} />
          <SuccessStoriesSection />
          <FinalCTASection onOpenConsultation={() => handleOpenConsultation()} />
        </main>

        <Footer />
      </div>

      {/* Floating Action Elements */}
      <WhatsAppButton />
      
      <StickyMobileCTA onOpenConsultation={() => handleOpenConsultation()} />

      {/* Glassmorphic Consultation Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseConsultation}
        initialCourse={prefilledCourse}
      />
      
    </div>
  );
}
