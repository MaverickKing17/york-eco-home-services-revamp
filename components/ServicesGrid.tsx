
import React, { useEffect, useState } from 'react';

const services = [
  {
    title: 'Furnace Repair & Install',
    description: 'Expert diagnostics and installation of high-efficiency gas furnaces to keep your home warm during the coldest GTA winters.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tag: 'TSSA Licensed',
    speed: 0.03
  },
  {
    title: 'Heat Pump Rebates',
    description: 'Save up to $7,000 on eco-friendly heating and cooling. We handle all the paperwork for Enbridge and Federal grants.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tag: 'Up to $7,000 Back',
    highlight: true,
    speed: -0.02
  },
  {
    title: 'AC Maintenance',
    description: 'Precision tune-ups to ensure your AC runs efficiently all summer. Prevent breakdowns and reduce your hydro bill.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    tag: 'Fast GTA Service',
    speed: 0.05
  }
];

const ServicesGrid: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Decorative background element for depth */}
      <div className="absolute top-0 right-0 -mr-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">World-Class HVAC Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">We combine cutting-edge technology with decade-long expertise to deliver superior home comfort solutions.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Calculate a subtle translation based on scroll position and unique speed per card
            const translateY = (offset * service.speed);
            
            return (
              <div 
                key={index}
                style={{ transform: `translateY(${translateY}px)` }}
                className={`p-8 rounded-2xl transition-transform duration-75 ease-out border flex flex-col will-change-transform ${
                  service.highlight 
                  ? 'bg-navy text-white shadow-2xl border-navy relative scale-105 z-10' 
                  : 'bg-white border-gray-100 hover:border-safety-orange hover:shadow-xl'
                }`}
              >
                {service.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-safety-orange text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
                    Most Popular
                  </div>
                )}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  service.highlight ? 'bg-white/10' : 'bg-gray-50 text-safety-orange'
                }`}>
                  {service.icon}
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest mb-2 block ${
                  service.highlight ? 'text-safety-orange' : 'text-gray-400'
                }`}>
                  {service.tag}
                </span>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`flex-grow ${service.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <a href="#contact" className={`mt-8 font-bold flex items-center group transition ${
                  service.highlight ? 'text-white hover:text-safety-orange' : 'text-navy hover:text-safety-orange'
                }`}>
                  Learn More 
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
