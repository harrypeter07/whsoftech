# whsofttech - Software Solutions Website

A modern, futuristic software solutions website built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 **Futuristic Dark Theme** - Modern dark theme with gradient accents and glow effects
- 📧 **Email Integration** - Contact form integrated with Resend API
- 🎯 **shadcn/ui Components** - Professional UI components throughout
- ✨ **Smooth Animations** - GSAP-powered animations for enhanced user experience
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - Built with Next.js 16 for optimal performance

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd whsoftech
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
```

4. Add your Resend API key to `.env`
```
RESEND_API_KEY=re_your_api_key_here
```

Get your API key from [Resend](https://resend.com/api-keys)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Contact Information

- **Email**: whssfottech2026@gmail.com
- **Phone**: +91 8208065506

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: GSAP
- **Email Service**: Resend API
- **Icons**: Lucide React

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/        # Email API route
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── projects/           # Projects/Portfolio page
│   ├── services/           # Services page
│   ├── globals.css         # Global styles and theme
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── ContactForm.tsx     # Contact form component
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section
│   ├── Navbar.tsx          # Navigation bar
│   └── ...                 # Other components
└── lib/
    └── utils.ts            # Utility functions
```

## Environment Variables

- `RESEND_API_KEY` - Your Resend API key for email functionality

## License

This project is private and proprietary.
