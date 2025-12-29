
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-navy">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden lg:block">
        <img 
          src="https://picsum.photos/seed/hvac/800/800" 
          alt="Modern HVAC Installation" 
          className="object-cover w-full h-full grayscale"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-semibold mb-6 border border-white/20">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>TSSA License FS-R-50611</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Toronto’s Trusted Choice for <br/>
            <span className="text-safety-orange">Home Comfort</span> & Energy Efficiency
          </h1>
          <p className="text-gray-300 text-xl mb-10 max-w-xl">
            Experience the gold standard in HVAC. Rated 5/5 on HomeStars, we specialize in high-efficiency heating and cooling solutions that save you money and the planet.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#contact" className="bg-safety-orange text-white text-center px-8 py-4 rounded-lg font-bold text-lg hover-safety-orange transition transform hover:-translate-y-1 shadow-2xl">
              Get Your Free Assessment
            </a>
            <a href="#rebates" className="bg-white/10 text-white border border-white/20 text-center px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition">
              View Current Rebates
            </a>
          </div>
          <div className="mt-12 flex items-center space-x-4 text-white/60">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i}/40/40`} className="w-10 h-10 rounded-full border-2 border-navy" alt="Customer" />
              ))}
            </div>
            <p className="text-sm">Join <span className="text-white font-bold">500+ GTA homeowners</span> choosing Eco-Efficiency</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
