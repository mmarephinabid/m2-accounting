import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeper Dandenong | BAS Agent & Bookkeeping Services | M2 Accounting",
  description: "Local bookkeeper in Dandenong. BAS services, payroll, Xero bookkeeping for small businesses. Registered BAS agent serving Dandenong & surrounding areas.",
  keywords: "bookkeeper dandenong, BAS agent dandenong, bookkeeping services dandenong, xero bookkeeper dandenong, small business accountant dandenong",
};

export default function DandenongPage() {
  const services = [
    { name: "Bookkeeping", href: "/services/bookkeeping" },
    { name: "BAS Services", href: "/services/bas-services" },
    { name: "Payroll", href: "/services/payroll" },
    { name: "Xero Bookkeeping", href: "/services/xero-bookkeeping" },
    { name: "Catch-Up Bookkeeping", href: "/services/catch-up-bookkeeping" },
    { name: "Monthly Reporting", href: "/services/monthly-reporting" },
  ];

  const nearbyAreas = [
    { name: "Dandenong South", href: "/areas/dandenong-south" },
    { name: "Noble Park", href: "/areas/noble-park" },
    { name: "Springvale", href: "/areas/springvale" },
    { name: "Keysborough", href: "/areas/keysborough" },
    { name: "Hallam", href: "/areas/hallam" },
    { name: "Doveton", href: "/areas/doveton" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--primary)]/10 rounded-full px-4 py-2 mb-4">
                <svg className="w-5 h-5 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-[var(--primary)] font-medium">Local Dandenong Bookkeeper</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-6">
                Bookkeeper in <span className="text-[var(--primary)]">Dandenong</span>
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Professional bookkeeping and BAS services for small businesses in Dandenong and
                surrounding areas. Local expertise you can trust.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Registered BAS Agent (TPB Licensed)</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Xero Certified Partner</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Face-to-face or remote support</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Fixed, transparent pricing</span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-cta text-center">
                  Free Consultation
                </Link>
                <a href="tel:+61412345678" className="btn-outline text-center">
                  Call +61 412 345 678
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[var(--primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--secondary)] mb-2">Dandenong, VIC</h3>
                  <p className="text-gray-500">South East Melbourne</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dandenong Business */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--secondary)] mb-6">
              Bookkeeping Services for <span className="text-[var(--primary)]">Dandenong Businesses</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Dandenong is the heart of Melbourne's south-east, home to thousands of thriving small
                businesses across retail, trades, manufacturing, and services. Whether you're running
                a shop on Lonsdale Street, operating from the Dandenong Market precinct, or based in
                the industrial areas of Dandenong South, you need reliable bookkeeping support that
                understands your local business environment.
              </p>
              <p>
                M2 Accounting Solutions provides comprehensive bookkeeping services tailored specifically
                for Dandenong businesses. As a registered BAS Agent and Xero certified partner, we help
                local business owners stay ATO compliant, manage their cash flow, and make informed
                financial decisions.
              </p>
              <p>
                Our local presence means we can meet you at your business premises, your local cafe,
                or work entirely remotely - whatever suits your needs best. We're familiar with the
                unique challenges Dandenong businesses face and provide personalized support to help
                you succeed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--secondary)] text-center mb-12">
            Our Services in Dandenong
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:border-[var(--primary)] border-2 border-transparent transition-all group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[var(--secondary)] text-center mb-12">
              Why Choose a Local Dandenong Bookkeeper?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--secondary)] mb-2">Local Understanding</h3>
                <p className="text-gray-600">We know Dandenong's business community, local council requirements, and the unique challenges of operating in the area.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--secondary)] mb-2">Face-to-Face Meetings</h3>
                <p className="text-gray-600">Meet in person at your premises, a local cafe, or our office when you need hands-on support or prefer a personal touch.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--secondary)] mb-2">Same Timezone Support</h3>
                <p className="text-gray-600">Quick responses during business hours. No waiting overnight for answers to urgent questions.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--secondary)] mb-2">Trusted & Reliable</h3>
                <p className="text-gray-600">Build a long-term relationship with a local bookkeeper who cares about your business success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--secondary)] text-center mb-8">
            Also Serving Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {nearbyAreas.map((area, index) => (
              <Link
                key={index}
                href={area.href}
                className="bg-white px-4 py-2 rounded-full border border-gray-200 hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
              >
                {area.name}
              </Link>
            ))}
            <Link
              href="/areas"
              className="bg-[var(--primary)] text-white px-4 py-2 rounded-full hover:bg-[var(--primary-dark)] transition-colors"
            >
              View All Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Work with a Local Dandenong Bookkeeper?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation today and discover how we can help your Dandenong business thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation
            </Link>
            <a
              href="tel:+61412345678"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call +61 412 345 678
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
