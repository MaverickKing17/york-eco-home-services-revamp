
import React from 'react';

const trustItems = [
  {
    icon: (
      <div className="bg-[#FF9F43] text-white p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    ),
    label: "HomeStars 5-Star",
    subLabel: "TORONTO'S #1 CHOICE"
  },
  {
    icon: (
      <div className="bg-[#48BB78] text-white p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    label: "24/7 Response",
    subLabel: "GTA EMERGENCY SERVICE"
  },
  {
    icon: (
      <div className="bg-[#4A90E2] text-white p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      </div>
    ),
    label: "HRAI Member",
    subLabel: "INDUSTRY STANDARD"
  }
];

const TrustBar: React.FC = () => {
  return (
    <section className="bg-white py-14 border-b border-gray-100 relative" aria-label="Professional Credentials">
      {/* Subtle lighting backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[140%] bg-gradient-to-r from-transparent via-blue-50/30 to-transparent rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-4">
          
          {/* Brand Authority Column (4/12) */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h2 className="text-navy text-2xl font-black uppercase tracking-tight mb-1">
              York Eco-Home Services
            </h2>
            <div className="flex items-center justify-center lg:justify-start space-x-2">
              <div className="w-6 h-[2.5px] bg-safety-orange"></div>
              <p className="text-gray-400 font-black text-[10px] uppercase tracking-[0.2em]">
                Licensed HVAC Authority
              </p>
            </div>
          </div>

          {/* Center Column: TSSA High-Impact Credential (4/12) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group cursor-pointer transform hover:scale-[1.03] transition-all duration-500">
              {/* Outer Radiant Pulse Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-safety-orange/40 to-navy/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
              
              {/* The "Glass Pill" Component */}
              <div className="relative flex items-center bg-gray-900/95 backdrop-blur-2xl px-10 py-5 rounded-full border border-white/20 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all">
                {/* Status Indicator */}
                <div className="flex items-center space-x-4 mr-8">
                  <div className="relative w-4 h-4">
                    <div className="absolute inset-0 bg-safety-orange rounded-full animate-ping opacity-75"></div>
                    <div className="relative w-4 h-4 bg-safety-orange rounded-full border-[3px] border-white shadow-[0_0_15px_rgba(255,133,27,1)]"></div>
                  </div>
                  <span className="text-white font-black text-[15px] tracking-[0.2em] uppercase whitespace-nowrap">
                    TSSA Licensed
                  </span>
                </div>
                
                {/* Divider */}
                <div className="w-[1.5px] h-6 bg-white/20 mr-8"></div>
                
                {/* License ID */}
                <span className="text-white/80 font-black text-[15px] tracking-[0.2em] uppercase whitespace-nowrap group-hover:text-white transition-colors">
                  TSSA FS-R-50611
                </span>
              </div>
            </div>
          </div>

          {/* Secondary Credentials Column (4/12) - Professionally Organized Grid */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-8 lg:gap-y-6">
              <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end gap-10 lg:gap-12">
                {trustItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 group cursor-default transition-all duration-300 min-w-fit"
                  >
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-black text-navy tracking-tight whitespace-nowrap leading-none mb-1 group-hover:text-safety-orange transition-colors">
                        {item.label}
                      </span>
                      <span className="text-[9px] font-black tracking-[0.15em] text-gray-400 uppercase">
                        {item.subLabel}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBar;
