import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#072530] text-white w-full px-4 pb-5">
      <div className="w-full max-w-7xl px-4 flex flex-wrap lg:flex-nowrap justify-between gap-8 mx-auto">
        {/* Footer columns (same layout, just responsive widths below) */}
        <div className="w-full sm:w-1/2 lg:w-2/12 mb-6">
          <img src="/fig-logo.png" alt="Logo" className="w-12 h-12 mb-4" />
          <p className="text-[13px] text-[#6B7C81] mb-2 leading-tight">
            Secure Cloud Solutions for Tax
            <br />& Accounting Professionals
          </p>
          <p className="text-[16px] text-white/80 leading-tight">
            123 Tech Plaza, Suite 400
            <br />
            San Francisco, CA 94105
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/12 mb-6">
          <h3 className="text-white font-semibold mb-3">Solutions</h3>
          <ul className="space-y-2 text-[#6B7C81] text-sm">
            <li>
              <a href="#" className="hover:text-white">
                QuickBooks Hosting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sage Hosting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Lacerte Hosting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Drake Hosting
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                ProSeries Hosting
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 lg:w-2/12 mb-6">
          <h3 className="text-white font-semibold mb-3">Industries</h3>
          <ul className="space-y-2 text-[#6B7C81] text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Accounting Firms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Tax Professionals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                CPAs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Bookkeepers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Small Businesses
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 lg:w-2/12 mb-6">
          <h3 className="text-white font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-[#6B7C81] text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Knowledge Base
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Help Center
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 lg:w-2/12 mb-6">
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-[#6B7C81] text-sm">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section with contact and logos */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6 mx-auto mt-10 px-4">
        {/* Phone & Email */}
        <div className="flex flex-col gap-2 items-center lg:items-start">
          <div className="flex items-center gap-2">
            <img src="/phone.png" alt="Phone" className="w-5 h-5" />
            <span className="text-[16px] text-white/80">18555-583-7486</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/gmail.png" alt="Email" className="w-5 h-5" />
            <span className="text-[16px] text-white/80">sales@verito.com</span>
          </div>
        </div>

        {/* Rating */}
        <div className="text-center">
          <p className="text-sm font-semibold">"EXCELLENT"</p>
          <div className="flex justify-center mt-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <img key={i} src="/star.png" alt="star" className="h-5" />
            ))}
          </div>
          <p className="text-xs">Based on 406 user reviews</p>
          <img src="/exl.svg" alt="G2 logo" className="h-4 mx-auto mt-1" />
        </div>

        {/* Round Logo */}
        <div>
          <img src="/aicpa.png" alt="AICPA SOC" className="w-[86px] h-[78px]" />
        </div>

        {/* Partner Logos */}
        <div className="flex gap-4 items-center flex-wrap justify-center">
          <img src="/proud.png" alt="NATP" className="h-8" />
          <img src="/natp.png" alt="NAEA" className="h-8" />
          <img src="/naea.png" alt="NSTP" className="h-8" />
          <img src="/nstp.png" alt="Partner 4" className="h-8" />
        </div>
      </div>

      <div className="w-[1350px] border border-white opacity-10 mx-auto my-6"></div>

      {/* Footer bottom links */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <p className="text-[#455B63] text-sm text-center sm:text-left mb-2 sm:mb-0">
          © 2025 Verito Technologies. All Rights Reserved.
        </p>
        <div className="flex gap-4 text-[#455B63] text-sm">
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
  );
};

export default Footer;
