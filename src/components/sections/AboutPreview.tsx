import Link from "next/link";

const AboutPreview = () => {
  const highlights = [
    "Registered BAS Agent with TPB",
    "Xero Certified Partner",
    "10+ Years Industry Experience",
    "Local Melbourne Business Owner",
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="lg:grid-cols-2">
          {/* Video/Image Section */}
          <div className="order-2 lg:order-1" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
              {/* Main Image Container */}
              <div style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                backgroundColor: 'white',
                border: '1px solid #f0f0f0'
              }}>
                <div style={{
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  {/* Play Button */}
                  <button style={{
                    position: 'absolute',
                    zIndex: 10,
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#E6A817',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(230, 168, 23, 0.4)'
                  }}>
                    <svg style={{ width: '22px', height: '22px', color: 'white', marginLeft: '3px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  {/* Placeholder */}
                  <div style={{ textAlign: 'center', padding: '24px' }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      margin: '0 auto 16px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(230, 168, 23, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <svg style={{ width: '34px', height: '34px', color: '#E6A817' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p style={{ color: '#999', fontSize: '14px' }}>Meet Manisha - Video Introduction</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-16px',
                right: '-16px',
                backgroundColor: '#E6A817',
                color: 'white',
                borderRadius: '14px',
                padding: '16px 20px',
                boxShadow: '0 8px 24px rgba(230, 168, 23, 0.4)'
              }}>
                <div style={{ fontSize: '26px', fontWeight: 700, lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: '12px', opacity: 0.9, marginTop: '2px' }}>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <p style={{ color: '#E6A817', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>About Manisha</p>

            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: '24px' }}>
              Committed to Your{" "}
              <span style={{ color: '#E6A817' }}>Financial Clarity</span>{" "}
              and Compliance
            </h2>

            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '16px', fontSize: '16px' }}>
              Hi, I'm Manisha, the founder of M2 Accounting Solutions. As a registered BAS Agent
              and certified Xero partner, I've helped hundreds of small businesses across South East
              Melbourne get their bookkeeping in order and stay ATO compliant.
            </p>

            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '28px', fontSize: '16px' }}>
              I understand the challenges small business owners face because I'm a local business
              owner myself. My mission is to provide reliable, accurate, and friendly bookkeeping
              support so you can focus on what you do best - growing your business.
            </p>

            {/* Highlights Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '32px' }}>
              {highlights.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#E6A817',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg style={{ width: '14px', height: '14px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '14px', color: '#333', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '16px 32px',
                backgroundColor: '#E6A817',
                color: 'white',
                fontSize: '15px',
                fontWeight: 600,
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(230, 168, 23, 0.35)'
              }}
            >
              Learn More About Me
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
