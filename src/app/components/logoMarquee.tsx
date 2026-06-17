"use client";

import React, { useState } from "react";

const logos = [
  "/marquee-logo.svg",
  "/marquee-logo.svg",
  "/marquee-logo.svg",
  "/marquee-logo.svg",
  "/marquee-logo.svg",
];

export default function LogoMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className="relative overflow-hidden py-6 md:py-8 lg:py-6 bg-[linear-gradient(90deg,#E53023_0%,#345CA7_100%)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="absolute left-0 top-0 z-10 h-full w-10 md:w-16 lg:w-24 bg-gradient-to-r from-[#E53023] to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-10 md:w-16 lg:w-24 bg-gradient-to-l from-[#345CA7] to-transparent" />

      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{ animationPlayState: paused ? "paused" : "running" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="logo"
            className="w-[200px] h-[45px] md:w-[280px] md:h-[60px] lg:w-[340px] lg:h-[70px] xl:w-[390px] xl:h-[79px] mx-6 md:mx-10 lg:mx-12 xl:mx-15 shrink-0 object-contain"
          />
        ))}
      </div>
    </div>
  );
}