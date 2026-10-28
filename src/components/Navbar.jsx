import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { SPECIALIZED_PROVISIONS } from '../data/siteData';
import logoImg from '../assets/logo/logo3.png';

export default function Navbar({ activePage, setActivePage, setSelectedProvision }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      style={{
                        background: isDropdownActive ? '#fdf6ec' : 'transparent',
                        color: isDropdownActive ? '#b87816' : '#4b5563',
                        border: 'none',
                        borderRadius: '9999px',
                        padding: '0.5rem 1.15rem',
                        fontSize: '0.92rem',
                        fontWeight: isDropdownActive ? '700' : '500',
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
                        if (!isDropdownActive) {
                          e.currentTarget.style.color = '#111827';
                          e.currentTarget.style.background = '#f9fafb';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isDropdownActive) {
                          e.currentTarget.style.color = '#4b5563';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={14} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                    </button>

                    {/* Dropdown Menu */}
                    {dropdownOpen && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '16px',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
                        padding: '0.5rem',
                        minWidth: '220px',
                        zIndex: 1100,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                        whiteSpace: 'nowrap'
                      }}>
                        {SPECIALIZED_PROVISIONS.map((item) => (
                          <button
                            key={item.slug}
                            onClick={() => handleProvisionClick(item.slug)}
                            style={{
                              textAlign: 'left',
                              padding: '0.65rem 1rem',
                              borderRadius: '10px',
                              background: 'transparent',
                              color: '#374151',
                              fontSize: '0.9rem',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.15s ease',
                              whiteSpace: 'nowrap'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#fdf6ec';
                              e.currentTarget.style.color = '#b87816';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#374151';
                            }}
                          >
                            <span>{item.name}</span>
                            <ArrowRight size={13} opacity={0.6} />
                          </button>
                        ))}
                      </div>
                    )}
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
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      style={{
                        background: isDropdownActive ? '#fdf6ec' : 'transparent',
                        color: isDropdownActive ? '#b87816' : '#4b5563',
                        border: 'none',
                        borderRadius: '9999px',
                        padding: '0.45rem 0.9rem',
                        fontSize: '0.88rem',
                        fontWeight: isDropdownActive ? '700' : '500',
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
                        if (!isDropdownActive) {
                          e.currentTarget.style.color = '#111827';
                          e.currentTarget.style.background = '#f3f4f6';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isDropdownActive) {
                          e.currentTarget.style.color = '#4b5563';
                          e.currentTarget.style.background = 'transparent';
                        }
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={13} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                    </button>

                    {/* Floating Dropdown Menu */}
                    {dropdownOpen && (
                      <div style={{
                        position: 'absolute',
                        top: 'calc(100% + 10px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '16px',
                        boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
                        padding: '0.5rem',
                        minWidth: '220px',
                        zIndex: 1100,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                        whiteSpace: 'nowrap'
                      }}>
                        {SPECIALIZED_PROVISIONS.map((item) => (
                          <button
                            key={item.slug}
                            onClick={() => handleProvisionClick(item.slug)}
                            style={{
                              textAlign: 'left',
                              padding: '0.6rem 0.95rem',
                              borderRadius: '10px',
                              background: 'transparent',
                              color: '#374151',
                              fontSize: '0.88rem',
                              fontWeight: '500',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              transition: 'all 0.15s ease',
                              whiteSpace: 'nowrap'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = '#fdf6ec';
                              e.currentTarget.style.color = '#b87816';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#374151';
                            }}
                          >
                            <span>{item.name}</span>
                            <ArrowRight size={13} opacity={0.6} />
                          </button>
                        ))}
                      </div>
                    )}
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
              return (
                <div key={link.id} style={{ padding: '0.3rem 0' }}>
                  <div style={{
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    color: '#b87816',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem'
                  }}>
                    SPECIALIZATIONS
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', paddingLeft: '0.5rem' }}>
                    {SPECIALIZED_PROVISIONS.map((item) => (
                      <button
                        key={item.slug}
                        onClick={() => handleProvisionClick(item.slug)}
                        style={{
                          textAlign: 'left',
                          background: 'transparent',
                          border: 'none',
                          color: '#374151',
                          padding: '0.35rem 0',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          cursor: 'pointer'
                        }}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
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
