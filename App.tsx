
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ServicesGrid from './components/ServicesGrid';
import RebateSection from './components/RebateSection';
import AISavingsTool from './components/AISavingsTool';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MobileStickyCall from './components/MobileStickyCall';
import AIChatWidget from './components/AIChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesGrid />
        <RebateSection />
        <AISavingsTool />
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Ready to Optimize Your Home?</h2>
                <p className="text-gray-600 text-lg">Proudly serving North York, Etobicoke, and the GTA. Get your free assessment today.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileStickyCall />
      <AIChatWidget />
    </div>
  );
};

export default App;
