import React from "react";
import lisa_img from "../assets/lisa_hero_img.png";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow_icon.png";

const Hero = () => {
  return (
    <div className="w-full bg-[#DDD6FE]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 md:py-16">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h2 className="text-lg font-semibold text-[#090909]">
            Best Price! Best Deals!
          </h2>

          <div className="flex items-center gap-3">
            <p className="text-3xl md:text-5xl font-bold text-[#171717]">New</p>
            <img src={hand_icon} alt="hand" className="w-8 h-8 md:w-10 md:h-10" />
          </div>

          <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#171717] leading-tight">
            Makeup Collection
          </p>

          <p className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#171717] leading-tight">
            For Every Woman
          </p>

          <div className="mt-6 flex justify-center md:justify-start">
            <button className="flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#ff4141] text-white text-base sm:text-lg md:text-xl font-medium hover:scale-105 transition">
              Latest Collection
              <img src={arrow_icon} alt="arrow" className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mb-10 md:mb-0 flex justify-center w-full md:w-auto">
          <img
            src={lisa_img}
            alt="hero"
            className="w-3/4 sm:w-2/3 md:w-80 lg:w-150 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
