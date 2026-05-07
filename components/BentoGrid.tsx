"use client";

import { Code2, TrendingUp, Zap, Shield } from "lucide-react";

const items = [
  {
    title: "Custom Development",
    desc: "Tailored software built for your exact requirements.",
    icon: Code2,
    className: "md:col-span-2 md:row-span-2",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Proven Track Record",
    desc: "100+ projects delivered with measurable ROI.",
    icon: TrendingUp,
    className: "",
    image:
      "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Fast Delivery",
    desc: "Agile sprints with clear milestones and communication.",
    icon: Zap,
    className: "",
    image:
      "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1200",
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
    <section className="border-t border-white/10 py-14 md:py-20">
      <div className="section-shell">
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            Why choose us
          </span>
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Why choose whsofttech
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Your trusted technology partner for digital transformation.
          </p>
        </div>

        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isLarge = item.className.includes("row-span-2");
            return (
              <div
                key={i}
                className={`panel-card flex flex-col transition-[border-color,box-shadow] duration-300 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/10 ${item.className}`}
              >
                {item.image && (
                  <div className="mb-4 h-32 overflow-hidden rounded-xl border border-white/10 md:h-36">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                      style={{ backgroundImage: `url("${item.image}")` }}
                    />
                  </div>
                )}
                <div
                  className={`mb-4 flex shrink-0 items-center justify-center rounded-xl border border-white/15 bg-primary/15 ${isLarge ? "h-14 w-14" : "h-12 w-12"}`}
                >
                  <Icon
                    className={`text-sky-300 ${isLarge ? "h-7 w-7" : "h-6 w-6"}`}
                  />
                </div>
                <h3
                  className={`mb-2 font-bold text-white ${isLarge ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}
                >
                  {item.title}
                </h3>
                <p className="flex-1 text-sm text-slate-400 md:text-base">
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
