import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';
import { VisitorTracker } from '@/components/VisitorTracker';
import { ReadingProgress } from '@/components/ReadingProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://whssofttech.com'),
  title: {
    default: 'WHS SoftTech | Custom Software, AI & Digital Solutions',
    template: '%s | WHS SoftTech',
  },
  description:
    'WHS SoftTech builds custom websites, mobile apps, AI systems, and automation solutions that help businesses grow faster. Trusted by startups, SMEs, healthcare, education, and enterprises.',
  keywords: [
    'software development India',
    'web development',
    'mobile app development',
    'AI solutions',
    'business automation',
    'WHS SoftTech',
    'custom software',
    'digital transformation',
    'UI UX design',
    'e-commerce development',
  ],
  authors: [{ name: 'WHS SoftTech' }],
  creator: 'WHS SoftTech',
  icons: {
    icon: [
      { url: '/newlogo-tight.png', type: 'image/png' },
    ],
    apple: [
      { url: '/newlogo-tight.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/newlogo-tight.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://whssofttech.com',
    siteName: 'WHS SoftTech',
    title: 'WHS SoftTech | Custom Software, AI & Digital Solutions',
    description:
      'Custom websites, mobile apps, AI systems and automation solutions for businesses that want to grow faster.',
    images: [{ url: '/newlogo-tight.png', width: 1200, height: 630, alt: 'WHS SoftTech' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WHS SoftTech | Custom Software, AI & Digital Solutions',
    description:
      'Custom websites, mobile apps, AI systems and automation solutions for businesses.',
    images: ['/newlogo-tight.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/newlogo-tight.png" />
        <link rel="apple-touch-icon" href="/newlogo-tight.png" />
        <link rel="shortcut icon" href="/newlogo-tight.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className} suppressHydrationWarning style={{ background: '#f0f7ff', overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
        <ReadingProgress />
        <VisitorTracker />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
