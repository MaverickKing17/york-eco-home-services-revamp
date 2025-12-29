
import React from 'react';

const Footer: React.FC = () => {
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
    }
  };

  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
             <a href="#" className="flex items-center space-x-2 mb-6" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.5-7 3 3 3 6 3 6s.5-1 2-3c1.5 2 1.5 5 1.5 5s2-4 4-4a8 8 0 01-1.343 11.657z" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight block leading-none">YORK ECO-HOME</span>
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Services Inc.</span>
              </div>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading Toronto's transition to energy-efficient living. Expert HVAC services for modern homeowners.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety-orange transition">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety-orange transition">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition">Furnace Installation</a></li>
              <li><a href="#rebates" onClick={(e) => handleNavClick(e, 'rebates')} className="hover:text-white transition">Heat Pump Retrofitting</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-white transition">AC Precision Tune-ups</a></li>
              <li><a href="#ai-tool" onClick={(e) => handleNavClick(e, 'ai-tool')} className="hover:text-white transition">Smart Thermostat Setup</a></li>
              <li><a href="#ai-tool" onClick={(e) => handleNavClick(e, 'ai-tool')} className="hover:text-white transition">Eco-Home Assessments</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Service Areas</h4>
            <ul className="space-y-4 text-gray-400">
              <li><button onClick={(e) => handleNavClick(e as any, 'contact')} className="hover:text-white transition">North York</button></li>
              <li><button onClick={(e) => handleNavClick(e as any, 'contact')} className="hover:text-white transition">Etobicoke</button></li>
              <li><button onClick={(e) => handleNavClick(e as any, 'contact')} className="hover:text-white transition">Scarborough</button></li>
              <li><button onClick={(e) => handleNavClick(e as any, 'contact')} className="hover:text-white transition">Mississauga</button></li>
              <li><button onClick={(e) => handleNavClick(e as any, 'contact')} className="hover:text-white transition">Vaughan & Richmond Hill</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-safety-orange mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>1370 Don Mills Rd, Unit #300, <br/>Toronto, ON M3B 3N7</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-safety-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:18882276566" className="hover:text-white transition">1-888-227-6566</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 York Eco-Home Services Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition">Privacy Policy</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
