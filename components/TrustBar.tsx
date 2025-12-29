
import React from 'react';

const trustItems = [
  {
    icon: (
      <div className="bg-blue-600 text-white p-2 rounded shadow-sm group-hover:shadow-md transition-shadow">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    ),
    label: "HomeStars 5-Star",
    subLabel: "Verified Provider"
  },
  {
    icon: (
      <div className="bg-red-600 text-white p-2 rounded shadow-sm group-hover:shadow-md transition-shadow">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </div>
    ),
    label: "TSSA Certified",
    subLabel: "License FS-R-50611"
  },
  {
    icon: (
      <div className="bg-green-600 text-white p-2 rounded shadow-sm group-hover:shadow-md transition-shadow">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    ),
    label: "24/7 Support",
    subLabel: "Emergency Service"
  }
];

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-b py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 group/bar">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center space-x-3 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 group cursor-default grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
            >
              {item.icon}
              <div className="leading-tight">
                <span className="block font-bold text-navy transition-colors group-hover:text-navy">
                  {item.label}
                </span>
                <span className="text-xs uppercase font-semibold text-gray-500 transition-colors group-hover:text-gray-700">
                  {item.subLabel}
                </span>
              </div>
            </div>
          ))}
          
          <div className="hidden lg:flex items-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 cursor-default">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/5f38128521095940428e9f5e/1601396342890-L9AJSF6O6E6E6E6E6E6E/HRAI_Member_Logo_RGB.png" 
              alt="HRAI Member" 
              className="h-8 object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
