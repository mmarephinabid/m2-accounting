import Link from "next/link";

const Footer = () => {
  const services = [
    { name: "Bookkeeping", href: "/services/bookkeeping" },
    { name: "BAS Services", href: "/services/bas-services" },
    { name: "Payroll", href: "/services/payroll" },
    { name: "Xero Bookkeeping", href: "/services/xero-bookkeeping" },
    { name: "Catch-Up Bookkeeping", href: "/services/catch-up-bookkeeping" },
    { name: "Monthly Reporting", href: "/services/monthly-reporting" },
  ];

  const areas = [
    { name: "Dandenong", href: "/areas/dandenong" },
    { name: "Cranbourne", href: "/areas/cranbourne" },
    { name: "Berwick", href: "/areas/berwick" },
    { name: "Narre Warren", href: "/areas/narre-warren" },
    { name: "Pakenham", href: "/areas/pakenham" },
    { name: "Springvale", href: "/areas/springvale" },
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "BAS Deadlines", href: "/resources/bas-deadlines" },
    { name: "Tax Tips", href: "/blog/category/tax-tips" },
    { name: "Xero Guides", href: "/blog/category/xero-guides" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const linkStyle: React.CSSProperties = {
    fontSize: '14px',
    color: '#999',
    textDecoration: 'none',
    display: 'block',
    padding: '6px 0',
    transition: 'color 0.2s'
  };

  return (
    <footer style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
      {/* Main Footer */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px' }} className="sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '24px', textDecoration: 'none' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: 1 }}>
                  <span style={{ color: '#E6A817' }}>M</span>
                  <span style={{ color: 'white' }}>2</span>
                </span>
                <span style={{ fontSize: '11px', color: '#666', fontStyle: 'italic', marginTop: '2px' }}>Accounting Solutions</span>
              </div>
            </Link>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '24px', lineHeight: 1.7, maxWidth: '280px' }}>
              Serving small businesses across South East Melbourne with reliable bookkeeping, BAS, and accounting support.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="mailto:info@m2accounting.com.au" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#999', textDecoration: 'none', fontSize: '14px' }}>
                <svg style={{ width: '18px', height: '18px', color: '#E6A817', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@m2accounting.com.au</span>
              </a>
              <a href="tel:+61412345678" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#999', textDecoration: 'none', fontSize: '14px' }}>
                <svg style={{ width: '18px', height: '18px', color: '#E6A817', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+61 412 345 678</span>
              </a>
            </div>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
              {['instagram', 'linkedin', 'facebook'].map((social) => (
                <a key={social} href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none' }}>
                  {social === 'instagram' && (
                    <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  )}
                  {social === 'linkedin' && (
                    <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {social === 'facebook' && (
                    <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: '#E6A817', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Services</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} style={linkStyle} className="hover:text-amber-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 style={{ color: '#E6A817', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Areas We Service</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {areas.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} style={linkStyle} className="hover:text-amber-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ color: '#E6A817', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '20px' }}>Resources</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} style={linkStyle} className="hover:text-amber-400">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', fontSize: '13px', color: '#666' }} className="sm:flex-row sm:justify-between">
            <p>&copy; {new Date().getFullYear()} M2 Accounting Solutions. All rights reserved.</p>
            <p>Serving clients across South East Melbourne.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
