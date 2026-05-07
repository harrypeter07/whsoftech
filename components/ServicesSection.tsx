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
import { useReducedMotion } from "@/lib/useReducedMotion";

const servicesList = [
  {
    id: 1,
    title: "Custom Software",
    desc: "Tailored applications built for your business needs.",
    icon: Code2,
    href: "/services",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=340&fit=crop",
  },
  {
    id: 2,
    title: "AI & ML",
    desc: "Intelligent solutions that learn and adapt.",
    icon: Brain,
    href: "/services",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=340&fit=crop",
  },
  {
    id: 3,
    title: "Web Development",
    desc: "Fast, scalable web apps with modern tech.",
    icon: Globe,
    href: "/services",
    image: "https://images.unsplash.com/photo-1504639725590-34d98db2dd5a?w=600&h=340&fit=crop",
  },
  {
    id: 4,
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile solutions.",
    icon: Smartphone,
    href: "/services",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=450&fit=crop",
  },
  {
    id: 5,
    title: "UI/UX Design",
    desc: "User-centered design that converts.",
    icon: Palette,
    href: "/services",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=340&fit=crop",
  },
];

const services = servicesList;
const LEN = services.length;
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

const AUTO_SLIDE_MS = 4500;
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
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`group card-hover-premium shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 bg-[var(--surface)] shadow-lg transition-[border-color,box-shadow,transform] duration-300 ${
        isActive
          ? "border-primary shadow-xl shadow-primary/15 ring-1 ring-white/10"
          : "border-white/15 hover:border-primary/35 hover:shadow-xl md:hover:-translate-y-0.5"
      }`}
      style={{ width: CARD_WIDTH }}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.1]"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "/heroimage.png";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/90 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-[#071426]/80 backdrop-blur-sm">
          <Icon className="h-6 w-6 text-sky-300" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-lg font-bold text-white hover-text-shift">{service.title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-slate-400">{service.desc}</p>
        <Link
          href={service.href}
          className="inline-flex items-center gap-1 text-sm font-semibold text-sky-300 transition-colors hover:text-sky-200"
          onClick={(e) => e.stopPropagation()}
        >
          Learn more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(START_INDEX);
  const isJumpingRef = useRef(false);

  const logicalIndex = (((activeIndex - 1 + LEN) % LEN) + LEN) % LEN;

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, AUTO_SLIDE_MS);
    return () => clearInterval(id);
  }, []);

  const handleJumpIfNeeded = () => {
    if (activeIndex === NEXT_JUMP_FROM + 1) {
      isJumpingRef.current = true;
      setActiveIndex(NEXT_JUMP_TO);
    } else if (activeIndex === -1) {
      isJumpingRef.current = true;
      setActiveIndex(PREV_JUMP_TO);
    }
  };

  useEffect(() => {
    isJumpingRef.current = false;
  });

  const handlePrev = () => setActiveIndex((prev) => prev - 1);
  const handleNext = () => setActiveIndex((prev) => prev + 1);

  return (
    <section className="overflow-hidden border-t border-white/10 py-14 md:py-20">
      <div className="section-shell">
        <div className="mb-10 text-center md:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-block rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl scroll-fade-up hover-text-shift"
          >
            Software solutions that drive growth
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-base text-slate-400 md:text-lg"
          >
            From custom development to AI integration, we deliver end-to-end solutions.
          </motion.p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6 md:overflow-visible"
              style={{ paddingLeft: `calc(50% - ${CARD_WIDTH / 2}px)` }}
              animate={{ x: -activeIndex * (CARD_WIDTH + GAP) }}
              transition={
                isJumpingRef.current
                  ? { duration: 0 }
                  : { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }
              }
              onAnimationComplete={handleJumpIfNeeded}
            >
              {extendedServices.map((service, idx) => (
                <ServiceCard
                  key={`${service.id}-${idx}`}
                  service={service}
                  isActive={idx === activeIndex}
                  onClick={() => {
                    const logI = (((idx - 1 + LEN) % LEN) + LEN) % LEN;
                    setActiveIndex(START_INDEX + logI);
                  }}
                />
              ))}
            </motion.div>
          </div>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[var(--surface)] text-slate-200 shadow-md transition-colors hover:border-primary/40 hover:bg-white/[0.08] md:-translate-x-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-0 top-1/2 z-10 flex h-10 w-10 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[var(--surface)] text-slate-200 shadow-md transition-colors hover:border-primary/40 hover:bg-white/[0.08] md:translate-x-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {services.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(START_INDEX + i)}
              className={`h-2.5 rounded-full transition-[width,background-color] duration-300 ${
                i === logicalIndex
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-white/20 hover:bg-white/35"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 text-center"
        >
          <Button asChild size="lg" className="rounded-xl px-8 btn-magnetic">
            <Link href="/services" className="flex items-center gap-2">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
