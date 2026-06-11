"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const showcaseImages = [
  {
    src: "/img/img1.jpeg",
    alt: "Dock Media School – From Reels to Big Screen, cinematic production visual",
  },
  {
    src: "/img/img2.jpeg",
    alt: "Dock Media School – Colour Changes Everything, creative diversity visual",
  },
  {
    src: "/img/img3.jpeg",
    alt: "Dock Media School – Direct Your Destiny, filmmaking and directing visual",
  },
  {
    src: "/img/img4.jpeg",
    alt: "Dock Media School – When Imagination Has No Gravity, creative tools visual",
  },
  {
    src: "/img/img5.jpeg",
    alt: "Dock Media School – Skills Speak Louder Than Degrees, portfolio visual",
  },
];

export default function ScrollImageShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-[#0A101E] px-6 py-20 md:px-12 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent-gold/10 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-6 md:gap-6">
        {showcaseImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 80, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative overflow-hidden rounded-[14px] border border-white/10 bg-[#0F182E] shadow-2xl shadow-black/30 ${
              index === 0 || index === 4
                ? "md:col-span-3"
                : index === 2
                  ? "md:col-span-2 md:row-span-2"
                  : "md:col-span-2"
            }`}
          >
            <div className={index === 2 ? "aspect-[4/5] md:h-full" : "aspect-[4/5] md:aspect-[16/11]"}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
