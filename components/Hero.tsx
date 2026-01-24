'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate badge
      gsap.from('.hero-badge', {
        duration: 0.8,
        opacity: 0,
        y: -20,
        ease: 'power2.out',
      });

      // Split title into words and animate
      if (titleRef.current) {
        const titleText = titleRef.current.innerHTML;
        titleRef.current.innerHTML = titleText
          .split(' ')
          .map((word) => `<span class="inline-block overflow-hidden"><span class="hero-word">${word}</span></span>`)
          .join(' ');

        gsap.from('.hero-word', {
          duration: 0.8,
          delay: 0.2,
          opacity: 0,
          y: 40,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }

      // Animate subtitle
      gsap.from(subtitleRef.current, {
        duration: 0.8,
        delay: 0.6,
        opacity: 0,
        y: 20,
        ease: 'power2.out',
      });

      // Animate buttons with stagger
      gsap.from('.hero-btn', {
        duration: 0.6,
        delay: 0.8,
        opacity: 0,
        scale: 0.9,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      });

      // Animate stats with scroll trigger
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: 'power2.out',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen pt-20 pb-20 relative overflow-hidden" ref={heroRef}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob-slow" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 border border-primary/20 hover:border-primary/50 transition-colors duration-300">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Now Serving Fortune 500 Companies</span>
          </div>

          {/* Main heading with word animation */}
          <h1 ref={titleRef} className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Transform Your Business With
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Innovative Software</span>
          </h1>

          {/* Subheading */}
          <p ref={subtitleRef} className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
            Award-winning software solutions company specializing in custom development, AI applications, web & mobile development, and digital transformation for enterprises worldwide.
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="hero-btn px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="hero-btn px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 hover:shadow-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-3 gap-8 w-full pt-12 border-t border-border">
            <div className="stat-item group cursor-pointer">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">500+</p>
              <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">Projects Delivered</p>
            </div>
            <div className="stat-item group cursor-pointer">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">50+</p>
              <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">Industry Experts</p>
            </div>
            <div className="stat-item group cursor-pointer">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">12+</p>
              <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
