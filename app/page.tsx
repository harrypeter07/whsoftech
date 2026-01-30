import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-14 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 animate-blob" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 text-balance">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">Tailored software solutions for your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ServiceCard icon={<Code2 size={22} />} title="Software Development" description="Custom enterprise software—scalable and built for your requirements." delay={0} />
            <ServiceCard icon={<Brain size={22} />} title="AI Solutions" description="AI and ML applications that automate and drive decisions." delay={1} />
            <ServiceCard icon={<Globe size={22} />} title="Web Applications" description="Modern, responsive web apps for great UX and conversion." delay={2} />
            <ServiceCard icon={<Smartphone size={22} />} title="Mobile Apps" description="iOS and Android apps that engage users and grow business." delay={3} />
            <ServiceCard icon={<Palette size={22} />} title="UI/UX Design" description="Intuitive, beautiful interfaces users love." delay={4} />
            <ServiceCard icon={<Zap size={22} />} title="Automation" description="Process automation to streamline ops and cut costs." delay={5} />
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300">
              <Link href="/services" className="flex items-center gap-2">Explore All Services <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">Why Choose whsofttech?</h2>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">Your trusted technology partner for digital transformation.</p>
              <div className="space-y-3">
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
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-14 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-1">Technologies We Use</h2>
            <p className="text-muted-foreground text-sm">Modern, battle-tested stack.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'GraphQL', 'Tailwind', 'MongoDB'].map((tech) => (
              <Card key={tech} className="hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group">
                <CardContent className="p-3 text-center">
                  <p className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">{tech}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-1">What Our Clients Say</h2>
            <p className="text-muted-foreground text-sm">Feedback from companies we've helped.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <TestimonialCard quote="Transformed our legacy system into a modern, scalable platform. Invaluable expertise." author="Sarah J." role="CTO" company="FinanceFlow" image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" rating={5} />
            <TestimonialCard quote="AI solution cut our operational costs by 40%. Professional and innovative." author="Michael C." role="CEO" company="DataViz" image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" rating={5} />
            <TestimonialCard quote="Best decision for our digital transformation. On-time and beyond expectations." author="Emma R." role="Product Lead" company="RetailPro" image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" rating={5} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3 text-balance">Ready to transform your business?</h2>
          <p className="text-primary-foreground/90 mb-6 text-sm">Let's discuss your project.</p>
          <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:shadow-lg transition-all duration-300">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
