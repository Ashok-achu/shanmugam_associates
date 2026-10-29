import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle 
} from 'lucide-react';
import { COMPANY_INFO, AREAS_SERVED } from '../data/siteData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Interior Painting',
    location: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shanmugam Associates, I would like to enquire about ${formData.service || 'painting/construction'}. Name: ${formData.name || ''}, Phone: ${formData.phone || ''}, Location: ${formData.location || ''}. Details: ${formData.message || ''}`
    );
    window.open(`https://wa.me/919443522285?text=${text}`, '_blank');
  };

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ══════════════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════════════ */}
      <section className="page-hero-section" style={{
        background: 'linear-gradient(135deg, #090e17 0%, #111827 60%, #1e293b 100%)',
        color: '#ffffff',
        padding: '5.5rem 1.5rem 4.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '420px', height: '420px', borderRadius: '50%',
          border: '2px solid rgba(184,120,22,0.18)', pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
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
            Free Consultation & Site Visit
          </div>

          <h1 className="page-hero-h1" style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            Contact Shanmugam Associates
          </h1>

          <p style={{
            fontSize: '1.14rem',
            color: '#cbd5e1',
            maxWidth: '820px',
            lineHeight: 1.75
          }}>
            Whether it is painting a single room, repainting your whole house, waterproofing a leaking terrace, or planning a brand-new construction project, our team is ready to help. After nearly five decades of working across Coimbatore and the surrounding region, we understand that every project starts with a conversation, and we make that first step as simple as possible for you.
          </p>

          <p style={{
            fontSize: '1rem',
            color: '#94a3b8',
            maxWidth: '820px',
            lineHeight: 1.7,
            marginTop: '0.75rem'
          }}>
            You do not need to have every detail figured out before you contact us. Many of our clients start with just a rough idea, a leaking terrace, a room that needs a refresh, or a plot of land they want to build on, and our team helps them work through the details step by step, starting with a free site visit.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTACT DETAILS & INTERACTIVE FORM GRID
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5.5rem 1.5rem 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          
          {/* Left Column: Our Details & Guidance */}
          <div>
            <div style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#b87816',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.6rem'
            }}>
              Direct Channels
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.5rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '1.5rem'
            }}>
              Our Contact Information
            </h2>

            {/* Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              
              {/* Phone */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: '#b87816', color: '#ffffff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Call Us Directly
                  </div>
                  <div style={{ marginTop: '0.2rem' }}>
                    <a href={`tel:${COMPANY_INFO.phonePrimary}`} style={{ fontSize: '1.15rem', fontWeight: '800', color: '#111827', textDecoration: 'none' }}>
                      {COMPANY_INFO.phonePrimary}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'center'
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: '#111827', color: '#ffffff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Email Address
                  </div>
                  <a href={`mailto:${COMPANY_INFO.email}`} style={{ fontSize: '1.05rem', fontWeight: '700', color: '#111827', textDecoration: 'none', wordBreak: 'break-all' }}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.5rem 1.75rem',
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: '#1e293b', color: '#ffffff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: '2px'
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Head Office
                  </div>
                  <div style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.6, marginTop: '0.2rem' }}>
                    {COMPANY_INFO.address}
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '0.86rem', color: '#b87816', fontWeight: '600' }}>
                    Website: {COMPANY_INFO.website}
                  </div>
                </div>
              </div>

            </div>

            {/* Request a Free Site Visit Note */}
            <div style={{
              background: '#fffdf9',
              border: '1px solid #fde68a',
              borderRadius: '16px',
              padding: '1.75rem',
              color: '#451a03'
            }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '0.65rem' }}>
                Request a Free Site Visit
              </h3>
              <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.75 }}>
                Get in touch with us for a free consultation where we listen to what you actually need, an on-site inspection where our team visits your property in person, a clear, honest cost estimate based on what we see and discuss with you, and help planning your project from start to finish, including timelines and material choices.
              </p>
              <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.92rem', lineHeight: 1.75 }}>
                We believe a proper site visit is essential before any accurate quotation can be given. Photographs and phone descriptions can only tell us so much, especially for waterproofing issues, structural work, or larger construction projects, where seeing the actual condition of the property makes a real difference to the advice and pricing we can offer.
              </p>
            </div>

          </div>

          {/* Right Column: Site Details Submission Form */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            padding: '3rem 2.5rem',
            boxShadow: '0 15px 40px rgba(0,0,0,0.06)',
            position: 'relative'
          }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(184,120,22,0.12)',
              color: '#b87816',
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '0.75rem'
            }}>
              No Obligation • No Pressure
            </div>

            <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#111827', marginBottom: '0.5rem' }}>
              Send Us Your Site Details
            </h3>

            <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Planning to paint or build something? Send us your site details and we'll visit, inspect, and give you an honest quotation.
            </p>

            {submitted ? (
              <div style={{
                background: '#ecfdf5',
                border: '1px solid #6ee7b7',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                color: '#065f46'
              }}>
                <CheckCircle2 size={42} color="#059669" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                  Thank You for Reaching Out!
                </h4>
                <p style={{ margin: 0, fontSize: '0.94rem', lineHeight: 1.6 }}>
                  Our team will call you back shortly to understand the requirement and schedule your free site visit.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.96rem',
                      outline: 'none',
                      transition: 'border 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#b87816'}
                    onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 94435 22285"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.96rem',
                        outline: 'none'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#b87816'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.96rem',
                        outline: 'none',
                        background: '#ffffff'
                      }}
                    >
                      <option value="Interior Painting">Interior Painting</option>
                      <option value="Exterior Painting">Exterior Painting</option>
                      <option value="House Painting">House Painting</option>
                      <option value="Commercial Painting">Commercial Painting</option>
                      <option value="Texture Painting">Texture Painting</option>
                      <option value="Waterproofing">Waterproofing</option>
                      <option value="Villa Construction">Villa Construction</option>
                      <option value="Apartment / Commercial">Apartment / Commercial Construction</option>
                      <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                    </select>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.96rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                      Property Location / City
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vadavalli, Coimbatore"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '10px',
                        border: '1px solid #cbd5e1',
                        fontSize: '0.96rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.86rem', fontWeight: '700', color: '#374151', marginBottom: '0.35rem' }}>
                    Site Details / Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe the property, area in sq. ft, existing issues (cracks, dampness, new walls), or preferred starting timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.96rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#b87816'}
                    onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                  />
                </div>

                <div className="cta-button-row" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <button
                    type="submit"
                    style={{
                      flex: 1,
                      background: '#b87816',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.95rem 1.75rem',
                      borderRadius: '10px',
                      fontWeight: '700',
                      fontSize: '0.96rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(184,120,22,0.3)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#9e640e'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#b87816'}
                  >
                    <Send size={16} />
                    <span>Request Free Quotation</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    style={{
                      background: '#25D366',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.95rem 1.5rem',
                      borderRadius: '10px',
                      fontWeight: '700',
                      fontSize: '0.96rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#1eb857'}
                    onMouseLeave={(e) => e.currentTarget.style.background = '#25D366'}
                  >
                    <MessageCircle size={18} />
                    <span>WhatsApp</span>
                  </button>
                </div>

                <div style={{ fontSize: '0.78rem', color: '#94a3b8', textAlign: 'center', marginTop: '0.25rem' }}>
                  We respect your privacy. No spam. You will only be contacted regarding this request.
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DEEP INFORMATION BLOCKS FROM USER CONTENT PLAN
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f8fafc', padding: '5.5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          
          {/* Services & Areas Served */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '2.5rem'
          }}>
            {/* Services We Offer */}
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '2.5rem', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                Services We Offer
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
                Comprehensive construction, surface finishing, and waterproofing under one trusted roof:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {COMPANY_INFO.servicesList.map((srv, idx) => (
                  <span key={idx} style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    color: '#334155',
                    padding: '0.45rem 0.85rem',
                    borderRadius: '8px',
                    fontSize: '0.86rem',
                    fontWeight: '600'
                  }}>
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Areas We Serve */}
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '2.5rem', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                Areas We Serve
              </h3>
              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                We currently take up painting and construction projects across Coimbatore, Tiruppur, Pollachi, Erode, Salem, Mettupalayam, Chennai and the Nilgiris. If you are located within these regions, we would be happy to arrange a site visit at a time convenient for you.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {AREAS_SERVED.map((city, idx) => (
                  <span key={idx} style={{
                    background: 'rgba(184,120,22,0.1)',
                    color: '#b87816',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.84rem',
                    fontWeight: '700'
                  }}>
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* What Happens After You Contact Us */}
          <div style={{ background: '#ffffff', borderRadius: '20px', padding: '3rem 2.5rem', border: '1px solid #e2e8f0' }}>
            <h3 style={{ fontSize: '1.65rem', fontWeight: '800', color: '#111827', marginBottom: '1.25rem' }}>
              What Happens After You Contact Us
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <p style={{ margin: 0 }}>
                Once you reach out, whether by phone or email, our team will get back to you to understand the basics of your requirement and arrange a convenient time for a site visit. During the visit, we inspect the property, discuss your expectations, and answer any questions you may have about materials, timelines, or process. Following this, we prepare a detailed, transparent quotation for your review, with no hidden charges added later. There is never any pressure to commit immediately - we would rather you take the time to review the quotation and feel confident in your decision, because we know that trust built at this stage carries through the entire project.
              </p>
              <p style={{ margin: 0 }}>
                If you decide to move forward, we schedule the work based on your convenience and our team's availability, keeping you updated at each major stage of the project, whether it is a painting job that takes a few days or a construction project that spans several months. Our goal from the very first phone call to the final handover is the same - clear communication, honest work, and a result you are genuinely happy with.
              </p>
            </div>
          </div>

          {/* 3 Guidance Columns: How to Reach Us, Preparing, Serving Beyond */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '2rem'
          }}>
            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827', marginBottom: '0.85rem' }}>
                How to Reach Us
              </h4>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.75, margin: 0 }}>
                A phone call is usually the quickest way to reach our team directly, and we are happy to answer basic questions or arrange a site visit right over the call. If you prefer to explain your requirement in writing, or share photographs, email works well. If you are contacting us on behalf of a builder, developer, or company, please mention this so our team can plan for relevant approval steps and vendor documentation.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827', marginBottom: '0.85rem' }}>
                Preparing for Your Site Visit
              </h4>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.75, margin: 0 }}>
                To make the most of your free site visit, it helps to think through a few basic points: roughly which areas need attention, any specific problems noticed (such as cracks, dampness, or peeling), and a general budget range. For construction projects, having your site documents, approved plans, and family requirements ready helps our team give you specific guidance right away.
              </p>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '16px', padding: '2rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827', marginBottom: '0.85rem' }}>
                Serving Coimbatore & Beyond
              </h4>
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.75, margin: 0 }}>
                While our head office is based in Vadavalli, Coimbatore, our team regularly travels across the wider region to serve clients in Tiruppur, Pollachi, Erode, Salem, Mettupalayam, Chennai, and the Nilgiris. Distance is rarely a barrier for us, especially for larger construction or commercial projects, and we are happy to discuss logistics for your specific location.
              </p>
            </div>
          </div>

          {/* A Team That Values Every Enquiry */}
          <div style={{
            background: 'linear-gradient(135deg, #090e17 0%, #1e293b 100%)',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            color: '#ffffff'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' }}>
              A Team That Values Every Enquiry
            </h3>
            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
              We know that reaching out to a contractor for the first time can feel a little uncertain, especially if you have had a disappointing experience elsewhere before. Every enquiry that comes to Shanmugam Associates, whether it leads to a small repainting job or a large construction contract, is treated with the same respect and attention. We would rather spend a little extra time answering your questions honestly than rush you into a decision you are not fully comfortable with. Nearly fifty years in this business has taught us that trust, built one honest conversation at a time, is what keeps a company going for this long.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
