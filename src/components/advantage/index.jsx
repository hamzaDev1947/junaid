import React from "react";

export const Advantage = () => {
  return (
    <div className="mb-10">
      <div className="bg-[#072530] text-white py-16 sm:py-24 lg:py-28 z-10 relative">
        <div className="custom-container max-w-[1200px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold text-center mb-12 sm:w-4/5 md:w-3/5 lg:w-[60%] mx-auto">
            The Verito Advantage — Built for Firms That Can’t Afford IT Failures
          </h2>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 z-10 place-items-center justify-center">
            {/* Overlay only on lg+ */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <img src="/img.svg" alt="Overlay" />
            </div>

            {/* Cards */}
            {[
              {
                icon: "/unin.svg",
                title: "Uninterrupted Access, No Downtime Risks",
                desc: "Your software, files, and workflows always available—no outages, no interruptions, no lost productivity.",
              },
              {
                icon: "/comp.svg",
                title: "Compliance Without Compromise",
                desc: "Built-in SOC 2, IRS, and FTC standards compliance keeps client data secure and audit-ready.",
              },
              {
                icon: "/real.svg",
                title: "Real IT Support, No Waiting",
                desc: "Tax & Accounting IT experts, available 24/7—no generic support, no hold times.",
              },
              {
                icon: "/inst.svg",
                title: "Instant Speed, Zero Slowdowns",
                desc: "Dedicated private servers mean QuickBooks, Drake, UltraTax, and Lacerte always run at peak speed.",
              },
              {
                icon: "/full.svg",
                title: "Fully Managed, Zero Maintenance",
                desc: "We handle setup, security, updates, and troubleshooting—so you can focus on your clients.",
                className: "lg:col-start-3",
              },
              {
                icon: "/scale.svg",
                title: "Scale When You Need It, Save When You Don’t",
                desc: "Instantly adjust resources for tax season—no long-term contracts, no wasted costs.",
              },
              {
                icon: "/your.svg",
                title: "Your Data, Fully Isolated, Always Secure",
                desc: "Your firm’s data and applications stay in their own high-performance cloud—never shared, never at risk.",
              },
              {
                icon: "/any.svg",
                title: "Any Software, No Limits",
                desc: "Run any tax, accounting, or business application—our unlimited software catalog adapts to your needs.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`
              bg-[#123A49] min-h-[335px] rounded-[24px] p-6 flex flex-col justify-between 
              transition-all duration-300 hover:bg-[#173545]
              ${card.className || ""}
            `}
              >
                <div className="flex flex-col gap-4 pt-6">
                  <div className="p-2 rounded-lg">
                    <img
                      src={card.icon}
                      alt={`${card.title} Icon`}
                      className="w-9 h-9"
                    />
                  </div>
                  <h3 className="text-[24px] font-medium text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-[16px] text-[#6E8C97]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="custom-container px-4 sm:px-6 lg:px-8 text-center pt-12 pb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Success Stories from Our Clients
          </h1>
          <p className="text-[#6E8C97] mb-8 sm:text-lg">
            Real accounting firms achieving exceptional results
          </p>
        </div>

        <div className="custom-container px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-stretch gap-6 justify-center mb-10 mt-10 w-full">
          {/* Left Big Card */}
          <div className="bg-[#123A49] rounded-[24px] p-6 sm:p-8 shadow-lg w-full lg:max-w-[560px] order-2 lg:order-1 flex flex-col">
            <div className="flex items-center gap-4 mb-6 sm:mb-10">
              <div className="w-[66px] h-[66px] rounded-full bg-[#234957] relative">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow mb-6 sm:mb-8">
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

            <div className="bg-[#2C5463] p-4 sm:p-8 rounded-[24px] flex flex-col">
              <h4 className="text-white font-semibold mb-1">Results:</h4>
              <p className="text-[#6E8C97] text-sm sm:text-base">
                Zero downtime, 35% faster processing, improved client
                satisfaction
              </p>
            </div>
          </div>

          {/* Right Small Cards */}
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:max-w-96 order-1 lg:order-2 justify-between">
            {[
              "Vashon Island Professionals LLC",
              "R-biopharm Inc",
              "Hamilton Tax and Accounting",
            ].map((title, i) => (
              <button
                key={i}
                className={`
              flex items-center gap-3 sm:gap-4 px-4 py-6 sm:py-8 rounded-[24px] transition 
              bg-[#123A49] ${
                i === 0
                  ? "border border-green-500/50 shadow-lg"
                  : "hover:border-green-500/50 border border-transparent"
              }
            `}
              >
                <div className="w-[66px] h-[66px] rounded-full bg-[#234957] relative">
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
                  {title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Advantage;
