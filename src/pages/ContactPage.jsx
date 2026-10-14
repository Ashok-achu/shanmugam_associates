import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { COMPANY_INFO, AREAS_SERVED } from '../data/siteData';

const contactFaqs = [
  {
    q: "Do you provide free site visits and quotations?",
    a: "Yes. We offer free site visits, inspections, and detailed project quotations — with no obligation. Our project manager will assess the scope, understand your requirements, and provide a transparent cost estimate."
  },
  {
    q: "How quickly can you start work after confirmation?",
    a: "Depending on project size and our current schedule, we typically begin work within 3 to 7 days of confirmation. For urgent projects, we do our best to accommodate faster timelines."
  },
  {
    q: "Do you take up projects outside Coimbatore?",
    a: "Yes. We serve clients across Coimbatore, Tiruppur, Pollachi, Erode, Salem, Mettupalayam, Chennai, and The Nilgiris."
  },
  {
    q: "What information should I have ready when I contact you?",
    a: "It helps to have the property type (house, apartment, office, etc.), rough size in square feet, the type of work required (painting, waterproofing, construction, etc.), and your preferred timeline. This helps us give you a faster, more accurate quotation."
  },
  {
    q: "Can I get a quotation over the phone or WhatsApp?",
    a: "For simple painting jobs, we can often give a preliminary estimate over the phone. For larger or more complex projects, a site visit ensures the quotation is accurate. WhatsApp enquiries are welcome at 94435 22285."
  }
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      {/* SEO Meta (in a real app use react-helmet) */}
      <div>
        {/* ══════════════════════════════════════════════════════════
            HERO BANNER
        ══════════════════════════════════════════════════════════ */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
          padding: '5.5rem 0 4rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative background ring */}
          <div style={{
            position: 'absolute', top: '-80px', right: '-80px',
            width: '400px', height: '400px', borderRadius: '50%',
            border: '2px solid rgba(184,120,22,0.15)', pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', bottom: '-60px', left: '-60px',
            width: '300px', height: '300px', borderRadius: '50%',
            border: '1px solid rgba(184,120,22,0.1)', pointerEvents: 'none'
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(184,120,22,0.15)',
              border: '1px solid rgba(184,120,22,0.4)',
              color: '#f59e0b',
              padding: '0.4rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: '700',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              marginBottom: '1.25rem'
            }}>
              GET IN TOUCH
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: '800',
              color: '#ffffff',
              marginBottom: '1rem',
              lineHeight: 1.2
            }}>
              Contact <span style={{ color: '#b87816' }}>Shanmugam Associates</span>
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '580px',
              margin: '0 auto 2rem',
              fontSize: '1.05rem',
              lineHeight: 1.7
            }}>
              Have a project in mind? Call us, send a message, or visit our office. Our team is ready to help with any painting, construction, or waterproofing requirement.
            </p>

            {/* Quick CTA Buttons */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 1.75rem', borderRadius: '8px',
                  background: '#b87816', color: '#fff', fontWeight: '700',
                  fontSize: '0.95rem', textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(184,120,22,0.4)'
                }}
              >
                <Phone size={16} /> {COMPANY_INFO.phonePrimary}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 1.75rem', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: '600',
                  fontSize: '0.95rem', textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}
              >
                <Mail size={16} /> Email Us
              </a>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            CONTACT INFO CARDS ROW
        ══════════════════════════════════════════════════════════ */}
        <div style={{ background: '#f8f7f4', padding: '3rem 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  icon: MapPin, color: '#b87816',
                  label: 'Office Address',
                  value: 'No.5, Mariamman Kovil Street, Vadavalli, Coimbatore – 641041'
                },
                {
                  icon: Phone, color: '#b87816',
                  label: 'Phone Numbers',
                  value: `${COMPANY_INFO.phonePrimary}  /  ${COMPANY_INFO.phoneSecondary}`,
                  href: `tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`
                },
                {
                  icon: Mail, color: '#b87816',
                  label: 'Email Address',
                  value: COMPANY_INFO.email,
                  href: `mailto:${COMPANY_INFO.email}`
                },
                {
                  icon: Clock, color: '#b87816',
                  label: 'Working Hours',
                  value: 'Monday – Saturday: 9:00 AM – 7:00 PM'
                }
              ].map((card, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #e8e0d0',
                  borderRadius: '14px',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)'
                }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    background: 'rgba(184,120,22,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    <card.icon size={20} color={card.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#b87816', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                      {card.label}
                    </div>
                    {card.href ? (
                      <a href={card.href} style={{ fontSize: '0.9rem', color: '#111827', fontWeight: '500', textDecoration: 'none', lineHeight: 1.5 }}>
                        {card.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.5, margin: 0 }}>{card.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            MAIN SECTION: FORM + MAP
        ══════════════════════════════════════════════════════════ */}
        <div style={{ background: '#ffffff', padding: '5rem 0' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '3.5rem',
              alignItems: 'start'
            }}>

              {/* ── LEFT: Contact Form ─────────────────── */}
              <div>
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: '700', color: '#b87816',
                    letterSpacing: '2.5px', textTransform: 'uppercase'
                  }}>SEND A MESSAGE</span>
                  <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: '800', color: '#111827', marginTop: '0.5rem' }}>
                    Request a Free Quote
                  </h2>
                  <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.7, marginTop: '0.5rem' }}>
                    Fill in the form and our team will get back to you within 24 hours with a detailed, no-obligation quotation.
                  </p>
                </div>

                {submitted ? (
                  <div style={{
                    background: 'rgba(16,185,129,0.06)',
                    border: '1.5px solid #10b981',
                    padding: '2.5rem',
                    borderRadius: '16px',
                    textAlign: 'center'
                  }}>
                    <CheckCircle2 size={52} color="#10b981" style={{ margin: '0 auto 1rem auto' }} />
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#111827', marginBottom: '0.5rem' }}>
                      Message Received!
                    </h4>
                    <p style={{ color: '#374151', fontSize: '0.95rem', lineHeight: 1.7 }}>
                      Thank you for reaching out to Shanmugam Associates. We'll contact you within 24 hours to discuss your project.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div className="form-row-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rajan Kumar"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            width: '100%', padding: '0.8rem 1rem',
                            border: '1.5px solid #e5e7eb', borderRadius: '8px',
                            fontSize: '0.9rem', color: '#111827', background: '#fafafa',
                            outline: 'none', boxSizing: 'border-box'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 98765 43210"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: '100%', padding: '0.8rem 1rem',
                            border: '1.5px solid #e5e7eb', borderRadius: '8px',
                            fontSize: '0.9rem', color: '#111827', background: '#fafafa',
                            outline: 'none', boxSizing: 'border-box'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rajan@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%', padding: '0.8rem 1rem',
                          border: '1.5px solid #e5e7eb', borderRadius: '8px',
                          fontSize: '0.9rem', color: '#111827', background: '#fafafa',
                          outline: 'none', boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                        Service Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          width: '100%', padding: '0.8rem 1rem',
                          border: '1.5px solid #e5e7eb', borderRadius: '8px',
                          fontSize: '0.9rem', color: '#374151', background: '#fafafa',
                          outline: 'none', boxSizing: 'border-box'
                        }}
                      >
                        <option value="">Select a service...</option>
                        <option>Interior Painting</option>
                        <option>Exterior Painting</option>
                        <option>House Painting</option>
                        <option>Commercial Painting</option>
                        <option>Texture Painting / Royal Play</option>
                        <option>Waterproofing</option>
                        <option>Construction (Villa / Apartment)</option>
                        <option>Renovation &amp; Remodeling</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: '600', color: '#374151', marginBottom: '0.4rem' }}>
                        Project Details *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Describe your project — property type, size, location, and any specific requirements..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%', padding: '0.8rem 1rem',
                          border: '1.5px solid #e5e7eb', borderRadius: '8px',
                          fontSize: '0.9rem', color: '#111827', background: '#fafafa',
                          outline: 'none', resize: 'vertical', boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                        padding: '0.95rem 2rem', borderRadius: '8px',
                        background: '#b87816', color: '#fff', fontWeight: '700',
                        fontSize: '1rem', border: 'none', cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(184,120,22,0.35)',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = '#9e640e'}
                      onMouseLeave={e => e.currentTarget.style.background = '#b87816'}
                    >
                      Send Message <Send size={18} />
                    </button>
                  </form>
                )}
              </div>

              {/* ── RIGHT: Map + Areas Served ─────────────────── */}
              <div>
                {/* Google Map Embed */}
                <div style={{ marginBottom: '2rem' }}>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: '700', color: '#b87816',
                    letterSpacing: '2.5px', textTransform: 'uppercase'
                  }}>FIND US</span>
                  <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.9rem)', fontWeight: '800', color: '#111827', marginTop: '0.5rem', marginBottom: '1rem' }}>
                    Our Office Location
                  </h2>
                  <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1.5px solid #e5e7eb', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                    <iframe
                      title="Shanmugam Associates Office Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.8978504539655!2d76.9309!3d11.0042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzE1LjIiTiA3NsKwNTUnNTEuMiJF!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
                      width="100%"
                      height="280"
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div style={{
                    background: '#f8f7f4', borderRadius: '0 0 16px 16px',
                    padding: '1rem 1.25rem',
                    border: '1.5px solid #e5e7eb', borderTop: 'none',
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem'
                  }}>
                    <MapPin size={18} color="#b87816" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontWeight: '700', color: '#111827', fontSize: '0.9rem' }}>Shanmugam Associates</div>
                      <div style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6 }}>
                        No.5, Ground Floor, First Portion, Mariamman Kovil Street,<br />
                        Bommanapalayam, Vadavalli, Coimbatore – 641041, Tamil Nadu
                      </div>
                    </div>
                  </div>
                </div>

                {/* Areas Served */}
                <div style={{
                  background: '#0f172a',
                  borderRadius: '16px',
                  padding: '2rem',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <MapPin size={18} color="#b87816" />
                    Areas We Serve
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                    {AREAS_SERVED.map((area, i) => (
                      <span
                        key={i}
                        style={{
                          display: 'inline-block',
                          padding: '0.35rem 0.9rem',
                          borderRadius: '9999px',
                          background: 'rgba(184,120,22,0.15)',
                          border: '1px solid rgba(184,120,22,0.35)',
                          color: '#f59e0b',
                          fontSize: '0.82rem',
                          fontWeight: '600'
                        }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', marginTop: '1rem', lineHeight: 1.6 }}>
                    We visit project sites and take up work across all the above locations. Call us to confirm availability for your area.
                  </p>
                </div>

                {/* WhatsApp CTA */}
                <a
                  href={`https://wa.me/919443522285?text=Hello%2C%20I%20would%20like%20to%20get%20a%20free%20quotation%20from%20Shanmugam%20Associates.`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
                    padding: '1rem 1.5rem', borderRadius: '12px',
                    background: '#25d366', color: '#fff', fontWeight: '700',
                    fontSize: '0.95rem', textDecoration: 'none',
                    boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#1cb956'}
                  onMouseLeave={e => e.currentTarget.style.background = '#25d366'}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp — 94435 22285
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            CONTACT FAQS
        ══════════════════════════════════════════════════════════ */}
        <div style={{ background: '#f8f7f4', padding: '5rem 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span style={{
                fontSize: '0.75rem', fontWeight: '700', color: '#b87816',
                letterSpacing: '2.5px', textTransform: 'uppercase'
              }}>QUESTIONS</span>
              <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: '800', color: '#111827', marginTop: '0.5rem' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactFaqs.map((faq, i) => (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: openFaq === i ? '1.5px solid #b87816' : '1.5px solid #e5e7eb',
                    overflow: 'hidden',
                    transition: 'border-color 0.25s ease',
                    boxShadow: openFaq === i ? '0 4px 20px rgba(184,120,22,0.1)' : '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: '100%', padding: '1.25rem 1.5rem',
                      background: 'transparent', border: 'none', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      gap: '1rem', textAlign: 'left'
                    }}
                  >
                    <span style={{ fontWeight: '700', color: '#111827', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      {faq.q}
                    </span>
                    {openFaq === i
                      ? <ChevronUp size={20} color="#b87816" style={{ flexShrink: 0 }} />
                      : <ChevronDown size={20} color="#9ca3af" style={{ flexShrink: 0 }} />
                    }
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: '0 1.5rem 1.25rem', color: '#374151', fontSize: '0.92rem', lineHeight: 1.75 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            BOTTOM CTA STRIP
        ══════════════════════════════════════════════════════════ */}
        <div style={{
          background: '#b87816',
          padding: '3rem 0',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 style={{ color: '#fff', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: '800', marginBottom: '0.75rem' }}>
              Ready to Start? We're Just a Call Away.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.75rem', fontSize: '1rem' }}>
              Call us to schedule a free site visit and get a detailed quotation — no commitment required.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
                style={{
                  padding: '0.9rem 2rem', borderRadius: '8px',
                  background: '#fff', color: '#b87816', fontWeight: '700',
                  fontSize: '1rem', textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                }}>
                <Phone size={18} /> {COMPANY_INFO.phonePrimary}
              </a>
              <a href={`tel:${COMPANY_INFO.phoneSecondary.replace(/\s/g, '')}`}
                style={{
                  padding: '0.9rem 2rem', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.15)', color: '#fff', fontWeight: '700',
                  fontSize: '1rem', textDecoration: 'none', border: '2px solid rgba(255,255,255,0.5)',
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem'
                }}>
                <Phone size={18} /> {COMPANY_INFO.phoneSecondary}
              </a>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 600px) {
            .form-row-2col {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

      </div>
    </>
  );
}
