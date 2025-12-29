
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center" role="status" aria-live="assertive">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Request Received!</h3>
        <p className="text-gray-600 mb-8">One of our energy experts will call you within the next 2 business hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-safety-orange font-bold hover:underline focus-visible:ring-2 focus-visible:ring-safety-orange rounded px-2"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact and Assessment Request Form">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="full-name" className="block text-sm font-bold text-navy mb-2">Full Name</label>
            <input 
              id="full-name"
              type="text" 
              placeholder="John Doe"
              className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-safety-orange outline-none transition"
              required
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="phone-number" className="block text-sm font-bold text-navy mb-2">Phone Number</label>
            <input 
              id="phone-number"
              type="tel" 
              placeholder="(416) 000-0000"
              className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-safety-orange outline-none transition"
              required
              aria-required="true"
            />
          </div>
        </div>
        <div>
          <label htmlFor="service-needed" className="block text-sm font-bold text-navy mb-2">Service Needed</label>
          <select 
            id="service-needed"
            className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-safety-orange outline-none transition"
            required
            aria-required="true"
          >
            <option>Heat Pump Installation (Rebates)</option>
            <option>Furnace Repair/Installation</option>
            <option>AC Maintenance/Install</option>
            <option>Emergency Service</option>
            <option>Other / Eco-Assessment</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-bold text-navy mb-2">Message (Optional)</label>
          <textarea 
            id="message"
            rows={4}
            placeholder="Tell us about your current system..."
            className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-safety-orange outline-none transition"
          ></textarea>
        </div>
        <button 
          type="submit"
          className="w-full bg-safety-orange text-white font-bold py-5 rounded-xl text-xl hover:bg-orange-600 transition transform hover:scale-[1.02] shadow-xl focus-visible:ring-4 focus-visible:ring-safety-orange focus-visible:ring-offset-2"
        >
          Get My Free Assessment
        </button>
        <p className="text-center text-gray-500 text-sm">
          By submitting, you agree to receive home service calls/texts.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
