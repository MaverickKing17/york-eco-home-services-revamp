
import React from 'react';

const trustItems = [
  {
    icon: (
      <div className="bg-[#FF851B] text-white p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    ),
    label: "HomeStars 5-Star",
    subLabel: "TORONTO'S #1 CHOICE"
  },
  {
    icon: (
      <div className="bg-green-600 text-white p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    label: "24/7 Response",
    subLabel: "GTA EMERGENCY SERVICE"
  },
  {
    icon: (
      <div className="bg-blue-700 text-white p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    ),
    label: "HRAI Member",
    subLabel: "INDUSTRY STANDARD"
  }
];

const TrustBar: React.FC = () => {
  return (
    <section className="bg-white py-14 border-b border-gray-100" aria-label="Company Credentials">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Brand & Safety Statement */}
          <div className="max-w-md text-center lg:text-left">
            <h2 className="text-navy text-2xl font-black uppercase tracking-tight mb-3">
              York Eco-Home Services
            </h2>
            <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-sm mx-auto lg:mx-0">
              Licensed professionals dedicated to GTA safety standards. Every repair is TSSA-verified.
            </p>
          </div>

          {/* High-Impact TSSA Badge (Standalone for maximum visibility) */}
          <div className="order-first lg:order-none mb-4 lg:mb-0">
            <div className="relative group cursor-pointer transform hover:scale-105 transition-all duration-300">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-safety-orange to-navy rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Glass Pill Component - Matching User Screenshot */}
              <div className="relative flex items-center bg-navy/90 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 shadow-2xl">
                {/* Pulsing Status Indicator */}
                <div className="flex items-center space-x-2 mr-6">
                  <div className="relative w-3 h-3">
                    <div className="absolute inset-0 bg-safety-orange rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-3 h-3 bg-safety-orange rounded-full border-2 border-white shadow-[0_0_10px_rgba(255,133,27,0.8)]"></div>
                  </div>
                  <span className="text-white font-black text-[14px] tracking-[0.15em] uppercase whitespace-nowrap">
                    TSSA Licensed
                  </span>
                </div>
                
                {/* Vertical Separator */}
                <div className="w-[1px] h-6 bg-white/20 mr-6"></div>
                
                {/* License Number */}
                <span className="text-gray-300 font-bold text-[14px] tracking-[0.15em] uppercase whitespace-nowrap group-hover:text-white transition-colors">
                  TSSA FS-R-50611
                </span>
              </div>
            </div>
          </div>

          {/* Additional Grid Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-8 w-full lg:w-auto">
            {trustItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 group cursor-default transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-black text-navy tracking-tight whitespace-nowrap leading-none mb-1 group-hover:text-safety-orange transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.1em] text-gray-400">
                    {item.subLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBar;
