import React from 'react';
import { WHY_CHOOSE_US_POINTS, COMPANY_INFO } from '../data/mockData';
import { 
  ShieldCheck, 
  CalendarCheck2, 
  Gauge, 
  KeyRound, 
  ClockAlert, 
  Lock, 
  CheckCircle2, 
  Award,
  Zap
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-600" />;
      case 'CalendarCheck2':
        return <CalendarCheck2 className="w-6 h-6 text-indigo-600" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-amber-500" />;
      case 'KeyRound':
        return <KeyRound className="w-6 h-6 text-emerald-600" />;
      case 'ClockAlert':
        return <ClockAlert className="w-6 h-6 text-sky-600" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-rose-500" />;
      default:
        return <Award className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-choose-us-section" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-semibold tracking-wide uppercase">
            <Zap className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>The Vanguard Advantage</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Why High-Growth Businesses Partner With Us
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            We don’t just write code or assemble templates. We function as your senior product, engineering, and digital growth extension.
          </p>
        </div>

        {/* 6 Key Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_POINTS.map((point, index) => (
            <div 
              key={index}
              id={`why-choose-us-card-${index}`}
              className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-7 border border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-blue-500/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700/80 border border-slate-200 dark:border-slate-600 shadow-xs flex items-center justify-center mb-5">
                {getIcon(point.icon)}
              </div>

              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2">
                {point.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison / Assurance Strip */}
        <div className="mt-14 p-8 rounded-2xl bg-slate-900 dark:bg-slate-950 text-white border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:px-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-base">Direct Slack / Teams Channel</h4>
                <p className="text-xs text-slate-400 mt-1">Real-time daily syncs directly with senior leads, never filtered through junior account managers.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:px-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-base">Continuous Staging Deploys</h4>
                <p className="text-xs text-slate-400 mt-1">Review live test environments anytime with automated CI/CD branch previews.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 pt-4 md:pt-0 md:px-4">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-white text-base">Zero Vendor Lock-in</h4>
                <p className="text-xs text-slate-400 mt-1">Standardized, clean TypeScript and well-documented infrastructure that any engineer can maintain.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
