import React from "react"
import type { Metadata } from 'next'
import { Epilogue, Noto_Serif, Inter, Bungee, Jockey_One } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Preloader } from "@/components/Preloader"

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
  metadataBase: new URL("https://whsofttech.in"),
  title: "WH SoftTech | Web Development, AI & Digital Solutions",
  description:
    "WH SoftTech provides modern web development, AI-powered applications, and digital solutions to help businesses grow faster.",
  keywords: [
    "WH SoftTech",
    "web development Nagpur",
    "AI solutions India",
    "software company WH SoftTech",
    "full stack development",
    "Next.js development",
  ],
  authors: [{ name: "WH SoftTech" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WH SoftTech | Web Development & AI Solutions",
    description:
      "Build fast, modern and scalable web applications with WH SoftTech",
    url: "https://whsofttech.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WH SoftTech",
    description: "Web Development & AI Solutions",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "WH SoftTech",
  url: "https://whsofttech.in",
};

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
          imageSrcSet="/heroimage.png 1200w"
          imageSizes="(max-width: 768px) 100vw, 50vw"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${epilogue.variable} ${notoSerif.variable} ${bungee.variable} ${jockeyOne.variable} font-sans antialiased bg-background text-foreground`} style={{ fontFamily: 'var(--font-epilogue), sans-serif' }} suppressHydrationWarning={true}>
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
