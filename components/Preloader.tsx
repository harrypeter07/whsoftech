"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";
import {
	LOGO_ALT,
	LOGO_HEIGHT,
	LOGO_PANEL_BG,
	LOGO_SRC,
	LOGO_WIDTH,
} from "@/lib/brand";
import { notifyPreloaderDone } from "@/lib/preloader-events";

const PRELOADER_VIDEO = "/db3435e8a2cac0cae1a59dc55dc7ad80.mp4";
const DESKTOP_MQ = "(min-width: 768px)";
const LOAD_MS = 10000;
const LOAD_MS_REDUCED = 2000;

/** Portrait video on mobile — fit without heavy zoom */
function fitPortraitVideo(video: HTMLVideoElement) {
	const vw = window.innerWidth;
	const vh = window.innerHeight;
	const w = video.videoWidth || 720;
	const h = video.videoHeight || 1280;
	const aspect = w / h;

	let width: number;
	let height: number;

	if (vw / vh > aspect) {
		height = vh;
		width = vh * aspect;
	} else {
		width = vw;
		height = vw / aspect;
	}

	video.style.width = `${width}px`;
	video.style.height = `${height}px`;
	video.style.left = "50%";
	video.style.top = "50%";
	video.style.transform = "translate(-50%, -50%)";
	video.style.position = "absolute";
	video.style.maxWidth = "none";
	video.style.maxHeight = "none";
	video.style.objectFit = "cover";
}

/** Desktop: rotate portrait 90° so it fills a landscape screen */
function fitRotatedDesktopVideo(video: HTMLVideoElement) {
	const vw = window.innerWidth;
	const vh = window.innerHeight;

	video.style.width = `${vh}px`;
	video.style.height = `${vw}px`;
	video.style.left = "50%";
	video.style.top = "50%";
	video.style.transform = "translate(-50%, -50%) rotate(90deg)";
	video.style.position = "absolute";
	video.style.maxWidth = "none";
	video.style.maxHeight = "none";
	video.style.objectFit = "cover";
}

export function Preloader() {
	const [isLoading, setIsLoading] = useState(true);
	const reducedMotion = useReducedMotion();
	const videoRef = useRef<HTMLVideoElement>(null);
	const desktopMqRef = useRef<MediaQueryList | null>(null);

	const fitVideo = useCallback(() => {
		const video = videoRef.current;
		if (!video) return;
		const isDesktop =
			desktopMqRef.current?.matches ??
			window.matchMedia(DESKTOP_MQ).matches;
		if (isDesktop) fitRotatedDesktopVideo(video);
		else fitPortraitVideo(video);
	}, []);

	useLayoutEffect(() => {
		const mq = window.matchMedia(DESKTOP_MQ);
		desktopMqRef.current = mq;
		fitVideo();
		mq.addEventListener("change", fitVideo);
		window.addEventListener("resize", fitVideo);
		window.visualViewport?.addEventListener("resize", fitVideo);
		return () => {
			mq.removeEventListener("change", fitVideo);
			window.removeEventListener("resize", fitVideo);
			window.visualViewport?.removeEventListener("resize", fitVideo);
		};
	}, [fitVideo]);

	useEffect(() => {
		document.body.style.overflow = "hidden";
		const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
		const ms = mq.matches ? LOAD_MS_REDUCED : LOAD_MS;
		const id = window.setTimeout(() => {
			setIsLoading(false);
			document.body.style.overflow = "";
			window.setTimeout(notifyPreloaderDone, mq.matches ? 350 : 700);
		}, ms);
		return () => {
			clearTimeout(id);
			document.body.style.overflow = "";
		};
	}, []);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const onReady = () => fitVideo();
		video.addEventListener("loadedmetadata", onReady);
		video.addEventListener("loadeddata", onReady);
		if (video.readyState >= 1) onReady();

		return () => {
			video.removeEventListener("loadedmetadata", onReady);
			video.removeEventListener("loadeddata", onReady);
		};
	}, [fitVideo]);

	const progressDuration = reducedMotion ? 1.8 : 9.8;

	return (
		<AnimatePresence onExitComplete={notifyPreloaderDone}>
			{isLoading && (
				<motion.div
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: reducedMotion ? 0.25 : 0.55,
						ease: "easeInOut",
					}}
					className="preloader-screen fixed inset-0 z-[9999] overflow-hidden bg-[#071426]"
					aria-busy="true"
					aria-label="Loading"
				>
					<div className="absolute inset-0 overflow-hidden">
						<video
							ref={videoRef}
							autoPlay
							muted
							playsInline
							preload="auto"
							className="pointer-events-none"
						>
							<source src={PRELOADER_VIDEO} type="video/mp4" />
						</video>
					</div>

					<div className="absolute inset-0 bg-black/25" />

					{/* Logo white fill clipped to inner hexagon (over video hex) */}
					<div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
						<motion.div
							initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: reducedMotion ? 0 : 0.5,
								ease: "easeOut",
							}}
							className="preloader-hex-clip relative flex items-center justify-center"
							style={{
								backgroundColor: LOGO_PANEL_BG,
								width: "min(64vw, 22rem)",
								height: "min(74vw, 25.5rem)",
							}}
						>
							<Image
								src={LOGO_SRC}
								alt={LOGO_ALT}
								width={LOGO_WIDTH}
								height={LOGO_HEIGHT}
								className="h-[96%] w-[96%] object-contain object-center"
								priority
								unoptimized
							/>
						</motion.div>
					</div>

					{!reducedMotion && (
						<motion.div
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: progressDuration, ease: "linear" }}
							className="absolute bottom-0 left-0 right-0 z-20 h-0.5 origin-left bg-gradient-to-r from-primary via-sky-400 to-primary"
						/>
					)}
				</motion.div>
			)}
		</AnimatePresence>
	);
}
