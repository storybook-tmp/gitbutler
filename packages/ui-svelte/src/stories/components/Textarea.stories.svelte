<script module lang="ts">
	import Textarea from "$components/Textarea.svelte";
	import { defineMeta } from "@storybook/sveltekit";

	function handleDescriptionKeyDown(e: KeyboardEvent) {
		if (e.key === "Escape") {
			// eslint-disable-next-line no-console
			console.log("keyboard", e.key);
			e.preventDefault();
			return;
		}

		if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
			// eslint-disable-next-line no-console
			console.log("keyboard", e.key);
			e.preventDefault();
			return;
		}
	}

	const { Story } = defineMeta({
		title: "Inputs / Textarea",
		component: Textarea,
	});
</script>

<script lang="ts">
</script>

<Story name="Custom Padding">
	{#snippet template()}
		<div class="wrapper">
			<Textarea
				onkeydown={handleDescriptionKeyDown}
				onfocus={(e) => {
					// eslint-disable-next-line no-console
					console.log("focus", e);
				}}
				padding={{
					bottom: 60,
				}}
				placeholder="Custom bottom padding…"
			/>
		</div>
	{/snippet}
</Story>

<Story name="Playground" />

<style lang="postcss">
	.wrapper {
		display: flex;
		flex-direction: column;
		max-width: 300px;
		gap: 12px;
	}
</style>
