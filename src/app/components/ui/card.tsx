"use client";
import React, { useState } from "react";

interface CardProps {
  image: string;
  icon?: string;
  title: string;
  description?: string;
  topVector?: string;
  bottomVector?: string;
}

const Card = ({
  image,
  icon,
  title,
  description,
  topVector,
  bottomVector,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full rounded-[20px] bg-[#F5F5F5] overflow-visible">

      {/* Card Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] md:h-full object-cover rounded-xl"
        />

        {topVector && (
          <img src={topVector} alt="" className="absolute -top-1 -left-1 z-10" />
        )}

        {icon && (
          <img src={icon} alt="" className="absolute -top-1 -left-1 z-20" />
        )}
      </div>

      {/* Content */}
      <div className="p-5 lg:p-2 relative h-[100px] md:min-h-[120px]">
        <h3 className="font-archivo text-[17px] md:text-[18px] lg:text-[14px] xl:text-[18px] uppercase leading-none font-normal">
          {title}
        </h3>

        {description && (
          <p className="font-roboto text-[14px] md:text-[18px] mt-3">
            {description}
          </p>
        )}

        {bottomVector && (
          <img src={bottomVector} alt="" className="absolute -bottom-1 -right-1 z-10" />
        )}

        <img
          src={isHovered ? "/link-red.svg" : "/arrow-top-right.svg"}
          alt="arrow"
          className="absolute -bottom-1 -right-1 z-20 cursor-pointer w-[48px] h-[48px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>

    </div>
  );
};

export default Card;