import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Filter, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function GalleryPage({ onNavigatePage }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'apartments', label: 'Apartments' },
    { id: 'villas', label: 'Villas' },
    { id: 'institutional', label: 'Institutional' },
    { id: 'gated-communities', label: 'Gated communities' },
    { id: 'landscape', label: 'Landscape' },
    { id: 'in-progress', label: 'In progress' }
  ];

  const galleryImages = [
    // Apartments (6)
    { id: 'apt-1', category: 'apartments', label: 'Apartment Complex - Tower Elevation', src: '/images/gallery/apartments-01.jpg' },
    { id: 'apt-2', category: 'apartments', label: 'Multi-Storey Block - Exterior Paint', src: '/images/gallery/apartments-02.jpg' },
    { id: 'apt-3', category: 'apartments', label: 'Residential Campus - Wing View', src: '/images/gallery/apartments-03.jpg' },
    { id: 'apt-4', category: 'apartments', label: 'Apartment Exterior - Facade Finish', src: '/images/gallery/apartments-04.jpg' },
    { id: 'apt-5', category: 'apartments', label: 'Modern Balconies & Glass Railings', src: '/images/gallery/apartments-05.jpg' },
    { id: 'apt-6', category: 'apartments', label: 'High-Rise Residential Frontage', src: '/images/gallery/apartments-06.jpg' },

    // Villas (4)
    { id: 'vil-1', category: 'villas', label: 'Aerial Villa Community Layout', src: '/images/gallery/villas-01.jpg' },
    { id: 'vil-2', category: 'villas', label: 'Luxury Villa - Sunrise Elevation', src: '/images/gallery/villas-02.jpg' },
    { id: 'vil-3', category: 'villas', label: 'Independent Villa - Finished Coating', src: '/images/gallery/villas-03.jpg' },
    { id: 'vil-4', category: 'villas', label: 'Villa Row Houses & Master Courtyard', src: '/images/gallery/villas-04.jpg' },

    // Institutional (4)
    { id: 'inst-1', category: 'institutional', label: 'Aravind Eye Hospital - Main Wing', src: '/images/gallery/institutional-01.jpg' },
    { id: 'inst-2', category: 'institutional', label: 'Institutional Hospital Facade', src: '/images/gallery/institutional-02.jpg' },
    { id: 'inst-3', category: 'institutional', label: 'Healthcare Complex - Architectural Finish', src: '/images/gallery/institutional-03.jpg' },
    { id: 'inst-4', category: 'institutional', label: 'Commercial & Institutional Edifice', src: '/images/gallery/institutional-04.jpg' },

    // Gated communities (6)
    { id: 'gate-1', category: 'gated-communities', label: 'Grand Entrance Arch & Boulevard', src: '/images/gallery/gated-community-01.jpg' },
    { id: 'gate-2', category: 'gated-communities', label: 'Community Entrance & Security Pavilion', src: '/images/gallery/gated-community-02.jpg' },
    { id: 'gate-3', category: 'gated-communities', label: 'Porte-Cochere - Detailed Finishing', src: '/images/gallery/gated-community-03.jpg' },
    { id: 'gate-4', category: 'gated-communities', label: 'Entrance Portal & Architectural Columns', src: '/images/gallery/gated-community-04.jpg' },
    { id: 'gate-5', category: 'gated-communities', label: 'Ornamental Jali Screens & Entrance Portico', src: '/images/gallery/gated-community-05.jpg' },
    { id: 'gate-6', category: 'gated-communities', label: 'Wide Internal Boulevard & Compound Finish', src: '/images/gallery/gated-community-06.jpg' },

    // Landscape & Sculpture (4)
    { id: 'land-1', category: 'landscape', label: 'Park Sculpture - Monumental Sphere', src: '/images/gallery/landscape-sculpture-01.jpg' },
    { id: 'land-2', category: 'landscape', label: 'Artisan Figure - Themed Sculpture', src: '/images/gallery/landscape-sculpture-02.jpg' },
    { id: 'land-3', category: 'landscape', label: 'Heritage Warrior Bronze Sculpture', src: '/images/gallery/landscape-sculpture-03.jpg' },
    { id: 'land-4', category: 'landscape', label: 'Landscaped Grounds & Boulevard Trees', src: '/images/gallery/landscape-sculpture-04.jpg' },

    // In progress (4)
    { id: 'prog-1', category: 'in-progress', label: 'Structural Civil Work - Multi-Storey Block', src: '/images/gallery/in-progress-01.jpg' },
    { id: 'prog-2', category: 'in-progress', label: 'Facade Scaffolding & Exterior Coating Work', src: '/images/gallery/in-progress-02.jpg' },
    { id: 'prog-3', category: 'in-progress', label: 'Active Site Construction & Surface Prep', src: '/images/gallery/in-progress-03.jpg' },
    { id: 'prog-4', category: 'in-progress', label: 'Terrace Waterproofing & Membrane Laying', src: '/images/gallery/in-progress-04.jpg' },

    // Extra gallery images (22)
    { id: 'extra-01', category: 'apartments', label: 'Project Photo 01', src: '/images/gallery/extra-01.jpeg' },
    { id: 'extra-02', category: 'apartments', label: 'Project Photo 02', src: '/images/gallery/extra-02.jpg' },
    { id: 'extra-03', category: 'apartments', label: 'Project Photo 03', src: '/images/gallery/extra-03.jpeg' },
    { id: 'extra-04', category: 'apartments', label: 'Project Photo 04', src: '/images/gallery/extra-04.jpeg' },
    { id: 'extra-05', category: 'apartments', label: 'Project Photo 05', src: '/images/gallery/extra-05.jpeg' },
    { id: 'extra-06', category: 'apartments', label: 'Project Photo 06', src: '/images/gallery/extra-06.jpeg' },
    { id: 'extra-07', category: 'villas', label: 'Project Photo 07', src: '/images/gallery/extra-07.jpeg' },
    { id: 'extra-08', category: 'villas', label: 'Project Photo 08', src: '/images/gallery/extra-08.jpeg' },
    { id: 'extra-09', category: 'villas', label: 'Project Photo 09', src: '/images/gallery/extra-09.jpeg' },
    { id: 'extra-10', category: 'institutional', label: 'Project Photo 10', src: '/images/gallery/extra-10.jpeg' },
    { id: 'extra-11', category: 'institutional', label: 'Project Photo 11', src: '/images/gallery/extra-11.jpg' },
    { id: 'extra-12', category: 'gated-communities', label: 'Project Photo 12', src: '/images/gallery/extra-12.jpeg' },
    { id: 'extra-13', category: 'gated-communities', label: 'Project Photo 13', src: '/images/gallery/extra-13.jpg' },
    { id: 'extra-14', category: 'gated-communities', label: 'Project Photo 14', src: '/images/gallery/extra-14.jpeg' },
    { id: 'extra-15', category: 'landscape', label: 'Project Photo 15', src: '/images/gallery/extra-15.jpg' },
    { id: 'extra-16', category: 'landscape', label: 'Project Photo 16', src: '/images/gallery/extra-16.jpeg' },
    { id: 'extra-17', category: 'landscape', label: 'Project Photo 17', src: '/images/gallery/extra-17.jpg' },
    { id: 'extra-18', category: 'in-progress', label: 'Project Photo 18', src: '/images/gallery/extra-18.jpeg' },
    { id: 'extra-19', category: 'in-progress', label: 'Project Photo 19', src: '/images/gallery/extra-19.jpg' },
    { id: 'extra-20', category: 'in-progress', label: 'Project Photo 20', src: '/images/gallery/extra-20.jpeg' },
    { id: 'extra-21', category: 'in-progress', label: 'Project Photo 21', src: '/images/gallery/extra-21.jpeg' },
    { id: 'extra-22', category: 'in-progress', label: 'Project Photo 22', src: '/images/gallery/extra-22.jpeg' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ══════════════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #090e17 0%, #111827 60%, #1e293b 100%)',
        color: '#ffffff',
        padding: '5.5rem 1.5rem 4.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '420px', height: '420px', borderRadius: '50%',
          border: '2px solid rgba(184,120,22,0.18)', pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(184, 120, 22, 0.15)',
            border: '1px solid rgba(184, 120, 22, 0.35)',
            borderRadius: '9999px',
            padding: '0.4rem 1.1rem',
            color: '#f59e0b',
            fontSize: '0.82rem',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '1.25rem'
          }}>
            <Sparkles size={14} />
            Photo Archive • Finished & On-Site Works
          </div>

          <h1 className="page-hero-h1" style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            Gallery
          </h1>

          <p style={{
            fontSize: '1.14rem',
            color: '#cbd5e1',
            maxWidth: '820px',
            lineHeight: 1.75
          }}>
            A look at our finished and in-progress work across residential villas, apartment complexes, commercial hospitals, and gated infrastructure.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          GALLERY CONTROLS & GRID
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1380px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
        
        {/* Filter Tabs */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.65rem',
          justifyContent: 'center',
          marginBottom: '3.5rem'
        }}>
          {categories.map((cat) => {
            const count = cat.id === 'all' 
              ? galleryImages.length 
              : galleryImages.filter(img => img.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.65rem 1.35rem',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: '700',
                  border: isActive ? '1px solid #b87816' : '1px solid #e2e8f0',
                  background: isActive ? '#b87816' : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? '0 4px 14px rgba(184,120,22,0.3)' : '0 1px 3px rgba(0,0,0,0.04)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#b87816';
                    e.currentTarget.style.color = '#b87816';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.color = '#475569';
                  }
                }}
              >
                <span>{cat.label}</span>
                <span style={{
                  fontSize: '0.75rem',
                  opacity: 0.8,
                  padding: '0.1rem 0.45rem',
                  borderRadius: '9999px',
                  background: isActive ? 'rgba(255,255,255,0.25)' : '#f1f5f9',
                  color: isActive ? '#ffffff' : '#64748b'
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 28-Image Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem'
        }}>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setLightboxIndex(index)}
              style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                aspectRatio: '4 / 3',
                cursor: 'pointer',
                background: '#f1f5f9',
                boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
                transition: 'transform 0.35s ease, box-shadow 0.35s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.14)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.06)';
                const overlay = e.currentTarget.querySelector('.gallery-hover-overlay');
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(0,0,0,0.06)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
                const overlay = e.currentTarget.querySelector('.gallery-hover-overlay');
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              <img
                src={image.src}
                alt={image.label}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />

              {/* Hover Overlay */}
              <div
                className="gallery-hover-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.3) 60%, transparent 100%)',
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '1.25rem',
                  color: '#ffffff'
                }}
              >
                <div style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  fontWeight: '800',
                  letterSpacing: '1.5px',
                  color: '#f59e0b',
                  marginBottom: '0.25rem'
                }}>
                  {image.category.replace('-', ' ')}
                </div>
                <div style={{
                  fontSize: '0.98rem',
                  fontWeight: '700',
                  lineHeight: 1.3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span>{image.label}</span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ══════════════════════════════════════════════════════════
          LIGHTBOX MODAL
      ══════════════════════════════════════════════════════════ */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Button */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(null); }}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <X size={24} />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
            }}
            aria-label="Previous"
            style={{
              position: 'absolute',
              left: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
            }}
            aria-label="Next"
            style={{
              position: 'absolute',
              right: '1.5rem',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <ChevronRight size={28} />
          </button>

          {/* Image & Caption */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].label}
              style={{
                maxWidth: '90vw',
                maxHeight: '78vh',
                objectFit: 'contain',
                borderRadius: '8px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)'
              }}
            />
            <div style={{
              marginTop: '1rem',
              textAlign: 'center',
              color: '#ffffff',
              maxWidth: '600px'
            }}>
              <div style={{
                fontSize: '0.78rem',
                color: '#f59e0b',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                marginBottom: '0.25rem'
              }}>
                {filteredImages[lightboxIndex].category.replace('-', ' ')} • {lightboxIndex + 1} of {filteredImages.length}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                {filteredImages[lightboxIndex].label}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          BOTTOM CTA BAND
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        padding: '5rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
            Have a Project in Mind?
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7, marginBottom: '2rem' }}>
            Whether it's an independent villa, apartment community, or commercial facility, talk to Coimbatore's trusted contractors since 1977.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onNavigatePage && onNavigatePage('contact')}
              style={{
                background: '#b87816',
                color: '#ffffff',
                border: 'none',
                padding: '0.9rem 2.2rem',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 8px 20px rgba(184,120,22,0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>Contact Us</span>
              <ArrowRight size={18} />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              style={{
                background: '#ffffff',
                color: '#111827',
                border: '1px solid #cbd5e1',
                padding: '0.9rem 2rem',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Phone size={18} color="#b87816" />
              <span>Call {COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

