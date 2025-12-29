
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 88; // Height of the fixed navbar
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm py-4" aria-label="Main Navigation">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="flex items-center space-x-2 focus-visible:outline-navy" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }} 
          aria-label="York Eco-Home Services - Home"
        >
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
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, 'services')}
            className="text-navy font-bold hover:text-safety-orange transition-colors" 
            role="menuitem"
          >
            Services
          </a>
          <a 
            href="#rebates" 
            onClick={(e) => handleNavClick(e, 'rebates')}
            className="text-navy font-bold hover:text-safety-orange transition-colors" 
            role="menuitem"
          >
            Rebates
          </a>
          <a 
            href="#ai-tool" 
            onClick={(e) => handleNavClick(e, 'ai-tool')}
            className="text-navy font-bold hover:text-safety-orange transition-colors" 
            role="menuitem"
          >
            AI Consultant
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-safety-orange text-white px-8 py-3 rounded-full font-black uppercase text-sm tracking-wider hover:bg-orange-600 transition shadow-[0_10px_20px_rgba(255,133,27,0.3)] focus-visible:ring-2 focus-visible:ring-safety-orange active:scale-95" 
            role="menuitem"
          >
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
          className="md:hidden absolute top-full left-0 w-full bg-white border-t shadow-2xl py-8 px-6 animate-fadeIn"
          role="menu"
        >
          <div className="flex flex-col space-y-6">
            <a 
              href="#services" 
              className="text-navy font-black text-xl border-b border-gray-100 pb-4" 
              onClick={(e) => handleNavClick(e, 'services')} 
              role="menuitem"
            >
              Services
            </a>
            <a 
              href="#rebates" 
              className="text-navy font-black text-xl border-b border-gray-100 pb-4" 
              onClick={(e) => handleNavClick(e, 'rebates')} 
              role="menuitem"
            >
              Rebates
            </a>
            <a 
              href="#ai-tool" 
              className="text-navy font-black text-xl border-b border-gray-100 pb-4" 
              onClick={(e) => handleNavClick(e, 'ai-tool')} 
              role="menuitem"
            >
              AI Consultant
            </a>
            <a 
              href="#contact" 
              className="bg-safety-orange text-white text-center py-5 rounded-2xl font-black text-lg shadow-xl active:scale-95" 
              onClick={(e) => handleNavClick(e, 'contact')} 
              role="menuitem"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
