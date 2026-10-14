import React from 'react';
import { MOTTO_DATA } from '../data/siteData';

export default function MottoSection() {
  return (
    <section id="constructions" className="section" style={{ background: '#ffffff', padding: '6rem 0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#2a2c38',
            marginBottom: '1rem',
            position: 'relative',
            display: 'inline-block',
            paddingBottom: '10px'
          }}>
            {MOTTO_DATA.title}
            <span style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: 'var(--primary)'
            }} />
          </h2>
          <p style={{
            fontSize: '1.05rem',
            color: '#6c757d',
            lineHeight: '1.8',
            marginTop: '0.75rem'
          }}>
            {MOTTO_DATA.description}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(460px, 1fr))',
          gap: '2rem'
        }}>
          {MOTTO_DATA.cards.map((card) => (
            <div
              key={card.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.3fr',
                background: '#ffffff',
                border: '1px solid #eef0f3',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease',
                minHeight: '220px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'var(--primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.05)';
                e.currentTarget.style.borderColor = '#eef0f3';
              }}
            >
              {/* Card Image */}
              <div style={{
                position: 'relative',
                backgroundImage: `url(${card.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '180px'
              }} />

              {/* Card Content */}
              <div style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <h4 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#2a2c38',
                  marginBottom: '0.75rem'
                }}>
                  {card.title}
                </h4>
                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: '1.7',
                  color: '#64748b',
                  margin: 0
                }}>
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          #constructions .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #constructions div[style*="gridTemplateColumns: 1fr 1.3fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
