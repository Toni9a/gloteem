# Gloteem Consulting Website

A professional leadership consulting website for Gloteem Consulting, built with Next.js 14, Tailwind CSS, and TypeScript.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Copy environment template (optional for email functionality)
cp .env.example .env.local
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
gloteem-consulting/
├── config/
│   └── integrations.ts          # All external URLs and API keys
├── content/
│   ├── about.ts                 # About page content
│   ├── services.ts              # Services and pillars
│   ├── testimonials.ts          # Client testimonials
│   └── book.ts                  # Book information
├── public/
│   ├── headshot/                # Glory's photos
│   └── book-cover/              # Book cover images
├── components/
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── PillarCard.tsx
│   ├── TestimonialCard.tsx
│   └── ContactForm.tsx
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── book/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx            # Coming soon
│   ├── api/contact/route.ts     # Email handler
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
└── tailwind.config.ts
```

## 🎨 Design System

### Colors
- **Navy**: `#1B2A4A` - Primary, headers, authority
- **Gold**: `#C9A84C` - Accent, highlights, excellence
- **Orange**: `#E07B39` - CTA buttons, warmth
- **Cream**: `#F7F5F0` - Backgrounds, cards
- **Dark Grey**: `#1A1A1A` - Body text

### Fonts
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## ⚙️ Configuration

### Update Integrations

Edit `config/integrations.ts` with your actual URLs:

```typescript
export const INTEGRATIONS = {
  calendly: {
    url: 'https://calendly.com/your-link', // Update this
  },
  stripe: {
    paymentLink: 'https://buy.stripe.com/your-link', // Update this
  },
  social: {
    linkedin: 'https://linkedin.com/in/your-profile', // Update this
  },
  // ... other config
};
```

### Update Content

- **About**: Edit `content/about.ts`
- **Services**: Edit `content/services.ts`
- **Testimonials**: Edit `content/testimonials.ts`
- **Book**: Edit `content/book.ts`

### Add Images

Place images in:
- `public/headshot/` - Glory's photos
- `public/book-cover/` - Book cover image

## 📧 Email Setup (Optional)

To enable contact form emails:

1. Sign up at [Resend.com](https://resend.com)
2. Get your API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=your_key_here
   ```
4. Uncomment the email code in `app/api/contact/route.ts`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import the GitHub repository
4. Deploy
5. Add domain: `gloteemconsulting.com`
6. Configure DNS records

### Pre-Launch Checklist

- [ ] Domain pointing to Vercel
- [ ] SSL certificate active
- [ ] enquiry@gloteemconsulting.com email configured
- [ ] Contact form sending emails
- [ ] Auto-reply email working
- [ ] Calendly booking link live
- [ ] Stripe payment link live
- [ ] All images loaded correctly
- [ ] Mobile responsive (iOS/Android)
- [ ] All navigation links working
- [ ] 404 page displays correctly
- [ ] Lighthouse score 90+
- [ ] Meta titles/descriptions set
- [ ] Social sharing OG image set
- [ ] LinkedIn link updated
- [ ] Google Analytics installed
- [ ] Sitemap submitted to Google Search Console

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
```

## 📱 Responsive Design

The site is fully responsive:
- **Mobile**: 375px and up
- **Tablet**: 768px and up
- **Desktop**: 1280px and up

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigable
- Focus states visible
- Respects `prefers-reduced-motion`
- All images have alt text
- Semantic HTML

## 📈 Performance

- Lighthouse target: 90+ across all metrics
- Images optimized with Next.js Image component
- Fonts loaded via next/font
- CSS utilities for efficient styling
- Minimal JavaScript

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Vercel
- **Email**: Resend (optional)
- **Calendar**: Calendly embed
- **Payment**: Stripe (link)

## 📝 Notes

- All configuration is centralized in `config/integrations.ts` for easy frontend swapping
- Content is separated from components in `content/` folder
- Brand colors and typography are in `tailwind.config.ts`
- Smooth scroll animations on section entry
- Gold divider lines between major sections

## 📞 Support

For questions or issues:
- Email: enquiry@gloteemconsulting.com
- LinkedIn: [Glory's Profile]

---

Built with ❤️ for Gloteem Consulting
