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
  title: 'whsofttech - Custom Software & AI Apps',
  description: 'Award-winning software solutions company specializing in custom development, AI applications, web/mobile apps, and digital services.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/logo.png',
        type: 'image/png',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.png',
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
      </head>
      <body className={`${inter.variable} ${epilogue.variable} ${notoSerif.variable} ${bungee.variable} ${jockeyOne.variable} font-sans antialiased bg-background text-foreground`} style={{ fontFamily: 'var(--font-epilogue), sans-serif' }} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
