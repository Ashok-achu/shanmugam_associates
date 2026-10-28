import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesBar from './components/FeaturesBar';
import AboutSection from './components/AboutSection';
import HomeContentSection from './components/HomeContentSection';
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
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage';

import { SEO_DATA } from './data/seoData';
import { ArrowUp } from 'lucide-react';

const PROVISION_SLUGS = [
  'interior-painting',
  'exterior-painting',
  'house-painting',
  'commercial-painting',
  'texture-painting',
  'waterproofing'
];

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProvision, setSelectedProvision] = useState('interior-painting');
  const [selectedServiceId, setSelectedServiceId] = useState(1);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Initialize route from current window.location.pathname
  useEffect(() => {
    const parsePath = (path) => {
      const clean = path.replace(/\/+$/, '') || '/';
      if (clean === '/' || clean === '') return { page: 'home', slug: 'interior-painting' };
      if (clean === '/about-us' || clean === '/about') return { page: 'about', slug: null };
      if (clean === '/faq') return { page: 'faq', slug: null };
      if (clean === '/blog') return { page: 'blog', slug: null };
      if (clean === '/contact') return { page: 'contact', slug: null };
      if (clean === '/projects') return { page: 'projects', slug: null };
      if (clean === '/services') return { page: 'services', slug: null };

      const provMatch = PROVISION_SLUGS.find(s => clean === `/${s}`);
      if (provMatch) return { page: 'provision', slug: provMatch };

      return { page: 'home', slug: 'interior-painting' };
    };

    const initial = parsePath(window.location.pathname);
    setActivePage(initial.page);
    if (initial.slug) setSelectedProvision(initial.slug);

    const handlePopState = () => {
      const current = parsePath(window.location.pathname);
      setActivePage(current.page);
      if (current.slug) setSelectedProvision(current.slug);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update Document Title, Meta Description, and Browser URL whenever activePage or selectedProvision changes
  useEffect(() => {
    let canonicalPath = '/';
    if (activePage === 'about') canonicalPath = '/about-us';
    else if (activePage === 'faq') canonicalPath = '/faq';
    else if (activePage === 'blog') canonicalPath = '/blog';
    else if (activePage === 'contact') canonicalPath = '/contact';
    else if (activePage === 'projects') canonicalPath = '/projects';
    else if (activePage === 'services') canonicalPath = '/services';
    else if (activePage === 'provision') canonicalPath = `/${selectedProvision}`;

    // Update browser URL without reload if different
    if (window.location.pathname !== canonicalPath && canonicalPath !== '/projects' && canonicalPath !== '/services') {
      window.history.pushState({}, '', canonicalPath);
    }

    // Apply SEO metadata
    const seo = SEO_DATA[canonicalPath] || SEO_DATA['/'];
    if (seo) {
      document.title = seo.title;
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', seo.metaDesc);
    }
  }, [activePage, selectedProvision]);

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 350);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navigateToPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProvision = (slug) => {
    setSelectedProvision(slug);
    setActivePage('provision');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        setActivePage={navigateToPage}
        setSelectedProvision={handleSelectProvision}
      />

      {/* Page Router */}
      <main style={{ flex: 1 }}>
        {activePage === 'home' && (
          <>
            {/* 1. Hero with Coimbatore's Trusted Painting & Construction Company Since 1977 */}
            <HeroSection onGetStartedClick={scrollToCTA} />

            {/* 2. Key Pillars / Features Bar */}
            <FeaturesBar />

            {/* 3. About Section with full verbatim 4-paragraph history */}
            <AboutSection onReadMore={() => navigateToPage('about')} />

            {/* 4. Complete What We Do (Painting & Construction), Why Choose Us, Projects We Handle, Areas We Serve, and Homepage FAQs */}
            <HomeContentSection 
              onNavigatePage={navigateToPage} 
              onSelectProvision={handleSelectProvision} 
            />

            {/* 5. Projects Showcase */}
            <ProjectsSection onNavigatePage={navigateToPage} />

            {/* 6. Clients & Trusted Developers */}
            <ClientsPartnersSection />

            {/* 7. Call To Action (Planning to paint or build something?) */}
            <CTASection />
          </>
        )}

        {/* 02. About Us (/about-us) */}
        {activePage === 'about' && (
          <AboutPage onNavigatePage={navigateToPage} />
        )}

        {/* 03-08. Dedicated Specializations (/interior-painting, /exterior-painting, etc.) */}
        {activePage === 'provision' && (
          <ProvisionDetailPage
            slug={selectedProvision}
            onNavigatePage={navigateToPage}
            onSelectProvision={handleSelectProvision}
          />
        )}

        {/* 09. Contact (/contact) */}
        {activePage === 'contact' && (
          <ContactPage />
        )}

        {/* 10. Frequently Asked Questions (/faq) */}
        {activePage === 'faq' && (
          <FAQPage onNavigatePage={navigateToPage} />
        )}

        {/* 11. Blog (/blog) */}
        {activePage === 'blog' && (
          <BlogPage onNavigatePage={navigateToPage} />
        )}

        {/* Additional Pages */}
        {activePage === 'services' && (
          <ServicesPage
            onNavigatePage={navigateToPage}
            initialServiceId={selectedServiceId}
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage onNavigatePage={navigateToPage} />
        )}

        {activePage === 'login' && (
          <LoginPage onLoginSuccess={() => navigateToPage('home')} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigatePage={navigateToPage}
        onSelectProvision={handleSelectProvision}
      />

      {/* Scroll to Top Floating Button */}
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
