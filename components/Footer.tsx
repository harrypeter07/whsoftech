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
    <footer ref={footerRef} className="bg-gradient-to-br from-primary to-accent text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="footer-column group">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="whsofttech"
                  fill
                  className="object-contain opacity-95"
                />
              </div>
              <h3 className="font-bold text-lg">whsofttech</h3>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Software solutions that scale.
            </p>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h4 className="font-semibold mb-3">Services</h4>
            <ul className="space-y-1.5 text-sm opacity-90">
              <li><Link href="/services#software" className="hover:opacity-100 transition-opacity">Software</Link></li>
              <li><Link href="/services#ai" className="hover:opacity-100 transition-opacity">AI</Link></li>
              <li><Link href="/services#web" className="hover:opacity-100 transition-opacity">Web</Link></li>
              <li><Link href="/services#mobile" className="hover:opacity-100 transition-opacity">Mobile</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-1.5 text-sm opacity-90">
              <li><Link href="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
              <li><Link href="/projects" className="hover:opacity-100 transition-opacity">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:whssfottech2026@gmail.com" className="hover:underline">whssfottech2026@gmail.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} />
                <a href="tel:+918208065506" className="hover:underline">+91 8208065506</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-sm opacity-90">&copy; {new Date().getFullYear()} whsofttech</p>
            <div className="flex gap-3">
              <a href="https://linkedin.com/in/whsofttech" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 p-1.5 rounded transition-opacity" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" className="opacity-80 hover:opacity-100 p-1.5 rounded transition-opacity" aria-label="GitHub"><Github size={18} /></a>
              <a href="#" className="opacity-80 hover:opacity-100 p-1.5 rounded transition-opacity" aria-label="Twitter"><Twitter size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
