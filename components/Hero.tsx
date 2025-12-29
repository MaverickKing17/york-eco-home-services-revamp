
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
      {/* High-Relevance Background */}
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
          
          {/* Headline */}
          <h1 id="hero-heading" className="text-5xl md:text-[5.5rem] font-black text-white leading-[0.9] mb-10 animate-fade-in-up delay-100 tracking-tighter drop-shadow-2xl text-right">
            York Eco-Home <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-safety-orange via-orange-400 to-yellow-300">Services.</span>
          </h1>
          
          {/* Subtext */}
          <div className="relative mb-12 animate-fade-in-up delay-200 max-w-lg">
            <div className="absolute -inset-x-8 -inset-y-6 bg-navy/40 blur-3xl rounded-[3rem] -z-10"></div>
            <p className="text-white text-xl md:text-2xl leading-snug font-semibold border-r-4 border-safety-orange pr-8 drop-shadow-lg text-right">
              Toronto's gold standard in comfort. 
              High-efficiency systems designed to <span className="text-safety-orange font-black">slash hydro bills</span> and capture up to <span className="text-white font-black underline decoration-safety-orange decoration-4">$7,100 in instant rebates.</span>
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300 justify-end w-full mb-16 items-center">
            {/* CALL BUTTON - SOLID ORANGE AS REQUESTED */}
            <a 
              href="tel:18882276566" 
              className="group relative flex items-center bg-safety-orange px-8 py-5 rounded-full transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_20px_40px_-5px_rgba(255,133,27,0.5)] shadow-2xl active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="bg-white/20 p-2.5 rounded-xl shadow-inner group-hover:scale-110 transition-transform duration-300 mr-5">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-white font-black text-2xl tracking-tight">
                1-888-227-6566
              </span>
            </a>

            {/* REBATE BUTTON */}
            <a 
              href="#rebates" 
              onClick={(e) => scrollToSection(e, 'rebates')}
              className="bg-navy border-2 border-white/20 text-white px-10 py-5 rounded-full font-black text-lg shadow-xl hover:bg-slate-900 hover:border-safety-orange transition-all duration-300 flex items-center space-x-3 active:scale-95"
            >
              <span>CHECK REBATES</span>
              <svg className="w-5 h-5 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Local Stats - Enhanced Visibility Version */}
          <div className="animate-fade-in-up delay-400 w-full sm:w-auto">
            <div className="bg-navy/40 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 md:p-10 shadow-2xl inline-grid grid-cols-3 gap-8 md:gap-16">
              <div className="text-right group">
                <div className="text-4xl md:text-5xl font-black text-white leading-none mb-3 drop-shadow-md group-hover:scale-110 transition-transform cursor-default">5/5</div>
                <div className="text-[11px] md:text-[13px] font-black text-white/90 uppercase tracking-[0.15em] leading-tight drop-shadow-sm">
                  HomeStars <br/> Rated
                </div>
              </div>
              <div className="text-right group border-x border-white/10 px-8 md:px-16">
                <div className="text-4xl md:text-5xl font-black text-safety-orange leading-none mb-3 drop-shadow-md group-hover:scale-110 transition-transform cursor-default">24H</div>
                <div className="text-[11px] md:text-[13px] font-black text-white/90 uppercase tracking-[0.15em] leading-tight drop-shadow-sm">
                  GTA <br/> Emergency
                </div>
              </div>
              <div className="text-right group">
                <div className="text-4xl md:text-5xl font-black text-white leading-none mb-3 drop-shadow-md group-hover:scale-110 transition-transform cursor-default">15k+</div>
                <div className="text-[11px] md:text-[13px] font-black text-white/90 uppercase tracking-[0.15em] leading-tight drop-shadow-sm">
                  Eco <br/> Installs
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
