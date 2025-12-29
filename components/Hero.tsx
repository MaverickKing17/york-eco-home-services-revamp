
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-navy min-h-[85vh] flex items-center" aria-labelledby="hero-heading">
      {/* Cinematic Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover opacity-40 grayscale-[0.5]"
          poster="https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?auto=format&fit=crop&q=80&w=2000"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-professional-technician-working-on-a-machine-41135-large.mp4" 
            type="video/mp4" 
          />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.unsplash.com/photo-1581094288338-2314dddb7ec3?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional HVAC Technician" 
            className="w-full h-full object-cover"
          />
        </video>
        {/* Dynamic Gradient Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-safety-orange/20 text-safety-orange px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-safety-orange/30 animate-fade-in-up backdrop-blur-md">
            <span className="w-2.5 h-2.5 bg-safety-orange rounded-full animate-pulse" aria-hidden="true"></span>
            <span className="tracking-wide uppercase text-[11px]">TSSA License FS-R-50611 • GTA Verified</span>
          </div>
          
          <h1 id="hero-heading" className="text-4xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 animate-fade-in-up delay-100 tracking-tight">
            Toronto’s Trusted <br/>
            <span className="text-safety-orange">Home Comfort</span> <br/>
            & Energy Experts
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-xl animate-fade-in-up delay-200 leading-relaxed font-medium">
            Experience the gold standard in HVAC. Rated 5/5 on HomeStars, we specialize in high-efficiency heating and cooling solutions that save you money and protect the planet.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300">
            <a 
              href="#contact" 
              className="bg-safety-orange text-white text-center px-10 py-5 rounded-xl font-bold text-lg hover-safety-orange transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(255,133,27,0.3)] active:scale-95 focus-visible:ring-4 focus-visible:ring-safety-orange focus-visible:ring-offset-2 flex items-center justify-center space-x-2"
            >
              <span>Get Your Free Assessment</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a 
              href="#rebates" 
              className="bg-white/5 backdrop-blur-lg text-white border border-white/20 text-center px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/40 transition-all duration-300 active:scale-95 focus-visible:ring-4 focus-visible:ring-white/20"
            >
              View Current Rebates
            </a>
          </div>
          
          <div className="mt-16 flex items-center space-x-6 animate-fade-in delay-500">
            <div className="flex -space-x-3" aria-hidden="true">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-navy overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/100?u=yorkeco${i}`} 
                    className="w-full h-full object-cover" 
                    alt={`Customer ${i}`} 
                  />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-navy bg-safety-orange flex items-center justify-center text-white text-xs font-black">
                +500
              </div>
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-white">Join 500+ Happy GTA Homeowners</p>
              <div className="flex items-center space-x-1 mt-1 text-safety-orange">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
                <span className="text-[10px] text-white/60 font-black uppercase tracking-widest ml-1">5.0 Star Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
