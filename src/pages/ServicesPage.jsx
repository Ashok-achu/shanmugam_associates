import React, { useState } from 'react';
import { 
  Paintbrush, 
  Home, 
  Building, 
  Building2, 
  Layers, 
  Brush, 
  ShieldCheck, 
  Palette, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Award, 
  FileText,
  Phone,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

export default function ServicesPage({ onNavigatePage, initialServiceId }) {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || 1);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      id: 1,
      title: "Interior Painting & Luxury Emulsions",
      subtitle: "Transforming interiors with dust-free application and washable, velvet-smooth luxury finishes.",
      icon: Paintbrush,
      badge: "Most Popular",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      overview: "Our interior painting services are tailored to create stunning, healthy, and serene living environments. Using low-VOC and zero-odor paints, our experienced team ensures your family or office staff can occupy the space comfortably immediately after completion.",
      specs: [
        { label: "Recommended Brands", value: "Asian Paints Royale, Berger Silk Glamor, Nippon Spotless" },
        { label: "Sheen Options", value: "Ultra Matte, Soft Sheen, Satin, High Gloss" },
        { label: "Coats Applied", value: "1 Primer + 2 Putty + 2 Luxury Topcoats" },
        { label: "Durability & Warranty", value: "5 to 8-year manufacturer-backed durability" },
        { label: "Washability", value: "100% washable & stain-resistant formulation" }
      ],
      scope: [
        "Complete surface masking of floors, light fixtures, switchboards, and furniture",
        "Deep crack filling with polymeric masonry compounds and water-resistant primer",
        "Two passes of laser-sanded acrylic putty for an immaculate, mirror-smooth base",
        "Airless spray or motorized roller application for uniform film thickness",
        "Post-painting thorough cleaning, touch-up check, and client sign-off"
      ],
      process: [
        { step: "01", title: "Moisture & Wall Check", desc: "Digital moisture meter test to detect underlying dampness before primer application." },
        { step: "02", title: "Masking & Protection", desc: "High-grade cling films and heavy drop cloths protect all flooring and furnishings." },
        { step: "03", title: "Double-Coat Putty", desc: "Machine sanding ensures a glass-like substrate with zero unevenness or pinholes." },
        { step: "04", title: "Dual Topcoat Finish", desc: "Precision roller application of curated color palettes with strict drying intervals." }
      ]
    },
    {
      id: 2,
      title: "Exterior Weather-Shield & Facade Protection",
      subtitle: "Heavy-duty elastomeric coatings designed to withstand extreme tropical sunlight and monsoon rains.",
      icon: Home,
      badge: "High Durability",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      overview: "Exterior walls endure scorching UV radiation, biological growth, and monsoon rains. Our exterior weather-proofing solutions utilize modified acrylic elastomers that bridge structural micro-cracks and reflect heat, keeping your building up to 5°C cooler.",
      specs: [
        { label: "Recommended Brands", value: "Asian Paints Apex Ultima Protek, Berger WeatherCoat Long Life, Dulux Weathershield" },
        { label: "Elongation Capacity", value: "Up to 300% crack-bridging elasticity" },
        { label: "Anti-Algal Warranty", value: "Up to 10-year anti-fungal & algae resistance" },
        { label: "Heat Reflective", value: "SRI > 100 high solar reflectance index" },
        { label: "Execution Method", value: "High-pressure jet wash + mechanized roller & spray" }
      ],
      scope: [
        "150-bar high-pressure power washing to remove moss, algae, and flaking layers",
        "V-groove crack treatment with specialized elastomeric sealants",
        "Penetrative anti-efflorescence exterior masonry primer",
        "Base coat with reinforced fiber mesh for parapets and high-exposure areas",
        "Dual topcoats of cross-linking elastomeric exterior emulsion"
      ],
      process: [
        { step: "01", title: "Surface Jet Washing", desc: "High-pressure wash eliminates biological spores and airborne carbon deposits." },
        { step: "02", title: "Structural Sealing", desc: "Polymer-modified grout permanently seals plaster fissures and joint lines." },
        { step: "03", title: "Penetrative Sealer", desc: "Binds loose particles and locks out alkaline salt efflorescence from brickwork." },
        { step: "04", title: "Weatherproof Coating", desc: "Two cross-linking coats form a flexible, waterproof protective membrane." }
      ]
    },
    {
      id: 3,
      title: "Residential Turnkey Painting & Villas",
      subtitle: "Full-home transformation packages with dedicated site engineers, color consultations, and strict milestones.",
      icon: Building,
      badge: "Turnkey",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200&auto=format&fit=crop",
      overview: "Designed for discerning homeowners, our turnkey residential packages cover complete interior, exterior, wood polishing, metal gates, and decorative accents. We assign a dedicated site supervisor to ensure daily updates and timely handover.",
      specs: [
        { label: "Scope Coverage", value: "Interior + Exterior + Wood Enamel + Metal PU" },
        { label: "Supervision", value: "Dedicated on-site engineer & daily photo reporting" },
        { label: "Color Consultancy", value: "Complimentary 3D digital visualization & on-wall swatch trials" },
        { label: "Timeline Guarantee", value: "Fixed completion milestone with zero overrun" },
        { label: "Warranty", value: "Written comprehensive material + workmanship warranty" }
      ],
      scope: [
        "Comprehensive site inspection, moisture diagnostic, and architectural review",
        "Curated interior color scheme tailored to natural lighting and interior decor",
        "PU wood finishes for main doors, window frames, and decorative moldings",
        "High-gloss rust-inhibitive coatings for compound gates and balcony railings",
        "Deep handover clean and touch-up handover kit for future use"
      ],
      process: [
        { step: "01", title: "Diagnostic Survey", desc: "Detailed room-by-room assessment and moisture measurement report." },
        { step: "02", title: "Color & Sheen Curation", desc: "Selection of harmonious palettes with live sample swatches on your walls." },
        { step: "03", title: "Staged Execution", desc: "Zoned painting schedule so your household routine is never disrupted." },
        { step: "04", title: "Snag-Free Handover", desc: "Multi-point quality sign-off with certificate of warranty." }
      ]
    },
    {
      id: 4,
      title: "Commercial & Industrial Painting",
      subtitle: "Large-format painting for tech parks, commercial complexes, healthcare centers, and industrial plants.",
      icon: Building2,
      badge: "High Volume",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      overview: "Commercial properties demand strict compliance with industrial safety protocols, heavy durability, and zero disruption to business operations. Shanmugam Associates provides certified scaffolding, night-shift crews, and corrosion-resistant coatings.",
      specs: [
        { label: "Applications", value: "Offices, Retail Hubs, Hospitals, Tech Parks, Warehouses" },
        { label: "Safety Standards", value: "OSHA-compliant harnesses, scaffolding, and PPE" },
        { label: "Shift Flexibility", value: "Off-hours, weekends, or night-shift execution" },
        { label: "Coating Types", value: "Anti-corrosive, Fire-retardant, Anti-microbial, Heavy Duty PU" },
        { label: "Project Capacity", value: "Handled up to 2,00,000+ sq. ft. commercial campuses" }
      ],
      scope: [
        "High-rise façade painting via suspended cradles and motorized boom lifts",
        "Anti-microbial and washable wall coatings for hospitals and cleanrooms",
        "Heavy-duty epoxy coatings for plant machinery bases and structural steel",
        "Fire-retardant intumescent paint for building safety compliance",
        "Zoned logistics planning for seamless ongoing tenant operations"
      ],
      process: [
        { step: "01", title: "Safety & Method Plan", desc: "Site hazard analysis and certified scaffolding plan submission." },
        { step: "02", title: "Substrate Remediation", desc: "Chemical de-greasing, rust removal, and shot blasting where needed." },
        { step: "03", title: "Mechanized Coating", desc: "High-output airless spray guns deliver uniform mils thickness." },
        { step: "04", title: "Compliance Sign-off", desc: "Adhesion testing, DFT gauge measurement, and safety audits." }
      ]
    },
    {
      id: 5,
      title: "Texture Painting & Designer Finishes",
      subtitle: "Artisanal textures, metallic glazes, Venetian plaster, and custom decorative accents.",
      icon: Layers,
      badge: "Artisanal",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      overview: "Elevate feature walls into stunning conversation pieces. Our master artisans craft bespoke finishes including Italian stucco, metallic washes, raw concrete aesthetics, sandstone textures, and geometrical stencil patterns.",
      specs: [
        { label: "Popular Styles", value: "Venetian Stucco, Raw Concrete, Metallic Spatula, Dune Sand" },
        { label: "Application Tools", value: "Italian stainless steel trowels, specialized rollers, sea sponges" },
        { label: "Sealing Layer", value: "Clear polyurethane or wax glaze for water repellency" },
        { label: "Ideal For", value: "Living room backdrops, master bedrooms, foyer niches, boardrooms" },
        { label: "Longevity", value: "10+ years without peeling or color degradation" }
      ],
      scope: [
        "Preparation of level-5 gypsum or plaster substrate for seamless base",
        "Layer-by-layer application of specialized lime or acrylic texture compounds",
        "Artisanal burnishing to achieve desired depth, gloss, and optical movement",
        "Top protective wax or acrylic sealant to guard against fingerprints and grime",
        "Custom color formulation matched with interior designer specifications"
      ],
      process: [
        { step: "01", title: "Texture Sample Board", desc: "Custom mock-up board created on-site for lighting and tactile approval." },
        { step: "02", title: "Base Coat Priming", desc: "High-adhesion quartz primer creates micro-tooth for texture grip." },
        { step: "03", title: "Trowel Application", desc: "Trained craftsmen apply multi-pass texture with rhythmic stroke patterns." },
        { step: "04", title: "Burnish & Protective Seal", desc: "Hand-burnishing reveals metallic sheen followed by protective clear sealer." }
      ]
    },
    {
      id: 6,
      title: "Surface Preparation, Waterproofing & Putty",
      subtitle: "The unseen foundation of every durable paint job: damp proofing, crack injection, and laser sanding.",
      icon: Brush,
      badge: "Essential",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200&auto=format&fit=crop",
      overview: "90% of paint failures occur due to improper surface preparation or hidden wall moisture. At Shanmugam Associates, we treat every wall as an engineering substrate — eliminating moisture seepage, efflorescence, and hollow plaster before applying any paint.",
      specs: [
        { label: "Moisture Diagnosis", value: "Non-destructive digital pin moisture mapping" },
        { label: "Waterproofing Systems", value: "Polyurethane coatings, crystalline injection, acrylic polymers" },
        { label: "Putty Grade", value: "White cement polymer putty + water-resistant base" },
        { label: "Sanding Method", value: "Dustless motorized rotary sanders with HEPA vacuum" },
        { label: "Crack Bridging", value: "Elastomeric joint tape + fiber reinforced mastic" }
      ],
      scope: [
        "Chipping of dead plaster and chemical treatment of salt efflorescence",
        "Negative side and positive side damp-proofing of exterior-facing walls",
        "Application of double-coat white cement based water-resistant putty",
        "Motorized sanding for zero optical distortion under spotlighting",
        "Deep-penetrating acrylic sealer application to balance substrate porosity"
      ],
      process: [
        { step: "01", title: "Moisture Mapping", desc: "Locate active leaks, rising dampness, and plumbing seepage points." },
        { step: "02", title: "Substrate Rectification", desc: "Remove chalking layers, treat fungal spores with bio-wash solution." },
        { step: "03", title: "Waterproofing Barrier", desc: "Apply high-performance membrane to stop hydrostatic water pressure." },
        { step: "04", title: "Laser Putty Leveling", desc: "Two thin coats of polymer putty followed by motorized dust-free sanding." }
      ]
    },
    {
      id: 7,
      title: "Epoxy Flooring & High-Traffic Resins",
      subtitle: "Seamless, chemical-resistant, and mirror-finish epoxy floors for parking, showrooms, and cleanrooms.",
      icon: ShieldCheck,
      badge: "Heavy Duty",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
      overview: "Transform concrete floors into high-performance, seamless surfaces that resist heavy machinery, oil spills, and continuous pedestrian traffic. Our self-leveling epoxy and polyurethane flooring solutions combine durability with architectural aesthetics.",
      specs: [
        { label: "Thickness Range", value: "1.0 mm to 4.0 mm self-leveling resin" },
        { label: "Compressive Strength", value: "> 60 N/mm² (exceeds concrete grade)" },
        { label: "Chemical Resistance", value: "Resistant to oils, brake fluids, mild acids, and detergents" },
        { label: "Finish Variations", value: "High Gloss, Matte, Anti-slip quartz broadcast, Flake decorative" },
        { label: "Cure Time", value: "Light foot traffic in 24 hrs; full load in 72 hrs" }
      ],
      scope: [
        "Diamond grinding or shot blasting of concrete substrate to achieve CSP-3 profile",
        "Epoxy mortar patching for pinholes, spalls, and expansion joints",
        "Penetrating 100% solids epoxy primer to lock substrate porosity",
        "Pigmented self-leveling resin slurry spread with notched squeegees",
        "Optional UV-stable aliphatic polyurethane topcoat for outdoor light stability"
      ],
      process: [
        { step: "01", title: "Mechanical Grinding", desc: "Opens concrete pores and removes laitance for maximum resin adhesion." },
        { step: "02", title: "Epoxy Priming", desc: "High-solid primer deeply penetrates and seals moisture transmission." },
        { step: "03", title: "Self-Leveling Pour", desc: "Specialist troweling releases air bubbles using spiked roller tools." },
        { step: "04", title: "Topcoat Curing", desc: "Applied under temperature control for a mirror-like hygienic finish." }
      ]
    },
    {
      id: 8,
      title: "Complete Painting Consultation & Execution",
      subtitle: "End-to-end project management from architectural design consultation to guaranteed on-time delivery.",
      icon: Palette,
      badge: "Advisory",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
      overview: "Avoid guesswork with Shanmugam Associates' comprehensive engineering consultation. We provide laser-accurate site estimations, material compatibility analysis, 3D color mock-ups, and milestone-linked payment schedules.",
      specs: [
        { label: "Diagnostic Tools", value: "Digital moisture meters, laser distance meters, DFT gauges" },
        { label: "Documentation", value: "Itemized BOQ (Bill of Quantities) with zero hidden charges" },
        { label: "Partnership", value: "Certified Applicator for Asian Paints, Berger, Nippon, Dulux" },
        { label: "Quality Checks", value: "15-point multi-stage QA inspection protocol" },
        { label: "Support", value: "Post-completion inspection & complimentary touch-up support" }
      ],
      scope: [
        "Complimentary site audit and architectural evaluation across Coimbatore & Tamil Nadu",
        "Detailed surface area breakdown with square-footage calculations",
        "Curated material recommendation based on sunlight exposure and budget tier",
        "Dedicated project manager acting as single point of contact throughout",
        "Formal warranty documentation and care guidelines handover"
      ],
      process: [
        { step: "01", title: "Consultation Request", desc: "Schedule a site visit at your convenience with our senior engineering team." },
        { step: "02", title: "Comprehensive Audit", desc: "We evaluate moisture, substrate, lighting, and square footage." },
        { step: "03", title: "Transparent Proposal", desc: "Itemized proposal outlining material brands, coats, and fixed milestones." },
        { step: "04", title: "Execution & Sign-Off", desc: "Strict adherence to schedule, clean site daily, and flawless handover." }
      ]
    }
  ];

  const selectedService = services.find(s => s.id === selectedServiceId) || services[0];
  const IconComponent = selectedService.icon;

  const faqs = [
    {
      q: "How do you ensure dust-free painting inside occupied homes?",
      a: "We utilize motorized sanders equipped with built-in HEPA vacuum extractors that capture over 95% of airborne dust before it can spread. Additionally, all furniture, electronics, and floors are thoroughly sealed with static protective masking film."
    },
    {
      q: "Which paint brands do you partner with?",
      a: "We are authorized, certified application partners for Asian Paints, Berger Paints, Nippon Paint, and Dulux. All materials are sourced directly from authorized depots in sealed, original company containers with verifiable batch codes."
    },
    {
      q: "What warranties do Shanmugam Associates offer on painting works?",
      a: "Depending on the coating system selected, we provide comprehensive warranties ranging from 3 to 10 years. This includes both the paint manufacturer's warranty against peeling or fading and Shanmugam Associates' workmanship guarantee."
    },
    {
      q: "How is the project cost estimated?",
      a: "Our engineer conducts a laser site survey to calculate exact paintable surface areas (deducting windows, doors, and openings). You receive a transparent, itemized Bill of Quantities (BOQ) with zero hidden extras."
    },
    {
      q: "Can you help select colors that match our interior lighting?",
      a: "Yes! Our design consultation includes 3D digital visualization and on-wall trial swatches. We observe how natural daylight and artificial night lighting interact with colors in your specific rooms before you finalize."
    }
  ];

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ═══════════════════════════════════════════════════════════════
          HERO BANNER
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: 'linear-gradient(135deg, #090e17 0%, #111827 60%, #1e293b 100%)',
        color: '#ffffff',
        padding: '5.5rem 1.5rem 5rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(184,120,22,0.18) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          {/* Eyebrow */}
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
            Professional Engineering & Painting Services
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
            letterSpacing: '-0.5px'
          }}>
            Expert Craftsmanship.<br />
            <span style={{ color: '#b87816' }}>Engineering Precision Since 1977.</span>
          </h1>

          <p style={{
            fontSize: '1.12rem',
            color: '#94a3b8',
            maxWidth: '720px',
            lineHeight: 1.7,
            marginBottom: '2rem'
          }}>
            From luxury residential villas to heavy industrial complexes, Shanmugam Associates delivers world-class surface protection, flawless finishes, and guaranteed long-term durability.
          </p>

          {/* Quick Metrics Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '1.5rem',
            maxWidth: '850px',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#f59e0b' }}>45+ Years</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Engineering Legacy</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#f59e0b' }}>500+</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Projects Delivered</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#f59e0b' }}>10-Year</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Durability Warranty</div>
            </div>
            <div>
              <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#f59e0b' }}>100%</div>
              <div style={{ fontSize: '0.82rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Dust-Free Execution</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          INTERACTIVE SERVICES DEEP DIVE (Master List & Full Specs)
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1360px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
          <div style={{
            fontSize: '0.82rem',
            fontWeight: '700',
            color: '#b87816',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            marginBottom: '0.6rem'
          }}>
            Comprehensive Solutions
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
            fontWeight: '800',
            color: '#111827',
            lineHeight: 1.2,
            marginBottom: '1rem'
          }}>
            Explore Our 8 Specialized Services
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.65 }}>
            Select any service below to review complete scope of work, technical specifications, brand recommendations, and execution methodology.
          </p>
        </div>

        {/* 2-Column Layout: Left Nav List + Right Detailed Showcase */}
        <div className="services-master-grid" style={{
          display: 'grid',
          gridTemplateColumns: '360px 1fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          
          {/* ── LEFT: Service Selector Menu ── */}
          <div style={{
            background: '#fafafa',
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            padding: '1rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
            position: 'sticky',
            top: '90px'
          }}>
            <div style={{
              fontSize: '0.78rem',
              fontWeight: '700',
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              padding: '0.5rem 0.75rem 0.85rem 0.75rem',
              borderBottom: '1px solid #e5e7eb',
              marginBottom: '0.5rem'
            }}>
              Service Catalog
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {services.map((srv) => {
                const isSelected = srv.id === selectedServiceId;
                const SrvIcon = srv.icon;
                return (
                  <button
                    key={srv.id}
                    onClick={() => {
                      setSelectedServiceId(srv.id);
                      // Smoothly focus main showcase
                      const el = document.getElementById('service-detail-view');
                      if (el && window.innerWidth < 992) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: isSelected ? '#111827' : 'transparent',
                      color: isSelected ? '#ffffff' : '#334155',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                    onMouseEnter={e => {
                      if (!isSelected) {
                        e.currentTarget.style.background = '#f1f5f9';
                        e.currentTarget.style.color = '#0f172a';
                      }
                    }}
                    onMouseLeave={e => {
                      if (!isSelected) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#334155';
                      }
                    }}
                  >
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: isSelected ? '#b87816' : '#e2e8f0',
                      color: isSelected ? '#ffffff' : '#475569',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <SrvIcon size={18} />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontSize: '0.88rem',
                        fontWeight: isSelected ? '700' : '600',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {srv.title.split('&')[0]}
                      </div>
                      <div style={{
                        fontSize: '0.72rem',
                        color: isSelected ? '#cbd5e1' : '#94a3b8',
                        marginTop: '1px'
                      }}>
                        {srv.badge}
                      </div>
                    </div>

                    <ArrowRight 
                      size={15} 
                      color={isSelected ? '#b87816' : '#cbd5e1'} 
                      style={{ transform: isSelected ? 'translateX(2px)' : 'none', transition: '0.2s' }}
                    />
                  </button>
                );
              })}
            </div>

            {/* Quick Contact Box on Menu */}
            <div style={{
              marginTop: '1.5rem',
              background: '#fef3c7',
              border: '1px solid #fde68a',
              borderRadius: '12px',
              padding: '1.15rem',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '0.88rem', fontWeight: '700', color: '#92400e', marginBottom: '0.35rem' }}>
                Need a Custom Solution?
              </div>
              <p style={{ fontSize: '0.78rem', color: '#78350f', lineHeight: 1.45, marginBottom: '0.85rem' }}>
                Our senior civil engineers will inspect your site and provide a free quote.
              </p>
              <a
                href="https://wa.me/919443522285?text=Hello%20Shanmugam%20Associates,%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  background: '#25d366',
                  color: '#ffffff',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  padding: '0.55rem 1rem',
                  borderRadius: '6px',
                  textDecoration: 'none'
                }}
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Active Service Deep Dive Details ── */}
          <div id="service-detail-view" style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.05)'
          }}>
            
            {/* Header Image with Overlay */}
            <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
              <img
                src={selectedService.image}
                alt={selectedService.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.3) 60%, transparent 100%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '2rem'
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(184,120,22,0.9)',
                  color: '#ffffff',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  fontSize: '0.76rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  width: 'fit-content',
                  marginBottom: '0.75rem'
                }}>
                  <IconComponent size={14} />
                  {selectedService.badge}
                </div>

                <h3 style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                  fontWeight: '800',
                  color: '#ffffff',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem'
                }}>
                  {selectedService.title}
                </h3>
                <p style={{
                  fontSize: '0.98rem',
                  color: '#cbd5e1',
                  maxWidth: '700px',
                  lineHeight: 1.5
                }}>
                  {selectedService.subtitle}
                </p>
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '2.5rem' }}>
              
              {/* Overview */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: '#111827',
                  marginBottom: '0.85rem'
                }}>
                  Service Overview & Benefits
                </h4>
                <p style={{ fontSize: '1.02rem', color: '#475569', lineHeight: 1.8 }}>
                  {selectedService.overview}
                </p>
              </div>

              {/* Technical Specifications Table */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: '#111827',
                  marginBottom: '1rem'
                }}>
                  Technical Specifications & Material Grades
                </h4>
                <div style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  {selectedService.specs.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '220px 1fr',
                        padding: '0.9rem 1.25rem',
                        borderBottom: idx === selectedService.specs.length - 1 ? 'none' : '1px solid #e2e8f0',
                        background: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                        fontSize: '0.92rem'
                      }}
                    >
                      <span style={{ fontWeight: '700', color: '#334155' }}>{item.label}</span>
                      <span style={{ color: '#64748b' }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope of Work */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: '#111827',
                  marginBottom: '1rem'
                }}>
                  What Is Included (Scope of Work)
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.85rem' }}>
                  {selectedService.scope.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        background: '#fefcf8',
                        border: '1px solid #f9eed7',
                        padding: '0.95rem 1.15rem',
                        borderRadius: '10px'
                      }}
                    >
                      <CheckCircle2 size={18} color="#b87816" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.5 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Step Execution Process */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{
                  fontSize: '1.15rem',
                  fontWeight: '800',
                  color: '#111827',
                  marginBottom: '1.25rem'
                }}>
                  Our 4-Stage Execution Methodology
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                  {selectedService.process.map((p, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        borderRadius: '12px',
                        padding: '1.25rem'
                      }}
                    >
                      <div style={{
                        fontSize: '1.4rem',
                        fontWeight: '800',
                        color: '#b87816',
                        lineHeight: 1,
                        marginBottom: '0.5rem'
                      }}>
                        {p.step}
                      </div>
                      <div style={{
                        fontSize: '0.92rem',
                        fontWeight: '700',
                        color: '#0f172a',
                        marginBottom: '0.4rem'
                      }}>
                        {p.title}
                      </div>
                      <div style={{
                        fontSize: '0.8rem',
                        color: '#64748b',
                        lineHeight: 1.5
                      }}>
                        {p.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons for this Service */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #e2e8f0'
              }}>
                <button
                  onClick={() => {
                    if (onNavigatePage) onNavigatePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{
                    background: '#b87816',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.95rem 2rem',
                    fontSize: '0.96rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    boxShadow: '0 4px 16px rgba(184,120,22,0.35)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = '#9e640e')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#b87816')}
                >
                  <FileText size={18} />
                  <span>Request Quote for {selectedService.title.split('&')[0]}</span>
                </button>

                <a
                  href={`https://wa.me/919443522285?text=Hello%20Shanmugam%20Associates,%20I%20am%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service.`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: '#25d366',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '0.95rem 1.8rem',
                    fontSize: '0.96rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    textDecoration: 'none'
                  }}
                >
                  <Phone size={18} />
                  <span>Direct WhatsApp Enquiry</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE SHANMUGAM ASSOCIATES FOR PAINTING & FINISHES
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ fontSize: '0.82rem', fontWeight: '700', color: '#b87816', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
              The Shanmugam Guarantee
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: '800', color: '#0f172a', lineHeight: 1.2 }}>
              Why Homeowners & Corporates Trust Us
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fef3c7', color: '#b87816', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Clock size={24} />
              </div>
              <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: '#111827', marginBottom: '0.6rem' }}>On-Time Handover Guarantee</h4>
              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.65 }}>
                We commit to guaranteed milestone schedules in writing. Every phase is closely tracked by our site engineers to eliminate unnecessary delays.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fef3c7', color: '#b87816', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} />
              </div>
              <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: '#111827', marginBottom: '0.6rem' }}>Genuine Sealed Materials</h4>
              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.65 }}>
                100% authentic paints delivered in factory-sealed containers with verifiable batch dates. We never dilute or compromise on material chemistry.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '2rem', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fef3c7', color: '#b87816', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Award size={24} />
              </div>
              <h4 style={{ fontSize: '1.18rem', fontWeight: '800', color: '#111827', marginBottom: '0.6rem' }}>Trained Professional Crews</h4>
              <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.65 }}>
                Our painters are background-verified, company-uniformed, and formally trained in safety, modern mechanized tools, and courteous site conduct.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQS ACCORDION
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '960px', margin: '0 auto', padding: '5rem 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#b87816',
            fontWeight: '700',
            fontSize: '0.84rem',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '0.5rem'
          }}>
            <HelpCircle size={16} />
            Common Questions
          </div>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: '#111827' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: isOpen ? '#fefdfa' : '#ffffff',
                  transition: 'all 0.2s'
                }}
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: isOpen ? '#b87816' : '#111827'
                  }}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '1rem'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 1.5rem 1.35rem 1.5rem',
                    fontSize: '0.94rem',
                    color: '#64748b',
                    lineHeight: 1.7,
                    borderTop: '1px solid #f1f5f9'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM CALL TO ACTION
      ═══════════════════════════════════════════════════════════════ */}
      <section style={{
        background: '#0a101d',
        color: '#ffffff',
        padding: '5rem 1.5rem',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: '800', marginBottom: '1.25rem', lineHeight: 1.2 }}>
            Ready to Begin Your Transformation?
          </h2>
          <p style={{ fontSize: '1.08rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Book a complimentary on-site inspection with our senior engineering team. We evaluate substrate conditions, measure square footage, and deliver an itemized quotation with zero obligations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                if (onNavigatePage) onNavigatePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                background: '#b87816',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '0.95rem 2.25rem',
                fontSize: '0.98rem',
                fontWeight: '700',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(184,120,22,0.4)'
              }}
            >
              Book Site Inspection
            </button>
            <a
              href="tel:+919443522285"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                padding: '0.95rem 2rem',
                fontSize: '0.98rem',
                fontWeight: '700',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Phone size={17} />
              <span>Call +91 94435 22285</span>
            </a>
          </div>
        </div>
      </section>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 992px) {
          .services-master-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
