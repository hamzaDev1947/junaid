import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <nav className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center">
          <img
            src="/fig-logo.png"
            alt="Logo"
            className="h-100 w-100 rounded-full"
          />
        </div>
        <div className="hidden md:flex items-center justify-center gap-[45px] w-[560px] h-[60px] rounded-[14px] border border-white/5 bg-[linear-gradient(90deg,rgba(255,255,255,0.02)_0%,rgba(153,153,153,0.02)_100%)] px-4 font-[inter]">
          {["Services", "Solutions", "Pricing", "Resources"].map((item) => (
            <div className="relative" key={item}>
              <button
                className="flex items-center gap-1 text-sm font-[inter] text-white hover:text-green-400 px-2 py-1"
                onClick={() =>
                  setActiveDropdown(activeDropdown === item ? null : item)
                }
              >
                {item}
                <AiOutlineDown className="text-xs mt-[2px] ml-1" />
              </button>
              {activeDropdown === item && (
                <div className="absolute top-[44px] left-1 w-[260px] bg-white/8 backdrop-blur-lg border border-white/10 rounded-[15px] p-[10px] z-10 shadow-xl font-[inter]">
                  {[
                    "Tax Software Hosting",
                    "Accounting Software Hosting",
                    "Application Hosting",
                  ].map((label, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-[10px] py-[10px] h-[40px] text-white text-sm cursor-pointer hover:bg-[#199652] hover:text-white rounded-[6px] mt-[10px]"
                    >
                      {label}
                      <AiOutlineDown className="text-xs mt-[2px] ml-1" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3 ">
          <button className="hidden md:flex items-center justify-center bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] text-white text-sm font-[inter] w-[188px] h-[50px] px-[31px] py-[14px] rounded-[14px] ">
            Get Started →
          </button>
          <button
            className="hamburger md:hidden text-white text-2xl p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {["Services", "Solutions", "Pricing", "Resources"].map((item) => (
            <div key={item}>
              <button
                className="w-full flex justify-between items-center text-white font-medium px-4 py-2 bg-white/5 backdrop-blur-md rounded-md hover:bg-[#199652] hover:text-white"
                onClick={() =>
                  setActiveDropdown(activeDropdown === item ? null : item)
                }
              >
                {item}
                <AiOutlineDown
                  className={`ml-2 transition-transform duration-200 ${
                    activeDropdown === item ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === item && (
                <div className="pl-4 mt-2 space-y-2">
                  {[
                    "Tax Software Hosting",
                    "Accounting Software Hosting",
                    "Application Hosting",
                  ].map((label, i) => (
                    <div
                      key={i}
                      className="text-sm text-white bg-white/10 rounded px-3 py-2"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button className="cta w-full text-center mt-4">Get Started →</button>
        </div>
      )}
      <div className="relative text-center  mt-12 sm:mt-24 px-2 sm:px-4">
        {/* Left Arrow */}
        <button
          ref={prevRef}
          className="absolute top-1/2 sm:top-1/2 top-[57%] left-4 transform -translate-y-1/2 bg-white/10 rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          <FaArrowLeft className="text-white" />
        </button>

        <button
          ref={nextRef}
          className="absolute top-1/2 sm:top-1/2 top-[57%] right-4 transform -translate-y-1/2 bg-white/10 rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          <FaArrowRight className="text-white" />
        </button>

        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation={false}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full"
        >
          <SwiperSlide>
            <h1 className="font-[inter] text-white text-[28px] sm:text-[36px] md:text-[44px] leading-[130%] tracking-[0] w-full max-w-[1085px] mx-auto">
              Secure, High-Performance Cloud Hosting <br />
              Designed Exclusively for Tax & Accounting Firms
            </h1>
            <p className="text-green-400 font-[inter] text-[14px] leading-[100%] max-w-[845px] w-full mx-auto mt-4">
              Dedicated private servers with 99.999% uptime, SOC 2 & FTC
              compliance, and 24/7 expert support
            </p>
            <div className="mt-10">
              <div className="w-full max-w-[452px] h-auto flex flex-wrap sm:flex-nowrap items-center justify-center gap-[20px] sm:gap-[30px] mx-auto rounded-[14px]">
                <button className="w-full sm:w-[242px] h-[82px] px-[30px] py-[18px] rounded-[14px] bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] flex flex-col items-center justify-center gap-[5px] text-white font-[inter]">
                  <span className="text-[20px] leading-[100%] text-white">
                    Try Vertic Cloud
                  </span>
                  <span className="text-[14px] leading-[100%] text-white">
                    No Credit Card Required
                  </span>
                </button>
                <div className="hidden sm:block w-px h-[35px] border-l border-white opacity-20"></div>
                <button className="text-[18px] font-[inter] leading-[100%] whitespace-nowrap text-white bg-transparent">
                  See How it Works
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <h1 className="font-[inter] text-white text-[28px] sm:text-[36px] md:text-[44px] leading-[130%] tracking-[0] w-full max-w-[1085px] mx-auto">
              Super Fast and Secure Cloud Solutions <br />
              Built for Modern Accounting Firms
            </h1>
            <p className="text-green-400 font-[inter] text-[14px] leading-[100%] max-w-[845px] w-full mx-auto mt-4">
              24/7 managed support, 99.999% uptime guarantee, and secure data
              backups.
            </p>
            <div className="mt-10">
              <div className="w-full max-w-[452px] h-auto flex flex-wrap sm:flex-nowrap items-center justify-center gap-[20px] sm:gap-[30px] mx-auto rounded-[14px]">
                <button className="w-full sm:w-[242px] h-[82px] px-[30px] py-[18px] rounded-[14px] bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] flex flex-col items-center justify-center gap-[5px] text-white font-[inter]">
                  <span className="text-[20px] leading-[100%] text-white">
                    Try Vertic Cloud
                  </span>
                  <span className="text-[14px] leading-[100%] text-white">
                    No Credit Card Required
                  </span>
                </button>
                <div className="hidden sm:block w-px h-[35px] border-l border-white opacity-20"></div>
                <button className="text-[18px] font-[inter] leading-[100%] whitespace-nowrap text-white bg-transparent">
                  See How it Works
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Navbar;
