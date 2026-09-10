import React, { useState, useEffect } from 'react';
import { PageView, ServiceItem, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PageHeader } from './components/PageHeader';
import { FAQSection } from './components/FAQSection';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationPresetService, setConsultationPresetService] = useState('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  // Dark Mode state with localStorage persistence & system preference detection
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('vanguard_theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Synchronize 'dark' class on documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('vanguard_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('vanguard_theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    setConsultationPresetService(serviceTitle || '');
    setIsConsultationOpen(true);
  };

  const handleBookService = (service: ServiceItem) => {
    handleOpenConsultation(service.title);
  };

  const handleRequestSimilarProject = (project: ProjectItem) => {
    handleOpenConsultation(`Custom Build similar to ${project.title}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
      {/* Sticky Header & Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenConsultation={() => handleOpenConsultation()}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Areas based on selected PageView */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* 1. Attractive Hero Section with proof stats */}
            <Hero
              onNavigate={handleNavigate}
              onOpenConsultation={() => handleOpenConsultation()}
            />

            {/* 2. Services Overview with quick cards */}
            <ServicesSection
              onSelectService={(service) => setActiveModalService(service)}
              onBookService={handleBookService}
            />

            {/* 3. Why Choose Us section */}
            <WhyChooseUs />

            {/* 4. Portfolio / Projects Showcase */}
            <PortfolioSection
              onSelectProject={(project) => setActiveModalProject(project)}
            />

            {/* 5. Client Testimonials */}
            <TestimonialsSection />

            {/* 6. Contact Us Section with Contact Form, Details & Google Maps */}
            <ContactSection />
          </>
        )}

        {currentPage === 'about' && (
          <>
            <PageHeader
              title="Architecting Scalable Digital Realities"
              badge="Our Story & Philosophy"
              description="Learn how our senior engineer-to-client model eliminates overhead, guarantees zero technical debt, and drives sustainable business velocity."
              currentPage="about"
              onNavigateHome={() => handleNavigate('home')}
            />
            <AboutSection
              onNavigate={handleNavigate}
              onOpenConsultation={() => handleOpenConsultation()}
              isStandalonePage={true}
            />
            <WhyChooseUs />
            <TestimonialsSection />
          </>
        )}

        {currentPage === 'services' && (
          <>
            <PageHeader
              title="Full-Spectrum Enterprise Digital Services"
              badge="Practices & Capabilities"
              description="From single-page web applications and cloud infrastructure to bespoke UI/UX design systems and growth marketing funnels."
              currentPage="services"
              onNavigateHome={() => handleNavigate('home')}
            />
            <ServicesSection
              onSelectService={(service) => setActiveModalService(service)}
              onBookService={handleBookService}
              isStandalonePage={true}
            />
            <WhyChooseUs />
            <FAQSection />
          </>
        )}

        {currentPage === 'portfolio' && (
          <>
            <PageHeader
              title="Proven Case Studies & Completed Works"
              badge="Client Impact Portfolio"
              description="Explore real-world client platforms delivered by Vanguard Digital across institutional finance, healthcare, SaaS, and luxury retail."
              currentPage="portfolio"
              onNavigateHome={() => handleNavigate('home')}
            />
            <PortfolioSection
              onSelectProject={(project) => setActiveModalProject(project)}
              isStandalonePage={true}
            />
            <TestimonialsSection />
          </>
        )}

        {currentPage === 'contact' && (
          <>
            <PageHeader
              title="Direct Inquiry & Architectural Consultation"
              badge="Connect With Our Partners"
              description="Whether you have an immediate RFP, an upcoming product redesign, or need an emergency cloud audit, our senior team is ready."
              currentPage="contact"
              onNavigateHome={() => handleNavigate('home')}
            />
            <ContactSection isStandalonePage={true} />
            <FAQSection />
          </>
        )}
      </main>

      {/* Modern Multi-Column Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Interactive WhatsApp Widget */}
      <WhatsAppButton />

      {/* Client Portal Login Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      {/* Schedule Strategy Consultation / Get a Quote Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        presetServiceTitle={consultationPresetService}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onInquire={handleBookService}
      />

      {/* Project Case Study Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onRequestSimilar={handleRequestSimilarProject}
      />
    </div>
  );
}
