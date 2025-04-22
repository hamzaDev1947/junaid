import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  return (
    <div className="relative bg-gradient-to-br from-[#061a2c] to-[#092b30] min-h-screen text-white px-6 py-4">
      {/* Navbar */}
      <nav className="flex items-center justify-center py-6 max-w-[810px] w-full mx-auto">
        {/* Logo */}
        <div className="absolute top-[20px] left-[40px] flex items-center space-x-2">
          <img
            src="/fig-logo.png"
            alt="Logo"
            className="h-84 w-84 rounded-full"
          />
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-[30px] px-4 py-2 bg-white/5 border border-white/10 rounded-[10px] backdrop-blur-[50px]">
          {["Work", "Solutions", "Pricing", "Payloads"].map((item) => (
            <div className="relative" key={item}>
              <button
                className="flex items-center gap-1 text-sm font-medium text-white hover:text-green-400 px-2 py-1"
                onClick={() =>
                  setActiveDropdown(activeDropdown === item ? null : item)
                } // Toggle only Work
              >
                {item} <span className="text-xs">▼</span>
              </button>

              {/* Dropdown only for Work */}
              {activeDropdown === item && (
                <div className="absolute top-[35px] left-0 w-[275px] bg-white/5 border border-white/10 rounded-[10px] backdrop-blur-[50px] p-[15px] z-50">
                  <div className="flex items-center justify-between px-[10px] py-[7px] h-[29px] rounded-[6px] bg-[#199652] text-white text-sm cursor-pointer">
                    Tax Software Hosting <span className="text-xs">▼</span>
                  </div>
                  <div className="flex items-center justify-between px-[10px] py-[10px] h-[29px] text-white text-sm cursor-pointer hover:bg-white/10 rounded-[6px] mt-[10px]">
                    Accounting Software Hosting{" "}
                    <span className="text-xs">▼</span>
                  </div>
                  <div className="flex items-center justify-between px-[10px] py-[10px] h-[29px] text-white text-sm cursor-pointer hover:bg-white/10 rounded-[6px] mt-[10px]">
                    Application Hosting <span className="text-xs">▼</span>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* CTA Button */}
          <div className="absolute top-[4px] right-[-276px]">
            <button className="relative bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] text-white text-sm font-medium px-5 py-2 rounded-full flex items-center gap-1">
              Get Started →
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="text-center mt-24">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          VeritGuard: 24/7 Managed IT for <br />
          Tax & Accounting Firms
        </h1>
        <p className="text-green-400 mb-6">
          Proactive IT Support & Security for
        </p>
        {/* Add this below the existing buttons in Hero if replacing */}
        <div className="mt-10">
          {/* Tailwind-converted button layout */}
          <div className="w-[474px] h-[54px] flex items-center justify-center gap-[30px] relative mx-auto">
            <button className="w-[243px] h-[54px] px-[40px] py-[15px] rounded-[14px] bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] text-white font-semibold text-[18px] leading-[100%] cursor-pointer">
              Let’s Get Started
            </button>
            <div className="w-[38px] h-[1px] rotate-90 border border-white opacity-20"></div>
            <button className="w-[171px] h-[22px] flex items-center justify-center text-white font-normal text-[18px] leading-[100%]">
              Schedule A Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
