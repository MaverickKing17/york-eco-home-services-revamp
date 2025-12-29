
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-navy min-h-[95vh] flex items-center" aria-labelledby="hero-heading">
      {/* High-Relevance Background: HVAC Technician & Equipment */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80&w=2000" 
          alt="Friendly York Eco HVAC Technician with Heat Pump" 
          className="w-full h-full object-cover opacity-80"
        />
        
        {/* Sophisticated Gradient Masking */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-100 z-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-30">
        <div className="max-w-4xl">
          {/* Urgency Badge */}
          <div className="inline-flex items-center space-x-3 bg-red-600 text-white px-5 py-2.5 rounded-2xl text-[11px] font-black mb-6 animate-pulse shadow-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="tracking-[0.1em] uppercase">🔴 24/7 Emergency Repair Available</span>
          </div>

          {/* Badge: Trust Indicator */}
          <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-xl text-white px-5 py-2.5 rounded-2xl text-[11px] font-black mb-10 border border-white/10 animate-fade-in-up shadow-2xl w-fit">
            <span className="tracking-[0.25em] uppercase text-gray-300">TSSA Licensed • #1 Rated on HomeStars</span>
          </div>
          
          {/* Headline: Authoritative & Bold */}
          <h1 id="hero-heading" className="text-6xl md:text-[6.5rem] font-black text-white leading-[0.9] mb-10 animate-fade-in-up delay-100 tracking-tighter">
            York Eco <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety-orange via-orange-400 to-yellow-300">Home Services.</span>
          </h1>
          
          {/* Subtext: Maintained high-converting copy */}
          <p className="text-gray-200 text-xl md:text-3xl mb-14 max-w-2xl animate-fade-in-up delay-200 leading-snug font-medium border-l-4 border-safety-orange pl-8">
            Experience the gold standard in Toronto home comfort. 
            Smart HVAC systems designed to <span className="text-white font-bold">slash bills</span> and maximize <span className="text-white font-bold">$7,100 in rebates.</span>
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8 animate-fade-in-up delay-300">
            <a 
              href="#rebates" 
              className="bg-safety-orange text-white text-center px-12 py-6 rounded-2xl font-black text-xl hover-safety-orange transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_25px_60px_-15px_rgba(255,133,27,0.7)] active:scale-95 flex items-center justify-center space-x-4 group"
            >
              <span>Get My $7,100 Rebate</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            
            <a 
              href="tel:18882276566" 
              className="bg-white/10 backdrop-blur-2xl text-white border-2 border-white/20 text-center px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-4 active:scale-95 shadow-2xl"
            >
              <div className="w-8 h-8 bg-safety-orange/20 rounded-lg flex items-center justify-center mr-2">
                <svg className="w-5 h-5 text-safety-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>1-888-227-6566</span>
            </a>
          </div>
          
          {/* Verified Stats Bar */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-10 animate-fade-in delay-500">
             <div className="flex items-center space-x-5 bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
               <div className="text-5xl font-black text-white">5.0</div>
               <div className="h-10 w-[1px] bg-white/20"></div>
               <div className="flex flex-col">
                  <div className="flex text-safety-orange mb-1">
                    {[1,2,3,4,5].map(s => <svg key={s} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
                  </div>
                  <div className="text-[10px] uppercase font-black text-gray-400 tracking-[0.2em]">HomeStars Top Choice</div>
               </div>
             </div>
             
             <div className="flex items-center space-x-6 p-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-14 h-14 rounded-full border-[3px] border-navy overflow-hidden shadow-2xl transition-transform hover:scale-110 cursor-pointer">
                      <img src={`https://i.pravatar.cc/150?u=yorkeco${i}`} className="w-full h-full object-cover" alt="User" />
                    </div>
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="text-white font-black text-lg">500+ Local GTA</div>
                  <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Successful Installations</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Sharp Modern Section Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-30">
        <svg className="relative block w-full h-[60px] text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113,2,1200,34.11V0H0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
