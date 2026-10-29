import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowDown } from 'lucide-react';
import { HERO_SLIDES, COMPANY_INFO } from '../data/siteData';

export default function HeroSection({ onGetStartedClick }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section id="hero" style={{ position: 'relative', height: '90vh', minHeight: '620px', overflow: 'hidden', background: '#191919' }}>
      
      {/* Background Carousel Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: index === currentSlide ? 1 : 0,
            transform: index === currentSlide ? 'scale(1)' : 'scale(1.06)',
            transition: 'opacity 1.2s ease-in-out, transform 6s ease-out',
            zIndex: 1
          }}
        />
      ))}

      {/* Hero Content Overlay (Centered as in original index.html) */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '850px', padding: '0 1rem' }}>
          
          {/* Eyebrow */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(184, 120, 22, 0.25)',
            border: '1px solid rgba(184, 120, 22, 0.5)',
            color: '#f59e0b',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            fontSize: '0.8rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            SINCE 1977 • COIMBATORE, TAMIL NADU
          </div>

          <h2 style={{ 
            fontSize: 'clamp(2.1rem, 5.2vw, 3.8rem)', 
            fontWeight: '800', 
            letterSpacing: '-0.5px',
            color: '#ffffff',
            marginBottom: '1.25rem',
            lineHeight: 1.18,
            textShadow: '0 4px 20px rgba(0,0,0,0.8)'
          }}>
            Coimbatore's Trusted Painting & <span style={{ color: '#b87816' }}>Construction Company</span> Since 1977
          </h2>

          <p style={{ 
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
            color: 'rgba(255, 255, 255, 0.92)', 
            lineHeight: '1.7', 
            marginBottom: '2.25rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.7)',
            maxWidth: '780px',
            margin: '0 auto 2.25rem auto'
          }}>
            Building Trust Through Quality Construction & Painting for Nearly Five Decades.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onGetStartedClick}
              style={{ 
                padding: '0.95rem 2.25rem', 
                fontSize: '1rem',
                borderRadius: '8px',
                fontWeight: '700',
                background: '#b87816',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 8px 24px rgba(184, 120, 22, 0.45)'
              }}
            >
              <span>Get Free Quotation</span>
              <ArrowDown size={18} />
            </button>
            <a
              href="tel:9443522285"
              style={{
                padding: '0.95rem 2rem',
                fontSize: '1rem',
                borderRadius: '8px',
                fontWeight: '700',
                background: 'rgba(255, 255, 255, 0.12)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>Call 94435 22285</span>
            </a>
          </div>

        </div>
      </div>

      {/* Left/Right Carousel Controls */}
      <button 
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hero-nav-btn hero-nav-prev"
        style={{
          position: 'absolute',
          left: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(6px)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.45)'}
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide}
        aria-label="Next slide"
        className="hero-nav-btn hero-nav-next"
        style={{
          position: 'absolute',
          right: '1.5rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          background: 'rgba(0, 0, 0, 0.45)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          color: '#ffffff',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(6px)',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary)'}
        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0, 0, 0, 0.45)'}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        gap: '0.6rem'
      }}>
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Slide ${idx + 1}`}
            style={{
              width: idx === currentSlide ? '32px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: idx === currentSlide ? 'var(--primary)' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease',
              border: 'none'
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          #hero {
            height: 85vh !important;
            min-height: 520px !important;
          }
          .hero-nav-prev {
            left: 0.5rem !important;
            width: 36px !important;
            height: 36px !important;
          }
          .hero-nav-next {
            right: 0.5rem !important;
            width: 36px !important;
            height: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
