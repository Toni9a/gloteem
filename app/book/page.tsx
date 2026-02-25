import Image from 'next/image';
import Hero from '@/components/Hero';
import { bookContent, playbookContent } from '@/content/book';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Books | Gloteem Consulting',
  description: 'Books by Glory Adebanjo-Taiwo — The Leadership Bridge and Customer Support Playbook for Healthcare Startups.',
};

export default function BookPage() {
  return (
    <main>
      <Hero
        headline="Books by Glory Adebanjo-Taiwo"
        subheadline="Practical resources for leaders, healthcare founders, and support professionals"
        compact={true}
      />

      {/* BOOK 1: The Leadership Bridge */}
      <section style={{ backgroundColor: 'white', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2.5rem', textAlign: 'center' }}>
            Book One
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '5rem', alignItems: 'flex-start' }}>
            {/* Cover */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '280px', height: '370px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(27,42,74,0.25), 0 8px 24px rgba(0,0,0,0.12)' }}>
                <Image src="/book-cover/the-leadership-bridge.jpeg" alt={bookContent.title} fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: '700', color: '#1B2A4A', marginBottom: '0.4rem', lineHeight: '1.2' }}>
                {bookContent.title}
              </h1>
              <p style={{ color: '#C9A84C', fontWeight: '600', fontSize: '1rem', marginBottom: '0.35rem' }}>By {bookContent.author}</p>
              <p style={{ color: '#888', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.75rem' }}>{bookContent.tagline}</p>
              <p style={{ color: '#444', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>{bookContent.description}</p>

              <div style={{ backgroundColor: '#F7F5F0', borderLeft: '4px solid #C9A84C', padding: '1.5rem 1.75rem', borderRadius: '0 10px 10px 0', marginBottom: '2rem' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontStyle: 'italic', color: '#1B2A4A', margin: 0, lineHeight: '1.6' }}>
                  "{bookContent.pullQuote}"
                </p>
              </div>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: '700', color: '#1B2A4A', marginBottom: '1rem' }}>
                What You'll Learn
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {bookContent.keyTakeaways.map((t, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', color: '#333', fontSize: '0.95rem', lineHeight: '1.55' }}>
                    <span style={{ color: '#C9A84C', fontWeight: '700', flexShrink: 0 }}>✓</span>
                    {t}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href={bookContent.amazonUrl} target="_blank" rel="noopener noreferrer"
                  style={{ backgroundColor: '#E07B39', color: 'white', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem', display: 'inline-block', boxShadow: '0 4px 14px rgba(224,123,57,0.35)' }}
                >
                  Buy on Amazon →
                </a>
                <a
                  href="https://read.amazon.co.uk/sample/B0GK2LWNS1?f=1&l=en_GB&r=d4eada89&rid=DJE7V68WZNWKWPKK599B&sid=520-9095145-6084664&cid=A282VEL9C9IA98&ref_=litb_m"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ border: '2px solid #1B2A4A', color: '#1B2A4A', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem', display: 'inline-block', backgroundColor: 'transparent' }}
                >
                  Read Sample
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

      {/* BOOK 2: Customer Support Playbook */}
      <section style={{ backgroundColor: '#F7F5F0', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ color: '#E07B39', fontWeight: '600', fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '2.5rem', textAlign: 'center' }}>
            Digital Playbook
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '5rem', alignItems: 'flex-start' }}>
            {/* Cover */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '280px', height: '370px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 24px 64px rgba(27,42,74,0.25), 0 8px 24px rgba(0,0,0,0.12)' }}>
                <Image src="/book2-cover/heathcarebookcover.avif" alt={playbookContent.title} fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Details */}
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', fontWeight: '700', color: '#1B2A4A', marginBottom: '0.4rem', lineHeight: '1.25' }}>
                {playbookContent.title}
              </h2>
              <p style={{ color: '#C9A84C', fontWeight: '600', fontSize: '1rem', marginBottom: '0.35rem' }}>By {playbookContent.author}</p>
              <p style={{ color: '#888', fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.75rem' }}>{playbookContent.tagline}</p>
              <p style={{ color: '#444', fontSize: '1rem', lineHeight: '1.8', marginBottom: '2rem' }}>{playbookContent.description}</p>

              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: '700', color: '#1B2A4A', marginBottom: '1rem' }}>
                What You'll Receive
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {playbookContent.whatYouGet.map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '0.75rem', color: '#333', fontSize: '0.95rem', lineHeight: '1.6' }}>
                    <span style={{ color: '#C9A84C', fontWeight: '700', flexShrink: 0, fontSize: '1.1rem' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                <a href={playbookContent.payhipUrl} target="_blank" rel="noopener noreferrer"
                  style={{ backgroundColor: '#1B2A4A', color: 'white', padding: '0.85rem 2rem', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem', display: 'inline-block', boxShadow: '0 4px 14px rgba(27,42,74,0.25)' }}
                >
                  Get the Playbook →
                </a>
                <span style={{ color: '#888', fontSize: '0.875rem' }}>Instant digital download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: '2px', background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />

      {/* CTA */}
      <section style={{ backgroundColor: '#1B2A4A', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: '700', color: 'white', marginBottom: '1rem' }}>
            Start Your Journey Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7', marginBottom: '2rem' }}>
            Practical frameworks for building trust, driving change, and delivering excellence.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={bookContent.amazonUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: '#E07B39', color: 'white', padding: '0.9rem 2rem', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}
            >
              The Leadership Bridge
            </a>
            <a href={playbookContent.payhipUrl} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', border: '2px solid rgba(255,255,255,0.5)', color: 'white', padding: '0.9rem 2rem', borderRadius: '6px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}
            >
              Healthcare Playbook
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
