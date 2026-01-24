'use client';

import React from "react"

import { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import gsap from 'gsap';

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'general',
  });

  useEffect(() => {
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.form-field', {
        duration: 0.6,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }, formRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: 'general',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      {isSuccess && (
        <div className="p-4 bg-primary/10 border border-primary rounded-lg animate-in fade-in zoom-in">
          <p className="text-primary font-medium">
            Thank you! We've received your message and will get back to you soon.
          </p>
        </div>
      )}

      {/* Name */}
      <div className="form-field group">
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:border-primary/50 group-focus-within:shadow-lg group-focus-within:shadow-primary/20"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div className="form-field group">
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:border-primary/50 group-focus-within:shadow-lg group-focus-within:shadow-primary/20"
          placeholder="john@example.com"
        />
      </div>

      {/* Company */}
      <div className="form-field group">
        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:border-primary/50 group-focus-within:shadow-lg group-focus-within:shadow-primary/20"
          placeholder="Your Company"
        />
      </div>

      {/* Service Type */}
      <div className="form-field group">
        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:border-primary/50 group-focus-within:shadow-lg group-focus-within:shadow-primary/20"
        >
          <option value="general">General Inquiry</option>
          <option value="software">Software Development</option>
          <option value="ai">AI Solutions</option>
          <option value="web">Web Applications</option>
          <option value="mobile">Mobile Apps</option>
          <option value="design">UI/UX Design</option>
          <option value="automation">Business Automation</option>
        </select>
      </div>

      {/* Message */}
      <div className="form-field group">
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 group-focus-within:text-primary transition-colors">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 group-hover:border-primary/50 group-focus-within:shadow-lg group-focus-within:shadow-primary/20 resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </button>

      {/* Additional Info */}
      <p className="text-sm text-muted-foreground text-center">
        We typically respond within 24 hours. For urgent matters, please call us directly.
      </p>
    </form>
  );
}
