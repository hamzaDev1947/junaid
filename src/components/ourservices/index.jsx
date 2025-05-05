import React from "react";

const OurServices = () => {
  return (
    <div className="bg-gradient-to-b from-[#041E2A] to-[#072530] py-16 px-4">
      {/* Heading */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[36px] font-semibold font-[Inter] leading-[100%] tracking-[-1px] text-white mb-4 w-full max-w-[214px]">
          Our Services
        </h2>
        <p className="font-[Inter] font-normal text-[18px] leading-[26px] tracking-[-0.5px] text-[#6B7C81] w-full max-w-[609px]">
          Click on any service below to learn more about how Verito can help
          your accounting or tax firm with secure, high-performance cloud
          solutions.
        </p>
      </div>

      {/* Services Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
        {/* Service Card */}
        {[...Array(4)].map((_, index) => {
          const content = [
            {
              icon: "/tax.svg",
              title: "Tax Software Hosting",
              desc: "Maximize efficiency with dedicated private server tax software hosting designed for optimal performance.",
            },
            {
              icon: "/man.svg",
              title: "Managed IT Services",
              desc: "Comprehensive IT management tailored specifically for tax & accounting professionals.",
            },
            {
              icon: "/app.svg",
              title: "Applications Hosting",
              desc: "Endless integration, seamless access: Your critical applications on dedicated, high-performance servers.",
            },
            {
              icon: "/acc.svg",
              title: "Accounting Software Hosting",
              desc: "Elevate your practice with secure, high-performance accounting software hosting optimized for your workflow.",
            },
          ][index];

          return (
            <div
              key={index}
              className="bg-[#123A49] p-8 rounded-[20px] flex flex-col gap-4 w-full max-w-[550px] h-auto group hover:bg-[#3CB55A] hover:opacity-90 cursor-pointer mx-auto"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-lg bg-[#1E4452] group-hover:bg-[#60C278] transition-all duration-300">
                  <img
                    src={content.icon}
                    alt="Icon"
                    className="w-[36px] h-[36px]"
                  />
                </div>
                <h3 className="text-white font-[inter] text-[24px] leading-[100%] tracking-[-0.5px] mt-[20px]">
                  {content.title}
                </h3>
              </div>
              <p className="text-[#6E8C97] group-hover:text-white font-[400] text-[18px] leading-[26px] tracking-[-0.5px]">
                {content.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
