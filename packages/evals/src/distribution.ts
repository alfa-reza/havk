import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getPackageDir } from "@alfa-reza/havk";

type CodingAgentPackageJson = {
	piConfig?: {
		name?: string;
	};
};

const packageJson = JSON.parse(readFileSync(join(getPackageDir(), "package.json"), "utf8")) as CodingAgentPackageJson;

const appName = packageJson.piConfig?.name || "pi";

export const CODING_AGENT_DIR_ENV_NAME = `${appName.toUpperCase()}_CODING_AGENT_DIR`;
