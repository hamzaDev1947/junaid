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
import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./App.css";
const faqs = [
  {
    question: "What does dedicated private server hosting mean?",
    answer:
      "It means you get a server dedicated solely to your use, offering better performance, control, and security.",
  },
  {
    question: "Who takes care of data migration and how fast is the process?",
    answer:
      "Our team handles the full migration process and typically completes it within 24-48 hours.",
  },
  {
    question: "How does Verito handle scalability during tax season?",
    answer:
      "We automatically scale your resources to match demand, ensuring consistent performance.",
  },
  {
    question: "What all is included in Verito’s Managed IT services?",
    answer:
      "Managed IT includes monitoring, backups, updates, support, and security management.",
  },
];
function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // Green right arrow SVG
  const ArrowRight = () => (
    <svg
      className="w-4 h-4 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );

  // Green down arrow SVG
  const ArrowDown = () => (
    <svg
      className="w-4 h-4 text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
  return (
    <>
      <div className="relative bg-[#072530] min-h-screen text-white px-0 py-4 font-[inter] m-8 rounded-[20px] ">
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
            <button className="cta w-full text-center mt-4">
              Get Started →
            </button>
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
      </div>
      <section className="bg-white w-full min-h-screen z-0 relative py-16 px-6 text-[#072530]">
        <div className="max-w-6xl mt-40 items-center ">
          {/* Heading */}
          <h2 className="text-4xl font-[inter] font-semibold text-center mb-10 w-[591px] h-[88px] absolute top-[80px] left-[365px] ">
            Purpose-Built Cloud Solutions for Tax & Accounting Professionals
          </h2>

          {/* Features Grid */}
          <div className="w-full max-w-7xl ml-10 mr-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-20 px-4">
            {/* First Child Div */}
            <div className="relative md:w-1/3 p-3 rounded-2xl bg-[#F6F6F6] min-h-[250px]">
              {/* Outer Image Container at Top Right */}
              <div className="absolute top-4 right-4 flex items-center justify-center size-6">
                {/* Outer Image */}
                <img src="/ii.svg" alt="Security Outer" className="w-16 h-16" />
              </div>

              {/* Heading at Top Left */}
              <h3 className="text-[22px]  font-semibold font-[inter] mb-4 text-left pr-20">
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
            <div className="relative md:w-1/3 p-3 rounded-2xl bg-[#F6F6F6] min-h-[250px]">
              {/* Image at Top Right */}
              <div className="absolute top-0 right-2 size-6 ">
                <img src="/max.svg" alt="Performance" className="w-16 h-16" />
              </div>

              {/* Heading at Top Left */}
              <h3 className="text-[22px] w-[200px] h-[54px] font-semibold font-[inter] text-left">
                Maximum Performance
              </h3>

              {/* Paragraph at Bottom Left */}
              <p className="absolute bottom-9 w-[300px] h-[66px] font-[inter] text-[18px] text-gray-600 text-left">
                Lightning-fast servers with 99.999% uptime guarantee for peak
                tax season reliability.
              </p>
            </div>

            {/* Third Child Div */}
            <div className="relative md:w-1/3 p-3 rounded-2xl bg-[#F6F6F6] min-h-[250px]">
              {/* Image at Top Right */}
              <div className="absolute top-0 right-3 size-6">
                <img src="/247exp.svg" alt="Support" className="w-16 h-16" />
              </div>

              {/* Heading at Top Left */}
              <h3 className="text-2xl w-[200px] h-[54px] font-[inter] font-semibold mb-4 text-left">
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
          <div className="flex justify-center items-center">
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
      <div className="bg-gradient-to-b from-[#041E2A] to-[#072530] py-16 px-4">
        {/* Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="w-[214px] h-[44px] text-[36px] font-semibold font-[Inter] leading-[100%] tracking-[-1px] text-white mb-4">
            Our Services
          </h2>
          <p className="w-[609px] h-[52px] font-[Inter] font-normal text-[18px] leading-[26px] tracking-[-0.5px] text-[#6B7C81]">
            Click on any service below to learn more about how Verito can help
            your accounting or tax firm with secure, high-performance cloud
            solutions.
          </p>
        </div>

        {/* Services Container */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-[80px] ">
          {/* Service 1 */}
          <div className="bg-[#123A49] p-8 rounded-[20px] flex flex-col gap-4 w-[550px] h-[248px] group hover:bg-[#3CB55A] hover:opacity-90 cursor-pointer">
            <div className="flex items-start gap-5 ">
              <div className="p-3 rounded-lg bg-[#1E4452] group-hover:bg-[#60C278] transition-all duration-300 ">
                {/* Icon only */}

                <img src="/tax.svg" alt="Icon" className="w-[36px] h-[36px]" />
              </div>
              <h3 className="text-white font-[inter] text-[24px] leading-[100%] tracking-[-0.5px] w-[238px] h-[29px] mt-[25px]">
                Tax Software Hosting
              </h3>
            </div>
            <p className="text-[#6E8C97] font-[400] text-[18px] leading-[100%] tracking-[-0.5px] w-[470px] h-[44px] mt-[25px] group-hover:text-white">
              Maximize efficiency with dedicated private server tax software
              hosting designed for optimal performance.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-[#0B3A48] p-8 rounded-[20px] flex flex-col gap-4 w-[550px] h-[248px] group hover:bg-[#3CB55A] hover:opacity-90 cursor-pointer">
            <div className="flex items-start gap-5 ">
              <div className="p-3 rounded-lg bg-[#1E4452] group-hover:bg-[#60C278] transition-all duration-300 ">
                {/* Icon only */}

                <img src="/man.svg" alt="Icon" className="w-[36px] h-[36px]" />
              </div>
              <h3 className="text-white font-[inter] text-[24px] leading-[100%] tracking-[-0.5px] w-[238px] h-[29px] mt-[25px]">
                Managed IT Services
              </h3>
            </div>

            <p className="text-[#6E8C97] font-[400] text-[18px] leading-[100%] tracking-[-0.5px] w-[470px] h-[44px] mt-[25px] group-hover:text-white">
              Comprehensive IT management tailored specifically for tax &
              accounting professionals.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-[#0B3A48] p-8 rounded-[20px] flex flex-col gap-4 w-[550px] h-[248px] group hover:bg-[#3CB55A] hover:opacity-90 cursor-pointer">
            <div className="flex items-start gap-5 ">
              <div className="p-3 rounded-lg bg-[#1E4452] group-hover:bg-[#60C278] transition-all duration-300 ">
                {/* Icon only */}

                <img src="/app.svg" alt="Icon" className="w-[36px] h-[36px]" />
              </div>
              <h3 className="text-white font-[inter] text-[24px] leading-[100%] tracking-[-0.5px] w-[238px] h-[29px] mt-[25px]">
                Applications Hosting
              </h3>
            </div>
            <p className="text-[#6E8C97] font-[400] text-[18px] leading-[100%] tracking-[-0.5px] w-[470px] h-[44px] mt-[25px] group-hover:text-white">
              Endless integration, seamless access: Your critical applications
              on dedicated, high-performance servers.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-[#0B3A48] p-8 rounded-[20px] flex flex-col gap-4 w-[550px] h-[248px] group hover:bg-[#3CB55A] hover:opacity-90 cursor-pointer">
            <div className="flex items-start gap-5">
              {/* Only background div, no background image */}
              <div className="p-3 rounded-lg bg-[#1E4452] group-hover:bg-[#60C278] transition-all duration-300 ">
                {/* Icon only */}

                <img src="/acc.svg" alt="Icon" className="w-[36px] h-[36px]" />
              </div>

              <h3 className="text-white group-hover:text-white font-[inter] text-[24px] leading-[100%] tracking-[-0.5px] w-[238px] h-[29px] mt-[15px]">
                Accounting Software Hosting
              </h3>
            </div>

            <p className="text-white font-[400] text-[18px] leading-[100%] tracking-[-0.5px] w-[470px] h-[44px] mt-[25px]">
              Elevate your practice with secure, high-performance accounting
              software hosting optimized for your workflow.
            </p>
          </div>
        </div>
      </div>
      <div className="py-28 bg-white">
        <div className="custom-container">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-black">
            Why Tax & Accounting Firms Choose Verito
          </h2>
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* First Card */}
              <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-start h-[290px]">
                <img src="/upt.svg" alt="Uptime Guarantee" className="mb-4" />
                <div className="text-[38px] font-extrabold text-[#3CB55A] mb-2 pt-[46px]">
                  99.999%
                </div>
                <div className="text-left text-black text-[18px] font-medium">
                  Uptime Guarantee
                </div>
              </div>

              {/* Second Card */}
              <div className="bg-green-50 rounded-2xl p-8 flex flex-col items-start h-[290px]">
                <img
                  src="/expe.svg"
                  alt="Expert Technical Support"
                  className="mb-4"
                />
                <div className="text-[38px] font-extrabold text-[#3CB55A] mb-2 pt-[46px]">
                  24/7
                </div>
                <div className="text-left text-black text-[18px] font-medium">
                  Expert Technical Support
                </div>
              </div>

              {/* Third Card */}
              <div className="bg-gray-100 rounded-2xl p-8 flex flex-col items-start h-[290px]">
                <img
                  src="/acco.svg"
                  alt="Accounting Firms Served"
                  className="mb-4"
                />
                <div className="text-[38px] font-extrabold text-[#3CB55A] mb-2 pt-[46px]">
                  508+
                </div>
                <div className="text-left text-black text-[18px] font-medium">
                  Accounting Firms Served
                </div>
              </div>

              {/* Fourth Card */}
              <div className="bg-green-50 rounded-2xl p-8 flex flex-col items-start h-[290px]">
                <img
                  src="/indu.svg"
                  alt="Industry Experience"
                  className="mb-4"
                />
                <div className="text-[38px] font-extrabold text-[#3CB55A] mb-2 pt-[46px]">
                  9+ Years
                </div>
                <div className="text-left text-black text-[18px] font-medium">
                  Industry Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <div className="bg-[#072530] text-white py-28 z-10 relative">
          <div className="custom-container">
            <h2 className="text-2xl sm:w-[60%] mx-auto md:text-2xl lg:text-[36px] font-semibold text-center mb-12">
              The Verito Advantage — Built for Firms That Can’t Afford IT
              Failures
            </h2>

            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5 z-10 place-items-center justify-center max-w-[1100px] mx-auto">
              {/* Full-bleed background image */}
              {/* <div className="absolute inset-0 -z-10 bg-[#072530]">
                  <img
                    src="/assets/hero.jpeg"
                    alt="Background"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                </div> */}

              {/* Center overlay on large screens */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
                <img src="/img.svg" alt="Overlay" />
              </div>

              {/* Card 1 */}
              <div className="bg-[#123A49] h-[335px] rounded-[24px] p-6 transition-all duration-300 hover:bg-[#173545] flex flex-col justify-between">
                <div className="flex flex-col gap-4 pt-6">
                  <div className="p-2 rounded-lg">
                    <img src="/unin.svg" alt="Icon" className="w-9 h-9" />
                  </div>
                  <h3 className="text-[24px] font-medium text-white">
                    Uninterrupted Access, No Downtime Risks
                  </h3>
                </div>
                <p className="text-[16px] text-[#6E8C97]">
                  Your software, files, and workflows always available—no
                  outages, no interruptions, no lost productivity.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#123A49] h-[335px] rounded-[24px] p-6 transition-all duration-300 hover:bg-[#173545] flex flex-col justify-between">
                <div className="flex flex-col gap-4 pt-6">
                  <div className="p-2 rounded-lg">
                    <img src="/comp.svg" alt="Icon" className="w-9 h-9" />
                  </div>
                  <h3 className="text-[24px] font-medium text-white">
                    Compliance Without Compromise
                  </h3>
                </div>
                <p className="text-[16px] text-[#6E8C97]">
                  Built-in SOC 2, IRS, and FTC standards compliance keeps client
                  data secure and audit-ready.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-[#123A49] h-[335px] rounded-[24px] p-6 transition-all duration-300 hover:bg-[#173545] flex flex-col justify-between">
                <div className="flex flex-col gap-4 pt-6">
                  <div className="p-2 rounded-lg">
                    <img src="/real.svg" alt="Icon" className="w-9 h-9" />
                  </div>
                  <h3 className="text-[24px] font-medium text-white">
                    Real IT Support, No Waiting
                  </h3>
                </div>
                <p className="text-[16px] text-[#6E8C97]">
                  Tax & Accounting IT experts, available 24/7—no generic
                  support, no hold times.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-[#123A49] h-[335px] rounded-[24px] p-6 transition-all duration-300 hover:bg-[#173545] flex flex-col justify-between">
                <div className="flex flex-col gap-4 pt-6">
                  <div className="p-2 rounded-lg">
                    <img src="/inst.svg" alt="Icon" className="w-9 h-9" />
                  </div>
                  <h3 className="text-[24px] font-medium text-white">
                    Instant Speed, Zero Slowdowns
                  </h3>
                </div>
                <p className="text-[16px] text-[#6E8C97]">
                  Dedicated private servers mean QuickBooks, Drake, UltraTax,
                  and Lacerte always run at peak speed.
                </p>
              </div>

              {/* Card 5 */}
              <div
                className="bg-[#123A49] h-[335px] rounded-[24px] p-6 transition-all duration-300 hover:bg-[#173545] flex flex-col justify-between
     lg:col-start-3"
              >
                <div className="flex flex-col gap-4 pt-6 mb-4">
                  <div className="p-2 rounded-lg">
                    <img src="/full.svg" alt="Icon" className="w-9 h-9" />
                  </div>
                  <h3 className="text-[24px] font-medium text-white">
                    Fully Managed, Zero Maintenance
                  </h3>
                </div>
                <p className="text-[16px] text-[#6E8C97]">
                  We handle setup, security, updates, and troubleshooting—so you
                  can focus on your clients.
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-[#123A49] h-[335px] rounded-[24px] p-6 transition-all duration-300 hover:bg-[#173545] flex flex-col justify-between">
                <div className="flex flex-col gap-4 pt-6">
                  <div className="p-2 rounded-lg">
                    <img src="/scale.svg" alt="Icon" className="w-9 h-9" />
                  </div>
                  <h3 className="text-[24px] font-medium text-white">
                    Scale When You Need It, Save When You Don’t
                  </h3>
                </div>
                <p className="text-[16px] text-[#6E8C97]">
                  Instantly adjust resources for tax season—no long-term
                  contracts, no wasted costs.
                </p>
              </div>

              {/* Card 7 */}
              <div className="bg-[#123A49] h-[335px] rounded-[24px] p-6 transition-all duration-300 hover:bg-[#173545] flex flex-col justify-between">
                <div className="flex flex-col gap-4 pt-6">
                  <div className="p-2 rounded-lg">
                    <img src="/your.svg" alt="Icon" className="w-9 h-9" />
                  </div>
                  <h3 className="text-[24px] font-medium text-white">
                    Your Data, Fully Isolated, Always Secure
                  </h3>
                </div>
                <p className="text-[16px] text-[#6E8C97]">
                  Your firm’s data and applications stay in their own
                  high-performance cloud—never shared, never at risk.
                </p>
              </div>

              {/* Card 8 */}
              <div className="bg-[#123A49] h-[335px] rounded-[24px] p-6 transition-all duration-300 hover:bg-[#173545] flex flex-col justify-between">
                <div className="flex flex-col gap-4 pt-6">
                  <div className="p-2 rounded-lg">
                    <img src="/any.svg" alt="Icon" className="w-9 h-9" />
                  </div>
                  <h3 className="text-[24px] font-medium text-white">
                    Any Software, No Limits
                  </h3>
                </div>
                <p className="text-[16px] text-[#6E8C97]">
                  Run any tax, accounting, or business application—our unlimited
                  software catalog adapts to your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="custom-container text-center p-5 pt-12 py-8 px-4">
            <h1 className="text-2xl sm:text-3xl mb-2 font-bold text-center">
              Success Stories from Our Clients
            </h1>
            <p className="text-[#6E8C97] mb-8 text-center  sm:text-lg">
              Real accounting firms achieving exceptional results
            </p>
          </div>

          <div className="custom-container flex flex-col lg:flex-row items-stretch gap-6 justify-center mb-10 mt-10 w-full">
            {/* Left Big Card */}
            <div className="bg-[#123A49] rounded-[24px] p-6 sm:p-8 shadow-lg w-full lg:w-[560px] pt-4 sm:pt-16 order-2 lg:order-1 h-full flex flex-col">
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6 sm:mb-10">
                <div className="w-[66px] h-[66px] rounded-full relative bg-[#234957]">
                  <img
                    src="/pro1.svg"
                    alt="Eclipse"
                    className="absolute inset-0 m-auto"
                  />
                  <img
                    src="/pro2.svg"
                    alt="Energy"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <h2 className="text-[18px] sm:text-2xl font-medium w-1/2 text-left">
                  Vashon Island Professionals LLC
                </h2>
              </div>

              {/* Problem & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-6 sm:mb-8 flex-grow">
                <div>
                  <h4 className="text-[#6E8C97] font-medium mb-1">Problem:</h4>
                  <p className="text-[#9DB6BF] text-sm sm:text-base">
                    Suffered downtime issues during critical tax season
                  </p>
                </div>
                <div>
                  <h4 className="text-[#6E8C97] font-medium mb-1">Solution:</h4>
                  <p className="text-[#9DB6BF] text-sm sm:text-base">
                    Migrated to Verito’s private cloud hosting
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="bg-[#2C5463] p-4 sm:p-8 rounded-[24px] flex flex-col text-left">
                <h4 className="text-white font-semibold mb-1">Results:</h4>
                <p className="text-[#6E8C97] text-sm sm:text-base">
                  Zero downtime, 35% faster processing, improved client
                  satisfaction
                </p>
              </div>
            </div>

            {/* Right Small Cards */}
            <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-96 order-1 lg:order-2 h-full justify-between">
              {/* Active Selected Card */}
              <button className="flex items-center gap-3 sm:gap-4 px-4 py-6 sm:py-8 rounded-[24px] transition bg-[#123A49] border border-green-500/50 shadow-lg">
                <div className="w-[66px] h-[66px] rounded-full relative bg-[#234957]">
                  <img
                    src="/pro1.svg"
                    alt="Eclipse"
                    className="absolute inset-0 m-auto"
                  />
                  <img
                    src="/pro2.svg"
                    alt="Energy"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <span className="font-medium text-left text-base md:text-[20px]">
                  Vashon Island Professionals LLC
                </span>
              </button>

              {/* Other Cards */}
              <button className="flex items-center gap-3 sm:gap-4 px-4 py-6 sm:py-8 rounded-[24px] transition bg-[#123A49] hover:border-green-500/50 border border-transparent ">
                <div className="w-[66px] h-[66px] rounded-full relative bg-[#234957]">
                  <img
                    src="/pro1.svg"
                    alt="Eclipse"
                    className="absolute inset-0 m-auto"
                  />
                  <img
                    src="/pro2.svg"
                    alt="Energy"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <span className="font-medium text-left text-base md:text-[20px]">
                  R-biopharm Inc
                </span>
              </button>

              <button className="flex items-center gap-3 sm:gap-4 px-4 py-6 sm:py-8 rounded-[24px] transition bg-[#123A49] hover:border-green-500/50 border border-transparent">
                <div className="w-[66px] h-[66px] rounded-full relative bg-[#234957]">
                  <img
                    src="/pro1.svg"
                    alt="Eclipse"
                    className="absolute inset-0 m-auto"
                  />
                  <img
                    src="/pro2.svg"
                    alt="Energy"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <span className="font-medium text-left text-base md:text-[20px]">
                  Hamilton Tax and Accounting
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white text-center p-6 ">
        {/* Header / Testimonial */}
        <div className="max-w-3xl mx-auto ">
          <blockquote className="italic text-[#000000] text-[24px] mb-6 font-[inter] w-[705px] h-[58px]">
            "Verito has transformed how our firm operates. The security,
            performance, and support are unmatched in the industry."
          </blockquote>

          {/* Profile */}
          <div className="flex items-center justify-center mb-5">
            <img
              src="/elli.png"
              alt="Jane Smith"
              className="w-16 h-16 rounded-full mr-3"
            />
            <div className="text-left">
              <p className="font-semibold w-[156px] h-[24px] text-[20px]">
                Jane Smith, CPA
              </p>
              <p className="text-green-600 text-sm text-[14px]">
                Smith Accounting Partners
              </p>
            </div>
          </div>

          {/* Buttons */}

          <div className="flex justify-center gap-6 mt-4 mb-12 flex-wrap ">
            {["AICPA", "NYSSCPA", "IMA"].map((org) => (
              <span
                key={org}
                className="border border-green-400 text-green-600 px-4 py-1 rounded-full text-sm hover:bg-green-50"
              >
                {org}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl font-bold mb-3 text-[36px]">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mb-6 text-[18px]">
          Still have some questions in mind?
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-4 ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl px-4 py-4 shadow-sm"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="text-gray-800 font-medium text-sm sm:text-base">
                    {faq.question}
                  </p>
                  <div className="bg-green-500 p-1.5 rounded-full">
                    {openIndex === index ? <ArrowDown /> : <ArrowRight />}
                  </div>
                </div>

                {openIndex === index && (
                  <div className="mt-3 text-gray-600 text-sm">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="relative bg-[#072530] text-white min-h-[450px] sm:min-h-[400px] flex flex-col items-center justify-center px-4 py-10 sm:py-16 overflow-hidden">
        {/* Floating Icons, centered as a group */}
        <div className="relative w-full h-[260px] sm:h-[300px]">
          <div className="absolute inset-0 pointer-events-none ">
            <div className="relative w-full h-full">
              {/* Icon 1 */}
              <div
                className="absolute w-10 h-10 sm:w-14 sm:h-14 
                rounded-xl bg-slate-800/70 backdrop-blur-sm 
                flex items-center justify-center shadow-lg 
                border border-slate-700 
                left-[10%] top-[10%] sm:left-[30%] sm:top-[28%]"
              >
                <img
                  src="/icon1.png"
                  alt="icon1"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>

              {/* Icon 2 */}
              <div
                className="absolute w-10 h-10 sm:w-14 sm:h-14 
                rounded-xl bg-slate-800/70 backdrop-blur-sm 
                flex items-center justify-center shadow-lg 
                border border-slate-700 
                left-[12%] top-[8%] sm:left-[40%] sm:top-[18%]"
              >
                <img
                  src="/icon2.png"
                  alt="icon2"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              {/* Icon 3 */}
              <div className="absolute w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-700 right-[10%] top-[8%] sm:left-[58%] sm:top-[20%]">
                <img
                  src="/icon3.png"
                  alt="icon3"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>

              {/* Icon 4 */}
              <div className="absolute w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-700 right-[8%] top-[14%] sm:left-[70%] sm:top-[30%]">
                <img
                  src="/icon4.png"
                  alt="icon4"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              {/* Icon 5 */}
              <div className="absolute w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-700 left-[20%] bottom-[12%] sm:left-[32%] sm:bottom-[18%]">
                <img
                  src="/icon7.png"
                  alt="icon5"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              {/* Icon 6 */}
              <div className="absolute w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-700 left-[50%] bottom-[8%] sm:left-[50%] sm:bottom-[18%]">
                <img
                  src="/icon6.png"
                  alt="icon6"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              {/* Icon 7 */}
              <div className="absolute w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-700 right-[14%] bottom-[14%] sm:left-[64%] sm:bottom-[18%]">
                <img
                  src="/icon5.png"
                  alt="icon7"
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </div>
              {/* Icon 8 */}
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div class="relative z-10 text-center w-full max-w-[969px] h-[44px] mx-auto mt-[90px] mb-[50px]">
          <h1 class="text-[36px] font-inter font-semibold leading-[100%] tracking-[-1px] text-center px-4">
            Secure Your Firm: Tax &amp; Accountant Security Assessment
          </h1>
          <p class="text-slate-300 text-[18px] max-w-2xl mx-auto px-4 mt-4">
            Answer 6 quick questions to receive your personalized security
            report and compliance recommendations tailored to your firm's
            specific needs.
          </p>
        </div>
      </section>
      <div className="w-full h-[1200px] pt-[90px] pr-[30px] pb-[35px] pl-[30px] bg-[#072530] flex flex-col items-center gap-[80px] mx-auto">
        {/* Green Background Box with custom image */}
        <div
          className=" w-[1000px] h-[400px] rounded-[24px] bg-cover bg-center text-white text-center px-6 py-10"
          style={{ backgroundImage: "url('/bg.png')" }} // <-- Green background image here
        >
          <div className="flex justify-center">
            <h2 className="text-[44px] leading-[100%] font-semibold tracking-[-1px] text-center mb-4 max-w-[543px]">
              Ready to Elevate Your <br />
              Firm's IT Infrastructure?
            </h2>
          </div>
          <p className="text-[18px] leading-[100%] tracking-[-0.5px] text-center text-[#B5E0C5] mb-6 max-w-[594px] mx-auto">
            Experience the Verito difference with secure, reliable cloud hosting
            <br />
            designed for tax and accounting professionals.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 mx-auto max-w-[493px] h-[58px] rounded-[14px]">
            {/* Buttons go here */}

            <button className="w-[240px] h-[58px] bg-white text-black  font-[inter] text-[18px] leading-[100%] tracking-[-0.5px] rounded-[14px] px-[40px] py-[18px]">
              Start Your Free Trial
            </button>

            <button className="w-[223px] h-[58px] bg-white/30 text-white font-[inter] text-[18px] leading-[100%] tracking-[-0.5px] border border-white/30 rounded-[14px] px-[40px] py-[18px] backdrop-blur-[30px]">
              Schedule a Demo
            </button>
          </div>
          <p className="text-[18px] leading-[100%] tracking-[-0.5px] font-normal text-center text-[#B1DEC2]">
            14-day risk-free trial. No credit card required.
          </p>
        </div>
        {/* Logos section inside green box */}
        <div className="w-[866px] h-[96px] gap-[30px] py-6 rounded-xl  ">
          <p className="text-white text-[24px] font-medium leading-[100%] tracking-[-0.5px] text-center mb-10 ">
            Backed by the Best in Security & IT
          </p>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            <img src="/vmware.png" alt="VMware" className="h-6 sm:h-8" />
            <img src="/microsoft.png" alt="Microsoft" className="h-6 sm:h-8" />
            <img src="/veeam.png" alt="Veeam" className="h-6 sm:h-8" />
            <img src="/crow.png" alt="Crowdstrike" className="h-6 sm:h-8" />
          </div>
        </div>
        <div className="w-[1150px] border border-white opacity-10"></div>
        <footer className="bg-[#072530] text-white ">
          <div className="w-full flex flex-wrap lg:flex-nowrap justify-between gap-8 px-4 lg:px-0">
            {/* Col 1: Logo + Info (takes 2/6 of width) */}
            <div className="w-[196px] h-[162px] sm:w-1/2 lg:w-2/12 flex flex-col gap-[20px]">
              <img src="/fig-logo.png" alt="Logo" className="w-12 h-12" />
              <p className="text-[13px] leading-[100%] tracking-[-0.5px] text-[#6B7C81]">
                Secure Cloud Solutions for Tax
                <br />& Accounting Professionals
              </p>
              <p className="text-[16px] leading-[100%] tracking-[-0.5px] text-white/80">
                123 Tech Plaza, Suite 400
                <br />
                San Francisco, CA 94105
              </p>
            </div>

            {/* Col 2: Services */}
            <div className="w-[205px] h-[141px] sm:w-1/3 lg:w-2/12 gap-[20px]">
              <h3 className="text-[16px] leading-[100%] tracking-[-0.5px] font-medium text-white mb-3">
                Services
              </h3>

              <ul className="text-[14px] leading-[34px] tracking-[-0.5px] font-normal text-[#A6A6A6] space-y-0">
                <li>Dedicated Private Server Hosting</li>
                <li>Managed IT Services</li>
                <li>VeritComplete</li>
              </ul>
            </div>

            {/* Col 3: Pricing */}
            <div className="w-[113px] h-[105px] sm:w-1/3 lg:w-2/12 flex flex-col gap-[10px]">
              <h3 className="font-medium text-[16px] leading-[100%] tracking-[-0.5px] text-white w-[50px] h-[19px]">
                Pricing
              </h3>

              <ul className="flex flex-col text-[14px] leading-[34px] tracking-[-0.5px] text-[#A6A6A6] w-[113px] h-[68px]">
                <li>VeritSpace Pricing</li>
                <li>VeritGuard Pricing</li>
              </ul>
            </div>

            {/* Col 4: Get Started */}
            <div className="w-[111px] h-[107px] sm:w-1/3 lg:w-2/12 gap-[20px]">
              <h3 className="text-[16px] font-medium leading-[100%] tracking-[-0.5px] text-white w-[84px] h-[19px] mb-3">
                Get Started
              </h3>

              <ul className="w-[111px] h-[68px] text-[14px] leading-[34px] tracking-[-0.5px] font-normal text-[#A6A6A6] space-y-0">
                <li>Free Hosting Trial</li>
                <li>Schedule A Demo</li>
              </ul>
            </div>

            {/* Col 5: Company */}
            <div className="w-[102px] h-[141px] gap-[20px] sm:w-1/3 lg:w-2/12">
              <h3 className="w-[70px] h-[19px] text-[16px] leading-[100%] tracking-[-0.5px] font-medium text-white mb-3">
                Company
              </h3>

              <ul className="w-[102px] h-[102px] text-[14px] leading-[34px] tracking-[-0.5px] font-normal text-[#A6A6A6] space-y-0">
                <li>About Us</li>
                <li>Our Datacenters</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Col 6: Resources */}
            <div className="w-[86px] h-[141px] gap-[20px] sm:w-1/3 lg:w-2/12">
              <h3 className="w-[77px] h-[19px] text-[16px] leading-[100%] tracking-[-0.5px] font-medium text-white mb-3">
                Resources
              </h3>

              <ul className="w-[86px] h-[102px] text-[14px] leading-[34px] tracking-[-0.5px] font-normal text-[#A6A6A6] space-y-0">
                <li>FAQs</li>
                <li>Blogs</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>

          {/* Bottom logos and rating */}

          <div className="w-[1159.431px] h-[82.968px] flex flex-wrap items-center justify-between gap-[111px] mx-auto mt-10">
            {/* Your content here */}

            {/* Phone & Email */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <img src="/phone.png" alt="Phone" className="w-5 h-5" />
                <span className="text-[16px] leading-[100%] tracking-[-0.5px] font-normal text-white/80 w-[123px] h-[19px]">
                  18555-583-7486
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img src="/gmail.png" alt="Email" className="w-5 h-5" />
                <span className="text-[16px] leading-[100%] tracking-[-0.5px] font-normal text-white/80 w-[127px] h-[19px]">
                  sales@verito.com
                </span>
              </div>
            </div>

            {/* 5 Star Rating */}
            <div className="text-center">
              <p className="text-sm font-semibold">"EXCELLENT"</p>
              <div className="flex justify-center mt-1 mb-1">
                <img src="/star.png" alt="5 stars" className="h-5" />
                <img src="/star.png" alt="5 stars" className="h-5" />
                <img src="/star.png" alt="5 stars" className="h-5" />
                <img src="/star.png" alt="5 stars" className="h-5" />
                <img src="/star.png" alt="5 stars" className="h-5" />
              </div>
              <p className="text-xs">Based on 406 user reviews</p>
              <img src="/exl.svg" alt="G2 logo" className="h-4 mx-auto mt-1" />
            </div>

            {/* Center Round Logo */}
            <div>
              <img src="/aicpa.png" alt="AICPA SOC" className="w-86 h-78" />
            </div>

            {/* Partner Logos */}
            <div className="flex gap-4 items-center flex-wrap justify-center">
              <img src="/proud.png" alt="NATP" className="h-8" />
              <img src="/natp.png" alt="NAEA" className="h-8" />
              <img src="/naea.png" alt="NSTP" className="h-8" />
              <img src="/nstp.png" alt="Partner 4" className="h-8" />
            </div>
          </div>

          <div className="w-full border border-white opacity-10 mx-auto mb-4 mt-8"></div>

          {/* Footer bottom links */}
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4 mt-5">
            {/* Left Side: Copyright */}
            <p className="text-[#455B63]">
              © 2025 Verito Technologies. All Rights Reserved.
            </p>

            {/* Right Side: Links */}
            <div className="flex gap-6 text-[#455B63]">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
              <a href="#" className="hover:underline">
                Acceptable Use Policy
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
