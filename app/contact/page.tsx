"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { QuoteBuilder } from '@/components/QuoteBuilder';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calculator } from 'lucide-react';

export default function ContactPage() {
  const [showQuoteBuilder, setShowQuoteBuilder] = useState(false);
  
  if (showQuoteBuilder) {
    return <QuoteBuilder />;
  }

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
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      value: '+91 9096539177',
      link: 'https://wa.me/919096539177?text=Hi%20whsofttech!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.',
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

      {/* Hero */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">whsofttech</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 text-balance">
            Let's Work <span className="gradient-text">Together</span>
          </h1>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">Have a project in mind? Get in touch.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-5">
              <h2 className="text-xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground text-sm">Email, phone, or form. We respond within 24 hours.</p>

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

              {/* Quote Builder Button */}
              <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Calculator size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">Get Instant Quote</h3>
                      <p className="text-sm opacity-90">Build your custom project quote and send via WhatsApp</p>
                    </div>
                    <Button
                      onClick={() => setShowQuoteBuilder(true)}
                      variant="secondary"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                    >
                      Build Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-border bg-card shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Send a Message</CardTitle>
                  <CardDescription>We'll get back within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-primary-foreground mb-2">Ready to start?</h2>
          <p className="text-primary-foreground/90 text-sm mb-4">Tell us about your project.</p>
          <Button asChild size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
