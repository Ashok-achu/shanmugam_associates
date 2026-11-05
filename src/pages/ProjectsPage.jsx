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
    { id: 'all', label: 'All' },
    { id: 'villas', label: 'Villas' },
    { id: 'apartments', label: 'Apartments' },
    { id: 'institutional', label: 'Institutional' },
    { id: 'gated-communities', label: 'Gated communities' }
  ];

  const projects = [
    {
      id: 1,
      title: "Villa community",
      client: "Private Community Developers",
      location: "Coimbatore",
      category: ["all", "villas"],
      badge: "VILLAS",
      year: "2023 - 2024",
      scope: "Exterior Finishing & Weather-Shield Painting",
      sqft: "65,000 sq.ft.",
      image: "/images/projects/villas-sunrise.jpg",
      gallery: [
        "/images/projects/villas-sunrise.jpg",
        "/images/gallery/villas-01.jpg",
        "/images/gallery/villas-02.jpg",
        "/images/gallery/villas-03.jpg"
      ],
      description: "An exclusive gated residential villa community in Coimbatore. The project required high-performance elastomeric weather-shield coatings on all exterior surfaces to resist monsoon moisture and intense UV rays.",
      highlights: [
        "Elastomeric crack-bridging exterior coating with anti-algae warranty",
        "Harmonized earthy color palette complementing modern architectural stonework",
        "Dust-free surface preparation and spray finish",
        "Delivered on schedule with 100% developer satisfaction"
      ]
    },
    {
      id: 2,
      title: "Apartment Block H",
      client: "Residential Tower Management",
      location: "Coimbatore",
      category: ["all", "apartments"],
      badge: "APARTMENTS",
      year: "2023 - 2024",
      scope: "Multi-Storey Facade Painting & Weatherproofing",
      sqft: "1,20,000 sq.ft.",
      image: "/images/projects/apartments-block-h.jpg",
      gallery: [
        "/images/projects/apartments-block-h.jpg",
        "/images/gallery/apartments-01.jpg",
        "/images/gallery/apartments-02.jpg"
      ],
      description: "Multi-storey residential tower facade painting featuring advanced weather-guard systems engineered to withstand intense tropical sun and seasonal rainfall.",
      highlights: [
        "Heavy-duty elastomeric exterior paint with dirt pick-up resistance",
        "High-altitude motorized cradle and rope access execution",
        "Thorough plaster crack remediation before priming",
        "On-time handover with zero safety incidents"
      ]
    },
    {
      id: 3,
      title: "Apartment blocks and park",
      client: "Urban Township Developers",
      location: "Coimbatore",
      category: ["all", "apartments"],
      badge: "APARTMENTS",
      year: "2023 - 2024",
      scope: "Campus Exterior Painting & Landscape Boundary Works",
      sqft: "2,40,000 sq.ft.",
      image: "/images/projects/apartments-aerial-park.jpg",
      gallery: [
        "/images/projects/apartments-aerial-park.jpg",
        "/images/gallery/apartments-03.jpg",
        "/images/gallery/landscape-sculpture-04.jpg"
      ],
      description: "An expansive residential campus comprising multiple apartment blocks encircling an amphitheater and landscaped central park. Fully unified exterior finish across all elevations.",
      highlights: [
        "Coordinated multi-tone architectural scheme across all building wings",
        "High Solar Reflectance Index (SRI) coating reducing heat absorption",
        "Perimeter masonry and security infrastructure weather-sealing",
        "Delivered ahead of developer milestone"
      ]
    },
    {
      id: 4,
      title: "Aravind Eye Hospital",
      client: "Aravind Eye Care System",
      location: "Coimbatore",
      category: ["all", "institutional"],
      badge: "INSTITUTIONAL",
      year: "2024",
      scope: "Institutional Hospital Facade & Interior Sterility Coating",
      sqft: "95,000 sq.ft.",
      image: "/images/projects/hospital-aravind-eye.jpg",
      gallery: [
        "/images/projects/hospital-aravind-eye.jpg",
        "/images/gallery/institutional-01.jpg",
        "/images/gallery/institutional-02.jpg",
        "/images/gallery/institutional-03.jpg"
      ],
      description: "Renowned healthcare hospital complex in Coimbatore requiring ultra-clean, antimicrobial exterior and interior coatings compliant with clinical sterility standards.",
      highlights: [
        "Hygienic anti-bacterial coatings formulated for medical facilities",
        "Vibrant architectural facade coating with UV-resistant blue pigments",
        "Completed during off-hours with zero disruption to patient care",
        "Approved and certified to hospital safety and environmental criteria"
      ]
    },
    {
      id: 5,
      title: "Gated community entrance",
      client: "Gated Enclave Association",
      location: "Coimbatore",
      category: ["all", "gated-communities"],
      badge: "GATED COMMUNITY",
      year: "2023",
      scope: "Grand Entrance Arch, Columns & Security Pavilion",
      sqft: "18,000 sq.ft.",
      image: "/images/projects/gated-community-entrance.jpg",
      gallery: [
        "/images/projects/gated-community-entrance.jpg",
        "/images/gallery/gated-community-01.jpg",
        "/images/gallery/gated-community-02.jpg"
      ],
      description: "Landmark entrance portal for an upscale gated township, featuring monumental archways, integrated lighting channels, and long-lasting textured stone finishes.",
      highlights: [
        "Weatherproof textured masonry finish mimicking chiselled stone",
        "Crack-resistant flexible primers over expansion junctions",
        "Security cabin and gate pavilion finishing with clean detailing",
        "Completed within strict pre-launch timeline"
      ]
    },
    {
      id: 6,
      title: "Porte-cochere",
      client: "Luxury Community Club",
      location: "Coimbatore",
      category: ["all", "gated-communities"],
      badge: "GATED COMMUNITY",
      year: "2024",
      scope: "Decorative Columns, Jali Finishing & Vehicle Canopy",
      sqft: "12,000 sq.ft.",
      image: "/images/projects/porte-cochere-front.jpg",
      gallery: [
        "/images/projects/porte-cochere-front.jpg",
        "/images/services/decorative-jali-finishing.jpg",
        "/images/gallery/gated-community-03.jpg"
      ],
      description: "Covered vehicle drop-off entrance featuring classical architectural columns, detailed jali lattice screens, and durable multi-coat ceiling and floor treatments.",
      highlights: [
        "Intricate decorative jali pattern spraying with smooth lacquer sealant",
        "Anti-fungal ceiling coatings resisting vehicle exhaust carbon",
        "Classic fluted column detailing with smooth eggshell finish",
        "Flawless handover with zero surface blemishes"
      ]
    },
    {
      id: 7,
      title: "Apartments with glass balconies",
      client: "Skyline Developers",
      location: "Coimbatore",
      category: ["all", "apartments"],
      badge: "APARTMENTS",
      year: "2024",
      scope: "Modern High-Rise Elevation & Balcony Protective Glaze",
      sqft: "85,000 sq.ft.",
      image: "/images/projects/flats-glass-balconies.jpg",
      gallery: [
        "/images/projects/flats-glass-balconies.jpg",
        "/images/gallery/apartments-05.jpg",
        "/images/gallery/apartments-06.jpg"
      ],
      description: "Contemporary residential complex defined by extensive glass balconies, crisp white masonry bands, and warm terracotta accent panels.",
      highlights: [
        "Ultra-smooth exterior emulsion emphasizing crisp architectural geometry",
        "Masking precision around glass balustrades and stainless steel fixings",
        "Waterproofing and slope sealing on all balcony cantilever slabs",
        "Delivered with distinction on schedule"
      ]
    },
    {
      id: 8,
      title: "Park sculpture",
      client: "Township Parks & Recreation",
      location: "Coimbatore",
      category: ["all"],
      badge: "LANDSCAPE",
      year: "2023",
      scope: "Public Art Installation, Thematic Statue & Weather Seal",
      sqft: "4,500 sq.ft.",
      image: "/images/projects/sculpture-globe-statue.jpg",
      gallery: [
        "/images/projects/sculpture-globe-statue.jpg",
        "/images/gallery/landscape-sculpture-01.jpg",
        "/images/gallery/landscape-sculpture-02.jpg"
      ],
      description: "Thematic ornamental globe sculpture and park focal installations. Required specialist artisan finishes and high-grade UV-stable polyurethane sealants.",
      highlights: [
        "Artisan decorative multi-tone patination with metallic accents",
        "Aliphatic PU clearcoat preventing sun fade and moisture damage",
        "Concrete pedestal crack injection and durable stone-look finish",
        "Celebrated centerpiece for the residential community"
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
