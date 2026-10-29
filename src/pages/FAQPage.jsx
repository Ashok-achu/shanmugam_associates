import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  Phone, 
  Mail, 
  MessageCircle, 
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { FAQ_CATEGORIES, STILL_HAVE_QUESTIONS } from '../data/faqData';
import { COMPANY_INFO } from '../data/siteData';

export default function FAQPage({ onNavigatePage }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Flattened questions with category label
  const allQuestions = useMemo(() => {
    return FAQ_CATEGORIES.flatMap((cat) =>
      cat.items.map((item) => ({ ...item, category: cat.category }))
    );
  }, []);

  // Filtered list
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const qLower = item.q.toLowerCase();
      const aLower = item.a.toLowerCase();
      const queryLower = searchQuery.toLowerCase().trim();
      const matchesSearch = !queryLower || qLower.includes(queryLower) || aLower.includes(queryLower);
      return matchesCategory && matchesSearch;
    });
  }, [allQuestions, activeCategory, searchQuery]);

  const toggleAccordion = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const categories = ['All', ...FAQ_CATEGORIES.map(c => c.category)];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ══════════════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #090e17 0%, #111827 60%, #1e293b 100%)',
        color: '#ffffff',
        padding: '5.5rem 1.5rem 4.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '380px', height: '380px', borderRadius: '50%',
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
            Honest Answers & Transparent Guidance
          </div>

          <h1 className="page-hero-h1" style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            Frequently Asked Questions
          </h1>

          <p style={{
            fontSize: '1.14rem',
            color: '#cbd5e1',
            maxWidth: '820px',
            lineHeight: 1.75
          }}>
            At Shanmugam Associates, we understand that starting a painting or construction project comes with many questions, especially if it is your first time working with a contractor, or if a previous experience with another contractor did not go smoothly. Here are honest answers to the questions our clients ask us most often, organised by topic so you can find what you need quickly.
          </p>

          {/* Search Bar */}
          <div style={{
            marginTop: '2.5rem',
            maxWidth: '640px',
            position: 'relative'
          }}>
            <Search 
              size={20} 
              color="#94a3b8" 
              style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              type="text"
              placeholder="Search questions on painting, waterproofing, pricing, or timelines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.25rem 1rem 3.25rem',
                borderRadius: '9999px',
                border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(10px)',
                color: '#ffffff',
                fontSize: '0.98rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#b87816';
                e.target.style.background = 'rgba(255,255,255,0.14)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                e.target.style.background = 'rgba(255,255,255,0.08)';
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CATEGORY FILTER PILLS
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '1.25rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setExpandedIndex(null); }}
                style={{
                  background: isActive ? '#b87816' : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  border: isActive ? '1px solid #b87816' : '1px solid #e2e8f0',
                  borderRadius: '9999px',
                  padding: '0.45rem 1.15rem',
                  fontSize: '0.86rem',
                  fontWeight: isActive ? '700' : '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(184,120,22,0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          ACCORDION QUESTIONS LIST
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '4.5rem 1.5rem' }}>
        {filteredQuestions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#64748b' }}>
            <HelpCircle size={48} color="#cbd5e1" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.3rem', color: '#1e293b', marginBottom: '0.5rem' }}>No questions found</h3>
            <p>Try searching with another keyword or select "All" categories.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '960px', margin: '0 auto' }}>
            {filteredQuestions.map((item, idx) => {
              const isOpen = expandedIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: isOpen ? '1px solid #b87816' : '1px solid #e2e8f0',
                    borderRadius: '14px',
                    background: isOpen ? '#fffdfa' : '#ffffff',
                    transition: 'all 0.25s ease',
                    boxShadow: isOpen ? '0 10px 25px rgba(184,120,22,0.08)' : '0 2px 6px rgba(0,0,0,0.02)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    style={{
                      width: '100%',
                      padding: '1.4rem 1.75rem',
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
                    <div>
                      <span style={{
                        display: 'inline-block',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: isOpen ? '#b87816' : '#94a3b8',
                        marginBottom: '0.35rem'
                      }}>
                        {item.category}
                      </span>
                      <h3 className="faq-item-title" style={{
                        fontSize: '1.08rem',
                        fontWeight: '700',
                        color: isOpen ? '#111827' : '#1f2937',
                        lineHeight: 1.4,
                        margin: 0
                      }}>
                        {item.q}
                      </h3>
                    </div>

                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: isOpen ? '#b87816' : '#f1f5f9',
                      color: isOpen ? '#ffffff' : '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.25s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}>
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.75rem 1.5rem',
                      color: '#475569',
                      fontSize: '0.98rem',
                      lineHeight: 1.8,
                      borderTop: '1px solid #f8fafc'
                    }}>
                      <p style={{ margin: 0 }}>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════════════════
          STILL HAVE A QUESTION SECTION
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem 5.5rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #090e17 0%, #1e293b 100%)',
          borderRadius: '24px',
          padding: '3.5rem 2.5rem',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 45px rgba(0,0,0,0.15)'
        }}>
          <div style={{ maxWidth: '750px', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#f59e0b',
              fontSize: '0.82rem',
              fontWeight: '700',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              <HelpCircle size={15} />
              {STILL_HAVE_QUESTIONS.title}
            </div>

            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
              fontWeight: '800',
              lineHeight: 1.25,
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Need more information? We are happy to help.
            </h2>

            <p style={{
              fontSize: '1.02rem',
              color: '#cbd5e1',
              lineHeight: 1.75,
              marginBottom: '2rem'
            }}>
              {STILL_HAVE_QUESTIONS.text}
            </p>

            <div className="cta-button-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                style={{
                  background: '#b87816',
                  color: '#ffffff',
                  padding: '0.9rem 1.75rem',
                  borderRadius: '9999px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
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
                  background: 'transparent',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '0.9rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  fontSize: '0.92rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ffffff'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#cbd5e1'; }}
              >
                <Mail size={16} />
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
