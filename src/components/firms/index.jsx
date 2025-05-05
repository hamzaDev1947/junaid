import React from "react";

const Firms = () => {
  return (
    <div className="w-full pt-[90px] pr-[30px] pb-[35px] pl-[30px] bg-[#072530] flex flex-col items-center gap-[80px] mx-auto">
      {/* Green Background Box */}
      <div
        className="w-full max-w-[1000px] h-auto lg:h-[400px] rounded-[24px] bg-cover bg-center text-white text-center px-4 sm:px-6 py-10"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="flex justify-center">
          <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] leading-[110%] font-semibold tracking-[-1px] text-center mb-4 max-w-[543px]">
            Ready to Elevate Your <br />
            Firm's IT Infrastructure?
          </h2>
        </div>
        <p className="text-[16px] sm:text-[18px] leading-[130%] tracking-[-0.5px] text-center text-[#B5E0C5] mb-6 max-w-[594px] mx-auto">
          Experience the Verito difference with secure, reliable cloud hosting
          <br className="hidden sm:block" />
          designed for tax and accounting professionals.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 mx-auto w-full max-w-[493px]">
          <button className="w-full sm:w-[240px] h-[58px] bg-white text-black font-[inter] text-[18px] leading-[100%] tracking-[-0.5px] rounded-[14px] px-[40px] py-[18px]">
            Start Your Free Trial
          </button>
          <button className="w-full sm:w-[223px] h-[58px] bg-white/30 text-white font-[inter] text-[18px] leading-[100%] tracking-[-0.5px] border border-white/30 rounded-[14px] px-[40px] py-[18px] backdrop-blur-[30px]">
            Schedule a Demo
          </button>
        </div>

        <p className="text-[16px] sm:text-[18px] leading-[100%] tracking-[-0.5px] font-normal text-center text-[#B1DEC2]">
          14-day risk-free trial. No credit card required.
        </p>
      </div>

      {/* Logos section */}
      <div className="w-full max-w-[866px] py-6 rounded-xl px-4 text-center">
        <p className="text-white text-[20px] sm:text-[24px] font-medium leading-[100%] tracking-[-0.5px] mb-6">
          Backed by the Best in Security & IT
        </p>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <img src="/vmware.png" alt="VMware" className="h-6 sm:h-8" />
          <img src="/microsoft.png" alt="Microsoft" className="h-6 sm:h-8" />
          <img src="/veeam.png" alt="Veeam" className="h-6 sm:h-8" />
          <img src="/crow.png" alt="Crowdstrike" className="h-6 sm:h-8" />
        </div>
      </div>
      <div className="w-[1350px] border border-white opacity-10"></div>
    </div>
  );
};

export default Firms;
