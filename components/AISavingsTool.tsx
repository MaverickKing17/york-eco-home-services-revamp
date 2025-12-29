
import React, { useState } from 'react';
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

  return (
    <section id="ai-tool" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-navy p-10 text-white flex flex-col justify-center">
              <div className="w-12 h-12 bg-safety-orange rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">AI Smart Home Advisor</h2>
              <p className="text-gray-300 text-lg mb-6">
                Get an instant, personalized assessment of your home's energy potential using our custom AI model.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px]">✓</span>
                  <span>Analyze rebate eligibility</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px]">✓</span>
                  <span>Estimate energy savings</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px]">✓</span>
                  <span>Local GTA data integration</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-10">
              {!report ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-navy mb-2">House Type</label>
                      <select 
                        className="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-safety-orange outline-none"
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
                      <label className="block text-sm font-bold text-navy mb-2">Current Heating</label>
                      <select 
                        className="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-safety-orange outline-none"
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
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Equipment Age</label>
                    <div className="flex gap-4 flex-wrap">
                      {['0-5 Years', '5-10 Years', '10+ Years'].map(age => (
                        <button
                          key={age}
                          type="button"
                          onClick={() => setFormData({...formData, ageOfEquipment: age})}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                            formData.ageOfEquipment === age 
                            ? 'bg-safety-orange text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {age}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Postal Code (First 3 digits)</label>
                    <input 
                      type="text" 
                      placeholder="e.g. M3B"
                      className="w-full border-gray-200 border rounded-lg p-3 focus:ring-2 focus:ring-safety-orange outline-none uppercase"
                      value={formData.zipCode}
                      onChange={e => setFormData({...formData, zipCode: e.target.value.substring(0, 3)})}
                      maxLength={3}
                      required
                    />
                  </div>
                  <button 
                    disabled={loading}
                    className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>AI is calculating...</span>
                      </>
                    ) : (
                      <span>Run Free Savings Assessment</span>
                    )}
                  </button>
                </form>
              ) : (
                <div className="animate-fadeIn">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-navy">Your Assessment Report</h3>
                    <button 
                      onClick={() => setReport(null)}
                      className="text-gray-400 hover:text-navy"
                    >
                      Reset
                    </button>
                  </div>
                  <div className="grid grid-cols-1 gap-6">
                    <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl">
                      <div className="text-sm font-bold text-safety-orange uppercase tracking-wider mb-1">Estimated Annual Savings</div>
                      <div className="text-4xl font-black text-navy">{report.estimatedSavings}</div>
                    </div>
                    <div className="space-y-4">
                      <div className="font-bold text-navy">Recommended for Your Home:</div>
                      <div className="flex flex-wrap gap-2">
                        {report.recommendedUpgrades.map((item, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">{item}</span>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-2xl">
                      <div className="font-bold text-navy mb-2">Rebate Eligibility Summary:</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{report.eligibleRebates}</p>
                    </div>
                    <div className="border-l-4 border-safety-orange pl-4 italic text-gray-600">
                      "Expert Tip: {report.proTip}"
                    </div>
                  </div>
                  <button className="w-full mt-8 bg-safety-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition shadow-lg">
                    Speak with an Expert About This Report
                  </button>
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
