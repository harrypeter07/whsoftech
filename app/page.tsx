import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { TechMarquee } from '@/components/TechMarquee';
import { BentoGrid } from '@/components/BentoGrid';
import { PricingSection } from '@/components/PricingSection';
import { QuoteBuilder } from '@/components/QuoteBuilder';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WH SoftTech | Web Development, AI & Digital Solutions',
  description:
    'WH SoftTech provides modern web development, AI-powered applications, and digital solutions to help businesses grow faster.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />

      <ServicesSection />

      <TechMarquee />

      <BentoGrid />

      <PricingSection />

      <section className="border-t border-white/10 py-14 md:py-20">
        <div className="section-shell">
          <div className="mb-10 text-center md:mb-12">
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
              Get a quote
            </span>
            <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              What do you need?
            </h2>
            <p className="mx-auto max-w-xl text-slate-400">
              Tell us about your project and we&apos;ll help you bring it to life.
            </p>
          </div>
          <QuoteBuilder />
        </div>
      </section>

      <Footer />
    </div>
  );
}
