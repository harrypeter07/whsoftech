"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import {
	PRELOADER_DONE_EVENT,
	hasPreloaderCompleted,
} from "@/lib/preloader-events";
import {
	LOGO_ALT,
	LOGO_HEIGHT,
	LOGO_PANEL_BG,
	LOGO_SRC,
	LOGO_WIDTH,
} from "@/lib/brand";

const LOGO_ZONE_MIN = "6rem";
const expandEase = [0.16, 1, 0.3, 1] as const;

const navLinkClass =
	"group relative px-1 py-2 text-base font-semibold tracking-wide text-white sm:text-lg";

function NavLink({
	href,
	label,
	onClick,
}: {
	href: string;
	label: string;
	onClick?: () => void;
}) {
	return (
		<Link href={href} onClick={onClick} className={navLinkClass}>
			{label}
			<span
				className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-[width] duration-300 ease-out group-hover:w-full"
				aria-hidden
			/>
		</Link>
	);
}

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [pageVisible, setPageVisible] = useState(false);
	const [hasExpanded, setHasExpanded] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);
	const reducedMotion = useReducedMotion();

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/about", label: "About" },
		{ href: "/services", label: "Services" },
		{ href: "/projects", label: "Portfolio" },
		{ href: "/contact", label: "Contact" },
	];

	useEffect(() => {
		const showNav = () => setPageVisible(true);
		if (hasPreloaderCompleted()) showNav();
		window.addEventListener(PRELOADER_DONE_EVENT, showNav);
		const fallback = window.setTimeout(showNav, 11200);
		return () => {
			window.removeEventListener(PRELOADER_DONE_EVENT, showNav);
			window.clearTimeout(fallback);
		};
	}, []);

	useEffect(() => {
		if (reducedMotion && pageVisible) setHasExpanded(true);
	}, [reducedMotion, pageVisible]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				isOpen &&
				navRef.current &&
				!navRef.current.contains(event.target as Node)
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

	const menuTransition = reducedMotion
		? { duration: 0 }
		: { duration: 0.25, ease: [0.22, 0.61, 0.36, 1] as const };

	const expandTransition = reducedMotion
		? { duration: 0.2, ease: expandEase }
		: { duration: 1.1, ease: expandEase };

	return (
		<header className="fixed top-0 left-0 right-0 z-[200] px-1.5 pt-2 sm:px-2 sm:pt-3 pointer-events-none">
			<div
				ref={navRef}
				className="pointer-events-auto mx-auto w-full max-w-[min(98vw,96rem)]"
			>
				<motion.nav
					aria-label="Main navigation"
					className="relative flex overflow-hidden rounded-none border border-white/25 shadow-[0_0_32px_rgba(255,255,255,0.12),0_8px_32px_rgba(0,0,0,0.12)]"
					initial={false}
					animate={{
						width: pageVisible || reducedMotion ? "100%" : LOGO_ZONE_MIN,
					}}
					transition={expandTransition}
					onAnimationComplete={() => {
						if (pageVisible) setHasExpanded(true);
					}}
					style={{ maxWidth: "100%" }}
				>
					<div
						className="relative flex h-[4.25rem] w-[10%] min-w-[6rem] max-w-[8.5rem] shrink-0 items-center justify-center px-2 sm:h-[4.75rem] sm:px-3"
						style={{ backgroundColor: LOGO_PANEL_BG }}
					>
						<Link
							href="/"
							className="group flex items-center transition-transform duration-200 hover:scale-[1.02]"
							aria-label="WH SoftTech Home"
						>
							<Image
								src={LOGO_SRC}
								alt={LOGO_ALT}
								width={LOGO_WIDTH}
								height={LOGO_HEIGHT}
								className="h-10 w-auto max-w-full object-contain object-center sm:h-[3.15rem]"
								priority
							/>
						</Link>
					</div>

					<motion.div
						className="flex min-w-0 flex-1 flex-col border-l border-white/15 bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-150 supports-[backdrop-filter]:bg-white/[0.05]"
						initial={false}
						animate={{ opacity: pageVisible || reducedMotion ? 1 : 0 }}
						transition={
							reducedMotion
								? { duration: 0.2 }
								: { duration: 0.5, delay: pageVisible ? 0.35 : 0 }
						}
					>
						<div className="flex h-[4.25rem] items-center justify-between gap-4 px-4 sm:h-[4.75rem] sm:gap-6 sm:px-8">
							<motion.div
								className="hidden md:flex flex-1 items-center justify-center gap-9 lg:gap-11"
								initial={false}
								animate={
									hasExpanded || reducedMotion
										? { opacity: 1, x: 0 }
										: { opacity: 0, x: -16 }
								}
								transition={
									reducedMotion
										? { duration: 0.15 }
										: { duration: 0.5, delay: 0.12, ease: expandEase }
								}
							>
								{navLinks.map((link, i) => (
									<motion.div
										key={link.href}
										initial={false}
										animate={
											hasExpanded || reducedMotion
												? { opacity: 1, y: 0 }
												: { opacity: 0, y: 8 }
										}
										transition={
											reducedMotion
												? { duration: 0.15 }
												: {
														duration: 0.4,
														delay: 0.2 + i * 0.06,
														ease: expandEase,
													}
										}
									>
										<NavLink href={link.href} label={link.label} />
									</motion.div>
								))}
							</motion.div>

							<motion.div
								className="hidden md:block shrink-0"
								initial={false}
								animate={
									hasExpanded || reducedMotion
										? { opacity: 1, scale: 1 }
										: { opacity: 0, scale: 0.9 }
								}
								transition={
									reducedMotion
										? { duration: 0.15 }
										: { duration: 0.45, delay: 0.55, ease: expandEase }
								}
							>
								<Button
									asChild
									size="lg"
									className="rounded-none px-6 text-base shadow-lg shadow-primary/25"
								>
									<Link href="/contact">Get Started</Link>
								</Button>
							</motion.div>

							<button
								type="button"
								onClick={() => setIsOpen(!isOpen)}
								className="md:hidden ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-none border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/15"
								aria-expanded={isOpen}
								aria-label={isOpen ? "Close menu" : "Open menu"}
							/>
						</div>

						<AnimatePresence>
							{isOpen && (
								<motion.div
									initial={
										reducedMotion ? false : { opacity: 0, height: 0 }
									}
									animate={{ opacity: 1, height: "auto" }}
									exit={
										reducedMotion
											? undefined
											: { opacity: 0, height: 0 }
									}
									transition={menuTransition}
									className="md:hidden overflow-hidden border-t border-white/15"
								>
									<div className="flex flex-col gap-1 p-4">
										{navLinks.map((link) => (
											<NavLink
												key={link.href}
												href={link.href}
												label={link.label}
												onClick={() => setIsOpen(false)}
											/>
										))}
										<Button
											asChild
											className="mt-2 w-full rounded-none text-base"
										>
											<Link
												href="/contact"
												onClick={() => setIsOpen(false)}
											>
												Get Started
											</Link>
										</Button>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</motion.nav>
			</div>
		</header>
	);
}
