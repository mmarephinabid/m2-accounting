import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Services Melbourne | M2 Accounting Solutions",
  description: "Professional bookkeeping services for small businesses in Melbourne. Bank reconciliations, accounts payable/receivable, financial records. Fixed pricing from $300/month.",
};

export default function BookkeepingPage() {
  const features = [
    {
      title: "Bank Reconciliations",
      description: "We match your bank and credit card statements with your accounting records, ensuring every transaction is accurately recorded.",
    },
    {
      title: "Accounts Payable",
      description: "Track and manage what your business owes to suppliers, ensuring bills are paid on time and cash flow is optimized.",
    },
    {
      title: "Accounts Receivable",
      description: "Monitor customer invoices, follow up on outstanding payments, and maintain healthy cash flow.",
    },
    {
      title: "General Ledger",
      description: "Maintain accurate financial records with proper categorization and chart of accounts management.",
    },
    {
      title: "Invoice Processing",
      description: "Create professional invoices, track payments, and manage your billing workflow efficiently.",
    },
    {
      title: "Expense Tracking",
      description: "Categorize and track all business expenses, ensuring nothing falls through the cracks.",
    },
  ];

  const benefits = [
    "Save time to focus on growing your business",
    "Reduce errors with professional expertise",
    "Stay ATO compliant at all times",
    "Make better decisions with accurate financial data",
    "Never miss a deadline or payment",
    "Peace of mind knowing your books are in order",
  ];

  const pricing = [
    {
      name: "Basic",
      transactions: "Up to 30 transactions/month",
      price: "$300",
      features: ["Bank reconciliation", "GST tracking", "Monthly P&L report", "Email support"],
    },
    {
      name: "Standard",
      transactions: "Up to 100 transactions/month",
      price: "$550",
      features: ["All Basic features", "Accounts payable/receivable", "Expense tracking", "Phone support"],
    },
    {
      name: "Premium",
      transactions: "Up to 200 transactions/month",
      price: "$850",
      features: ["All Standard features", "Full bookkeeping service", "Monthly meetings", "Priority support"],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/services" className="inline-flex items-center gap-2 text-[var(--primary)] mb-4 hover:underline">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Services
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary)] mb-6">
                <span className="text-[var(--primary)]">Bookkeeping</span> Services
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Complete day-to-day bookkeeping to keep your finances organized, accurate, and
                ATO-ready. Let us handle the numbers while you focus on growing your business.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-green-700 text-sm font-medium">Xero Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-blue-700 text-sm font-medium">From $300/month</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-cta text-center">
                  Get Free Quote
                </Link>
                <Link href="/pricing" className="btn-outline text-center">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--primary)]/10 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[var(--secondary)]">Professional Bookkeeping</h3>
                  <p className="text-gray-500">Accurate & Reliable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4">
              What's <span className="gold-underline">Included</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive bookkeeping services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4 text-[var(--primary)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[var(--secondary)] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[var(--secondary)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Benefits of Professional <span className="text-[var(--primary)]">Bookkeeping</span>
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Why Choose M2?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Dedicated Bookkeeper</h4>
                    <p className="text-gray-300 text-sm">One point of contact who knows your business.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Fixed Monthly Pricing</h4>
                    <p className="text-gray-300 text-sm">No surprises, no hidden fees.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Xero Expertise</h4>
                    <p className="text-gray-300 text-sm">Certified partner with years of experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--secondary)] mb-4">
              Bookkeeping <span className="gold-underline">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600">
              Transparent, fixed-price packages to suit your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricing.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border-2 border-transparent hover:border-[var(--primary)] transition-all"
              >
                <h3 className="text-xl font-bold text-[var(--secondary)] mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.transactions}</p>
                <div className="text-4xl font-bold text-[var(--primary)] mb-6">
                  {plan.price}<span className="text-lg text-gray-500 font-normal">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 rounded-lg font-semibold bg-gray-100 text-[var(--secondary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/pricing" className="text-[var(--primary)] font-semibold hover:underline">
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--primary)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Get Your Books in Order?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book a free consultation and discover how professional bookkeeping can transform your business.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[var(--primary)] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
