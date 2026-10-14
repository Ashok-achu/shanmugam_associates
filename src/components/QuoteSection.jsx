import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Sparkles, Home } from 'lucide-react';
import { GET_STARTED_DATA } from '../data/siteData';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
      setTimeout(() => {
        setIsSent(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 5000);
    }, 1200);
  };

  return (
    <section id="get-started" className="section" style={{ background: '#f5f6f7', padding: '6rem 0' }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          {/* Left Column: Services Overview & Crafting Dream Homes */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--primary)',
              fontWeight: '700',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              <Sparkles size={16} /> WHAT WE OFFER
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#2a2c38',
                marginBottom: '1rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                {GET_STARTED_DATA.servicesOverview.title}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '3px',
                  background: 'var(--primary)'
                }} />
              </h3>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: '#555a64'
              }}>
                "{GET_STARTED_DATA.servicesOverview.text}"
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: '700',
                color: '#2a2c38',
                marginBottom: '1rem',
                position: 'relative',
                paddingBottom: '0.5rem'
              }}>
                {GET_STARTED_DATA.craftingHomes.title}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50px',
                  height: '3px',
                  background: 'var(--primary)'
                }} />
              </h3>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: '1.8',
                color: '#555a64'
              }}>
                "{GET_STARTED_DATA.craftingHomes.text}"
              </p>
            </div>

          </div>

          {/* Right Column: Quote Form */}
          <div style={{
            background: '#ffffff',
            padding: '2.75rem 2.5rem',
            borderRadius: '8px',
            boxShadow: '0 15px 35px rgba(0,0,0,0.06)',
            border: '1px solid #e9ecef'
          }}>
            <h3 style={{
              fontSize: '1.85rem',
              fontWeight: '800',
              color: '#2a2c38',
              marginBottom: '0.5rem'
            }}>
              Get a quote
            </h3>
            <p style={{
              fontSize: '0.95rem',
              color: '#6c757d',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {GET_STARTED_DATA.quoteSubtitle}
            </p>

            {isSent ? (
              <div style={{
                background: '#ecfdf5',
                border: '1px solid #10b981',
                padding: '2rem',
                borderRadius: '6px',
                textAlign: 'center',
                color: '#065f46'
              }}>
                <CheckCircle2 size={44} style={{ margin: '0 auto 1rem auto', color: '#10b981' }} />
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>Quote Request Sent!</h4>
                <p style={{ fontSize: '0.95rem' }}>
                  Your message has been sent successfully. Our team at Shanmugam Associates will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      background: '#ffffff',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontSize: '0.95rem',
                      color: '#2a2c38',
                      transition: 'border-color 0.2s',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = '#ced4da'}
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      background: '#ffffff',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontSize: '0.95rem',
                      color: '#2a2c38',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = '#ced4da'}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      background: '#ffffff',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontSize: '0.95rem',
                      color: '#2a2c38',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = '#ced4da'}
                  />
                </div>

                <div>
                  <textarea
                    rows={5}
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.1rem',
                      background: '#ffffff',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontSize: '0.95rem',
                      color: '#2a2c38',
                      resize: 'vertical',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = '#ced4da'}
                  />
                </div>

                <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="btn btn-primary"
                    style={{ 
                      width: '100%', 
                      padding: '0.95rem 2rem',
                      fontSize: '1rem',
                      borderRadius: '4px',
                      fontWeight: '700',
                      letterSpacing: '0.5px',
                      background: 'var(--primary)',
                      border: 'none',
                      cursor: isLoading ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {isLoading ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Loader2 className="animate-spin" size={18} /> Submitting...
                      </span>
                    ) : (
                      'Get a quote'
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
