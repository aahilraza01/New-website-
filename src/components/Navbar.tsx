import React, { useState, useEffect } from 'react';
import { PageView } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { 
  Compass, 
  Menu, 
  X, 
  ArrowRight, 
  User, 
  Phone, 
  CheckCircle2, 
  Sun,
  Moon
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenLogin: () => void;
  onOpenConsultation: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenLogin,
  onOpenConsultation,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Notification Bar */}
      <header className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 dark:bg-slate-950 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1 animate-pulse"></span>
              Q3 Intake Open
            </span>
            <span>Accepting select enterprise & scale-up projects</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-700">|</span>
            <span className="hidden md:inline">{COMPANY_INFO.workingHours}</span>
          </div>
        </div>
      </header>

      {/* Main Sticky Navbar */}
      <nav 
        id="main-navigation-bar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 py-3' 
            : 'bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              id="brand-logo-button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl tracking-tight text-slate-900 dark:text-white block leading-tight">
                  Vanguard<span className="text-blue-600 dark:text-blue-400">.</span>
                </span>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400 block">
                  Digital Agency
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors relative cursor-pointer ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/50 font-semibold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-slate-800/80'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Desktop Actions (Theme toggle, Login, CTA) */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Dark Mode Toggle Button */}
              <button
                id="theme-mode-toggle-button"
                onClick={onToggleDarkMode}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12" />
                )}
              </button>

              <button
                id="header-client-login-button"
                onClick={onOpenLogin}
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                title="Client Portal Login"
              >
                <User className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                <span>Client Portal</span>
              </button>

              <button
                id="header-get-quote-button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-sm shadow-blue-600/30 transition-all hover:shadow-md cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Toggle & Mobile Dark Mode */}
            <div className="flex lg:hidden items-center gap-1.5">
              <button
                id="mobile-theme-mode-toggle-btn"
                onClick={onToggleDarkMode}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              <button
                id="mobile-client-login-btn"
                onClick={onOpenLogin}
                className="p-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                aria-label="Login"
              >
                <User className="w-5 h-5" />
              </button>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div 
            id="mobile-navigation-drawer"
            className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 mt-2 shadow-xl animate-in slide-in-from-top-2 duration-200"
          >
            <div className="space-y-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
              <button
                id="mobile-cta-consultation-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20"
              >
                <span>Get a Free Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between px-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
                <span>Theme:</span>
                <button
                  onClick={onToggleDarkMode}
                  className="font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1.5"
                >
                  {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
                  <span>{isDarkMode ? 'Dark Mode (Active)' : 'Light Mode (Active)'}</span>
                </button>
              </div>

              <div className="flex items-center justify-between px-2 pt-1 text-xs text-slate-500 dark:text-slate-400">
                <span>Direct Line:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

