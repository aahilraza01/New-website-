import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/mockData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetServiceTitle?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  presetServiceTitle = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(
    presetServiceTitle || SERVICES[0].title
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM PST');
  const [notes, setNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsBooked(true);
    }, 700);
  };

  const handleReset = () => {
    setIsBooked(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="consultation-booking-modal"
        className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative transition-colors"
      >
        <button
          onClick={onClose}
          aria-label="Close consultation modal"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isBooked ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
              Strategy Session Reserved!
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              We have dispatched a calendar invitation to <span className="font-semibold text-slate-900 dark:text-white">{email}</span> for{' '}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{preferredDate || 'your requested slot'}</span> at{' '}
              <span className="font-semibold text-slate-900 dark:text-white">{preferredTime}</span>.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-left text-slate-600 dark:text-slate-300 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Discussion Topic:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{selectedService}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Meeting Host:</span>
                <span className="font-semibold text-slate-900 dark:text-white">Senior Partner & Principal Lead</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 dark:text-slate-400">Location:</span>
                <span className="font-semibold text-slate-900 dark:text-white">Google Meet (Link in email)</span>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div className="p-8">
            <div className="space-y-1.5 mb-6">
              <div className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-semibold text-xs tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Commitment • Free 30-Min Call</span>
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                Schedule a Strategic Discovery Call
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Meet directly with an engineering principal to evaluate your roadmap and receive an initial estimate.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Michael Jordan"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="michael@firm.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                  Service Focus
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="General Architecture Consultation">
                    General Architecture Consultation
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  >
                    <option value="9:00 AM PST">9:00 AM PST</option>
                    <option value="11:00 AM PST">11:00 AM PST</option>
                    <option value="2:00 PM PST">2:00 PM PST</option>
                    <option value="4:00 PM PST">4:00 PM PST</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1">
                  Brief Project Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Target launch date, existing tech stack, or budget..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                id="confirm-consultation-btn"
                disabled={loading}
                className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Confirm Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Protected by mutual confidentiality & NDA</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
