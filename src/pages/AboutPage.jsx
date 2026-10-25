import React from 'react';
import { 
  Building2, 
  Users, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { COMPANY_INFO, LEADERSHIP, TRUSTED_CLIENTS } from '../data/siteData';

export default function AboutPage({ onNavigatePage }) {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ═══════════════════════════════════════════════════════════════
          ABOUT HERO BANNER
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #090e17 0%, #111827 60%, #1e293b 100%)',
        color: '#ffffff',
        padding: '5.5rem 1.5rem 5rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
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
            Coimbatore's Trusted Painting & Construction Company Since 1977
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            About Shanmugam Associates
          </h1>

          <p style={{
            fontSize: '1.14rem',
            color: '#cbd5e1',
            maxWidth: '780px',
            lineHeight: 1.7
          }}>
            Learn how Shanmugam Associates grew from a small contracting firm in 1977 into one of Coimbatore's most trusted painting and construction companies, now proudly run by the second generation.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          OUR STORY
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5.5rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: '4.5rem',
          alignItems: 'center'
        }}>
          {/* Left Text */}
          <div>
            <div style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#b87816',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.6rem'
            }}>
              Our Story
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '1.5rem'
            }}>
              From Government Works in 1977 to Over 2.7 Million Sq. Ft. Painted
            </h2>

            <p style={{ fontSize: '1.02rem', color: '#4b5563', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Shanmugam Associates began in <strong>1977</strong>, started by <strong>Mr. Shanmugam</strong>. In the early years, the company worked mainly on government projects — PWD roads, highways, and TWAD water board works — along with some private jobs across the Nilgiris and Coimbatore districts.
            </p>

            <p style={{ fontSize: '1.02rem', color: '#4b5563', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              In <strong>2014</strong>, the founder's family — the second generation — stepped in to run the business. They made a clear decision: <em>focus on two things and do them really well — Construction and Painting.</em> Since then, the company has grown steadily, building a strong team of civil workers and painters, and taking on projects in Coimbatore, Chennai, Nilgiris and other cities across Tamil Nadu.
            </p>

            <p style={{ fontSize: '1.02rem', color: '#4b5563', lineHeight: 1.8, marginBottom: '2rem' }}>
              We've grown from small private jobs to large apartment projects — at one point painting over <strong>2.7 million square feet of buildings in a single year</strong> — and we've also gone on to work on government buildings such as hospitals, colleges, schools, community halls, parks and bridges.
            </p>

            {/* Quick Stat Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '1.5rem',
              background: '#fef3c7',
              border: '1px solid #fde68a',
              borderRadius: '12px',
              padding: '1rem 1.5rem'
            }}>
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#92400e', lineHeight: 1 }}>2.7M+</div>
                <div style={{ fontSize: '0.76rem', color: '#78350f', fontWeight: '700', textTransform: 'uppercase', marginTop: '2px' }}>Sq. Ft. Painted in a Single Year</div>
              </div>
              <div style={{ width: '1px', height: '36px', background: '#fcd34d' }} />
              <div>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#92400e', lineHeight: 1 }}>Nearly 50</div>
                <div style={{ fontSize: '0.76rem', color: '#78350f', fontWeight: '700', textTransform: 'uppercase', marginTop: '2px' }}>Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: '4px solid #ffffff'
            }}>
              <img
                src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?q=80&w=900&auto=format&fit=crop"
                alt="Shanmugam Associates Construction Site"
                style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
              />
            </div>
            
            {/* Established Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-1.5rem',
              left: '-1.5rem',
              background: '#0f172a',
              color: '#ffffff',
              padding: '1.5rem 2rem',
              borderRadius: '16px',
              boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <div style={{ fontSize: '2.4rem', fontWeight: '800', color: '#f59e0b', lineHeight: 1 }}>1977</div>
              <div style={{ fontSize: '0.82rem', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '4px' }}>
                Founded by Mr. Shanmugam
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MEET THE TEAM (Second-Generation Leadership)
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fafbfc', padding: '5.5rem 1.5rem', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#b87816', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              Leadership
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#0f172a' }}>
              Meet the Team
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', marginTop: '0.5rem' }}>
              Guided by principles of discipline, technical rigor, and personal client relationships.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            
            {/* Founder Card */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              position: 'relative'
            }}>
              <div style={{
                display: 'inline-block',
                background: '#fef3c7',
                color: '#b87816',
                fontWeight: '800',
                fontSize: '0.75rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                marginBottom: '1rem'
              }}>
                FOUNDER
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                Mrs. Nikilalochani Sathyan
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#4b5563', lineHeight: 1.75 }}>
                With a background in teaching and accounting, she brings discipline and attention to detail to every part of the business — from planning to client relationships.
              </p>
            </div>

            {/* Business Head Card */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '2.5rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
              position: 'relative'
            }}>
              <div style={{
                display: 'inline-block',
                background: '#fef3c7',
                color: '#b87816',
                fontWeight: '800',
                fontSize: '0.75rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '0.35rem 0.85rem',
                borderRadius: '6px',
                marginBottom: '1rem'
              }}>
                BUSINESS HEAD
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                Mr. Sathyan Shanmugam
              </h3>
              <p style={{ fontSize: '0.96rem', color: '#4b5563', lineHeight: 1.75 }}>
                He leads the construction side of the company, having personally worked on projects like smart city developments, storm water drainage, retaining walls, parks, sports courts, markets, bus stands, schools and community halls.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5.5rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          
          {/* Mission */}
          <div style={{
            background: 'linear-gradient(145deg, #0f172a 0%, #1e293b 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 12px 30px rgba(15,23,42,0.15)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(184,120,22,0.25)',
              color: '#f59e0b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Target size={24} />
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#f59e0b', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Our Mission
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.25 }}>
              Quality, Honesty, and Zero Compromise
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.75 }}>
              "To give every client a painting or construction job that is high quality, done honestly, and finished on time — without cutting corners."
            </p>
          </div>

          {/* Vision */}
          <div style={{
            background: 'linear-gradient(145deg, #b87816 0%, #8a5308 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: '0 12px 30px rgba(184,120,22,0.25)'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Eye size={24} />
            </div>
            <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#fef3c7', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Our Vision
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', marginBottom: '1.25rem', lineHeight: 1.25 }}>
              A Trusted Partner Across Tamil Nadu
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#fef3c7', lineHeight: 1.75 }}>
              "To be known across Tamil Nadu as a construction and painting partner people can genuinely trust — not just for buildings, but for the way we treat our clients."
            </p>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          COMPANIES THAT TRUST US
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#b87816', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              Client Partnerships
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#0f172a' }}>
              Companies That Trust Us
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', marginTop: '0.5rem' }}>
              We've partnered with leading builders, developers, and institutions across Tamil Nadu.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.25rem'
          }}>
            {TRUSTED_CLIENTS.map((client, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.5rem 1.25rem',
                  textAlign: 'center',
                  fontWeight: '700',
                  fontSize: '0.96rem',
                  color: '#1e293b',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#b87816';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(184,120,22,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.02)';
                }}
              >
                {client}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#0a101d',
        color: '#ffffff',
        padding: '5rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', marginBottom: '1.25rem' }}>
            Planning to Paint or Build Something?
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Send us your site details and we'll visit, inspect, and give you an honest quotation — no pressure, no obligation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                if (onNavigatePage) onNavigatePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                background: '#b87816',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.95rem 2.25rem',
                fontSize: '0.98rem',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              Request Free Site Visit
            </button>
            <a
              href="tel:9443522285"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                padding: '0.95rem 2rem',
                fontSize: '0.98rem',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Phone size={17} />
              <span>Call 94435 22285</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
