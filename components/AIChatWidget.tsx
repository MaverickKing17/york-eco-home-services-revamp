
import React, { useState, useRef, useEffect } from 'react';
import { startAIChatSession } from '../services/geminiService';
import { Chat } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
  isAction?: boolean;
}

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hi! I\'m your York Eco Energy Assistant. How can I help you save on home comfort today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatSession = useRef<Chat | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSession.current) {
      chatSession.current = startAIChatSession();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const triggerAssessmentAction = () => {
    const toolSection = document.getElementById('ai-tool');
    if (toolSection) {
      toolSection.scrollIntoView({ behavior: 'smooth' });
      const firstInput = toolSection.querySelector('select, input') as HTMLElement;
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 800);
      }
    }
    setIsOpen(false);
  };

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      if (!chatSession.current) chatSession.current = startAIChatSession();
      const response = await chatSession.current.sendMessage({ message: userMessage });
      
      let botText = response.text || "";
      let hasAction = false;

      if (response.functionCalls && response.functionCalls.length > 0) {
        for (const fc of response.functionCalls) {
          if (fc.name === 'startSavingsAssessment') hasAction = true;
        }
      }

      if (botText) setMessages(prev => [...prev, { role: 'model', text: botText }]);
      if (hasAction) {
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: 'Would you like to run our interactive Savings Assessment for your home?', 
          isAction: true 
        }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Service temporarily unavailable. Call 1-888-227-6566 for support." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* High-Impact Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center bg-safety-orange text-white p-5 rounded-full shadow-[0_15px_40px_rgba(255,133,27,0.5)] transition-all hover:scale-110 active:scale-95 border-2 border-white/20"
          aria-label="Open AI Chat Assistant"
        >
          {/* Pulsing ring for visibility */}
          <div className="absolute inset-0 rounded-full bg-safety-orange animate-ping opacity-25 -z-10"></div>
          
          <svg className="w-8 h-8 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>

          {/* Label that appears on hover */}
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 font-black uppercase text-sm whitespace-nowrap tracking-widest">
            Chat with AI
          </span>
        </button>
      )}

      {/* Premium Chat Window */}
      {isOpen && (
        <div className="bg-white w-[360px] sm:w-[420px] h-[580px] rounded-[2.5rem] shadow-[0_30px_80px_rgba(10,25,47,0.3)] flex flex-col overflow-hidden border border-gray-100 animate-fade-in-up">
          {/* Header with Blur */}
          <div className="bg-navy p-6 flex justify-between items-center text-white relative">
            <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/80 backdrop-blur-md opacity-90 -z-10"></div>
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-safety-orange rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <div>
                <h3 className="font-black text-base tracking-tight leading-none">Eco-Advisor</h3>
                <div className="flex items-center mt-1.5 space-x-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Ready to Save</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2 rounded-xl transition-colors border border-white/10"
              aria-label="Close Chat"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-6 space-y-5 bg-gradient-to-b from-gray-50 to-white"
            aria-live="polite"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-fadeIn`}
              >
                <div 
                  className={`max-w-[88%] p-4 rounded-2xl text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-navy text-white rounded-tr-none' 
                      : 'bg-white text-navy border border-gray-200 rounded-tl-none font-medium'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.isAction && (
                  <button 
                    onClick={triggerAssessmentAction}
                    className="mt-3 bg-safety-orange text-white px-6 py-3 rounded-2xl text-xs font-black shadow-lg hover:bg-orange-600 transition-all flex items-center space-x-3 group active:scale-95"
                  >
                    <span className="uppercase tracking-widest">Begin Assessment</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex flex-col space-y-2 animate-fadeIn pb-4">
                <div className="flex items-center space-x-2 ml-1">
                   <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">Eco-Advisor is typing</span>
                   <span className="flex space-x-1">
                      <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full animate-bounce"></span>
                   </span>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex space-x-1.5 items-center">
                    <div className="w-2.5 h-2.5 bg-safety-orange rounded-full animate-pulse [animation-duration:1s]"></div>
                    <div className="w-2.5 h-2.5 bg-safety-orange/60 rounded-full animate-pulse [animation-delay:0.2s] [animation-duration:1s]"></div>
                    <div className="w-2.5 h-2.5 bg-safety-orange/30 rounded-full animate-pulse [animation-delay:0.4s] [animation-duration:1s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-gray-100">
            <form 
              onSubmit={handleSend}
              className="flex items-center space-x-3"
            >
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-grow p-4 bg-gray-50 border border-gray-100 rounded-2xl text-sm focus:ring-2 focus:ring-safety-orange outline-none transition-all placeholder:font-medium"
                disabled={isTyping}
              />
              <button 
                type="submit"
                disabled={isTyping || !input.trim()}
                className="bg-safety-orange text-white p-4 rounded-2xl hover:bg-orange-600 disabled:opacity-50 transition-all shadow-xl active:scale-90"
                aria-label="Send message"
              >
                <svg className="w-6 h-6 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
              </button>
            </form>
            <div className="mt-4 text-[10px] text-center text-gray-400 font-black uppercase tracking-[0.3em]">
              York Eco Intelligent Support
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;
