"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Services",
      href: "/services",
      dropdown: [
        { name: "Bookkeeping", href: "/services/bookkeeping" },
        { name: "BAS Services", href: "/services/bas-services" },
        { name: "Payroll", href: "/services/payroll" },
        { name: "Xero Bookkeeping", href: "/services/xero-bookkeeping" },
        { name: "Catch-Up Bookkeeping", href: "/services/catch-up-bookkeeping" },
        { name: "Monthly Reporting", href: "/services/monthly-reporting" },
      ],
    },
    {
      name: "Industries",
      href: "/industries",
      dropdown: [
        { name: "Trades & Construction", href: "/industries/trades" },
        { name: "Cleaning Companies", href: "/industries/cleaning" },
        { name: "Transport & Logistics", href: "/industries/transport" },
        { name: "Cafes & Hospitality", href: "/industries/cafes" },
        { name: "Medical Clinics", href: "/industries/medical" },
        { name: "Retail & E-commerce", href: "/industries/retail" },
      ],
    },
    {
      name: "Areas",
      href: "/areas",
      dropdown: [
        { name: "Dandenong", href: "/areas/dandenong" },
        { name: "Cranbourne", href: "/areas/cranbourne" },
        { name: "Berwick", href: "/areas/berwick" },
        { name: "Narre Warren", href: "/areas/narre-warren" },
        { name: "Pakenham", href: "/areas/pakenham" },
        { name: "View All Areas", href: "/areas" },
      ],
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white" style={{ boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
      {/* Top Bar */}
      <div className="hidden md:block" style={{ backgroundColor: '#333333' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', fontSize: '13px', color: 'white' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <a
                href="tel:+61412345678"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none' }}
              >
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+61 412 345 678</span>
              </a>
              <a
                href="mailto:info@m2accounting.com.au"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none' }}
              >
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@m2accounting.com.au</span>
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#aaa' }}>
              <svg style={{ width: '16px', height: '16px', color: '#E6A817' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Serving South East Melbourne</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '28px', fontWeight: 'bold', lineHeight: 1 }}>
                <span style={{ color: '#E6A817' }}>M</span>
                <span style={{ color: '#333333' }}>2</span>
              </span>
              <span style={{ fontSize: '11px', color: '#666', fontStyle: 'italic', marginTop: '-2px' }}>Accounting Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex" style={{ alignItems: 'center', gap: '8px' }}>
            {navigation.map((item) => (
              <div
                key={item.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '10px 16px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#333',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    transition: 'all 0.2s',
                  }}
                  className="hover:text-amber-500 hover:bg-amber-50"
                >
                  {item.name}
                  {item.dropdown && (
                    <svg style={{ marginLeft: '6px', width: '14px', height: '14px', opacity: 0.5 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    paddingTop: '8px',
                    zIndex: 50,
                  }}>
                    <div style={{
                      backgroundColor: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                      border: '1px solid #eee',
                      padding: '8px 0',
                      minWidth: '220px',
                    }}>
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          style={{
                            display: 'block',
                            padding: '12px 20px',
                            fontSize: '14px',
                            color: '#555',
                            textDecoration: 'none',
                            transition: 'all 0.2s',
                          }}
                          className="hover:bg-amber-50 hover:text-amber-600"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                backgroundColor: '#E6A817',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(230, 168, 23, 0.35)',
                transition: 'all 0.2s',
              }}
              className="hover:bg-amber-600"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            style={{ padding: '8px', color: '#333' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden" style={{ borderTop: '1px solid #eee', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px' }}>
            {navigation.map((item) => (
              <div key={item.name} style={{ borderBottom: '1px solid #f5f5f5' }}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        padding: '16px 0',
                        fontSize: '15px',
                        fontWeight: 500,
                        color: '#333',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {item.name}
                      <svg
                        style={{
                          width: '18px',
                          height: '18px',
                          color: '#999',
                          transition: 'transform 0.2s',
                          transform: mobileDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileDropdown === item.name && (
                      <div style={{ paddingBottom: '12px', paddingLeft: '16px', borderLeft: '3px solid #E6A817' }}>
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            style={{
                              display: 'block',
                              padding: '12px 0',
                              fontSize: '14px',
                              color: '#666',
                              textDecoration: 'none',
                            }}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      display: 'block',
                      padding: '16px 0',
                      fontSize: '15px',
                      fontWeight: 500,
                      color: '#333',
                      textDecoration: 'none',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div style={{ paddingTop: '20px' }}>
              <Link
                href="/contact"
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '16px',
                  backgroundColor: '#E6A817',
                  color: 'white',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
