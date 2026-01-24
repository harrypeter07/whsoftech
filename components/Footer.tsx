'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg" />
              TechSolutions
            </h3>
            <p className="text-sm opacity-80">
              Building innovative software solutions that transform businesses and drive growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#software" className="opacity-80 hover:opacity-100 transition-opacity">Software Development</Link></li>
              <li><Link href="/services#ai" className="opacity-80 hover:opacity-100 transition-opacity">AI Solutions</Link></li>
              <li><Link href="/services#web" className="opacity-80 hover:opacity-100 transition-opacity">Web Applications</Link></li>
              <li><Link href="/services#mobile" className="opacity-80 hover:opacity-100 transition-opacity">Mobile Apps</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link href="/projects" className="opacity-80 hover:opacity-100 transition-opacity">Portfolio</Link></li>
              <li><Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">Contact</Link></li>
              <li><Link href="#" className="opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@techsolutions.com" className="opacity-80 hover:opacity-100 transition-opacity">hello@techsolutions.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="opacity-80 hover:opacity-100 transition-opacity">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span className="opacity-80">San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              &copy; 2024 TechSolutions. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
