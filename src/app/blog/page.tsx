import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Blog & Resources | M2 Accounting Solutions Melbourne",
  description: "Expert bookkeeping tips, BAS guides, Xero tutorials and tax advice for Australian small businesses. Free resources from M2 Accounting.",
};

export default function BlogPage() {
  const featuredPost = {
    title: "Complete Guide to BAS Lodgement for Small Businesses",
    excerpt: "Everything you need to know about preparing and lodging your Business Activity Statement, including deadlines, common mistakes, and tips for staying compliant.",
    category: "BAS Guide",
    date: "May 5, 2026",
    readTime: "8 min read",
    href: "/blog/complete-guide-bas-lodgement",
  };

  const posts = [
    {
      title: "Top 10 Tax Deductions for Small Businesses in 2026",
      excerpt: "Don't miss out on legitimate tax deductions. Here are the top claims every small business owner should know about.",
      category: "Tax Tips",
      date: "May 1, 2026",
      readTime: "5 min read",
      href: "/blog/tax-deductions-small-businesses",
    },
    {
      title: "Getting Started with Xero: A Beginner's Guide",
      excerpt: "New to Xero? This step-by-step guide will help you set up your account and start using cloud accounting effectively.",
      category: "Xero Guide",
      date: "April 28, 2026",
      readTime: "6 min read",
      href: "/blog/getting-started-xero",
    },
    {
      title: "How to Choose the Right Bookkeeper for Your Business",
      excerpt: "What to look for when hiring a bookkeeper, questions to ask, and red flags to avoid.",
      category: "Business Tips",
      date: "April 22, 2026",
      readTime: "4 min read",
      href: "/blog/choosing-right-bookkeeper",
    },
    {
      title: "Understanding Single Touch Payroll (STP) Phase 2",
      excerpt: "What the latest STP changes mean for your business and how to stay compliant with the new requirements.",
      category: "Payroll",
      date: "April 18, 2026",
      readTime: "5 min read",
      href: "/blog/stp-phase-2-guide",
    },
    {
      title: "5 Signs Your Business Needs a Bookkeeper",
      excerpt: "Are you spending too much time on the books? Here are the signs it's time to get professional help.",
      category: "Business Tips",
      date: "April 12, 2026",
      readTime: "3 min read",
      href: "/blog/signs-you-need-bookkeeper",
    },
    {
      title: "BAS Deadlines Calendar 2026",
      excerpt: "Never miss a BAS deadline again. Here's your complete guide to all quarterly and monthly lodgement dates.",
      category: "BAS Guide",
      date: "April 5, 2026",
      readTime: "2 min read",
      href: "/blog/bas-deadlines-2026",
    },
  ];

  const categories = [
    { name: "All Posts", count: 24, href: "/blog" },
    { name: "BAS Guides", count: 8, href: "/blog/category/bas-guides" },
    { name: "Tax Tips", count: 6, href: "/blog/category/tax-tips" },
    { name: "Xero Guides", count: 5, href: "/blog/category/xero-guides" },
    { name: "Payroll", count: 3, href: "/blog/category/payroll" },
    { name: "Business Tips", count: 2, href: "/blog/category/business-tips" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(to bottom right, #f9fafb, white)', padding: '64px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ color: '#E6A817', fontWeight: 600, marginBottom: '8px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>RESOURCES & INSIGHTS</p>
            <h1 style={{ fontSize: '42px', fontWeight: 700, color: '#1a1a1a', marginBottom: '24px', lineHeight: 1.2 }}>
              Bookkeeping <span style={{ color: '#E6A817' }}>Blog</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#4b5563', lineHeight: 1.7 }}>
              Expert tips, guides, and insights to help you manage your business finances with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section style={{ padding: '48px 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <Link
            href={featuredPost.href}
            style={{ display: 'block', background: 'linear-gradient(to bottom right, #1a1a1a, #374151)', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none' }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr' }} className="lg:grid-cols-2">
              <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ display: 'inline-block', backgroundColor: '#E6A817', color: 'white', fontSize: '14px', fontWeight: 600, padding: '4px 16px', borderRadius: '50px', marginBottom: '16px', width: 'fit-content' }}>
                  Featured
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: 1.3 }}>
                  {featuredPost.title}
                </h2>
                <p style={{ color: '#9ca3af', marginBottom: '24px', lineHeight: 1.6 }}>{featuredPost.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '14px', color: '#6b7280' }}>
                  <span>{featuredPost.category}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              <div style={{ backgroundColor: '#4b5563', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="lg:aspect-auto">
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg style={{ width: '40px', height: '40px', color: '#E6A817' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Content */}
      <section style={{ padding: '64px 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }} className="lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div style={{ position: 'sticky', top: '96px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {/* Categories */}
                <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                  <h3 style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>Categories</h3>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {categories.map((cat, index) => (
                      <li key={index}>
                        <Link
                          href={cat.href}
                          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#4b5563', textDecoration: 'none' }}
                        >
                          <span>{cat.name}</span>
                          <span style={{ fontSize: '14px', backgroundColor: '#f3f4f6', padding: '4px 8px', borderRadius: '4px' }}>{cat.count}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div style={{ backgroundColor: '#E6A817', borderRadius: '16px', padding: '24px', color: 'white' }}>
                  <h3 style={{ fontWeight: 700, marginBottom: '8px' }}>Stay Updated</h3>
                  <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '16px' }}>
                    Get bookkeeping tips and BAS reminders straight to your inbox.
                  </p>
                  <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <input
                      type="email"
                      placeholder="Your email"
                      style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: 'none', fontSize: '14px', color: '#1a1a1a' }}
                    />
                    <button
                      type="submit"
                      style={{ width: '100%', backgroundColor: '#1a1a1a', color: 'white', padding: '12px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '32px' }} className="md:grid-cols-2">
                {posts.map((post, index) => (
                  <Link
                    key={index}
                    href={post.href}
                    style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textDecoration: 'none', display: 'block' }}
                  >
                    <div style={{ aspectRatio: '16/9', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(230, 168, 23, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg style={{ width: '24px', height: '24px', color: '#E6A817' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <span style={{ fontSize: '12px', fontWeight: 600, color: '#E6A817', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        {post.category}
                      </span>
                      <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a1a', marginTop: '8px', marginBottom: '8px', lineHeight: 1.4 }}>
                        {post.title}
                      </h3>
                      <p style={{ color: '#4b5563', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>{post.excerpt}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: '#6b7280' }}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More */}
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <button style={{ backgroundColor: 'white', color: '#1a1a1a', padding: '16px 32px', borderRadius: '8px', fontWeight: 600, border: '2px solid #e5e7eb', cursor: 'pointer' }}>
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
