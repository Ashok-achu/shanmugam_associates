import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Building } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="section" style={{ background: '#ffffff', padding: '6rem 0' }}>
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
            Our Clients
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
            At Shanmugam Associates, we take pride in our strong relationships with a diverse range of clients. Our commitment to excellence and client satisfaction has earned us the trust of businesses and individuals alike. Here are some of the valued clients who have chosen Shanmugam Associates for their legal and consulting needs:
          </p>
        </div>

        {/* Client Carousel / Grid Layout */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{
            background: '#f8fafc',
            border: '1px solid #eef0f3',
            borderRadius: '12px',
            padding: '3.5rem 3rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            position: 'relative',
            minHeight: '280px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <Quote 
              size={44} 
              color="var(--primary)" 
              style={{ opacity: 0.35, marginBottom: '1.25rem' }} 
            />

            <p style={{
              fontSize: '1.15rem',
              fontStyle: 'italic',
              color: '#334155',
              lineHeight: '1.8',
              marginBottom: '2rem',
              maxWidth: '750px'
            }}>
              "{TESTIMONIALS[currentIndex].text}"
            </p>

            {/* Rating Stars */}
            <div style={{ display: 'flex', gap: '0.3rem', marginBottom: '1rem', color: '#f59e0b' }}>
              {[...Array(TESTIMONIALS[currentIndex].stars)].map((_, i) => (
                <Star key={i} size={20} fill="#f59e0b" />
              ))}
            </div>

            {/* Client Identity */}
            <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.25rem', width: '100%', maxWidth: '300px' }}>
              <h3 style={{
                fontSize: '1.35rem',
                fontWeight: '800',
                color: '#2a2c38',
                marginBottom: '0.2rem'
              }}>
                {TESTIMONIALS[currentIndex].name}
              </h3>
              <span style={{ fontSize: '0.88rem', color: 'var(--primary)', fontWeight: '600' }}>
                {TESTIMONIALS[currentIndex].role}
              </span>
            </div>

          </div>

          {/* Left / Right Controls */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              position: 'absolute',
              left: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #dcdfe4',
              color: '#2a2c38',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#2a2c38';
            }}
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            style={{
              position: 'absolute',
              right: '-24px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#ffffff',
              border: '1px solid #dcdfe4',
              color: '#2a2c38',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff';
              e.currentTarget.style.color = '#2a2c38';
            }}
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots Indicator */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.6rem',
            marginTop: '2rem'
          }}>
            {TESTIMONIALS.map((client, idx) => (
              <button
                key={client.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Client ${client.name}`}
                style={{
                  width: idx === currentIndex ? '30px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: idx === currentIndex ? 'var(--primary)' : '#cbd5e1',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
