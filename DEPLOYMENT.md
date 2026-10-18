# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Cinematic portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

## Environment Variables

If you add any environment variables (like for email services or analytics), add them in:

1. **Vercel Dashboard**: Project Settings → Environment Variables
2. **Local Development**: Create `.env.local` file (see `.env.example`)

## Custom Domain

1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Follow the DNS configuration instructions

## Performance Optimization

The portfolio is already optimized with:
- ✅ Static generation
- ✅ Image optimization
- ✅ Code splitting
- ✅ Minification
- ✅ Compression

## Post-Deployment Checklist

- [ ] Update social media links in `components/Contact.tsx`
- [ ] Update email address in `components/Contact.tsx`
- [ ] Update GitHub username in `components/Projects.tsx`
- [ ] Add your actual projects in `components/Projects.tsx`
- [ ] Update personal information in `components/About.tsx`
- [ ] Test all animations and interactions
- [ ] Test on mobile devices
- [ ] Check loading times
- [ ] Verify all links work

## Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics (built-in)
- Sentry for error tracking

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to main branch
- Create preview deployments for pull requests
- Run build checks before deployment

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

### Slow Loading
- Check image sizes
- Verify animations aren't too heavy
- Use Vercel Analytics to identify bottlenecks

### Styling Issues
- Clear browser cache
- Check if CSS is being loaded
- Verify Tailwind CSS is configured correctly

## Support

For issues:
1. Check Next.js documentation: https://nextjs.org/docs
2. Check Vercel documentation: https://vercel.com/docs
3. Check Framer Motion docs: https://www.framer.com/motion/

---

Happy deploying! 🚀
