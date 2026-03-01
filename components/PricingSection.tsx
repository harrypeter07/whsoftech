"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    desc: "Ideal for small projects and MVPs.",
    price: "$0",
    period: "/project",
    features: ["Basic consultation", "Project proposal", "Up to 3 revisions"],
    cta: "Get started",
    href: "/contact",
    featured: false,
  },
  {
    name: "Pro",
    desc: "For growing businesses with ongoing needs.",
    price: "$999",
    period: "/month",
    features: ["Everything in Starter", "Dedicated developer", "Priority support", "Unlimited revisions"],
    cta: "Get started",
    href: "/contact",
    featured: true,
  },
];

export function PricingSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-md bg-[#E9ECEF] text-[#212529] text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#212529] mb-3">
            Plans crafted to meet your needs
          </h2>
          <p className="text-[#6c757d] max-w-2xl mx-auto">
            Choose the plan that fits your project scope and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-6 md:p-8 rounded-lg border-2 transition-all duration-300 ${
                plan.featured
                  ? "border-[#fd7e14] bg-[#fff9f5] shadow-lg"
                  : "border-[#E9ECEF] bg-white hover:border-[#fd7e14]/30"
              }`}
            >
              <h3 className={`font-bold text-xl mb-2 ${plan.featured ? "text-[#fd7e14]" : "text-[#212529]"}`}>
                {plan.name}
              </h3>
              <p className="text-[#6c757d] text-sm mb-6">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-bold text-[#212529]">{plan.price}</span>
                <span className="text-[#6c757d]">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-[#212529]">
                    <Check className="w-5 h-5 text-[#fd7e14] flex-shrink-0" strokeWidth={2.5} />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={`w-full rounded-lg py-6 ${
                  plan.featured
                    ? "bg-[#fd7e14] hover:bg-[#e96d0a] text-white"
                    : "bg-white border-2 border-[#212529] text-[#212529] hover:bg-[#212529] hover:text-white"
                }`}
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
