import React, { useState } from 'react';
import { SERVICES } from '../data/mockData';
import { ServiceItem } from '../types';
import { 
  Code2, 
  Layout, 
  CloudCog, 
  Sparkles, 
  ShoppingBag, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  HelpCircle,
  Layers
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (service: ServiceItem) => void;
  isStandalonePage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
  isStandalonePage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'strategy', label: 'Brand & Growth' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-indigo-600" />;
      case 'CloudCog':
        return <CloudCog className="w-6 h-6 text-sky-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-purple-600" />;
      default:
        return <Layers className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="services-section" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
            <span>Specialized Capabilities</span>
          </div>
          
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            High-Performance Digital Services Built for Growth
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed">
            From greenfield architecture to high-converting product overhauls, our specialized practices deliver battle-tested enterprise results.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                id={`service-category-btn-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white dark:bg-slate-900 rounded-2xl p-7 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm tracking-wide uppercase">
                  Most Requested
                </div>
              )}

              <div>
                {/* Icon & Title */}
                <div className="w-14 h-14 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-all duration-200">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                    What&apos;s Included:
                  </span>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Actions */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-600 dark:text-slate-400 block font-semibold">
                    Starting From
                  </span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white font-heading">
                    {service.startingPrice}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id={`service-detail-btn-${service.id}`}
                    onClick={() => onSelectService(service)}
                    className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    Details
                  </button>

                  <button
                    id={`service-inquire-btn-${service.id}`}
                    onClick={() => onBookService(service)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/20 transition-all cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Additional Custom Scopes */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 to-indigo-950 rounded-2xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading text-xl font-bold text-white">
              Need a Customized Enterprise SOW or Retainer?
            </h4>
            <p className="text-blue-200 text-sm max-w-xl">
              We design bespoke dedicated team models, staff augmentation pods, and hybrid enterprise contracts tailored to your exact roadmap.
            </p>
          </div>
          <button
            id="services-custom-sow-btn"
            onClick={() => onBookService(SERVICES[0])}
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-semibold bg-white text-slate-900 hover:bg-blue-50 shadow-md transition-colors"
          >
            Request Custom Proposal
          </button>
        </div>

      </div>
    </section>
  );
};
