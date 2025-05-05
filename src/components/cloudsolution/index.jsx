import React from "react";

const CloudSolution = () => {
  return (
    <section className="bg-white w-full min-h-screen relative z-0 py-16 px-4 sm:px-6 text-[#072530]">
      <div className="max-w-6xl mx-auto mt-20 flex flex-col items-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-[inter] font-semibold text-center mb-16 max-w-3xl">
          Purpose-Built Cloud Solutions for Tax & Accounting Professionals
        </h2>

        {/* Features Grid */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          {/* Card 1 */}
          <div className="relative w-full md:w-1/3 p-6 rounded-2xl bg-[#F6F6F6] min-h-[250px]">
            <div className="absolute top-4 right-4">
              <img src="/ii.svg" alt="Security" className="w-10 h-10" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] font-semibold font-[inter] mb-4 pr-20">
              Industry-Leading Security
            </h3>
            <p className="text-[16px] sm:text-[18px] text-gray-600 font-[inter]">
              SOC 2 compliant infrastructure with end-to-end encryption and
              multi-factor authentication.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative w-full md:w-1/3 p-6 rounded-2xl bg-[#F6F6F6] min-h-[250px]">
            <div className="absolute top-4 right-4">
              <img src="/max.svg" alt="Performance" className="w-10 h-10" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] font-semibold font-[inter] mb-4">
              Maximum Performance
            </h3>
            <p className="text-[16px] sm:text-[18px] text-gray-600 font-[inter]">
              Lightning-fast servers with 99.999% uptime guarantee for peak tax
              season reliability.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative w-full md:w-1/3 p-6 rounded-2xl bg-[#F6F6F6] min-h-[250px]">
            <div className="absolute top-4 right-4">
              <img src="/247exp.svg" alt="Support" className="w-10 h-10" />
            </div>
            <h3 className="text-[20px] sm:text-[22px] font-semibold font-[inter] mb-4">
              24/7 Expert Support
            </h3>
            <p className="text-[16px] sm:text-[18px] text-gray-600 font-[inter]">
              Dedicated specialists who understand accounting software and tax
              workflows.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full text-center">
          <div className="p-4">
            <p className="text-[36px] sm:text-[48px] font-medium font-[inter] mb-2">
              <span className="text-black">9</span>
              <span className="text-[#199652]">+</span>
            </p>
            <p className="text-[16px] sm:text-[18px] text-gray-600 font-[inter]">
              Years in business
            </p>
          </div>
          <div className="p-4">
            <p className="text-[36px] sm:text-[46px] font-medium font-[inter] mb-2">
              <span className="text-black">98%</span>
              <span className="text-[#199652]">+</span>
            </p>
            <p className="text-[16px] sm:text-[18px] text-gray-600 font-[inter]">
              Satisfaction rating
            </p>
          </div>
          <div className="p-4">
            <p className="text-[36px] sm:text-[46px] font-medium font-[inter] mb-2">
              <span className="text-black">50</span>
              <span className="text-[#199652]">+</span>
            </p>
            <p className="text-[16px] sm:text-[18px] text-gray-600 font-[inter]">
              Years of experience
            </p>
          </div>
          <div className="p-4">
            <p className="text-[36px] sm:text-[46px] font-medium font-[inter] mb-2">
              <span className="text-black">1000</span>
              <span className="text-[#199652]">+</span>
            </p>
            <p className="text-[16px] sm:text-[18px] text-gray-600 font-[inter]">
              Clients Served
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudSolution;
