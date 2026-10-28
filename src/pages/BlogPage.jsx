import React, { useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Phone, 
  Mail
} from 'lucide-react';
import { BLOG_CATEGORIES, BLOG_ARTICLES, BLOG_KNOWLEDGE_SECTION } from '../data/blogData';
import { COMPANY_INFO } from '../data/siteData';

export default function BlogPage({ onNavigatePage }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredArticles = selectedCategory === 'all' 
    ? BLOG_ARTICLES 
    : BLOG_ARTICLES.filter(a => a.categorySlug === selectedCategory);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ══════════════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════════════ */}
      <section style={{
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
            Shanmugam Associates Knowledge Hub
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            Construction, Painting & Property Improvement Insights
          </h1>

          <p style={{
            fontSize: '1.14rem',
            color: '#cbd5e1',
            maxWidth: '860px',
            lineHeight: 1.75
          }}>
            Welcome to the Shanmugam Associates Blog, where we share practical advice, industry insights, painting tips, construction guidance, and property maintenance ideas to help homeowners and businesses across Coimbatore make informed decisions about their properties. After nearly five decades in this industry, we have picked up a great deal of practical knowledge, and we believe in sharing it, rather than keeping it locked away, because an informed client usually makes better decisions and ends up happier with the final result.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURED BLOG CATEGORIES
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem 3.5rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
          <div style={{
            color: '#b87816',
            fontWeight: '700',
            fontSize: '0.86rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            Curated Subject Areas
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
            fontWeight: '800',
            color: '#111827',
            lineHeight: 1.2
          }}>
            Featured Blog Categories
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.02rem', marginTop: '0.75rem' }}>
            Written in simple, everyday English for homeowners, developers, and business owners across Tamil Nadu.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: '1.75rem'
        }}>
          {BLOG_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(selectedCategory === cat.id ? 'all' : cat.id)}
              style={{
                background: selectedCategory === cat.id ? '#fffdf9' : '#ffffff',
                border: selectedCategory === cat.id ? '2px solid #b87816' : '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: selectedCategory === cat.id ? '0 12px 30px rgba(184,120,22,0.12)' : '0 4px 12px rgba(0,0,0,0.03)'
              }}
              onMouseEnter={(e) => {
                if (selectedCategory !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 25px rgba(0,0,0,0.06)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedCategory !== cat.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
                }
              }}
            >
              <div style={{
                display: 'inline-block',
                background: 'rgba(184,120,22,0.12)',
                color: '#b87816',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.78rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '1rem'
              }}>
                {cat.tag}
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#111827', marginBottom: '0.75rem' }}>
                {cat.title}
              </h3>

              <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                {cat.desc}
              </p>

              <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Popular Topics Covered:
                </span>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0.6rem 0 0 0', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {cat.topics.slice(0, 3).map((topic, i) => (
                    <li key={i} style={{ fontSize: '0.88rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#b87816' }} />
                      <span>{topic}</span>
                    </li>
                  ))}
                  {cat.topics.length > 3 && (
                    <li style={{ fontSize: '0.82rem', color: '#b87816', fontWeight: '600' }}>
                      + {cat.topics.length - 3} more topics
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LATEST ARTICLES GRID
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div style={{ color: '#b87816', fontWeight: '700', fontSize: '0.86rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Practical Guides
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', fontWeight: '800', color: '#111827', margin: 0 }}>
                Latest Articles
              </h2>
            </div>

            {/* Filter Pill */}
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                style={{
                  background: '#ffffff',
                  border: '1px solid #b87816',
                  color: '#b87816',
                  borderRadius: '9999px',
                  padding: '0.45rem 1.15rem',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                Clear Filter (Showing {filteredArticles.length} articles)
              </button>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
            gap: '2rem'
          }}>
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                }}
              >
                <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(15, 23, 42, 0.85)',
                    color: '#ffffff',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '9999px',
                    fontSize: '0.74rem',
                    fontWeight: '700',
                    backdropFilter: 'blur(6px)'
                  }}>
                    {article.category}
                  </div>
                </div>

                <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: '#94a3b8', marginBottom: '0.75rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Calendar size={14} />
                      {article.date}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={14} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '800',
                    color: '#111827',
                    lineHeight: 1.35,
                    marginBottom: '0.85rem'
                  }}>
                    {article.title}
                  </h3>

                  <p style={{
                    fontSize: '0.94rem',
                    color: '#64748b',
                    lineHeight: 1.65,
                    marginBottom: '1.5rem',
                    flex: 1
                  }}>
                    {article.summary}
                  </p>

                  <button
                    onClick={() => setActiveArticle(article)}
                    style={{
                      background: '#f8fafc',
                      color: '#b87816',
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px',
                      padding: '0.75rem 1.25rem',
                      fontWeight: '700',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      width: '100%'
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
                    <span>Read Full Guide</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ARTICLE DETAIL MODAL
      ══════════════════════════════════════════════════════════ */}
      {activeArticle && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(9, 14, 23, 0.75)',
          backdropFilter: 'blur(6px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            maxWidth: '820px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.3s ease'
          }}>
            {/* Header Image */}
            <div style={{ height: '260px', position: 'relative' }}>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveArticle(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#b87816'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.6)'}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{
                  background: 'rgba(184,120,22,0.12)',
                  color: '#b87816',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: '700'
                }}>
                  {activeArticle.category}
                </span>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>•</span>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{activeArticle.date}</span>
                <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>•</span>
                <span style={{ fontSize: '0.82rem', color: '#64748b' }}>{activeArticle.readTime}</span>
              </div>

              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '800', color: '#111827', lineHeight: 1.25, marginBottom: '1.5rem' }}>
                {activeArticle.title}
              </h2>

              <div style={{ color: '#374151', fontSize: '1.02rem', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {activeArticle.content.map((p, idx) => (
                  <p key={idx} style={{ margin: 0 }}>{p}</p>
                ))}
              </div>

              {/* Key Takeaways */}
              {activeArticle.keyPoints && (
                <div style={{
                  marginTop: '2rem',
                  background: '#f8fafc',
                  borderLeft: '4px solid #b87816',
                  borderRadius: '8px',
                  padding: '1.5rem'
                }}>
                  <h4 style={{ fontSize: '0.96rem', fontWeight: '800', color: '#111827', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>
                    Key Takeaways & Best Practices
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {activeArticle.keyPoints.map((pt, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.94rem', color: '#475569' }}>
                        <CheckCircle2 size={16} color="#b87816" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal CTA */}
              <div style={{
                marginTop: '2.5rem',
                paddingTop: '2rem',
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#111827' }}>
                    Have questions about this topic for your project?
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    Speak with our experienced engineers and master painters.
                  </div>
                </div>

                <a
                  href={`tel:${COMPANY_INFO.phonePrimary}`}
                  style={{
                    background: '#b87816',
                    color: '#ffffff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '9999px',
                    fontWeight: '700',
                    fontSize: '0.88rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={15} />
                  Call {COMPANY_INFO.phonePrimary}
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          WHY WE SHARE THIS KNOWLEDGE & READ, LEARN, PLAN AHEAD
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5.5rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: '3.5rem'
        }}>
          {/* Box 1 */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '3rem 2.5rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(184,120,22,0.12)',
              color: '#b87816',
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}>
              Our Philosophy
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#111827', marginBottom: '1.25rem' }}>
              {BLOG_KNOWLEDGE_SECTION.whyWeShare.title}
            </h3>

            {BLOG_KNOWLEDGE_SECTION.whyWeShare.paragraphs.map((para, i) => (
              <p key={i} style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                {para}
              </p>
            ))}
          </div>

          {/* Box 2 */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: '3rem 2.5rem',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(184,120,22,0.12)',
              color: '#b87816',
              padding: '0.35rem 0.9rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}>
              Client Empowerment
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#111827', marginBottom: '1.25rem' }}>
              {BLOG_KNOWLEDGE_SECTION.readLearnPlan.title}
            </h3>

            {BLOG_KNOWLEDGE_SECTION.readLearnPlan.paragraphs.map((para, i) => (
              <p key={i} style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '1rem' }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CLOSING CTA BANNER
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #090e17 0%, #1e293b 100%)',
          borderRadius: '24px',
          padding: '3.75rem 2.5rem',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 45px rgba(0,0,0,0.15)',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.7rem)',
              fontWeight: '800',
              lineHeight: 1.25,
              marginBottom: '1.25rem',
              color: '#ffffff'
            }}>
              {BLOG_KNOWLEDGE_SECTION.closingCta.heading}
            </h2>

            <p style={{
              fontSize: '1.08rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '2.25rem'
            }}>
              {BLOG_KNOWLEDGE_SECTION.closingCta.text}
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                style={{
                  background: '#b87816',
                  color: '#ffffff',
                  padding: '0.95rem 2rem',
                  borderRadius: '9999px',
                  fontWeight: '700',
                  fontSize: '0.98rem',
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
                Call {COMPANY_INFO.phonePrimary}
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '0.95rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: '700',
                  fontSize: '0.98rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Mail size={18} />
                {COMPANY_INFO.email}
              </a>
            </div>

            <div style={{ marginTop: '1.5rem', color: '#94a3b8', fontSize: '0.86rem' }}>
              Website: <span style={{ color: '#f59e0b' }}>{COMPANY_INFO.website}</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
