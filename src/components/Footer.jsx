import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, SPECIALIZED_PROVISIONS } from '../data/siteData';

export default function Footer({ onNavigatePage, onSelectProvision }) {
  return (
    <footer id="footer" style={{
      background: '#2a2c38',
      color: '#b5b5ba',
      padding: '4.5rem 0 0 0',
      borderTop: '1px solid #3f4254'
    }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Main Footer Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '3rem',
          paddingBottom: '3.5rem'
        }}>
          
          {/* Column 1: Company Info & Social Links */}
          <div>
            <h3 style={{
              fontSize: '1.4rem',
              fontWeight: '800',
              color: '#ffffff',
              letterSpacing: '0.5px',
              marginBottom: '1.25rem'
            }}>
              SHANMUGAM ASSOCIATES
            </h3>

            <p style={{
              fontSize: '0.92rem',
              lineHeight: '1.8',
              color: '#cbd5e1',
              marginBottom: '1.25rem'
            }}>
              No.5, Ground Floor, First Portion,<br />
              Mariamman Kovil Street, Bommanapalayam,<br />
              Vadavalli, Coimbatore – 641041, Tamil Nadu
            </p>

            <div style={{ fontSize: '0.92rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '1.5rem' }}>
              <div>
                <strong style={{ color: '#ffffff' }}>Phone: </strong>
                <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#ff7a00', textDecoration: 'none' }}>
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div>
                <strong style={{ color: '#ffffff' }}>Email: </strong>
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#ff7a00', textDecoration: 'none' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {/* Facebook */}
              <a 
                href={COMPANY_INFO.social.facebook} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ff7a00';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7v-3h3V9.5C10 6.57 11.76 5 14.42 5c1.27 0 2.6.23 2.6.23v2.86h-1.46c-1.45 0-1.9.9-1.9 1.83V12h3.22l-.51 3h-2.71v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a 
                href={COMPANY_INFO.social.instagram} 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ff7a00';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a 
                href={COMPANY_INFO.social.twitter} 
                aria-label="Twitter"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ff7a00';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a 
                href={COMPANY_INFO.social.linkedin} 
                aria-label="LinkedIn"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#ff7a00';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8V10.9M7.86 6.57a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1.25rem'
            }}>
              Useful Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <button
                  onClick={() => { onNavigatePage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'transparent', border: 'none', color: '#b5b5ba', fontSize: '0.92rem', cursor: 'pointer', transition: 'color 0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.target.style.color = '#b87816'}
                  onMouseLeave={(e) => e.target.style.color = '#b5b5ba'}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigatePage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'transparent', border: 'none', color: '#b5b5ba', fontSize: '0.92rem', cursor: 'pointer', transition: 'color 0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.target.style.color = '#b87816'}
                  onMouseLeave={(e) => e.target.style.color = '#b5b5ba'}
                >
                  About us
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigatePage('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'transparent', border: 'none', color: '#b5b5ba', fontSize: '0.92rem', cursor: 'pointer', transition: 'color 0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.target.style.color = '#b87816'}
                  onMouseLeave={(e) => e.target.style.color = '#b5b5ba'}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigatePage('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'transparent', border: 'none', color: '#b5b5ba', fontSize: '0.92rem', cursor: 'pointer', transition: 'color 0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.target.style.color = '#b87816'}
                  onMouseLeave={(e) => e.target.style.color = '#b5b5ba'}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigatePage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{ background: 'transparent', border: 'none', color: '#b5b5ba', fontSize: '0.92rem', cursor: 'pointer', transition: 'color 0.2s', padding: 0 }}
                  onMouseEnter={(e) => e.target.style.color = '#b87816'}
                  onMouseLeave={(e) => e.target.style.color = '#b5b5ba'}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 style={{
              fontSize: '1.15rem',
              fontWeight: '700',
              color: '#ffffff',
              marginBottom: '1.25rem'
            }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SPECIALIZED_PROVISIONS.map((item) => (
                <li key={item.slug}>
                  <button
                    onClick={() => {
                      onSelectProvision(item.slug);
                      onNavigatePage('provision');
                    }}
                    style={{ background: 'transparent', border: 'none', color: '#b5b5ba', fontSize: '0.92rem', cursor: 'pointer', transition: 'color 0.2s', padding: 0 }}
                    onMouseEnter={(e) => e.target.style.color = '#ff7a00'}
                    onMouseLeave={(e) => e.target.style.color = '#b5b5ba'}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer Legal & Copyright Bar */}
        <div style={{
          borderTop: '1px solid #3f4254',
          padding: '2rem 0',
          textAlign: 'center',
          fontSize: '0.88rem',
          color: '#8b8e99'
        }}>
          <div style={{ marginBottom: '0.4rem' }}>
            © {new Date().getFullYear()} <strong style={{ color: '#ffffff' }}>SHANMUGAM ASSOCIATES</strong>. All Rights Reserved.
          </div>
          <div style={{ marginTop: '0.25rem' }}>
            Painting &amp; Civil Contractors in Coimbatore Since 1977 &nbsp;|&nbsp; {COMPANY_INFO.phone}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          #footer {
            padding: 3rem 0 0 0 !important;
          }
          #footer .container > div:first-child {
            gap: 2rem !important;
            padding-bottom: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
