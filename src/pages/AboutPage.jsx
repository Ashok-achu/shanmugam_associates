import React from 'react';
import { 
  Building2, 
  Users, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Sparkles,
  MapPin,
  Clock,
  Briefcase,
  HeartHandshake,
  Check,
  Mail
} from 'lucide-react';
import { COMPANY_INFO, LEADERSHIP, TRUSTED_CLIENTS, MISSION_VISION } from '../data/siteData';

export default function AboutPage({ onNavigatePage }) {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#ffffff', color: '#111827' }}>
      
      {/* ══════════════════════════════════════════════════════════
          ABOUT HERO BANNER
      ══════════════════════════════════════════════════════════ */}
      <section style={{
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
            Coimbatore's Trusted Painting & Construction Company Since 1977
          </div>

          <h1 style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.15,
            marginBottom: '1.25rem'
          }}>
            About Shanmugam Associates
          </h1>

          <p style={{
            fontSize: '1.14rem',
            color: '#cbd5e1',
            maxWidth: '820px',
            lineHeight: 1.75
          }}>
            Learn how Shanmugam Associates grew from a small contracting firm in 1977 into one of Coimbatore's trusted painting and construction companies, now run by the second generation.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          OUR STORY
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5.5rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '4.5rem',
          alignItems: 'center'
        }}>
          {/* Left Text */}
          <div>
            <div style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#b87816',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.6rem'
            }}>
              Our Story
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.7rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '1.5rem'
            }}>
              Nearly Five Decades of Honest Work & Lasting Craftsmanship
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', color: '#475569', fontSize: '1rem', lineHeight: 1.8 }}>
              <p style={{ margin: 0 }}>
                Every long-standing company has a beginning that shaped everything that came after it, and ours starts in 1977, when Mr. Shanmugam started this business with very simple goals - do honest work, finish what you promise, and treat every client's property as if it were your own. In the early years, the company worked mainly on government projects, including PWD roads, highways, and TWAD water board works, along with some private jobs spread across the Nilgiris and Coimbatore districts. There was no shortcut culture back then. Every project had to be inspected, measured, and approved by strict government engineers, and that discipline became part of the company's foundation.
              </p>

              <p style={{ margin: 0 }}>
                In 2014, the founder's family, representing the second generation, stepped in to run the business. They studied the company carefully and made a decision that changed everything - instead of trying to do a bit of everything, they chose to focus on two things and do them really well: Construction and Painting. This clarity of purpose allowed the company to grow steadily. We built a strong team of civil workers and painters, took on larger and more complex projects, and expanded our presence to Coimbatore, Chennai, Nilgiris, and other cities across Tamil Nadu.
              </p>

              <p style={{ margin: 0 }}>
                Over the years, we have grown from handling small private jobs to managing large apartment projects. At one point, our team painted over 2.7 million square feet of buildings in a single year - a scale that would have felt impossible to the small team that started in 1977. We have also worked on government buildings such as hospitals, colleges, schools, community halls, parks, and bridges, adding public infrastructure experience to our residential and commercial expertise.
              </p>

              <p style={{ margin: 0 }}>
                What has not changed, through all these decades, is the reason clients keep coming back to us. It is not just the quality of our finishes or the strength of our construction - it is the way we communicate, the honesty in our quotations, and the respect we show for every client's home or business, whether the project is worth a few thousand rupees or several crores.
              </p>
            </div>
          </div>

          {/* Right Visual Highlight Box */}
          <div>
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.12)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop"
                alt="Shanmugam Associates Construction and Painting"
                style={{ width: '100%', height: '440px', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(15,23,42,0.88) 0%, transparent 60%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '2rem'
              }}>
                <div style={{ color: '#ffffff' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#f59e0b', marginBottom: '0.25rem' }}>
                    2.7 Million+ Sq. Ft.
                  </div>
                  <div style={{ fontSize: '0.94rem', color: '#cbd5e1' }}>
                    Painted in a single milestone year across Tamil Nadu
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Credentials Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1rem',
              marginTop: '1.25rem'
            }}>
              <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#b87816' }}>1977</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '600' }}>FOUNDED</div>
              </div>
              <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#b87816' }}>2nd Gen</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '600' }}>LEADERSHIP</div>
              </div>
              <div style={{ background: '#f8fafc', padding: '1.2rem', borderRadius: '12px', textAlign: 'center', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#b87816' }}>8+</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: '600' }}>CITIES SERVED</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MEET THE TEAM
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f8fafc', padding: '5.5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
            <div style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#b87816',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Experienced Leadership
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.2
            }}>
              Meet the Team
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.02rem', marginTop: '0.75rem' }}>
              Hands-on leadership guiding every site with discipline, integrity, and engineering experience.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
            gap: '2.5rem'
          }}>
            {LEADERSHIP.map((leader, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  padding: '3rem 2.5rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(184,120,22,0.12)',
                  color: '#b87816',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  alignSelf: 'flex-start'
                }}>
                  {leader.role}
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
                  {leader.name}
                </h3>

                <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MISSION & VISION
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5.5rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '2.5rem'
        }}>
          {/* Mission */}
          <div style={{
            background: 'linear-gradient(135deg, #090e17 0%, #1e293b 100%)',
            color: '#ffffff',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0,0,0,0.12)'
          }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: 'rgba(184,120,22,0.25)', color: '#f59e0b',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Target size={24} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem' }}>
              {MISSION_VISION.mission.title}
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
              {MISSION_VISION.mission.desc}
            </p>
          </div>

          {/* Vision */}
          <div style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '3rem 2.5rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
          }}>
            <div style={{
              width: '46px', height: '46px', borderRadius: '12px',
              background: 'rgba(184,120,22,0.12)', color: '#b87816',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Eye size={24} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
              {MISSION_VISION.vision.title}
            </h3>

            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
              {MISSION_VISION.vision.desc}
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMPANIES THAT TRUST US
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f8fafc', padding: '5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem' }}>
            <div style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#b87816',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Client Endorsements
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '1rem'
            }}>
              Companies That Trust Us
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75 }}>
              Over the years, we have worked closely with several respected builders and developers, including KCP Infra Limited, Sree Daksha Property Developers, Arima, Globuse, Annapoorna, Arthy, Sri Gujan Builder, Ananya Shelters, Green Field, Acetech and GECO Special Machiners. Working alongside established developers has helped us understand professional site standards, tight schedules, and the coordination that large projects demand, and we bring that same standard to every homeowner we work with as well.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: '1rem'
          }}>
            {TRUSTED_CLIENTS.map((client, i) => (
              <div
                key={i}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center',
                  fontWeight: '700',
                  color: '#1e293b',
                  fontSize: '0.94rem',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                }}
              >
                {client}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          NEARLY FIVE DECADES, ONE SIMPLE PROMISE
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5.5rem 1.5rem' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e2e8f0',
          padding: '3.5rem 2.5rem',
          boxShadow: '0 10px 35px rgba(0,0,0,0.04)'
        }}>
          <div style={{
            fontSize: '0.82rem',
            fontWeight: '700',
            color: '#b87816',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '0.5rem'
          }}>
            Our Commitment
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
            fontWeight: '800',
            color: '#111827',
            lineHeight: 1.25,
            marginBottom: '1.5rem'
          }}>
            Nearly Five Decades, One Simple Promise
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', color: '#475569', fontSize: '1.02rem', lineHeight: 1.8 }}>
            <p style={{ margin: 0 }}>
              Whether you remember Shanmugam Associates from the PWD roads of the 1980s, the apartment boom of the last decade, or a recent recommendation from a friend, our promise has stayed the same across all these years. We show up when we say we will, we quote honestly, we use quality materials, and we finish the job properly. In a market where many contractors disappear halfway through a project or leave work unfinished, we understand why that consistency matters so much to families and businesses in Coimbatore and across Tamil Nadu.
            </p>
            <p style={{ margin: 0 }}>
              As the company moves forward under the second generation's leadership, we continue to invest in better training for our workers, modern equipment for construction and painting, and clearer communication systems so that every client always knows exactly where their project stands. Our goal for the next decade is the same as it was in 1977 - to be a company that this region can rely on, one project at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOW WE HAVE GROWN OVER THE DECADES (THE 3 PHASES)
      ══════════════════════════════════════════════════════════ */}
      <section style={{ background: '#f8fafc', padding: '5.5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem' }}>
            <div style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#b87816',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Timeline of Milestones
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '1rem'
            }}>
              How We Have Grown Over the Decades
            </h2>
            <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.75 }}>
              Looking back at nearly fifty years of work, it is easy to see the company in three broad phases.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2rem' }}>
            {/* Phase 1 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#b87816', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Phase 1: 1977 – Early 2000s
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#111827', margin: '0.65rem 0 1rem 0' }}>
                Government Infrastructure
              </h3>
              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.75, margin: 0 }}>
                Largely about government infrastructure - roads, water projects, and public buildings, where the founder built a reputation for reliability with strict government engineers who did not tolerate shortcuts. From government work, we learned discipline and rigorous documentation.
              </p>
            </div>

            {/* Phase 2 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#b87816', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Phase 2: 2000s – 2014
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#111827', margin: '0.65rem 0 1rem 0' }}>
                Residential & Commercial Boom
              </h3>
              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.75, margin: 0 }}>
                A gradual shift toward private residential and commercial clients, as Coimbatore's construction boom picked up pace and families began investing more in independent houses and apartments. We learned the importance of personalized communication and customer care.
              </p>
            </div>

            {/* Phase 3 */}
            <div style={{
              background: '#ffffff',
              borderRadius: '16px',
              padding: '2.5rem 2rem',
              border: '2px solid #b87816',
              boxShadow: '0 8px 25px rgba(184,120,22,0.08)'
            }}>
              <span style={{ fontSize: '0.82rem', fontWeight: '800', color: '#b87816', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Phase 3: 2014 – Present
              </span>
              <h3 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#111827', margin: '0.65rem 0 1rem 0' }}>
                Second Gen Focus: Construction & Painting
              </h3>
              <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.75, margin: 0 }}>
                The second generation focused the company specifically on Construction and Painting, building deeper expertise rather than spreading resources thin. We learned that doing fewer things exceptionally well serves clients far better than trying to be everything to everyone.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          OUR APPROACH TO EVERY PROJECT
      ══════════════════════════════════════════════════════════ */}
      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '5.5rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              fontSize: '0.82rem',
              fontWeight: '700',
              color: '#b87816',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}>
              Core Methodology
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
              fontWeight: '800',
              color: '#111827',
              lineHeight: 1.25,
              marginBottom: '1.25rem'
            }}>
              Our Approach to Every Project
            </h2>

            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Regardless of whether a project is a small bedroom repaint or a multi-crore apartment construction, we follow the same underlying principles:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(184,120,22,0.12)', color: '#b87816', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>1</div>
                <div>
                  <strong style={{ color: '#111827' }}>Honest Listening:</strong>
                  <span style={{ color: '#475569', marginLeft: '0.35rem' }}>Understanding what the client actually wants and needs, not just what is easiest for us to deliver.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(184,120,22,0.12)', color: '#b87816', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>2</div>
                <div>
                  <strong style={{ color: '#111827' }}>Careful Planning:</strong>
                  <span style={{ color: '#475569', marginLeft: '0.35rem' }}>Realistic timelines and transparent budgeting so there are no surprises midway.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(184,120,22,0.12)', color: '#b87816', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>3</div>
                <div>
                  <strong style={{ color: '#111827' }}>Regular Communication:</strong>
                  <span style={{ color: '#475569', marginLeft: '0.35rem' }}>Clients are never left wondering what stage their project is at.</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.85rem' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(184,120,22,0.12)', color: '#b87816', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>4</div>
                <div>
                  <strong style={{ color: '#111827' }}>Joint Walkthrough Handover:</strong>
                  <span style={{ color: '#475569', marginLeft: '0.35rem' }}>We walk through completed work together with the client, addressing any concerns before considering the job finished.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right CTA Callout Box */}
          <div style={{
            background: 'linear-gradient(135deg, #090e17 0%, #1e293b 100%)',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            color: '#ffffff',
            boxShadow: '0 20px 45px rgba(0,0,0,0.15)'
          }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.3 }}>
              Want to Know More or Discuss Your Project?
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              Want to know more about our journey or discuss your project with our team? Call us at 94435 22285, or write to associatesshanmugam@gmail.com.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                style={{
                  background: '#b87816',
                  color: '#ffffff',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: '700',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                <Phone size={17} />
                Call {COMPANY_INFO.phonePrimary}
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                style={{
                  background: 'transparent',
                  color: '#cbd5e1',
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '9999px',
                  fontWeight: '600',
                  fontSize: '0.92rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none'
                }}
              >
                <Mail size={16} />
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
