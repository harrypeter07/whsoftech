"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const mobilePanelRef = useRef<HTMLDivElement>(null);
	const reducedMotion = useReducedMotion();

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/projects", label: "Portfolio" },
		{ href: "/contact", label: "Contact" },
	];

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isOpen &&
				mobilePanelRef.current &&
				!mobilePanelRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [isOpen]);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const transition = reducedMotion
		? { duration: 0 }
		: { duration: 0.25, ease: [0.22, 0.61, 0.36, 1] as const };

	return (
		<nav className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-white/20 bg-[#071426]/85 backdrop-blur-xl supports-[backdrop-filter]:bg-[#071426]/75">
			<div className="section-shell">
				<div className="flex h-24 sm:h-28 items-center justify-between">
					<Link
						href="/"
						className="flex items-center gap-3 sm:gap-4 group"
						aria-label="whsofttech Home"
					>
						<div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-2xl border border-white/20 bg-white/[0.06] p-1.5 transition-transform duration-200 group-hover:scale-[1.03]">
							<Image
								src="/logo.png"
								alt=""
								fill
								className="object-contain p-0.5"
							/>
						</div>
						<span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
							whsofttech
						</span>
					</Link>

					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="text-sm font-medium text-slate-300 transition-colors hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-400 after:transition-all hover:after:w-full hover:text-glow"
							>
								{link.label}
							</Link>
						))}
						<Button asChild size="default" className="rounded-xl px-5">
							<Link href="/contact">Get Started</Link>
						</Button>
					</div>

					<button
						type="button"
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/[0.06] text-white transition-colors hover:border-primary/40 hover:bg-white/[0.1]"
						aria-expanded={isOpen}
						aria-label={isOpen ? "Close menu" : "Open menu"}
					>
						{isOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						ref={mobilePanelRef}
						initial={reducedMotion ? false : { opacity: 0, y: -8 }}
						animate={{ opacity: 1, y: 0 }}
						exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
						transition={transition}
						className="md:hidden absolute left-0 right-0 top-full border-b border-white/15 bg-[#0c1e36]/95 backdrop-blur-xl shadow-xl shadow-black/40"
					>
						<div className="section-shell flex flex-col gap-1 py-4 pb-6">
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className="rounded-xl border border-transparent px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:border-white/15 hover:bg-white/[0.06] hover:text-white"
								>
									{link.label}
								</Link>
							))}
							<Button asChild className="mt-3 w-full rounded-xl">
								<Link href="/contact" onClick={() => setIsOpen(false)}>
									Get Started
								</Link>
							</Button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
