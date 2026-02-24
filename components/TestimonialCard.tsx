import { Testimonial } from '@/content/testimonials';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div
      style={{
        backgroundColor: '#F7F5F0',
        borderLeft: '4px solid #C9A84C',
        borderRadius: '0 12px 12px 0',
        padding: '2rem 2.25rem',
        boxShadow: '0 2px 12px rgba(27,42,74,0.06)',
      }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="#C9A84C"
        style={{ marginBottom: '1rem', opacity: 0.8 }}
      >
        <path d="M10.5 6C6.4 6 3 9.4 3 13.5c0 2.7 1.5 5.1 3.7 6.4L5 24h5l2-4.2c3.1-.9 5.3-3.7 5.3-7C17.3 8.7 14.2 6 10.5 6zm14 0c-4.1 0-7.5 3.4-7.5 7.5 0 2.7 1.5 5.1 3.7 6.4L19 24h5l2-4.2c3.1-.9 5.3-3.7 5.3-7C31.3 8.7 28.2 6 24.5 6z"/>
      </svg>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '1rem',
          lineHeight: '1.75',
          color: '#333',
          fontStyle: 'italic',
          marginBottom: '1.5rem',
        }}
      >
        {testimonial.quote}
      </p>
      <p
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: '700',
          color: '#1B2A4A',
          fontSize: '1.05rem',
        }}
      >
        {testimonial.name}
      </p>
      {testimonial.role && (
        <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.25rem' }}>
          {testimonial.role}
        </p>
      )}
    </div>
  );
}
