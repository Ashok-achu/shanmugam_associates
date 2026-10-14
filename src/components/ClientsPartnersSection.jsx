import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Leaf, HardHat, Award, GraduationCap, HeartPulse, Building2, Factory, Home } from 'lucide-react';

export default function ClientsPartnersSection() {

  // 7 Client sectors
  const clientCategories = [
    { id: 1, name: "KCP Infra", fullName: "KCP Infra Limited", category: "Infrastructure & Smart City", icon: Building2, color: "#0284c7" },
    { id: 2, name: "Sree Daksha", fullName: "Sree Daksha Property Developers", category: "Property Developers", icon: Building2, color: "#059669" },
    { id: 3, name: "Arima Enclaves", fullName: "Arima Construction & Developers", category: "Residential & Commercial", icon: Home, color: "#2563eb" },
    { id: 4, name: "Nilan Infra", fullName: "Nilan Infrastructure & Builders", category: "Real Estate / Infrastructure", icon: Building2, color: "#b87816" },
    { id: 5, name: "Skyraa Infra", fullName: "Skyraa Infra & Developments", category: "Real Estate / Development", icon: Building2, color: "#0284c7" },
    { id: 6, name: "Andavar Traders", fullName: "Andavar Traders & Enterprises", category: "Manufacturing / Trading", icon: Factory, color: "#16a34a" },
    { id: 7, name: "Private Clients", fullName: "Private Residential Clients", category: "Residential Projects", icon: Home, color: "#b87816" }
  ];

  // Duplicate for seamless infinite loop
  const marqueeItems = [...clientCategories, ...clientCategories, ...clientCategories];

  // 4 Affiliations
  const certifications = [
    { id: 1, title: "Quality Workmanship", icon: ShieldCheck },
    { id: 2, title: "Eco-Friendly Paint Solutions", icon: Leaf },
    { id: 3, title: "Safety Standards", icon: HardHat },
    { id: 4, title: "Trusted Professionals", icon: Award }
  ];

  // Paint Brand Partners with locally hosted logos (in /public folder)
  const paintPartners = [
    {
      id: 1,
      brand: "Asian Paints",
      tagline: "Premium Finishes",
      logoUrl: "/asian-paints.png",
      accent: "#e11d48"
    },
    {
      id: 2,
      brand: "Berger Paints",
      tagline: "Paint Your Imagination",
      logoUrl: "/berger-paints.png",
      accent: "#1e3a8a"
    },
    {
      id: 3,
      brand: "Nippon Paint",
      tagline: "Inspired By You",
      logoUrl: "/nippon-paint.png",
      accent: "#dc2626"
    },
    {
      id: 4,
      brand: "Dulux",
      tagline: "Colour Futures",
      logoUrl: "/dulux.png",
      accent: "#2563eb"
    }
  ];

  return (
    <section id="clients-partners" className="section" style={{ background: '#fafbfc', padding: '6.5rem 0 7rem 0', position: 'relative', overflow: 'hidden' }}>

      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem', position: 'relative', zIndex: 2 }}>

        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3.5rem auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.8rem',
            color: '#b87816', fontWeight: '700', fontSize: '0.86rem',
            letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '0.65rem'
          }}>
            <span style={{ width: '32px', height: '2px', background: '#b87816' }} />
            OUR CLIENTS & PARTNERS
            <span style={{ width: '32px', height: '2px', background: '#b87816' }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(2.1rem, 3.8vw, 2.85rem)', fontWeight: '800',
            color: '#111827', lineHeight: 1.25, marginBottom: '1rem',
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>
            Trusted by Homes, Businesses <span style={{ color: '#b87816' }}>and Institutions</span>
          </h2>

          <p style={{ fontSize: '1.02rem', color: '#525a66', lineHeight: '1.75', margin: '0 auto' }}>
            We are proud to have worked with a diverse range of clients across residential, commercial and institutional projects, delivering quality painting and finishing solutions.
          </p>
        </div>

        {/* ── AUTO-SCROLLING MARQUEE ───────────────────────────────────────── */}
        <div style={{ position: 'relative', marginBottom: '4rem', overflow: 'hidden' }}>

          {/* Left fade mask */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 3,
            background: 'linear-gradient(to right, #fafbfc 0%, transparent 100%)',
            pointerEvents: 'none'
          }} />
          {/* Right fade mask */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 3,
            background: 'linear-gradient(to left, #fafbfc 0%, transparent 100%)',
            pointerEvents: 'none'
          }} />

          {/* Scrolling Track */}
          <div className="marquee-track" style={{
            display: 'flex',
            gap: '1.5rem',
            width: 'max-content',
            animation: 'marquee-scroll 30s linear infinite'
          }}>
            {marqueeItems.map((client, idx) => {
              const IconComponent = client.icon;
              return (
                <div
                  key={`${client.id}-${idx}`}
                  style={{
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '160px'
                  }}
                >
                  {/* Card */}
                  <div style={{
                    background: '#ffffff',
                    border: '1px solid #eef0f3',
                    borderRadius: '14px',
                    padding: '1.5rem 1rem',
                    width: '100%',
                    height: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.65rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.04)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.borderColor = '#b87816';
                      e.currentTarget.style.boxShadow = '0 12px 25px rgba(184, 120, 22, 0.13)';
                      // Pause animation on hover
                      e.currentTarget.closest('.marquee-track').style.animationPlayState = 'paused';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#eef0f3';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.04)';
                      e.currentTarget.closest('.marquee-track').style.animationPlayState = 'running';
                    }}
                  >
                    {/* Icon Badge */}
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      background: '#fdf6ec', border: '1px solid #f6dfbe',
                      color: '#b87816', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', flexShrink: 0
                    }}>
                      <IconComponent size={20} />
                    </div>

                    <span style={{
                      fontSize: '0.82rem', fontWeight: '700', color: '#1f2937',
                      lineHeight: 1.25, display: '-webkit-box',
                      WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                    }}>
                      {client.name}
                    </span>
                  </div>

                  {/* Subtitle below card */}
                  <div style={{
                    fontSize: '0.7rem', fontWeight: '600', color: '#64748b',
                    marginTop: '0.6rem', lineHeight: 1.3
                  }}>
                    {client.category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ── END MARQUEE ─────────────────────────────────────────────────── */}

        {/* Bottom Two-Column Split: Affiliations | Paint Partners */}
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #eef0f3',
          boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
          padding: '3rem 2.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1px 1.2fr',
          gap: '2.5rem',
          alignItems: 'center'
        }} className="bottom-partners-split">

          {/* Left: Affiliations & Certifications */}
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.65rem', color: '#b87816', fontWeight: '700',
              fontSize: '0.82rem', letterSpacing: '2px',
              textTransform: 'uppercase', marginBottom: '2rem'
            }}>
              <span style={{ width: '25px', height: '2px', background: '#b87816' }} />
              OUR AFFILIATIONS & CERTIFICATIONS
              <span style={{ width: '25px', height: '2px', background: '#b87816' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }} className="certifications-grid">
              {certifications.map((cert) => {
                const CertIcon = cert.icon;
                return (
                  <div key={cert.id} style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '54px', height: '54px', borderRadius: '50%',
                      background: '#fdf6ec', border: '1px solid #f6dfbe',
                      color: '#b87816', display: 'flex', alignItems: 'center',
                      justifyContent: 'center', margin: '0 auto 0.75rem auto',
                      transition: 'transform 0.25s ease'
                    }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.12)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <CertIcon size={24} />
                    </div>
                    <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#334155', lineHeight: 1.35, display: 'block' }}>
                      {cert.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Vertical Divider */}
          <div style={{ background: '#e2e8f0', width: '1px', height: '100%', minHeight: '140px' }} className="vertical-split-line" />

          {/* Right: Paint Brand Partners with Real Logos */}
          <div>
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '0.65rem', color: '#b87816', fontWeight: '700',
              fontSize: '0.82rem', letterSpacing: '2px',
              textTransform: 'uppercase', marginBottom: '2rem'
            }}>
              <span style={{ width: '25px', height: '2px', background: '#b87816' }} />
              OUR TRUSTED PAINT PARTNERS
              <span style={{ width: '25px', height: '2px', background: '#b87816' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }} className="paint-partners-grid">
              {paintPartners.map((partner) => (
                <div
                  key={partner.id}
                  style={{
                    background: '#f8fafc', border: '1px solid #e2e8f0',
                    borderRadius: '12px', padding: '1.2rem 0.75rem',
                    textAlign: 'center', display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center',
                    height: '120px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                    transition: 'all 0.28s ease', gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = partner.accent;
                    e.currentTarget.style.background = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 14px 28px rgba(0,0,0,0.12)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)';
                  }}
                >
                  {/* Brand Logo */}
                  <img
                    src={partner.logoUrl}
                    alt={`${partner.brand} logo`}
                    style={{
                      maxWidth: '110px', maxHeight: '48px',
                      objectFit: 'contain', display: 'block', margin: '0 auto',
                      filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.08))'
                    }}
                    onError={(e) => {
                      // Fallback to styled text if logo fails to load
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextSibling.style.display = 'block';
                    }}
                  />
                  {/* Fallback text (hidden by default) */}
                  <span style={{
                    display: 'none', fontSize: '0.92rem', fontWeight: '800',
                    color: '#111827', letterSpacing: '0.3px'
                  }}>
                    {partner.brand}
                  </span>
                  <span style={{ fontSize: '0.68rem', fontWeight: '600', color: '#64748b' }}>
                    {partner.tagline}
                  </span>
                </div>
              ))}
            </div>

            <div style={{
              textAlign: 'center', marginTop: '1rem',
              fontSize: '0.74rem', color: '#94a3b8', fontStyle: 'italic'
            }}>
              Official paint applicator & certified finishing partner
            </div>
          </div>

        </div>
      </div>

      {/* ── CSS Keyframes for Marquee & Responsive ────────────────────────── */}
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .marquee-track:hover {
          animation-play-state: paused !important;
        }

        @media (max-width: 1100px) {
          .bottom-partners-split {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .vertical-split-line {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          #clients-partners {
            padding: 3.5rem 0 4rem 0 !important;
          }
          .bottom-partners-split {
            padding: 1.75rem 1rem !important;
            border-radius: 12px !important;
          }
        }
        @media (max-width: 680px) {
          .certifications-grid, .paint-partners-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}
