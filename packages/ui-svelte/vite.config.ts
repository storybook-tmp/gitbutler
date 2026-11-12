import { playwright } from "@vitest/browser-playwright";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { storybookSveltekitPlugin } from "@storybook/sveltekit/vite-plugin";
import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";

export default {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$components: path.resolve("./src/lib/components"),
		},
	},
	test: {
		include: ["src/**/*.(test|spec).?(m)[jt]s?(x)"],
		projects: [
			{
				extends: true,
				test: { name: "unit" },
			},
			{
				extends: true,
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
		],
	},
	build: {
		sourcemap: true,
	},
};
