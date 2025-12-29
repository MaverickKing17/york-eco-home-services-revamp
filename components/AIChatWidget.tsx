
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
      // Find the first input or select in the tool and focus it
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
    const lowerMessage = userMessage.toLowerCase();
    
    // 1. Check for explicit "Start Assessment" intent client-side for instant feedback
    const explicitStartKeywords = ['start assessment', 'run assessment', 'open tool', 'start the tool', 'begin assessment'];
    if (explicitStartKeywords.some(kw => lowerMessage.includes(kw))) {
      setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
      setMessages(prev => [...prev, { role: 'model', text: 'Certainly! Opening the Home Energy Savings Assessment tool for you now...' }]);
      setInput('');
      setTimeout(triggerAssessmentAction, 1500);
      return;
    }

    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsTyping(true);

    try {
      if (!chatSession.current) chatSession.current = startAIChatSession();
      const response = await chatSession.current.sendMessage({ message: userMessage });
      
      let botText = response.text || "";
      let hasAction = false;

      // 2. Proactive Keyword Check (Client-side fallback/reinforcement)
      const proactiveKeywords = ['savings', 'rebate', 'efficiency', 'rebates', 'save money', 'government grant', 'incentive'];
      const matchesProactive = proactiveKeywords.some(kw => lowerMessage.includes(kw));

      // Check for AI tool calls
      if (response.functionCalls && response.functionCalls.length > 0) {
        for (const fc of response.functionCalls) {
          if (fc.name === 'startSavingsAssessment') {
            hasAction = true;
            await chatSession.current.sendMessage({ 
              message: "Tool suggested to user: startSavingsAssessment" 
            });
          }
        }
      } else if (matchesProactive) {
        // If the AI didn't explicitly call the tool but keywords matched, we force the action button
        hasAction = true;
      }

      if (botText) {
        setMessages(prev => [...prev, { role: 'model', text: botText }]);
      }

      if (hasAction) {
        setMessages(prev => [...prev, { 
          role: 'model', 
          text: 'Would you like to run our interactive Savings Assessment for your specific home?', 
          isAction: true 
        }]);
      }

      if (!botText && !hasAction) {
        setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I couldn't process that. Please call us at 1-888-227-6566 for immediate assistance." }]);
      }

    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'model', text: "Service temporarily unavailable. Please call us for 24/7 support at 1-888-227-6566." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-navy text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform relative group focus-visible:ring-4 focus-visible:ring-safety-orange"
          aria-label="Open AI Chat Assistant"
        >
          <div className="absolute inset-0 rounded-full bg-navy animate-ping opacity-25 group-hover:hidden"></div>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[400px] h-[550px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-fade-in-up">
          {/* Header */}
          <div className="bg-navy p-4 flex justify-between items-center text-white">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-safety-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none">Eco-Assistant</h3>
                <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">● Online Now</span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/10 p-2 rounded-lg transition"
              aria-label="Close Chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/50"
            aria-live="polite"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'} animate-fadeIn`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-safety-orange text-white rounded-tr-none' 
                      : 'bg-white text-navy border border-gray-100 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.isAction && (
                  <button 
                    onClick={triggerAssessmentAction}
                    className="mt-2 bg-safety-orange text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md hover:bg-orange-600 transition-colors flex items-center space-x-2 group"
                  >
                    <span>Begin Free Assessment</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
            
            {isTyping && (
              <div className="flex flex-col space-y-1 animate-fadeIn">
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex space-x-1.5 items-center">
                    <div className="w-1.5 h-1.5 bg-safety-orange rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-safety-orange rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-safety-orange rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
                <span className="text-[10px] text-gray-400 font-medium ml-1">Eco-Assistant is typing...</span>
              </div>
            )}
          </div>

          {/* Input Area */}
          <form 
            onSubmit={handleSend}
            className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2"
          >
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about rebates or savings..."
              className="flex-grow p-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-navy outline-none transition-all"
              disabled={isTyping}
            />
            <button 
              type="submit"
              disabled={isTyping || !input.trim()}
              className="bg-navy text-white p-3 rounded-xl hover:bg-slate-800 disabled:opacity-50 transition shadow-md active:scale-95"
              aria-label="Send message"
            >
              <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </form>
          <div className="bg-gray-50 px-4 py-2 text-[10px] text-center text-gray-400 font-medium border-t border-gray-100">
            Powered by Gemini AI • Toronto Trusted Expert
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;
