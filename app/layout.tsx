import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const title = 'Abhay Sawale — Software Developer & AI Systems';
const description = 'Computer Science undergraduate at IIIT Kottayam. Explore Animatube, Shiv Shankar, CodeForge, and VoidStream: full-stack platforms, Python engineering, and AI-integrated applications.';

export const metadata: Metadata = {
  title,
  description,
  authors: [{ name: 'Abhay Sawale' }],
  creator: 'Abhay Sawale',
  keywords: ['Abhay Sawale', 'Software Developer', 'Python', 'Full Stack', 'AI Systems', 'IIIT Kottayam', 'Next.js', 'FastAPI'],
  openGraph: { title, description, type: 'website', locale: 'en_IN', siteName: 'Abhay Sawale Portfolio' },
  twitter: { card: 'summary', title, description },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f3f1ec',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
