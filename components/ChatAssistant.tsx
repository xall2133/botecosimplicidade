
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await getGeminiResponse(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-800 w-[350px] h-[500px] rounded-3xl shadow-2xl flex flex-col border border-slate-200 dark:border-slate-700 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-primary">
                <span className="material-icons text-sm">auto_awesome</span>
              </div>
              <span className="font-bold text-slate-900">Mestre Simplicidade</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-900">
              <span className="material-icons">close</span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-900">
            {messages.length === 0 && (
              <div className="text-center text-slate-400 mt-10">
                <span className="material-icons text-4xl mb-2">chat_bubble_outline</span>
                <p className="text-sm">Salve! Pergunta pro Mestre qualquer coisa sobre o boteco ou sobre o samba!</p>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-primary text-slate-900 rounded-tr-none' 
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-100"></div>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Manda a letra..."
                className="flex-1 bg-slate-100 dark:bg-slate-900 border-none rounded-full px-4 text-sm focus:ring-2 focus:ring-primary dark:text-white"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                className="w-10 h-10 bg-primary text-slate-900 rounded-full flex items-center justify-center disabled:opacity-50 transition-transform active:scale-90"
              >
                <span className="material-icons text-lg">send</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-primary text-slate-900 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
          aria-label="Open AI Assistant"
        >
          <span className="material-icons text-3xl group-hover:rotate-12 transition-transform">auto_awesome</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></div>
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
