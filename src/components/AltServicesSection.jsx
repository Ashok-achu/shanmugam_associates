import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import { ALT_SERVICES_DATA } from '../data/siteData';

const iconMap = {
  Award: Award,
  ShieldCheck: ShieldCheck,
  Sparkles: Sparkles
};

export default function AltServicesSection() {
  return (
    <section id="alt-services" className="section" style={{ background: '#ffffff', padding: '6rem 0' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Image Background */}
          <div style={{
            position: 'relative',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            minHeight: '480px'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${ALT_SERVICES_DATA.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transition: 'transform 0.5s ease'
            }} />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
              color: '#ffffff'
            }}>
              <div style={{
                background: 'var(--primary)',
                color: '#fff',
                display: 'inline-block',
                padding: '0.4rem 1rem',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '1px',
                marginBottom: '0.5rem'
              }}>
                CRAFTING EXCELLENCE
              </div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: '700', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                Building Landmarks That Last Generations
              </h4>
            </div>
          </div>

          {/* Right Column: About text and 3 Icon Boxes */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            <h3 style={{
              fontSize: '2.25rem',
              fontWeight: '800',
              color: '#2a2c38',
              marginBottom: '1rem',
              position: 'relative',
              paddingBottom: '0.6rem'
            }}>
              {ALT_SERVICES_DATA.title}
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '50px',
                height: '3px',
                background: 'var(--primary)'
              }} />
            </h3>

            <p style={{
              fontSize: '1.05rem',
              lineHeight: '1.8',
              color: '#555a64',
              marginBottom: '2.5rem'
            }}>
              {ALT_SERVICES_DATA.description}
            </p>

            {/* 3 Icon Boxes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {ALT_SERVICES_DATA.features.map((feat) => {
                const IconComp = iconMap[feat.icon] || Award;
                return (
                  <div 
                    key={feat.id}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      alignItems: 'flex-start',
                      padding: '1.25rem',
                      borderRadius: '8px',
                      background: '#f8fafc',
                      border: '1px solid #eef0f3',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.transform = 'translateX(6px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#eef0f3';
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      background: 'var(--primary-light)',
                      border: '1px solid var(--border-highlight)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: 'var(--primary)'
                    }}>
                      <IconComp size={24} />
                    </div>

                    <div>
                      <h4 style={{
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        color: '#2a2c38',
                        marginBottom: '0.4rem'
                      }}>
                        {feat.title}
                      </h4>
                      <p style={{
                        fontSize: '0.92rem',
                        lineHeight: '1.65',
                        color: '#64748b',
                        margin: 0
                      }}>
                        {feat.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
