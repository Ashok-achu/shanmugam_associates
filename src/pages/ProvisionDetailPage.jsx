import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Paintbrush, 
  ShieldCheck, 
  Clock, 
  Award,
  Sparkles,
  ChevronDown,
  Layers,
  Home,
  Building2,
  Check
} from 'lucide-react';
import { SERVICE_DETAILS_DATA } from '../data/serviceDetailsData';
import { SPECIALIZED_PROVISIONS, COMPANY_INFO, PAINT_BRANDS } from '../data/siteData';

export default function ProvisionDetailPage({ slug, onNavigatePage, onSelectProvision }) {
  const currentSlug = slug || 'interior-painting';
  const item = SERVICE_DETAILS_DATA[currentSlug] || SERVICE_DETAILS_DATA['interior-painting'];
  const [openSectionIdx, setOpenSectionIdx] = useState(0);

  const handleSwitchService = (newSlug) => {
    if (onSelectProvision) {
      onSelectProvision(newSlug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ══════════════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        background: `linear-gradient(135deg, rgba(9, 14, 23, 0.94) 0%, rgba(17, 24, 39, 0.90) 100%), url("${item.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '5.5rem 1.5rem 4.5rem',
        position: 'relative',
        color: '#ffffff',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '450px', height: '450px', borderRadius: '50%',
          border: '2px solid rgba(184,120,22,0.18)', pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Breadcrumb / Back */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.84rem', color: '#94a3b8' }}>
            <span 
              onClick={() => onNavigatePage('home')}
              style={{ cursor: 'pointer', color: '#cbd5e1' }}
              onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
              onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
            >
              Home
            </span>
            <span>/</span>
            <span style={{ color: '#f59e0b', fontWeight: '600' }}>{item.heading}</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(184, 120, 22, 0.2)',
            border: '1px solid rgba(184, 120, 22, 0.4)',
            borderRadius: '9999px',
            padding: '0.4rem 1.15rem',
            color: '#f59e0b',
            fontSize: '0.82rem',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: '1rem'
          }}>
            <Sparkles size={14} />
            {item.subheading}
          </div>

          <h1 style={{
            fontSize: 'clamp(2.3rem, 4.8vw, 3.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            maxWidth: '900px'
          }}>
            {item.heading}
          </h1>

          <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {item.introParagraphs.map((para, i) => (
              <p key={i} style={{
                fontSize: '1.08rem',
                color: '#e2e8f0',
                lineHeight: 1.75,
                margin: 0
              }}>
                {para}
              </p>
            ))}
          </div>

          {/* Quick Contact Badge in Hero */}
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href={`tel:${COMPANY_INFO.phonePrimary}`}
              style={{
                background: '#b87816',
                color: '#ffffff',
                padding: '0.9rem 2rem',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: '0.96rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(184,120,22,0.4)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#9e640e'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#b87816'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <Phone size={18} />
              {item.ctaText}
            </a>

            <button
              onClick={() => onNavigatePage('contact')}
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.25)',
                padding: '0.9rem 1.75rem',
                borderRadius: '9999px',
                fontWeight: '700',
                fontSize: '0.96rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <span>Book Free Site Inspection</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECONDARY PILL NAV FOR ALL 6 SERVICES
      ══════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        padding: '1rem 1.5rem',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          gap: '0.6rem',
          overflowX: 'auto',
          paddingBottom: '0.2rem'
        }}>
          {SPECIALIZED_PROVISIONS.map((prov) => {
            const isActive = prov.slug === currentSlug;
            return (
              <button
                key={prov.slug}
                onClick={() => handleSwitchService(prov.slug)}
                style={{
                  background: isActive ? '#b87816' : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  border: isActive ? '1px solid #b87816' : '1px solid #e2e8f0',
                  borderRadius: '9999px',
                  padding: '0.45rem 1.15rem',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? '700' : '600',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(184,120,22,0.25)' : 'none'
                }}
              >
                {prov.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MAIN CONTENT LAYOUT: DEDICATED SECTIONS
      ══════════════════════════════════════════════════════════ */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4.5rem 1.5rem 5.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Scope, What You Get, Process, Deep Dives */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            
            {/* 1. Areas / Rooms / Buildings / Designs We Paint */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                color: '#b87816',
                fontWeight: '700',
                fontSize: '0.82rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                Scope of Work
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#111827', marginBottom: '1.5rem' }}>
                {currentSlug === 'interior-painting' && "Rooms We Paint"}
                {currentSlug === 'exterior-painting' && "Buildings We Paint"}
                {currentSlug === 'house-painting' && "Complete Home Painting Solutions"}
                {currentSlug === 'commercial-painting' && "Properties We Paint"}
                {currentSlug === 'texture-painting' && "Texture Designs We Offer"}
                {currentSlug === 'waterproofing' && "Areas We Waterproof"}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
                {item.roomsWePaint.map((room, idx) => (
                  <div key={idx} style={{
                    background: '#f8fafc',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '12px',
                    borderLeft: '4px solid #b87816'
                  }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#111827', margin: '0 0 0.35rem 0' }}>
                      {room.name}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6 }}>
                      {room.desc}
                    </p>
                  </div>
                ))}
              </div>

              {item.craftsmanshipNote && (
                <div style={{
                  marginTop: '1.75rem',
                  padding: '1.25rem 1.5rem',
                  background: 'rgba(184,120,22,0.06)',
                  borderRadius: '12px',
                  border: '1px dashed #b87816',
                  color: '#475569',
                  fontSize: '0.95rem',
                  lineHeight: 1.7
                }}>
                  {item.craftsmanshipNote}
                </div>
              )}
            </div>

            {/* 2. What You Get / Why Exterior Matters / Signs You Need Waterproofing */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                color: '#b87816',
                fontWeight: '700',
                fontSize: '0.82rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                Long-Term Benefits
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#111827', marginBottom: '1.25rem' }}>
                {currentSlug === 'interior-painting' && "What You Get With Interior Painting"}
                {currentSlug === 'exterior-painting' && "Why Exterior Painting Matters"}
                {currentSlug === 'house-painting' && "Why Homeowners in Coimbatore Trust Us"}
                {currentSlug === 'commercial-painting' && "What Commercial Painting Does for Your Business"}
                {currentSlug === 'texture-painting' && "Why People Choose Texture Painting"}
                {currentSlug === 'waterproofing' && "Signs Your Building Needs Waterproofing"}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {item.whatYouGet.map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{
                      width: '22px', height: '22px', borderRadius: '50%',
                      background: 'rgba(184,120,22,0.15)', color: '#b87816',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0, marginTop: '2px'
                    }}>
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.65 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {item.whatYouGetNote && (
                <p style={{ marginTop: '1.5rem', color: '#64748b', fontSize: '0.94rem', lineHeight: 1.75, fontStyle: 'italic' }}>
                  {item.whatYouGetNote}
                </p>
              )}
            </div>

            {/* 3. How We Work / Process */}
            <div style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
            }}>
              <div style={{
                color: '#b87816',
                fontWeight: '700',
                fontSize: '0.82rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                Systematic Execution
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#111827', marginBottom: '1.5rem' }}>
                {currentSlug === 'waterproofing' ? "Our Waterproofing Process" : "How We Work"}
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.25rem' }}>
                {item.process.map((step) => (
                  <div key={step.step} style={{
                    background: '#f8fafc',
                    borderRadius: '14px',
                    padding: '1.5rem',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <span style={{
                      fontSize: '1.4rem',
                      fontWeight: '800',
                      color: '#b87816',
                      lineHeight: 1,
                      marginBottom: '0.65rem'
                    }}>
                      {step.step}
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#111827', marginBottom: '0.45rem' }}>
                      {step.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              {item.processNote && (
                <div style={{
                  marginTop: '1.75rem',
                  padding: '1.25rem 1.5rem',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  color: '#475569',
                  fontSize: '0.94rem',
                  lineHeight: 1.75
                }}>
                  {item.processNote}
                </div>
              )}
            </div>

            {/* 4. Comprehensive Deep-Dive Chapters (Verbatim Content Plan) */}
            {item.sections && item.sections.length > 0 && (
              <div style={{
                background: '#ffffff',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                padding: '2.5rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
              }}>
                <div style={{
                  color: '#b87816',
                  fontWeight: '700',
                  fontSize: '0.82rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem'
                }}>
                  Expert Insights & Best Practices
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#111827', marginBottom: '1.75rem' }}>
                  Detailed Guidance for Coimbatore Property Owners
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  {item.sections.map((sec, sIdx) => (
                    <div key={sIdx} style={{
                      borderBottom: sIdx === item.sections.length - 1 ? 'none' : '1px solid #f1f5f9',
                      paddingBottom: sIdx === item.sections.length - 1 ? 0 : '2rem'
                    }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '800',
                        color: '#111827',
                        marginBottom: '0.85rem'
                      }}>
                        {sec.title}
                      </h3>
                      {sec.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} style={{
                          color: '#475569',
                          fontSize: '0.98rem',
                          lineHeight: 1.8,
                          marginBottom: pIdx === sec.paragraphs.length - 1 ? 0 : '0.85rem'
                        }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right Column: Sticky Consultation Box & Quick Info */}
          <div style={{
            position: 'sticky',
            top: '140px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem'
          }}>
            
            {/* Box 1: Quick Action Card */}
            <div style={{
              background: 'linear-gradient(135deg, #090e17 0%, #1e293b 100%)',
              color: '#ffffff',
              borderRadius: '20px',
              padding: '2.25rem 2rem',
              boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
            }}>
              <div style={{
                color: '#f59e0b',
                fontWeight: '700',
                fontSize: '0.78rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                marginBottom: '0.5rem'
              }}>
                Direct Service Line
              </div>

              <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                Get an Honest, Free Quotation
              </h3>

              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {item.ctaText}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary}`}
                  style={{
                    background: '#b87816',
                    color: '#ffffff',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '10px',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(184,120,22,0.3)',
                    transition: 'all 0.2s'
                  }}
                >
                  <Phone size={17} />
                  <span>Call {COMPANY_INFO.phonePrimary}</span>
                </a>

                <button
                  onClick={() => onNavigatePage('contact')}
                  style={{
                    background: '#ffffff',
                    color: '#111827',
                    border: 'none',
                    padding: '0.85rem 1.25rem',
                    borderRadius: '10px',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    marginTop: '0.25rem'
                  }}
                >
                  <span>Request Site Inspection</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '0.82rem', color: '#94a3b8' }}>
                Email: <span style={{ color: '#ffffff' }}>{COMPANY_INFO.email}</span>
              </div>
            </div>

            {/* Box 2: Paint Brands We Trust */}
            <div style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
            }}>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '800', color: '#111827', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.85rem' }}>
                Trusted Paint Brands Used
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                {PAINT_BRANDS.map((b) => (
                  <span key={b} style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.8rem',
                    color: '#475569',
                    fontWeight: '600'
                  }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 3: Regions Covered */}
            <div style={{
              background: '#ffffff',
              borderRadius: '18px',
              border: '1px solid #e2e8f0',
              padding: '1.75rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
            }}>
              <h4 style={{ fontSize: '0.92rem', fontWeight: '800', color: '#111827', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.85rem' }}>
                Areas We Serve
              </h4>
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b', lineHeight: 1.7 }}>
                Coimbatore, Tiruppur, Pollachi, Erode, Salem, Mettupalayam, Chennai, and The Nilgiris.
              </p>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
