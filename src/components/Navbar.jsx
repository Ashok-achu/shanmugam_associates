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
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'provision', label: 'Specializations', isDropdown: true },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`main-header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: '#ffffff',
        borderBottom: '1px solid #f1f5f9',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'box-shadow 0.3s ease, padding 0.3s ease',
        padding: isScrolled ? '0.75rem 2rem' : '1.1rem 2.5rem'
      }}
    >
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
      }}>
        
        {/* Brand Logo (Left) */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          role="button"
          tabIndex={0}
          aria-label="Shanmugam Associates Home"
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNavClick('home'); }}
        >
          <img 
            src={logoImg} 
            alt="Shanmugam Associates Logo" 
            className="header-logo-img"
            style={{
              height: isScrolled ? '46px' : '54px',
              maxWidth: '220px',
              width: 'auto',
              objectFit: 'contain',
              transition: 'height 0.3s ease',
              display: 'block'
            }}
          />
        </div>

        {/* Center Pill Capsule Navigation Bar */}
        <nav 
          className="desktop-capsule-nav"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '9999px',
            padding: '0.3rem 0.45rem',
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
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
                      outline: 'none'
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
                    {link.label}
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
                      gap: '0.2rem'
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
                            transition: 'all 0.15s ease'
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
                  padding: isHighlight ? '0.5rem 1.3rem' : '0.5rem 1.15rem',
                  fontSize: '0.92rem',
                  fontWeight: isHighlight ? '700' : '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  outline: 'none'
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

        {/* Right CTA Button (Book Appointment) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <button
            onClick={handleAppointmentClick}
            className="book-appointment-btn"
            style={{
              background: '#b87816',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.72rem 1.65rem',
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
              e.currentTarget.style.boxShadow = '0 6px 18px rgba(184,120,22,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#b87816';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book Appointment
          </button>

          {/* Mobile Hamburger Toggle Button */}
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

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
          padding: '1.5rem 1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.id} style={{ padding: '0.4rem 0' }}>
                  <div style={{
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    color: '#b87816',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem'
                  }}>
                    SPECIALIZATIONS
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', paddingLeft: '0.5rem' }}>
                    {SPECIALIZED_PROVISIONS.map((item) => (
                      <button
                        key={item.slug}
                        onClick={() => handleProvisionClick(item.slug)}
                        style={{
                          textAlign: 'left',
                          background: 'transparent',
                          border: 'none',
                          color: '#374151',
                          padding: '0.4rem 0',
                          fontSize: '0.92rem',
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
                  padding: '0.65rem 0.75rem',
                  fontSize: '0.98rem',
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
              marginTop: '0.75rem',
              background: '#b87816',
              color: '#ffffff',
              border: 'none',
              borderRadius: '9999px',
              padding: '0.85rem',
              fontWeight: '700',
              fontSize: '0.95rem',
              cursor: 'pointer'
            }}
          >
            Book Appointment
          </button>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 980px) {
          .main-header {
            padding: 0.85rem 1.25rem !important;
          }
          .main-header.scrolled {
            padding: 0.65rem 1.25rem !important;
          }
          .desktop-capsule-nav {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: flex !important;
          }
          .book-appointment-btn {
            padding: 0.55rem 1rem !important;
            font-size: 0.82rem !important;
          }
        }
        @media (max-width: 640px) {
          .main-header {
            padding: 0.7rem 0.85rem !important;
          }
          .header-logo-img {
            height: 38px !important;
            max-width: 155px !important;
          }
          .book-appointment-btn {
            padding: 0.5rem 0.85rem !important;
            font-size: 0.78rem !important;
          }
        }
        @media (max-width: 380px) {
          .header-logo-img {
            height: 34px !important;
            max-width: 135px !important;
          }
          .book-appointment-btn {
            padding: 0.45rem 0.7rem !important;
            font-size: 0.74rem !important;
          }
        }
      `}</style>
    </header>
  );
}
