import React, { useState } from 'react';
import { PageView } from '../types';
import { COMPANY_INFO, SERVICES } from '../data/mockData';
import { 
  Compass, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check, 
  Shield, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram, 
  Youtube,
  Clock
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
    }
  };

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-site-footer" className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-blue-950/40 via-slate-900 to-indigo-950/40 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                Ready to elevate your digital presence?
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Book a confidential 30-minute discovery session with our principal engineers and design leads.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                id="footer-cta-consultation-btn"
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
              >
                Schedule Discovery Call
              </button>
              <button
                onClick={() => handleNav('contact')}
                className="px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Direct Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Vanguard<span className="text-blue-500">.</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              {COMPANY_INFO.tagline}. We engineer scalable web platforms, modern brand architectures, and high-conversion enterprise systems.
            </p>

            {/* Operational Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems 100% Operational</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2 text-slate-400">
              <a 
                href={COMPANY_INFO.socials.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socials.twitter} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socials.github} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="GitHub"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socials.instagram} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.socials.youtube} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:text-white hover:border-slate-700 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-blue-400 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-blue-400 transition-colors">
                  Services Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-blue-400 transition-colors">
                  Portfolio & Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-blue-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-wider">
              Practices & Services
            </h4>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button 
                    onClick={() => handleNav('services')}
                    className="hover:text-blue-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info & Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-semibold text-white text-xs uppercase tracking-wider">
              Headquarters
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Newsletter Input */}
            <div className="pt-2">
              <span className="block text-xs font-semibold text-white mb-2">
                Engineering & Design Dispatch
              </span>
              {newsletterSubscribed ? (
                <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>Subscribed! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="name@work.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Strip */}
        <div className="mt-14 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span>&bull;</span>
            <span className="hover:text-slate-300 cursor-pointer">SOC-2 Type II Certified</span>
            <span>&bull;</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
