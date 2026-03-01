"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Custom software development",
  "AI & machine learning solutions",
  "Web & mobile app development",
];

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", { duration: 0.6, opacity: 0, y: -10, ease: "power2.out" });
      if (titleRef.current) {
        gsap.from(titleRef.current, { duration: 0.8, delay: 0.1, opacity: 0, y: 20, ease: "power3.out" });
      }
      gsap.from(subtitleRef.current, { duration: 0.6, delay: 0.3, opacity: 0, y: 15, ease: "power2.out" });
      gsap.from(".hero-feature", { duration: 0.5, delay: 0.5, opacity: 0, x: -10, stagger: 0.1, ease: "power2.out" });
      gsap.from(".hero-btn", { duration: 0.5, delay: 0.7, opacity: 0, y: 10, stagger: 0.1, ease: "power2.out" });
      gsap.from(".hero-image", { duration: 0.8, delay: 0.2, opacity: 0, x: 30, ease: "power3.out" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen pt-24 pb-16 md:pt-28 md:pb-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="hero-badge inline-block px-3 py-1 rounded-md bg-[#E9ECEF] text-[#212529] text-sm font-medium mb-6">
              whsofttech
            </span>
            <h1
              ref={titleRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#212529] leading-tight mb-6"
            >
              Transform your business with
              <br />
              <span className="text-[#fd7e14]">innovative software</span>
            </h1>
            <p
              ref={subtitleRef}
              className="text-lg text-[#6c757d] max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Custom development, AI, web & mobile. We build solutions that scale.
            </p>
            <ul className="space-y-3 mb-8 text-left max-w-md mx-auto lg:mx-0">
              {features.map((f, i) => (
                <li key={i} className="hero-feature flex items-center gap-3 text-[#212529]">
                  <span className="shrink-0 w-5 h-5 rounded-full bg-[#fd7e14] flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="font-medium capitalize">{f}</span>
                </li>
              ))}
            </ul>
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="hero-btn bg-[#fd7e14] hover:bg-[#e96d0a] text-white rounded-lg px-8 py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get started
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="hero-btn border-[#212529] text-[#212529] hover:bg-[#212529] hover:text-white rounded-lg px-8 py-6"
              >
                <Link href="/projects">View our work</Link>
              </Button>
            </div>
          </div>

          {/* Right - Image only */}
          <div className="hero-image order-1 lg:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-4/3 bg-[#E9ECEF] relative min-h-[280px] sm:min-h-[320px]">
                <Image
                  src="/heroimage.png"
                  alt="Software development"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
