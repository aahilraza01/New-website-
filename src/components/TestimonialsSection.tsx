import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials-section" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold tracking-wide uppercase">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Client Endorsements</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Trusted by Founders and Technology Executives
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            Discover why global organizations trust Vanguard Digital to deliver their highest-stakes digital transformation initiatives.
          </p>
        </div>

        {/* Testimonials Grid (Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                {/* Rating & Company */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400">
                    Verified Client
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-4">
                  &ldquo;{t.highlight}&rdquo;
                </div>

                {/* Content */}
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 shrink-0">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.role}, <span className="text-slate-700 dark:text-slate-300 font-semibold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-wrap items-center justify-around gap-6 text-center">
          <div>
            <span className="font-heading font-bold text-2xl text-slate-900 dark:text-white block">5.0 / 5.0</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Clutch Agency Rating</span>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
          <div>
            <span className="font-heading font-bold text-2xl text-slate-900 dark:text-white block">100%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Job Success Score</span>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
          <div>
            <span className="font-heading font-bold text-2xl text-slate-900 dark:text-white block">Top 1%</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Global Engineering Talent</span>
          </div>
          <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden sm:block" />
          <div>
            <span className="font-heading font-bold text-2xl text-slate-900 dark:text-white block">ISO 27001</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">Security Architecture Standard</span>
          </div>
        </div>

      </div>
    </section>
  );
};
