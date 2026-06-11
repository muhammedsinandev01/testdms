"use client";

import Image from "next/image";

export default function Footer() {
  const socialLinks = {
    instagram: "https://www.instagram.com/p/DZFWU0pn3f_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    facebook: "https://www.facebook.com/share/p/1EercFqQGJ/",
    whatsapp: "https://wa.me/918848332909?text=Hi!%20I'm%20interested%20in%20Dock%20Media%20School.",
    mail: "mailto:mediaschooldock@gmail.com",
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-[#0A101E] border-t border-white/5 pt-16 pb-24 md:pb-12 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Image
              src="/img/logo_v2.png"
              alt="Dock Media School Logo"
              width={250}
              height={100}
              className="w-auto h-16 md:h-24 object-contain mb-6"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-6">
              Dock Media School is a professional media institution built inside the active industry, providing real-world capabilities in digital marketing, content creation, video production, and strategy.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {/* Instagram */}
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-white/20 text-white/60 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-white/20 text-white/60 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Facebook Link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-white/20 text-white/60 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="WhatsApp Link"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2 131.5 2 253.9c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.8-99.5 221.9-221.9 0-59.3-23.1-115.1-65-157.1zM223.9 438.7h-.1c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.8 184.6-186.5 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.5-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.5-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
              </a>

              {/* Mail */}
              <a
                href={socialLinks.mail}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/5 hover:border-white/20 text-white/60 hover:text-white flex items-center justify-center transition-all duration-300"
                aria-label="Email Dock Media School"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Col */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#why-dms" onClick={(e) => handleLinkClick(e, "#why-dms")} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  Why DMS
                </a>
              </li>
              <li>
                <a href="#learning-model" onClick={(e) => handleLinkClick(e, "#learning-model")} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  Learning Model
                </a>
              </li>
              <li>
                <a href="#programs" onClick={(e) => handleLinkClick(e, "#programs")} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  Programs
                </a>
              </li>
              <li>
                <a href="#india-dubai" onClick={(e) => handleLinkClick(e, "#india-dubai")} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  India to Dubai
                </a>
              </li>
              <li>
                <a href="#scholarship" onClick={(e) => handleLinkClick(e, "#scholarship")} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                  Scholarship
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-6">
              Reach Out
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/50">
                <svg className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  Dock Media School, Kochi Hub,<br />
                  Kerala, India
                </span>
              </li>

              <li className="flex items-start space-x-3 text-sm text-white/50">
                <svg className="w-5 h-5 text-accent-orange mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 884 833 2909</span>
              </li>

              <li className="flex items-start space-x-3 text-sm text-white/50">
                <svg className="w-5 h-5 text-accent-gold mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={socialLinks.mail} className="hover:text-white transition-colors">
                  mediaschooldock@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 text-center md:text-left">
            &copy; {new Date().getFullYear()} Dock Media School. All Rights Reserved.
          </p>
          <div className="flex items-center space-x-6">
            <span className="text-xs text-white/30">Built Inside the Industry</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
