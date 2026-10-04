import { foregroundAnsi, isAppleTerminalSession, rgbColor } from "@earendil-works/pi-tui";
import { theme } from "../theme/theme.ts";

const CORAL = rgbColor(228, 138, 122);
const BLUE = rgbColor(79, 142, 179);
const YELLOW = rgbColor(234, 182, 93);
const RESET = "\x1b[0m";

/**
 * Havk's user-facing two-line wordmark. Source-level pi names are intentionally retained
 * to minimize divergence from the upstream implementation.
 */
export function piLogoLines(): [string, string] {
	const mode = theme.getColorMode();
	const fg = (color: typeof CORAL) => foregroundAnsi(color, mode);
	const top = `${fg(CORAL)}HA${RESET}${fg(YELLOW)}VK${RESET}`;
	const bottom = `${fg(BLUE)}━━━━${RESET}`;
	return [top, bottom];
}

/**
 * Whether the terminal renders the half-block logo correctly. Apple Terminal draws gaps between rows and
 * misaligns the half blocks, so it gets the text wordmark instead.
 */
export function supportsPiLogo(): boolean {
	return !isAppleTerminalSession();
}

/** Text fallback for the logo: "Havk" with the logo's coral and yellow. */
export function piWordmark(): string {
	const mode = theme.getColorMode();
	return `${foregroundAnsi(CORAL, mode)}H${RESET}${foregroundAnsi(YELLOW, mode)}avk${RESET}`;
}
