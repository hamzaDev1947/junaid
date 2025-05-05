import React, { useState } from "react";
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
const Faqs = () => {
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
    <div className="min-h-screen bg-white text-center p-6">
      {/* Header / Testimonial */}
      <div className="max-w-3xl mx-auto px-4">
        <blockquote className="italic text-black text-[20px] sm:text-[24px] mb-6 font-[inter] w-full max-w-[705px] mx-auto">
          "Verito has transformed how our firm operates. The security,
          performance, and support are unmatched in the industry."
        </blockquote>

        {/* Profile */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-5 gap-4">
          <img
            src="/elli.png"
            alt="Jane Smith"
            className="w-16 h-16 rounded-full"
          />
          <div className="text-center sm:text-left">
            <p className="font-semibold text-[18px] sm:text-[20px] w-full max-w-[156px] mx-auto sm:mx-0">
              Jane Smith, CPA
            </p>
            <p className="text-green-600 text-[14px]">
              Smith Accounting Partners
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 mb-12">
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
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mb-6 text-[16px] sm:text-[18px]">
          Still have some questions in mind?
        </p>
        <div className="space-y-4">
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
                <div className="mt-3 text-gray-600 text-sm sm:text-base text-left">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
