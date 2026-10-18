# Getting Started

Welcome to your cinematic developer portfolio! This guide will help you get up and running quickly.

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

### 3. Customize Your Information

#### Update Your Name
**File**: `components/Hero.tsx` (line 50)
```typescript
<h1>Building the<br /><span>Future</span></h1>
```

**File**: `components/Navbar.tsx` (line 28)
```typescript
<motion.div>Your Name</motion.div>
```

#### Update Your Roles
**File**: `components/Hero.tsx` (line 11)
```typescript
const roles = ['Your Role 1', 'Your Role 2', 'Your Role 3'];
```

#### Update Contact Info
**File**: `components/Contact.tsx` (lines 7-30)
```typescript
const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME', // Change this
  },
  // Update all links
];
```

### 4. Add Your Projects
**File**: `components/Projects.tsx` (lines 7-60)
```typescript
const projects = [
  {
    title: 'Your Project',
    description: 'Description',
    tech: ['Tech1', 'Tech2'],
    image: 'bg-gradient-to-br from-purple-600 to-pink-600',
    featured: true,
  },
];
```

### 5. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Main page (imports all sections)
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Timeline
│   ├── Personality.tsx     # Interests
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   ├── LoadingScreen.tsx   # Loading animation
│   ├── CursorGlow.tsx      # Cursor effect
│   ├── ScrollProgress.tsx  # Progress bar
│   └── SmoothScroll.tsx    # Smooth scroll
├── public/                 # Static files
├── README.md              # Main documentation
├── CUSTOMIZATION.md       # Customization guide
├── DEPLOYMENT.md          # Deployment guide
├── FEATURES.md            # Feature list
└── package.json           # Dependencies

```

## 🎨 Customization Priority

### Must Change (Before Deploy)
1. ✅ Your name in Hero and Navbar
2. ✅ Your roles/titles
3. ✅ Contact information (email, social links)
4. ✅ Your projects
5. ✅ About section story
6. ✅ Metadata in `app/layout.tsx`

### Should Change
1. 📝 Skills and technologies
2. 📅 Experience timeline
3. 🎯 Personality interests
4. 📊 Statistics in About section

### Optional
1. 🎨 Color scheme
2. 🔤 Typography
3. 🎬 Animation speeds
4. 📐 Layout order

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📚 Documentation

- **README.md** - Overview and installation
- **CUSTOMIZATION.md** - Detailed customization guide
- **DEPLOYMENT.md** - How to deploy to Vercel
- **FEATURES.md** - Complete feature list

## 🎯 Next Steps

### Immediate (Before Deploy)
1. [ ] Update all personal information
2. [ ] Add your real projects
3. [ ] Update social media links
4. [ ] Test on mobile and desktop
5. [ ] Run `npm run build` to check for errors

### Soon After
1. [ ] Add Google Analytics
2. [ ] Set up contact form backend
3. [ ] Add your actual project images
4. [ ] Write detailed project descriptions
5. [ ] Add blog section (optional)

### Ongoing
1. [ ] Keep projects updated
2. [ ] Update skills as you learn
3. [ ] Add new achievements
4. [ ] Optimize performance
5. [ ] Gather feedback and iterate

## 🚀 Deploy to Vercel

### Quick Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or push to GitHub and import on [vercel.com](https://vercel.com)

See **DEPLOYMENT.md** for detailed instructions.

## 💡 Tips

### Development
- Use `npm run dev` for hot reload
- Check browser console for errors
- Test on different screen sizes
- Use browser DevTools for debugging

### Customization
- Start with content, then styling
- Test each change before moving on
- Keep backups of working versions
- Read CUSTOMIZATION.md for details

### Performance
- Keep images optimized
- Don't add too many animations
- Test on slower devices
- Use Lighthouse for audits

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styling Issues
- Clear browser cache
- Check Tailwind classes are correct
- Verify `globals.css` is imported
- Check for typos in class names

## 📞 Need Help?

1. Check the documentation files
2. Review the code comments
3. Check Next.js docs: https://nextjs.org/docs
4. Check Framer Motion docs: https://www.framer.com/motion/
5. Check Tailwind docs: https://tailwindcss.com/docs

## 🎉 You're Ready!

Your portfolio is set up and ready to customize. Take your time to:
1. Add your personal touch
2. Showcase your best work
3. Make it uniquely yours

Remember: This is YOUR portfolio. Make it reflect who you are! 🚀

---

**Happy building!** 🎨✨
