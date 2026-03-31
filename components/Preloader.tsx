"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
	const [isLoading, setIsLoading] = useState(true);
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		// Prevent scrolling during loading
		document.body.style.overflow = "hidden";

		// Stop loading after 7 seconds
		const timer = setTimeout(() => {
			setIsLoading(false);
			document.body.style.overflow = "auto";
		}, 7000);

		if (videoRef.current) {
			videoRef.current.playbackRate = 1.0;
		}

		return () => {
			clearTimeout(timer);
			document.body.style.overflow = "auto";
		};
	}, []);

	return (
		<AnimatePresence>
			{isLoading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
					className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
				>
					{/* Video background */}
					<div className="relative w-full h-full flex items-center justify-center">
						<video
							ref={videoRef}
							autoPlay
							muted
							playsInline
							onEnded={() => setIsLoading(false)}
							className="absolute min-w-[100vh] min-h-[100vw] object-cover rotate-90 pointer-events-none"
						>
							<source
								src="/db3435e8a2cac0cae1a59dc55dc7ad80.mp4"
								type="video/mp4"
							/>
							Your browser does not support the video tag.
						</video>
					</div>

					{/* Centered Logo */}
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
						className="absolute z-10 flex flex-col items-center justify-center"
					>
						{/* Light Glow/Blur background */}
						<div className="absolute w-96 h-96 md:w-[40rem] md:h-[40rem] bg-white/40 rounded-full blur-[100px] md:blur-[150px]" />
						<div className="absolute w-64 h-64 md:w-[25rem] md:h-[25rem] bg-white/30 rounded-full blur-[60px] md:blur-[100px]" />

						<div className="relative w-64 h-64 md:w-96 md:h-96 z-10">
							<Image
								src="/logo.png"
								alt="whsofttech logo"
								fill
								className="object-contain"
								priority
							/>
						</div>
					</motion.div>

					{/* Progress indicator */}
					<motion.div
						initial={{ width: 0 }}
						animate={{ width: "100%" }}
						transition={{ duration: 7, ease: "linear" }}
						className="absolute bottom-0 left-0 h-1 bg-primary z-20"
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
