"use client";

import { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { QuoteBuilder } from "@/components/QuoteBuilder";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Calculator,
  ArrowLeft,
} from "lucide-react";

export function ContactPageClient() {
  const [showQuoteBuilder, setShowQuoteBuilder] = useState(false);

  if (showQuoteBuilder) {
    return (
      <div className="min-h-screen bg-background">
        <section className="border-b border-white/10 px-4 pb-16 pt-24 sm:px-6 lg:px-8">
          <div className="section-shell max-w-3xl">
            <Button
              type="button"
              variant="ghost"
              className="mb-8 gap-2 text-slate-300 hover:text-white"
              onClick={() => setShowQuoteBuilder(false)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to contact
            </Button>
            <div className="mb-10 text-center">
              <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
                Quote builder
              </span>
              <h1 className="mb-3 text-3xl font-bold text-white sm:text-4xl scroll-fade-up hover-text-shift">
                Build your <span className="gradient-text">estimate</span>
              </h1>
              <p className="text-slate-400">
                Select services and features, then send the summary on WhatsApp.
              </p>
            </div>
            <QuoteBuilder />
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      title: "Email",
      value: "whssfottech2026@gmail.com",
      link: "mailto:whssfottech2026@gmail.com",
    },
    {
      icon: <Phone size={22} />,
      title: "Phone",
      value: "+91 8208065506",
      link: "tel:+918208065506",
    },
    {
      icon: <MessageCircle size={22} />,
      title: "WhatsApp",
      value: "+91 9096539177",
      link: "https://wa.me/919096539177?text=Hi%20whsofttech!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.",
    },
    {
      icon: <MapPin size={22} />,
      title: "Location",
      value: "India",
      link: "#",
    },
    {
      icon: <Clock size={22} />,
      title: "Business Hours",
      value: "Mon - Sat: 9am - 6pm IST",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-white/10 px-4 pb-10 pt-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
            Contact
          </span>
          <h1 className="mb-4 text-balance text-3xl font-bold text-white sm:text-4xl md:text-5xl scroll-fade-up hover-text-shift">
            Let&apos;s work <span className="gradient-text">together</span>
          </h1>
          <p className="text-slate-400">
            Have a project in mind? We typically respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="section-shell">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-bold text-white">Get in touch</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Email, phone, WhatsApp, or the form — your choice.
                </p>
              </div>

              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="card-hover-premium scroll-fade-up transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/35 hover:shadow-lg"
                  >
                    <CardContent className="p-4">
                      <a href={item.link} className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-primary/15 text-sky-300">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-semibold text-white">{item.title}</p>
                          <p className="text-sm text-slate-400">{item.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="overflow-hidden border-primary/30 bg-gradient-to-br from-primary/25 to-sky-500/10">
                <CardContent className="p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                      <Calculator size={22} className="text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-white">Instant quote</h3>
                      <p className="text-sm text-slate-200/90">
                        Step through options and send a summary on WhatsApp.
                      </p>
                    </div>
                    <Button
                      type="button"
                      onClick={() => setShowQuoteBuilder(true)}
                      variant="outline"
                      className="shrink-0 border-white/30 bg-white/10 text-white hover:bg-white/20 btn-magnetic"
                    >
                      Build quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-white">Send a message</CardTitle>
                  <CardDescription className="text-slate-400">
                    We&apos;ll get back within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050f1c]/80 py-12">
        <div className="section-shell text-center">
          <h2 className="mb-2 text-xl font-bold text-white">Ready to start?</h2>
          <p className="mb-6 text-sm text-slate-400">
            Tell us about timelines, stack, and goals — we&apos;ll propose a path.
          </p>
          <Button asChild variant="outline" size="lg" className="rounded-xl border-white/25 btn-magnetic">
            <Link href="/projects">View portfolio</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
