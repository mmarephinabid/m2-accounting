"use client";

import { useState } from "react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    border: '1px solid #e5e7eb',
    borderRadius: '10px',
    fontSize: '15px',
    transition: 'all 0.2s',
    outline: 'none',
    backgroundColor: 'white',
  };

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'start' }} className="lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p style={{ color: '#E6A817', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Get Started Today</p>
            <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.2 }}>
              Let&apos;s Simplify Your{" "}
              <span style={{ color: '#E6A817' }}>Bookkeeping</span>
            </h2>
            <p style={{ color: '#555', marginBottom: '28px', fontSize: '16px', lineHeight: 1.7 }}>
              Book a free consultation and discover how we can help streamline your finances,
              keep you ATO compliant, and give you peace of mind.
            </p>

            {/* Benefits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {[
                "Free 30-minute consultation",
                "No obligation quote",
                "Same-day response guaranteed",
                "Fixed pricing - no surprises",
              ].map((benefit, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#dcfce7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svg style={{ width: '14px', height: '14px', color: '#16a34a' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px', color: '#333' }}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Card */}
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontWeight: 600, color: '#1a1a1a', marginBottom: '20px', fontSize: '15px' }}>Prefer to call or email?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <a href="tel:+61412345678" style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#555', textDecoration: 'none' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg style={{ width: '20px', height: '20px', color: '#E6A817' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>+61 412 345 678</span>
                </a>
                <a href="mailto:info@m2accounting.com.au" style={{ display: 'flex', alignItems: 'center', gap: '14px', color: '#555', textDecoration: 'none' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg style={{ width: '20px', height: '20px', color: '#E6A817' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>info@m2accounting.com.au</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '36px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)', border: '1px solid #eee' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a1a', marginBottom: '28px' }}>Request Free Consultation</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#333', marginBottom: '8px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  style={inputStyle}
                  placeholder="John Smith"
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#333', marginBottom: '8px' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#333', marginBottom: '8px' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                    placeholder="0412 345 678"
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#333', marginBottom: '8px' }}>
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select type...</option>
                    <option value="sole-trader">Sole Trader</option>
                    <option value="company">Company</option>
                    <option value="partnership">Partnership</option>
                    <option value="trust">Trust</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#333', marginBottom: '8px' }}>
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Select service...</option>
                    <option value="bookkeeping">Bookkeeping</option>
                    <option value="bas">BAS Services</option>
                    <option value="payroll">Payroll</option>
                    <option value="xero">Xero Setup</option>
                    <option value="catchup">Catch-Up Bookkeeping</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#333', marginBottom: '8px' }}>
                  Tell us about your needs
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  placeholder="Briefly describe your bookkeeping needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px 32px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 600,
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(220, 38, 38, 0.3)'
                }}
              >
                Book Free Consultation
              </button>

              <p style={{ fontSize: '13px', color: '#888', textAlign: 'center' }}>
                We&apos;ll respond within 24 hours. Your information is 100% secure.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
