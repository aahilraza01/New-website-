import React, { useState } from 'react';
import { COMPANY_INFO, TEAM_MEMBERS, COMPANY_STATS } from '../data/mockData';
import { 
  Target, 
  Eye, 
  Award, 
  History, 
  Users, 
  Linkedin, 
  Twitter, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { PageView } from '../types';

interface AboutSectionProps {
  onNavigate: (page: PageView) => void;
  onOpenConsultation: () => void;
  isStandalonePage?: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onOpenConsultation,
  isStandalonePage = false,
}) => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'story'>('mission');

  const milestones = [
    {
      year: '2014',
      title: 'Agency Inception',
      description: 'Founded in San Francisco by senior tech leads aiming to eliminate agency bureaucracy.',
    },
    {
      year: '2018',
      title: 'Enterprise Practice Launch',
      description: 'Expanded into institutional FinTech, HIPAA compliant healthcare, and multi-tenant SaaS.',
    },
    {
      year: '2022',
      title: 'Headless & Cloud Focus',
      description: 'Pioneered sub-second headless e-commerce architectures and automated Kubernetes infrastructure.',
    },
    {
      year: '2026',
      title: 'Global Scale & Intelligent UI',
      description: 'Over 140+ flagship platforms launched with 99.4% client satisfaction across 18 countries.',
    },
  ];

  return (
    <section id="about-us-section" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
              <Building2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>About Vanguard Digital</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
              Architecting Digital Experiences with Engineering Precision.
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Founded in {COMPANY_INFO.foundedYear}, Vanguard Digital was established on a single core belief: business software and brand identity should be engineered with the same rigor, elegance, and reliability as mission-critical systems.
            </p>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              We bridge the gap between creative artistry and enterprise software engineering. Rather than bloated teams or endless discovery cycles, we deploy specialized pods of seasoned specialists who deliver actionable code and impactful interfaces from week one.
            </p>

            {/* Quick Proof Pills */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                <span className="font-heading text-2xl font-bold text-blue-600 dark:text-blue-400 block">12+ Years</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Of continuous technical leadership</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
                <span className="font-heading text-2xl font-bold text-indigo-600 dark:text-indigo-400 block">99.4%</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Client satisfaction rating</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="about-cta-consultation-btn"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-colors cursor-pointer"
              >
                <span>Partner with Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Mission & Vision Interactive Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

              {/* Tabs */}
              <div className="flex border-b border-slate-800 pb-3 mb-6 gap-3">
                <button
                  id="about-tab-mission"
                  onClick={() => setActiveTab('mission')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'mission'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </button>

                <button
                  id="about-tab-vision"
                  onClick={() => setActiveTab('vision')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'vision'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Our Vision</span>
                </button>

                <button
                  id="about-tab-story"
                  onClick={() => setActiveTab('story')}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === 'story'
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <History className="w-4 h-4" />
                  <span>Our Origin</span>
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'mission' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Empowering Bold Organizations Through Flawless Digital Execution.
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Our mission is to dismantle the friction between strategy and technical reality. We equip modern companies with modern, resilient digital architectures that accelerate growth, delight end users, and withstand exponential enterprise scale.
                  </p>
                  <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Zero tolerance for bloated code, security compromises, or vendor lock-in.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Radical transparency in budget estimation, weekly progress, and architecture choices.</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Setting the Benchmark for Next-Generation Digital Standards.
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We envision a business landscape where enterprise software is as joyful, lightning-fast, and thoughtfully designed as premier consumer applications—empowering teams to operate with total speed and agility.
                  </p>
                  <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Global footprint serving innovators across North America, Europe, and Asia.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Continuous integration of modern AI automation without sacrificing human craftsmanship.</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'story' && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <h3 className="font-heading text-2xl font-bold text-white">
                    Crafted by Engineers and Designers, Not Marketers.
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    After years witnessing enterprise clients pay exorbitant fees for sluggish deliverables and broken promises, our founders created Vanguard in 2014 to champion direct engineer-to-client collaboration with guaranteed outcomes.
                  </p>
                  <div className="space-y-2 pt-3 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>100% privately held, organically profitable, and engineer-driven.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Over 140 enterprise platforms successfully deployed in 12 years.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Location Badge */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Headquarters: San Francisco, California</span>
                <span className="text-blue-400 font-medium">Operating Globally</span>
              </div>

            </div>
          </div>

        </div>

        {/* Experience Milestones Timeline */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Our Journey of Experience & Innovation
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              A track record of evolving alongside the world&apos;s most demanding digital standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div 
                key={idx}
                id={`milestone-card-${m.year}`}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 relative hover:border-blue-300 dark:hover:border-blue-500/50 hover:shadow-md transition-all"
              >
                <div className="font-heading text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                  {m.year}
                </div>
                <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white mb-2">
                  {m.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team Highlights */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase mb-3">
              <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Leadership Team</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Guided by Veteran Technologists and Product Designers
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-2">
              Every client engagement has active principal involvement from discovery through post-launch scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.id}
                id={`team-card-${member.id}`}
                className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-slate-100 dark:border-slate-700 shadow-inner">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="font-heading text-base font-bold text-slate-900 dark:text-white">
                  {member.name}
                </h4>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5 block">
                  {member.role}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-center gap-3 text-slate-400 dark:text-slate-400">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.twitter} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-1"
                    aria-label={`${member.name} Twitter profile`}
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
