import Link from 'next/link';

export default function NotFound() {
  return (
    <main>
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F7F5F0', padding: '2rem', marginTop: '76px' }}>
        <div style={{ textAlign: 'center', maxWidth: '500px' }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '5rem', fontWeight: '700', color: '#C9A84C', lineHeight: 1, marginBottom: '0.5rem' }}>404</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: '700', color: '#1B2A4A', marginBottom: '1rem' }}>
            Page Not Found
          </h1>
          <p style={{ color: '#666', lineHeight: '1.7', marginBottom: '2rem' }}>
            The page you're looking for might have been moved or removed.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" style={{ backgroundColor: '#E07B39', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>
              Go Home
            </Link>
            <Link href="/contact" style={{ border: '2px solid #1B2A4A', color: '#1B2A4A', padding: '0.75rem 1.75rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
