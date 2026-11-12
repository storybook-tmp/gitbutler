<script module lang="ts">
	import ButPcAvatar from "$components/ButPcAvatar.svelte";
	import { defineMeta } from "@storybook/sveltekit";

	const { Story } = defineMeta({
		title: "Avatar / ButPcAvatar",
		component: ButPcAvatar,
		args: {},
	});
</script>

<Story name="Default" />
