
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm py-4" aria-label="Main Navigation">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 focus-visible:outline-navy" onClick={closeMenu} aria-label="York Eco-Home Services - Home">
          <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center" aria-hidden="true">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 3 3 3 6 3 6s.5-1 2-3c1.5 2 1.5 5 1.5 5s2-4 4-4a8 8 0 01-1.343 11.657z" />
            </svg>
          </div>
          <div>
            <span className="text-xl font-extrabold text-navy tracking-tight block leading-none">YORK ECO-HOME</span>
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Services Inc.</span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8" role="menubar">
          <a href="#services" className="text-navy font-medium hover:text-safety-orange transition" role="menuitem">Services</a>
          <a href="#rebates" className="text-navy font-medium hover:text-safety-orange transition" role="menuitem">Rebates</a>
          <a href="#ai-tool" className="text-navy font-medium hover:text-safety-orange transition" role="menuitem">AI Consultant</a>
          <a href="#contact" className="bg-safety-orange text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition shadow-lg focus-visible:ring-2 focus-visible:ring-safety-orange" role="menuitem">
            Free Quote
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-navy p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-navy rounded" 
          onClick={toggleMenu} 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-xl py-6 px-4 animate-fadeIn"
          role="menu"
        >
          <div className="flex flex-col space-y-4">
            <a href="#services" className="text-navy font-bold text-lg border-b pb-2" onClick={closeMenu} role="menuitem">Services</a>
            <a href="#rebates" className="text-navy font-bold text-lg border-b pb-2" onClick={closeMenu} role="menuitem">Rebates</a>
            <a href="#ai-tool" className="text-navy font-bold text-lg border-b pb-2" onClick={closeMenu} role="menuitem">AI Consultant</a>
            <a href="#contact" className="bg-safety-orange text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg" onClick={closeMenu} role="menuitem">
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
