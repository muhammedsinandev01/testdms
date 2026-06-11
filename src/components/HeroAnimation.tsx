"use client";

import { MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface HeroAnimationProps {
  scrollProgress: MotionValue<number>;
}

const TOTAL_FRAMES = 240;

function getFrameSrc(frame: number) {
  return `/img/hero/ezgif-frame-${String(frame).padStart(3, "0")}.webp`;
}

function drawCoverImage(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  width: number,
  height: number
) {
  if (!img.complete || img.naturalWidth === 0) return;

  ctx.clearRect(0, 0, width, height);

  const imgRatio = img.naturalWidth / img.naturalHeight;
  const canvasRatio = width / height;
  let drawWidth = width;
  let drawHeight = height;
  let offsetX = 0;
  let offsetY = 0;

  if (imgRatio > canvasRatio) {
    drawWidth = height * imgRatio;
    offsetX = (width - drawWidth) / 2;
  } else {
    drawHeight = width / imgRatio;
    offsetY = (height - drawHeight) / 2;
  }

  ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
}

export default function HeroAnimation({ scrollProgress }: HeroAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const latestProgressRef = useRef(0);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let disposed = false;

    const getCanvasContext = () => {
      const canvas = canvasRef.current;
      if (!canvas) return null;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      const pixelWidth = Math.floor(width * dpr);
      const pixelHeight = Math.floor(height * dpr);

      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { ctx, width, height };
    };

    const findLoadedFrame = (targetFrame: number) => {
      for (let frame = targetFrame; frame >= 1; frame--) {
        if (imagesRef.current[frame]) return imagesRef.current[frame];
      }

      for (let frame = targetFrame + 1; frame <= TOTAL_FRAMES; frame++) {
        if (imagesRef.current[frame]) return imagesRef.current[frame];
      }

      return null;
    };

    const renderProgress = (progress: number) => {
      latestProgressRef.current = progress;

      const canvasContext = getCanvasContext();
      if (!canvasContext) return;

      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const targetFrame = Math.max(
        1,
        Math.min(TOTAL_FRAMES, Math.round(clampedProgress * (TOTAL_FRAMES - 1)) + 1)
      );
      const image = findLoadedFrame(targetFrame);

      if (image) {
        drawCoverImage(canvasContext.ctx, image, canvasContext.width, canvasContext.height);
      }
    };

    const loadFrame = (frame: number) =>
      new Promise<HTMLImageElement>((resolve) => {
        const img = new Image();
        img.src = getFrameSrc(frame);
        img.onload = () => resolve(img);
        img.onerror = () => resolve(img);
      });

    const preloadFrames = async () => {
      const firstFrame = await loadFrame(1);
      if (disposed) return;

      imagesRef.current[1] = firstFrame;
      setIsReady(true);
      setLoadingProgress(1);
      renderProgress(latestProgressRef.current);

      const restFrames = Array.from({ length: TOTAL_FRAMES - 1 }, (_, index) => index + 2);
      let loadedCount = 1;

      await Promise.all(
        restFrames.map(async (frame) => {
          const image = await loadFrame(frame);
          if (disposed) return;

          imagesRef.current[frame] = image;
          loadedCount += 1;
          setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));

          const currentFrame =
            Math.round(latestProgressRef.current * (TOTAL_FRAMES - 1)) + 1;
          if (Math.abs(currentFrame - frame) <= 1) {
            renderProgress(latestProgressRef.current);
          }
        })
      );
    };

    const unsubscribe = scrollProgress.on("change", renderProgress);

    const handleResize = () => {
      renderProgress(latestProgressRef.current);
    };

    window.addEventListener("resize", handleResize);
    preloadFrames();

    return () => {
      disposed = true;
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [scrollProgress]);

  return (
    <div className="absolute inset-0 h-full w-full bg-[#0A101E]">
      {!isReady && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0A101E] transition-opacity duration-500">
          <div className="mb-4 h-16 w-16 rounded-full border-2 border-white/10 border-t-accent-gold animate-spin" />
          <p className="text-xs font-display tracking-widest text-white/50 uppercase">
            Loading Scroll Intro {loadingProgress}%
          </p>
        </div>
      )}

      <canvas
        ref={canvasRef}
        className="block h-full w-full select-none object-cover"
      />
    </div>
  );
}
