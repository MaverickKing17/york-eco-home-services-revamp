
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-2">Request Received!</h3>
        <p className="text-gray-600 mb-8">One of our energy experts will call you within the next 2 business hours.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-safety-orange font-bold hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-navy mb-2">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-safety-orange outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-navy mb-2">Phone Number</label>
            <input 
              type="tel" 
              placeholder="(416) 000-0000"
              className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-safety-orange outline-none transition"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold text-navy mb-2">Service Needed</label>
          <select 
            className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-safety-orange outline-none transition"
            required
          >
            <option>Heat Pump Installation (Rebates)</option>
            <option>Furnace Repair/Installation</option>
            <option>AC Maintenance/Install</option>
            <option>Emergency Service</option>
            <option>Other / Eco-Assessment</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-bold text-navy mb-2">Message (Optional)</label>
          <textarea 
            rows={4}
            placeholder="Tell us about your current system..."
            className="w-full border-gray-200 border rounded-xl p-4 focus:ring-2 focus:ring-safety-orange outline-none transition"
          ></textarea>
        </div>
        <button className="w-full bg-safety-orange text-white font-bold py-5 rounded-xl text-xl hover:bg-orange-600 transition transform hover:scale-[1.02] shadow-xl">
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
