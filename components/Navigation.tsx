'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { INTEGRATIONS } from '@/config/integrations';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Book', href: '/book' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: '#1B2A4A',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.3)' : '0 1px 0 rgba(201,168,76,0.15)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <Image src="/gtlogo/Gloteemlogo.png" alt="Gloteem Consulting" width={300} height={120} style={{ objectFit: 'contain', height: '200px', width: 'auto', filter: 'brightness(0) invert(1)' }} priority />
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? '#C9A84C' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  letterSpacing: '0.02em',
                  paddingBottom: '2px',
                  borderBottom: isActive ? '2px solid #C9A84C' : '2px solid transparent',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <a
          href={INTEGRATIONS.calendly.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
          style={{ backgroundColor: '#E07B39', color: 'white', padding: '0.55rem 1.4rem', borderRadius: '6px', fontWeight: '600', fontSize: '0.875rem', textDecoration: 'none', whiteSpace: 'nowrap' }}
        >
          Book a Consultation
        </a>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', color: '#C9A84C' }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div style={{ backgroundColor: '#1B2A4A', borderTop: '1px solid rgba(201,168,76,0.2)', padding: '1rem 2rem 1.5rem' }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', color: pathname === link.href ? '#C9A84C' : 'rgba(255,255,255,0.85)', textDecoration: 'none', padding: '0.75rem 0', fontWeight: '500', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={INTEGRATIONS.calendly.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', textAlign: 'center', marginTop: '1rem', backgroundColor: '#E07B39', color: 'white', padding: '0.75rem', borderRadius: '6px', fontWeight: '600', textDecoration: 'none' }}
            onClick={() => setMobileOpen(false)}
          >
            Book a Consultation
          </a>
        </div>
      )}
    </nav>
  );
}
