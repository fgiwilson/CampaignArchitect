<script lang="ts">
	import HeroImage from '$lib/components/heroImage.svelte';
	import placeholder from '$lib/images/placeholder-hero.webp';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let { theWorld } = data;
</script>

<HeroImage image={placeholder} alt="some alt text" />
<div class="mx-auto container">
	<div class="flex flex-col mt-4">
		<h1 class="text-4xl font-bold text-bittersweet my-2 border-b-2">{theWorld.name}</h1>
        <h3 class="text-2xl text-bold text-cadetGray my-1">Description</h3>
		<p class="text-lg my-3 ml-2">{theWorld.mainDesc}</p>
        <h2 class="text-2xl font-bold text-paynesGray my-2 border-b-2">Campaigns in {theWorld.name}</h2>
	</div>
</div>

<style>
</style>
