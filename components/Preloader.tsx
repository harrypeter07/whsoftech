"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

export function Preloader() {
	const [isLoading, setIsLoading] = useState(true);
	const reducedMotion = useReducedMotion();

	useEffect(() => {
		document.body.style.overflow = "hidden";
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const ms = mq.matches ? 1000 : 4500;
		const id = window.setTimeout(() => {
			setIsLoading(false);
			document.body.style.overflow = "";
		}, ms);
		return () => {
			clearTimeout(id);
			document.body.style.overflow = "";
		};
	}, []);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: reducedMotion ? 0.25 : 0.55, ease: "easeInOut" }}
					className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#071426] overflow-hidden border-b border-white/15"
					aria-busy="true"
					aria-label="Loading"
				>
					<video
						autoPlay
						muted
						playsInline
						className="absolute inset-0 h-full w-full object-contain sm:object-cover object-center"
					>
						<source src="/db3435e8a2cac0cae1a59dc55dc7ad80.mp4" type="video/mp4" />
					</video>
					<div className="absolute inset-0 bg-black/45" />
					<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.35),transparent)] pointer-events-none" />
					<motion.div
						initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: reducedMotion ? 0 : 0.45, ease: "easeOut" }}
						className="relative z-10 flex flex-col items-center gap-5 px-6"
					>
						<div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-2xl border border-white/25 bg-white/[0.08] p-3 shadow-xl shadow-black/40 backdrop-blur-md">
							<Image
								src="/logo.png"
								alt=""
								fill
								className="object-contain p-1"
								priority
							/>
						</div>
						<p className="text-sm font-semibold tracking-[0.18em] text-slate-200">
							WH SoftTech
						</p>
					</motion.div>
					{!reducedMotion && (
						<motion.div
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 4.3, ease: "linear" }}
							className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-primary via-sky-400 to-primary"
						/>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
