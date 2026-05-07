"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

const features = [
	"Custom software development",
	"AI & machine learning solutions",
	"Web & mobile app development",
];

export function Hero() {
	const heroRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const reduced =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (reduced || !heroRef.current) return;

		const ctx = gsap.context(() => {
			gsap.from(".hero-badge", {
				duration: 0.45,
				opacity: 0,
				y: -8,
				ease: "power2.out",
			});
			if (titleRef.current) {
				gsap.from(titleRef.current, {
					duration: 0.55,
					delay: 0.05,
					opacity: 0,
					y: 16,
					ease: "power3.out",
				});
			}
			gsap.from(".hero-sub", {
				duration: 0.45,
				delay: 0.15,
				opacity: 0,
				y: 10,
				ease: "power2.out",
			});
			gsap.from(".hero-feature", {
				duration: 0.4,
				delay: 0.25,
				opacity: 0,
				x: -8,
				stagger: 0.06,
				ease: "power2.out",
			});
			gsap.from(".hero-btn", {
				duration: 0.4,
				delay: 0.35,
				opacity: 0,
				y: 8,
				stagger: 0.06,
				ease: "power2.out",
			});
			gsap.from(".hero-image", {
				duration: 0.55,
				delay: 0.1,
				opacity: 0,
				x: 20,
				ease: "power3.out",
			});
		}, heroRef);
		return () => ctx.revert();
	}, []);

	return (
		<section
			ref={heroRef}
			className="min-h-[calc(100vh-4rem)] pt-24 pb-16 md:pt-28 md:pb-24"
		>
			<div className="section-shell">
				<div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
					<div className="order-2 text-center lg:order-1 lg:text-left">
						<span className="hero-badge mb-6 inline-block rounded-full border border-white/25 bg-white/[0.06] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300">
							WH SoftTech
						</span>
						<h1
							ref={titleRef}
							className="mb-6 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
						>
							Transform your business with{" "}
							<span className="gradient-text">innovative software</span>
						</h1>
						<p className="hero-sub mx-auto mb-8 max-w-xl text-lg text-slate-400 lg:mx-0">
							Custom development, AI, web & mobile. We build solutions that scale
							with clean UX and solid engineering.
						</p>
						<ul className="mb-8 flex max-w-md flex-col gap-3 text-left lg:mx-0">
							{features.map((f, i) => (
								<li
									key={i}
									className="hero-feature flex items-center gap-3 text-slate-200"
								>
									<span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-sky-400/40 bg-primary/20">
										<Check className="h-4 w-4 text-sky-300" strokeWidth={2.5} />
									</span>
									<span className="font-medium capitalize">{f}</span>
								</li>
							))}
						</ul>
						<div className="hero-btn flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
							<Button asChild size="lg" className="rounded-xl px-8">
								<Link href="/contact" className="flex items-center gap-2">
									Get started
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline" className="rounded-xl px-8">
								<Link href="/projects">View our work</Link>
							</Button>
						</div>
					</div>

					<div className="hero-image order-1 lg:order-2">
						<div className="relative overflow-hidden rounded-2xl border border-white/20 bg-[var(--surface)] shadow-2xl shadow-black/40">
							<div className="relative aspect-[4/3] min-h-[260px] sm:min-h-[300px]">
								<Image
									src="/heroimage.png"
									alt="Software development team"
									fill
									className="object-cover"
									priority
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
