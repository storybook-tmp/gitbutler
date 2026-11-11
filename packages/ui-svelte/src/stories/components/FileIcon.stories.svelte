<script module lang="ts">
	import FileIcon from "$components/file/FileIcon.svelte";
	import { defineMeta } from "@storybook/sveltekit";

	const { Story } = defineMeta({
		title: "Basic / FileIcon",
		component: FileIcon,
		args: {
			fileName: "file.txt",
		},
		argTypes: {},
	});
</script>

<Story name="Playground" />
