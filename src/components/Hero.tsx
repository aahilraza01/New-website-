import React from 'react';
import { COMPANY_INFO, COMPANY_STATS } from '../data/mockData';
import { PageView } from '../types';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Star, 
  TrendingUp, 
  Layers, 
  Code, 
  Zap 
} from 'lucide-react';

interface HeroProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <section 
      id="home-hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-950 dark:to-black text-white pt-12 pb-20 lg:pt-20 lg:pb-28 transition-colors"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/30 text-blue-300 text-xs font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>Award-Winning Engineering & Digital Agency</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Strategic Digital Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Forward-Thinking
              </span>{' '}
              Enterprises.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              {COMPANY_INFO.subheading}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="hero-primary-cta-button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>Schedule a Free Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-services-button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-800 hover:text-white border border-slate-700 transition-colors"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Technical Debt Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Sub-Second Performance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% IP Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Digital Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card */}
              <div className="rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-1 border border-slate-700/80 shadow-2xl backdrop-blur-xl">
                
                {/* Header of fake agency workstation */}
                <div className="bg-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      vanguard-core-engine v4.2
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                      LIVE
                    </span>
                  </div>

                  {/* Metrics preview mini-cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/60">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">Page Speed</span>
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <p className="text-xl font-bold text-white mt-1">99 / 100</p>
                      <span className="text-[10px] text-emerald-400 font-medium">Core Web Vitals Verified</span>
                    </div>

                    <div className="bg-slate-800/60 rounded-lg p-3 border border-slate-700/60">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-400">Avg. Uplift</span>
                        <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <p className="text-xl font-bold text-white mt-1">+142%</p>
                      <span className="text-[10px] text-sky-400 font-medium">Conversion Lift</span>
                    </div>
                  </div>

                  {/* Active sprint snapshot */}
                  <div className="bg-slate-950/70 rounded-xl p-3.5 border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-400" />
                        Enterprise Modernization Sprint
                      </span>
                      <span className="text-blue-400 font-mono font-semibold">92%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-[92%]" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span>Architecture Audit & Security</span>
                      <span className="text-emerald-400">SOC-2 Passed</span>
                    </div>
                  </div>

                  {/* Client quote highlight */}
                  <div className="bg-blue-950/40 border border-blue-900/50 rounded-xl p-3.5 text-xs text-blue-200">
                    <div className="flex items-center gap-1 text-amber-400 mb-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                      <span className="text-slate-400 text-[10px] ml-1.5 font-medium">5.0 / 5.0 Rating</span>
                    </div>
                    <p className="italic text-slate-300">
                      &ldquo;Vanguard launched our platform 2 months ahead of deadline with remarkable architectural precision.&rdquo;
                    </p>
                    <div className="mt-2 text-[11px] text-slate-400 font-medium">
                      — Elena Rostova, CTO at FinEdge Capital
                    </div>
                  </div>

                  {/* Bottom quick links */}
                  <div className="pt-1 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate('portfolio')}
                      className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 group"
                    >
                      <span>View 2025 Case Studies</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                    <div className="flex items-center gap-1 text-[11px] text-slate-400">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Enterprise Ready</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Hero Bottom Stats Counter Strip */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {COMPANY_STATS.map((stat, idx) => (
              <div 
                key={idx} 
                id={`hero-stat-card-${idx}`}
                className="bg-slate-800/40 border border-slate-800 rounded-xl p-4 text-center sm:text-left transition-colors hover:border-slate-700"
              >
                <div className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  <span className="text-blue-400">{stat.value}</span>
                </div>
                <div className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
