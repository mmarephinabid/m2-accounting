import Link from "next/link";

const HeroSection = () => {
  return (
    <section style={{ background: 'linear-gradient(135deg, #fafafa 0%, #fff 50%, #fafafa 100%)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decoration */}
      <div style={{ position: 'absolute', top: '50px', right: '100px', width: '400px', height: '400px', background: 'rgba(230, 168, 23, 0.05)', borderRadius: '50%', filter: 'blur(80px)' }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px 80px', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="lg:grid-cols-2">
          {/* Left Content */}
          <div style={{ maxWidth: '560px' }}>
            {/* Trust Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: '#ecfdf5',
              border: '1px solid #bbf7d0',
              borderRadius: '50px',
              padding: '10px 18px',
              marginBottom: '28px'
            }}>
              <svg style={{ width: '18px', height: '18px', color: '#16a34a' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span style={{ color: '#15803d', fontWeight: 600, fontSize: '14px' }}>Registered BAS Agent | TPB Licensed</span>
            </div>

            {/* Heading */}
            <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.15, marginBottom: '24px' }}>
              Your <span style={{ color: '#E6A817' }}>Financial Success</span>
              <br />
              Our Mission
            </h1>

            {/* Description */}
            <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.7, marginBottom: '32px' }}>
              Professional bookkeeping and BAS services designed for small businesses,
              self-employed professionals, and growing enterprises across South East Melbourne.
            </p>

            {/* Key Benefits */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '36px' }}>
              {[
                "ATO Compliant",
                "Xero Certified",
                "Local Melbourne",
                "Fixed Pricing"
              ].map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#E6A817',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg style={{ width: '14px', height: '14px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span style={{ color: '#333', fontWeight: 500, fontSize: '15px' }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  background: '#dc2626',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(220, 38, 38, 0.35)',
                  transition: 'all 0.2s'
                }}
              >
                Free Consultation
              </Link>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '16px 32px',
                  background: 'transparent',
                  color: '#E6A817',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  border: '2px solid #E6A817',
                  transition: 'all 0.2s'
                }}
              >
                View Services
              </Link>
            </div>

            {/* Social Proof */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ display: 'flex' }}>
                {["A", "B", "C", "D"].map((letter, i) => (
                  <div
                    key={i}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: '#e5e7eb',
                      border: '3px solid white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#555',
                      marginLeft: i > 0 ? '-12px' : '0'
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div style={{ borderLeft: '1px solid #ddd', paddingLeft: '20px' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} style={{ width: '18px', height: '18px', color: '#E6A817' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: '14px', color: '#666', fontWeight: 500 }}>100+ Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="hidden lg:block" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '480px' }}>
              {/* Main Card */}
              <div style={{
                background: 'linear-gradient(135deg, #2d2d2d 0%, #444 100%)',
                borderRadius: '20px',
                padding: '32px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
              }}>
                {/* Stats Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '14px', padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#E6A817', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg style={{ width: '22px', height: '22px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>100+</span>
                    </div>
                    <p style={{ color: '#aaa', fontSize: '14px' }}>Happy Clients</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '14px', padding: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#22c55e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg style={{ width: '22px', height: '22px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <span style={{ fontSize: '28px', fontWeight: 700, color: 'white' }}>10+</span>
                    </div>
                    <p style={{ color: '#aaa', fontSize: '14px' }}>Years Experience</p>
                  </div>
                </div>

                {/* Services Card */}
                <div style={{ background: 'white', borderRadius: '14px', padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                    <svg style={{ width: '22px', height: '22px', color: '#E6A817' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span style={{ fontSize: '16px', fontWeight: 700, color: '#333' }}>Our Services</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {["Bookkeeping", "BAS Services", "Payroll", "Xero Setup"].map((service, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <svg style={{ width: '14px', height: '14px', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span style={{ fontSize: '15px', fontWeight: 500, color: '#444' }}>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '24px' }}>
                  <div style={{ display: 'flex' }}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} style={{ width: '20px', height: '20px', color: '#E6A817' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: 'white' }}>5.0 on Google Reviews</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                background: '#E6A817',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '50px',
                fontWeight: 600,
                fontSize: '13px',
                boxShadow: '0 4px 14px rgba(230, 168, 23, 0.4)'
              }}>
                TPB Licensed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
