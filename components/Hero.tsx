'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Now Serving Fortune 500 Companies</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Transform Your Business With
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Innovative Software</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Award-winning software solutions company specializing in custom development, AI applications, web & mobile development, and digital transformation for enterprises worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/projects"
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors duration-300"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 w-full pt-12 border-t border-border">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">500+</p>
              <p className="text-sm sm:text-base text-muted-foreground">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">50+</p>
              <p className="text-sm sm:text-base text-muted-foreground">Industry Experts</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">12+</p>
              <p className="text-sm sm:text-base text-muted-foreground">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
