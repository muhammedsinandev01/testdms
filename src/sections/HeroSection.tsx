"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textSectionRef = useRef<HTMLElement>(null);
  const frameCount = 240;

  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Track scroll progress of the text section for the scroll-linked animation
  const { scrollYProgress } = useScroll({
    target: textSectionRef,
    offset: ["start end", "center center"]
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  const headerY = useTransform(scrollYProgress, [0, 0.45], [60, 0]);

  const h2Opacity = useTransform(scrollYProgress, [0.2, 0.65], [0, 1]);
  const h2Y = useTransform(scrollYProgress, [0.2, 0.65], [60, 0]);

  const btnOpacity = useTransform(scrollYProgress, [0.45, 0.85], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.45, 0.85], [40, 0]);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new window.Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/img/hero/ezgif-frame-${frameNum}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImagesLoaded(true);
        } else if (i === 1) {
          // Trigger initial render when first image loads
          setImagesLoaded(true); 
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, []);

  // Native scroll tracking and canvas rendering
  useEffect(() => {
    if (!imagesLoaded) return;
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const render = (index: number) => {
      let targetIndex = Math.round(index);
      let img = imagesRef.current[targetIndex];
      
      // Fallback to the nearest loaded frame if the current one isn't ready
      if (!img || !img.complete) {
        for (let i = targetIndex; i >= 0; i--) {
          if (imagesRef.current[i] && imagesRef.current[i].complete) {
            img = imagesRef.current[i];
            break;
          }
        }
      }

      if (img && img.complete) {
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        } else {
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    const resizeCanvas = () => {
      if (containerRef.current && canvas) {
        canvas.width = containerRef.current.clientWidth;
        canvas.height = containerRef.current.clientHeight;
        handleScroll(); // re-render at current scroll
      }
    };

    const handleScroll = () => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      
      // We want the scroll progress while the sticky container is pinned.
      // The section height is 300vh, so scrollable distance is 200vh.
      const scrollableDistance = section.clientHeight - window.innerHeight;
      
      let progress = 0;
      if (sectionTop <= 0) {
        progress = Math.min(1, Math.abs(sectionTop) / scrollableDistance);
      }
      
      const frame = progress * (frameCount - 1);
      render(frame);
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial calls
    resizeCanvas();
    handleScroll();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [imagesLoaded]);

  return (
    <>
      {/* Animation Section - Clean and No Text */}
      <section
        id="hero-animation"
        ref={sectionRef}
        className="relative w-full bg-black h-[300vh]"
      >
        <div ref={containerRef} className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-black">
          <canvas
            ref={canvasRef}
            className="h-full w-full object-cover"
          />
          {/* Subtle overlay for better blending at the bottom */}
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black" />
          
          {/* Scroll indicator */}
          <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1">
            <span className="text-[10px] tracking-widest text-white/40 uppercase">Scroll</span>
            <svg className="h-5 w-5 animate-bounce text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Hero Content Section - Shown AFTER the animation */}
      <section
        id="hero-content"
        ref={textSectionRef}
        className="relative min-h-[100dvh] w-full bg-black flex items-center justify-center px-6 py-24 md:px-12"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/img/img1.jpeg"
            alt="Dock Media School Campus"
            className="h-full w-full object-cover opacity-100"
          />
        </div>

        {/* Background gradient from the previous section to text section */}
        <div className="absolute inset-0 z-[0] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,rgba(0,0,0,1)_100%)] pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black via-black/80 to-[#0F182E] pointer-events-none" />

        <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center text-center">
          <motion.div
            style={{ opacity: headerOpacity, y: headerY }}
            className="mb-8"
          >
            <span className="mb-5 block text-xs font-semibold tracking-widest text-accent-gold uppercase md:text-sm">
              India&apos;s Premier Media Institution
            </span>
            <h1 className="max-w-5xl text-3xl font-display font-black leading-none text-white uppercase sm:text-6xl md:text-7xl">
              Dock Media School
            </h1>
          </motion.div>

          <motion.div
            style={{ opacity: h2Opacity, y: h2Y }}
            className="flex flex-col items-center"
          >
            <h2 className="mb-6 max-w-4xl text-3xl font-display font-extrabold leading-none text-white uppercase sm:text-5xl md:text-6xl">
              From Your First Project<br />
              <span className="text-gradient-gold-orange">To Your First Paycheque.</span>
            </h2>

            <p className="mb-6 max-w-2xl text-lg font-semibold text-white/90 sm:text-xl md:text-2xl">
              A Professional Media Institution Built Inside The Industry.
            </p>

            <p className="mb-10 max-w-3xl text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
              Not inside classrooms. Not inside textbooks. Inside real production houses, real campaigns, real brands, and real client work. Dock Media School is where aspiring creators, marketers, filmmakers, designers, and media professionals learn by creating, producing, and delivering actual work that matters.
            </p>

            <motion.div
              style={{ opacity: btnOpacity, y: btnY }}
              className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:gap-6"
            >
              <button
                onClick={onOpenConsultation}
                className="w-full rounded-full bg-gradient-dock px-8 py-4 font-display text-base font-bold text-white shadow-[0_0_30px_rgba(235,60,77,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(235,60,77,0.4)] active:scale-98 sm:w-auto"
              >
                Apply Now
              </button>
              <button
                onClick={onOpenConsultation}
                className="w-full rounded-full border border-white/10 bg-white/5 px-8 py-4 font-display text-base font-bold text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10 active:scale-98 sm:w-auto"
              >
                Book Free Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
