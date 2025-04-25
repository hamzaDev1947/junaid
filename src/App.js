// import React, { useState } from "react";
// import { AiOutlineDown } from "react-icons/ai";
// import "./App.css";

// function App() {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="relative bg-radial-hero min-h-screen text-white px-6 py-4 font-[inter]">
//       {/* Navbar */}
//       <nav className="w-full max-w-[1200px] mx-auto flex items-center justify-between px-6 py-6">
//         {/* Left: Logo */}
//         <div className="flex items-center">
//           <img
//             src="/fig-logo.png"
//             alt="Logo"
//             className="h-84 w-84 rounded-full"
//           />
//         </div>

//         {/* Center: Navigation Menu */}
//         <div className="hidden md:flex items-center gap-[30px] px-4 py-2 bg-white/5 border border-white/10 rounded-[10px] backdrop-blur-[50px] font-[inter]">
//           {["Work", "Solutions", "Pricing", "Payloads"].map((item) => (
//             <div className="relative" key={item}>
//               <button
//                 className="flex items-center gap-1 text-sm font-medium text-white hover:text-green-400 px-2 py-1"
//                 onClick={() =>
//                   setActiveDropdown(activeDropdown === item ? null : item)
//                 }
//               >
//                 {item} <AiOutlineDown className="text-xs mt-[2px] ml-2" />
//               </button>

//               {activeDropdown === item && (
//                 <div className="absolute top-[35px] left-0 w-[275px] bg-white/15 backdrop-blur-lg border border-white/10 rounded-[10px] p-[15px] z-50 shadow-xl font-[inter]">
//                   <div className="flex items-center justify-between px-[10px] py-[7px] h-[29px] text-white text-sm cursor-pointer hover:bg-[#199652] hover:text-white rounded-[6px]">
//                     Tax Software Hosting{" "}
//                     <AiOutlineDown className="text-xs mt-[2px] ml-1" />
//                   </div>
//                   <div className="flex items-center justify-between px-[10px] py-[10px] h-[29px] text-white text-sm cursor-pointer hover:bg-[#199652] hover:text-white rounded-[6px] mt-[10px]">
//                     Accounting Software Hosting{" "}
//                     <AiOutlineDown className="text-xs mt-[2px] ml-1" />
//                   </div>
//                   <div className="flex items-center justify-between px-[10px] py-[10px] h-[29px] text-white text-sm cursor-pointer hover:bg-[#199652] hover:text-white rounded-[6px] mt-[10px]">
//                     Application Hosting{" "}
//                     <AiOutlineDown className="text-xs mt-[2px] ml-1" />
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Right: CTA Button + Hamburger */}
//         <div className="flex items-center gap-3">
//           <button className="hidden md:flex bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] text-white text-sm font-[inter] px-6 py-3 rounded-[14px] md:items-center gap-1">
//             Get Started →
//           </button>

//           {/* Hamburger Icon */}
//           <button
//             className="hamburger md:hidden text-white text-2xl p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             ☰
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="mobile-menu">
//           {["Work", "Solutions", "Pricing", "Payloads"].map((item) => (
//             <div key={item}>
//               <button
//                 className="w-full flex justify-between items-center text-white font-medium px-4 py-2 bg-white/5 backdrop-blur-md rounded-md hover:bg-[#199652] hover:text-white"
//                 onClick={() =>
//                   setActiveDropdown(activeDropdown === item ? null : item)
//                 }
//               >
//                 {item}
//                 <AiOutlineDown
//                   className={`ml-2 transition-transform duration-200 ${
//                     activeDropdown === item ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               {/* Dropdown content for each item */}
//               {activeDropdown === item && (
//                 <div className="pl-4 mt-2 space-y-2">
//                   <div className="text-sm text-white bg-white/10 rounded px-3 py-2">
//                     Tax Software Hosting
//                   </div>
//                   <div className="text-sm text-white bg-white/10 rounded px-3 py-2">
//                     Accounting Software Hosting
//                   </div>
//                   <div className="text-sm text-white bg-white/10 rounded px-3 py-2">
//                     Application Hosting
//                   </div>
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Keep Get Started at the bottom */}
//           <button className="cta w-full text-center mt-4">Get Started →</button>
//         </div>
//       )}

//       {/* Hero Content */}
//       <div className="text-center mt-24">
//         <h1 className="font-[inter] font-semibold max-w-[698px] mt-[-40px] w-full mx-auto text-center text-[34px] leading-[61px] px-4 py-10 rounded-md ">
//           VeritGuard: 24/7 Managed IT for <br />
//           Tax & Accounting Firms
//         </h1>
//         <p className="text-green-400 font-[inter] text-[14px] leading-[100%] mt-[-30px] mb-6 w-[295px] mx-auto text-center">
//           Proactive IT Support & Security for
//         </p>

//         <div className="mt-10">
//           <div className="w-[474px] h-[54px] flex items-center justify-center gap-[30px] relative mx-auto">
//             <button className="w-[243px] h-[54px] px-[40px] py-[15px] rounded-[14px] bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] text-white font-[inter] font-semibold text-[16px] leading-[100%] cursor-pointer">
//               Let’s Get Started
//             </button>
//             <div className="w-[38px] h-[1px] rotate-90 border border-white opacity-20"></div>
//             <button className="w-auto px-20px h-[22px] flex items-center justify-center text-white font-[inter] text-[18px] leading-[100%] whitespace-nowrap">
//               Schedule A Meeting
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

// import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // arrow icons
import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./App.css";

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="relative bg-[#072530] min-h-screen text-white px-0 py-4font-[inter] m-8 rounded-[20px] ">
      {/* Navbar */}
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
        <div className="flex items-center gap-3">
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
      <div className="relative text-center mt-24">
        {/* Left Arrow */}
        <button
          ref={prevRef}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 rounded-full w-10 h-10 flex items-center justify-center z-10"
        >
          <FaArrowLeft className="text-white" />
        </button>

        {/* Right Arrow */}
        <button
          ref={nextRef}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 rounded-full w-10 h-10 flex items-center justify-center z-10"
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
            <h1 className="font-[inter] w-[1085px] h-[122px] mx-auto text-[44px] leading-[61px] tracking-[0] text-white">
              Secure, High-Performance Cloud Hosting <br />
              Designed Exclusively for Tax & Accounting Firms
            </h1>
            <p className="text-green-400 font-[inter] text-[14px] leading-[100%] w-[845px] h-[22px] mx-auto mt-4">
              Dedicated private servers with 99.999% uptime, SOC 2 & FTC
              compliance, and 24/7 expert support
            </p>
            <div className="mt-10">
              <div className="w-[452px] h-[82px] flex items-center justify-center gap-[30px] relative mx-auto rounded-[14px]">
                <button className="w-[242px] h-[82px] px-[40px] py-[18px] rounded-[14px] bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] flex flex-col items-center justify-center gap-[5px] text-white font-[inter] cursor-pointer">
                  <span className="w-[158px] h-[24px] font-[inter] text-[20px] leading-[100%] text-white">
                    Try Vertic Cloud
                  </span>
                  <span className="w-[162px] h-[17px] font-[inter] text-[14px] leading-[100%] text-white">
                    No Credit Card Required
                  </span>
                </button>
                <div className="w-px h-[35px] border-l border-white opacity-20"></div>
                <button className="px-[20px] flex items-center justify-center text-[18px] font-[inter] leading-[100%] whitespace-nowrap text-white bg-transparent">
                  See How it Works
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Second Slide Example (optional) */}
          <SwiperSlide>
            <h1 className="font-[inter] w-[1085px] h-[122px] mx-auto text-[44px] leading-[61px] tracking-[0] text-white">
              Super Fast and Secure Cloud Solutions <br />
              Built for Modern Accounting Firms
            </h1>
            <p className="text-green-400 font-[inter] text-[14px] leading-[100%] w-[845px] h-[22px] mx-auto mt-4">
              24/7 managed support, 99.999% uptime guarantee, and secure data
              backups.
            </p>
            <div className="mt-10">
              <div className="w-[452px] h-[82px] flex items-center justify-center gap-[30px] relative mx-auto rounded-[14px]">
                <button className="w-[242px] h-[82px] px-[40px] py-[18px] rounded-[14px] bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] flex flex-col items-center justify-center gap-[5px] text-white font-[inter] cursor-pointer">
                  <span className="w-[158px] h-[24px] font-[inter] text-[20px] leading-[100%] text-white">
                    Try Vertic Cloud
                  </span>
                  <span className="w-[162px] h-[17px] font-[inter] text-[14px] leading-[100%] text-white">
                    No Credit Card Required
                  </span>
                </button>
                <div className="w-px h-[35px] border-l border-white opacity-20"></div>
                <button className="px-[20px] flex items-center justify-center text-[18px] font-[inter] leading-[100%] whitespace-nowrap text-white bg-transparent">
                  See How it Works
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <section
        id="features"
        className="w-full px-6 py-16 transition-all duration-500 ease-in-out"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="w-[198px] h-[112px] border border-white/10 rounded-[14px] bg-white/10 backdrop-blur-[30px] pt-[28px] pr-[34px] pb-[28px] pl-[34px] text-white cursor-pointer transition duration-500 transform -translate-x-4 -translate-y-4 ml-[140px]">
            <div className="flex flex-col items-center gap-[10px]">
              <img src="/pri.svg" alt="Private Servers" className="w-6 h-6" />
              <span>Private Servers</span>
            </div>
          </div>
          <div className="w-[265.7px] h-[112px] border border-white/10 rounded-[14px] bg-white/10 backdrop-blur-[30px] pt-[28px] pr-[34px] pb-[28px] pl-[34px] text-white cursor-pointer transition duration-500 transform translate-x-4 -translate-y-4 ml-[130px] ">
            <div className="flex flex-col items-center gap-[10px]">
              <img
                src="/soc.svg"
                alt="SOC 2 & FTC-Compliant"
                className="w-6 h-6"
              />
              <span>SOC 2 & FTC-Compliant</span>
            </div>
          </div>
          <div className="w-[234.67px] h-[112px] border border-white/10 rounded-[14px] bg-white/10 backdrop-blur-[30px] pt-[28px] pr-[34px] pb-[28px] pl-[34px] text-white cursor-pointer transition duration-500 transform -translate-x-4 translate-y-4 ml-[240px]">
            <div className="flex flex-col items-center gap-[10px]">
              <img
                src="/exp.svg"
                alt="24/7 Expert Support"
                className="w-6 h-6"
              />
              <span>24/7 Expert Support</span>
            </div>
          </div>
          <div className="w-[203.64px] h-[112px] border border-white/10 rounded-[14px] bg-white/10 backdrop-blur-[30px] pt-[28px] pr-[34px] pb-[28px] pl-[34px] text-white cursor-pointer transition duration-500 transform translate-x-4 translate-y-4 mr-[30px]">
            <div className="flex flex-col items-center gap-[10px]">
              <img src="/opt.svg" alt="99.999% Uptime" className="w-6 h-6" />
              <span>99.999% Uptime</span>
            </div>
          </div>
        </div>
      </section>
      <section id="it-security" className="w-full px-6 pb-0 relative z-10 ">
        <div className="w-[1120px] h-[150px] mx-auto bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] text-white font-[inter] rounded-xl px-8 py-6 flex flex-col md:flex-row justify-between items-center shadow-lg relative z-10 -mb-[75px]">
          <p className="w-[561px] h-[68px] text-[28px] leading-[100%] font-medium text-[#ffffff] text-center md:text-left">
            We also provide fully managed IT security solutions for tax &
            accounting firms
          </p>
          <button className="w-[185px] h-[50px] bg-white text-[#199652] font-semibold rounded-[14px] px-[31px] py-[14px] mt-4 md:mt-0">
            Learn More →
          </button>
        </div>
      </section>
      <section className="bg-white w-full min-h-screen z-0 relative py-16 px-6 text-[#072530]">
        <div className="max-w-6xl mt-40 items-center ">
          {/* Heading */}
          <h2 className="text-4xl font-[inter] font-semibold text-center mb-15 w-[591px] h-[88px] absolute top-[130px] left-[365px]">
            Purpose-Built Cloud Solutions for Tax & Accounting Professionals
          </h2>

          {/* Features Grid */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 max-w-6xl ml-20 mr-30 mb-20 ">
            {/* First Child Div */}
            <div className="relative w-full md:w-1/3 p-3 rounded-2xl bg-[#F6F6F6] min-h-[250px]">
              {/* Outer Image Container at Top Right */}
              <div className="absolute top-4 right-4 flex items-center justify-center size-6">
                {/* Outer Image */}
                <img src="/ii.svg" alt="Security Outer" className="w-16 h-16" />
              </div>

              {/* Heading at Top Left */}
              <h3 className="text-[22px]  font-bold font-[inter] mb-4 text-left pr-20">
                {" "}
                {/* Added padding-right to prevent text overlap */}
                Industry-Leading Security
              </h3>

              {/* Paragraph at Bottom Left */}
              <p className="absolute bottom-9 w-[300px] h-[66px] font-[inter] text-[18px]  text-gray-600 text-left">
                SOC 2 compliant infrastructure with end-to-end encryption and
                multi-factor authentication.
              </p>
            </div>
            {/* Second Child Div */}
            <div className="relative w-full md:w-1/3 p-3 rounded-2xl bg-[#F6F6F6] min-h-[250px]">
              {/* Image at Top Right */}
              <div className="absolute top-0 right-2 size-6 ">
                <img src="/max.svg" alt="Performance" className="w-16 h-16" />
              </div>

              {/* Heading at Top Left */}
              <h3 className="text-[22px] w-[200px] h-[54px] font-bold font[inter] text-left">
                Maximum Performance
              </h3>

              {/* Paragraph at Bottom Left */}
              <p className="absolute bottom-9 w-[300px] h-[66px] font-[inter] text-[18px] text-gray-600 text-left">
                Lightning-fast servers with 99.999% uptime guarantee for peak
                tax season reliability.
              </p>
            </div>

            {/* Third Child Div */}
            <div className="relative w-full md:w-1/3 p-3 rounded-2xl bg-[#F6F6F6] min-h-[250px]">
              {/* Image at Top Right */}
              <div className="absolute top-0 right-3 size-6">
                <img src="/247exp.svg" alt="Support" className="w-16 h-16" />
              </div>

              {/* Heading at Top Left */}
              <h3 className="text-2xl w-[200px] h-[54px] font-bold mb-4 text-left">
                24/7 Expert Support
              </h3>

              {/* Paragraph at Bottom Left */}
              <p className="absolute bottom-9 w-[300px] h-[66px] font-[inter] text-[18px] text-gray-600 text-left">
                Dedicated specialists who understand accounting software and tax
                workflows.
              </p>
            </div>
          </div>
          {/* Stats Section */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center ">
              <div className="p-6">
                <p className="w-[63px] h-[58px] text-[48px] leading-[100%] font-medium font-[inter] mb-2">
                  <span className="text-black">9</span>
                  <span className="text-[#199652]">+</span>
                </p>
                <p className="w-[148px] h-[22px] text-[18px] leading-[100%] font-normal font-[inter] text-gray-600 text-center">
                  Years in business
                </p>
              </div>
              <div className="p-6">
                <p className="w-[128px] h-[56px] text-[46px] leading-[100%] font-medium font-[inter] mb-2">
                  <span className="text-black">98%</span>
                  <span className="text-[#199652]">+</span>
                </p>

                <p className="w-[155px] h-[22px] text-[18px] leading-[100%] font-normal font-[inter] text-gray-600 text-center ">
                  Satisfaction rating
                </p>
              </div>
              <div className="p-6">
                <p className="w-[89px] h-[56px] text-[46px] leading-[100%] font-medium font-[inter] mb-2">
                  <span className="text-black">50</span>
                  <span className="text-[#199652]">+</span>
                </p>

                <p className="w-[169px] h-[22px] text-[18px] leading-[100%] font-normal font-[inter] text-gray-600 text-center">
                  Years of experience
                </p>
              </div>
              <div className="p-6">
                <p className="w-[142px] h-[56px] text-[46px] leading-[100%] font-medium font-[inter] mb-2">
                  <span className="text-black">1000</span>
                  <span className="text-[#199652]">+</span>
                </p>

                <p className="w-[124px] h-[22px] text-[18px] leading-[100%] font-normal font-[inter] text-gray-600 text-center">
                  Clients Served
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
