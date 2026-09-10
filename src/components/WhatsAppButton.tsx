import React, { useState } from 'react';
import { MessageCircle, X, Send, PhoneCall, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'Hi! I would like to get a quote for a new web application.',
    'Hello, do you have availability for an upcoming product redesign?',
    'Hi Vanguard team, can we schedule a quick discovery call?',
  ];

  const handleSendMessage = (msg: string) => {
    const textToSend = msg || 'Hello Vanguard Digital team!';
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Popover Chat Card */}
      {isOpen && (
        <div 
          id="whatsapp-chat-popover"
          className="mb-3 w-80 sm:w-88 rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm leading-tight">
                  Vanguard Intake Desk
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Typically replies in 15 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-slate-50 space-y-3 max-h-80 overflow-y-auto">
            {/* Automated Greeting */}
            <div className="bg-white p-3 rounded-xl rounded-tl-none border border-slate-200 text-xs text-slate-700 shadow-xs space-y-1">
              <p className="font-medium text-slate-900">
                Welcome to Vanguard Digital 👋
              </p>
              <p>
                How can we assist your business today? Select a quick inquiry below or type a message to start on WhatsApp.
              </p>
              <span className="text-[10px] text-slate-400 block text-right pt-1">
                Intake Bot • Just now
              </span>
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                Quick Inquiries:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  className="w-full text-left p-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/50 transition-colors cursor-pointer"
                >
                  &ldquo;{prompt}&rdquo;
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(customMsg);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Type your project message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
              <button
                type="submit"
                aria-label="Send via WhatsApp"
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        id="whatsapp-floating-trigger-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 group relative"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-7 h-7" />
            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-white flex items-center justify-center text-[9px] font-bold">
              1
            </span>
          </>
        )}
      </button>
    </div>
  );
};
