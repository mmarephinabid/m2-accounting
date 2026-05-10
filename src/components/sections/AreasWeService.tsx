import Link from "next/link";

const AreasWeService = () => {
  const areas = [
    { name: "Dandenong", href: "/areas/dandenong" },
    { name: "Dandenong South", href: "/areas/dandenong-south" },
    { name: "Cranbourne", href: "/areas/cranbourne" },
    { name: "Berwick", href: "/areas/berwick" },
    { name: "Hallam", href: "/areas/hallam" },
    { name: "Narre Warren", href: "/areas/narre-warren" },
    { name: "Pakenham", href: "/areas/pakenham" },
    { name: "Officer", href: "/areas/officer" },
    { name: "Springvale", href: "/areas/springvale" },
    { name: "Keysborough", href: "/areas/keysborough" },
    { name: "Noble Park", href: "/areas/noble-park" },
    { name: "Frankston", href: "/areas/frankston" },
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }} className="lg:grid-cols-2">
          {/* Map Illustration */}
          <div className="order-2 lg:order-1" style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              background: 'linear-gradient(135deg, rgba(230, 168, 23, 0.1) 0%, rgba(230, 168, 23, 0.05) 100%)',
              borderRadius: '20px',
              padding: '24px'
            }}>
              {/* Map Placeholder */}
              <div style={{
                aspectRatio: '1/1',
                backgroundColor: 'white',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #f0f0f0'
              }}>
                <div style={{ textAlign: 'center', padding: '24px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(230, 168, 23, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <svg style={{ width: '28px', height: '28px', color: '#E6A817' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '6px' }}>South East Melbourne</h3>
                  <p style={{ fontSize: '14px', color: '#666' }}>Serving the entire region</p>
                </div>
              </div>

              {/* Floating Pins */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '40px',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <svg style={{ width: '16px', height: '16px', color: '#E6A817' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '60px',
                left: '20px',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}>
                <svg style={{ width: '16px', height: '16px', color: '#E6A817' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p style={{ color: '#E6A817', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Local Melbourne Bookkeeper</p>

            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>
              Areas We{" "}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'relative', zIndex: 10 }}>Service</span>
                <span style={{ position: 'absolute', bottom: '4px', left: 0, width: '100%', height: '10px', backgroundColor: 'rgba(230, 168, 23, 0.3)', zIndex: 0 }}></span>
              </span>
            </h2>

            <p style={{ color: '#555', marginBottom: '28px', fontSize: '16px', lineHeight: 1.7 }}>
              Proudly serving small businesses across South East Melbourne. We provide both on-site
              and remote bookkeeping services to clients throughout these suburbs and beyond.
            </p>

            {/* Areas Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px 16px', marginBottom: '32px' }} className="grid-cols-2 sm:grid-cols-3">
              {areas.map((area, index) => (
                <Link
                  key={index}
                  href={area.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '14px',
                    color: '#444',
                    textDecoration: 'none',
                    padding: '8px 0'
                  }}
                  className="hover:text-amber-500"
                >
                  <svg style={{ width: '14px', height: '14px', color: '#E6A817', flexShrink: 0 }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>{area.name}</span>
                </Link>
              ))}
            </div>

            <Link
              href="/areas"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: 'transparent',
                color: '#E6A817',
                fontSize: '15px',
                fontWeight: 600,
                borderRadius: '8px',
                textDecoration: 'none',
                border: '2px solid #E6A817'
              }}
            >
              View All Areas
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

export default AreasWeService;
