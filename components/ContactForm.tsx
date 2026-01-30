"use client";

import React from "react";

import { useState, useEffect, useRef } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
	const formRef = useRef<HTMLFormElement>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		message: "",
		service: "general",
	});

	useEffect(() => {
		if (!formRef.current) return;

		const ctx = gsap.context(() => {
			gsap.from(".form-field", {
				duration: 0.6,
				opacity: 0,
				y: 20,
				stagger: 0.1,
				ease: "power2.out",
			});
		}, formRef);

		return () => ctx.revert();
	}, []);

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
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
		setError(null);
		setIsSuccess(false);

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Failed to send message");
			}

			setIsSuccess(true);
			setFormData({
				name: "",
				email: "",
				company: "",
				message: "",
				service: "general",
			});

			// Reset success message after 5 seconds
			setTimeout(() => setIsSuccess(false), 5000);
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: "An error occurred. Please try again.",
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
			{isSuccess && (
				<Card className="border-primary/50 bg-primary/5">
					<CardContent className="pt-6">
						<div className="flex items-center gap-3">
							<CheckCircle2 className="h-5 w-5 text-primary" />
							<p className="text-primary font-medium">
								Thank you! We've received your message and will get back to you
								soon.
							</p>
						</div>
					</CardContent>
				</Card>
			)}

			{error && (
				<Card className="border-destructive/50 bg-destructive/5">
					<CardContent className="pt-6">
						<div className="flex items-center gap-3">
							<AlertCircle className="h-5 w-5 text-destructive" />
							<p className="text-destructive font-medium">{error}</p>
						</div>
					</CardContent>
				</Card>
			)}

			{/* Name */}
			<div className="form-field space-y-2">
				<Label htmlFor="name">Full Name</Label>
				<Input
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					placeholder="John Doe"
					className="bg-card/50 border-border/50 hover:border-primary/50 focus:border-primary"
				/>
			</div>

			{/* Email */}
			<div className="form-field space-y-2">
				<Label htmlFor="email">Email Address</Label>
				<Input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					placeholder="john@example.com"
					className="bg-card/50 border-border/50 hover:border-primary/50 focus:border-primary"
				/>
			</div>

			{/* Company */}
			<div className="form-field space-y-2">
				<Label htmlFor="company">Company (Optional)</Label>
				<Input
					type="text"
					id="company"
					name="company"
					value={formData.company}
					onChange={handleChange}
					placeholder="Your Company"
					className="bg-card/50 border-border/50 hover:border-primary/50 focus:border-primary"
				/>
			</div>

			{/* Service Type */}
			<div className="form-field space-y-2">
				<Label htmlFor="service">Service of Interest</Label>
				<Select
					value={formData.service}
					onValueChange={(value) =>
						setFormData({ ...formData, service: value })
					}
				>
					<SelectTrigger className="bg-card/50 border-border/50 hover:border-primary/50 focus:border-primary">
						<SelectValue placeholder="Select a service" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="general">General Inquiry</SelectItem>
						<SelectItem value="software">Software Development</SelectItem>
						<SelectItem value="ai">AI Solutions</SelectItem>
						<SelectItem value="web">Web Applications</SelectItem>
						<SelectItem value="mobile">Mobile Apps</SelectItem>
						<SelectItem value="design">UI/UX Design</SelectItem>
						<SelectItem value="automation">Business Automation</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Message */}
			<div className="form-field space-y-2">
				<Label htmlFor="message">Message</Label>
				<Textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					rows={5}
					placeholder="Tell us about your project..."
					className="bg-card/50 border-border/50 hover:border-primary/50 focus:border-primary resize-none"
				/>
			</div>

			{/* Submit Button */}
			<div className="form-field pt-2">
				<Button
					type="submit"
					disabled={isSubmitting}
					className="w-full min-h-12 bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 active:scale-[0.99] border-0"
					size="lg"
				>
					{isSubmitting ? (
						<>
							<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
							Sending...
						</>
					) : (
						<>
							Send Message
							<Send className="ml-2 h-4 w-4" />
						</>
					)}
				</Button>
			</div>

		</form>
	);
}
