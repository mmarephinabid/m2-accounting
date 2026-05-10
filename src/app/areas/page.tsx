import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Service | Bookkeeper South East Melbourne | M2 Accounting",
  description: "Local bookkeeping services in Dandenong, Cranbourne, Berwick, Narre Warren, Pakenham and surrounding South East Melbourne suburbs.",
};

export default function AreasPage() {
  const areas = [
    {
      name: "Dandenong",
      description: "Expert bookkeeping for businesses in Dandenong and surrounding areas.",
      href: "/areas/dandenong",
      suburbs: ["Dandenong", "Dandenong South", "Dandenong North"],
    },
    {
      name: "Cranbourne",
      description: "Reliable BAS and bookkeeping services for Cranbourne businesses.",
      href: "/areas/cranbourne",
      suburbs: ["Cranbourne", "Cranbourne East", "Cranbourne West", "Cranbourne North"],
    },
    {
      name: "Berwick",
      description: "Professional accounting support for Berwick's growing business community.",
      href: "/areas/berwick",
      suburbs: ["Berwick", "Berwick South", "Beaconsfield"],
    },
    {
      name: "Narre Warren",
      description: "Local bookkeeping expertise for Narre Warren and Casey businesses.",
      href: "/areas/narre-warren",
      suburbs: ["Narre Warren", "Narre Warren South", "Narre Warren North"],
    },
    {
      name: "Pakenham",
      description: "Trusted bookkeeping partner for Pakenham's business owners.",
      href: "/areas/pakenham",
      suburbs: ["Pakenham", "Pakenham Upper", "Officer"],
    },
    {
      name: "Hallam",
      description: "Comprehensive bookkeeping services for Hallam businesses.",
      href: "/areas/hallam",
      suburbs: ["Hallam", "Doveton", "Endeavour Hills"],
    },
    {
      name: "Springvale",
      description: "Expert BAS and payroll services for Springvale businesses.",
      href: "/areas/springvale",
      suburbs: ["Springvale", "Springvale South", "Mulgrave"],
    },
    {
      name: "Keysborough",
      description: "Professional bookkeeping for Keysborough businesses.",
      href: "/areas/keysborough",
      suburbs: ["Keysborough", "Dingley Village", "Heatherton"],
    },
    {
      name: "Noble Park",
      description: "Trusted local bookkeeper for Noble Park business owners.",
      href: "/areas/noble-park",
      suburbs: ["Noble Park", "Noble Park North", "Sandown Park"],
    },
    {
      name: "Frankston",
      description: "Comprehensive bookkeeping for Frankston and Mornington Peninsula.",
      href: "/areas/frankston",
      suburbs: ["Frankston", "Frankston North", "Seaford"],
    },
    {
      name: "Clayton",
      description: "Expert bookkeeping services for Clayton businesses.",
      href: "/areas/clayton",
      suburbs: ["Clayton", "Clayton South", "Clarinda"],
    },
    {
      name: "Moorabbin",
      description: "Professional bookkeeping for Moorabbin business district.",
      href: "/areas/moorabbin",
      suburbs: ["Moorabbin", "Highett", "Bentleigh East"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f9fafb, white)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#E6A817', fontWeight: 600, marginBottom: '8px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>LOCAL MELBOURNE BOOKKEEPER</p>
            <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: 1.2 }}>
              Areas We <span style={{ color: '#E6A817' }}>Service</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: 1.7 }}>
              Proudly serving small businesses across South East Melbourne with reliable,
              professional bookkeeping services. We offer both on-site and remote support.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ padding: '32px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ backgroundColor: 'rgba(230, 168, 23, 0.1)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
            <div style={{ width: '96px', height: '96px', margin: '0 auto 16px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg style={{ width: '48px', height: '48px', color: '#E6A817' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>South East Melbourne Coverage</h2>
            <p style={{ color: '#4b5563', maxWidth: '600px', margin: '0 auto' }}>
              From Dandenong to Frankston, Berwick to Springvale - we service businesses throughout the South East Melbourne corridor.
            </p>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section style={{ padding: '64px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }} className="md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '2px solid #e5e7eb',
                  padding: '24px',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E6A817', flexShrink: 0 }}>
                    <svg style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                      {area.name}
                    </h3>
                    <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '12px' }}>{area.description}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {area.suburbs.slice(0, 3).map((suburb, i) => (
                        <span key={i} style={{ fontSize: '12px', backgroundColor: '#f3f4f6', color: '#4b5563', padding: '4px 8px', borderRadius: '4px' }}>
                          {suburb}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section style={{ padding: '80px 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px' }}>
              Why Choose a <span style={{ color: '#E6A817' }}>Local Bookkeeper</span>?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', marginTop: '48px' }} className="md:grid-cols-3">
              <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#E6A817' }}>
                  <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Face-to-Face Meetings</h3>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.6 }}>Meet in person when you need to discuss complex matters or simply prefer a personal touch.</p>
              </div>
              <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#E6A817' }}>
                  <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Local Knowledge</h3>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.6 }}>We understand the local business landscape and the unique challenges Melbourne businesses face.</p>
              </div>
              <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: '#E6A817' }}>
                  <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>Same Timezone</h3>
                <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.6 }}>Quick responses during business hours. No waiting overnight for answers to urgent questions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '64px 0', backgroundColor: '#E6A817' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
            Ready to Work with a Local Bookkeeper?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Whether you're in Dandenong, Berwick, or anywhere in South East Melbourne, we're here to help.
          </p>
          <Link
            href="/contact"
            style={{ backgroundColor: 'white', color: '#E6A817', padding: '16px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '16px', display: 'inline-block' }}
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
