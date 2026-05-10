"use client";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Owner, Mitchell's Plumbing",
      location: "Dandenong",
      rating: 5,
      text: "Manisha has been handling our bookkeeping for over 2 years now. She's reliable, accurate, and always available when we need her. Our BAS lodgements are always on time.",
    },
    {
      name: "James Chen",
      role: "Director, Chen Transport",
      location: "Cranbourne",
      rating: 5,
      text: "Running a transport business with multiple trucks means complex bookkeeping. M2 Accounting made it simple. They understand our industry and keep us ATO compliant.",
    },
    {
      name: "Priya Sharma",
      role: "Owner, Cafe Delights",
      location: "Berwick",
      rating: 5,
      text: "As a busy cafe owner, I didn't have time to manage my books. Manisha took over and transformed our financial management. Clear reports and on-time BAS.",
    },
    {
      name: "Michael Thompson",
      role: "Sole Trader, Thompson Electrical",
      location: "Narre Warren",
      rating: 5,
      text: "I was struggling with overdue BAS and messy books. They cleaned everything up and got me back on track with the ATO. Now I can focus on my work.",
    },
  ];

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f8f9fa' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <p style={{ color: '#E6A817', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Client Testimonials</p>
          <h2 style={{ fontSize: '36px', fontWeight: 700, color: '#1a1a1a', marginBottom: '16px' }}>
            What Our{" "}
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span style={{ position: 'relative', zIndex: 10 }}>Clients Say</span>
              <span style={{ position: 'absolute', bottom: '4px', left: 0, width: '100%', height: '10px', backgroundColor: 'rgba(230, 168, 23, 0.3)', zIndex: 0 }}></span>
            </span>
          </h2>
          <p style={{ color: '#666', maxWidth: '500px', margin: '0 auto', fontSize: '16px', lineHeight: 1.7 }}>
            Don&apos;t just take our word for it. Here&apos;s what local business owners say about working with us.
          </p>
        </div>

        {/* Google Badge */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            backgroundColor: 'white',
            padding: '14px 24px',
            borderRadius: '50px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            border: '1px solid #eee'
          }}>
            <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} style={{ width: '16px', height: '16px', color: '#E6A817' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>5.0 Rating on Google</p>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '24px', maxWidth: '900px', margin: '0 auto' }} className="md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '1px solid #eee',
                position: 'relative'
              }}
            >
              {/* Quote Icon */}
              <div style={{ position: 'absolute', top: '20px', right: '20px', opacity: 0.1 }}>
                <svg style={{ width: '36px', height: '36px', color: '#E6A817' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} style={{ width: '18px', height: '18px', color: '#E6A817' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>
                &quot;{testimonial.text}&quot;
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '20px', borderTop: '1px solid #f0f0f0' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#E6A817',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '18px',
                  flexShrink: 0
                }}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '15px', color: '#1a1a1a' }}>{testimonial.name}</p>
                  <p style={{ fontSize: '13px', color: '#666' }}>{testimonial.role}</p>
                  <p style={{ fontSize: '12px', color: '#E6A817', fontWeight: 500 }}>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
