"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Code2,
  Brain,
  Globe,
  Smartphone,
  Palette,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const servicesList = [
  {
    id: 1,
    title: "Custom Software",
    desc: "Tailored applications built for your business needs.",
    icon: Code2,
    href: "/services/software",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
  },
  {
    id: 2,
    title: "AI & ML",
    desc: "Intelligent solutions that learn and adapt.",
    icon: Brain,
    href: "/services/ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
  },
  {
    id: 3,
    title: "Web Development",
    desc: "Fast, scalable web apps with modern tech.",
    icon: Globe,
    href: "/services/web",
    image: "https://images.unsplash.com/photo-1504639725590-34d98db2dd5a?w=600&h=340&fit=crop",
  },
  {
    id: 4,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile solutions.",
    icon: Smartphone,
    href: "/services/mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=340&fit=crop",
  },
  {
    id: 5,
    title: "UI/UX Design",
    desc: "User-centered design that converts.",
    icon: Palette,
    href: "/services/design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=340&fit=crop",
  },
];

const services = servicesList;
const LEN = services.length;
// Infinite track: [last, ...3x full set, first] so we can seamlessly loop both ways
const extendedServices = [
  services[LEN - 1],
  ...services,
  ...services,
  ...services,
  services[0],
];
const START_INDEX = LEN + 1;
const PREV_JUMP_TO = LEN * 2;
const NEXT_JUMP_FROM = extendedServices.length - 1;
const NEXT_JUMP_TO = LEN + 1;

const AUTO_SLIDE_MS = 4000;
const CARD_WIDTH = 340;
const GAP = 24;

type Service = (typeof services)[number];

function ServiceCard({
  service,
  isActive,
  onClick,
}: {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = service.icon;
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`group shrink-0 cursor-pointer rounded-2xl overflow-hidden bg-white border-2 shadow-lg transition-shadow duration-300 ${
        isActive
          ? "border-[#fd7e14] shadow-xl scale-[1.02]"
          : "border-transparent hover:border-[#fd7e14]/30 hover:shadow-xl"
      }`}
      style={{ width: CARD_WIDTH }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-white/95 flex items-center justify-center shadow-sm">
          <Icon className="w-6 h-6 text-[#fd7e14]" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-[#212529] text-lg mb-2">{service.title}</h3>
        <p className="text-[#6c757d] text-sm mb-4 line-clamp-2">{service.desc}</p>
        <Link
          href={service.href}
          className="inline-flex items-center gap-1 text-[#fd7e14] font-semibold text-sm hover:gap-2 transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const isJumpingRef = useRef(false);

  const logicalIndex = ((activeIndex - 1 + LEN) % LEN);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, AUTO_SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (activeIndex === NEXT_JUMP_FROM + 1) {
      isJumpingRef.current = true;
      setActiveIndex(NEXT_JUMP_TO);
    } else if (activeIndex === -1) {
      isJumpingRef.current = true;
      setActiveIndex(PREV_JUMP_TO);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (isJumpingRef.current) {
      isJumpingRef.current = false;
    }
  });

  const handlePrev = () => {
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1);
  };

  const goToSlide = (logicalI: number) => {
    const target = START_INDEX + logicalI;
    setActiveIndex(target);
  };

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-md bg-[#E9ECEF] text-[#212529] text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#212529] mb-3"
          >
            Software solutions that drive growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#6c757d] max-w-2xl mx-auto text-base md:text-lg"
          >
            From custom development to AI integration, we deliver end-to-end solutions.
          </motion.p>
        </div>

        {/* Card gallery with smooth continuous slide */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 md:overflow-visible"
              style={{ paddingLeft: `calc(50% - ${CARD_WIDTH / 2}px)` }}
              animate={{ x: -activeIndex * (CARD_WIDTH + GAP) }}
              transition={
                isJumpingRef.current
                  ? { duration: 0 }
                  : { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }
              }
            >
              {extendedServices.map((service, idx) => (
                <ServiceCard
                  key={`${service.id}-${idx}`}
                  service={service}
                  isActive={idx === activeIndex}
                  onClick={() => {
                    const logI = ((idx - 1 + LEN) % LEN + LEN) % LEN;
                    setActiveIndex(START_INDEX + logI);
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 rounded-full bg-white shadow-md border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f9fafb] transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5 text-[#4b5563]" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 rounded-full bg-white shadow-md border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f9fafb] transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5 text-[#4b5563]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActiveIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-8 bg-[#fd7e14]" : "w-2.5 bg-[#e2e8f0] hover:bg-[#cbd5e1]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8 md:mt-10"
        >
          <Button
            asChild
            size="lg"
            className="bg-[#fd7e14] hover:bg-[#e96d0a] text-white rounded-lg px-8 py-6"
          >
            <Link href="/services" className="flex items-center gap-2">
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
