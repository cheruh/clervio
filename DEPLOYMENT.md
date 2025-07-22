# Clervio Deployment Checklist

## Pre-Deployment Setup

### 1. Environment Configuration
- [ ] Create Loops account at [loops.so](https://loops.so)
- [ ] Get Loops API key from Settings > API
- [ ] Configure environment variables in Vercel:
  - `LOOPS_API_KEY`: Your Loops API key
  - `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g., https://clervio.com)

### 2. Domain Setup
- [ ] Purchase/configure your domain
- [ ] Add domain to Vercel project
- [ ] Configure DNS records as instructed by Vercel
- [ ] Set up Loops email domain (if using custom domain for emails)

### 3. Code Quality
- [ ] All TypeScript errors resolved
- [ ] Build passes without errors (`npm run build`)
- [ ] All components have proper exports
- [ ] API routes are tested and working

## Deployment Steps

### 1. Vercel Deployment
1. Push code to your Git repository
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy project
5. Test deployment URL

### 2. Domain Configuration
1. Add custom domain in Vercel dashboard
2. Update DNS records
3. Wait for SSL certificate provisioning
4. Update `NEXT_PUBLIC_SITE_URL` environment variable
5. Redeploy to apply changes

### 3. Email Service Setup
1. Verify Loops integration is working
2. Test waitlist signup functionality
3. Configure email templates in Loops (optional)
4. Set up email automation workflows (optional)

## Post-Deployment Verification

### Functionality Tests
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Waitlist signup form works
- [ ] Email confirmation is received
- [ ] Mobile responsiveness
- [ ] Dark/light theme toggle
- [ ] All pages load (About, Blog, Demo, Docs)

### Performance & SEO
- [ ] Page load speed is acceptable
- [ ] Meta tags are properly set
- [ ] Sitemap is accessible (/sitemap.xml)
- [ ] Robots.txt is accessible (/robots.txt)
- [ ] Favicon displays correctly
- [ ] PWA manifest works

### Security
- [ ] HTTPS is enabled
- [ ] Security headers are set
- [ ] API endpoints are secure
- [ ] No sensitive data exposed in client

## Monitoring & Analytics

### Setup (Optional)
- [ ] Configure Google Analytics
- [ ] Set up error monitoring (Sentry)
- [ ] Monitor API endpoint performance
- [ ] Track waitlist conversion rates

## Launch Checklist

### Final Steps
- [ ] All tests pass
- [ ] Stakeholder approval received
- [ ] Backup deployment plan ready
- [ ] Support documentation updated
- [ ] Team notified of launch

### Go Live
- [ ] Final deployment to production
- [ ] DNS propagation complete
- [ ] All functionality verified
- [ ] Monitoring systems active
- [ ] Launch announcement ready

## Troubleshooting

### Common Issues

**Waitlist not working:**
- Check LOOPS_API_KEY is set correctly
- Verify API endpoint is accessible
- Check browser console for errors
- Test API route directly

**Build failures:**
- Check TypeScript errors
- Verify all imports are correct
- Ensure environment variables are set

**Domain issues:**
- Verify DNS records
- Check SSL certificate status
- Ensure NEXT_PUBLIC_SITE_URL is updated

**Performance issues:**
- Check image optimization
- Verify bundle size
- Monitor Core Web Vitals

## Support Contacts

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Loops Support: [loops.so/help](https://loops.so/help)
- Domain Provider: [Your domain provider support]

---

**Last Updated:** [Current Date]
**Deployment Version:** 1.0.0