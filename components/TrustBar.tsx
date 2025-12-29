
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
      <div className="bg-navy text-white p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300 border border-white/20">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    ),
    label: "TSSA Licensed",
    subLabel: "LICENSE FS-R-50611",
    isHighContrast: true
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
    <section className="bg-white py-12 border-b border-gray-100" aria-label="Company Credentials">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
          
          {/* Brand & Safety Statement - Fixed Alignment */}
          <div className="max-w-md text-center xl:text-left">
            <h2 className="text-navy text-2xl font-black uppercase tracking-tight mb-3">
              York Eco-Home Services
            </h2>
            <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-sm mx-auto xl:mx-0">
              Every installation and repair is backed by the GTA's most rigorous safety standards and certifications.
            </p>
          </div>

          {/* Badge Grid - Organized and Structured */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8 w-full xl:w-auto">
            {trustItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-4 group cursor-default transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className={`text-[15px] font-black text-navy tracking-tight whitespace-nowrap leading-none mb-1 ${
                    item.isHighContrast ? 'border-b-2 border-safety-orange' : ''
                  }`}>
                    {item.label}
                  </span>
                  <span className={`text-[10px] font-bold tracking-[0.1em] ${
                    item.isHighContrast ? 'text-navy font-black' : 'text-gray-400'
                  }`}>
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
