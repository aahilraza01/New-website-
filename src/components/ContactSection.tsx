import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  MessageSquare, 
  ExternalLink,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Youtube,
  Navigation
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
  isStandalonePage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  isStandalonePage = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Custom Web Engineering',
    budget: '$10k - $25k',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email address, and a brief message.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Custom Web Engineering',
      budget: '$10k - $25k',
      message: '',
    });
    setSubmitted(false);
  };

  return (
    <section id="contact-us-section" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide uppercase border border-blue-500/30">
            <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
            <span>Direct Inquiries</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Build Something Extraordinary Together
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Have a project in mind or need an architectural consultation? Reach out today—our senior principals reply within 24 business hours.
          </p>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl p-8 sm:p-10 border border-slate-700 shadow-2xl backdrop-blur-sm">
            {submitted ? (
              <div 
                id="contact-form-success-banner"
                className="py-12 text-center space-y-5 animate-in zoom-in-95 duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white">
                  Message Received Successfully!
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{formData.name}</span>. A senior partner will review your inquiry regarding <span className="text-blue-400 font-medium">{formData.service}</span> and reach out to you at <span className="text-white font-semibold">{formData.email}</span> within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form id="main-contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-700 pb-4">
                  <h3 className="font-heading text-xl font-bold text-white">
                    Send Us a Project Proposal
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill in your details below to schedule a direct architectural discovery session.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-lg bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                      Service Needed
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                    >
                      <option value="Custom Web Engineering">Custom Web & App Engineering</option>
                      <option value="UI/UX Product Design">UI/UX & Product Design</option>
                      <option value="Cloud & DevOps Architecture">Cloud & DevOps Architecture</option>
                      <option value="Brand Identity & Strategy">Brand Identity & Strategy</option>
                      <option value="E-Commerce & Headless">E-Commerce & Headless Stores</option>
                      <option value="Technical SEO & Growth">Technical SEO & Growth</option>
                      <option value="General Enterprise Consultation">General Enterprise Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="contact-budget" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Estimated Project Budget
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    <option value="Under $10k">Under $10,000 (Sprint Audit / Consultation)</option>
                    <option value="$10k - $25k">$10,000 – $25,000 (Standard MVP / Redesign)</option>
                    <option value="$25k - $50k">$25,000 – $50,000 (Full-Stack Platform)</option>
                    <option value="$50k+">$50,000+ (Enterprise Overhaul / Multi-Service)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wide">
                    Project Overview & Goals *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your organization, goals, target launch timeline, and key technical challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  id="contact-form-submit-button"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-base text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  We respect your privacy. All information is protected by our standard mutual NDA.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details & Headquarters */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Info Box */}
            <div className="bg-slate-800/80 rounded-2xl p-7 border border-slate-700 space-y-6">
              <h3 className="font-heading text-lg font-bold text-white border-b border-slate-700/80 pb-3">
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Telephone</span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-white hover:text-blue-400 font-semibold transition-colors">
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">General Inquiries & RFPs</span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-blue-400 font-semibold transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Business Operations</span>
                    <p className="text-slate-200 font-medium">
                      {COMPANY_INFO.workingHours}
                    </p>
                    <span className="text-[11px] text-slate-400">Emergency SLA response 24/7/365</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Global Headquarters</span>
                    <p className="text-slate-200 font-medium leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-700/80">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Connect on Social Channels
                </span>
                <div className="flex items-center gap-3 text-slate-300">
                  <a
                    href={COMPANY_INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.twitter}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_INFO.socials.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Contact Callout */}
            <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-2xl p-5 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-emerald-400 font-semibold text-sm block">
                  Prefer Fast Messaging?
                </span>
                <p className="text-xs text-slate-300">
                  Chat directly with our intake team on WhatsApp.
                </p>
              </div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Vanguard%20Digital%2C%20I%20would%20like%20to%20inquire%20about%20a%20project.`}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shrink-0"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

        </div>

        {/* Google Maps Location Section */}
        <div id="google-maps-location-section" className="bg-slate-800/90 rounded-2xl overflow-hidden border border-slate-700 shadow-xl">
          <div className="p-5 border-b border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Navigation className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-sm sm:text-base">
                  Vanguard Digital Headquarters
                </h4>
                <p className="text-xs text-slate-400">
                  {COMPANY_INFO.address}
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=100+Montgomery+St+San+Francisco+CA+94104"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-700/80 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Embedded Map iFrame */}
          <div className="relative w-full h-80 bg-slate-950">
            <iframe
              title="Vanguard Digital San Francisco Location"
              src="https://maps.google.com/maps?q=100%20Montgomery%20St,%20San%20Francisco,%20CA%2094104&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 grayscale-[40%] contrast-[110%] opacity-90 hover:grayscale-0 transition-all duration-300"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </section>
  );
};
