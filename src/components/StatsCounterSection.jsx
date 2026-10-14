import React, { useState, useEffect, useRef } from 'react';
import { Smile, BookOpen, Headphones, Users } from 'lucide-react';
import { STATS_DATA } from '../data/siteData';

const iconMap = {
  1: Smile,
  2: BookOpen,
  3: Headphones,
  4: Users
};

function CounterItem({ stat }) {
  const [count, setCount] = useState(0);
  const itemRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = stat.value;
          const duration = 1600;
          const startTime = performance.now();

          const updateCount = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // easeOutQuad
            const current = Math.floor(progress * (2 - progress) * end);
            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(updateCount);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(updateCount);
        }
      },
      { threshold: 0.2 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, stat.value]);

  const IconComp = iconMap[stat.id] || Smile;

  return (
    <div
      ref={itemRef}
      style={{
        background: '#ffffff',
        border: '1px solid #eef0f3',
        borderRadius: '8px',
        padding: '2.5rem 2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.04)';
      }}
    >
      <div style={{
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: `${stat.color}18`,
        color: stat.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        <IconComp size={30} />
      </div>

      <div>
        <div style={{
          fontSize: '2.4rem',
          fontWeight: '800',
          color: '#2a2c38',
          lineHeight: 1,
          marginBottom: '0.35rem',
          fontFamily: 'Playfair Display, serif'
        }}>
          {count}
        </div>
        <div style={{
          fontSize: '0.95rem',
          color: '#64748b',
          fontWeight: '600'
        }}>
          {stat.label}
        </div>
      </div>
    </div>
  );
}

export default function StatsCounterSection() {
  return (
    <section id="stats-counter" className="section" style={{ background: '#f5f6f7', padding: '5rem 0' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem'
        }}>
          {STATS_DATA.map((stat) => (
            <CounterItem key={stat.id} stat={stat} />
          ))}
        </div>

      </div>
    </section>
  );
}
