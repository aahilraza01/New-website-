import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Zap, DollarSign } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (service: ServiceItem) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        id="service-detail-modal-box"
        className="bg-white dark:bg-slate-900 w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden relative max-h-[90vh] flex flex-col transition-colors"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50 dark:bg-slate-850 dark:bg-slate-800/60">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
              Practice Area Overview
            </span>
            <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white mt-1">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-2">
              Scope of Engagement
            </h4>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div className="bg-slate-50 dark:bg-slate-800/70 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
            <h4 className="font-heading text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Included Deliverables & Milestones
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SLA & Terms Specs */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Typical Sprint</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white">2 – 6 Weeks</span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <Zap className="w-4 h-4 text-amber-500 mx-auto mb-1" />
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Senior Staffing</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white">100% In-House</span>
            </div>
            <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
              <span className="text-[11px] text-slate-500 dark:text-slate-400 block">Warranty</span>
              <span className="text-xs font-bold text-slate-900 dark:text-white">60-Day Guarantee</span>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-blue-900 dark:text-blue-300 block">
                Estimated Investment
              </span>
              <span className="font-heading text-xl font-bold text-blue-950 dark:text-blue-200">
                Starting at {service.startingPrice}
              </span>
            </div>
            <span className="text-xs text-blue-700 dark:text-blue-400">
              Fixed-scope or sprint retainers available
            </span>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-700 transition-colors"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onInquire(service);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
