"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    desc: "Ideal for small projects and MVPs.",
    price: "₹24,999",
    period: " /project",
    features: ["Discovery call", "Project proposal", "Up to 3 revisions", "Delivery roadmap"],
    cta: "Get started",
    href: "/contact",
    featured: false,
  },
  {
    name: "Pro",
    desc: "For growing businesses with ongoing needs.",
    price: "₹79,999",
    period: " /month",
    features: [
      "Everything in Starter",
      "Dedicated developer",
      "Priority support",
      "Flexible revisions",
      "Weekly strategy review",
    ],
    cta: "Get started",
    href: "/contact",
    featured: true,
  },
];

export function PricingSection() {
  return (
    <section className="border-t border-white/10 py-14 md:py-20">
      <div className="section-shell">
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            Pricing
          </span>
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl scroll-fade-up hover-text-shift">
            Plans crafted to meet your needs
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            Choose the engagement that fits your scope and timeline.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card-hover-premium rounded-2xl border-2 p-6 transition-[border-color,box-shadow,transform] duration-300 md:p-8 scroll-fade-up ${
                plan.featured
                  ? "border-primary bg-[var(--surface-elevated)] shadow-xl shadow-primary/15 ring-1 ring-white/10"
                  : "panel-card border-white/20"
              }`}
            >
              <h3
                className={`mb-2 text-xl font-bold hover-text-shift ${plan.featured ? "text-sky-300" : "text-white"}`}
              >
                {plan.name}
              </h3>
              <p className="mb-6 text-sm text-slate-400">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-white md:text-4xl">
                  {plan.price}
                </span>
                <span className="text-slate-400">{plan.period}</span>
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-sky-400" strokeWidth={2.5} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full rounded-xl py-6 btn-magnetic"
                variant={plan.featured ? "default" : "outline"}
              >
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
