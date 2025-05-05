import React from "react";

const Secure = () => {
  return (
    <section className="relative bg-[#072530] text-white min-h-[450px] sm:min-h-[400px] flex flex-col items-center justify-center px-4 py-10 sm:py-16 overflow-hidden">
      {/* Floating Icons, centered as a group */}
      <div className="relative w-full h-[260px] sm:h-[300px]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full">
            {/* Icon 1 */}
            <div className="absolute w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-700 left-[10%] top-[10%] sm:left-[30%] sm:top-[28%]">
              <img
                src="/icon1.png"
                alt="icon1"
                className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
              />
            </div>

            {/* Icon 2 */}
            <div className="absolute w-10 h-10 sm:w-14 sm:h-14 rounded-xl bg-slate-800/70 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-700 left-[12%] top-[8%] sm:left-[40%] sm:top-[18%]">
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
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-center w-full max-w-[969px] mx-auto mt-[90px] mb-[50px] px-4">
        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] font-inter font-semibold leading-[100%] tracking-[-1px] text-center">
          Secure Your Firm: Tax &amp; Accountant Security Assessment
        </h1>
        <p className="text-slate-300 text-[16px] sm:text-[18px] max-w-2xl mx-auto mt-4">
          Answer 6 quick questions to receive your personalized security report
          and compliance recommendations tailored to your firm's specific needs.
        </p>
      </div>
    </section>
  );
};

export default Secure;
