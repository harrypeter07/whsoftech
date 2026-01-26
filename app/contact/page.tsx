import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - whsofttech',
  description: 'Get in touch with whsofttech. We\'d love to hear about your project.',
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'whssfottech2026@gmail.com',
      link: 'mailto:whssfottech2026@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 8208065506',
      link: 'tel:+918208065506',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'India',
      link: '#',
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      value: 'Mon - Sat: 9am - 6pm IST',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's Work
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch with our team and let's bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground">
                Reach out to us through any of these channels. We're here to help and excited to hear about your project.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-4">
                      <a href={item.link} className="flex gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-primary-foreground flex-shrink-0 group-hover:scale-110 transition-transform glow-primary">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Info */}
              <Card className="bg-muted/50 border-border hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-3">Quick Response Time</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    We aim to respond to all inquiries within 24 hours.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    For urgent matters, please call us directly during business hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">How We Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Consultation',
                description: 'Discuss your project needs and explore how we can help achieve your goals.',
              },
              {
                title: 'Custom Development',
                description: 'Build custom software solutions tailored to your specific requirements.',
              },
              {
                title: 'Modernization',
                description: 'Transform legacy systems into modern, scalable applications.',
              },
              {
                title: 'AI Implementation',
                description: 'Integrate AI and machine learning into your products and processes.',
              },
              {
                title: 'Ongoing Support',
                description: 'Get reliable 24/7 support and maintenance for your systems.',
              },
              {
                title: 'Team Augmentation',
                description: 'Extend your team with our experienced developers and designers.',
              },
            ].map((service, index) => (
              <Card key={index} className="hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on complexity. Simple projects might take 4-8 weeks, while larger initiatives can take 3-6 months. We provide detailed timelines after our initial consultation.',
              },
              {
                q: 'Do you offer post-launch support?',
                a: 'Yes, we offer comprehensive post-launch support including bug fixes, performance optimization, security updates, and ongoing maintenance. We can discuss support packages that fit your needs.',
              },
              {
                q: 'How do you communicate during projects?',
                a: 'We maintain transparent communication through regular updates, weekly meetings, and a project management dashboard where you can track progress in real-time.',
              },
              {
                q: 'Can you work with existing teams?',
                a: 'Absolutely! We often work alongside existing teams, providing expertise and augmenting your capabilities. We integrate smoothly with your development practices.',
              },
              {
                q: 'What is your pricing model?',
                a: 'We offer flexible engagement models including fixed-price projects, time & materials, and dedicated team augmentation. Let\'s discuss what works best for you.',
              },
              {
                q: 'Do you sign NDAs?',
                a: 'Yes, we can sign NDAs and other agreements to protect your confidentiality. Security and trust are paramount to our business.',
              },
            ].map((faq, index) => (
              <Card key={index} className="hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Let's discuss your project and how we can help you achieve your goals.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <a href="#contact">Start Your Project</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
