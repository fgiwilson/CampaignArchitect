<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/nav.svelte';
	import Footer from '$lib/components/footer.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	const children_render = $derived(children);
</script>

<div class="">
	<div class="flex">
		<Nav />
	</div>
	<div class="p-0">
		{@render children_render?.()}
	</div>
	<div class="flex">
		<Footer />
	</div>
</div>
