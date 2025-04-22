import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#061a2c] to-[#092b30] min-h-screen text-white px-6 py-4">
      {/* Navbar */}
      <nav className="flex items-center justify-between py-4">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 "
          style={{ top: "-313px", left: "-563px" }}
        >
          <img src="/fig-logo.png" alt="Logo" className="h-84 w-84 " />
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {["Work", "Solutions", "Pricing", "Payloads"].map((item) => (
            <div className="relative group" key={item}>
              <button className="text-white group-hover:text-green-400 flex items-center gap-1">
                {item} <span>▼</span>
              </button>
              {/* Dropdown (demo items) */}
              <div className="absolute top-8 left-0 bg-[#0d2a3a] rounded-md shadow-lg p-2 hidden group-hover:block z-10">
                <ul>
                  <li className="px-4 py-2 hover:bg-green-600 rounded">
                    Tax Software Hosting
                  </li>
                  <li className="px-4 py-2 hover:bg-green-600 rounded">
                    Accounting Software Hosting
                  </li>
                  <li className="px-4 py-2 hover:bg-green-600 rounded">
                    Application Hosting
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full">
          Get Started →
        </button>
      </nav>

      {/* Hero Content */}
      <div className="text-center mt-24">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 h-122 w-698">
          VeritGuard: 24/7 Managed IT for <br />
          Tax & Accounting Firms
        </h1>
        <p className="text-green-400 mb-6">
          Proactive IT Support & Security for
        </p>
        <div
          style={{
            width: "474px",
            height: "54px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            position: "relative",
            margin: "0 auto",
          }}
        >
          {/* Let’s Get Started Button */}
          <button
            style={{
              width: "243px",
              height: "54px",
              padding: "15px 40px",
              borderRadius: "14px",
              background:
                "linear-gradient(100.29deg, #3CB55A 44.18%, #0C8B4F 96.11%)",
              color: "#FFFFFF",
              fontFamily: "Inter, sens-serif",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0",
              border: "none",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            Let’s Get Started
          </button>

          {/* Vertical Line */}
          <div
            style={{
              width: "38px",
              height: "1px",
              borderWidth: "1px",
              borderColor: "#FFFFFF",
              opacity: 0.2,
              transform: "rotate(-90deg)",
              borderStyle: "solid",
            }}
          />

          {/* Schedule A Meeting Button */}
          <button
            style={{
              width: "171px",
              height: "22px",
              color: "#FFFFFF",

              fontFamily: "Inter",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "100%",
              letterSpacing: "0",
            }}
          >
            Schedule A Meeting
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
