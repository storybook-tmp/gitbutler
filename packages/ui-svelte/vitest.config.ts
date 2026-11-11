import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { storybookSveltekitPlugin } from "@storybook/sveltekit/vite-plugin";

export default defineConfig({ test: { projects: [
	"vite.config.ts",
	{
		extends: "vite.config.ts",
		plugins: [
			storybookTest({ storybookScript: "pnpm storybook --ci" }),
			storybookSveltekitPlugin(),
		],
		test: {
			name: "storybook",
			browser: {
				enabled: true,
				headless: true,
				instances: [{ browser: "chromium" }],
				provider: playwright(),
			},
		},
	},
] } });
