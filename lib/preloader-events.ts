/** Fired once the loading screen has fully exited and the page is visible. */
export const PRELOADER_DONE_EVENT = "whs:preloader-done";
const PRELOADER_DONE_KEY = "whs-preloader-done";

export function notifyPreloaderDone(): void {
	if (typeof window === "undefined") return;
	try {
		sessionStorage.setItem(PRELOADER_DONE_KEY, "1");
	} catch {
		/* private mode */
	}
	window.dispatchEvent(new CustomEvent(PRELOADER_DONE_EVENT));
}

export function hasPreloaderCompleted(): boolean {
	if (typeof window === "undefined") return false;
	try {
		return sessionStorage.getItem(PRELOADER_DONE_KEY) === "1";
	} catch {
		return false;
	}
}
