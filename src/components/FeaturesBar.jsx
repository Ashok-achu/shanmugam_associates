import React from 'react';
import { Home, ShieldCheck, Clock, Users } from 'lucide-react';

const FEATURES = [
  { id: 1, icon: Home,        title: 'Custom Solutions',    sub: 'Tailored to your needs'      },
  { id: 2, icon: ShieldCheck, title: 'Quality Workmanship', sub: 'Finishes that last'           },
  { id: 3, icon: Clock,       title: 'On-Time Delivery',    sub: 'Your time, our priority'     },
  { id: 4, icon: Users,       title: 'Expert Support',      sub: 'From planning to completion' },
];

export default function FeaturesBar() {
  return (
    <section
      aria-label="Key Value Pillars"
      style={{
        background: '#0a101d',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        position: 'relative',
        zIndex: 15,
        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      }}
    >
      <div
        className="features-strip"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          maxWidth: '1440px',
          margin: '0 auto',
        }}
      >
        {FEATURES.map((feat, idx) => {
          const Icon = feat.icon;
          const isLast = idx === FEATURES.length - 1;
          return (
            <div
              key={feat.id}
              className="feature-strip-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.15rem',
                padding: '1.5rem 1.75rem',
                borderRight: isLast ? 'none' : '1px solid rgba(255, 255, 255, 0.07)',
                transition: 'all 0.25s ease',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(184, 120, 22, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {/* Icon badge */}
              <div
                className="feature-icon-badge"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'rgba(184, 120, 22, 0.12)',
                  border: '1.5px solid rgba(184, 120, 22, 0.35)',
                  color: '#e6aa30',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease, background 0.3s ease, border-color 0.3s ease',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)',
                }}
              >
                <Icon size={22} strokeWidth={2.2} />
              </div>

              {/* Labels */}
              <div>
                <div
                  style={{
                    fontSize: '0.94rem',
                    fontWeight: '700',
                    color: '#f8fafc',
                    marginBottom: '0.22rem',
                    letterSpacing: '0.2px',
                    lineHeight: 1.25,
                  }}
                >
                  {feat.title}
                </div>
                <div
                  style={{
                    fontSize: '0.78rem',
                    color: '#94a3b8',
                    fontWeight: '500',
                    lineHeight: 1.35,
                  }}
                >
                  {feat.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Responsive Styles */}
      <style>{`
        .feature-strip-item:hover .feature-icon-badge {
          transform: translateY(-2px) scale(1.05);
          background: rgba(184, 120, 22, 0.22) !important;
          border-color: #b87816 !important;
        }

        @media (max-width: 992px) {
          .features-strip {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .feature-strip-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.07) !important;
          }
          .feature-strip-item:nth-child(odd) {
            border-right: 1px solid rgba(255, 255, 255, 0.07) !important;
          }
          .feature-strip-item:nth-last-child(-n+2) {
            border-bottom: none !important;
          }
        }

        @media (max-width: 580px) {
          .features-strip {
            grid-template-columns: 1fr !important;
          }
          .feature-strip-item:nth-child(odd) {
            border-right: none !important;
          }
          .feature-strip-item {
            border-bottom: 1px solid rgba(255, 255, 255, 0.07) !important;
            padding: 1.15rem 1.25rem !important;
          }
          .feature-strip-item:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
