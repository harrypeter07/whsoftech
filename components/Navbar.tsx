"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

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

	const menuVariants: Variants = {
		closed: {
			width: "100px",
			height: "40px",
			top: "0px",
			right: "0px",
			transition: { duration: 0.75, delay: 0.35, type: "tween" as const, ease: [0.76, 0, 0.24, 1] as const }
		},
		open: {
			width: "480px",
			height: "650px",
			top: "-25px",
			right: "-25px",
			transition: { duration: 0.75, type: "tween" as const, ease: [0.76, 0, 0.24, 1] as const }
		}
	};

	const perspective = {
		initial: {
			opacity: 0,
			rotateX: 90,
			translateY: 80,
			translateX: -20,
		},
		enter: (i: number) => ({
			opacity: 1,
			rotateX: 0,
			translateY: 0,
			translateX: 0,
			transition: {
				duration: 0.65, 
				delay: 0.5 + (i * 0.1), 
				ease: [.215,.61,.355,1] as const,
				opacity: { duration: 0.35 }
			}
		}),
		exit: {
			opacity: 0,
			transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }
		}
	};

	const slideIn = {
		initial: {
			opacity: 0,
			y: 20
		},
		enter: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { 
				duration: 0.5,
				delay: 0.75 + (i * 0.1), 
				ease: [.215,.61,.355,1] as const
			}
		}),
		exit: {
			opacity: 0,
			transition: { duration: 0.5, type: "tween" as const, ease: "easeInOut" as const }
		}
	};

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
		<nav className="fixed top-0 right-0 z-50">
			<div className="relative">
				{/* Mobile Menu Button */}
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden p-3 text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 relative overflow-hidden"
					aria-label="Toggle menu"
				>
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
						initial={false}
						animate={isOpen ? "open" : "closed"}
						variants={{
							open: { rotate: 45 },
							closed: { rotate: 0 }
						}}
						transition={{ duration: 0.2 }}
					>
						<div className="relative z-10">
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</div>
					</motion.div>
				</motion.button>
				{/* Mobile Navigation */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							ref={mobileMenuRef}
							initial="closed"
							animate="open"
							exit="closed"
							variants={menuVariants}
							className="absolute top-0 right-0 w-[480px] h-[650px] bg-[#c9fd74] rounded-[25px] z-40"
						>
							<div className="flex flex-col justify-between h-full p-[60px_30px_30px_80px]">
								{/* Logo + Company name */}
								<Link href="/" className="flex items-center gap-2 sm:gap-3 text-primary font-semibold group" aria-label="whsofttech Home">
									<div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 group-hover:scale-110 transition-transform">
										<Image
											src="/logo.png"
											alt="whsofttech"
											fill
											className="object-contain"
										/>
									</div>
									<span className="text-base sm:text-lg font-bold group-hover:text-accent transition-colors duration-300">whsofttech</span>
								</Link>
								<div className="flex-1 overflow-y-auto">
									<div className="flex gap-[10px] flex-col">
										{navLinks.map((link, i) => (
											<motion.div
												key={`b_${i}`}
												className="relative"
												custom={i}
												variants={perspective}
												initial="initial"
												animate="enter"
												exit="exit"
											>
													<a className="text-decoration-none text-black text-[36px]">
													{link.label}
												</a>
											</motion.div>
										))}
									</div>
								</div>
								<motion.div className="flex flex-wrap gap-2" variants={slideIn}>
									{[
										{ title: "Facebook", href: "/" },
										{ title: "LinkedIn", href: "/" },
										{ title: "Instagram", href: "/" },
										{ title: "Twitter", href: "/" }
									].map((link, i) => (
										<motion.a
											variants={slideIn}
											custom={i} 
											initial="initial"
											animate="enter"
											exit="exit"
											key={`f_${i}`}
											className="text-black text-sm hover:text-primary transition-colors"
										>
											{link.title}
										</motion.a>
									))}
								</motion.div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
}
