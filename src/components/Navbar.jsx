import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Paintbrush, 
  Home, 
  Building2, 
  Building, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { SPECIALIZED_PROVISIONS } from '../data/siteData';
import logoImg from '../assets/logo/logo3.png';

const provisionIcons = {
  'interior-painting': Paintbrush,
  'exterior-painting': Home,
  'house-painting': Building2,
  'commercial-painting': Building,
  'texture-painting': Sparkles,
  'waterproofing': ShieldCheck
};

const provisionTaglines = {
  'interior-painting': 'Luxury emulsions & dust-free finish',
  'exterior-painting': 'Elastomeric weather-shield & anti-algae',
  'house-painting': 'Complete villa & apartment solutions',
  'commercial-painting': 'Offices, showrooms, factories & retail',
  'texture-painting': 'Royal Play & designer feature walls',
  'waterproofing': 'Terraces, roofs & structural sealing'
};

export default function Navbar({ activePage, setActivePage, setSelectedProvision }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const topDropdownRef = useRef(null);
  const floatingDropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close desktop dropdown reliably
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isTopInside = topDropdownRef.current && topDropdownRef.current.contains(event.target);
      const isFloatingInside = floatingDropdownRef.current && floatingDropdownRef.current.contains(event.target);
      if (!isTopInside && !isFloatingInside) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  };

  const handleDropdownToggleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDropdownOpen((prev) => !prev);
  };

  const handleNavClick = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProvisionClick = (slug) => {
    setSelectedProvision(slug);
    setActivePage('provision');
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAppointmentClick = () => {
    setActivePage('contact');
    setMobileMenuOpen(false);
    setDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'provision', label: 'Specializations', isDropdown: true },
    { id: 'projects', label: 'Projects' },
    { id: 'faq', label: 'FAQ' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderSpecializationsDropdown = () => {
    if (!dropdownOpen) return null;
    return (
      <div
        style={{
          position: 'absolute',
          top: '100%',
          paddingTop: '8px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          minWidth: '310px',
          filter: 'drop-shadow(0 18px 40px rgba(0,0,0,0.16))'
        }}
      >
        {/* Subtle top arrow pointer */}
        <div style={{
          position: 'absolute',
          top: '3px',
          left: '50%',
          transform: 'translateX(-50%) rotate(45deg)',
          width: '10px',
          height: '10px',
          background: '#ffffff',
          borderLeft: '1px solid #e2e8f0',
          borderTop: '1px solid #e2e8f0',
          zIndex: 1
        }} />

        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '16px',
            padding: '0.65rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.2rem'
          }}
        >
          {/* Header pill */}
          <div style={{
            padding: '0.45rem 0.85rem 0.55rem',
            fontSize: '0.74rem',
            fontWeight: '800',
            color: '#b87816',
            letterSpacing: '1.2px',
            textTransform: 'uppercase',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <span>Specialized Services</span>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: '600' }}>6 Provisions</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.35rem' }}>
            {SPECIALIZED_PROVISIONS.map((item) => {
              const Icon = provisionIcons[item.slug] || Paintbrush;
              const tagline = provisionTaglines[item.slug] || item.tagline;
              return (
                <button
                  key={item.slug}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProvisionClick(item.slug);
                  }}
                  style={{
                    textAlign: 'left',
                    padding: '0.65rem 0.85rem',
                    borderRadius: '10px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.18s ease',
                    width: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#fdf8f0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <div style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(184, 120, 22, 0.12)',
                    color: '#b87816',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Icon size={17} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: '0.88rem',
                      fontWeight: '700',
                      color: '#111827',
                      lineHeight: 1.25,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <span>{item.name}</span>
                      <ArrowRight size={13} color="#b87816" opacity={0.7} />
                    </div>
                    <div style={{
                      fontSize: '0.74rem',
                      color: '#64748b',
                      lineHeight: 1.3,
                      marginTop: '0.15rem',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}>
                      {tagline}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          TOP FULL HEADER (Shown at page top)
          Fixed height, stable, no layout jumps or shifting
      ══════════════════════════════════════════════════════════ */}
      <header
        className="top-site-header"
        style={{
          width: '100%',
          background: '#ffffff',
          borderBottom: '1px solid #f1f5f9',
          padding: '0.9rem 2.2rem',
          position: 'relative',
          zIndex: 990
        }}
      >
        <div style={{
          maxWidth: '1360px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          {/* Brand Logo (Left) */}
          <div
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', flexShrink: 0 }}
            role="button"
            tabIndex={0}
            aria-label="Shanmugam Associates Home"
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNavClick('home'); }}
          >
            <img
              src={logoImg}
              alt="Shanmugam Associates Logo"
              style={{
                height: '50px',
                maxWidth: '220px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>

          {/* Center Pill Capsule Navigation Bar (Top Mode) */}
          <nav
            className="desktop-capsule-nav"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '9999px',
              padding: '0.3rem 0.45rem',
              boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            {navLinks.map((link) => {
              if (link.isDropdown) {
                const isDropdownActive = activePage === 'provision';
                return (
                  <div
                    key={link.id}
                    ref={topDropdownRef}
                    style={{ position: 'relative' }}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={handleDropdownToggleClick}
                      style={{
                        background: (isDropdownActive || dropdownOpen) ? '#fdf6ec' : 'transparent',
                        color: (isDropdownActive || dropdownOpen) ? '#b87816' : '#4b5563',
                        border: 'none',
                        borderRadius: '9999px',
                        padding: '0.5rem 1.15rem',
                        fontSize: '0.92rem',
                        fontWeight: (isDropdownActive || dropdownOpen) ? '700' : '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.2s ease',
                        outline: 'none',
                        whiteSpace: 'nowrap',
                        lineHeight: 1
                      }}
                      onMouseEnter={(e) => {
                        if (!isDropdownActive && !dropdownOpen) {
                          e.currentTarget.style.color = '#111827';
                          e.currentTarget.style.background = '#f9fafb';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isDropdownActive && !dropdownOpen) {
                          e.currentTarget.style.color = '#4b5563';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        size={14} 
                        style={{ 
                          transform: dropdownOpen ? 'rotate(180deg)' : 'none', 
                          transition: 'transform 0.2s ease',
                          color: (isDropdownActive || dropdownOpen) ? '#b87816' : '#64748b'
                        }} 
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {renderSpecializationsDropdown()}
                  </div>
                );
              }

              const isHighlight = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: isHighlight ? '#fdf6ec' : 'transparent',
                    color: isHighlight ? '#b87816' : '#4b5563',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: isHighlight ? '0.5rem 1.25rem' : '0.5rem 1rem',
                    fontSize: '0.92rem',
                    fontWeight: isHighlight ? '700' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    outline: 'none',
                    whiteSpace: 'nowrap',
                    lineHeight: 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isHighlight) {
                      e.currentTarget.style.color = '#111827';
                      e.currentTarget.style.background = '#f9fafb';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isHighlight) {
                      e.currentTarget.style.color = '#4b5563';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Button (Top Mode) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
            <button
              onClick={handleAppointmentClick}
              className="book-appointment-btn"
              style={{
                background: '#b87816',
                color: '#ffffff',
                border: 'none',
                borderRadius: '9999px',
                padding: '0.68rem 1.55rem',
                fontSize: '0.92rem',
                fontWeight: '700',
                cursor: 'pointer',
                letterSpacing: '0.3px',
                boxShadow: '0 4px 14px rgba(184,120,22,0.3)',
                transition: 'all 0.2s ease',
                outline: 'none',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#9e640e';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#b87816';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book Appointment
            </button>

            {/* Mobile Hamburger Toggle (Top Mode) */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              style={{
                display: 'none',
                background: 'transparent',
                border: 'none',
                padding: '0.5rem',
                borderRadius: '8px',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#111827',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          SCROLLED FLOATING NAVBAR (Moves along with scroll)
          Neat, clear, compact floating capsule — does NOT move
          the entire heavy header, keeping viewport clean and neat.
      ══════════════════════════════════════════════════════════ */}
      <div
        className={`floating-scroll-nav ${isScrolled ? 'is-visible' : ''}`}
        style={{
          position: 'fixed',
          top: isScrolled ? '14px' : '-80px',
          left: 0,
          right: 0,
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: isScrolled ? 'auto' : 'none',
          opacity: isScrolled ? 1 : 0,
          transform: isScrolled ? 'translateY(0)' : 'translateY(-14px)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: '0 1rem'
        }}
      >
        <div
          className="floating-nav-capsule"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(226, 232, 240, 0.9)',
            borderRadius: '9999px',
            boxShadow: '0 12px 36px -4px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.05)',
            padding: '0.32rem 0.5rem 0.32rem 0.85rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            maxWidth: '100%',
            whiteSpace: 'nowrap'
          }}
        >
          {/* Mini Brand Logo Mark */}
          <div
            onClick={() => handleNavClick('home')}
            style={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              paddingRight: '0.4rem',
              flexShrink: 0
            }}
            title="Shanmugam Associates Home"
          >
            <img
              src={logoImg}
              alt="SA Logo"
              style={{
                height: '28px',
                maxWidth: '115px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>

          <div style={{ width: '1px', height: '20px', background: '#e2e8f0', margin: '0 0.15rem' }} />

          {/* Desktop Capsule Nav Links (Scroll Mode) */}
          <div className="floating-desktop-links" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.15rem' }}>
            {navLinks.map((link) => {
              if (link.isDropdown) {
                const isDropdownActive = activePage === 'provision';
                return (
                  <div
                    key={link.id}
                    ref={floatingDropdownRef}
                    style={{ position: 'relative' }}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleDropdownMouseLeave}
                  >
                    <button
                      type="button"
                      onClick={handleDropdownToggleClick}
                      style={{
                        background: (isDropdownActive || dropdownOpen) ? '#fdf6ec' : 'transparent',
                        color: (isDropdownActive || dropdownOpen) ? '#b87816' : '#4b5563',
                        border: 'none',
                        borderRadius: '9999px',
                        padding: '0.45rem 0.9rem',
                        fontSize: '0.88rem',
                        fontWeight: (isDropdownActive || dropdownOpen) ? '700' : '500',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        transition: 'all 0.15s ease',
                        outline: 'none',
                        whiteSpace: 'nowrap',
                        lineHeight: 1
                      }}
                      onMouseEnter={(e) => {
                        if (!isDropdownActive && !dropdownOpen) {
                          e.currentTarget.style.color = '#111827';
                          e.currentTarget.style.background = '#f3f4f6';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isDropdownActive && !dropdownOpen) {
                          e.currentTarget.style.color = '#4b5563';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown 
                        size={13} 
                        style={{ 
                          transform: dropdownOpen ? 'rotate(180deg)' : 'none', 
                          transition: 'transform 0.2s ease',
                          color: (isDropdownActive || dropdownOpen) ? '#b87816' : '#64748b'
                        }} 
                      />
                    </button>

                    {/* Floating Dropdown Menu */}
                    {renderSpecializationsDropdown()}
                  </div>
                );
              }

              const isHighlight = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: isHighlight ? '#fdf6ec' : 'transparent',
                    color: isHighlight ? '#b87816' : '#4b5563',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: isHighlight ? '0.45rem 1rem' : '0.45rem 0.85rem',
                    fontSize: '0.88rem',
                    fontWeight: isHighlight ? '700' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    outline: 'none',
                    whiteSpace: 'nowrap',
                    lineHeight: 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isHighlight) {
                      e.currentTarget.style.color = '#111827';
                      e.currentTarget.style.background = '#f3f4f6';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isHighlight) {
                      e.currentTarget.style.color = '#4b5563';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div style={{ width: '1px', height: '20px', background: '#e2e8f0', margin: '0 0.15rem' }} />

          {/* Compact Book Appointment Button */}
          <button
            onClick={handleAppointmentClick}
            style={{
              background: '#b87816',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.45rem 1.15rem',
              fontSize: '0.86rem',
              fontWeight: '700',
              cursor: 'pointer',
              letterSpacing: '0.2px',
              boxShadow: '0 4px 12px rgba(184,120,22,0.25)',
              transition: 'all 0.2s ease',
              outline: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#9e640e';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#b87816';
            }}
          >
            Book Appointment
          </button>

          {/* Mobile Scrolled Hamburger Button */}
          <button
            className="floating-mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              padding: '0.4rem',
              borderRadius: '8px',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#111827',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE DRAWER MENU (Opens on hamburger click)
      ══════════════════════════════════════════════════════════ */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: isScrolled ? '68px' : '75px',
          left: '1rem',
          right: '1rem',
          maxWidth: '500px',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e5e7eb',
          boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.65rem',
          maxHeight: '75vh',
          overflowY: 'auto',
          zIndex: 1050
        }}>
          {navLinks.map((link) => {
            if (link.isDropdown) {
              const isDropdownActive = activePage === 'provision';
              return (
                <div key={link.id} style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setMobileDropdownOpen((prev) => !prev)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: (mobileDropdownOpen || isDropdownActive) ? '#fdf6ec' : 'transparent',
                      color: (mobileDropdownOpen || isDropdownActive) ? '#b87816' : '#1f2937',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '0.65rem 0.85rem',
                      fontSize: '0.94rem',
                      fontWeight: '700',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Specializations</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: mobileDropdownOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.25s ease',
                        color: (mobileDropdownOpen || isDropdownActive) ? '#b87816' : '#64748b'
                      }}
                    />
                  </button>

                  {mobileDropdownOpen && (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      padding: '0.5rem 0 0.25rem 0.6rem'
                    }}>
                      {SPECIALIZED_PROVISIONS.map((item) => {
                        const Icon = provisionIcons[item.slug] || Paintbrush;
                        return (
                          <button
                            key={item.slug}
                            type="button"
                            onClick={() => handleProvisionClick(item.slug)}
                            style={{
                              textAlign: 'left',
                              background: '#f8fafc',
                              border: '1px solid #eef2f6',
                              borderRadius: '8px',
                              color: '#334155',
                              padding: '0.6rem 0.85rem',
                              fontSize: '0.88rem',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '0.5rem'
                            }}
                          >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                              <Icon size={16} color="#b87816" />
                              <span>{item.name}</span>
                            </span>
                            <ArrowRight size={13} color="#b87816" />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  textAlign: 'left',
                  background: isActive ? '#fdf6ec' : 'transparent',
                  color: isActive ? '#b87816' : '#1f2937',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.55rem 0.75rem',
                  fontSize: '0.94rem',
                  fontWeight: isActive ? '700' : '500',
                  cursor: 'pointer'
                }}
              >
                {link.label}
              </button>
            );
          })}

          <button
            onClick={handleAppointmentClick}
            style={{
              marginTop: '0.65rem',
              background: '#b87816',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.75rem',
              fontWeight: '700',
              fontSize: '0.92rem',
              cursor: 'pointer'
            }}
          >
            Book Appointment
          </button>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          RESPONSIVE STYLES
      ══════════════════════════════════════════════════════════ */}
      <style>{`
        @media (max-width: 1040px) {
          .desktop-capsule-nav {
            display: none !important;
          }
          .floating-desktop-links {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
          .floating-mobile-hamburger {
            display: flex !important;
          }
          .top-site-header {
            padding: 0.85rem 1.25rem !important;
          }
        }
        @media (max-width: 640px) {
          .top-site-header {
            padding: 0.7rem 0.85rem !important;
          }
          .book-appointment-btn {
            padding: 0.5rem 0.9rem !important;
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </>
  );
}
