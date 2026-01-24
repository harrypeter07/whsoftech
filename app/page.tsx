import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import {
  Code2,
  Brain,
  Globe,
  Smartphone,
  Palette,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Code2 size={24} />}
              title="Software Development"
              description="Custom-built enterprise software solutions designed for scalability, performance, and your unique business requirements."
              delay={0}
            />
            <ServiceCard
              icon={<Brain size={24} />}
              title="AI Solutions"
              description="Cutting-edge AI and machine learning applications that automate processes and drive intelligent decision-making."
              delay={1}
            />
            <ServiceCard
              icon={<Globe size={24} />}
              title="Web Applications"
              description="Modern, responsive web applications built with latest technologies for optimal user experience and conversion."
              delay={2}
            />
            <ServiceCard
              icon={<Smartphone size={24} />}
              title="Mobile Apps"
              description="Native and cross-platform mobile applications for iOS and Android that engage users and drive business growth."
              delay={3}
            />
            <ServiceCard
              icon={<Palette size={24} />}
              title="UI/UX Design"
              description="Award-winning design services that create intuitive, beautiful interfaces that users love to interact with."
              delay={4}
            />
            <ServiceCard
              icon={<Zap size={24} />}
              title="Automation"
              description="Business process automation solutions that streamline operations, reduce costs, and improve efficiency."
              delay={5}
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
                Why Choose TechSolutions?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We're more than just a software company. We're your trusted technology partner committed to driving your digital transformation.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Industry Expertise',
                    desc: 'Over 12 years serving diverse industries with deep domain knowledge',
                  },
                  {
                    title: 'Proven Track Record',
                    desc: '500+ successful projects delivered with measurable ROI',
                  },
                  {
                    title: 'Agile Approach',
                    desc: 'Fast iterations, continuous delivery, and client collaboration',
                  },
                  {
                    title: 'Quality Assurance',
                    desc: 'Rigorous testing and quality standards for enterprise-grade solutions',
                  },
                  {
                    title: 'Dedicated Support',
                    desc: '24/7 support and maintenance for all our deployments',
                  },
                  {
                    title: 'Innovation First',
                    desc: 'Cutting-edge technologies and continuous learning culture',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/10 to-accent/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground">
              Leveraging modern, battle-tested technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'Tailwind CSS', 'MongoDB'].map((tech) => (
              <div
                key={tech}
                className="p-4 rounded-lg border border-border bg-card hover:border-primary transition-colors text-center font-medium text-foreground"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from companies we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="TechSolutions transformed our legacy system into a modern, scalable platform. Their team's expertise was invaluable."
              author="Sarah Johnson"
              role="CTO"
              company="FinanceFlow"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              rating={5}
            />
            <TestimonialCard
              quote="The AI solution they built reduced our operational costs by 40%. Highly professional and innovative team."
              author="Michael Chen"
              role="CEO"
              company="DataViz Inc"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              rating={5}
            />
            <TestimonialCard
              quote="Best decision we made for our digital transformation. On-time delivery and beyond expectations."
              author="Emma Rodriguez"
              role="Product Lead"
              company="RetailPro"
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital transformation goals with innovative software solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-primary-foreground text-primary rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
