"use client";

import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const companies = [
  "/Company1.svg",
  "/Company2.svg",
  "/Company3.svg",
  "/Company4.svg",
  "/Company5.svg",
  "/Company4.svg",
  "/Company2.svg",
  "/Company3.svg",
  "/Company4.svg",
  "/Company5.svg",
];

const ArrowSVG = ({
  rotation = 0,
  hovered,
  onMouseEnter,
  onMouseLeave,
  className = "",
}: {
  rotation?: number;
  hovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="49"
    height="49"
    viewBox="0 0 49 49"
    fill="none"
    style={{ transform: `rotate(${rotation}deg)` }}
    className={`cursor-pointer transition-all duration-300 ${className}`}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    <rect width="48.1441" height="48.1441" rx="24.072" fill={hovered ? "#E53023" : "#345CA7"} />
    <path d="M16.9333 24.0721H31.0432" stroke="white" strokeWidth="1.18777" strokeMiterlimit="10" strokeLinecap="round" />
    <path d="M24.1562 17.0171L31.2112 24.0721" stroke="white" strokeWidth="1.18777" strokeMiterlimit="10" />
    <path d="M24.156 31.1267L31.2109 24.0718" stroke="white" strokeWidth="1.18777" strokeMiterlimit="10" />
  </svg>
);

const Clients = () => {
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  return (
    <section className="py-8 md:py-16 lg:py-12 bg-white overflow-x-hidden">
      <div className="max-w-[1250px] mx-auto px-6 md:px-10 lg:px-6">

        {/* Heading */}
        <h2 className="font-archivo text-[25px] md:text-[35px] xl:text-[45px] uppercase text-center">
          We Trusted By
        </h2>

        <div className="relative mt-6 md:mt-10 lg:mt-7">

          {/* LEFT ARROW */}
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-4 md:left-[-30px] lg:left-[0px] top-1/2 -translate-y-1/2 z-20"
          >
            <ArrowSVG
              rotation={180}
              hovered={prevHovered}
              onMouseEnter={() => setPrevHovered(true)}
              onMouseLeave={() => setPrevHovered(false)}
              className="w-7 h-7 md:w-9 md:h-9 lg:w-[49px] lg:h-[49px]"
            />
          </button>

          {/* CAROUSEL */}
          <div className="overflow-hidden mx-8 md:mx-6 lg:mx-10" ref={emblaRef}>
            <div className="flex">
              {companies.map((company, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_20%] px-3 lg:px-4"
                >
                  <div className="h-[110px] md:h-[130px] lg:h-[160px] flex items-center justify-center">
                    <img
                      src={company}
                      alt=""
                      className="h-[80px] w-[170px] md:h-[65px] md:w-[170px] lg:h-[73px] lg:w-[200px] object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-4 md:right-[-30px] lg:right-[0px] top-1/2 -translate-y-1/2 z-20"
          >
            <ArrowSVG
              rotation={0}
              hovered={nextHovered}
              onMouseEnter={() => setNextHovered(true)}
              onMouseLeave={() => setNextHovered(false)}
              className="w-7 h-7 md:w-9 md:h-9 lg:w-[49px] lg:h-[49px]"
            />
          </button>

        </div>
      </div>
    </section>
  );
};

export default Clients;