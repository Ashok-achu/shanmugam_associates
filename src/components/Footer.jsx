import React from 'react';
import { Phone, Mail, MapPin, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, SPECIALIZED_PROVISIONS, AREAS_SERVED } from '../data/siteData';

export default function Footer({ onNavigatePage, onSelectProvision }) {
  const handleNav = (page, slug = null) => {
    if (slug && onSelectProvision) {
      onSelectProvision(slug);
    }
    if (onNavigatePage) {
      onNavigatePage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" style={{
      background: '#090e17',
      color: '#94a3b8',
      padding: '5rem 0 0 0',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif"
    }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
          gap: '3rem',
          paddingBottom: '3.5rem'
        }}>
          
          {/* Column 1: Company Profile & Contacts */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#f59e0b',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              <Sparkles size={13} />
              Since 1977 • Coimbatore
            </div>

            <h3 style={{
              fontSize: '1.45rem',
              fontWeight: '800',
              color: '#ffffff',
              letterSpacing: '0.5px',
              marginBottom: '0.75rem'
            }}>
              SHANMUGAM ASSOCIATES
            </h3>

            <p style={{
              fontSize: '0.88rem',
              color: '#f59e0b',
              fontWeight: '600',
              fontStyle: 'italic',
              marginBottom: '1rem'
            }}>
              {COMPANY_INFO.tagline}
            </p>

            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.7',
              color: '#cbd5e1',
              marginBottom: '1.25rem'
            }}>
              {COMPANY_INFO.address}
            </p>

            <div style={{ fontSize: '0.9rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1.5rem' }}>
              <div>
                <strong style={{ color: '#ffffff' }}>Phone: </strong>
                <a href={`tel:${COMPANY_INFO.phonePrimary}`} style={{ color: '#f59e0b', textDecoration: 'none' }}>
                  {COMPANY_INFO.phonePrimary}
                </a>
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Email: </strong>
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#f59e0b', textDecoration: 'none' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Web: </strong>
                <span style={{ color: '#cbd5e1' }}>{COMPANY_INFO.website}</span>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href={COMPANY_INFO.social.facebook} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: '#ffffff',
                  textDecoration: 'none', transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#b87816'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.57 11.76 5 14.42 5c1.27 0 2.6.23 2.6.23v2.86h-1.46c-1.45 0-1.9.9-1.9 1.83V12h3.22l-.51 3h-2.71v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>

              <a 
                href={COMPANY_INFO.social.instagram} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px', height: '38px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', color: '#ffffff',
                  textDecoration: 'none', transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#b87816'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Pages & Navigation */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1.25rem',
              letterSpacing: '0.5px'
            }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: '01. Homepage', page: 'home' },
                { label: '02. About Us', page: 'about' },
                { label: '09. Contact & Free Inspection', page: 'contact' },
                { label: '10. Frequently Asked Questions', page: 'faq' },
                { label: '11. Blog & Property Insights', page: 'blog' },
                { label: 'Completed Projects', page: 'projects' }
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleNav(item.page)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#cbd5e1',
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                      padding: 0,
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
                    onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Painting & Waterproofing */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1.25rem',
              letterSpacing: '0.5px'
            }}>
              Specialized Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SPECIALIZED_PROVISIONS.map((item) => (
                <li key={item.slug}>
                  <button
                    onClick={() => handleNav('provision', item.slug)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#cbd5e1',
                      fontSize: '0.92rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                      padding: 0,
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#f59e0b'}
                    onMouseLeave={(e) => e.target.style.color = '#cbd5e1'}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Regions & Free Inspection CTA */}
          <div>
            <h4 style={{
              fontSize: '1.1rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1.25rem',
              letterSpacing: '0.5px'
            }}>
              Free Site Inspection
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Planning to paint or build something? Send us your site details and we'll visit, inspect, and give you an honest quotation - no pressure, no obligation.
            </p>

            <button
              onClick={() => handleNav('contact')}
              style={{
                background: '#b87816',
                color: '#ffffff',
                border: 'none',
                padding: '0.75rem 1.4rem',
                borderRadius: '8px',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#9e640e'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#b87816'}
            >
              <span>Book Site Visit</span>
              <ArrowRight size={15} />
            </button>

            <div style={{ marginTop: '1.5rem', fontSize: '0.82rem', color: '#64748b' }}>
              Serving Coimbatore, Tiruppur, Pollachi, Erode, Salem, Mettupalayam, Chennai & Nilgiris.
            </div>
          </div>

        </div>

        {/* Footer Legal & Copyright Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '2rem 0',
          textAlign: 'center',
          fontSize: '0.86rem',
          color: '#64748b'
        }}>
          <div style={{ marginBottom: '0.35rem' }}>
            © {new Date().getFullYear()} <strong style={{ color: '#ffffff' }}>SHANMUGAM ASSOCIATES</strong>. All Rights Reserved.
          </div>
          <div>
            Coimbatore's Trusted Painting & Construction Company Since 1977 &nbsp;|&nbsp; 
            <a href={`tel:${COMPANY_INFO.phonePrimary}`} style={{ color: '#f59e0b', textDecoration: 'none', marginLeft: '0.35rem' }}>
              {COMPANY_INFO.phonePrimary}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
