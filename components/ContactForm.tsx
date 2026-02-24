'use client';

import { useState } from 'react';
import { INTEGRATIONS } from '@/config/integrations';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organisation: '',
    enquiryType: 'General',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', organisation: '', enquiryType: 'General', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.7rem 1rem',
    border: '1.5px solid #e0ddd8',
    borderRadius: '6px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    color: '#222',
    backgroundColor: 'white',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontWeight: '600',
    color: '#1B2A4A',
    fontSize: '0.875rem',
    marginBottom: '0.4rem',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div>
        <label style={labelStyle}>Full Name *</label>
        <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} placeholder="Your full name" style={fieldStyle} />
      </div>
      <div>
        <label style={labelStyle}>Email Address *</label>
        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="your@email.com" style={fieldStyle} />
      </div>
      <div>
        <label style={labelStyle}>Organisation (Optional)</label>
        <input type="text" name="organisation" value={formData.organisation} onChange={handleChange} placeholder="Your organisation" style={fieldStyle} />
      </div>
      <div>
        <label style={labelStyle}>Enquiry Type</label>
        <select name="enquiryType" value={formData.enquiryType} onChange={handleChange} style={fieldStyle}>
          <option value="Leadership Coaching">Leadership Coaching</option>
          <option value="Customer Support">Customer Support</option>
          <option value="Care Consultancy">Care Consultancy</option>
          <option value="Book">Book Enquiry</option>
          <option value="General">General Enquiry</option>
        </select>
      </div>
      <div>
        <label style={labelStyle}>Message *</label>
        <textarea name="message" required value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us about your needs..." style={{ ...fieldStyle, resize: 'vertical' }} />
      </div>

      {status === 'success' && (
        <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', padding: '1rem', borderRadius: '6px', fontSize: '0.9rem' }}>
          ✓ Thank you! We'll be in touch within 2 business days.
        </div>
      )}
      {status === 'error' && (
        <div style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca', color: '#991b1b', padding: '1rem', borderRadius: '6px', fontSize: '0.9rem' }}>
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          backgroundColor: status === 'loading' ? '#aaa' : '#E07B39',
          color: 'white',
          padding: '0.9rem',
          borderRadius: '6px',
          fontWeight: '700',
          fontSize: '1rem',
          border: 'none',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          width: '100%',
          fontFamily: "'Inter', sans-serif",
          transition: 'background-color 0.2s ease',
        }}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
      <p style={{ color: '#888', fontSize: '0.8rem', textAlign: 'center' }}>
        We respond to all enquiries within 2 business days.
      </p>
    </form>
  );
}
