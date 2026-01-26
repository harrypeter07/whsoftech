'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-column', {
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
        duration: 0.6,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-foreground text-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="footer-column group">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/logo.png"
                  alt="whsofttech Logo"
                  fill
                  className="object-contain group-hover:drop-shadow-lg group-hover:drop-shadow-primary/30 transition-all duration-300"
                />
              </div>
              <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                whsofttech
              </h3>
            </div>
            <p className="text-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              Building innovative software solutions that transform businesses and drive growth.
            </p>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="font-semibold mb-4 group-hover:text-primary transition-colors duration-300">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#software" className="opacity-80 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Software Development</Link></li>
              <li><Link href="/services#ai" className="opacity-80 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">AI Solutions</Link></li>
              <li><Link href="/services#web" className="opacity-80 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Web Applications</Link></li>
              <li><Link href="/services#mobile" className="opacity-80 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Mobile Apps</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4 className="font-semibold mb-4 group-hover:text-primary transition-colors duration-300">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="opacity-80 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">About Us</Link></li>
              <li><Link href="/projects" className="opacity-80 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Portfolio</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Contact</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 group/item">
                <Mail size={16} className="group-hover/item:text-primary transition-colors duration-300" />
                <a href="mailto:whssfottech2026@gmail.com" className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300">whssfottech2026@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 group/item">
                <Phone size={16} className="group-hover/item:text-primary transition-colors duration-300" />
                <a href="tel:+918208065506" className="opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300">+91 8208065506</a>
              </li>
              <li className="flex items-start gap-2 group/item">
                <MapPin size={16} className="mt-1 group-hover/item:text-primary transition-colors duration-300" />
                <span className="opacity-80 group-hover/item:opacity-100 transition-opacity duration-300">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              &copy; 2024 whsofttech. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-primary hover:bg-primary/20 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-primary hover:bg-primary/20 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <Github size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-primary hover:bg-primary/20 p-2 rounded-lg transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
