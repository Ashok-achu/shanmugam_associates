import React from 'react';
import { Building2, HardHat, Users, Maximize2, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection({ onReadMore }) {
  const stats = [
    {
      id: 1,
      icon: Building2,
      value: "45+",
      label: "YEARS OF EXPERIENCE"
    },
    {
      id: 2,
      icon: HardHat,
      value: "50+",
      label: "PROJECTS COMPLETED"
    },
    {
      id: 3,
      icon: Users,
      value: "300+",
      label: "HAPPY CLIENTS"
    },
    {
      id: 4,
      icon: Maximize2,
      value: "5,00,000+",
      label: "SQUARE FEET CONSTRUCTED"
    }
  ];

  return (
    <section id="about" className="section about-section" style={{ background: '#ffffff', padding: '6.5rem 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        <div className="about-hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '4.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Architectural Photo with Gold Geometric Accents */}
          <div style={{ position: 'relative', padding: '1.5rem 1rem 1rem 1.5rem' }}>
            
            {/* Solid Gold Square Block Behind Top-Left Corner */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '150px',
              height: '150px',
              background: '#b87816',
              borderRadius: '6px',
              zIndex: 1
            }} />

            {/* Gold Geometric Outline at Top-Right */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '-10px',
              width: '180px',
              height: '180px',
              borderTop: '2px solid #b87816',
              borderRight: '2px solid #b87816',
              zIndex: 1,
              pointerEvents: 'none'
            }} />

            {/* Main Luxury Architectural Image */}
            <div style={{
              position: 'relative',
              zIndex: 2,
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 20px 45px rgba(0,0,0,0.12)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1100&auto=format&fit=crop"
                alt="Shanmugam Associates Luxury Construction"
                className="about-main-img"
                style={{
                  width: '100%',
                  height: '480px',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.6s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            {/* Dotted Grid Pattern on Bottom-Left */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-10px',
              zIndex: 3,
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 6px)',
              gridTemplateRows: 'repeat(5, 6px)',
              gap: '10px'
            }}>
              {[...Array(30)].map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: '#cbd5e1',
                    display: 'inline-block'
                  }}
                />
              ))}
            </div>

          </div>

          {/* Right Column: About Content, Stat Cards, & Read More */}
          <div>
            
            {/* Header Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              color: '#b87816',
              fontWeight: '700',
              fontSize: '0.88rem',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              <span style={{ width: '32px', height: '2px', background: '#b87816', display: 'inline-block' }} />
              ABOUT US
            </div>

            {/* Main Heading */}
            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Building Trust Through Quality Construction & Painting for <span style={{ color: '#b87816' }}>Nearly Five Decades</span>
            </h2>

            {/* Description Text - Verbatim from Content Plan */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem', color: '#4b5563', fontSize: '0.98rem', lineHeight: '1.8' }}>
              <p style={{ margin: 0 }}>
                If you are searching for a painting contractor or a construction company in Coimbatore that you can actually trust, you have landed in the right place. <strong>Shanmugam Associates</strong> has been part of this city's growth story since 1977. We are not a company that appeared overnight to chase quick projects. We have been here for almost fifty years, working quietly, building homes, painting walls, and slowly becoming a name that people in Coimbatore recognise and recommend to their friends and family.
              </p>
              <p style={{ margin: 0 }}>
                What began as a small contracting business under the leadership of Mr. Shanmugam has grown, step by step, into one of the most dependable painting and construction names across Tamil Nadu. In our early years, we worked on important government projects, including PWD roads, highways, TWAD water supply works, and several private buildings across Coimbatore and the Nilgiris. That experience shaped the way we still work today - with structure, patience, and respect for the client's money and time.
              </p>
              <p style={{ margin: 0 }}>
                In 2014, the second generation of the family took charge of the company. They chose to focus deeply on two areas where Shanmugam Associates could genuinely deliver the best value - <strong>Construction and Painting Services</strong>. Since then, we have completed projects across Coimbatore, Tiruppur, Salem, Erode, Pollachi, Mettupalayam, Chennai, and many other parts of Tamil Nadu.
              </p>
              <p style={{ margin: 0 }}>
                Today, when someone in Coimbatore says 'call Shanmugam Associates', it usually comes from personal experience or a trusted recommendation. Whatever the size of the project, our approach stays the same - listen carefully, plan properly, execute honestly, and hand over on time.
              </p>
            </div>

            {/* Value Bullet Points */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.65rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#374151', fontSize: '0.94rem', lineHeight: '1.55' }}>
                <CheckCircle2 size={18} color="#b87816" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Deep engineering background in government PWD, highways, and TWAD water projects.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#374151', fontSize: '0.94rem', lineHeight: '1.55' }}>
                <CheckCircle2 size={18} color="#b87816" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Second-generation leadership dedicated to modern construction & premium painting systems.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: '#374151', fontSize: '0.94rem', lineHeight: '1.55' }}>
                <CheckCircle2 size={18} color="#b87816" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Serving Coimbatore, Tiruppur, Salem, Erode, Pollachi, Mettupalayam, Chennai & Nilgiris.</span>
              </div>
            </div>

            {/* 4 Stat Boxes (Cards) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
              gap: '1rem',
              marginBottom: '2.5rem'
            }}>
              {stats.map((s) => {
                const IconComponent = s.icon;
                return (
                  <div
                    key={s.id}
                    style={{
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      padding: '1.4rem 0.6rem 1.1rem 0.6rem',
                      textAlign: 'center',
                      background: '#ffffff',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#b87816';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(184, 120, 22, 0.12)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                    }}
                  >
                    {/* Circle Icon Badge */}
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: '#fdf6ec',
                      border: '1px solid #f7dfba',
                      color: '#b87816',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.75rem auto'
                    }}>
                      <IconComponent size={22} />
                    </div>

                    {/* Stat Number */}
                    <div style={{
                      fontSize: '1.45rem',
                      fontWeight: '800',
                      color: '#111827',
                      lineHeight: 1.1,
                      marginBottom: '0.4rem',
                      fontFamily: "'Plus Jakarta Sans', sans-serif"
                    }}>
                      {s.value}
                    </div>

                    {/* Stat Label */}
                    <div style={{
                      fontSize: '0.68rem',
                      fontWeight: '700',
                      color: '#4b5563',
                      letterSpacing: '0.4px',
                      textTransform: 'uppercase',
                      lineHeight: 1.3
                    }}>
                      {s.label}
                    </div>

                    {/* Subtle Gold Accent Underline */}
                    <div style={{
                      width: '22px',
                      height: '2px',
                      background: '#b87816',
                      margin: '0.6rem auto 0 auto',
                      borderRadius: '2px'
                    }} />
                  </div>
                );
              })}
            </div>

            {/* Read More Button */}
            <div>
              <button
                onClick={onReadMore}
                style={{
                  background: '#b87816',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.9rem 2rem',
                  fontSize: '0.92rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  cursor: 'pointer',
                  boxShadow: '0 6px 18px rgba(184, 120, 22, 0.3)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#9e640e';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#b87816';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                READ MORE <ArrowRight size={16} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .about-section {
            padding: 4rem 0 !important;
          }
        }
        @media (max-width: 640px) {
          .about-section {
            padding: 3rem 0 !important;
          }
          .about-main-img {
            height: 280px !important;
          }
        }
        @media (max-width: 480px) {
          #about .container {
            padding: 0 1rem !important;
          }
          .about-hero-grid + div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
