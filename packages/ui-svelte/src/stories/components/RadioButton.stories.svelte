<script module lang="ts">
	import RadioButton from "$components/RadioButton.svelte";
	import { defineMeta } from "@storybook/sveltekit";

	const { Story } = defineMeta({
		title: "Inputs / RadioButton",
		component: RadioButton,
	});
</script>

<Story name="Playground" />
