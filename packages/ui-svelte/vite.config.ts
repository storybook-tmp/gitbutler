import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import staticAdapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
	plugins: [sveltekit({
	preprocess: vitePreprocess(),
		adapter: staticAdapter({
			pages: "build",
			assets: "build",
			fallback: "index.html",
			precompress: false,
			strict: false,
		}),
		alias: {
			$components: "src/lib/components",
		},
	compilerOptions: {
		css: "injected",
	},
})],
	resolve: {
		alias: {
			$components: path.resolve("./src/lib/components"),
		},
	},
	test: {
		include: ["src/**/*.(test|spec).?(m)[jt]s?(x)"],
	},
	build: {
		sourcemap: true,
	},
};
