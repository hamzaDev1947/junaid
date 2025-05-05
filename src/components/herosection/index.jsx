import Navbar from "../navbar/index";
const HeroSection = () => {
  return (
    <div className="relative bg-[#072530] min-h-screen text-white px-0 py-4 font-[inter] m-8 rounded-[20px] ">
      {/* Navbar */}
      <Navbar />
      <section
        id="features"
        className="w-full px-4 sm:px-6 py-16 transition-all duration-500 ease-in-out"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-center px-4 sm:px-0">
          {/* Card 1 */}
          <div className="w-full sm:w-[198px] h-[112px] border border-white/10 rounded-[14px] bg-white/10 backdrop-blur-[30px] pt-[28px] px-[34px] text-white cursor-pointer transition duration-500 transform sm:-translate-x-4 -translate-y-4 sm:ml-[140px] mx-auto">
            <div className="flex flex-col items-center gap-[10px]">
              <img src="/pri.svg" alt="Private Servers" className="w-6 h-6" />
              <span>Private Servers</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[265.7px] h-[112px] border border-white/10 rounded-[14px] bg-white/10 backdrop-blur-[30px] pt-[28px] px-[34px] text-white cursor-pointer transition duration-500 transform sm:translate-x-4 -translate-y-4 sm:ml-[130px] mx-auto">
            <div className="flex flex-col items-center gap-[10px]">
              <img
                src="/soc.svg"
                alt="SOC 2 & FTC-Compliant"
                className="w-6 h-6"
              />
              <span>SOC 2 & FTC-Compliant</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[234.67px] h-[112px] border border-white/10 rounded-[14px] bg-white/10 backdrop-blur-[30px] pt-[28px] px-[34px] text-white cursor-pointer transition duration-500 transform sm:-translate-x-4 translate-y-4 sm:ml-[240px] mx-auto">
            <div className="flex flex-col items-center gap-[10px]">
              <img
                src="/exp.svg"
                alt="24/7 Expert Support"
                className="w-6 h-6"
              />
              <span>24/7 Expert Support</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-[203.64px] h-[112px] border border-white/10 rounded-[14px] bg-white/10 backdrop-blur-[30px] pt-[28px] px-[34px] text-white cursor-pointer transition duration-500 transform translate-x-2 sm:translate-x-4 translate-y-4 sm:mr-[30px] ">
            <div className="flex flex-col items-center gap-[10px]">
              <img src="/opt.svg" alt="99.999% Uptime" className="w-6 h-6" />
              <span>99.999% Uptime</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="it-security"
        className="w-full px-4 sm:px-6 pb-0 relative z-10"
      >
        <div className="w-full max-w-[1120px] h-auto mx-auto bg-gradient-to-r from-[#3CB55A] to-[#0C8B4F] text-white font-[inter] rounded-xl px-6 sm:px-8 py-6 flex flex-col md:flex-row justify-between items-center shadow-lg relative z-10 -mb-[75px]">
          <p className="w-full md:w-[561px] text-[20px] sm:text-[24px] md:text-[28px] leading-[130%] font-medium text-center md:text-left">
            We also provide fully managed IT security solutions for tax &
            accounting firms
          </p>
          <button className="w-full sm:w-auto mt-4 md:mt-0 bg-white text-[#199652] font-semibold rounded-[14px] px-[31px] py-[14px] text-[16px]">
            Learn More →
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
