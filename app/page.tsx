import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ServicesSection } from '@/components/ServicesSection';
import { TechMarquee } from '@/components/TechMarquee';
import { BentoGrid } from '@/components/BentoGrid';
import { PricingSection } from '@/components/PricingSection';
import { QuoteBuilder } from '@/components/QuoteBuilder';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <Navbar />
      <Hero />

      {/* Services */}
      <ServicesSection />

      {/* Technologies marquee */}
      <TechMarquee />

      {/* Why choose us - Bento grid */}
      <BentoGrid />

      {/* Pricing */}
      <PricingSection />

      {/* Quote builder */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block px-3 py-1 rounded-md bg-[#E9ECEF] text-[#212529] text-sm font-medium mb-4">
              Get a quote
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#212529] mb-3">
              What do you need?
            </h2>
            <p className="text-[#6c757d] max-w-xl mx-auto">
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
