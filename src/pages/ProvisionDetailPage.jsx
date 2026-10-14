import React from 'react';
import { SPECIALIZED_PROVISIONS, COMPANY_INFO, PAINT_BRANDS } from '../data/siteData';
import { CheckCircle2, ArrowRight, Phone, Mail, Paintbrush, Shield, Clock, Award } from 'lucide-react';

const serviceDetails = {
  'interior-painting': {
    heading: "Interior Painting Services in Coimbatore",
    subheading: "Smooth Finish, Clean Work, and Long-Lasting Colour",
    metaTitle: "Interior Painting Services in Coimbatore | Shanmugam Associates",
    intro: "We give your home or office interior a professional, neat finish that lasts for years. Our team takes care of everything — from preparing the walls and filling cracks to applying multiple coats of the right paint, so you get an even, smooth, and long-lasting result.",
    whatWeOffer: [
      "Interior wall painting for homes, apartments, and offices",
      "Smooth putty finish with proper sanding and levelling",
      "Crack filling and patch repairs before painting",
      "Primer coat application for better adhesion and finish",
      "Two or more coats of good-quality emulsion paint",
      "Ceiling painting in flat white or any colour of your choice",
      "Colour consultation to help choose the right shades",
      "Clean and tidy workmanship — we leave your home neat"
    ],
    process: [
      { step: "01", title: "Surface Inspection", desc: "We inspect all walls for cracks, damp patches, and surface issues." },
      { step: "02", title: "Crack Repair & Preparation", desc: "All cracks and holes are filled and surfaces are sanded smooth." },
      { step: "03", title: "Primer Application", desc: "A coat of primer is applied to seal the surface and improve paint adhesion." },
      { step: "04", title: "Putty & Sanding", desc: "Wall putty is applied and sanded for a glass-smooth finish." },
      { step: "05", title: "Paint Application", desc: "Two coats of high-quality emulsion paint are applied evenly." },
      { step: "06", title: "Final Inspection", desc: "We do a final walk-through with you to ensure everything meets expectations." }
    ],
    whyChoose: [
      "Experienced painters with a careful, professional approach",
      "We use quality, trusted paint brands",
      "On-time completion with clean workmanship",
      "Transparent pricing — no hidden charges",
      "We cover and protect your furniture, flooring, and fittings"
    ],
    faqs: [
      { q: "How long does interior painting usually take?", a: "A 1,000 sq. ft. home typically takes 3 to 5 days depending on wall condition and number of coats." },
      { q: "Do I need to be present during the work?", a: "You don't have to be present at all times, but we recommend being available at the start and end of each day." },
      { q: "Will you cover and protect my furniture?", a: "Yes. We use drop cloths and protective covers to keep your furniture and flooring safe." }
    ]
  },
  'exterior-painting': {
    heading: "Exterior Painting Services in Coimbatore",
    subheading: "Weatherproof Paint Solutions Built for Coimbatore Weather",
    metaTitle: "Exterior Painting Services in Coimbatore | Weatherproof Paint Solutions",
    intro: "The exterior of your building faces the full impact of Coimbatore's sun, dust, and monsoon rain every day. Our exterior painting service uses quality, weather-resistant paints that give your building a fresh look and protect it from damage for years.",
    whatWeOffer: [
      "Exterior wall painting for homes, apartments, and commercial buildings",
      "High-quality weather-resistant and waterproof paints",
      "Power washing and surface cleaning before painting",
      "Crack sealing and surface repair for all exterior walls",
      "Primer and sealer application to protect against dampness",
      "Two-coat or three-coat exterior paint systems",
      "Compound and texture finishes on exterior walls",
      "Work done with safety scaffolding for multi-storey buildings"
    ],
    process: [
      { step: "01", title: "High-Pressure Cleaning", desc: "Exterior walls are jet washed to remove dirt, algae, and old flaking paint." },
      { step: "02", title: "Surface Repair", desc: "Cracks, plaster damage, and joint gaps are sealed with weather-resistant filler." },
      { step: "03", title: "Anti-Efflorescence Primer", desc: "A penetrating primer is applied to resist salt deposits and moisture." },
      { step: "04", title: "Base Coat", desc: "A durable base coat is applied to create a uniform foundation." },
      { step: "05", title: "Topcoat Application", desc: "Weather-resistant topcoat is applied in two coats for maximum protection." },
      { step: "06", title: "Quality Check", desc: "Final inspection to ensure consistent coverage and a clean, even finish." }
    ],
    whyChoose: [
      "We use paints designed for Coimbatore's heat, rain, and dust",
      "Proper scaffolding and safety equipment for tall buildings",
      "Long-lasting finishes with anti-fungal and anti-algae protection",
      "Clean execution without damage to surrounding areas",
      "Competitive, transparent pricing"
    ],
    faqs: [
      { q: "How often does exterior painting need to be redone?", a: "With quality weather-resistant paints and proper preparation, exterior painting typically lasts 5 to 8 years." },
      { q: "Can you work on a building while residents are still inside?", a: "Yes. We plan our work to minimise disruption and ensure safety at all times." }
    ]
  },
  'house-painting': {
    heading: "House Painting Services in Coimbatore",
    subheading: "Complete Home Painting Solutions — New & Repainting",
    metaTitle: "House Painting Services in Coimbatore | New & Repaint Solutions",
    intro: "Whether you're painting a new home for the first time or giving your existing home a fresh coat, we provide complete house painting solutions — inside and outside — at fair, transparent prices. We handle everything so you don't have to worry about a thing.",
    whatWeOffer: [
      "Complete painting packages for new homes — interior and exterior",
      "Repainting of old homes with surface preparation and repair",
      "Villas, independent houses, and apartment units",
      "All rooms, ceilings, doors, windows, and grille painting",
      "Texture and decorative finishes for feature walls",
      "Safe, clean workmanship with full furniture protection",
      "Colour consultation and shade selection guidance",
      "Post-painting cleaning and neat final handover"
    ],
    process: [
      { step: "01", title: "Site Assessment", desc: "We visit your home to assess the scope of work and provide a detailed quotation." },
      { step: "02", title: "Surface Preparation", desc: "All surfaces are prepared — cracks are filled, walls are sanded, and surfaces are primed." },
      { step: "03", title: "Paint Application", desc: "Multiple coats of quality paint are applied for a smooth, even finish." },
      { step: "04", title: "Detailing & Touch-ups", desc: "Edges, corners, and trims are carefully finished for a professional look." },
      { step: "05", title: "Final Walk-through", desc: "We do a final check with you to ensure complete satisfaction before we leave." }
    ],
    whyChoose: [
      "One team handles the entire house — no subcontracting",
      "Transparent, itemised quotation with no surprises",
      "On-time completion as agreed",
      "Quality paints from trusted brands",
      "Clean worksite maintained throughout"
    ],
    faqs: [
      { q: "Do you offer package deals for full home painting?", a: "Yes. We offer attractive package deals for complete interior and exterior painting of homes. Contact us to get a customised quote." },
      { q: "What is the difference between new house painting and repainting?", a: "New house painting starts on fresh plastered walls. Repainting involves additional surface preparation, cleaning, and repair of existing paint layers before applying fresh coats." }
    ]
  },
  'commercial-painting': {
    heading: "Commercial Painting Contractors in Coimbatore",
    subheading: "Offices, Showrooms, Hospitals & Factories",
    metaTitle: "Commercial Painting Contractors in Coimbatore | Offices, Shops & Factories",
    intro: "We provide professional painting services for offices, showrooms, retail outlets, hospitals, schools, factories, and all kinds of commercial spaces in Coimbatore. Our team works efficiently with minimal disruption to your daily business operations.",
    whatWeOffer: [
      "Office and corporate space interior painting",
      "Showroom and retail shop exterior and interior painting",
      "Hospital, clinic, and healthcare facility painting",
      "Industrial factory, warehouse, and shed painting",
      "School, college, and institutional building painting",
      "Government and public building painting",
      "Anti-bacterial and washable paint solutions for healthcare spaces",
      "Weekend or after-hours work to avoid business disruption"
    ],
    process: [
      { step: "01", title: "Site Survey", desc: "We assess your commercial space and understand your business requirements and schedule." },
      { step: "02", title: "Work Planning", desc: "We plan the work in phases to minimise disruption to your business operations." },
      { step: "03", title: "Surface Preparation", desc: "Walls are cleaned, repaired, and primed before painting begins." },
      { step: "04", title: "Professional Painting", desc: "Skilled painters apply the right paint system for the commercial environment." },
      { step: "05", title: "Inspection & Handover", desc: "Final quality check and neat handover so your space is ready to use." }
    ],
    whyChoose: [
      "Experience with government buildings, hospitals, and educational institutions",
      "After-hours and weekend working to avoid business downtime",
      "Washable and durable paint formulations for high-traffic areas",
      "Safe, clean, and organised workmanship",
      "Compliant with quality and safety standards"
    ],
    faqs: [
      { q: "Can you paint a large office building without disrupting our work?", a: "Yes. We plan and schedule work in sections, often working after office hours or on weekends to avoid disruption." },
      { q: "Do you provide anti-bacterial paint for healthcare facilities?", a: "Yes. We use anti-bacterial, washable paint formulations suitable for hospitals, clinics, and healthcare environments." }
    ]
  },
  'texture-painting': {
    heading: "Texture Painting Services in Coimbatore",
    subheading: "Royal Play & Designer Wall Finishes",
    metaTitle: "Texture Painting Services in Coimbatore | Royal Play & Designer Wall Finishes",
    intro: "Texture painting adds personality, style, and depth to your walls, creating a unique look that plain paint simply cannot achieve. We offer a range of texture finishes — from smooth sand textures to bold Royal Play designer patterns — to transform any interior space.",
    whatWeOffer: [
      "Royal Play decorative texture finishes from Asian Paints",
      "Sand texture, rough texture, and smooth plaster finishes",
      "Feature wall designs for living rooms, bedrooms, and offices",
      "3D and relief texture patterns",
      "Venetian plaster and metallic finish effects",
      "Customised colour and texture combinations",
      "Texture on one wall or across an entire room",
      "Expert application by trained and experienced texture artists"
    ],
    process: [
      { step: "01", title: "Design Consultation", desc: "We discuss your style preferences and suggest suitable texture options and colours." },
      { step: "02", title: "Wall Preparation", desc: "The wall surface is prepared, repaired, and primed before texture application." },
      { step: "03", title: "Texture Application", desc: "The selected texture material is applied by hand or tool for the desired effect." },
      { step: "04", title: "Colour & Finishing", desc: "Colours and finishing coats are applied to complete the texture look." },
      { step: "05", title: "Final Review", desc: "We review the result with you and make any adjustments needed." }
    ],
    whyChoose: [
      "Skilled texture artists with experience in Royal Play and designer finishes",
      "Wide range of texture styles and colour options",
      "Careful preparation for a long-lasting texture finish",
      "Transforms ordinary walls into beautiful design features",
      "Competitive pricing for residential and commercial projects"
    ],
    faqs: [
      { q: "How long does texture painting last?", a: "With proper application and surface preparation, texture finishes typically last 7 to 10 years." },
      { q: "Can texture painting be done on just one wall?", a: "Yes. Feature walls with texture are very popular and we can apply texture on a single accent wall while the rest of the room is painted normally." }
    ]
  },
  'waterproofing': {
    heading: "Waterproofing Services in Coimbatore",
    subheading: "Terrace, Roof & Wall Leakage Prevention",
    metaTitle: "Waterproofing Services in Coimbatore | Terrace, Roof & Wall Solutions",
    intro: "Water leakage, seepage, and dampness can damage your building's structure and walls over time. We provide reliable waterproofing solutions for terraces, roofs, walls, basements, and bathrooms to stop leaks and protect your property from water damage.",
    whatWeOffer: [
      "Terrace and flat roof waterproofing",
      "Roof slab waterproofing with membrane or coating systems",
      "Exterior wall and parapet waterproofing",
      "Wet areas — bathroom and kitchen waterproofing",
      "Basement and underground area waterproofing",
      "Repair of existing waterproofing that has failed",
      "Anti-corrosion treatment for exposed concrete structures",
      "Post-waterproofing paint protection coatings"
    ],
    process: [
      { step: "01", title: "Leakage Inspection", desc: "We identify all leak points, seepage sources, and areas of moisture ingress." },
      { step: "02", title: "Surface Preparation", desc: "The area is cleaned, old coatings are removed, and the surface is made ready." },
      { step: "03", title: "Crack Sealing", desc: "All cracks and joints are sealed with waterproofing sealant or cement slurry." },
      { step: "04", title: "Waterproofing Application", desc: "A suitable waterproofing system — membrane, coating, or injection — is applied." },
      { step: "05", title: "Protective Topping", desc: "A screed or protective topping is applied over the waterproofing layer where needed." },
      { step: "06", title: "Water Test", desc: "We test the waterproofed area to ensure complete protection before handover." }
    ],
    whyChoose: [
      "Correct identification and sealing of all leak sources",
      "Use of high-quality waterproofing materials and systems",
      "Experienced team with knowledge of all types of leakage problems",
      "Long-lasting results with proper application",
      "Transparent diagnosis and clear quotation before work begins"
    ],
    faqs: [
      { q: "How long does waterproofing last?", a: "A well-applied waterproofing system typically lasts 5 to 10 years, depending on the type of system used and the level of exposure to water." },
      { q: "My terrace is leaking — how long will it take to fix?", a: "Most terrace waterproofing jobs take 2 to 4 days depending on the area and condition of the slab. We will give you a clear timeline after a site inspection." },
      { q: "Do you provide a warranty for waterproofing?", a: "Yes. We provide a workmanship warranty on our waterproofing jobs. The duration depends on the specific system used and will be specified in your quotation." }
    ]
  }
};

export default function ProvisionDetailPage({ slug, onNavigatePage }) {
  const item = SPECIALIZED_PROVISIONS.find(p => p.slug === slug) || SPECIALIZED_PROVISIONS[0];
  const details = serviceDetails[slug] || serviceDetails['interior-painting'];
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}>

      {/* ══════════════════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════════════════ */}
      <div style={{
        background: `linear-gradient(135deg, rgba(10, 18, 36, 0.92) 0%, rgba(15, 25, 50, 0.88) 100%), url("${item.image}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '6rem 0 4.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '450px', height: '450px', borderRadius: '50%',
          border: '2px solid rgba(184,120,22,0.15)'
        }} />

        <div className="container">
          <button
            onClick={() => onNavigatePage('services')}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.4rem 1rem', borderRadius: '9999px',
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', fontWeight: '600',
              cursor: 'pointer', marginBottom: '1.5rem'
            }}
          >
            ← Back to Services
          </button>

          <div style={{
            display: 'inline-block',
            background: 'rgba(184,120,22,0.2)',
            border: '1px solid rgba(184,120,22,0.45)',
            color: '#f59e0b',
            padding: '0.4rem 1.1rem',
            borderRadius: '9999px',
            fontSize: '0.76rem',
            fontWeight: '700',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            display: 'block', width: 'fit-content'
          }}>
            PAINTING SPECIALIZATION
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '0.75rem',
            lineHeight: 1.15
          }}>
            {details.heading}
          </h1>
          <p style={{
            color: '#f59e0b',
            fontSize: '1.15rem',
            fontWeight: '600',
            marginBottom: '1.25rem'
          }}>
            {details.subheading}
          </p>
          <p style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: '1rem',
            lineHeight: 1.75,
            maxWidth: '700px'
          }}>
            {details.intro}
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 1.75rem', borderRadius: '8px',
                background: '#b87816', color: '#fff', fontWeight: '700',
                fontSize: '0.95rem', textDecoration: 'none'
              }}
            >
              <Phone size={16} /> Call for Free Quote
            </a>
            <button
              onClick={() => onNavigatePage('contact')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 1.75rem', borderRadius: '8px',
                background: 'rgba(255,255,255,0.1)', color: '#fff', fontWeight: '600',
                fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer'
              }}
            >
              Send an Enquiry <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          WHAT WE OFFER + PROCESS
      ══════════════════════════════════════════════════════════ */}
      <div style={{ background: '#ffffff', padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>

            {/* What We Offer */}
            <div>
              <span style={{
                fontSize: '0.75rem', fontWeight: '700', color: '#b87816',
                letterSpacing: '2.5px', textTransform: 'uppercase'
              }}>OUR SCOPE</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: '800', color: '#111827', margin: '0.5rem 0 1.5rem' }}>
                What We Offer
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {details.whatWeOffer.map((point, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
                    padding: '0.85rem 1rem',
                    background: i % 2 === 0 ? '#f8f7f4' : '#ffffff',
                    borderRadius: '10px',
                    border: '1px solid #ede8e0'
                  }}>
                    <CheckCircle2 size={18} color="#b87816" style={{ flexShrink: 0, marginTop: '1px' }} />
                    <span style={{ fontSize: '0.92rem', color: '#374151', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <div style={{ marginTop: '2.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                  Why Choose Shanmugam Associates?
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {details.whyChoose.map((point, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <div style={{
                        width: '6px', height: '6px', borderRadius: '50%',
                        background: '#b87816', flexShrink: 0, marginTop: '7px'
                      }} />
                      <span style={{ fontSize: '0.9rem', color: '#4b5563', lineHeight: 1.6 }}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Process */}
            <div>
              <span style={{
                fontSize: '0.75rem', fontWeight: '700', color: '#b87816',
                letterSpacing: '2.5px', textTransform: 'uppercase'
              }}>HOW WE WORK</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', fontWeight: '800', color: '#111827', margin: '0.5rem 0 1.5rem' }}>
                Our Process
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {details.process.map((step, i) => (
                  <div key={i} style={{
                    display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                    paddingBottom: i < details.process.length - 1 ? '1.25rem' : '0',
                    borderBottom: i < details.process.length - 1 ? '1px solid #f0ebe2' : 'none'
                  }}>
                    <div style={{
                      width: '46px', height: '46px', borderRadius: '12px',
                      background: '#b87816', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: '800', fontSize: '0.88rem', flexShrink: 0
                    }}>
                      {step.step}
                    </div>
                    <div>
                      <div style={{ fontWeight: '700', color: '#111827', fontSize: '0.95rem', marginBottom: '0.3rem' }}>
                        {step.title}
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.65 }}>
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Paint Brands Used */}
              <div style={{
                background: '#0f172a', borderRadius: '16px', padding: '1.75rem',
                marginTop: '2rem'
              }}>
                <h4 style={{ color: '#fff', fontWeight: '700', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Paint Brands We Use
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {PAINT_BRANDS.map((brand, i) => (
                    <span key={i} style={{
                      display: 'inline-block',
                      padding: '0.3rem 0.85rem',
                      borderRadius: '9999px',
                      background: 'rgba(184,120,22,0.15)',
                      border: '1px solid rgba(184,120,22,0.35)',
                      color: '#f59e0b',
                      fontSize: '0.8rem', fontWeight: '600'
                    }}>{brand}</span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          FAQs
      ══════════════════════════════════════════════════════════ */}
      {details.faqs && details.faqs.length > 0 && (
        <div style={{ background: '#f8f7f4', padding: '4.5rem 0' }}>
          <div className="container" style={{ maxWidth: '740px' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#b87816', letterSpacing: '2.5px', textTransform: 'uppercase' }}>QUESTIONS</span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', fontWeight: '800', color: '#111827', marginTop: '0.5rem' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {details.faqs.map((faq, i) => (
                <div key={i} style={{
                  background: '#ffffff', borderRadius: '12px',
                  border: openFaq === i ? '1.5px solid #b87816' : '1.5px solid #e5e7eb',
                  overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
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
                    <span style={{
                      fontSize: '1.3rem', fontWeight: '300', color: openFaq === i ? '#b87816' : '#9ca3af',
                      flexShrink: 0
                    }}>
                      {openFaq === i ? '−' : '+'}
                    </span>
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
      )}

      {/* ══════════════════════════════════════════════════════════
          CTA STRIP
      ══════════════════════════════════════════════════════════ */}
      <div style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e2a3a 100%)',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{
            display: 'inline-block',
            background: 'rgba(184,120,22,0.15)',
            border: '1px solid rgba(184,120,22,0.3)',
            color: '#f59e0b',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.76rem', fontWeight: '700',
            letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.25rem'
          }}>
            GET STARTED
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: '800', color: '#ffffff', marginBottom: '0.75rem' }}>
            Ready to Get a Free Quote?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '520px', margin: '0 auto 2rem' }}>
            Call us or send a message. We'll arrange a free site visit and provide a detailed, transparent quotation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s/g, '')}`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: '8px',
                background: '#b87816', color: '#fff', fontWeight: '700',
                fontSize: '0.95rem', textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(184,120,22,0.4)'
              }}
            >
              <Phone size={17} /> {COMPANY_INFO.phonePrimary}
            </a>
            <button
              onClick={() => onNavigatePage('contact')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: '8px',
                background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: '600',
                fontSize: '0.95rem', border: '1px solid rgba(255,255,255,0.25)', cursor: 'pointer'
              }}
            >
              <Mail size={17} /> Send Enquiry
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
