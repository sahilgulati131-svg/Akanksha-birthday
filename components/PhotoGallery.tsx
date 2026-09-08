"use client";

import Image from "next/image";
import { useState } from "react";

type Photo = {
  src: string;
  caption?: string;
};

export default function PhotoGallery({
  photos,
  intro,
}: {
  photos: Photo[];
  intro: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const activePhoto = photos[activeIndex];

  return (
    <section className="w-full max-w-2xl px-4">
      <div className="mb-6 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-300/80">
          A little gallery
        </p>
        <p className="mt-3 text-lg leading-relaxed text-white/90">{intro}</p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md">
        <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
          {!imageErrors[activeIndex] ? (
            <Image
              src={activePhoto.src}
              alt={activePhoto.caption ?? `Photo ${activeIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 672px"
              onError={() =>
                setImageErrors((prev) => ({ ...prev, [activeIndex]: true }))
              }
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-pink-500/30 to-purple-600/30 p-8 text-center">
              <span className="text-6xl">🎈</span>
              <p className="text-white/70">Image couldn&apos;t load</p>
            </div>
          )}
        </div>

        {activePhoto.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-6 py-5">
            <p className="text-lg font-medium text-white">{activePhoto.caption}</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        <button
          onClick={() =>
            setActiveIndex((i) => (i - 1 + photos.length) % photos.length)
          }
          className="rounded-full bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
          aria-label="Previous photo"
        >
          ←
        </button>

        <div className="flex gap-2">
          {photos.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === activeIndex
                  ? "w-8 bg-pink-400"
                  : "w-2.5 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setActiveIndex((i) => (i + 1) % photos.length)}
          className="rounded-full bg-white/10 px-4 py-2 text-white transition hover:bg-white/20"
          aria-label="Next photo"
        >
          →
        </button>
      </div>
    </section>
  );
}
