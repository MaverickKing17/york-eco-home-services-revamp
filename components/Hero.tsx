
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-navy min-h-[95vh] flex items-center" aria-labelledby="hero-heading">
      {/* High-Relevance Background: Trusted Professional Technician */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/40 z-10"></div>
        <img 
          src="https://i.ibb.co/Mk5xm1Dm/wan2-5-t2i-preview-a-Replace-the-current.png" 
          alt="Professional York Eco HVAC technician smiling warmly while kneeling next to a modern high-efficiency furnace" 
          className="w-full h-full object-cover object-top opacity-90"
        />
        
        {/* Adjusted Gradients to support right-aligned text and keep tech visible */}
        <div className="absolute inset-0 bg-gradient-to-l from-navy via-navy/60 to-transparent z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent z-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-2xl ml-auto text-right flex flex-col items-end">
          {/* Urgency Badge */}
          <div className="inline-flex items-center space-x-3 bg-red-600 text-white px-5 py-2.5 rounded-2xl text-[11px] font-black mb-6 animate-pulse shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="tracking-[0.1em] uppercase">🔴 24/7 Emergency Repair</span>
          </div>

          {/* Badge: Trust Indicator */}
          <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-xl text-white px-5 py-2.5 rounded-2xl text-[11px] font-black mb-8 border border-white/20 animate-fade-in-up shadow-2xl w-fit">
            <span className="tracking-[0.25em] uppercase text-gray-100">TSSA Licensed • #1 Rated on HomeStars</span>
          </div>
          
          {/* Headline: Authoritative & Bold */}
          <h1 id="hero-heading" className="text-6xl md:text-[5.5rem] font-black text-white leading-[0.9] mb-10 animate-fade-in-up delay-100 tracking-tighter">
            York Eco <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-safety-orange via-orange-400 to-yellow-300">Home Services.</span>
          </h1>
          
          {/* Subtext */}
          <p className="text-gray-100 text-xl md:text-2xl mb-12 max-w-lg animate-fade-in-up delay-200 leading-snug font-medium border-r-4 border-safety-orange pr-8">
            The gold standard in Toronto comfort. 
            Smart HVAC systems designed to <span className="text-white font-extrabold underline decoration-safety-orange">slash bills</span> and maximize <span className="text-white font-extrabold">$7,100 in rebates.</span>
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300 justify-end w-full">
            <a 
              href="tel:18882276566" 
              className="bg-white/10 backdrop-blur-2xl text-white border-2 border-white/20 text-center px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-4 active:scale-95 shadow-2xl order-2 sm:order-1"
            >
              <span>1-888-227-6566</span>
            </a>

            <a 
              href="#rebates" 
              className="bg-safety-orange text-white text-center px-10 py-5 rounded-2xl font-black text-lg hover-safety-orange transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(255,133,27,0.6)] active:scale-95 flex items-center justify-center space-x-4 group order-1 sm:order-2"
            >
              <span>Get My Rebate</span>
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          
          {/* Verified Stats Bar */}
          <div className="mt-20 flex flex-col items-end space-y-6 animate-fade-in delay-500">
             <div className="flex items-center space-x-5 bg-navy/40 backdrop-blur-md p-5 rounded-3xl border border-white/10">
               <div className="text-4xl font-black text-white">5.0</div>
               <div className="h-8 w-[1px] bg-white/20"></div>
               <div className="flex flex-col items-start">
                  <div className="flex text-safety-orange mb-1">
                    {[1,2,3,4,5].map(s => <svg key={s} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <div className="text-[9px] uppercase font-black text-gray-300 tracking-[0.2em]">HomeStars Choice</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
