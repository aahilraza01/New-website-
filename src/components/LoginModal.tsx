import React, { useState } from 'react';
import { X, Lock, Mail, User, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both your work email and password.');
      return;
    }

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 800);
  };

  const handleDemoFill = () => {
    setEmail('client@acmecorp.com');
    setPassword('••••••••••••');
    setError('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="client-portal-modal"
        className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative transition-colors"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close portal modal"
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isLoggedIn ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
              Welcome to Client Workspace
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Logged in as <span className="font-semibold text-slate-900 dark:text-white">{email}</span>. You now have access to live sprint metrics, staging links, and automated invoicing.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-left text-xs space-y-2">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Active Project:</span>
                <span className="font-semibold text-slate-900 dark:text-white">Enterprise Cloud Migration</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Sprint Status:</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Sprint 4 In Progress</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Lead Architect:</span>
                <span className="font-semibold text-slate-900 dark:text-white">Julian Montgomery</span>
              </div>
            </div>
            <button
              onClick={() => {
                setIsLoggedIn(false);
                onClose();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold text-sm transition-colors cursor-pointer"
            >
              Exit Workspace Preview
            </button>
          </div>
        ) : (
          <div className="p-8">
            {/* Header */}
            <div className="text-center space-y-2 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto border border-blue-100 dark:border-blue-900/50">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">
                Client Portal Login
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Access your real-time deliverables, Figma prototypes, and project timeline.
              </p>
            </div>

            {/* Demo Fill Helper */}
            <div className="mb-5 p-3 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/40 flex items-center justify-between">
              <div className="text-xs text-blue-900 dark:text-blue-300">
                <span className="font-semibold block">Testing the preview?</span>
                <span className="text-blue-700 dark:text-blue-400">Pre-fill simulated client credentials</span>
              </div>
              <button
                type="button"
                onClick={handleDemoFill}
                className="px-2.5 py-1 text-xs font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Auto Fill
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-medium">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide mb-1.5">
                  Work Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="client@organization.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => alert('Password reset link sent to your registered email.')}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium cursor-pointer"
                  >
                    Forgot?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    placeholder="Enter your portal password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-blue-600 focus:ring-blue-500"
                  />
                  <span>Remember this device</span>
                </label>
                <span className="flex items-center gap-1 text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>256-bit SSL</span>
                </span>
              </div>

              <button
                type="submit"
                id="portal-login-submit-button"
                disabled={isLoading}
                className="w-full py-3 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <span>Sign In to Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400">
              Not a client yet?{' '}
              <button
                onClick={onClose}
                className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
              >
                Request a new proposal &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
