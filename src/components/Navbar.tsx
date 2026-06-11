"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Why DMS", href: "#why-dms" },
    { name: "Learning Model", href: "#learning-model" },
    { name: "Outcomes", href: "#outcomes" },
    { name: "Programs", href: "#programs" },
    { name: "Advantage", href: "#advantage" },
    { name: "India to Dubai", href: "#india-dubai" },
    { name: "Scholarship", href: "#scholarship" },
    { name: "Stories", href: "#stories" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-1.5 md:py-2 bg-[#0A101E]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20"
          : "py-2.5 md:py-3.5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")} className="relative z-55 flex items-center">
          <Image
            src="/img/logo_v2.png"
            alt="Dock Media School Logo"
            width={250}
            height={100}
            className="w-auto h-[48px] md:h-[58px] object-contain hover:scale-105 transition-transform duration-300"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenConsultation}
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-dock overflow-hidden group hover:shadow-[0_0_20px_rgba(242,145,40,0.4)] transition-all duration-300"
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden relative z-55 p-2 text-white/80 hover:text-white"
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span
              className={`h-[2px] bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "w-6 rotate-45 translate-y-[9px]" : "w-6"
              }`}
            />
            <span
              className={`h-[2px] bg-white rounded-full transition-all duration-200 ${
                mobileMenuOpen ? "w-0 opacity-0" : "w-4"
              }`}
            />
            <span
              className={`h-[2px] bg-white rounded-full transition-all duration-300 ${
                mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[9px]" : "w-5"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 bg-[#0A101E] z-50 transition-all duration-500 flex flex-col justify-center px-10 md:px-20 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-6 text-left">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-2xl md:text-3xl font-display font-bold text-white/80 hover:text-white transition-colors duration-200"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenConsultation();
            }}
            className="w-full text-center py-4 mt-8 rounded-full text-base font-semibold text-white bg-gradient-dock"
          >
            Apply Now
          </button>
        </div>
      </div>
    </nav>
  );
}
