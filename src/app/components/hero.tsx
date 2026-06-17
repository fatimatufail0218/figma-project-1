"use client";

import React from "react";
import Button from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    type: "content",
    title: "Expert Cloud Consultancy",
    description: "Innovation accelerated with cloud, DevOps & automation",
    image: "/hero-logo.svg",
  },
  {
    type: "content",
    title: "Expert Cloud Consultancy",
    description: "Innovation accelerated with cloud, DevOps & automation",
    image: "/hero-logo.svg",
  },
  {
    type: "content",
    title: "Expert Cloud Consultancy",
    description: "Innovation accelerated with cloud, DevOps & automation",
    image: "/hero-logo.svg",
  },
  {
    type: "content",
    title: "Expert Cloud Consultancy",
    description: "Innovation accelerated with cloud, DevOps & automation",
    image: "/hero-logo.svg",
  },
];

const Hero = () => {
  return (
    <section className="relative w-[95%] h-[100%] m-auto pt-6 md:pt-[30px] px-4 xl:px-0">

      {/* Left Arrow */}
      <img
        src="/left-arrow.svg"
        className="hero-prev absolute left-3 md:left-1 xl:left-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer w-4 md:w-5 xl:w-auto"
        alt="previous"
      />
      <img
        src="/left-box.svg"
        className="absolute -left-2 xl:-left-1 top-1/2 -translate-y-1/2 z-10 xl:block"
        alt=""
      />

      {/* Right Arrow */}
      <img
        src="/right-arrow.svg"
        className="hero-next absolute right-3 md:right-1 xl:right-0 top-1/2 -translate-y-1/2 z-20 cursor-pointer w-4 md:w-5 xl:w-auto"
        alt="next"
      />
      <img
        src="/right-box.svg"
        className="absolute -right-2 xl:-right-1 top-1/2 -translate-y-1/2 z-10  xl:block"
        alt=""
      />

      <Swiper
        modules={[Navigation]}
        loop={true}
        speed={1000}
        slidesPerView={1}
        spaceBetween={30}
        navigation={{
          prevEl: ".hero-prev",
          nextEl: ".hero-next",
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.type === "content" ? (

              <div className="bg-gradient-to-r from-[#E53023] to-[#345CA7] rounded-[20px] h-full">
                <div className="flex flex-col md:flex-row items-center h-full py-20 px-6 md:px-12 lg:px-20 xl:px-40 justify-between gap-6 md:gap-0">

                  {/* Text Content */}
                  <div className="text-center md:text-left">

                    {/* Cloud Logos */}
                    <div className="flex gap-5 md:gap-6 lg:gap-8 xl:gap-10 justify-center md:justify-start">
                      <img src="aws-white_SVG-1.svg fill.svg" alt="amazon-logo"
                        className="w-[40px] h-[26px] md:w-[60px] md:h-[36px] lg:w-[75px] lg:h-[46px] xl:w-[91px] xl:h-[55px]" />
                      <img src="microsoft-azure.svg fill.svg" alt="microsoft-logo"
                        className="w-[22px] h-[25px] md:w-[40px] md:h-[40px] lg:w-[52px] lg:h-[50px] xl:w-[63px] xl:h-[60px]" />
                      <img src="google-cloud-inline.svg.svg" alt="cloud-logo"
                        className="w-[26px] h-[26px] md:w-[44px] md:h-[36px] lg:w-[56px] lg:h-[46px] xl:w-[68px] xl:h-[55px]" />
                    </div>

                    <h1 className="font-archivo text-white text-[26px] md:text-[46px] lg:text-[60px] xl:text-[77px] uppercase leading-none py-3 lg:py-4">
                      {slide.title}
                    </h1>

                    <p className="text-white font-roboto text-[13px] md:text-[18px] lg:text-[22px] xl:text-[26px] font-normal pb-3">
                      {slide.description}
                    </p>

                    <div className="flex justify-center md:justify-start">
                      <Button text="Book a Call" />
                    </div>

                  </div>

                  {/* Hero Image */}
                  <div className="shrink-0 hidden md:block">
                    <img
                      src={slide.image}
                      alt="hero-logo"
                      className="w-[280px] h-[340px] lg:w-[350px] lg:h-[430px] xl:w-[420px] xl:h-[515px]"
                    />
                  </div>

                </div>
              </div>

            ) : (

              <div className="h-[300px] md:h-full rounded-[20px] overflow-hidden">
                <img src={slide.image} alt="slide" className="w-full h-full object-cover" />
              </div>

            )}
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Hero;