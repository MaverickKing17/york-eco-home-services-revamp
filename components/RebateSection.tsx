
import React from 'react';

const RebateSection: React.FC = () => {
  const handleCheckEligibility = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetElement = document.getElementById('ai-tool');
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
    <section id="rebates" className="py-24 bg-safety-orange relative overflow-hidden">
      {/* Decorative background overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-white">
            <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-white font-black text-[10px] uppercase tracking-[0.2em] mb-6 border border-white/30">
              Government Incentives 2024
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
              Stop Overpaying <br/>
              <span className="text-navy">for Home Comfort.</span>
            </h2>
            <p className="text-xl mb-10 opacity-90 font-medium leading-relaxed max-w-xl">
              The Canadian Government and Enbridge are offering significant incentives for homeowners to switch to energy-efficient Heat Pumps. We bridge the gap.
            </p>
            <ul className="space-y-5 mb-12">
              {[
                'Get up to $7,000 back in direct rebates',
                'Reduce your monthly energy bills by up to 30%',
                'Increase your property value with modern tech',
                'Expert help with all rebate applications'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4">
                  <div className="bg-navy text-white p-1 rounded-full shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-bold text-lg">{item}</span>
                </li>
              ))}
            </ul>

            {/* HIGH-IMPACT BUTTON - MATCHING USER SCREENSHOT */}
            <button 
              onClick={handleCheckEligibility}
              className="group relative inline-flex items-center justify-center bg-navy text-white px-12 py-6 rounded-full font-black text-xl transition-all duration-300 hover:bg-slate-900 shadow-[0_20px_50px_-10px_rgba(10,25,47,0.5)] hover:shadow-[0_25px_60px_-10px_rgba(10,25,47,0.7)] active:scale-95 border-2 border-white/5"
            >
              <span className="tracking-tight">Check My Rebate Eligibility</span>
              <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="lg:w-1/2 w-full max-w-xl">
            <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] relative transform lg:rotate-2 transition-transform hover:rotate-0 duration-700">
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-navy rounded-full flex items-center justify-center text-white font-black text-center leading-none transform rotate-12 border-8 border-safety-orange shadow-2xl z-20">
                <div className="text-sm">LIMITED<br/><span className="text-xl">TIME</span></div>
              </div>
              
              <h3 className="text-2xl font-black text-navy mb-2 tracking-tight">Total Potential Savings</h3>
              <div className="flex items-baseline space-x-2 mb-8">
                <div className="text-7xl font-black text-safety-orange tracking-tighter">$7,100</div>
                <div className="text-gray-400 font-bold text-xl uppercase tracking-widest">*</div>
              </div>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center py-3 border-b border-gray-100 group">
                  <span className="text-gray-500 font-bold group-hover:text-navy transition-colors">Federal HER+ Grant</span>
                  <span className="font-black text-navy text-lg">$5,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 group">
                  <span className="text-gray-500 font-bold group-hover:text-navy transition-colors">Enbridge Bonus</span>
                  <span className="font-black text-navy text-lg">$1,600</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100 group">
                  <span className="text-gray-500 font-bold group-hover:text-navy transition-colors">Audit Reimbursement</span>
                  <span className="font-black text-navy text-lg">$500</span>
                </div>
              </div>
              
              <p className="mt-8 text-gray-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed text-center">
                *Subject to energy audit results. Our team handles all paperwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RebateSection;
