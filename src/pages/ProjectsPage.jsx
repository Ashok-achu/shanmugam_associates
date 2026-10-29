import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Eye, 
  X,
  Phone,
  ShieldCheck
} from 'lucide-react';

export default function ProjectsPage({ onNavigatePage }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Villas & Apartments' },
    { id: 'commercial', label: 'Commercial & Institutional' },
    { id: 'exterior', label: 'Exterior Weather-Shield' },
    { id: 'interior', label: 'Interior Luxury Finishes' },
    { id: 'epoxy', label: 'Industrial & Epoxy' }
  ];

  const projects = [
    {
      id: 1,
      title: "Arima Walkfield",
      client: "Arima Developers",
      location: "Nava India, Coimbatore",
      category: ["all", "residential", "exterior"],
      year: "2023 - 2024",
      scope: "Turnkey Exterior Weather-Shield & Luxury Interior Painting",
      sqft: "45,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop"
      ],
      description: "A prestigious gated community villa enclave in central Coimbatore. The project required elastomeric weather-shield coatings on all exterior surfaces to resist monsoon moisture and intense UV degradation, paired with washable luxury emulsion on interiors.",
      highlights: [
        "Elastomeric crack-bridging exterior coating with 7-year anti-algae warranty",
        "Custom warm beige and terracotta accent palette coordinated with stone cladding",
        "100% dust-free mechanical sanding inside completed villa units",
        "Zero schedule overrun — delivered 10 days ahead of the developer milestone"
      ]
    },
    {
      id: 2,
      title: "Sree Daksha Urban Enclave",
      client: "Sree Daksha Property Developers",
      location: "Vadavalli, Coimbatore",
      category: ["all", "residential", "exterior"],
      year: "2023 - 2024",
      scope: "Gated Community Residential Elevation & Weather-Guard Exterior Finishes",
      sqft: "1,45,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop"
      ],
      description: "Complete premium exterior and interior painting across multi-tier residential towers with weather-resistant elastomeric paint systems and dust-free interior finishes.",
      highlights: [
        "Advanced weather-shield coating with 7-year anti-algae guarantee",
        "Dedicated site engineers and quality assurance checkpoints",
        "Zero-drip masking protecting all fenestration and glazing",
        "Delivered on schedule with 100% client sign-off"
      ]
    },
    {
      id: 3,
      title: "Globuse Commercial Center",
      client: "Globuse Realtors & Developers",
      location: "Coimbatore",
      category: ["all", "commercial", "interior"],
      year: "2023",
      scope: "Corporate Office Interiors, Texture Accent Walls & Protective Coatings",
      sqft: "65,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900&auto=format&fit=crop"
      ],
      description: "Modern commercial interior execution featuring washable low-VOC luxury emulsions, designer textured feature walls, and durable coatings designed for high-traffic corporate spaces.",
      highlights: [
        "Low-VOC, odorless luxury emulsions allowing rapid re-occupancy",
        "Custom acoustic and decorative texture feature walls",
        "Seamless integration with MEP and interior contractors",
        "Certified industrial safety and clean finish protocols"
      ]
    },
    {
      id: 4,
      title: "Nilan Infra Heights",
      client: "Nilan Infrastructure",
      location: "Avinashi Road, Coimbatore",
      category: ["all", "commercial", "exterior"],
      year: "2024",
      scope: "Commercial High-Rise Façade & Underground Parking Epoxy",
      sqft: "92,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop"
      ],
      description: "A 10-storey commercial corporate tower featuring reflective architectural paint on exterior concrete and multi-layered epoxy flooring in the two-level basement car parking.",
      highlights: [
        "Facade coating engineered with high Solar Reflectance Index (SRI > 100)",
        "2.5mm heavy-duty self-leveling epoxy flooring in basement bays",
        "Anti-slip polyurethane traffic coating on vehicle approach ramps",
        "Reflective line striping and safety signage throughout"
      ]
    },
    {
      id: 5,
      title: "Sri Sai Luxury Apartments",
      client: "Private Residential Association",
      location: "Ganapathy, Coimbatore",
      category: ["all", "residential", "exterior"],
      year: "2023",
      scope: "Comprehensive Exterior Repainting & Structural Waterproofing",
      sqft: "38,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop"
      ],
      description: "A comprehensive refurbishment of an existing 5-floor residential block plagued by seasonal dampness and algae. Rectified plaster fractures and applied 3-tier elastomeric protection.",
      highlights: [
        "High-pressure jet washing and bio-wash treatment of existing fungus",
        "V-groove sealing of structural hairline settlement cracks",
        "10-year warranty exterior coating system",
        "Modern two-tone graphite and sandstone architectural palette"
      ]
    },
    {
      id: 6,
      title: "Skyraa Industrial & Warehouse Complex",
      client: "Skyraa Developments",
      location: "Kovilpalayam, Coimbatore",
      category: ["all", "commercial", "epoxy"],
      year: "2024",
      scope: "Heavy Industrial Steel Anti-Corrosion & Heavy Load Epoxy",
      sqft: "65,000 sq.ft.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop"
      ],
      description: "Modern logistics warehouse requiring ultra-flat, forklift-resistant epoxy flooring and high-durability epoxy-PU paint on pre-engineered steel columns and trusses.",
      highlights: [
        "Forklift impact-resistant 3mm self-leveling resin floor",
        "Zinc-phosphate anti-rust primer on structural PEB steel",
        "High chemical and motor oil resistance in battery charging bays",
        "Laser-straight traffic aisle and safety walkway demarcation"
      ]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ═══════════════════════════════════════════════════════════════
          PROJECTS HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #090e17 0%, #111827 60%, #1e293b 100%)',
        color: '#ffffff',
        padding: '5.5rem 1.5rem 4.5rem 1.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
            Our Portfolio & Proven Track Record
          </div>

          <h1 className="page-hero-h1" style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            Landmark Projects Delivered Across <br />
            <span style={{ color: '#b87816' }}>Tamil Nadu & South India</span>
          </h1>

          <p style={{
            fontSize: '1.12rem',
            color: '#94a3b8',
            maxWidth: '720px',
            lineHeight: 1.7
          }}>
            Explore our curated showcase of residential villas, educational campuses, high-rise apartments, and industrial complexes executed with zero compromise on quality.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FILTER PILLS & PROJECT GRID
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1360px', margin: '0 auto', padding: '4rem 1.5rem 6rem 1.5rem' }}>
        
        {/* Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.65rem',
          justifyContent: 'center',
          marginBottom: '3.5rem'
        }}>
          {filterTabs.map((tab) => {
            const isActive = tab.id === activeFilter;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  background: isActive ? '#b87816' : '#f1f5f9',
                  color: isActive ? '#ffffff' : '#475569',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '0.65rem 1.4rem',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? '700' : '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: isActive ? '0 4px 14px rgba(184,120,22,0.3)' : 'none'
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#e2e8f0';
                    e.currentTarget.style.color = '#0f172a';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    e.currentTarget.style.background = '#f1f5f9';
                    e.currentTarget.style.color = '#475569';
                  }
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects 3-Col Grid */}
        <div className="service-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))',
          gap: '2rem'
        }}>
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 35px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = '#b87816';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e2e8f0';
              }}
            >
              {/* Image Preview */}
              <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(15,23,42,0.85)',
                  backdropFilter: 'blur(6px)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '6px'
                }}>
                  {p.sqft}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.82rem', marginBottom: '0.5rem' }}>
                  <MapPin size={14} color="#b87816" />
                  <span>{p.location}</span>
                </div>

                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '800',
                  color: '#111827',
                  marginBottom: '0.6rem',
                  lineHeight: 1.3
                }}>
                  {p.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                  flex: 1
                }}>
                  {p.description}
                </p>

                <div style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div style={{ fontSize: '0.78rem', color: '#b87816', fontWeight: '700', textTransform: 'uppercase' }}>
                    {p.client}
                  </div>
                  <button
                    onClick={() => setSelectedProject(p)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#111827',
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <span>View Case Study</span>
                    <ArrowRight size={15} color="#b87816" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PROJECT DETAIL MODAL
      ═══════════════════════════════════════════════════════════════ */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.75)',
          backdropFilter: 'blur(5px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem'
        }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            maxWidth: '850px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
            position: 'relative'
          }}>
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                zIndex: 10,
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.6)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div style={{ height: '300px', width: '100%', position: 'relative' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2rem'
              }}>
                <div style={{ color: '#f59e0b', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                  {selectedProject.client} • {selectedProject.location}
                </div>
                <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', lineHeight: 1.2 }}>
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '2rem' }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                background: '#f8fafc',
                padding: '1.25rem',
                borderRadius: '12px',
                marginBottom: '1.75rem',
                fontSize: '0.88rem'
              }}>
                <div>
                  <div style={{ color: '#64748b', fontSize: '0.76rem', textTransform: 'uppercase' }}>Scope of Work</div>
                  <div style={{ fontWeight: '700', color: '#0f172a', marginTop: '2px' }}>{selectedProject.scope}</div>
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '0.76rem', textTransform: 'uppercase' }}>Total Area</div>
                  <div style={{ fontWeight: '700', color: '#0f172a', marginTop: '2px' }}>{selectedProject.sqft}</div>
                </div>
                <div>
                  <div style={{ color: '#64748b', fontSize: '0.76rem', textTransform: 'uppercase' }}>Execution Year</div>
                  <div style={{ fontWeight: '700', color: '#0f172a', marginTop: '2px' }}>{selectedProject.year}</div>
                </div>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#111827', marginBottom: '0.75rem' }}>
                Project Overview & Execution Details
              </h4>
              <p style={{ fontSize: '0.96rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                {selectedProject.description}
              </p>

              <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#111827', marginBottom: '0.85rem' }}>
                Key Technical Highlights
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.92rem', color: '#334155' }}>
                    <CheckCircle2 size={18} color="#b87816" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0' }}>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    if (onNavigatePage) onNavigatePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: '#b87816',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.85rem 1.8rem',
                    fontSize: '0.94rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Request Similar Project
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.85rem 1.5rem',
                    fontSize: '0.94rem',
                    fontWeight: '700',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Grid */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
