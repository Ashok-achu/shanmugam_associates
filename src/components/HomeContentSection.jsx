import React, { useState } from 'react';
import { 
  Paintbrush, 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  MapPin, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  Phone,
  Sparkles,
  Award,
  Users,
  FileText,
  Clock,
  Layers,
  Home,
  Check
} from 'lucide-react';
import { 
  WHAT_WE_DO, 
  WHY_CHOOSE_US, 
  PROJECTS_WE_HANDLE, 
  AREAS_SERVED, 
  HOME_FAQS, 
  COMPANY_INFO 
} from '../data/siteData';

export default function HomeContentSection({ onNavigatePage, onSelectProvision }) {
  const [activeTab, setActiveTab] = useState('painting');
  const [expandedFaq, setExpandedFaq] = useState(0);

  const handleServiceClick = (slug) => {
    if (slug) {
      if (onSelectProvision) onSelectProvision(slug);
      if (onNavigatePage) onNavigatePage('provision');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (onNavigatePage) onNavigatePage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ══════════════════════════════════════════════════════════
          WHAT WE DO: PROFESSIONAL PAINTING & CONSTRUCTION SERVICES
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 1.5rem 5rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#b87816',
              fontWeight: '700',
              fontSize: '0.86rem',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '0.65rem'
            }}>
              <span style={{ width: '28px', height: '2px', background: '#b87816' }} />
              WHAT WE DO
              <span style={{ width: '28px', height: '2px', background: '#b87816' }} />
            </div>

            <h2 style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 2.85rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.2
            }}>
              Specialized Expertise in Painting & Construction
            </h2>

            {/* Toggle Tabs */}
            <div style={{
              display: 'inline-flex',
              background: '#ffffff',
              padding: '0.4rem',
              borderRadius: '9999px',
              border: '1px solid #e2e8f0',
              marginTop: '1.75rem',
              boxShadow: '0 4px 15px rgba(0,0,0,0.04)'
            }}>
              <button
                onClick={() => setActiveTab('painting')}
                style={{
                  background: activeTab === 'painting' ? '#b87816' : 'transparent',
                  color: activeTab === 'painting' ? '#ffffff' : '#64748b',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.65rem 1.75rem',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Paintbrush size={16} />
                <span>Professional Painting Services</span>
              </button>

              <button
                onClick={() => setActiveTab('construction')}
                style={{
                  background: activeTab === 'construction' ? '#b87816' : 'transparent',
                  color: activeTab === 'construction' ? '#ffffff' : '#64748b',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.65rem 1.75rem',
                  fontWeight: '700',
                  fontSize: '0.92rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <Building2 size={16} />
                <span>Construction Services</span>
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          {activeTab === 'painting' ? (
            <div>
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.75rem 2rem',
                marginBottom: '2.5rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>
                  {WHAT_WE_DO.painting.title}
                </h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.98rem', lineHeight: 1.8 }}>
                  {WHAT_WE_DO.painting.intro}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: '1.5rem'
              }}>
                {WHAT_WE_DO.painting.services.map((srv, i) => (
                  <div
                    key={i}
                    onClick={() => handleServiceClick(srv.slug)}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '2rem 1.75rem',
                      border: '1px solid #e2e8f0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#b87816';
                      e.currentTarget.style.boxShadow = '0 12px 25px rgba(184,120,22,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{
                          width: '42px', height: '42px', borderRadius: '10px',
                          background: 'rgba(184,120,22,0.12)', color: '#b87816',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          <Paintbrush size={20} />
                        </div>
                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#b87816' }}>
                          Explore Service →
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827', marginBottom: '0.65rem' }}>
                        {srv.title}
                      </h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.94rem', lineHeight: 1.65 }}>
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.75rem 2rem',
                marginBottom: '2.5rem',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>
                  {WHAT_WE_DO.construction.title}
                </h3>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.98rem', lineHeight: 1.8 }}>
                  {WHAT_WE_DO.construction.intro}
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                gap: '1.5rem'
              }}>
                {WHAT_WE_DO.construction.services.map((srv, i) => (
                  <div
                    key={i}
                    onClick={() => handleServiceClick(null)}
                    style={{
                      background: '#ffffff',
                      borderRadius: '16px',
                      padding: '2rem 1.75rem',
                      border: '1px solid #e2e8f0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-4px)';
                      e.currentTarget.style.borderColor = '#b87816';
                      e.currentTarget.style.boxShadow = '0 12px 25px rgba(184,120,22,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <div style={{
                          width: '42px', height: '42px', borderRadius: '10px',
                          background: 'rgba(184,120,22,0.12)', color: '#b87816',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          <Building2 size={20} />
                        </div>
                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#b87816' }}>
                          Enquire Now →
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827', marginBottom: '0.65rem' }}>
                        {srv.title}
                      </h4>
                      <p style={{ margin: 0, color: '#64748b', fontSize: '0.94rem', lineHeight: 1.65 }}>
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHY PEOPLE IN COIMBATORE CHOOSE US
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#b87816',
              fontWeight: '700',
              fontSize: '0.86rem',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '0.65rem'
            }}>
              <span style={{ width: '28px', height: '2px', background: '#b87816' }} />
              WHY CHOOSE US
              <span style={{ width: '28px', height: '2px', background: '#b87816' }} />
            </div>

            <h2 style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 2.85rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '1rem'
            }}>
              Why People in Coimbatore Choose Us
            </h2>

            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.75 }}>
              Choosing the right contractor can decide whether your project becomes a happy memory or a stressful experience. Here is why hundreds of families and businesses across the region continue to trust Shanmugam Associates for their painting and construction needs, year after year.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2rem'
          }}>
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  padding: '2.25rem 2rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = '#b87816';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(184,120,22,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '50%',
                    background: 'rgba(184,120,22,0.15)', color: '#b87816',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: '800', fontSize: '0.94rem'
                  }}>
                    {idx + 1}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827', margin: 0 }}>
                    {item.title}
                  </h3>
                </div>

                <p style={{ margin: 0, color: '#475569', fontSize: '0.96rem', lineHeight: 1.75 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROJECTS WE HANDLE & AREAS WE SERVE
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '5.5rem 1.5rem', background: '#090e17', color: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Projects We Handle */}
            <div>
              <div style={{
                color: '#f59e0b',
                fontWeight: '700',
                fontSize: '0.82rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.65rem'
              }}>
                Diverse Portfolio
              </div>
              <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.4rem)', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' }}>
                Projects We Handle
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Our expertise covers a wide range of property types across Tamil Nadu. Whether it is a private home or a large public building, our team approaches every job with the same level of seriousness.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {PROJECTS_WE_HANDLE.map((proj, idx) => (
                  <span
                    key={idx}
                    style={{
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      fontSize: '0.88rem',
                      color: '#f1f5f9',
                      fontWeight: '600'
                    }}
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>

            {/* Areas We Serve */}
            <div>
              <div style={{
                color: '#f59e0b',
                fontWeight: '700',
                fontSize: '0.82rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '0.65rem'
              }}>
                Regional Reach
              </div>
              <h2 style={{ fontSize: 'clamp(1.85rem, 3.2vw, 2.4rem)', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' }}>
                Areas We Serve
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                We currently take up painting and construction projects across Coimbatore, Tiruppur, Pollachi, Erode, Salem, Mettupalayam, Chennai and the Nilgiris. If your property falls within these regions, our team can visit, inspect, and give you an honest opinion on your project.
              </p>

              <div style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '16px',
                padding: '2rem'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {AREAS_SERVED.map((city, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                      <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '1.02rem', fontWeight: '700', color: '#ffffff' }}>{city}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>
                    Need site inspection in your city?
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phonePrimary}`}
                    style={{
                      color: '#f59e0b',
                      fontWeight: '700',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.92rem'
                    }}
                  >
                    <span>Call {COMPANY_INFO.phonePrimary}</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOMEPAGE FREQUENTLY ASKED QUESTIONS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '6rem 1.5rem', background: '#ffffff' }}>
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#b87816',
              fontWeight: '700',
              fontSize: '0.86rem',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '0.65rem'
            }}>
              <span style={{ width: '28px', height: '2px', background: '#b87816' }} />
              COMMON QUERIES
              <span style={{ width: '28px', height: '2px', background: '#b87816' }} />
            </div>

            <h2 style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 2.85rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '0.75rem'
            }}>
              Frequently Asked Questions
            </h2>

            <p style={{ color: '#64748b', fontSize: '1rem' }}>
              Quick answers about our 48-year track record, materials, and processes.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {HOME_FAQS.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: isOpen ? '1px solid #b87816' : '1px solid #e2e8f0',
                    borderRadius: '14px',
                    background: isOpen ? '#fffdfa' : '#ffffff',
                    transition: 'all 0.25s ease',
                    boxShadow: isOpen ? '0 8px 20px rgba(184,120,22,0.08)' : '0 2px 6px rgba(0,0,0,0.02)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.35rem 1.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      background: 'transparent',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.05rem',
                      fontWeight: '700',
                      color: isOpen ? '#111827' : '#1f2937',
                      margin: 0,
                      lineHeight: 1.45
                    }}>
                      {faq.q}
                    </h3>

                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? '#b87816' : '#f1f5f9',
                      color: isOpen ? '#ffffff' : '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.25s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.75rem 1.4rem',
                      color: '#475569',
                      fontSize: '0.96rem',
                      lineHeight: 1.75,
                      borderTop: '1px solid #f8fafc'
                    }}>
                      <p style={{ margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <button
              onClick={() => {
                if (onNavigatePage) onNavigatePage('faq');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                background: '#f8fafc',
                color: '#b87816',
                border: '1px solid #e2e8f0',
                borderRadius: '9999px',
                padding: '0.75rem 1.75rem',
                fontWeight: '700',
                fontSize: '0.92rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b87816';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#b87816';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f8fafc';
                e.currentTarget.style.color = '#b87816';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              <span>View All 20+ Frequently Asked Questions</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
