import React, { useState } from 'react';
import { 
  Paintbrush, 
  Home, 
  Building, 
  Building2, 
  Layers, 
  Brush, 
  ShieldCheck, 
  Palette, 
  ArrowRight,
  X,
  CheckCircle2
} from 'lucide-react';

export default function ServicesSection({ onSelectProvision, onNavigatePage, onSelectService }) {
  const [activeModalService, setActiveModalService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Interior Painting",
      description: "Elegant and modern interior painting solutions to create beautiful and comfortable living spaces.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
      icon: Paintbrush,
      slug: "painting",
      provisionSlug: "interior-painting",
      highlights: [
        "Dust-free preparation & masking",
        "Odorless, eco-friendly luxury emulsions",
        "Washable & stain-resistant finishes",
        "Accent wall styling & color consultations"
      ]
    },
    {
      id: 2,
      title: "Exterior Painting",
      description: "Durable exterior painting solutions to enhance the look and protect your property from weather conditions.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      icon: Home,
      slug: "painting",
      provisionSlug: "exterior-painting",
      highlights: [
        "All-weather elastomeric weather-shield",
        "Anti-fungal & algae protection",
        "UV-resistant long lasting pigments",
        "High-pressure jet wash & crack bridging"
      ]
    },
    {
      id: 3,
      title: "House Painting",
      description: "Complete painting services for individual homes, villas, apartments and residential communities.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800&auto=format&fit=crop",
      icon: Building,
      slug: "villa",
      provisionSlug: "house-painting",
      highlights: [
        "Custom villa & apartment packages",
        "Dedicated project supervisor on-site",
        "Complete furniture & floor protection",
        "Clean handover within agreed timeline"
      ]
    },
    {
      id: 4,
      title: "Commercial Painting",
      description: "Reliable painting solutions for offices, retail spaces, commercial buildings and industrial facilities.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
      icon: Building2,
      slug: "highrise",
      provisionSlug: "commercial-painting",
      highlights: [
        "High-rise façade scaffolding & ropes",
        "Commercial compliance & safety standards",
        "Zero-disruption off-hours execution",
        "Anti-corrosive structural steel coatings"
      ]
    },
    {
      id: 5,
      title: "Texture Painting & Royal Play Designs",
      description: "Add depth and character to your walls with premium texture painting and decorative finishes.",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop",
      icon: Layers,
      slug: "tilelaying",
      provisionSlug: "texture-painting",
      highlights: [
        "Italian marble stucco & metallic textures",
        "Rustic, concrete & brick 3D finishes",
        "Custom stencil & artistic patterns",
        "Durable, cleanable surface sealing"
      ]
    },
    {
      id: 6,
      title: "Waterproofing Solutions",
      description: "Protect your building from water damage with our reliable waterproofing services for terraces, roofs, walls and bathrooms.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop",
      icon: ShieldCheck,
      slug: "waterproofing",
      provisionSlug: "waterproofing",
      highlights: [
        "Terrace & flat roof waterproofing",
        "Exterior wall & parapet sealing",
        "Bathroom & wet area protection",
        "Long-lasting structural protection"
      ]
    },
    {
      id: 7,
      title: "Epoxy Flooring & Protective Coatings",
      description: "High-performance epoxy flooring and protective coating solutions for residential, commercial and industrial use.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
      icon: ShieldCheck,
      slug: "epoxy",
      highlights: [
        "Self-leveling heavy duty resin floors",
        "Seamless anti-slip & hygienic surfaces",
        "High chemical, impact & abrasion resistance",
        "Automotive showrooms, labs & warehouse grades"
      ]
    },
    {
      id: 8,
      title: "Painting Consultation & Project Execution",
      description: "End-to-end project support from colour selection and material planning to execution and final inspection.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
      icon: Palette,
      slug: "villa",
      highlights: [
        "Digital color preview & on-wall sampling",
        "Transparent itemized cost estimation",
        "Strict multi-tier QA inspections",
        "Written warranty on material & workmanship"
      ]
    }
  ];

  const PROVISION_SLUGS = ['interior-painting', 'exterior-painting', 'house-painting', 'commercial-painting', 'texture-painting', 'waterproofing'];

  const handleLearnMore = (srv) => {
    // If service has a direct provision slug, navigate to its detail page
    if (srv.provisionSlug && PROVISION_SLUGS.includes(srv.provisionSlug)) {
      if (onSelectProvision) onSelectProvision(srv.provisionSlug);
      if (onNavigatePage) onNavigatePage('provision');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onSelectService) {
      onSelectService(srv.id);
    } else if (onNavigatePage) {
      onNavigatePage('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveModalService(srv);
    }
  };

  const handleBookService = (srv) => {
    setActiveModalService(null);
    if (onSelectProvision && srv.slug) {
      onSelectProvision(srv.slug);
    }
    const elem = document.getElementById('get-started');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section" style={{ background: '#fafbfc', padding: '6.5rem 0 7rem 0', position: 'relative', overflow: 'hidden' }}>
      
      {/* Top-Left Decorative Branding Pillar (COLOUR, QUALITY, DURABILITY, BEAUTY) */}
      <div className="branding-pillar" style={{
        position: 'absolute',
        top: '2.5rem',
        left: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        zIndex: 1
      }}>
        <div style={{ width: '2px', height: '64px', background: '#b87816' }} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '0.72rem',
          fontWeight: '800',
          letterSpacing: '2px',
          color: '#828a96',
          lineHeight: '1.45',
          textTransform: 'uppercase'
        }}>
          <span>COLOUR</span>
          <span>QUALITY</span>
          <span>DURABILITY</span>
          <span>BEAUTY</span>
        </div>
      </div>

      {/* Top-Right Paint Roller Decorative Backdrop Element */}
      <div style={{
        position: 'absolute',
        top: '-15px',
        right: '10px',
        opacity: 0.12,
        pointerEvents: 'none',
        zIndex: 0,
        transform: 'rotate(-12deg)'
      }}>
        <svg width="220" height="220" viewBox="0 0 100 100" fill="none" stroke="#b87816" strokeWidth="2">
          <rect x="25" y="10" width="55" height="18" rx="4" fill="#b87816" opacity="0.3" />
          <path d="M52 28 V55 H45 V75" stroke="#b87816" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 20 Q 30 15, 60 25 T 95 18" stroke="#b87816" strokeWidth="6" strokeLinecap="round" opacity="0.2" />
        </svg>
      </div>

      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 3.5rem auto' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.8rem',
            color: '#b87816',
            fontWeight: '700',
            fontSize: '0.86rem',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            marginBottom: '0.65rem'
          }}>
            <span style={{ width: '32px', height: '2px', background: '#b87816' }} />
            OUR SERVICES
            <span style={{ width: '32px', height: '2px', background: '#b87816' }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(2.1rem, 3.8vw, 2.85rem)',
            fontWeight: '800',
            color: '#111827',
            lineHeight: 1.25,
            marginBottom: '1rem',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            Professional Painting & Finishing <span style={{ color: '#b87816' }}>Solutions</span>
          </h2>

          <p style={{
            fontSize: '1.02rem',
            color: '#525a66',
            lineHeight: '1.75',
            margin: '0 auto'
          }}>
            At Shanmugam Associates, we deliver high-quality painting and finishing services that enhance the beauty, protect the surfaces and add long-lasting value to your property.
          </p>

          <div style={{
            width: '45px',
            height: '3px',
            background: '#b87816',
            margin: '1.5rem auto 0 auto',
            borderRadius: '2px'
          }} />

        </div>

        {/* 8 Services Grid (4 Columns x 2 Rows) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.75rem'
        }} className="services-grid-container">
          
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div
                key={srv.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #eef0f3',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.04)',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.35s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#b87816';
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(184, 120, 22, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#eef0f3';
                  e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.04)';
                }}
              >
                {/* Top Image */}
                <div style={{
                  position: 'relative',
                  height: '180px',
                  overflow: 'hidden',
                  background: '#f1f5f9'
                }}>
                  <img
                    src={srv.image}
                    alt={srv.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.6s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                </div>

                {/* Bottom Content */}
                <div style={{
                  padding: '1.5rem 1.4rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                  justifyContent: 'space-between'
                }}>
                  
                  <div>
                    {/* Icon and Title Row */}
                    <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', marginBottom: '0.85rem' }}>
                      <div style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '8px',
                        background: '#fdf6ec',
                        border: '1px solid #f6deb8',
                        color: '#b87816',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <IconComp size={20} />
                      </div>

                      <h3 style={{
                        fontSize: '1.12rem',
                        fontWeight: '700',
                        color: '#111827',
                        lineHeight: '1.35',
                        margin: 0
                      }}>
                        {srv.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p style={{
                      fontSize: '0.88rem',
                      lineHeight: '1.6',
                      color: '#55606e',
                      marginBottom: '1.5rem',
                      minHeight: '44px'
                    }}>
                      {srv.description}
                    </p>
                  </div>

                  {/* Learn More Action Button */}
                  <div style={{ paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
                    <button
                      onClick={() => handleLearnMore(srv)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#1f2937',
                        fontWeight: '700',
                        fontSize: '0.88rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.6rem',
                        cursor: 'pointer',
                        padding: 0,
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#b87816';
                        const dot = e.currentTarget.querySelector('.circle-arrow-badge');
                        if (dot) dot.style.transform = 'translateX(3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#1f2937';
                        const dot = e.currentTarget.querySelector('.circle-arrow-badge');
                        if (dot) dot.style.transform = 'translateX(0)';
                      }}
                    >
                      <span>Learn More</span>
                      <span 
                        className="circle-arrow-badge"
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '50%',
                          background: '#b87816',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.2s ease'
                        }}
                      >
                        <ArrowRight size={13} />
                      </span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA to Full Services Page */}
        <div style={{
          marginTop: '3.75rem',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.85rem'
        }}>
          <button
            onClick={() => {
              if (onNavigatePage) {
                onNavigatePage('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            style={{
              background: '#111827',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '1.05rem 2.6rem',
              fontSize: '0.98rem',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(17,24,39,0.18)',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#b87816';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(184,120,22,0.35)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#111827';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(17,24,39,0.18)';
            }}
          >
            <span>Explore All 8 Services & Technical Specifications</span>
            <ArrowRight size={18} />
          </button>
          <p style={{ fontSize: '0.88rem', color: '#64748b' }}>
            Detailed scope of work, material grades, application steps, and transparent estimates.
          </p>
        </div>

      </div>

      {/* Modal for Service Deep Dive */}
      {activeModalService && (
        <div 
          onClick={() => setActiveModalService(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(5px)',
            zIndex: 2500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '12px',
              maxWidth: '650px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.25)',
              position: 'relative',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            {/* Modal Header Image */}
            <div style={{ position: 'relative', height: '220px' }}>
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveModalService(null)}
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#b87816', fontWeight: '700', fontSize: '0.82rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                SHANMUGAM ASSOCIATES EXPERTISE
              </div>
              <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#111827', marginBottom: '0.75rem' }}>
                {activeModalService.title}
              </h3>
              <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '0.96rem', marginBottom: '1.5rem' }}>
                {activeModalService.description}
              </p>

              <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#111827', marginBottom: '0.85rem' }}>
                Key Service Features & Specifications:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
                {activeModalService.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: '#374151', fontSize: '0.92rem' }}>
                    <CheckCircle2 size={16} color="#b87816" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setActiveModalService(null)}
                  style={{
                    background: '#f3f4f6',
                    color: '#374151',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.75rem 1.5rem',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
                <button
                  onClick={() => handleBookService(activeModalService)}
                  style={{
                    background: '#b87816',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '0.75rem 1.75rem',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    letterSpacing: '0.5px',
                    cursor: 'pointer'
                  }}
                >
                  Request Quote For This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Breakpoints */}
      <style>{`
        @media (max-width: 1200px) {
          .services-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 1024px) {
          .branding-pillar {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          #services {
            padding: 3.5rem 0 4rem 0 !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid-container {
            grid-template-columns: 1fr !important;
          }
          .service-modal-content {
            padding: 1.5rem 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
