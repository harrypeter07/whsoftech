"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);
	const mobileMenuRef = useRef<HTMLDivElement>(null);

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/projects", label: "Portfolio" },
		{ href: "/contact", label: "Contact" },
	];

	useEffect(() => {
		if (isOpen && mobileMenuRef.current) {
			gsap.from(mobileMenuRef.current, {
				duration: 0.3,
				opacity: 0,
				y: -10,
				ease: "power2.out",
			});
			gsap.from(mobileMenuRef.current.children, {
				duration: 0.3,
				opacity: 0,
				x: -20,
				stagger: 0.05,
				ease: "power2.out",
			});
		}
	}, [isOpen]);

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm shadow-sm transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-14 min-h-[3.5rem]">
					{/* Logo + Company name */}
					<Link href="/" className="flex items-center gap-2 text-primary font-semibold group" aria-label="whsofttech Home">
						<div className="relative w-8 h-8 flex-shrink-0 group-hover:opacity-90 transition-opacity">
							<Image
								src="/logo.png"
								alt="whsofttech"
								fill
								className="object-contain"
								priority
							/>
						</div>
						<span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors hidden sm:inline">whsofttech</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex gap-8" ref={navRef}>
						{navLinks.map((link, index) => (
							<Link
								key={link.href}
								href={link.href}
								className="relative text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 group"
								style={{ transitionDelay: `${index * 10}ms` }}
							>
								{link.label}
								<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
							</Link>
						))}
					</div>

					{/* Desktop CTA Button */}
					<Button
						asChild
						className="hidden md:inline-flex bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300"
					>
						<Link href="/contact">Get Started</Link>
					</Button>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden p-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div
						ref={mobileMenuRef}
						className="md:hidden pb-3 space-y-1 rounded-lg mt-2 p-2 border border-border bg-muted/50"
					>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="block px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</Link>
						))}
						<Button
							asChild
							className="w-full mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 hover:shadow-lg transition-all duration-300"
							onClick={() => setIsOpen(false)}
						>
							<Link href="/contact">Get Started</Link>
						</Button>
					</div>
				)}
			</div>
		</nav>
	);
}
