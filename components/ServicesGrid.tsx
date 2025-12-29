
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
    speed: 0.03,
    theme: 'warm',
    badge: 'Emergency Dispatch'
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
    speed: -0.02,
    theme: 'premium',
    badge: 'Eco Choice'
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
    speed: 0.05,
    theme: 'cool',
    badge: 'Summer Ready'
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

  const getThemeClasses = (theme: string) => {
    switch(theme) {
      case 'warm':
        return 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-200 hover:border-safety-orange shadow-orange-100 hover:shadow-orange-200';
      case 'cool':
        return 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:border-blue-400 shadow-blue-100 hover:shadow-blue-200';
      case 'premium':
        return 'bg-navy text-white shadow-2xl border-navy relative scale-105 z-10';
      default:
        return 'bg-white border-gray-100';
    }
  };

  const getIconContainerClasses = (theme: string) => {
    switch(theme) {
      case 'warm': return 'bg-white text-safety-orange shadow-sm';
      case 'cool': return 'bg-white text-blue-600 shadow-sm';
      case 'premium': return 'bg-white/10 text-safety-orange';
      default: return 'bg-gray-50';
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-navy/5 text-navy font-bold text-xs uppercase tracking-widest mb-4">Our Expertise</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">World-Class HVAC Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Premium care for your home's vital systems. Serving Toronto with pride and precision.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {services.map((service, index) => {
            const translateY = (offset * service.speed);
            
            return (
              <div 
                key={index}
                style={{ transform: `translateY(${translateY}px)` }}
                className={`p-10 rounded-[2.5rem] transition-all duration-300 ease-out border flex flex-col will-change-transform group cursor-pointer ${getThemeClasses(service.theme)}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 ${getIconContainerClasses(service.theme)}`}>
                    {service.icon}
                  </div>
                  {service.badge && (
                    <span className={`text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-full ${
                      service.theme === 'premium' ? 'bg-safety-orange text-white' : 'bg-navy text-white'
                    }`}>
                      {service.badge}
                    </span>
                  )}
                </div>

                <span className={`text-xs font-black uppercase tracking-[0.2em] mb-3 block ${
                  service.theme === 'premium' ? 'text-safety-orange' : 'text-gray-500'
                }`}>
                  {service.tag}
                </span>

                <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">{service.title}</h3>
                
                <p className={`flex-grow leading-relaxed ${
                  service.theme === 'premium' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>

                <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                  <a href="#contact" className={`font-bold flex items-center group/link transition ${
                    service.theme === 'premium' ? 'text-white hover:text-safety-orange' : 'text-navy hover:text-safety-orange'
                  }`}>
                    Learn More 
                    <svg className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className={`w-2 h-2 rounded-full ${service.theme === 'premium' ? 'bg-safety-orange' : 'bg-navy'} animate-ping`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
