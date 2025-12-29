
import React, { useState, useRef, useEffect } from 'react';
import { getSavingsAssessment, SavingsReport } from '../services/geminiService';

const AISavingsTool: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<SavingsReport | null>(null);
  const [formData, setFormData] = useState({
    houseType: 'Detached',
    currentHeating: 'Natural Gas Furnace',
    ageOfEquipment: '10+ Years',
    zipCode: ''
  });
  
  const statusRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await getSavingsAssessment(formData);
      setReport(data);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Explicitly announce when the report is ready
  useEffect(() => {
    if (report && statusRef.current) {
      statusRef.current.textContent = "Your personalized energy assessment is ready.";
    }
  }, [report]);

  return (
    <section id="ai-tool" className="py-20 bg-gray-50" aria-labelledby="ai-tool-heading">
      {/* Visually hidden status region for screen reader announcements */}
      <div 
        ref={statusRef} 
        className="sr-only" 
        role="status" 
        aria-live="polite"
      ></div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-navy p-10 text-white flex flex-col justify-center">
              <div className="w-12 h-12 bg-safety-orange rounded-xl flex items-center justify-center mb-6" aria-hidden="true">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <h2 id="ai-tool-heading" className="text-3xl font-bold mb-4">AI Smart Home Advisor</h2>
              <p className="text-gray-300 text-lg mb-6">
                Get an instant, personalized assessment of your home's energy potential using our custom AI model.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-sm">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px]" aria-hidden="true">✓</span>
                  <span>Analyze rebate eligibility</span>
                </li>
                <li className="flex items-center space-x-3 text-sm">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px]" aria-hidden="true">✓</span>
                  <span>Estimate energy savings</span>
                </li>
                <li className="flex items-center space-x-3 text-sm">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px]" aria-hidden="true">✓</span>
                  <span>Local GTA data integration</span>
                </li>
              </ul>
            </div>
            
            <div className="md:w-3/5 p-10">
              {!report ? (
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Energy Savings Assessment Form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="house-type" className="block text-sm font-bold text-navy mb-2">House Type</label>
                      <select 
                        id="house-type"
                        className="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-safety-orange outline-none bg-white"
                        value={formData.houseType}
                        onChange={e => setFormData({...formData, houseType: e.target.value})}
                      >
                        <option>Detached</option>
                        <option>Semi-Detached</option>
                        <option>Townhouse</option>
                        <option>Condo</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="current-heating" className="block text-sm font-bold text-navy mb-2">Current Heating</label>
                      <select 
                        id="current-heating"
                        className="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-safety-orange outline-none bg-white"
                        value={formData.currentHeating}
                        onChange={e => setFormData({...formData, currentHeating: e.target.value})}
                      >
                        <option>Natural Gas Furnace</option>
                        <option>Electric Baseboard</option>
                        <option>Propane</option>
                        <option>Old Heat Pump</option>
                      </select>
                    </div>
                  </div>
                  
                  <fieldset>
                    <legend className="block text-sm font-bold text-navy mb-4">Equipment Age</legend>
                    <div className="flex gap-4 flex-wrap" role="radiogroup">
                      {['0-5 Years', '5-10 Years', '10+ Years'].map(age => (
                        <label 
                          key={age}
                          className={`relative px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition focus-within:ring-2 focus-within:ring-safety-orange ${
                            formData.ageOfEquipment === age 
                            ? 'bg-safety-orange text-white shadow-md' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          <input 
                            type="radio" 
                            name="ageOfEquipment" 
                            value={age} 
                            checked={formData.ageOfEquipment === age}
                            onChange={() => setFormData({...formData, ageOfEquipment: age})}
                            className="sr-only"
                          />
                          {age}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-bold text-navy mb-2">Postal Code (First 3 digits)</label>
                    <input 
                      id="postal-code"
                      type="text" 
                      placeholder="e.g. M3B"
                      className="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-safety-orange outline-none uppercase"
                      value={formData.zipCode}
                      onChange={e => setFormData({...formData, zipCode: e.target.value.substring(0, 3)})}
                      maxLength={3}
                      required
                      aria-required="true"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition disabled:opacity-50 flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-navy"
                    aria-busy={loading}
                  >
                    {loading ? (
                      <span className="flex items-center space-x-2" role="status">
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>AI is calculating...</span>
                      </span>
                    ) : (
                      <span>Run Free Savings Assessment</span>
                    )}
                  </button>
                </form>
              ) : (
                <div 
                  className="animate-fadeIn" 
                  role="region" 
                  aria-labelledby="report-header"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 id="report-header" className="text-2xl font-bold text-navy">Your Assessment Report</h3>
                    <button 
                      onClick={() => setReport(null)}
                      className="text-gray-400 hover:text-navy text-sm font-bold uppercase tracking-widest focus-visible:underline p-1"
                      aria-label="Reset form and run new assessment"
                    >
                      Reset Form
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
                      <div className="text-sm font-bold text-safety-orange uppercase tracking-wider mb-1">Estimated Annual Savings</div>
                      <div className="text-4xl font-black text-navy">{report.estimatedSavings}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-navy mb-4">Recommended for Your Home:</h4>
                      <div className="flex flex-wrap gap-2">
                        {report.recommendedUpgrades.map((item, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <h4 className="font-bold text-navy mb-2">Rebate Eligibility Summary:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{report.eligibleRebates}</p>
                    </div>
                    <div className="border-l-4 border-safety-orange pl-4 italic text-gray-600">
                      <strong>Expert Tip:</strong> {report.proTip}
                    </div>
                  </div>
                  <a href="#contact" className="block w-full text-center mt-8 bg-safety-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition shadow-lg focus-visible:ring-2 focus-visible:ring-safety-orange">
                    Speak with an Expert About This Report
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISavingsTool;
