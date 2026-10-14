import React, { useState } from 'react';
import { 
  Gem, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Camera, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  X,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export default function ProjectsSection({ onNavigatePage }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'interior', label: 'Interior Painting' },
    { id: 'exterior', label: 'Exterior Painting' },
    { id: 'texture', label: 'Texture & Decorative' },
    { id: 'epoxy', label: 'Epoxy Flooring' }
  ];

  const allProjects = [
    {
      id: 1,
      title: "Arima Walkfield",
      location: "Nava India, Coimbatore",
      description: "Premium residential villa project with elegant interior and exterior painting finishes.",
      status: "Completed",
      photosCount: 12,
      tags: ["Residential", "Exterior Painting"],
      categories: ["all", "residential", "exterior"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop"
      ],
      details: {
        client: "Arima Walkfield Developers",
        scope: "Turnkey Exterior Weather-Shield & Luxury Interior Painting",
        completion: "Completed on Schedule",
        highlights: "Weather-resistant elastomeric paint with 7-year warranty and UV protection."
      }
    },
    {
      id: 2,
      title: "Sri Sai Apartments",
      location: "Ganapathy, Coimbatore",
      description: "Residential apartment with premium exterior painting and common area finishes.",
      status: "Completed",
      photosCount: 10,
      tags: ["Residential", "Exterior Painting", "Common Area"],
      categories: ["all", "residential", "exterior"],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=900&auto=format&fit=crop"
      ],
      details: {
        client: "Sri Sai Residential Association",
        scope: "Complete Façade Restoration & Waterproof Putty Treatment",
        completion: "Delivered in 45 Days",
        highlights: "Multi-tier anti-algae exterior coating and durable common staircase finish."
      }
    },
    {
      id: 3,
      title: "Business Center",
      location: "Avinashi Road, Coimbatore",
      description: "Commercial complex with advanced exterior painting and interior finishing solutions.",
      status: "Ongoing",
      photosCount: 8,
      tags: ["Commercial", "Exterior Painting", "Interior Painting"],
      categories: ["all", "commercial", "exterior", "interior"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop"
      ],
      details: {
        client: "Apex Commercial Ventures",
        scope: "High-Rise Façade Treatment & Corporate Executive Suite Finishing",
        completion: "Phase 2 in Progress (85% Completed)",
        highlights: "Industrial spray painting, fire-retardant interior coatings, and modern exterior glass trims."
      }
    },
    {
      id: 4,
      title: "Modern Villa Interiors",
      location: "Saravanampatti, Coimbatore",
      description: "Luxury villa with texture painting and premium interior finishes.",
      status: "Completed",
      photosCount: 15,
      tags: ["Residential", "Texture Painting", "Interior Painting"],
      categories: ["all", "residential", "texture", "interior"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=900&auto=format&fit=crop"
      ],
      details: {
        client: "Private Homeowner",
        scope: "Designer Textured Accent Walls, Metallic Stucco & PU Wood Coating",
        completion: "Delivered Flawlessly",
        highlights: "Custom Italian concrete wall textures and dust-free motorized finish."
      }
    },
    {
      id: 5,
      title: "KCP Industrial Hub",
      location: "Neelambur, Coimbatore",
      description: "Heavy-duty industrial warehouse with chemical-resistant epoxy flooring and protective wall coatings.",
      status: "Completed",
      photosCount: 14,
      tags: ["Industrial", "Epoxy Flooring"],
      categories: ["all", "industrial", "epoxy"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=900&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=900&auto=format&fit=crop"
      ],
      details: {
        client: "KCP Infrastructure Logistics",
        scope: "High-Gloss 3mm Self-Leveling Epoxy Flooring System",
        completion: "Completed on Schedule",
        highlights: "Forklift-resistant epoxy with anti-slip texture and line marking."
      }
    },
    {
      id: 6,
      title: "Shree Daksha Luxury Residency",
      location: "Vadavalli, Coimbatore",
      description: "Exclusive gated villa community with premium acrylic weather-guard exterior finish.",
      status: "Completed",
      photosCount: 16,
      tags: ["Residential", "Exterior Painting"],
      categories: ["all", "residential", "exterior"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop"
      ],
      details: {
        client: "Shree Daksha Homes",
        scope: "Elevation Exterior Painting & Texture Cornice Highlights",
        completion: "Delivered with Distinction",
        highlights: "Eco-friendly exterior coatings tested against monsoon rains."
      }
    },
    {
      id: 7,
      title: "Annapoorna Commercial Facility",
      location: "Arasur, Coimbatore",
      description: "High-rise commercial catering hub with hygienic antibacterial epoxy and interior painting.",
      status: "Completed",
      photosCount: 11,
      tags: ["Commercial", "Interior Painting", "Epoxy Flooring"],
      categories: ["all", "commercial", "interior", "epoxy"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop"
      ],
      details: {
        client: "Annapoorna Catering Corporation",
        scope: "Food-Grade Anti-Bacterial Wall & Epoxy Floor Installations",
        completion: "Certified ISO Standard Compliant",
        highlights: "Zero VOC non-toxic food industry grade coating."
      }
    },
    {
      id: 8,
      title: "Aarthy Heritage Restorations",
      location: "RS Puram, Coimbatore",
      description: "Heritage residential bungalow with artisan lime plaster and antique texture painting.",
      status: "Completed",
      photosCount: 9,
      tags: ["Residential", "Texture & Decorative"],
      categories: ["all", "residential", "texture"],
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=900&auto=format&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=900&auto=format&fit=crop"
      ],
      details: {
        client: "Aarthy Associates",
        scope: "Architectural Restoration & Decorative Italian Stucco",
        completion: "Completed with High Acclaim",
        highlights: "Preserved original heritage architecture with modern breathable finishes."
      }
    }
  ];

  // Filtering logic
  const filteredProjects = activeFilter === 'all'
    ? allProjects
    : allProjects.filter((p) => p.categories.includes(activeFilter));

  const itemsPerPage = 4;
  const maxPage = Math.max(0, Math.ceil(filteredProjects.length / itemsPerPage) - 1);
  const displayedProjects = filteredProjects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : maxPage));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : 0));
  };

  const handleFilterClick = (filterId) => {
    setActiveFilter(filterId);
    setCurrentPage(0);
  };

  const scrollToQuote = () => {
    const elem = document.getElementById('get-started');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="projects" className="section" style={{ background: '#ffffff', padding: '6.5rem 0 7rem 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Top Header Row: Title & Trust Badges */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '2.5rem',
          marginBottom: '3rem'
        }}>
          
          {/* Left Title Area */}
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              color: '#b87816',
              fontWeight: '700',
              fontSize: '0.84rem',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '0.6rem'
            }}>
              <span style={{ width: '28px', height: '2px', background: '#b87816' }} />
              FEATURED PROJECTS
              <span style={{ width: '28px', height: '2px', background: '#b87816' }} />
            </div>

            <h2 style={{
              fontSize: 'clamp(2.1rem, 3.8vw, 2.9rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.2,
              marginBottom: '0.85rem',
              fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
              Our Work <span style={{ color: '#b87816' }}>Speaks for Itself</span>
            </h2>

            <p style={{
              fontSize: '1.02rem',
              color: '#525a66',
              lineHeight: '1.7',
              margin: 0
            }}>
              A showcase of our completed and ongoing projects, reflecting our commitment to quality, precision and customer satisfaction.
            </p>
          </div>

          {/* Right Trust Badges (Quality Finishes, On-Time Delivery, Trusted by Happy Clients) */}
          <div className="projects-trust-badges" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem',
            background: '#fafbfc',
            padding: '1.25rem 2rem',
            borderRadius: '16px',
            border: '1px solid #f1f5f9'
          }}>
            
            {/* Badge 1: Quality Finishes */}
            <div style={{ textAlign: 'center', minWidth: '85px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#fdf6ec',
                border: '1px solid #f6dfbe',
                color: '#b87816',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem auto'
              }}>
                <Gem size={20} />
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#1f2937', lineHeight: 1.3, display: 'block' }}>
                Quality<br />Finishes
              </span>
            </div>

            <div style={{ width: '1px', height: '40px', background: '#e2e8f0' }} />

            {/* Badge 2: On-Time Delivery */}
            <div style={{ textAlign: 'center', minWidth: '85px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#fdf6ec',
                border: '1px solid #f6dfbe',
                color: '#b87816',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem auto'
              }}>
                <Clock size={20} />
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#1f2937', lineHeight: 1.3, display: 'block' }}>
                On-Time<br />Delivery
              </span>
            </div>

            <div style={{ width: '1px', height: '40px', background: '#e2e8f0' }} />

            {/* Badge 3: Trusted by Happy Clients */}
            <div style={{ textAlign: 'center', minWidth: '95px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#fdf6ec',
                border: '1px solid #f6dfbe',
                color: '#b87816',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.5rem auto'
              }}>
                <ShieldCheck size={20} />
              </div>
              <span style={{ fontSize: '0.78rem', fontWeight: '700', color: '#1f2937', lineHeight: 1.3, display: 'block' }}>
                Trusted by<br />Happy Clients
              </span>
            </div>

          </div>

        </div>

        {/* Filter Tabs & Navigation Controls Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
          paddingBottom: '1rem'
        }}>
          
          {/* Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap'
          }}>
            {filterTabs.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleFilterClick(tab.id)}
                  style={{
                    background: isSelected ? '#b87816' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#4b5563',
                    border: isSelected ? '1px solid #b87816' : '1px solid #e5e7eb',
                    borderRadius: '9999px',
                    padding: '0.55rem 1.25rem',
                    fontSize: '0.88rem',
                    fontWeight: isSelected ? '700' : '500',
                    cursor: 'pointer',
                    boxShadow: isSelected ? '0 4px 12px rgba(184, 120, 22, 0.3)' : '0 2px 4px rgba(0,0,0,0.02)',
                    transition: 'all 0.2s ease',
                    outline: 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#b87816';
                      e.currentTarget.style.color = '#b87816';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#e5e7eb';
                      e.currentTarget.style.color = '#4b5563';
                    }
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Left / Right Carousel Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <button
              onClick={handlePrevPage}
              aria-label="Previous projects"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#ffffff',
                border: '1px solid #d1d5db',
                color: '#374151',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#b87816';
                e.currentTarget.style.color = '#b87816';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#d1d5db';
                e.currentTarget.style.color = '#374151';
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNextPage}
              aria-label="Next projects"
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#b87816',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 12px rgba(184, 120, 22, 0.35)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#9e640e';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#b87816';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* 4 Showcase Project Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.75rem',
          marginBottom: '3.5rem'
        }} className="projects-grid-container">
          
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #eef0f3',
                boxShadow: '0 4px 18px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = '#b87816';
                e.currentTarget.style.boxShadow = '0 16px 35px rgba(184, 120, 22, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = '#eef0f3';
                e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,0.05)';
              }}
            >
              {/* Card Image Area */}
              <div style={{
                position: 'relative',
                height: '210px',
                overflow: 'hidden',
                background: '#f1f5f9'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.6s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />

                {/* Top-Left Status Badge (Completed / Ongoing) */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(4px)',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  color: '#1f2937',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: project.status === 'Ongoing' ? '#2563eb' : '#16a34a',
                    display: 'inline-block'
                  }} />
                  {project.status}
                </div>

                {/* Bottom-Right Photo Counter Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  background: 'rgba(17, 24, 39, 0.8)',
                  backdropFilter: 'blur(6px)',
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px',
                  color: '#ffffff',
                  fontSize: '0.78rem',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}>
                  <Camera size={13} />
                  <span>{project.photosCount}</span>
                </div>
              </div>

              {/* Card Body */}
              <div style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.28rem',
                    fontWeight: '800',
                    color: '#111827',
                    lineHeight: 1.3,
                    marginBottom: '0.4rem'
                  }}>
                    {project.title}
                  </h3>

                  {/* Location with Pin */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: '#b87816',
                    fontSize: '0.84rem',
                    fontWeight: '600',
                    marginBottom: '0.85rem'
                  }}>
                    <MapPin size={14} color="#b87816" />
                    <span>{project.location}</span>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.88rem',
                    lineHeight: '1.6',
                    color: '#55606e',
                    marginBottom: '1.25rem',
                    minHeight: '44px'
                  }}>
                    {project.description}
                  </p>

                  {/* Category Pill Tags */}
                  <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          background: '#fdf6ec',
                          color: '#785012',
                          border: '1px solid #f6deb8',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          fontSize: '0.74rem',
                          fontWeight: '600'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Action */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem' }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: '#b87816',
                      fontWeight: '700',
                      fontSize: '0.92rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.65rem',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'gap 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.gap = '0.9rem';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.gap = '0.65rem';
                    }}
                  >
                    <span>View Project</span>
                    <span style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: '#b87816',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 6px rgba(184, 120, 22, 0.3)'
                    }}>
                      <ArrowRight size={14} />
                    </span>
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom Banner: Explore Our Complete Project Gallery */}
        <div style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #091222 0%, #111d33 60%, #1a2a47 100%)',
          boxShadow: '0 20px 45px rgba(10, 20, 40, 0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: '3rem 3.5rem',
          gap: '2rem'
        }}>
          
          {/* Subtle Right Architectural Backdrop */}
          <div style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '45%',
            backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.18,
            maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, transparent 100%)',
            pointerEvents: 'none'
          }} />

          {/* Banner Text Content */}
          <div style={{ maxWidth: '680px', position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.65rem',
              color: '#c9851e',
              fontSize: '0.8rem',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.75rem'
            }}>
              LET'S BUILD SOMETHING EXCEPTIONAL
              <span style={{ width: '35px', height: '2px', background: '#c9851e' }} />
            </div>

            <h3 style={{
              fontSize: 'clamp(1.75rem, 3vw, 2.35rem)',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: 1.25,
              marginBottom: '0.85rem'
            }}>
              Explore Our Complete <span style={{ color: '#c9851e' }}>Project Gallery</span>
            </h3>

            <p style={{
              fontSize: '0.98rem',
              color: '#94a3b8',
              lineHeight: '1.7',
              margin: 0
            }}>
              View more of our completed and ongoing projects to see the quality and craftsmanship we deliver across residential, commercial and industrial spaces.
            </p>
          </div>

          {/* View All Projects Button */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <button
              onClick={() => {
                if (onNavigatePage) {
                  onNavigatePage('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              style={{
                background: '#b87816',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '1rem 2.25rem',
                fontSize: '0.96rem',
                fontWeight: '700',
                letterSpacing: '0.5px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 8px 24px rgba(184, 120, 22, 0.4)',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#d98c1a';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(184, 120, 22, 0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#b87816';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(184, 120, 22, 0.4)';
              }}
            >
              <span>View All Projects</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>

      {/* Interactive Modal for Deep Dive Project Showcase */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(6px)',
            zIndex: 2500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              maxWidth: '750px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
              position: 'relative',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            {/* Modal Image Header */}
            <div style={{ position: 'relative', height: '280px' }}>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(0,0,0,0.65)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              <div style={{
                position: 'absolute',
                bottom: '1rem',
                left: '1.5rem',
                background: 'rgba(15, 23, 42, 0.85)',
                color: '#fff',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: '700'
              }}>
                {selectedProject.status} Project
              </div>
            </div>

            {/* Modal Details */}
            <div style={{ padding: '2rem 2.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#b87816', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.35rem' }}>
                <MapPin size={16} />
                <span>{selectedProject.location}</span>
              </div>

              <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#111827', marginBottom: '0.75rem' }}>
                {selectedProject.title}
              </h3>

              <p style={{ color: '#4b5563', lineHeight: '1.7', fontSize: '0.98rem', marginBottom: '1.5rem' }}>
                {selectedProject.description}
              </p>

              <div style={{
                background: '#f8fafc',
                border: '1px solid #eef0f3',
                borderRadius: '10px',
                padding: '1.25rem',
                marginBottom: '1.75rem',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>CLIENT</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#111827' }}>{selectedProject.details.client}</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>TIMELINE</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#111827' }}>{selectedProject.details.completion}</div>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>SCOPE & HIGHLIGHTS</div>
                  <div style={{ fontSize: '0.92rem', color: '#334155' }}>{selectedProject.details.highlights}</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    background: '#f3f4f6',
                    color: '#374151',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.75rem 1.5rem',
                    fontWeight: '600',
                    fontSize: '0.92rem',
                    cursor: 'pointer'
                  }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    if (onNavigatePage) {
                      onNavigatePage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  style={{
                    background: '#b87816',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.75rem 1.75rem',
                    fontWeight: '700',
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>Request Similar Project</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1200px) {
          .projects-grid-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          #projects {
            padding: 3.5rem 0 4rem 0 !important;
          }
          .projects-trust-badges {
            width: 100% !important;
            justify-content: space-around !important;
            padding: 1rem 0.6rem !important;
            gap: 0.5rem !important;
          }
        }
        @media (max-width: 680px) {
          .projects-grid-container {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
