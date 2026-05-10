import Link from "next/link";

const IndustriesWeHelp = () => {
  const industries = [
    {
      name: "Trades & Construction",
      description: "Specialized bookkeeping for tradies, builders, and contractors.",
      icon: (
        <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      href: "/industries/trades",
    },
    {
      name: "Cleaning Companies",
      description: "Bookkeeping for commercial and residential cleaning businesses.",
      icon: (
        <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      href: "/industries/cleaning",
    },
    {
      name: "Transport & Logistics",
      description: "Expert support for trucking, couriers, and logistics companies.",
      icon: (
        <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      href: "/industries/transport",
    },
    {
      name: "Cafes & Hospitality",
      description: "Tailored bookkeeping for cafes, restaurants, and hospitality venues.",
      icon: (
        <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      href: "/industries/cafes",
    },
    {
      name: "Medical Clinics",
      description: "Specialized bookkeeping for healthcare and medical practices.",
      icon: (
        <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      href: "/industries/medical",
    },
    {
      name: "Retail & E-commerce",
      description: "Bookkeeping for retail stores and online businesses.",
      icon: (
        <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      href: "/industries/retail",
    },
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#2d2d2d' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#E6A817', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Industry Expertise</p>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
            Industries We <span style={{ color: '#E6A817' }}>Help</span>
          </h2>
          <p style={{ color: '#999', maxWidth: '500px', margin: '0 auto', fontSize: '16px', lineHeight: 1.7 }}>
            Specialized bookkeeping knowledge for your industry&apos;s unique needs.
          </p>
        </div>

        {/* Industries Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px' }} className="sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '24px',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'all 0.3s ease'
              }}
              className="hover:bg-white/10 hover:border-amber-500/50 group"
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(230, 168, 23, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#E6A817',
                  flexShrink: 0,
                  transition: 'all 0.3s ease'
                }} className="group-hover:bg-amber-500 group-hover:text-white">
                  {industry.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '6px', transition: 'color 0.3s' }} className="group-hover:text-amber-400">
                    {industry.name}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#999', lineHeight: 1.6 }}>
                    {industry.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            href="/industries"
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
            View All Industries
            <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeHelp;
