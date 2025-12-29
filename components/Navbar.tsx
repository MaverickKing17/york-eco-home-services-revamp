
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 3 3 3 6 3 6s.5-1 2-3c1.5 2 1.5 5 1.5 5s2-4 4-4a8 8 0 01-1.343 11.657z" />
            </svg>
          </div>
          <div>
            <span className="text-xl font-extrabold text-navy tracking-tight block leading-none">YORK ECO</span>
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Home Services Inc.</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-navy font-medium hover:text-safety-orange transition">Services</a>
          <a href="#rebates" className="text-navy font-medium hover:text-safety-orange transition">Rebates</a>
          <a href="#ai-tool" className="text-navy font-medium hover:text-safety-orange transition">AI Consultant</a>
          <a href="#contact" className="bg-safety-orange text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
            Free Quote
          </a>
        </div>
        
        <button className="md:hidden text-navy">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
