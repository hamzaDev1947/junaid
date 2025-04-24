import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./App.css";

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-radial-hero min-h-screen text-white px-6 py-4 font-[inter]">
      {/* Navbar */}
      <nav className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-6 py-6">
        {/* Left: Logo */}
        <div className="flex items-center">
          <img
            src="/fig-logo.png"
            alt="Logo"
            className="h-84 w-84 rounded-full"
          />
        </div>

        {/* Center: Navigation Menu */}
        <div className="hidden md:flex items-center gap-[30px] px-4 py-2 bg-white/5 border border-white/10 rounded-[10px] backdrop-blur-[50px] font-[inter]">
          {["Work", "Solutions", "Pricing", "Payloads"].map((item) => (
            <div className="relative" key={item}>
              <button
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-green-400 px-2 py-1"
                onClick={() =>
                  setActiveDropdown(activeDropdown === item ? null : item)
                }
              >
                {item} <AiOutlineDown className="text-xs mt-[2px] ml-2" />
              </button>

              {activeDropdown === item && (
                <div className="absolute top-[35px] left-0 w-[275px] bg-white/15 backdrop-blur-lg border border-white/10 rounded-[10px] p-[15px] z-50 shadow-xl font-[inter]">
                  <div className="flex items-center justify-between px-[10px] py-[7px] h-[29px] text-white text-sm cursor-pointer hover:bg-[#199652] hover:text-white rounded-[6px]">
                    Tax Software Hosting{" "}
                    <AiOutlineDown className="text-xs mt-[2px] ml-1" />
                  </div>
                  <div className="flex items-center justify-between px-[10px] py-[10px] h-[29px] text-white text-sm cursor-pointer hover:bg-[#199652] hover:text-white rounded-[6px] mt-[10px]">
                    Accounting Software Hosting{" "}
                    <AiOutlineDown className="text-xs mt-[2px] ml-1" />
                  </div>
                  <div className="flex items-center justify-between px-[10px] py-[10px] h-[29px] text-white text-sm cursor-pointer hover:bg-[#199652] hover:text-white rounded-[6px] mt-[10px]">
                    Application Hosting{" "}
                    <AiOutlineDown className="text-xs mt-[2px] ml-1" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: CTA Button + Hamburger */}
        <div className="flex items-center gap-3">
          <button className="hidden md:flex bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] text-white text-sm font-[inter] px-6 py-3 rounded-[14px] md:items-center gap-1">
            Get Started →
          </button>

          {/* Hamburger Icon */}
          <button
            className="hamburger md:hidden text-white text-2xl p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {["Work", "Solutions", "Pricing", "Payloads"].map((item) => (
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

              {/* Dropdown content for each item */}
              {activeDropdown === item && (
                <div className="pl-4 mt-2 space-y-2">
                  <div className="text-sm text-white bg-white/10 rounded px-3 py-2">
                    Tax Software Hosting
                  </div>
                  <div className="text-sm text-white bg-white/10 rounded px-3 py-2">
                    Accounting Software Hosting
                  </div>
                  <div className="text-sm text-white bg-white/10 rounded px-3 py-2">
                    Application Hosting
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Keep Get Started at the bottom */}
          <button className="cta w-full text-center mt-4">Get </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="text-center mt-24">
        <h1 className="font-[inter] font-semibold max-w-[698px] mt-[-40px] w-full mx-auto text-center text-[34px] leading-[61px] px-4 py-10 rounded-md ">
          VeritGuard: 24/7 Managed IT for <br />
          Tax & Accounting Firms
        </h1>
        <p className="text-green-400 font-[inter] text-[14px] leading-[100%] mt-[-30px] mb-6 w-[295px] mx-auto text-center">
          Proactive IT Support & Security for
        </p>

        <div className="mt-10">
          <div className="w-[474px] h-[54px] flex items-center justify-center gap-[30px] relative mx-auto">
            <button className="w-[243px] h-[54px] px-[40px] py-[15px] rounded-[14px] bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] text-white font-[inter] font-semibold text-[16px] leading-[100%] cursor-pointer">
              Let’s Get Started
            </button>
            <div className="w-[38px] h-[1px] rotate-90 border border-white opacity-20"></div>
            <button className="w-auto px-20px h-[22px] flex items-center justify-center text-white font-[inter] text-[18px] leading-[100%] whitespace-nowrap">
              Schedule A Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
