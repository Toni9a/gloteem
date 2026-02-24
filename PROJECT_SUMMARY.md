# Gloteem Consulting Website - Project Summary

## Overview
Complete professional website for **Gloteem Consulting**, a leadership and organisational advisory firm founded by **Glory Adebanjo-Taiwo**.

**Live Repository:** https://github.com/Toni9a/gloteem.git
**Founder:** Glory Adebanjo-Taiwo
**Tagline:** "Building Leaders. Strengthening Organisations. Delivering Excellence."

---

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Styling:** Tailwind CSS v4 (inline styles used due to custom color incompatibility)
- **Language:** TypeScript
- **Fonts:** Playfair Display (serif, headings), Inter (sans-serif, body)
- **Images:** Next.js Image component with optimization
- **Email:** Resend (placeholder, not yet configured)
- **Deployment Target:** Vercel with custom domain `gloteemconsulting.com`

---

## Brand Identity

### Colors
- **Navy (Primary):** `#1B2A4A`
- **Gold (Accent):** `#C9A84C`
- **Orange (CTA):** `#E07B39`
- **Cream (Background):** `#F7F5F0`
- **Dark Grey (Text):** `#1A1A1A`

### Fonts
- **Headings:** Playfair Display (serif) - elegant, professional
- **Body:** Inter (sans-serif) - clean, readable
- **Both imported from Google Fonts in `globals.css`**

### Logo
- **File:** `/public/gtlogo/Gloteemlogo.png` (256×256px, square)
- **Usage:** 200px height in nav and footer with `filter: brightness(0) invert(1)` (white on dark navy)
- **Also set as favicon** via `app/layout.tsx` metadata

---

## Project Structure

```
/Users/toni/gloteem/
├── app/
│   ├── layout.tsx                    # Root layout with favicon
│   ├── globals.css                   # Tailwind v4 config + Google Fonts
│   ├── page.tsx                      # Home page
│   ├── about/
│   │   └── page.tsx                  # About page (Glory's bio)
│   ├── services/
│   │   └── page.tsx                  # Services pillar cards
│   ├── book/
│   │   └── page.tsx                  # Two books display
│   ├── contact/
│   │   └── page.tsx                  # Contact form + Calendly
│   ├── blog/
│   │   └── page.tsx                  # Coming soon placeholder
│   ├── not-found.tsx                 # 404 page
│   └── api/
│       └── contact/
│           └── route.ts              # Contact form API (logs data)
├── components/
│   ├── Navigation.tsx                # Fixed nav with logo (200px)
│   ├── Footer.tsx                    # Footer with logo + social icons
│   ├── Hero.tsx                      # Full-width hero section
│   ├── PillarCard.tsx                # Service/expertise pillars
│   ├── TestimonialCard.tsx           # Client testimonials
│   └── ContactForm.tsx               # Contact form component
├── config/
│   └── integrations.ts               # Centralized URLs & brand config
├── content/
│   ├── about.ts                      # Glory's biography & credentials
│   ├── services.ts                   # 3 service pillars
│   ├── testimonials.ts               # 2 client testimonials
│   └── book.ts                       # 2 books data
├── public/
│   ├── gtlogo/
│   │   └── Gloteemlogo.png           # Gloteem logo (200px nav/footer)
│   ├── headshot/
│   │   └── glory.jpeg                # Glory's professional headshot
│   ├── pilars/
│   │   └── pilarsimage.png           # Bridge with 3 pillars (hero background)
│   ├── book-cover/
│   │   └── the-leadership-bridge.jpeg # Book 1 cover
│   └── book2-cover/
│       └── heathcarebookcover.avif   # Book 2 cover
├── package.json                       # Dependencies
├── tailwind.config.ts                 # Tailwind configuration
├── tsconfig.json                      # TypeScript config
├── next.config.ts                     # Next.js config
└── .claude/
    └── launch.json                   # Dev server config for preview_start
```

---

## Pages & Routes

### Home (`/`)
- **Hero:** Bridge/pillars image with gradient overlay
- **Positioning Statement:** Cross-sector leadership tagline
- **Expertise Pillars:** 3 cards (Leadership Development, Startup Structure, Care Consultancy)
- **Book Feature:** The Leadership Bridge showcase
- **Testimonials:** 2 client success stories (Ayo Olukayo, Bisola Adenike)
- **CTA:** "Ready to Build Something That Lasts?" + consultation link

### About (`/about`)
- **Hero:** Glory's professional headshot (overrides default bridge image)
- **Biography:** "Servant Leader. HR Professional. Author."
- **Bio Text:** Cross-sector experience spanning banking, healthcare, consulting
- **Credentials Grid:** 8 certifications/credentials listed

### Services (`/services`)
- **4 Service Pillars:**
  1. Leadership Development
  2. Organisational Change
  3. Care Consultancy
  4. Start-up Advisory
- **Each with icon, description, and "Learn More" link**

### Book (`/book`)
- **Hero:** Bridge/pillars image with "Books by Glory Adebanjo-Taiwo"
- **Book 1 - The Leadership Bridge:**
  - Actual cover image (JPEG)
  - Amazon link: https://www.amazon.co.uk/gp/aw/d/B0GK2LWNS1
  - Tagline: "Building Trust, Driving Change, Strengthening Impact"
  - 5-point "What You'll Learn" list
- **Book 2 - Customer Support Playbook for Healthcare Startups:**
  - Actual cover image (AVIF)
  - Payhip link: https://payhip.com/b/6A3av
  - Tagline: "Build Structured, Compassionate Customer Support Systems"
  - 3-item "What You'll Receive" list

### Contact (`/contact`)
- **Hero:** Bridge/pillars image
- **Two-column layout:**
  - **Left:** Contact form (Full Name, Email, Organisation, Enquiry Type, Message)
  - **Right:** Calendly booking widget + Direct Contact panel
- **Social Icons:** LinkedIn, YouTube, Instagram, Facebook in dark navy panel
- **Both email addresses:** enquiry@gloteemconsulting.com + gloryadebanjo21@gmail.com
- **FAQ Section:** 4 common questions

### Blog (`/blog`)
- **Placeholder:** "Coming soon" page

### 404 (`/not-found`)
- **Custom 404 page** with link back to home

---

## Key Components

### Navigation.tsx
- **Fixed positioned** at top of viewport (z-index: 100)
- **200px logo** with CSS filter for white appearance on dark navy
- **Responsive:** Hidden nav links on mobile, hamburger menu
- **Active link highlighting:** Gold bottom border on current page
- **Scroll effect:** Shadow increases when scrolled
- **CTA Button:** Orange "Book a Consultation" button

### Hero.tsx
- **Customizable background image** (default: bridge/pillars)
- **Full-width** with overlay gradient (rgba(12, 20, 40, 0.78))
- **Compact mode** for about/contact pages (48vh vs 92vh)
- **Centered text** with Playfair Display headings
- **Margin-top: 76px** to account for fixed nav

### Footer.tsx
- **Dark navy background** (#1B2A4A)
- **4-column grid:**
  1. Brand + Logo (200px) + Social icons
  2. Navigation links
  3. Services list
  4. Contact info
- **Social icons:** LinkedIn, YouTube, Instagram, Facebook, Email (5 total)
- **All links functional** to real URLs

### PillarCard.tsx
- **Minimal mode** for home (title + description)
- **Full mode** for services page (icon + title + full description + link)
- **Gold SVG icon** at top
- **Responsive grid** layout

### TestimonialCard.tsx
- **Gold left border** accent
- **Quote SVG icon** (gold)
- **Client quote text** in dark grey
- **Client name** below quote
- **Subtle shadow** for depth

### ContactForm.tsx
- **Client component** (form state managed locally)
- **Fields:** Full Name, Email, Organisation (optional), Enquiry Type (dropdown), Message
- **Submit button:** Orange, full-width
- **Success/error messages** displayed below form
- **API endpoint:** POST `/api/contact`

---

## Configuration Files

### config/integrations.ts
```typescript
export const INTEGRATIONS = {
  calendly: { url: 'https://calendly.com/enquiry-gloteemconsulting', embedType: 'inline' },
  stripe: { paymentLink: 'https://buy.stripe.com/PLACEHOLDER' },
  amazon: { bookUrl: 'https://www.amazon.co.uk/gp/aw/d/B0GK2LWNS1' },
  email: {
    contact: 'enquiry@gloteemconsulting.com',
    personal: 'gloryadebanjo21@gmail.com'
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/gloryat/',
    youtube: 'https://www.youtube.com/@gloryadebanjo517',
    facebook: 'https://www.facebook.com/share/17ymTbwLG8/',
    instagram: 'https://www.instagram.com/glory.adebanjo',
  },
  domain: 'gloteemconsulting.com',
};

export const BRAND = {
  name: 'Gloteem Consulting',
  founder: 'Glory Adebanjo-Taiwo',
  tagline: 'Building Leaders. Strengthening Organisations. Delivering Excellence.',
};
```

### content/ Files
- **about.ts** - Glory's biography + 8 credentials
- **services.ts** - 3 service pillars (leadership, startup, care)
- **testimonials.ts** - 2 client testimonials with names
- **book.ts** - 2 book objects (bookContent + playbookContent)

---

## Important Technical Decisions

### Tailwind v4 Issue
- **Problem:** Tailwind v4 changed syntax from `@tailwind base/components/utilities` to `@import "tailwindcss"` + `@theme {}` blocks
- **Custom colors** (`bg-navy`, `text-gold`, etc.) were not working
- **Solution:** Replaced all Tailwind utility classes with **inline styles** using hardcoded hex values
- **Benefit:** Works across any Tailwind version, no CSS framework dependencies

### CSS Import Order
- **Critical:** In Tailwind v4, `@import url(...)` for Google Fonts MUST come BEFORE `@import "tailwindcss"`
- **Error fixed:** "Parsing CSS failed — @import rules must precede all rules aside from @charset and @layer statements"

### Image Optimization
- Used Next.js **Image component** with `fill` prop for book covers and headshot
- `objectFit: 'cover'` for proper aspect ratio handling
- Logo uses `width: 'auto'` with fixed height for responsive sizing

### Logo Filter
- SVG/PNG logo has dark elements on transparent background
- Applied **`filter: brightness(0) invert(1)`** to render as white on dark navy backgrounds
- Works on both nav and footer without additional complexity

---

## Styling Approach

### All styles are **inline** via `style={{}}` props
- **No Tailwind classes** (due to v4 incompatibility)
- **Consistent hex values** from brand config
- **Examples:**
  ```typescript
  style={{
    backgroundColor: '#1B2A4A',
    color: '#C9A84C',
    fontFamily: "'Playfair Display', serif"
  }}
  ```

### CSS classes for reusable styles
- `.section-padding` - Standard section padding
- `.section-white` - White background sections
- `.section-cream` - Cream background sections
- `.divider-gold` - Gold horizontal line

---

## Deployment

### Prerequisites
1. Vercel account connected to GitHub repo
2. GitHub repo: https://github.com/Toni9a/gloteem.git
3. Custom domain: `gloteemconsulting.com` (via domain registrar)

### Steps
1. Connect GitHub repo to Vercel
2. Set environment variables (if needed for Resend email API)
3. Add custom domain in Vercel project settings
4. Deploy with `vercel deploy`

### Environment Variables (Optional)
```
NEXT_PUBLIC_RESEND_API_KEY=your_key_here
```

---

## API Routes

### POST `/api/contact`
- **Accepts:** Form data (name, email, organisation, enquiry_type, message)
- **Current behavior:** Logs to console, returns success
- **TODO:** Integrate Resend email API to actually send emails
- **Resend email code is commented out** in `app/api/contact/route.ts`

---

## Content Management

### How to Update

**Social Links:** Edit `config/integrations.ts` → `INTEGRATIONS.social`

**Book Links:** Edit `config/integrations.ts` or `content/book.ts`

**About/Services/Testimonials:** Edit files in `content/` folder

**Images:** Place in `/public/` and reference in components

**Colors:** Search `#1B2A4A`, `#C9A84C`, `#E07B39`, `#F7F5F0` throughout codebase

---

## Dev Server

### Start locally
```bash
npm run dev
# Runs on http://localhost:3000
```

### In Claude Code
```bash
preview_start "Gloteem Dev Server"
# .claude/launch.json configured with npm run dev on port 3000
```

---

## Git History

**Latest commits:**
1. `39d2c77` - Add favicon using Gloteem logo
2. `f0e1636` - Build complete Gloteem Consulting website

**Branch:** main

---

## Known Limitations / TODO

- [ ] Resend email integration not yet active (API commented out)
- [ ] Stripe payment link is placeholder
- [ ] Blog page is "coming soon" placeholder
- [ ] Contact form currently just logs data

---

## Troubleshooting

### Logo not showing in nav?
- Check `/public/gtlogo/Gloteemlogo.png` exists
- Verify `filter: brightness(0) invert(1)` is applied
- Clear browser cache and restart dev server

### Fonts not loading?
- Ensure Google Fonts import is FIRST in `app/globals.css` before `@import "tailwindcss"`
- Check network tab in DevTools for font loading

### Images broken?
- Verify image paths start with `/` (relative to `/public/`)
- Use Next.js Image component for optimization
- Check file exists in correct `/public/` subfolder

### Tailwind colors not working?
- Remember: only inline styles work (no Tailwind utility classes)
- Use hardcoded hex values directly in style props

---

## For New Claude Code Sessions

If starting fresh or continuing from checkpoint:

1. **Clone repo:** `git clone https://github.com/Toni9a/gloteem.git`
2. **Install:** `npm install`
3. **Start dev server:** `npm run dev`
4. **Read this file** for full context
5. **Key files to understand:**
   - `config/integrations.ts` - All URLs and brand config
   - `components/Navigation.tsx` - Logo and nav logic
   - `app/layout.tsx` - Root layout with favicon
   - `app/globals.css` - Tailwind and fonts setup

---

## Final Notes

- **Favicon:** Logo set in metadata via `icons: { icon: '/gtlogo/Gloteemlogo.png' }`
- **Responsive:** Site works on mobile, tablet, and desktop
- **Accessibility:** Nav links have active states, semantic HTML used
- **Performance:** Next.js Image optimization for all images, lazy loading
- **SEO:** Metadata configured in root layout
- **Branding:** Consistent colors, fonts, and messaging throughout

**Status:** ✅ Complete and ready for deployment to Vercel with custom domain
