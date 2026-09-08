"use client";

import { useState } from "react";
import { birthdayConfig } from "@/config/birthday";
import Balloons from "./Balloons";
import Confetti from "./Confetti";
import CuteMessage from "./CuteMessage";
import PhotoGallery from "./PhotoGallery";

export default function BirthdayPage() {
  const [confetti, setConfetti] = useState(false);

  const celebrate = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 100);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Balloons />
      <Confetti active={confetti} />

      <div className="relative z-10 flex flex-col items-center">
        {/* Hero */}
        <section className="flex min-h-screen w-full flex-col items-center justify-center px-6 text-center">
          <p className="animate-fade-in mb-4 text-lg font-medium text-pink-300">
            A special message for...
          </p>
          <h1 className="animate-slide-up mb-2 bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-200 bg-clip-text text-6xl font-black tracking-tight text-transparent sm:text-8xl">
            {birthdayConfig.name}
          </h1>
          {birthdayConfig.age && (
            <p className="animate-slide-up mb-6 text-2xl text-white/70">
              Turning {birthdayConfig.age} today! 🎂
            </p>
          )}
          <p className="animate-slide-up mb-10 max-w-xl text-2xl font-light text-white/90 sm:text-3xl">
            {birthdayConfig.birthdayMessage}
          </p>
          <a
            href="#message"
            className="animate-bounce-slow rounded-full bg-white/10 px-8 py-3 text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            Scroll down ↓
          </a>
        </section>

        {/* Cute message */}
        <section id="message">
          <CuteMessage
            name="Akanksha"
            message={birthdayConfig.cuteMessage}
            signature={birthdayConfig.cuteMessageSignature}
          />
        </section>

        {/* Photos */}
        <section id="photos" className="flex w-full flex-col items-center py-24">
          <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Celebrate! 🎉
          </h2>
          <PhotoGallery
            photos={birthdayConfig.photos}
            intro={birthdayConfig.photosIntro}
          />
        </section>

        {/* Final message */}
        <section className="flex w-full flex-col items-center px-6 py-24 text-center">
          <button
            onClick={celebrate}
            className="mb-10 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-10 py-4 text-xl font-bold text-white shadow-lg transition hover:scale-105 hover:shadow-pink-500/40 active:scale-95"
          >
            🎉 Celebrate!
          </button>

          <div className="max-w-xl rounded-3xl border border-white/20 bg-gradient-to-br from-pink-500/20 to-purple-600/20 p-10 shadow-2xl backdrop-blur-md">
            <span className="mb-4 block text-5xl">🎂</span>
            <p className="text-2xl font-semibold leading-relaxed text-white">
              {birthdayConfig.finalMessage}
            </p>
            <p className="mt-6 text-lg text-pink-200">
              {birthdayConfig.finalSignature}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
