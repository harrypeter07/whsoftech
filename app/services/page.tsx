import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ParallaxServices } from '@/components/ParallaxServices';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | WH SoftTech Web Development & AI Solutions',
  description:
    'Explore WH SoftTech services including web development, AI-powered applications, and digital solutions for growing businesses.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ParallaxServices />
      <Footer />
    </div>
  );
}
