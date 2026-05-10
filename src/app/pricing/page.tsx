import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Pricing Melbourne | M2 Accounting Solutions",
  description: "Transparent, fixed-price bookkeeping packages for Melbourne small businesses. No hidden fees, no surprises. From $300/month.",
};

export default function PricingPage() {
  const packages = [
    {
      name: "Starter",
      description: "Perfect for sole traders and micro businesses with simple bookkeeping needs.",
      price: "300",
      period: "/month",
      features: [
        "Up to 30 transactions/month",
        "Bank reconciliation",
        "GST tracking",
        "Monthly P&L report",
        "Email support",
        "Xero access included",
      ],
      notIncluded: [
        "BAS preparation",
        "Payroll",
        "Phone support",
      ],
      popular: false,
      cta: "Get Started",
    },
    {
      name: "Growth",
      description: "Ideal for growing small businesses that need comprehensive bookkeeping support.",
      price: "550",
      period: "/month",
      features: [
        "Up to 100 transactions/month",
        "Bank & credit card reconciliation",
        "Accounts payable & receivable",
        "Quarterly BAS preparation",
        "Monthly financial reports",
        "Xero management",
        "Phone & email support",
        "Dedicated bookkeeper",
      ],
      notIncluded: [
        "Payroll processing",
      ],
      popular: true,
      cta: "Most Popular",
    },
    {
      name: "Business",
      description: "Complete solution for established businesses with employees and complex needs.",
      price: "850",
      period: "/month",
      features: [
        "Up to 200 transactions/month",
        "Full bookkeeping service",
        "Quarterly BAS lodgement",
        "Payroll for up to 5 employees",
        "STP reporting",
        "Monthly management reports",
        "Cash flow forecasting",
        "Priority phone support",
        "Quarterly review meetings",
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Us",
    },
  ];

  const addOns = [
    { name: "Additional transactions", price: "$3", unit: "/transaction" },
    { name: "Extra employees payroll", price: "$15", unit: "/employee/month" },
    { name: "Catch-up bookkeeping", price: "$75", unit: "/hour" },
    { name: "BAS lodgement (standalone)", price: "$150", unit: "/quarter" },
    { name: "Annual financial statements", price: "$300", unit: "/year" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f9fafb, white)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#E6A817', fontWeight: 600, marginBottom: '8px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>TRANSPARENT PRICING</p>
            <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: 1.2 }}>
              Simple, <span style={{ color: '#E6A817' }}>Fixed Pricing</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#4b5563', marginBottom: '32px', lineHeight: 1.7 }}>
              No hidden fees. No surprises. Just straightforward pricing that lets you budget with confidence.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#dcfce7', border: '1px solid #bbf7d0', borderRadius: '50px', padding: '8px 16px' }}>
              <svg style={{ width: '20px', height: '20px', color: '#16a34a' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span style={{ color: '#15803d', fontWeight: 500 }}>Free consultation to find your perfect package</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px', maxWidth: '1100px', margin: '0 auto' }} className="md:grid-cols-3">
            {packages.map((pkg, index) => (
              <div
                key={index}
                style={{
                  borderRadius: '16px',
                  padding: '32px',
                  position: 'relative',
                  backgroundColor: pkg.popular ? '#1a1a1a' : 'white',
                  color: pkg.popular ? 'white' : '#1a1a1a',
                  border: pkg.popular ? '4px solid #E6A817' : '2px solid #e5e7eb',
                  transform: pkg.popular ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                {pkg.popular && (
                  <div style={{ position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%)' }}>
                    <span style={{ backgroundColor: '#E6A817', color: 'white', fontSize: '14px', fontWeight: 700, padding: '4px 16px', borderRadius: '50px' }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: pkg.popular ? 'white' : '#1a1a1a' }}>
                    {pkg.name}
                  </h3>
                  <p style={{ fontSize: '14px', marginBottom: '24px', color: pkg.popular ? '#9ca3af' : '#4b5563' }}>
                    {pkg.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '4px' }}>
                    <span style={{ fontSize: '48px', fontWeight: 700, color: pkg.popular ? '#E6A817' : '#1a1a1a' }}>
                      ${pkg.price}
                    </span>
                    <span style={{ fontSize: '18px', marginBottom: '8px', color: pkg.popular ? '#9ca3af' : '#4b5563' }}>
                      {pkg.period}
                    </span>
                  </div>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <svg style={{ width: '20px', height: '20px', marginTop: '2px', flexShrink: 0, color: pkg.popular ? '#E6A817' : '#22c55e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span style={{ color: pkg.popular ? '#d1d5db' : '#4b5563' }}>{feature}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((feature, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', opacity: 0.5 }}>
                      <svg style={{ width: '20px', height: '20px', marginTop: '2px', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span style={{ color: pkg.popular ? '#9ca3af' : '#9ca3af' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'center',
                    padding: '16px',
                    borderRadius: '8px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    backgroundColor: pkg.popular ? '#E6A817' : '#f3f4f6',
                    color: pkg.popular ? 'white' : '#1a1a1a',
                  }}
                >
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section style={{ padding: '64px 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1a1a1a', textAlign: 'center', marginBottom: '32px' }}>
              Optional Add-ons
            </h2>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', overflow: 'hidden' }}>
              {addOns.map((addon, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 24px', borderBottom: index < addOns.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                  <span style={{ color: '#374151' }}>{addon.name}</span>
                  <span style={{ fontWeight: 600, color: '#E6A817' }}>
                    {addon.price} <span style={{ fontSize: '14px', color: '#6b7280', fontWeight: 400 }}>{addon.unit}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a1a', textAlign: 'center', marginBottom: '48px' }}>
              Pricing{" "}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'relative', zIndex: 10 }}>FAQ</span>
                <span style={{ position: 'absolute', bottom: '4px', left: 0, width: '100%', height: '10px', backgroundColor: 'rgba(230, 168, 23, 0.3)', zIndex: 0 }}></span>
              </span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ backgroundColor: '#f9fafb', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                  What's included in a "transaction"?
                </h3>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
                  A transaction is any bank or credit card entry that needs to be recorded and reconciled.
                  This includes payments, receipts, transfers, and adjustments.
                </p>
              </div>

              <div style={{ backgroundColor: '#f9fafb', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                  Do I need to pay for Xero separately?
                </h3>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
                  Yes, you'll need your own Xero subscription. However, we can help you set it up and
                  may be able to access discounted partner pricing for you.
                </p>
              </div>

              <div style={{ backgroundColor: '#f9fafb', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                  Can I change packages later?
                </h3>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
                  Absolutely! As your business grows, you can upgrade or adjust your package at any time.
                  We'll work with you to find the right fit.
                </p>
              </div>

              <div style={{ backgroundColor: '#f9fafb', borderRadius: '16px', padding: '24px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginBottom: '8px' }}>
                  What if I exceed my transaction limit?
                </h3>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
                  Additional transactions are billed at $3 each. If you consistently exceed your limit,
                  we'll recommend upgrading to the next package for better value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '64px 0', backgroundColor: '#E6A817' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
            Need a Custom Quote?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Every business is unique. Book a free consultation and we'll create a tailored package just for you.
          </p>
          <Link
            href="/contact"
            style={{ backgroundColor: 'white', color: '#E6A817', padding: '16px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '16px', display: 'inline-block' }}
          >
            Get Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
