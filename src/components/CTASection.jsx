import React from 'react';
import { FileText, Phone, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '919443522285';
const PHONE_NUMBER = '+919443522285';

export default function CTASection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <section
      id="cta"
      style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", lineHeight: 1 }}
    >
      {/* ═══════════════════════════════════════════════════════════════
          TOP PANEL  –  left copy / right image
      ═══════════════════════════════════════════════════════════════ */}
      <div
        className="cta-main-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '340px',
          overflow: 'hidden',
          background: '#f7f2e8',
        }}
      >
        {/* ── LEFT: Text + Buttons ─────────────────────────────────── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '1.35rem',
            padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.75rem, 5vw, 5rem)',
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: '#b87816',
              fontWeight: '700',
              fontSize: '0.76rem',
              letterSpacing: '2.8px',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ width: '30px', height: '1.5px', background: '#b87816', display: 'inline-block' }} />
            LET'S BUILD TOGETHER
            <span style={{ width: '30px', height: '1.5px', background: '#b87816', display: 'inline-block' }} />
          </div>

          {/* Headline */}
          <div style={{ lineHeight: 1.15 }}>
            <h2
              style={{
                fontSize: 'clamp(1.85rem, 3.2vw, 2.6rem)',
                fontWeight: '800',
                color: '#111827',
                margin: 0,
              }}
            >
              Planning to paint or <span style={{ color: '#b87816' }}>build something?</span>
            </h2>
          </div>

          {/* Body copy */}
          <p
            style={{
              fontSize: '0.98rem',
              color: '#4b5563',
              lineHeight: 1.75,
              maxWidth: '480px',
              margin: 0,
            }}
          >
            Send us your site details and we'll visit, inspect, and give you an honest quotation — no pressure, no obligation.
          </p>

          <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: '600' }}>
            📞 94435 22285 &nbsp;•&nbsp; ✉️ associatesshanmugam@gmail.com
          </div>

          {/* Button group */}
          <div
            className="cta-button-row"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
              alignItems: 'center',
            }}
          >
            {/* Request a Quote */}
            <button
              id="cta-quote-btn"
              onClick={scrollToTop}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                color: '#b87816',
                border: '2px solid #b87816',
                borderRadius: '6px',
                padding: '0.72rem 1.35rem',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#b87816';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#b87816';
              }}
            >
              <FileText size={15} />
              Request a Quote
              <ArrowRight size={14} />
            </button>

            {/* Call Us Now */}
            <a
              id="cta-call-btn"
              href={`tel:${PHONE_NUMBER}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                color: '#374151',
                border: '2px solid #d1d5db',
                borderRadius: '6px',
                padding: '0.72rem 1.35rem',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#111827';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#111827';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#374151';
                e.currentTarget.style.borderColor = '#d1d5db';
              }}
            >
              <Phone size={15} />
              Call Us Now
            </a>

            {/* WhatsApp */}
            <a
              id="cta-whatsapp-btn"
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#25d366',
                color: '#ffffff',
                border: '2px solid #25d366',
                borderRadius: '6px',
                padding: '0.72rem 1.35rem',
                fontWeight: '700',
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.22s ease',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#1aad54';
                e.currentTarget.style.borderColor = '#1aad54';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#25d366';
                e.currentTarget.style.borderColor = '#25d366';
              }}
            >
              {/* WhatsApp SVG */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* ── RIGHT: House Image ────────────────────────────────────── */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Gold diagonal slash accent overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(105deg, #f7f2e8 0%, #f7f2e8 12%, transparent 30%)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1400&auto=format&fit=crop"
            alt="Luxury villa by Shanmugam Associates"
            style={{
              width: '100%',
              height: '100%',
              minHeight: '320px',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
              transition: 'transform 0.7s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          {/* "Since 1977" tag */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              right: '1.25rem',
              zIndex: 3,
              background: 'rgba(255,255,255,0.9)',
              backdropFilter: 'blur(8px)',
              borderRadius: '8px',
              padding: '0.45rem 0.9rem',
              fontWeight: '800',
              fontSize: '0.95rem',
              color: '#111827',
              boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
              letterSpacing: '0.5px',
            }}
          >
            Since 1977
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          RESPONSIVE
      ═══════════════════════════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 860px) {
          .cta-main-grid {
            grid-template-columns: 1fr !important;
          }
          .cta-main-grid > div:last-child {
            min-height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
}
