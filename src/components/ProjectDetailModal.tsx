import React from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, TrendingUp, CheckCircle, Calendar, Tag, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (project: ProjectItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="project-detail-modal-box"
        className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative max-h-[92vh] flex flex-col transition-colors"
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50 dark:bg-slate-850 dark:bg-slate-800/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-100/70 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Completed {project.completedYear}
              </span>
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {project.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Client: <span className="font-semibold text-slate-700 dark:text-slate-300">{project.client}</span>
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Main Showcase Image */}
          <div className="rounded-xl overflow-hidden aspect-[16/9] bg-slate-900 border border-slate-200 dark:border-slate-700 relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Key Measurable Outcomes */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Measurable Business Impact</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-center">
                  <span className="font-heading text-2xl font-bold block text-blue-600 dark:text-blue-400">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-600 dark:text-slate-400 font-medium mt-0.5 block">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
            <div>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-1.5">
                The Architectural Challenge & Background
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                {project.shortDescription} Prior to our partnership, the client faced significant bottlenecks in performance, user conversion, and code maintainability as their customer volume tripled.
              </p>
            </div>

            <div>
              <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-1.5">
                The Vanguard Solution
              </h4>
              <p className="text-slate-600 dark:text-slate-300">
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Technology & Tools Stack</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            Need a similar solution for your organization?
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project);
              }}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors cursor-pointer"
            >
              Request Similar Build
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
