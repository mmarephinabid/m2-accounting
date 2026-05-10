import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Manisha | M2 Accounting Solutions Melbourne",
  description: "Meet Manisha, founder of M2 Accounting Solutions. Registered BAS Agent and Xero certified partner serving small businesses across South East Melbourne.",
};

export default function AboutPage() {
  const qualifications = [
    "Registered BAS Agent (TPB)",
    "Xero Certified Advisor",
    "MYOB Certified Partner",
    "Bachelor of Commerce",
    "10+ Years Industry Experience",
    "Member of Institute of Certified Bookkeepers",
  ];

  const values = [
    {
      title: "Accuracy",
      description: "Every number matters. We ensure precision in all financial records and reporting.",
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Reliability",
      description: "Deadlines are sacred. Your BAS lodgements and reports will always be on time.",
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Transparency",
      description: "Clear communication and upfront pricing. No hidden fees or surprises.",
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Partnership",
      description: "We're not just service providers. We're partners invested in your success.",
      icon: (
        <svg style={{ width: '32px', height: '32px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f9fafb, white)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '64px', alignItems: 'center' }} className="lg:grid-cols-2">
            {/* Image */}
            <div style={{ position: 'relative', maxWidth: '450px' }} className="order-2 lg:order-1">
              <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                <div style={{ aspectRatio: '4/3', background: 'linear-gradient(to bottom right, #e5e7eb, #d1d5db)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {/* Play Button for Video */}
                  <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <button style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#E6A817', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', boxShadow: '0 8px 20px rgba(230, 168, 23, 0.4)' }}>
                      <svg style={{ width: '24px', height: '24px', color: 'white', marginLeft: '3px' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                  <div style={{ textAlign: 'center', padding: '24px', zIndex: 0 }}>
                    <div style={{ width: '80px', height: '80px', margin: '0 auto 12px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg style={{ width: '40px', height: '40px', color: '#E6A817' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p style={{ color: '#6b7280', fontSize: '14px' }}>Manisha - Founder & Lead Bookkeeper</p>
                  </div>
                </div>
              </div>
              {/* Experience Badge */}
              <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', backgroundColor: '#E6A817', color: 'white', borderRadius: '12px', padding: '12px 20px', boxShadow: '0 8px 20px rgba(230, 168, 23, 0.4)' }}>
                <div style={{ fontSize: '24px', fontWeight: 700 }}>10+</div>
                <div style={{ fontSize: '12px' }}>Years Experience</div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p style={{ color: '#E6A817', fontWeight: 600, marginBottom: '8px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>MEET MANISHA</p>
              <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: 1.2 }}>
                Your Trusted <span style={{ color: '#E6A817' }}>Bookkeeping Partner</span>
              </h1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '18px', color: '#4b5563', lineHeight: 1.7 }}>
                <p>
                  Hi, I'm Manisha, the founder of M2 Accounting Solutions. With over a decade of
                  experience in bookkeeping and accounting, I've dedicated my career to helping
                  small businesses across South East Melbourne achieve financial clarity and success.
                </p>
                <p>
                  As a registered BAS Agent with the Tax Practitioners Board and a certified Xero
                  partner, I bring both expertise and a personal touch to every client relationship.
                  I understand the unique challenges that small business owners face because I'm a
                  local business owner myself.
                </p>
                <p>
                  My mission is simple: to take the stress out of your bookkeeping so you can focus
                  on what you do best - growing your business and serving your customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section style={{ padding: '64px 0', backgroundColor: '#1a1a1a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="md:grid-cols-3 lg:grid-cols-6">
            {qualifications.map((qual, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'white' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#E6A817', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '16px', height: '16px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span style={{ fontSize: '14px', fontWeight: 500 }}>{qual}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section style={{ padding: '80px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>
                My{" "}
                <span style={{ position: 'relative', display: 'inline-block' }}>
                  <span style={{ position: 'relative', zIndex: 10 }}>Story</span>
                  <span style={{ position: 'absolute', bottom: '4px', left: 0, width: '100%', height: '10px', backgroundColor: 'rgba(230, 168, 23, 0.3)', zIndex: 0 }}></span>
                </span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '17px', color: '#4b5563', lineHeight: 1.8 }}>
              <p>
                I started M2 Accounting Solutions after years of working in corporate accounting
                and seeing how underserved small businesses were when it came to quality bookkeeping.
                Too often, I saw business owners struggling with their books, missing BAS deadlines,
                and paying penalties they couldn't afford.
              </p>
              <p>
                I knew there had to be a better way. So I left my corporate job and started M2
                Accounting with a simple vision: to provide big-firm quality bookkeeping with
                small-firm personal service, at prices small businesses can actually afford.
              </p>
              <p>
                Today, I'm proud to serve over 100 clients across South East Melbourne, from sole
                traders just starting out to established companies with multiple employees. Each
                client receives the same dedication, attention to detail, and commitment to their
                financial success.
              </p>
              <p>
                When I'm not crunching numbers, you'll find me spending time with my family,
                exploring Melbourne's great coffee spots, or volunteering with local business
                networking groups. I'm always happy to grab a coffee and chat about how I can
                help your business thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>
              Our{" "}
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ position: 'relative', zIndex: 10 }}>Values</span>
                <span style={{ position: 'absolute', bottom: '4px', left: 0, width: '100%', height: '10px', backgroundColor: 'rgba(230, 168, 23, 0.3)', zIndex: 0 }}></span>
              </span>
            </h2>
            <p style={{ fontSize: '18px', color: '#4b5563', maxWidth: '600px', margin: '0 auto' }}>
              The principles that guide everything we do at M2 Accounting.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '32px' }} className="md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  padding: '32px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  textAlign: 'center'
                }}
              >
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#E6A817' }}>
                  {value.icon}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '12px' }}>
                  {value.title}
                </h3>
                <p style={{ color: '#4b5563', lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '64px 0', backgroundColor: '#E6A817' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 700, color: 'white', marginBottom: '16px' }}>
            Ready to Work Together?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            I'd love to learn more about your business and discuss how M2 Accounting can help you achieve your financial goals.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center', alignItems: 'center' }} className="sm:flex-row">
            <Link
              href="/contact"
              style={{ backgroundColor: 'white', color: '#E6A817', padding: '16px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '16px' }}
            >
              Book a Free Consultation
            </Link>
            <a
              href="tel:+61412345678"
              style={{ backgroundColor: 'transparent', border: '2px solid white', color: 'white', padding: '14px 32px', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '16px' }}
            >
              Call +61 412 345 678
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
