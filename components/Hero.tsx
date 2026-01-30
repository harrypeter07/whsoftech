"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
	const heroRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);
	const subtitleRef = useRef<HTMLParagraphElement>(null);
	const buttonsRef = useRef<HTMLDivElement>(null);
	const statsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Animate badge
			gsap.from(".hero-badge", {
				duration: 0.8,
				opacity: 0,
				y: -20,
				ease: "power2.out",
			});

			// Animate title
			if (titleRef.current) {
				gsap.from(titleRef.current, {
					duration: 1,
					delay: 0.2,
					opacity: 0,
					y: 30,
					ease: "power3.out",
				});
			}

			// Animate subtitle
			gsap.from(subtitleRef.current, {
				duration: 0.8,
				delay: 0.6,
				opacity: 0,
				y: 20,
				ease: "power2.out",
			});

			// Animate buttons with stagger
			gsap.from(".hero-btn", {
				duration: 0.6,
				delay: 0.8,
				opacity: 0,
				scale: 0.9,
				stagger: 0.15,
				ease: "back.out(1.7)",
			});

			// Animate stats with scroll trigger
			gsap.from(".stat-item", {
				scrollTrigger: {
					trigger: statsRef.current,
					start: "top 80%",
					toggleActions: "play none none none",
				},
				duration: 0.6,
				opacity: 0,
				y: 30,
				stagger: 0.15,
				ease: "power2.out",
			});
		}, heroRef);

		return () => ctx.revert();
	}, []);

	return (
		<section
			className="min-h-[85vh] pt-16 pb-16 relative overflow-hidden"
			ref={heroRef}
		>
			{/* Animated gradient background */}
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-blob" />
				<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/30 rounded-full blur-[120px] animate-blob-slow" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] animate-blob-delayed" />
				{/* Grid pattern overlay */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center text-center">
					{/* Company name */}
					<p className="hero-badge text-sm font-semibold text-primary uppercase tracking-widest mb-3">
						whsofttech
					</p>

					{/* Main heading */}
					<h1
						ref={titleRef}
						className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-5 leading-tight text-balance"
					>
						Transform Your Business With
						<br />
						<span className="gradient-text inline-block">
							Innovative Software
						</span>
					</h1>

					{/* Subheading */}
					<p
						ref={subtitleRef}
						className="text-lg text-muted-foreground max-w-2xl mb-8"
					>
						Custom development, AI, web & mobile. We build solutions that scale.
					</p>

					{/* CTA Buttons */}
					<div
						ref={buttonsRef}
						className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
					>
						<Button
							asChild
							size="lg"
							className="hero-btn bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 hover:shadow-xl hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 glow-primary"
						>
							<Link href="/contact" className="flex items-center gap-2">
								<span>Get Started</span>
								<ArrowRight
									size={20}
									className="group-hover:translate-x-1 transition-transform"
								/>
							</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant="outline"
							className="hero-btn border-primary/50 hover:bg-primary/10 hover:border-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 backdrop-blur-sm"
						>
							<Link href="/projects">View Our Work</Link>
						</Button>
					</div>

					{/* Stats */}
					<div
						ref={statsRef}
						className="grid grid-cols-3 gap-6 w-full pt-10 border-t border-border max-w-2xl"
					>
						<div className="stat-item group cursor-pointer">
							<p className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
								500+
							</p>
							<p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
								Projects Delivered
							</p>
						</div>
						<div className="stat-item group cursor-pointer">
							<p className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
								50+
							</p>
							<p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
								Industry Experts
							</p>
						</div>
						<div className="stat-item group cursor-pointer">
							<p className="text-3xl sm:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
								12+
							</p>
							<p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300">
								Years Experience
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
