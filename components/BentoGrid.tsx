"use client";

import { Code2, TrendingUp, Zap, Shield } from "lucide-react";

const items = [
  {
    title: "Custom Development",
    desc: "Tailored software built for your exact requirements.",
    icon: Code2,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Proven Track Record",
    desc: "100+ projects delivered with measurable ROI.",
    icon: TrendingUp,
    className: "",
  },
  {
    title: "Fast Delivery",
    desc: "Agile sprints with clear milestones and communication.",
    icon: Zap,
    className: "",
  },
  {
    title: "Quality & Support",
    desc: "Rigorous QA and ongoing maintenance.",
    icon: Shield,
    className: "md:col-span-2",
  },
];

export function BentoGrid() {
  return (
    <section className="py-12 md:py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-md bg-[#E9ECEF] text-[#212529] text-sm font-medium mb-4">
            Why choose us
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#212529] mb-3">
            Why choose whsofttech
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto">
            Your trusted technology partner for digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isLarge = item.className.includes("row-span-2");
            return (
              <div
                key={i}
                className={`p-6 md:p-8 rounded-xl bg-white border border-[#E9ECEF] hover:border-[#fd7e14]/20 hover:shadow-md transition-all duration-300 flex flex-col ${item.className}`}
              >
                <div className={`rounded-lg bg-[#fd7e14]/10 flex items-center justify-center mb-4 shrink-0 ${isLarge ? "w-14 h-14" : "w-12 h-12"}`}>
                  <Icon className={isLarge ? "w-7 h-7 text-[#fd7e14]" : "w-6 h-6 text-[#fd7e14]"} />
                </div>
                <h3 className={`font-bold text-[#212529] mb-2 ${isLarge ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>
                  {item.title}
                </h3>
                <p className="text-[#6c757d] text-sm md:text-base flex-1">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
