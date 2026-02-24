# Gloteem Consulting - Setup Instructions

This document outlines all the steps needed to complete the website setup before going live.

## ✅ Initial Setup (Already Done)

- [x] Next.js 14 project created with Tailwind CSS and TypeScript
- [x] Brand colors and typography configured
- [x] All pages created (Home, About, Services, Book, Contact, Blog Coming Soon, 404)
- [x] Navigation and Footer components built
- [x] Contact form component with email handling
- [x] All content organized in `content/` folder
- [x] Images imported (headshot and book cover)
- [x] Project builds successfully

## 📋 TODO: Configuration & Integration

### 1. Update Integration URLs (config/integrations.ts)

```typescript
// Update these placeholders with actual URLs:
INTEGRATIONS.calendly.url = 'https://calendly.com/enquiry-gloteemconsulting'
INTEGRATIONS.stripe.paymentLink = 'https://buy.stripe.com/ACTUAL_LINK'
INTEGRATIONS.social.linkedin = 'https://linkedin.com/in/glory-adebanjo'
```

**Steps:**
1. Get your Calendly booking link from https://calendly.com
2. Create a Stripe payment link for "The Leadership Bridge" book
3. Add your LinkedIn profile URL
4. Update these values in `config/integrations.ts`

### 2. Set Up Email Functionality (Optional but Recommended)

To enable the contact form to send emails:

1. **Create Resend account:**
   - Go to https://resend.com
   - Sign up and verify your domain (gloteemconsulting.com)
   - Get your API key

2. **Update .env.local:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add:
   RESEND_API_KEY=your_api_key_here
   ```

3. **Uncomment email code in app/api/contact/route.ts:**
   - Find the commented section with `// const resend = new Resend()`
   - Uncomment the Resend imports and email sending logic
   - Install resend: `npm install resend`

4. **Test the contact form:**
   - Fill out the form and verify you receive an email at enquiry@gloteemconsulting.com
   - Verify auto-reply is sent to the form submitter

### 3. Update Content (If Needed)

Edit these files to customize content:

- **About page:** `content/about.ts`
  - Update biography if needed
  - Verify credentials list is complete

- **Services:** `content/services.ts`
  - Update service descriptions
  - Verify all 3 pillars are correct

- **Testimonials:** `content/testimonials.ts`
  - Add additional testimonials if available
  - Current: 2 testimonials

- **Book:** `content/book.ts`
  - Update book description
  - Verify key takeaways
  - Update Stripe link when ready

### 4. Update Images

Replace placeholder images in `public/`:

- **Headshot:** Replace `public/headshot/glory.jpeg`
  - Recommended size: 500x600px or 600x800px
  - Format: JPEG or WebP for best performance

- **Book Cover:** Replace `public/book-cover/the-leadership-bridge.jpeg`
  - Recommended size: 300x450px or 400x600px
  - Format: JPEG or PNG

### 5. Set Up Domain & Hosting

**Option A: Deploy to Vercel (Recommended)**

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Gloteem Consulting website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. Connect to Vercel:
   - Go to https://vercel.com
   - Click "Add New Project"
   - Import from GitHub
   - Select this repository
   - Deploy

3. Configure domain:
   - Add domain: gloteemconsulting.com
   - Follow Vercel's DNS configuration steps
   - Update DNS records at your domain registrar

4. Add environment variables in Vercel dashboard:
   - Add `RESEND_API_KEY` if using email

### 6. Pre-Launch Checklist

Run through this checklist before going live:

- [ ] All links in Navigation working
- [ ] Home page loads with all sections
- [ ] About page displays biography and credentials
- [ ] Services page shows all 3 pillars with full descriptions
- [ ] Book page displays cover image and details
- [ ] Contact form submits successfully
- [ ] Contact form sends email to enquiry@gloteemconsulting.com
- [ ] Auto-reply email received
- [ ] Calendly booking widget opens when clicking CTA buttons
- [ ] Amazon book link works
- [ ] Stripe payment link works (if set up)
- [ ] LinkedIn link works
- [ ] Mobile responsive on iPhone and Android
- [ ] All images load correctly
- [ ] No broken images or 404 errors
- [ ] 404 page displays correctly
- [ ] Navigation active state highlighting works
- [ ] Hover states on buttons and links work
- [ ] Footer is visible and contains contact info
- [ ] Speed test (Lighthouse) shows 90+ score

### 7. Post-Launch Tasks

After going live:

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics
- [ ] Verify meta titles and descriptions in browser
- [ ] Test social media sharing (og:image, og:description)
- [ ] Monitor contact form submissions
- [ ] Monitor Calendly bookings
- [ ] Check error logs for any issues

## 🔐 Security & Best Practices

- ✓ API key safely stored in environment variables
- ✓ Contact form validates input on client and server
- ✓ No sensitive data in URLs
- ✓ HTTPS enforced (automatic on Vercel)
- ✓ Content Security Policy ready (add if needed)

## 📞 Testing the Site Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:3000

# Test each page:
# - Home: http://localhost:3000/
# - About: http://localhost:3000/about
# - Services: http://localhost:3000/services
# - Book: http://localhost:3000/book
# - Contact: http://localhost:3000/contact

# Test contact form (won't send email without Resend setup)
# Just verify form submits and shows success message
```

## 🚀 Deployment Command

When ready to deploy:

```bash
# Build for production
npm run build

# Start production server (for local testing)
npm run start
```

## 💡 Pro Tips

1. **Easy Frontend Swap:** All integrations and content are in separate files. If you want to rebuild the frontend with a different tool, just import from `config/` and `content/` folders.

2. **Content Management:** All copy is in the `content/` folder. Update there instead of in components.

3. **Brand Colors:** All brand colors are in `tailwind.config.ts`. Update once to change the entire site.

4. **Development:** Components are modular and reusable. New pages follow the same pattern.

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Resend Email Docs](https://resend.com/docs)
- [Calendly Embed Options](https://calendly.com/features/embed)

## ❓ Troubleshooting

**Contact form not sending emails:**
- Verify Resend API key is set in environment variables
- Check that email code is uncommented in `app/api/contact/route.ts`
- Verify Resend domain is verified

**Images not loading:**
- Ensure images are in `public/headshot/` and `public/book-cover/`
- Check image file names match those in components
- Verify image format (JPEG, PNG, WebP)

**Build errors:**
- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

---

**Questions?** Email enquiry@gloteemconsulting.com
