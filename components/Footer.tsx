'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { LOGO_ALT, LOGO_HEIGHT, LOGO_ON_DARK_SRC, LOGO_WIDTH } from '@/lib/brand';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/20 bg-[#050f1c] text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(37,99,235,0.12),transparent)]" />

      <div className="section-shell relative z-10 py-12 sm:py-16">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4">
              <Image
                src={LOGO_ON_DARK_SRC}
                alt={LOGO_ALT}
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                className="h-14 w-auto max-w-[280px] object-contain object-left sm:h-16"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Software solutions that scale — web, mobile, and AI.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-300/90">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services#software" className="transition-colors hover:text-white">
                  Software
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="transition-colors hover:text-white">
                  AI
                </Link>
              </li>
              <li>
                <Link href="/services#web" className="transition-colors hover:text-white">
                  Web
                </Link>
              </li>
              <li>
                <Link href="/services#mobile" className="transition-colors hover:text-white">
                  Mobile
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-300/90">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="transition-colors hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition-colors hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-300/90">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <a href="mailto:whssfottech2026@gmail.com" className="hover:text-white hover:underline">
                  whssfottech2026@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-sky-400" />
                <a href="tel:+918208065506" className="hover:text-white hover:underline">
                  +91 8208065506
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-sky-400" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500 sm:text-sm">
            &copy; {new Date().getFullYear()} whsofttech. All rights reserved.
          </p>
          <div className="flex gap-2">
            <a
              href="https://linkedin.com/in/whsofttech"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 p-2 text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="rounded-lg border border-white/15 p-2 text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              className="rounded-lg border border-white/15 p-2 text-slate-400 transition-colors hover:border-sky-400/40 hover:text-sky-300"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
