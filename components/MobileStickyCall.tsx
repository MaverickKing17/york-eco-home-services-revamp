
import React from 'react';

const MobileStickyCall: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[60] w-full px-6 max-w-sm">
      <a 
        href="tel:18882276566" 
        className="flex items-center justify-center space-x-3 bg-safety-orange text-white py-4 px-6 rounded-2xl font-black text-lg shadow-2xl animate-bounce"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span>TAP TO CALL NOW</span>
      </a>
    </div>
  );
};

export default MobileStickyCall;
