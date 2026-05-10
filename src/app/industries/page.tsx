import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry Bookkeeping Services Melbourne | M2 Accounting Solutions",
  description: "Specialized bookkeeping for trades, transport, hospitality, medical, retail and more. Industry-specific expertise for Melbourne businesses.",
};

export default function IndustriesPage() {
  const industries = [
    {
      name: "Trades & Construction",
      description: "Specialized bookkeeping for tradies, builders, electricians, plumbers, and construction businesses. We understand job costing, subcontractor payments, and industry-specific compliance.",
      features: ["Job costing & tracking", "Subcontractor management", "Progress billing", "Vehicle & equipment tracking", "ATO contractor reporting"],
      href: "/industries/trades",
    },
    {
      name: "Cleaning Companies",
      description: "Bookkeeping solutions for commercial and residential cleaning businesses. From employee management to chemical inventory tracking.",
      features: ["Employee time tracking", "Contract management", "Supply cost tracking", "Client invoicing", "Multiple location support"],
      href: "/industries/cleaning",
    },
    {
      name: "Transport & Logistics",
      description: "Expert bookkeeping for trucking companies, couriers, and logistics businesses. We handle the complex compliance requirements of the transport industry.",
      features: ["Fuel tax credits", "Driver logbook tracking", "Vehicle maintenance records", "Route costing", "NHVR compliance"],
      href: "/industries/transport",
    },
    {
      name: "Cafes & Hospitality",
      description: "Tailored bookkeeping for cafes, restaurants, and hospitality venues. We understand POS integrations, roster costing, and food service compliance.",
      features: ["POS system integration", "Staff rostering costs", "Inventory management", "Food cost tracking", "Award rate compliance"],
      href: "/industries/cafes",
    },
    {
      name: "Medical & Healthcare",
      description: "Specialized bookkeeping for medical practices, allied health, and healthcare businesses. We understand Medicare billing and healthcare-specific requirements.",
      features: ["Medicare reconciliation", "Patient billing", "Practitioner payments", "Medical equipment tracking", "Healthcare compliance"],
      href: "/industries/medical",
    },
    {
      name: "Retail & E-commerce",
      description: "Bookkeeping for retail stores and e-commerce businesses. We integrate with your sales platforms and manage inventory accounting.",
      features: ["E-commerce integration", "Inventory accounting", "Multi-channel sales", "Supplier management", "Sales tax compliance"],
      href: "/industries/retail",
    },
    {
      name: "Real Estate",
      description: "Bookkeeping for real estate agents and property management businesses. Trust account management and commission tracking.",
      features: ["Trust account management", "Commission calculations", "Property management accounting", "Agent payments", "REIV compliance"],
      href: "/industries/real-estate",
    },
    {
      name: "Manufacturing",
      description: "Bookkeeping for manufacturing and production businesses. We handle job costing, inventory, and complex supply chain accounting.",
      features: ["Job costing", "WIP tracking", "Raw materials inventory", "Production costing", "Supply chain management"],
      href: "/industries/manufacturing",
    },
  ];

  const icons: Record<string, JSX.Element> = {
    "Trades & Construction": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    "Cleaning Companies": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    "Transport & Logistics": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
    "Cafes & Hospitality": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    "Medical & Healthcare": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    "Retail & E-commerce": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    "Real Estate": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    "Manufacturing": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f9fafb, white)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#E6A817', fontWeight: 600, marginBottom: '8px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>INDUSTRY EXPERTISE</p>
            <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: 1.2 }}>
              Industries We <span style={{ color: '#E6A817' }}>Serve</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: 1.7 }}>
              Every industry has unique bookkeeping needs. We bring specialized knowledge and
              tailored solutions to help your business succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="md:grid-cols-2">
            {industries.map((industry, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '2px solid #e5e7eb',
                  padding: '32px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '12px', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E6A817', flexShrink: 0 }}>
                    {icons[industry.name]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>
                      {industry.name}
                    </h2>
                    <p style={{ color: '#4b5563', marginBottom: '16px', lineHeight: 1.6 }}>{industry.description}</p>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                      {industry.features.map((feature, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#4b5563' }}>
                          <svg style={{ width: '16px', height: '16px', color: '#E6A817', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={industry.href}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#E6A817', fontWeight: 600, textDecoration: 'none' }}
                    >
                      Learn More
                      <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: 'white', marginBottom: '24px' }}>
            Don't See Your Industry?
          </h2>
          <p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '600px', margin: '0 auto 32px' }}>
            We work with businesses across many industries. Contact us to discuss your specific needs.
          </p>
          <Link
            href="/contact"
            style={{ backgroundColor: '#E6A817', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '16px', display: 'inline-block' }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
