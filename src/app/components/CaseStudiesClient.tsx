"use client";

import React, { useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";

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

const CaseStudiesClient = ({ caseStudies }: { caseStudies: any[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [prevHovered, setPrevHovered] = useState(false);
  const [nextHovered, setNextHovered] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  return (
    <section className="py-5 md:pb-20 md:pt-2 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="font-archivo text-[25px] md:text-[35px] xl:text-[45px] uppercase leading-none">
            Case Studies
          </h2>

          <div className="flex gap-2 md:gap-3">
            <button onClick={() => emblaApi?.scrollPrev()}>
              <ArrowSVG
                rotation={180}
                hovered={prevHovered}
                onMouseEnter={() => setPrevHovered(true)}
                onMouseLeave={() => setPrevHovered(false)}
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
              />
            </button>
            <button onClick={() => emblaApi?.scrollNext()}>
              <ArrowSVG
                rotation={0}
                hovered={nextHovered}
                onMouseEnter={() => setNextHovered(true)}
                onMouseLeave={() => setNextHovered(false)}
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
              />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {caseStudies.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%] px-3"
              >
                <Link href={`/case-study/${item.slug}`}>
                <div className="relative h-full rounded-[20px] bg-[#F5F5F5] flex flex-col overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-[200px] md:h-[220px] object-cover flex-shrink-0"
                  />

                  <div className="p-4 md:p-5 flex flex-col flex-1 justify-between relative">
                    <div>
                      <div className="flex items-center gap-2">
                        <img src="/calender.svg" className="w-[16px] h-[16px] md:w-[18px] md:h-[18px]" />
                        <span className="text-[#E53023] text-[13px] md:text-[14px] font-medium">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="mt-3 md:mt-4 font-archivo text-[14px] md:text-[20px] lg:text-[20px] leading-tight uppercase min-h-[60px] md:min-h-[70px]">
                        {item.heading}
                      </h3>
                    </div>

                    <div className="relative mt-4">
                      <img
                        src="/Vector-bottom.svg"
                        className="absolute md:-bottom-5 md:-right-5 z-10 -bottom-4 -right-4"
                      />
                      <ArrowSVG
                        rotation={-45}
                        hovered={hoveredIndex === index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className="absolute -bottom-4 -right-4 z-20"
                      />
                    </div>
                  </div>

                </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesClient;