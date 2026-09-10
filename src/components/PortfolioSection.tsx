import React, { useState } from 'react';
import { PROJECTS } from '../data/mockData';
import { ProjectItem } from '../types';
import { ExternalLink, Layers, ArrowUpRight, CheckCircle } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  isStandalonePage?: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  isStandalonePage = false,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web Design', 'SaaS Platform', 'Mobile App', 'Brand Identity'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio-section" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide uppercase border border-blue-500/30">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Proven Results</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Featured Client Case Studies & Projects
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Explore how we helped industry leaders redesign workflows, scale transactional volume, and capture market share.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`portfolio-filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Modern Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="group bg-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/80 hover:border-blue-500/70 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-900/80 backdrop-blur-md text-blue-300 border border-slate-700">
                    {project.category}
                  </span>
                </div>

                {/* Arrow Action Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-blue-600/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0 translate-x-1 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Primary Metric Pill */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-300 font-medium bg-slate-900/85 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700">
                    {project.client}
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-slate-900/85 backdrop-blur-sm px-2.5 py-1 rounded border border-slate-700">
                    {project.metrics[0]?.value} {project.metrics[0]?.label}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tags & Click CTA */}
                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="text-[11px] font-medium text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="text-[11px] text-slate-400">+{project.tags.length - 2} more</span>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    View Case Study &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Standalone Project Stats Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-800/50 border border-slate-700 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Over 140+ custom production systems launched since 2014</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Strict non-disclosure compliance for confidential client IP</span>
          </div>
          <button
            onClick={() => onSelectProject(PROJECTS[0])}
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Review Architecture Stack &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
