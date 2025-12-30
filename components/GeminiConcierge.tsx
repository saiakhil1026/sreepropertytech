
import React, { useState, useRef, useEffect } from 'react';
import { getPropertyAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiConcierge: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getPropertyAdvice(input);
    const aiMsg: ChatMessage = { role: 'assistant', content: response || "Something went wrong." };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="glass w-[350px] h-[500px] rounded-2xl flex flex-col overflow-hidden shadow-2xl border border-white/10">
          <div className="bg-yellow-600 p-4 flex justify-between items-center">
            <div>
              <h3 className="text-black font-bold text-sm uppercase tracking-wider">AI Elite Concierge</h3>
              <p className="text-black/70 text-[10px] uppercase font-bold">NRI Expert</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-black hover:scale-110 transition-transform font-bold">×</button>
          </div>

          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.length === 0 && (
              <div className="text-gray-400 text-sm italic text-center mt-10">
                Ask me about property taxes, maintenance, or finding a tenant in India.
              </div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-lg text-xs leading-relaxed ${msg.role === 'user' ? 'bg-yellow-600/20 text-yellow-200 border border-yellow-600/30' : 'bg-white/5 text-gray-300'
                  }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-lg animate-pulse text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                  Consulting...
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/5 bg-black/40">
            <div className="flex space-x-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How do I manage TDS as an NRI?"
                className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-yellow-600/50"
              />
              <button
                onClick={handleSend}
                className="bg-yellow-600 text-black p-2 rounded-md hover:bg-yellow-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 md:w-16 md:h-16 bg-yellow-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all animate-float"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>
        </button>
      )}
    </div>
  );
};

export default GeminiConcierge;
