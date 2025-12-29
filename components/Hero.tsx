
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 88;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-navy min-h-[95vh] flex items-center" aria-labelledby="hero-heading">
      {/* High-Relevance Background: Trusted Professional Technician */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <img 
          src="https://i.ibb.co/Mk5xm1Dm/wan2-5-t2i-preview-a-Replace-the-current.png" 
          alt="Professional York Eco-Home Services technician" 
          className="w-full h-full object-cover object-top opacity-90"
        />
        
        {/* Multi-layered gradients for depth and text legibility */}
        <div className="absolute inset-0 bg-gradient-to-l from-navy via-navy/90 to-transparent z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent z-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-2xl ml-auto text-right flex flex-col items-end">
          {/* Top Urgency/Trust Badge */}
          <div className="group flex items-center space-x-3 bg-navy/80 backdrop-blur-2xl text-white px-6 py-3 rounded-full text-[12px] font-black mb-8 border border-white/10 animate-fade-in-up shadow-2xl w-fit transition-all hover:border-safety-orange/50">
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-safety-orange rounded-full animate-pulse"></span>
              <span className="tracking-[0.2em] uppercase">TSSA Licensed</span>
            </span>
            <span className="w-[1px] h-4 bg-white/20"></span>
            <span className="tracking-[0.2em] uppercase text-gray-100 group-hover:text-white transition-colors">TSSA FS-R-50611</span>
          </div>
          
          {/* Headline: Corrected Company Name */}
          <h1 id="hero-heading" className="text-5xl md:text-[5.5rem] font-black text-white leading-[0.9] mb-10 animate-fade-in-up delay-100 tracking-tighter drop-shadow-2xl">
            York Eco-Home <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-safety-orange via-orange-400 to-yellow-300">Services.</span>
          </h1>
          
          {/* Subtext: Maximum Visibility */}
          <div className="relative mb-12 animate-fade-in-up delay-200 max-w-lg">
            <div className="absolute -inset-x-8 -inset-y-6 bg-navy/40 blur-3xl rounded-[3rem] -z-10"></div>
            <p className="text-white text-xl md:text-2xl leading-snug font-semibold border-r-4 border-safety-orange pr-8 drop-shadow-lg">
              Toronto's gold standard in comfort. 
              High-efficiency systems designed to <span className="text-safety-orange font-black">slash hydro bills</span> and capture up to <span className="text-white font-black underline decoration-safety-orange decoration-4">$7,100 in instant rebates.</span>
            </p>
          </div>
          
          {/* Action Buttons: Ultra-Premium Redesign */}
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300 justify-end w-full">
            {/* Redesigned Premium Phone Button */}
            <a 
              href="tel:18882276566" 
              className="group relative bg-white/5 backdrop-blur-md hover:bg-white text-white hover:text-navy border border-white/20 px-10 py-5 rounded-3xl font-black text-lg transition-all duration-300 flex items-center justify-center space-x-4 active:scale-95 shadow-xl order-2 sm:order-1"
            >
              <div className="bg-safety-orange p-2 rounded-xl group-hover:bg-navy transition-colors">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <span className="tracking-tight">1-888-227-6566</span>
            </a>

            <a 
              href="#rebates" 
              onClick={(e) => scrollToSection(e, 'rebates')}
              className="bg-safety-orange text-white text-center px-10 py-5 rounded-3xl font-black text-lg hover-safety-orange transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(255,133,27,0.7)] active:scale-95 flex items-center justify-center space-x-4 group order-1 sm:order-2"
            >
              <span>Secure Rebates</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          
          {/* Refined Trust Badge: Matching User Screenshot Aesthetic */}
          <div className="mt-20 flex flex-col items-end animate-fade-in delay-500">
             <div className="group flex items-center p-6 sm:p-8 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-[0_15px_45px_rgba(0,0,0,0.3)] transition-all hover:bg-white/[0.15]">
               {/* Large "5.0" Display */}
               <div className="text-5xl sm:text-6xl font-black text-white pr-8 select-none">5.0</div>
               
               {/* Vertical Divider line */}
               <div className="h-12 w-[1px] bg-white/20"></div>
               
               {/* Stars & Label Layout */}
               <div className="flex flex-col items-start pl-8">
                  {/* High Saturation Stars */}
                  <div className="flex space-x-1 mb-2">
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} className="w-5 h-5 text-[#FF851B] fill-current drop-shadow-[0_0_8px_rgba(255,133,27,0.5)]" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Styled HomeStars Label */}
                  <div className="text-[12px] uppercase font-black text-gray-100 tracking-[0.25em] drop-shadow-md">
                    HomeStars Elite
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
