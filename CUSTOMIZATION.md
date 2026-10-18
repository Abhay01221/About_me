# Customization Guide

## Quick Customization Checklist

### 1. Personal Information

#### Update Name and Title
**File**: `components/Hero.tsx`
```typescript
// Line 11: Update roles
const roles = ['AI Engineer', 'Full Stack Developer', 'SaaS Builder', 'ML Engineer'];

// Line 50: Update name in heading
<h1>Building the<br /><span>Future</span></h1>

// Line 62: Update description
<p>Creating AI-powered products...</p>
```

**File**: `components/Navbar.tsx`
```typescript
// Line 28: Update name
<motion.div>Abhay</motion.div>
```

**File**: `app/layout.tsx`
```typescript
// Update metadata
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description",
  // ...
};
```

### 2. About Section

**File**: `components/About.tsx`

Update your story (lines 50-80):
```typescript
<p>
  Your personal story here...
</p>
```

Update stats (lines 10-15):
```typescript
const stats = [
  { label: 'Projects Built', value: 25, icon: Code2 },
  { label: 'GitHub Contributions', value: 1200, icon: Zap },
  // Update these values
];
```

### 3. Skills

**File**: `components/Skills.tsx`

Update skill categories (lines 6-30):
```typescript
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', ...], // Add your skills
    color: 'from-purple-500 to-pink-500',
  },
  // Add more categories
];
```

Update marquee skills (lines 32-36):
```typescript
const marqueeSkills = [
  'React', 'Next.js', // Add your skills
];
```

### 4. Projects

**File**: `components/Projects.tsx`

Replace with your projects (lines 7-60):
```typescript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description',
    tech: ['Tech1', 'Tech2', 'Tech3'],
    image: 'bg-gradient-to-br from-purple-600 to-pink-600',
    featured: true, // Set to true for featured projects
  },
  // Add more projects
];
```

### 5. Experience/Timeline

**File**: `components/Experience.tsx`

Update your journey (lines 7-35):
```typescript
const timeline = [
  {
    year: '2024',
    title: 'Your Role',
    description: 'What you did',
    icon: Rocket,
    color: 'from-purple-500 to-pink-500',
  },
  // Add more milestones
];
```

### 6. Contact Information

**File**: `components/Contact.tsx`

Update social links (lines 7-30):
```typescript
const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    href: 'https://github.com/YOUR_USERNAME', // Update
    color: 'hover:text-purple-400',
  },
  // Update all social links
];
```

Update email and location (lines 90-100):
```typescript
<span>Your City, Your Country</span>
<a href="mailto:your@email.com">your@email.com</a>
```

## Color Scheme Customization

### Change Primary Colors

**File**: `app/globals.css`

Update gradient colors (line 110):
```css
.text-gradient {
  background-image: linear-gradient(to right, 
    rgb(192 132 252),  /* Purple - change this */
    rgb(251 207 232),  /* Pink - change this */
    rgb(103 232 249)   /* Cyan - change this */
  );
}
```

### Change Glass Effect

**File**: `app/globals.css` (line 115)
```css
.glass {
  background-color: rgb(255 255 255 / 0.05); /* Adjust opacity */
  backdrop-filter: blur(24px); /* Adjust blur */
  border: 1px solid rgb(255 255 255 / 0.1); /* Adjust border */
}
```

## Typography Customization

The portfolio uses Geist Sans and Geist Mono fonts. To change:

**File**: `app/layout.tsx`
```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });
```

Then update `app/globals.css`:
```css
@theme {
  --font-family-sans: var(--your-font), system-ui, sans-serif;
}
```

## Animation Customization

### Adjust Animation Speed

**File**: `app/globals.css`

Update keyframe durations:
```css
@theme {
  --animate-float: float 6s ease-in-out infinite; /* Change 6s */
  --animate-gradient: gradient 8s linear infinite; /* Change 8s */
}
```

### Disable Animations

To disable specific animations, remove or comment out the animation classes in components.

For example, in `components/Hero.tsx`:
```typescript
// Remove animate prop
<motion.div
  // animate={{ y: [0, -20, 0] }} // Comment this out
>
```

## Layout Customization

### Change Section Order

**File**: `app/page.tsx`

Reorder components:
```typescript
<main>
  <Navbar />
  <Hero />
  <About />      // Move these around
  <Skills />     // to change order
  <Projects />
  // ...
</main>
```

### Remove Sections

Simply delete or comment out unwanted sections in `app/page.tsx`.

### Add New Sections

1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`

## Background Effects

### Adjust Cursor Glow

**File**: `components/CursorGlow.tsx`

Change glow size and colors (lines 20-30):
```typescript
<div className="w-[500px] h-[500px] bg-gradient-to-r from-purple-600/20 to-cyan-600/20" />
// Adjust size and colors
```

### Disable Cursor Glow

**File**: `app/page.tsx`

Comment out:
```typescript
// <CursorGlow />
```

### Adjust Grain Texture

**File**: `app/globals.css` (line 95)

Change opacity:
```css
body::before {
  opacity: 0.4; /* Adjust from 0 to 1 */
}
```

## Responsive Customization

### Adjust Breakpoints

Tailwind CSS breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Use in components:
```typescript
<div className="text-4xl md:text-6xl lg:text-8xl">
  // Responsive text sizes
</div>
```

## Performance Optimization

### Reduce Animation Complexity

For better performance on lower-end devices:

1. Reduce blur amounts in glass effects
2. Simplify gradient animations
3. Reduce number of floating elements
4. Disable cursor glow on mobile (already done)

### Optimize Images

When adding project images:
1. Use Next.js Image component
2. Compress images before uploading
3. Use WebP format when possible

## Adding New Features

### Add Blog Section

1. Create `components/Blog.tsx`
2. Add blog data
3. Import in `app/page.tsx`

### Add Contact Form Backend

1. Set up email service (EmailJS, SendGrid, etc.)
2. Add API route in `app/api/contact/route.ts`
3. Update form submission in `components/Contact.tsx`

### Add Analytics

**Google Analytics**:
```typescript
// app/layout.tsx
import Script from 'next/script';

// Add in layout:
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

## Testing Your Changes

1. **Development**: `npm run dev`
2. **Build**: `npm run build`
3. **Preview**: `npm start`

Always test:
- Desktop view
- Mobile view
- Tablet view
- Different browsers
- Animation performance
- Loading times

## Common Issues

### Animations Not Working
- Check Framer Motion is installed
- Verify component is client component (`'use client'`)

### Styles Not Applying
- Check Tailwind CSS classes are correct
- Verify `globals.css` is imported
- Clear browser cache

### Build Errors
- Run `npm run build` locally first
- Check TypeScript errors
- Verify all imports are correct

---

Need help? Check the main README.md or create an issue!
