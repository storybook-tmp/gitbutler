/// <reference types="vitest/config" />
import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import { defineConfig } from "vitest/config";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

export default {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve("./src/lib/components"),
		},
	},
	test: {
		projects: [
			{
				extends: true,
				test: {
					include: ["src/**/*.(test|spec).?(m)[jt]s?(x)"],
				},
			},
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({ configDir: path.join(import.meta.dirname, ".storybook") }),
				],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [{ browser: "chromium" }],
					},
				},
			},
		],
	},
	build: {
		sourcemap: true,
	},
};
