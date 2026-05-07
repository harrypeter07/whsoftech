"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
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

const inputClass =
	"rounded-xl border-2 border-white/15 bg-white/[0.04] text-foreground placeholder:text-slate-500 focus-visible:border-primary focus-visible:ring-primary/30";

export function ContactForm() {
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
		<form onSubmit={handleSubmit} className="space-y-6">
			{isSuccess && (
				<Card className="border-primary/40 bg-primary/10">
					<CardContent className="pt-6">
						<div className="flex items-center gap-3">
							<CheckCircle2 className="h-5 w-5 text-sky-300" />
							<p className="font-medium text-slate-200">
								Thank you! We&apos;ve received your message and will get back to you soon.
							</p>
						</div>
					</CardContent>
				</Card>
			)}

			{error && (
				<Card className="border-destructive/50 bg-destructive/10">
					<CardContent className="pt-6">
						<div className="flex items-center gap-3">
							<AlertCircle className="h-5 w-5 text-destructive" />
							<p className="font-medium text-destructive">{error}</p>
						</div>
					</CardContent>
				</Card>
			)}

			<div className="space-y-2">
				<Label htmlFor="name" className="text-slate-200">
					Full Name
				</Label>
				<Input
					id="name"
					name="name"
					value={formData.name}
					onChange={handleChange}
					required
					placeholder="John Doe"
					className={inputClass}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="email" className="text-slate-200">
					Email Address
				</Label>
				<Input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
					placeholder="john@example.com"
					className={inputClass}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="company" className="text-slate-200">
					Company (Optional)
				</Label>
				<Input
					type="text"
					id="company"
					name="company"
					value={formData.company}
					onChange={handleChange}
					placeholder="Your Company"
					className={inputClass}
				/>
			</div>

			<div className="space-y-2">
				<Label htmlFor="service" className="text-slate-200">
					Service of Interest
				</Label>
				<Select
					value={formData.service}
					onValueChange={(value) =>
						setFormData({ ...formData, service: value })
					}
				>
					<SelectTrigger className={inputClass}>
						<SelectValue placeholder="Select a service" />
					</SelectTrigger>
					<SelectContent className="border-white/15 bg-[#0c1e36]">
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

			<div className="space-y-2">
				<Label htmlFor="message" className="text-slate-200">
					Message
				</Label>
				<Textarea
					id="message"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required
					rows={5}
					placeholder="Tell us about your project..."
					className={`${inputClass} resize-none`}
				/>
			</div>

			<div className="pt-2">
				<Button type="submit" disabled={isSubmitting} className="w-full rounded-xl" size="lg">
					{isSubmitting ? (
						<>
							<div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
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
