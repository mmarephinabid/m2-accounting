import Link from "next/link";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Bookkeeping Services Melbourne | M2 Accounting Solutions",
  description: "Professional bookkeeping, BAS, payroll, and Xero services for small businesses in South East Melbourne. Fixed pricing, no hidden fees.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Bookkeeping",
      description: "Complete day-to-day bookkeeping to keep your finances organized, accurate, and ATO-ready. We handle accounts payable, accounts receivable, bank reconciliations, and more.",
      features: [
        "Bank & credit card reconciliations",
        "Accounts payable & receivable",
        "General ledger maintenance",
        "Financial record keeping",
        "Invoice processing",
        "Expense categorization",
      ],
      href: "/services/bookkeeping",
      price: "From $300/month",
    },
    {
      title: "BAS Services",
      description: "Accurate BAS preparation and lodgement by a registered BAS Agent. Never miss a deadline or worry about ATO compliance again.",
      features: [
        "BAS preparation & lodgement",
        "GST calculations & reporting",
        "PAYG withholding",
        "IAS lodgement",
        "ATO correspondence handling",
        "BAS deadline management",
      ],
      href: "/services/bas-services",
      price: "From $150/quarter",
    },
    {
      title: "Payroll Services",
      description: "STP-compliant payroll processing including superannuation, PAYG, and all employee entitlements. Take the stress out of paying your team.",
      features: [
        "Weekly/fortnightly/monthly payroll",
        "Single Touch Payroll (STP)",
        "Superannuation processing",
        "PAYG calculations",
        "Leave entitlement tracking",
        "Payslip generation",
      ],
      href: "/services/payroll",
      price: "From $50/pay run",
    },
    {
      title: "Xero Bookkeeping",
      description: "Expert Xero setup, training, and ongoing support. Leverage cloud accounting for real-time financial visibility and streamlined operations.",
      features: [
        "Xero setup & configuration",
        "Data migration from other systems",
        "Xero training & support",
        "App integrations",
        "Ongoing Xero maintenance",
        "Best practice implementation",
      ],
      href: "/services/xero-bookkeeping",
      price: "From $500 setup",
    },
    {
      title: "Catch-Up Bookkeeping",
      description: "Behind on your books? We'll get your financial records back on track quickly and efficiently, no judgment, just solutions.",
      features: [
        "Backlog bookkeeping cleanup",
        "Historic reconciliations",
        "Overdue BAS lodgement",
        "ATO debt arrangements",
        "Financial reconstruction",
        "Stress-free catch-up",
      ],
      href: "/services/catch-up-bookkeeping",
      price: "Custom quote",
    },
    {
      title: "Monthly Reporting",
      description: "Clear, actionable financial reports to help you make informed business decisions. Know exactly where your business stands.",
      features: [
        "Profit & Loss statements",
        "Balance Sheet reports",
        "Cash flow analysis",
        "Budget vs actual reporting",
        "KPI tracking",
        "Management commentary",
      ],
      href: "/services/monthly-reporting",
      price: "From $200/month",
    },
  ];

  const icons: Record<string, React.ReactElement> = {
    "Bookkeeping": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    "BAS Services": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    "Payroll Services": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    "Xero Bookkeeping": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    "Catch-Up Bookkeeping": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    "Monthly Reporting": (
      <svg style={{ width: '48px', height: '48px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f9fafb, white)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#E6A817', fontWeight: 600, marginBottom: '8px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>OUR SERVICES</p>
            <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: 1.2 }}>
              Comprehensive <span style={{ color: '#E6A817' }}>Bookkeeping Services</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#4b5563', marginBottom: '32px', lineHeight: 1.7 }}>
              From day-to-day bookkeeping to complex BAS lodgements, we provide all the financial
              support your business needs to thrive.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#dcfce7', borderRadius: '50px', padding: '8px 16px' }}>
                <svg style={{ width: '20px', height: '20px', color: '#16a34a' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span style={{ color: '#15803d', fontSize: '14px', fontWeight: 500 }}>Registered BAS Agent</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#dbeafe', borderRadius: '50px', padding: '8px 16px' }}>
                <svg style={{ width: '20px', height: '20px', color: '#2563eb' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span style={{ color: '#1d4ed8', fontSize: '14px', fontWeight: 500 }}>Xero Certified</span>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#f3e8ff', borderRadius: '50px', padding: '8px 16px' }}>
                <svg style={{ width: '20px', height: '20px', color: '#9333ea' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span style={{ color: '#7c3aed', fontSize: '14px', fontWeight: 500 }}>Fixed Pricing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  border: '2px solid #e5e7eb',
                  padding: '32px',
                  transition: 'all 0.3s'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '12px', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E6A817', flexShrink: 0 }}>
                    {icons[service.title]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px', flexWrap: 'wrap', gap: '8px' }}>
                      <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a' }}>
                        {service.title}
                      </h2>
                      <span style={{ color: '#E6A817', fontWeight: 600, fontSize: '14px', backgroundColor: 'rgba(230, 168, 23, 0.1)', padding: '4px 12px', borderRadius: '50px' }}>
                        {service.price}
                      </span>
                    </div>
                    <p style={{ color: '#4b5563', marginBottom: '16px', lineHeight: 1.6 }}>{service.description}</p>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '24px' }}>
                      {service.features.map((feature, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#4b5563' }}>
                          <svg style={{ width: '16px', height: '16px', color: '#E6A817', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
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

      {/* Why Choose Us Banner */}
      <section style={{ padding: '64px 0', backgroundColor: '#1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', textAlign: 'center', color: 'white' }} className="md:grid-cols-4">
            <div>
              <div style={{ fontSize: '40px', fontWeight: 700, color: '#E6A817', marginBottom: '8px' }}>10+</div>
              <div style={{ color: '#9ca3af' }}>Years Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '40px', fontWeight: 700, color: '#E6A817', marginBottom: '8px' }}>100+</div>
              <div style={{ color: '#9ca3af' }}>Happy Clients</div>
            </div>
            <div>
              <div style={{ fontSize: '40px', fontWeight: 700, color: '#E6A817', marginBottom: '8px' }}>100%</div>
              <div style={{ color: '#9ca3af' }}>ATO Compliant</div>
            </div>
            <div>
              <div style={{ fontSize: '40px', fontWeight: 700, color: '#E6A817', marginBottom: '8px' }}>24hr</div>
              <div style={{ color: '#9ca3af' }}>Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px' }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ fontSize: '18px', color: '#4b5563', maxWidth: '600px', margin: '0 auto 32px' }}>
            Book a free consultation and we'll help you find the right solution for your business.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }} className="sm:flex-row">
            <Link
              href="/contact"
              style={{ backgroundColor: '#dc2626', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '16px', boxShadow: '0 4px 14px rgba(220, 38, 38, 0.3)' }}
            >
              Book Free Consultation
            </Link>
            <Link
              href="/pricing"
              style={{ backgroundColor: 'white', color: '#1a1a1a', padding: '16px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '16px', border: '2px solid #e5e7eb' }}
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
