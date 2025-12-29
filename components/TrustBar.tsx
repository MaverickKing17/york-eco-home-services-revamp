
import React from 'react';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-b py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 opacity-70 grayscale hover:grayscale-0 transition duration-500">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-navy">HomeStars 5-Star</span>
              <span className="text-xs uppercase font-semibold">Verified Provider</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
             <div className="bg-red-600 text-white p-2 rounded">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-navy">TSSA Certified</span>
              <span className="text-xs uppercase font-semibold">License FS-R-50611</span>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-green-600 text-white p-2 rounded">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-navy">24/7 Support</span>
              <span className="text-xs uppercase font-semibold">Emergency Service</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-3">
            <img src="https://images.squarespace-cdn.com/content/v1/5f38128521095940428e9f5e/1601396342890-L9AJSF6O6E6E6E6E6E6E/HRAI_Member_Logo_RGB.png" alt="HRAI Member" className="h-8 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
