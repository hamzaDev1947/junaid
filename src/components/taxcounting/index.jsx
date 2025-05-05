import React from "react";

const TaxCounting = () => {
  return (
    <div className="py-28 bg-white">
      <div className="custom-container px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-black">
          Why Tax & Accounting Firms Choose Verito
        </h2>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card Template */}
            {[
              {
                icon: "/upt.svg",
                stat: "99.999%",
                label: "Uptime Guarantee",
                bg: "bg-gray-100",
              },
              {
                icon: "/expe.svg",
                stat: "24/7",
                label: "Expert Technical Support",
                bg: "bg-green-50",
              },
              {
                icon: "/acco.svg",
                stat: "508+",
                label: "Accounting Firms Served",
                bg: "bg-gray-100",
              },
              {
                icon: "/indu.svg",
                stat: "9+ Years",
                label: "Industry Experience",
                bg: "bg-green-50",
              },
            ].map((card, index) => (
              <div
                key={index}
                className={`${card.bg} rounded-2xl p-8 flex flex-col items-start h-[290px]`}
              >
                <img src={card.icon} alt={card.label} className="mb-4" />
                <div className="text-[38px] font-extrabold text-[#3CB55A] mb-2 pt-[46px]">
                  {card.stat}
                </div>
                <div className="text-left text-black text-[18px] font-medium">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxCounting;
