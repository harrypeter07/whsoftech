import React from "react"
import type { Metadata } from 'next'
import { Epilogue, Noto_Serif, Inter, Bungee, Jockey_One } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const epilogue = Epilogue({ 
  subsets: ["latin"],
  variable: '--font-epilogue',
  display: 'swap',
});

const notoSerif = Noto_Serif({ 
  subsets: ["latin"],
  variable: '--font-noto-serif',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const bungee = Bungee({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-bungee',
  display: 'swap',
});

const jockeyOne = Jockey_One({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-jockey-one',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://whsofttech.com'),
  title: {
    default: 'whsofttech - Custom Software & AI Solutions',
    template: '%s | whsofttech',
  },
  description:
    'whsofttech is a software studio specializing in custom development, AI solutions, and modern web & mobile applications for growing businesses.',
  keywords: [
    'whsofttech',
    'software company',
    'custom software development',
    'AI development',
    'web development',
    'mobile app development',
    'IT services',
  ],
  creator: 'whsofttech',
  openGraph: {
    title: 'whsofttech - Custom Software & AI Solutions',
    description:
      'Custom software, AI & machine learning, and web/mobile apps built for modern businesses.',
    url: '/',
    siteName: 'whsofttech',
    images: [
      {
        url: '/heroimage.png',
        width: 1200,
        height: 630,
        alt: 'whsofttech - custom software and AI solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'whsofttech - Custom Software & AI Solutions',
    description:
      'Custom software, AI & machine learning, and web/mobile apps built for modern businesses.',
    images: ['/heroimage.png'],
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/logo.png',
        type: 'image/png',
      },
    ],
    shortcut: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning={true}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Jockey+One&family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        {/* Preload hero image so it is fetched before paint */}
        <link
          rel="preload"
          as="image"
          href="/heroimage.png"
          // Match the sizes used in the Hero component
          imagesrcset="/heroimage.png 1200w"
          imagesizes="(max-width: 768px) 100vw, 50vw"
        />
      </head>
      <body className={`${inter.variable} ${epilogue.variable} ${notoSerif.variable} ${bungee.variable} ${jockeyOne.variable} font-sans antialiased bg-background text-foreground`} style={{ fontFamily: 'var(--font-epilogue), sans-serif' }} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
