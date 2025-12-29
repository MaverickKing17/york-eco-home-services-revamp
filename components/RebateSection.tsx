
import React from 'react';

const RebateSection: React.FC = () => {
  return (
    <section id="rebates" className="py-20 bg-safety-orange relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 L100 0 L100 100 Z" fill="white" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Stop Overpaying for <br/>Home Comfort</h2>
            <p className="text-xl mb-8 opacity-90">
              The Canadian Government and Enbridge are offering significant incentives for homeowners to switch to energy-efficient Heat Pumps.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Get up to $7,000 back in direct rebates',
                'Reduce your monthly energy bills by up to 30%',
                'Increase your property value with modern tech',
                'Expert help with all rebate applications'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block bg-navy text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-900 transition shadow-xl">
              Check My Rebate Eligibility
            </a>
          </div>
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-3xl shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white font-bold text-center leading-tight transform rotate-12 border-4 border-white">
                <div>LIMITED<br/>TIME</div>
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">Total Potential Savings</h3>
              <div className="text-6xl font-black text-safety-orange mb-4">$7,100*</div>
              <p className="text-gray-500 text-sm mb-6">*Includes HER+ Program and local Enbridge bonus incentives. Qualification depends on energy audit.</p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Federal HER+ Grant</span>
                  <span className="font-bold text-navy">$5,000</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Enbridge Bonus</span>
                  <span className="font-bold text-navy">$1,600</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Audit Reimbursement</span>
                  <span className="font-bold text-navy">$600</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RebateSection;
