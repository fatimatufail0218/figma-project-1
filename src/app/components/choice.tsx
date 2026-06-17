"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const slides = [
  {
    image: "/s4-slider1.png",
    title: "Cloud Migration",
    description:
      "Helping businesses migrate securely and efficiently to cloud platforms.",
  },
  {
    image: "/s4-slider2.png",
    title: "AWS Solutions",
    description:
      "Building scalable AWS infrastructure for growing organisations.",
  },
  {
    image: "/s4-slider3.png",
    title: "DevOps Automation",
    description:
      "Accelerating software delivery through automation and DevOps practices.",
  },
  {
    image: "/s4-slider2.png",
    title: "Multi Cloud Strategy",
    description:
      "Creating resilient cloud ecosystems across multiple providers.",
  },
];

const Choice = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 2000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white">
      <div className="max-w-full mx-auto">

        {/* Heading */}
        <div className="text-center mb-16 max-w-[750px] mx-auto px-4 sm:px-6">
          <h2 className="font-archivo font-normal text-[25px] md:text-[35px] xl:text-[45px] uppercase leading-none">
            Why Companies Choose <br /> Make Cloud
          </h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => {
              const isActive = selectedIndex === index;

              return (
                <div
                  key={index}
                  className="flex-[0_0_75%] sm:flex-[0_0_60%] md:flex-[0_0_38%]"
                >
                  <div
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`relative overflow-hidden rounded-[15px] transition-all duration-500 cursor-pointer ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-[0.85] opacity-100"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-[260px] sm:h-[300px] md:h-[320px] object-cover"
                    />

                    {isActive && (
                      <div className="absolute flex items-center gap-3 left-1/2 bottom-4 md:bottom-8 -translate-x-1/2 bg-white rounded-[20px] p-3 w-[calc(100%-24px)] md:w-[90%] shadow-lg">
                        <div className="shrink-0">
                          <img
                            src="/s4-logo.svg"
                            alt=""
                            className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]"
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-archivo text-[12px] md:text-[17px] xl:text-[20px] uppercase mb-1 md:mb-2 tracking-tight leading-none">
                            {slide.title}
                          </h3>
                          <p className="font-roboto text-[9px] md:text-[14px] xl:text-[17px] leading-snug md:leading-none line-clamp-2 md:line-clamp-none">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`
                transition-all duration-25 
                rounded-full flex items-center justify-center
                ${
                  selectedIndex === index
                    ? "h-4.5 w-4.5 border border-[#1d5cd1] -translate-y-[3px]"
                    : "h-2.5 w-2.5"
                }
              `}
            >
              <span
                className={`
                  rounded-full flex items-center justify-center
                  ${
                    selectedIndex === index
                      ? "h-2.5 w-2.5 bg-[#1d5cd1]"
                      : "h-2.5 w-2.5 bg-gray-300"
                  }
                `}
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Choice;



