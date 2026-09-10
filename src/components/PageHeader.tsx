import React from 'react';
import { PageView } from '../types';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  badge: string;
  description: string;
  currentPage: PageView;
  onNavigateHome: () => void;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  badge,
  description,
  currentPage,
  onNavigateHome,
}) => {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-14 lg:py-20 border-b border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-blue-400 font-medium capitalize">
            {currentPage.replace('-', ' ')}
          </span>
        </nav>

        <div className="max-w-3xl space-y-3">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide uppercase border border-blue-500/30">
            {badge}
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {description}
          </p>
        </div>

      </div>
    </div>
  );
};
