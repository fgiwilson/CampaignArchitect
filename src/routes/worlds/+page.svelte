<script lang="ts">
	//import Card from "$lib/components/card.svelte";
	import HeroImage from '$lib/components/heroImage.svelte';
	import placeholder from '$lib/images/placeholder-hero.webp';
	import type { PageServerData } from './$types';

	export let data: PageServerData;
	let {pWorlds} = data;
</script>

<div >
	<HeroImage image={placeholder} alt="some alt text" />
</div>
<div class="mx-auto container">
	<div class="flex flex-col mt-4">
		<h1 class="text-4xl font-bold text-bittersweet my-2">Your Worlds</h1>
		<section class="my-5">
			<h2 class="text-2xl">Open an existing world</h2>
			<ul>
				{#each pWorlds as myWorld, i}
					<li>
						{myWorld.name}
					</li>
				{/each}
			</ul>
		</section>
	</div>
	<div class="flex">
		<section class="flex-row">
			<h2 class="text-2xl mb-5">Create a new world!</h2>
			<button class="p-2 bg-lightBlue hover:bg-cadetGray hover:text-lightBlue rounded"
				><a href="/worlds/create">Create new world</a></button
			>
		</section>
	</div>
</div>
