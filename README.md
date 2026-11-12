# Abhay's Portfolio - Cinematic Developer Portfolio

A world-class, futuristic developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Cinematic Animations**: Smooth, premium animations powered by Framer Motion
- **Smooth Scrolling**: Lenis smooth scroll for buttery-smooth navigation
- **Interactive UI**: Hover effects, magnetic buttons, and cursor glow
- **Glassmorphism**: Modern glass effects throughout the design
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Fast loading and 60fps animations
- **SEO Ready**: Optimized metadata and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## 📦 Installation

1. Navigate to the project directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Section** (`components/Hero.tsx`):
   - Update roles array
   - Modify description text

2. **About Section** (`components/About.tsx`):
   - Update story and journey text
   - Modify stats values

3. **Projects Section** (`components/Projects.tsx`):
   - Add your projects
   - Update project descriptions and tech stacks

4. **Contact Section** (`components/Contact.tsx`):
   - Update email address
   - Update social media links
   - Update location

5. **Metadata** (`app/layout.tsx`):
   - Update title and description
   - Update keywords

### Color Scheme

The portfolio uses a purple-cyan gradient theme. To change colors:

1. Edit `tailwind.config.ts` for custom colors
2. Update gradient classes in components (e.g., `from-purple-600 to-cyan-600`)

### Add/Remove Sections

Simply import/remove components in `app/page.tsx`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Experience.tsx      # Timeline section
│   ├── Personality.tsx     # Interests section
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   ├── LoadingScreen.tsx   # Loading animation
│   ├── CursorGlow.tsx      # Cursor glow effect
│   ├── ScrollProgress.tsx  # Scroll progress bar
│   └── SmoothScroll.tsx    # Smooth scroll setup
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind configuration
```

## 🎯 Key Sections

1. **Hero**: Full-screen cinematic introduction with rotating roles
2. **About**: Personal story with animated stats
3. **Skills**: Tech stack organized by categories with marquee
4. **Projects**: Bento grid layout showcasing featured work
5. **Experience**: Animated timeline of journey
6. **Personality**: Beyond code - interests and philosophy
7. **Contact**: Contact form with social links

## ⚡ Performance Tips

- Images are optimized automatically by Next.js
- Animations use GPU acceleration
- Smooth scroll is disabled on mobile for better performance
- Components use `useInView` to animate only when visible

## 🎨 Design Philosophy

This portfolio follows these principles:

- **Cinematic**: Movie-like transitions and animations
- **Futuristic**: Modern, forward-thinking design
- **Premium**: High-end feel with attention to detail
- **Interactive**: Engaging hover effects and animations
- **Clean**: Minimalist approach with purposeful elements

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- Email: abhaysawale9011@gmail.com
- GitHub: [@Abhay01221](https://github.com/Abhay01221)
- LinkedIn: [abhay-sawale-47856628a](http://linkedin.com/in/abhay-sawale-47856628a/)

---

Built with ❤️ by Abhay
