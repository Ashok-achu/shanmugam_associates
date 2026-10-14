import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesBar from './components/FeaturesBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import ClientsPartnersSection from './components/ClientsPartnersSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProvisionDetailPage from './pages/ProvisionDetailPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';

import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProvision, setSelectedProvision] = useState('villa');
  const [selectedServiceId, setSelectedServiceId] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 350);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollToCTA = () => {
    setActivePage('home');
    setTimeout(() => {
      const el = document.getElementById('cta');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 120);
  };

  const navigateToService = (serviceId) => {
    setSelectedServiceId(serviceId || 1);
    setActivePage('services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#ffffff', color: '#111827' }}>

      {/* Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        setSelectedProvision={setSelectedProvision}
      />

      {/* Page Router */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <>
            {/* 1. Hero */}
            <HeroSection onGetStartedClick={scrollToCTA} />

            {/* 2. Key Pillars / Features Bar */}
            <FeaturesBar />

            {/* 3. About */}
            <AboutSection onReadMore={() => {
              setActivePage('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />

            {/* 4. Services */}
            <ServicesSection
              onSelectProvision={setSelectedProvision}
              onNavigatePage={setActivePage}
              onSelectService={navigateToService}
            />

            {/* 5. Projects */}
            <ProjectsSection onNavigatePage={setActivePage} />

            {/* 6. Clients & Partners */}
            <ClientsPartnersSection />

            {/* 7. CTA – Planning to Transform Your Space */}
            <CTASection />
          </>
        )}

        {activePage === 'about' && (
          <AboutPage onNavigatePage={setActivePage} />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigatePage={setActivePage}
            initialServiceId={selectedServiceId}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage onNavigatePage={setActivePage} />
        )}

        {activePage === 'provision' && (
          <ProvisionDetailPage
            slug={selectedProvision}
            onNavigatePage={setActivePage}
          />
        )}

        {activePage === 'contact' && <ContactPage />}
        {activePage === 'login' && <LoginPage onLoginSuccess={() => setActivePage('home')} />}
      </main>

      {/* Footer */}
      <Footer
        onNavigatePage={setActivePage}
        onSelectProvision={setSelectedProvision}
      />

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            position: 'fixed', bottom: '2rem', right: '2rem',
            width: '46px', height: '46px', borderRadius: '50%',
            background: '#b87816', color: '#ffffff', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 6px 20px rgba(184,120,22,0.4)',
            cursor: 'pointer', zIndex: 1000, transition: 'all 0.3s ease'
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.background = '#9e640e'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = '#b87816'; }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
