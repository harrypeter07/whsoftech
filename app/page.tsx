import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ScrollStorySection } from '@/components/ScrollStorySection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { AboutSection } from '@/components/AboutSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { FloatingCallButton } from '@/components/FloatingCallButton';

export const metadata: Metadata = {
  title: 'WHS SoftTech | Custom Software, AI & Digital Solutions',
  description:
    'WHS SoftTech builds custom websites, mobile apps, AI systems, and automation solutions that help businesses grow faster. Trusted by startups, SMEs, healthcare, education, and enterprises across India.',
};

export default function Home() {
  return (
    <main style={{ background: '#07070f', minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <ScrollStorySection />
      <IndustriesSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <FloatingCallButton />
    </main>
  );
}
