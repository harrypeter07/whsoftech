"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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

	const menuVariants = {
		closed: {
			width: "100px",
			height: "40px",
			top: "0px",
			right: "0px",
			transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
		},
		open: {
			width: "480px",
			height: "650px",
			top: "-25px",
			right: "-25px",
			transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
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
				ease: [.215,.61,.355,1],
				opacity: { duration: 0.35 }
			}
		}),
		exit: {
			opacity: 0,
			transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
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
				ease: [.215,.61,.355,1]
			}
		}),
		exit: {
			opacity: 0,
			transition: { duration: 0.5, type: "tween", ease: "easeInOut" }
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
				{/* Menu Button */}
				<motion.div 
					className="relative"
					variants={menuVariants}
					animate={isOpen ? "open" : "closed"}
					initial="closed"
				>
					<div className="relative z-10">
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
							{isOpen ? <X size={20} /> : <Menu size={20} />}
						</div>
					</motion.div>
					<div 
						className="absolute inset-0 flex items-center justify-center"
						style={{ transformStyle: "preserve-3d", perspective: "120px", perspectiveOrigin: "bottom" }}
					>
						<motion.div
							className="relative"
						custom={0}
						variants={perspective}
						initial="initial"
						animate="enter"
						exit="exit"
					>
						<a>
							<Menu />
						</a>
						</motion.div>
					</div>
				</div>
				</motion.div>

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
						<div className="flex flex-col justify-between h-full p-[100px_40px_50px_40px]">
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
								<a className="text-decoration-none text-black text-[46px]">
									{link.label}
								</a>
							</motion.div>
						))}
						</div>
					</div>
						<motion.div className="flex flex-wrap" variants={slideIn}>
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
		</div>
		</nav>
	);
}
