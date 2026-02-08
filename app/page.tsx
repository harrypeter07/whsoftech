import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { QuoteBuilder } from '@/components/QuoteBuilder';
import ThreeDImageCarousel from '@/components/ServiceCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Code2,
  Brain,
  Globe,
  Smartphone,
  Palette,
  Zap,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/software-dev/800/600.jpg',
    href: '/services/software',
    caption: 'Custom Software Development',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/ai-tech/800/600.jpg',
    href: '/services/ai',
    caption: 'AI & Machine Learning Solutions',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/web-development/800/600.jpg',
    href: '/services/web',
    caption: 'Web Application Development',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/mobile-app/800/600.jpg',
    href: '/services/mobile',
    caption: 'Mobile App Development',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/ui-design/800/600.jpg',
    href: '/services/design',
    caption: 'UI/UX Design Services',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/automation/800/600.jpg',
    href: '/services/automation',
    caption: 'Business Automation Solutions',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Services Carousel Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Explore our comprehensive software solutions</p>
          </div>
          <ThreeDImageCarousel 
            slides={services.slice(0, 5)}
            itemCount={5}
            autoplay={true}
            delay={3}
            pauseOnHover={true}
            className="bg-gradient-to-b from-background to-muted/20 rounded-2xl py-8"
          />
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 px-8 py-6 text-lg font-semibold">
              <Link href="/services" className="flex items-center gap-2">View All Services <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-3 text-balance">Why Choose whsofttech?</h2>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">Your trusted technology partner for digital transformation.</p>
              <div className="space-y-2">
                {[
                  { title: 'Industry expertise', desc: '12+ years across diverse industries.' },
                  { title: 'Proven track record', desc: '500+ projects delivered with ROI.' },
                  { title: 'Agile & collaborative', desc: 'Fast iterations and clear communication.' },
                  { title: 'Quality & support', desc: 'Rigorous QA and ongoing support.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Tech Stack */}
            <section className="py-8 bg-muted/30">
              <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-foreground mb-1">Technologies We Use</h2>
                  <p className="text-muted-foreground text-sm">Modern, battle-tested stack.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Tailwind', 'MongoDB'].map((tech) => (
                    <Card key={tech} className="hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-2 text-center">
                        <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{tech}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      
      {/* What Do You Want? Section */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-balance">What Do You Want?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">Tell us about your project needs and we'll help you bring it to life</p>
          </div>
          <QuoteBuilder />
        </div>
      </section>

      <Footer />
    </div>
  );
}
